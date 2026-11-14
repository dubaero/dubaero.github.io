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


def find_image(desc, log_no):
    m = re.search(r'<img[^>]+src="([^"]+)"', desc or "")
    if m:
        return html.unescape(m.group(1))
    try:
        page = get("https://m.blog.naver.com/%s/%s" % (CFG["blog_id"], log_no)).decode("utf-8", "ignore")
        m = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', page)
        if m:
            return html.unescape(m.group(1))
    except Exception as e:  # noqa: BLE001
        print("  og:image 실패", log_no, e)
    return None


def bigger(url):
    # 네이버 사진 주소는 type=w966 을 붙이면 적당한 크기로 받아짐
    if "pstatic.net" in url:
        url = re.sub(r"\?type=[^&]*", "", url)
        url += ("&" if "?" in url else "?") + "type=w966"
    return url


def main():
    rss = get("https://rss.blog.naver.com/%s.xml" % CFG["blog_id"])
    root = ET.fromstring(rss)
    items, keep_files = [], set()
    exclude = set(CFG.get("exclude_links") or [])
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        cat = (it.findtext("category") or "").strip()
        link, log_no = clean_link(it.findtext("link") or "")
        if link in exclude or not wanted(title, cat):
            continue
        img = find_image(it.findtext("description") or "", log_no)
        if not img:
            print("  대표사진 없음:", title)
            continue
        fname = "%s.jpg" % log_no
        path = os.path.join(IMG_DIR, fname)
        if not os.path.exists(path):
            try:
                data = get(bigger(img))
                if len(data) < 2000:
                    raise ValueError("이미지가 너무 작음")
                open(path, "wb").write(data)
            except Exception as e:  # noqa: BLE001
                print("  사진 저장 실패:", title, e)
                continue
        keep_files.add(fname)
        try:
            d = parsedate_to_datetime(it.findtext("pubDate")).astimezone(KST).strftime("%Y.%m.%d")
        except Exception:  # noqa: BLE001
            d = ""
        items.append({"title": title, "date": d, "link": link, "img": "/img/blog/" + fname, "category": cat})
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
