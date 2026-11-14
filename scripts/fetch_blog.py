"""네이버 블로그 강의 후기 → 홈페이지 배너·후기 칸 자동 갱신.

GitHub 자동 작업(.github/workflows/blog.yml)이 몇 시간마다 실행합니다.
- data/blog-config.json 의 categories(카테고리 이름)가 비어 있으면,
  제목이나 카테고리에 keywords(예: 후기, 출강)가 들어간 글만 가져옵니다.
- 각 글의 대표사진을 img/blog/ 에 저장하고 data/blog.json 을 새로 씁니다.
- 실패하면 기존 data/blog.json 을 건드리지 않습니다(배너가 비지 않음).
"""
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CFG = json.load(open(os.path.join(ROOT, "data", "blog-config.json"), encoding="utf-8"))
OUT = os.path.join(ROOT, "data", "blog.json")
IMG_DIR = os.path.join(ROOT, "img", "blog")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
KST = timezone(timedelta(hours=9))


def get(url, referer="https://blog.naver.com/"):
    url = urllib.parse.quote(url, safe=":/?=&%#~+,;@!$'()*")
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": referer})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def clean_link(link):
    link = link.split("?")[0].strip()
    m = re.search(r"blog\.naver\.com/([^/]+)/(\d+)", link)
    if m:
        return "https://blog.naver.com/%s/%s" % (m.group(1), m.group(2)), m.group(2)
    m = re.search(r"logNo=(\d+)", link)
    return link, (m.group(1) if m else re.sub(r"\W", "", link)[-12:])


def wanted(title, cat):
    cats = CFG.get("categories") or []
    if cats:
        return cat in cats
    text = (title or "") + " " + (cat or "")
    return any(k in text for k in CFG.get("keywords", []))


_PAGES = {}


def post_page(log_no):
    if log_no not in _PAGES:
        try:
            _PAGES[log_no] = get("https://m.blog.naver.com/%s/%s" % (CFG["blog_id"], log_no)).decode("utf-8", "ignore")
        except Exception as e:  # noqa: BLE001
            print("  글 읽기 실패", log_no, e)
            _PAGES[log_no] = ""
    return _PAGES[log_no]


def _base(u):
    return re.sub(r"\?.*$", "", html.unescape(u or ""))


def photo_candidates(log_no):
    """글 본문 속 실제 강의 현장 사진 주소 (대표 썸네일·제목 카드 제외).

    본문 사진 순서대로 보고, 첫 사진(보통 썸네일 카드)과 대표사진은 건너뛴 뒤
    가로가 더 긴 사진을 우선 고릅니다."""
    page = post_page(log_no)
    if not page:
        return []
    og = og_image(log_no)
    skip = {_base(og)} if og else set()
    found = []  # (주소, 가로, 세로)
    for m in re.finditer(r"data-linkdata='([^']+)'", page):
        try:
            d = json.loads(html.unescape(m.group(1)))
        except Exception:  # noqa: BLE001
            continue
        src = d.get("src") or ""
        if "pstatic.net" not in src:
            continue
        try:
            w, h = int(d.get("originalWidth") or 0), int(d.get("originalHeight") or 0)
        except ValueError:
            w = h = 0
        found.append((src, w, h))
    if not found:
        for m in re.finditer(r'data-lazy-src="([^"]+)"', page):
            if "pstatic.net" in m.group(1):
                found.append((html.unescape(m.group(1)), 0, 0))
    seen, uniq = set(), []
    for src, w, h in found:
        b = _base(src)
        if b in seen:
            continue
        seen.add(b)
        uniq.append((b, w, h))
    body = [x for i, x in enumerate(uniq) if i > 0 and x[0] not in skip]
    if not body:
        return []
    # 가로 사진 중 너무 납작한 배너(가로:세로 1.9 넘음)는 빼고,
    # 글 앞뒤의 명함·안내 카드를 피하려고 본문 가운데쯤 사진을 고름
    land = [x for x in body if x[1] and x[2] and x[2] * 1.15 < x[1] < x[2] * 1.9]
    pool = land or body
    pick = pool[len(pool) // 2][0]
    return [pick + "?type=w966", pick + "?type=w773", pick]


def og_image(log_no):
    try:
        page = post_page(log_no)
        m = re.search(r'property="og:image"\s+content="([^"]+)"', page) or re.search(r'content="([^"]+)"\s+property="og:image"', page)
        if m:
            return html.unescape(m.group(1))
    except Exception as e:  # noqa: BLE001
        print("  og:image 실패", log_no, e)
    return None


def candidates(desc, log_no):
    urls = []
    og = og_image(log_no)
    if og:
        urls.append(og)
    m = re.search(r'<img[^>]+src="([^"]+)"', desc or "")
    if m:
        urls.append(html.unescape(m.group(1)))
    out = []
    for u in urls:
        base = re.sub(r"\?type=[^&]*$", "", u)
        for v in (base + "?type=w966", u, base):
            if v not in out:
                out.append(v)
    return out


def shrink(path):
    """사진을 가로 1000px, 품질 80으로 줄여 홈페이지가 빨리 열리게 함 (Pillow 있을 때만)."""
    try:
        from PIL import Image
    except ImportError:
        return
    try:
        im = Image.open(path)
        im = im.convert("RGB")
        if im.width > 1000:
            im = im.resize((1000, round(im.height * 1000 / im.width)))
        im.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    except Exception as e:  # noqa: BLE001
        print("  사진 줄이기 실패", path, e)


def download(urls):
    last = None
    for u in urls:
        try:
            data = get(u)
            if len(data) > 3000:
                return data
        except Exception as e:  # noqa: BLE001
            last = e
    raise ValueError("사진을 받지 못함 (%s)" % last)


def main():
    rss = get("https://rss.blog.naver.com/%s.xml" % CFG["blog_id"])
    root = ET.fromstring(rss)
    items, keep_files = [], set()
    exclude = set(CFG.get("exclude_links") or [])
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        cat = (it.findtext("category") or "").strip()
        link, log_no = clean_link(it.findtext("link") or "")
        print("  [%s] %s" % (cat, title[:40]))
        if link in exclude or not wanted(title, cat):
            continue
        fname = "%s.jpg" % log_no
        path = os.path.join(IMG_DIR, fname)
        if not os.path.exists(path):
            try:
                open(path, "wb").write(download(candidates(it.findtext("description") or "", log_no)))
                shrink(path)
            except Exception as e:  # noqa: BLE001
                print("  사진 저장 실패:", title, e)
                continue
        keep_files.add(fname)
        photo = None
        pname = "%s-p.jpg" % log_no
        ppath = os.path.join(IMG_DIR, pname)
        if not os.path.exists(ppath):
            try:
                urls = photo_candidates(log_no)
                if urls:
                    open(ppath, "wb").write(download(urls))
                    shrink(ppath)
            except Exception as e:  # noqa: BLE001
                print("  현장 사진 저장 실패:", title, e)
                if os.path.exists(ppath):
                    os.remove(ppath)
        if os.path.exists(ppath):
            keep_files.add(pname)
            photo = "/img/blog/" + pname
        try:
            d = parsedate_to_datetime(it.findtext("pubDate")).astimezone(KST).strftime("%Y.%m.%d")
        except Exception:  # noqa: BLE001
            d = ""
        items.append({"title": title, "date": d, "link": link, "img": "/img/blog/" + fname,
                      "photo": photo, "category": cat})
        print("  가져옴:", d, title)
        if len(items) >= CFG.get("max_items", 12):
            break

    if not items:
        print("가져온 후기가 없어 기존 목록을 그대로 둡니다.")
        return 0
    for f in os.listdir(IMG_DIR):
        if f.endswith(".jpg") and f not in keep_files:
            os.remove(os.path.join(IMG_DIR, f))
    old = {}
    if os.path.exists(OUT):
        try:
            old = json.load(open(OUT, encoding="utf-8"))
        except Exception:  # noqa: BLE001
            old = {}
    if old.get("items") == items:
        print("바뀐 내용 없음")
        return 0
    json.dump({"updated": datetime.now(KST).strftime("%Y-%m-%d %H:%M"), "items": items},
              open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("후기 %d개로 갱신" % len(items))
    return 0


if __name__ == "__main__":
    sys.exit(main())
