/*!
 * 안심 필터 — 개인정보 가리기 엔진 v1
 * 모든 처리는 이용자 브라우저 안에서만 일어납니다. 어떤 값도 서버로 보내지 않습니다.
 * 외부 라이브러리(SheetJS, JSZip, Tesseract.js)는 페이지에서 필요할 때만 불러옵니다.
 */
(function (global) {
  'use strict';

  var W_NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
  var XML_NS = 'http://www.w3.org/XML/1998/namespace';

  /* 흔한 성씨 — '홍길동 님'처럼 이름 뒤에 님이 붙은 경우를 찾는 데 씁니다. */
  var SURNAME = '김이박최정강조윤장임한오서신권황안송유류홍전고문양손배백허남심노하곽성차주우구민진지엄채원천방공현함변염여추도소석선설마길연위표명기반왕금옥육인맹제모탁국어은편용예경봉사부가복태목형피두감음빈동온호범좌팽승간상시갈단견당화창순주';

  /* 이름으로 보이지만 실제로는 일반 명사인 것들 — 잘못 가리지 않도록 뺍니다. */
  var NAME_STOP = {
    '고객': 1, '선생': 1, '사장': 1, '부장': 1, '과장': 1, '차장': 1, '팀장': 1, '원장': 1,
    '교수': 1, '회장': 1, '대표': 1, '기사': 1, '주무관': 1, '담당': 1, '학부모': 1,
    '부모': 1, '회원': 1, '직원': 1, '사용': 1, '관리': 1, '신청': 1, '문의': 1, '안내': 1,
    '여러분': 1, '선배': 1, '동료': 1, '본인': 1, '당사자': 1, '보호자': 1, '수강생': 1,
    '참석자': 1, '담당자': 1, '신청인': 1, '신청자': 1, '대표자': 1, '작성자': 1, '학생': 1,
    '어머니': 1, '아버지': 1, '할머니': 1, '할아버지': 1, '부모님': 1, '선생님': 1, '사모님': 1,
    '우리': 1, '저희': 1, '모두': 1, '환영': 1, '감사': 1
  };

  /* 표(엑셀·워드)의 '이름' 열 머리글 — 이 열의 값은 이름으로 보고 가립니다. */
  var NAME_HEADERS = {
    '이름': 1, '성명': 1, '신청인': 1, '신청자': 1, '수강생': 1, '참석자': 1,
    '보호자': 1, '학생': 1, '대상자': 1, '내담자': 1, '직원명': 1, '성함': 1
  };
  var NAME_LIKE = /^[가-힣]{2,4}$/;
  /* '계좌번호'처럼 이름 자리에 놓인 항목 이름은 이름이 아닙니다. */
  var NOT_NAME = /(번호|주소|전화|메일|명단|비고|일시|장소|구분|성별|나이|연번|기관|직위|성함|이름|계좌|카드)$/;

  function isNameValue(v) {
    return !!v && NAME_LIKE.test(v) && !NAME_STOP[v] && !NAME_HEADERS[v] && !NOT_NAME.test(v);
  }

  function repeat(ch, n) {
    var s = '';
    for (var i = 0; i < n; i++) s += ch;
    return s;
  }

  function maskName(n) {
    if (!n) return '';
    return n.charAt(0) + repeat('○', Math.max(0, n.length - 1));
  }

  /* =========================================================
     규칙 정의
     - pre: 정규식 1번 그룹이 '앞 글자(경계)'일 때만 1로 둡니다. (가리기 대상에서 빠집니다)
     - group: 가릴 부분이 n번 그룹일 때 지정합니다. (예: '성명: 홍길동'에서 이름만)
     - build(m): 전체 일치 문자열에 대한 '가린 결과'를 돌려줍니다.
     - buildGroup(m): group으로 지정한 부분에 넣을 '가린 값'을 돌려줍니다.
     - ok(m): true를 돌려줄 때만 가립니다. (오탐 방지)
     ========================================================= */
  var RULES = [
    {
      id: 'rrn', label: '주민등록번호', pre: 1,
      // 900101-1234567 / 9001011234567
      re: /(^|\D)(\d{6})-?([1-9]\d{6})(?!\d)/g,
      ok: function (m) {
        var mm = parseInt(m[2].slice(2, 4), 10);
        var dd = parseInt(m[2].slice(4, 6), 10);
        return mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31;
      },
      build: function (m) { return m[1] + m[2] + '-' + '*******'; }
    },
    {
      id: 'phone', label: '휴대전화', pre: 1,
      // 010-1234-5678 / 01012345678 / 010.1234.5678
      re: /(^|\D)(01[016789])[-.\s]?(\d{3,4})[-.\s]?(\d{4})(?!\d)/g,
      build: function (m) { return m[1] + m[2] + '-****-****'; }
    },
    {
      id: 'phone', label: '휴대전화', pre: 1,
      // +82 10-1234-5678
      re: /(^|\D)(?:\+82|\+?82)[-.\s]?(10)[-.\s]?(\d{3,4})[-.\s]?(\d{4})(?!\d)/g,
      build: function (m) { return m[1] + '010-****-****'; }
    },
    {
      id: 'tel', label: '일반전화', pre: 1,
      // 063-123-4567 / 02-1234-5678 / 070-1234-5678
      re: /(^|\D)(0(?:2|70|[3-6]\d))[-.\s]?(\d{3,4})[-.\s]?(\d{4})(?!\d)/g,
      build: function (m) { return m[1] + m[2] + '-****-****'; }
    },
    {
      id: 'email', label: '이메일', pre: 1,
      re: /(^|[^A-Za-z0-9._%+-])([A-Za-z0-9._%+-]+)@([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)/g,
      build: function (m) {
        var local = m[2];
        return m[1] + local.charAt(0) + '***@' + m[3];
      }
    },
    {
      id: 'card', label: '카드번호', pre: 1,
      re: /(^|\D)(\d{4})[-\s]?(\d{4})[-\s]?(\d{4})[-\s]?(\d{4})(?!\d)/g,
      build: function (m) { return m[1] + '****-****-****-' + m[5]; }
    },
    {
      id: 'account', label: '계좌번호', pre: 1,
      // 110-123-456789 / 1002-345-678901 (숫자 10~16자리, 하이픈 포함)
      re: /(^|\D)(\d{2,6}(?:-\d{2,6}){1,4})(?!\d)/g,
      ok: function (m) {
        var v = m[2];
        var d = v.replace(/\D/g, '');
        if (d.length < 10 || d.length > 16) return false;
        if (/^\d{3}-\d{2}-\d{5}$/.test(v)) return false;            // 사업자등록번호
        if (/^\d{4}-(?:0[1-9]|1[0-2])-\d{2}(?:-\d{2})?$/.test(v)) return false; // 날짜·예약번호
        return true;
      },
      build: function (m) {
        var s = m[2], keep = 4, out = '';
        for (var i = s.length - 1; i >= 0; i--) {
          var ch = s.charAt(i);
          if (/\d/.test(ch)) {
            if (keep > 0) { out = ch + out; keep--; } else { out = '*' + out; }
          } else {
            out = ch + out;
          }
        }
        return m[1] + out;
      }
    },
    {
      id: 'plate', label: '차량번호', pre: 1,
      // 12가3456 / 123가4567
      re: /(^|[^가-힣\d])(\d{2,3})([가-힣])(\d{4})(?!\d)/g,
      // '12월3456'처럼 숫자 뒤에 단위 글자가 오는 경우는 차량번호가 아닙니다.
      ok: function (m) { return !/[월년일시분초개명번회층호원주과팀대종]/.test(m[3]); },
      build: function (m) { return m[1] + m[2] + m[3] + '****'; }
    },
    {
      id: 'addr', label: '주소', pre: 1,
      // 서울특별시 영등포구 신길로17길 26-12 → ... 신길로17길 ***
      re: /(^|[^가-힣])((?:서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|충청|전북|전남|전라|경북|경남|경상|제주)[가-힣]*(?:특별시|광역시|특별자치시|특별자치도|도)?\s+[가-힣]+(?:시|군|구)(?:\s+[가-힣]+(?:구|군))?\s+[가-힣0-9·]+(?:로|길|동|읍|면|리)(?:\s*\d+번길)?)(\s+\d+(?:-\d+)?(?:번지)?(?:\s+\d+(?:호|층|동))?)/g,
      build: function (m) { return m[1] + m[2] + ' ***'; }
    },
    {
      id: 'name', label: '이름', group: 2,
      // 성명: 홍길동 / 신청인 김민수
      re: /(성명|성함|이름|신청인|신청자|대표자|담당자|수강생|참석자|작성자|보호자|학생|직원|귀하)\s*[:：]?\s*([가-힣]{2,4})(?![가-힣])/g,
      ok: function (m) { return !NAME_STOP[m[2]]; },
      buildGroup: function (m) { return maskName(m[2]); }
    },
    {
      id: 'name', label: '이름', group: 1,
      // 홍길동 님 / 김민수 씨
      re: new RegExp('([' + SURNAME + '][가-힣]{1,3})\\s*(?:님|씨|귀하)', 'g'),
      ok: function (m) { return !NAME_STOP[m[1]]; },
      buildGroup: function (m) { return maskName(m[1]); }
    },
    {
      id: 'birth', label: '생년월일', group: 3,
      // 생년월일: 1990.1.1
      re: /(생년월일|생일|출생일|출생년월일)([ \t]*[:：]?[ \t]*)((?:19|20)\d{2}[ \t]*[년.\-/][ \t]*\d{1,2}[ \t]*[월.\-/][ \t]*\d{1,2}(?:[ \t]*일)?)/g,
      ok: function (m) {
        var d = m[3].match(/\d+/g) || [];
        var mm = parseInt(d[1], 10), dd = parseInt(d[2], 10);
        return mm >= 1 && mm <= 12 && dd >= 1 && dd <= 31;
      },
      buildGroup: function (m) {
        var g = m[3].match(/\d+/g) || [];
        return g[0] + '년 **월 **일';
      }
    }
  ];

  function overlaps(list, s, e) {
    for (var i = 0; i < list.length; i++) {
      if (s < list[i][1] && list[i][0] < e) return true;
    }
    return false;
  }

  /* 글자 하나에서 개인정보 후보를 모두 찾습니다. */
  function scan(text) {
    var found = [];
    var claimed = [];
    if (!text) return found;
    for (var r = 0; r < RULES.length; r++) {
      var rule = RULES[r];
      var re = rule.re;
      re.lastIndex = 0;
      var m;
      while ((m = re.exec(text)) !== null) {
        if (!m[0]) { re.lastIndex++; continue; }
        var start, original, replacement;
        if (rule.group) {
          var g = m[rule.group];
          if (!g) continue;
          var off = m[0].lastIndexOf(g);
          if (off < 0) continue;
          start = m.index + off;
          original = g;
          replacement = rule.buildGroup ? rule.buildGroup(m) : maskName(g);
        } else {
          var preLen = rule.pre && m[1] ? m[1].length : 0;
          start = m.index + preLen;
          original = m[0].slice(preLen);
          replacement = rule.build(m).slice(preLen);
        }
        if (!original) continue;
        var end = start + original.length;
        if (overlaps(claimed, start, end)) continue;
        if (rule.ok && !rule.ok(m)) continue;
        if (!replacement || replacement === original) continue;
        found.push({
          type: rule.id, label: rule.label,
          original: original, replacement: replacement,
          start: start, end: end
        });
        claimed.push([start, end]);
      }
    }
    found.sort(function (a, b) { return a.start - b.start; });
    return found;
  }

  /* 같은 값이 여러 번 나오면 목록에서 한 번만 다루도록 합칩니다. */
  function unique(items) {
    var out = [], map = {};
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      var key = it.type + '\u0000' + it.original;
      if (map[key]) { map[key].count++; continue; }
      var copy = {
        type: it.type, label: it.label, original: it.original,
        replacement: it.replacement, enabled: true, count: 1
      };
      map[key] = copy;
      out.push(copy);
    }
    return out;
  }

  /* 켜져 있는 항목만 실제로 치환합니다. (긴 값부터 바꿔 겹침을 피합니다) */
  function applyItems(text, items) {
    var out = text;
    if (!out || !items || !items.length) return out;
    var list = [];
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.enabled === false || !it.original) continue;
      if (it.original === it.replacement) continue;
      list.push(it);
    }
    list.sort(function (a, b) { return b.original.length - a.original.length; });
    for (var j = 0; j < list.length; j++) {
      out = out.split(list[j].original).join(list[j].replacement);
    }
    return out;
  }

  function summarize(items) {
    var order = [], counts = {}, total = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].enabled === false) continue;
      var l = items[i].label;
      if (!counts[l]) { counts[l] = 0; order.push(l); }
      counts[l] += items[i].count || 1;
      total += items[i].count || 1;
    }
    return { total: total, chips: order.map(function (l) { return { label: l, count: counts[l] }; }) };
  }

  /* =========================================================
     워드(.docx) — 문단 안의 글자 조각(w:t)을 합쳐 찾고, 나눠 담습니다.
     글꼴·표·그림 같은 서식은 건드리지 않습니다.
     ========================================================= */
  function maskParagraphRuns(texts, items) {
    var full = texts.join('');
    var hits = [];
    if (full) {
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (it.enabled === false || !it.original) continue;
        var idx = full.indexOf(it.original);
        while (idx !== -1) {
          hits.push({ s: idx, e: idx + it.original.length, rep: it.replacement });
          idx = full.indexOf(it.original, idx + it.original.length);
        }
      }
    }
    if (!hits.length) return texts.slice();
    hits.sort(function (a, b) { return a.s - b.s || b.e - a.e; });
    var clean = [], lastEnd = -1;
    for (var k = 0; k < hits.length; k++) {
      if (hits[k].s >= lastEnd) { clean.push(hits[k]); lastEnd = hits[k].e; }
    }
    var out = '', map = [], pos = 0, r, ch, n;
    for (var q = 0; q < clean.length; q++) {
      r = clean[q];
      out += full.slice(pos, r.s);
      for (n = pos; n < r.s; n++) map.push(n);
      for (n = 0; n < r.rep.length; n++) { out += r.rep.charAt(n); map.push(r.s); }
      pos = r.e;
    }
    out += full.slice(pos);
    for (n = pos; n < full.length; n++) map.push(n);

    var res = [], idxOut = 0, from = 0;
    for (var t = 0; t < texts.length; t++) {
      var to = from + texts[t].length, piece = '';
      while (idxOut < out.length && map[idxOut] < to) { piece += out.charAt(idxOut); idxOut++; }
      res.push(piece);
      from = to;
    }
    return res;
  }

  var DOCX_PARTS = /^word\/(document|header\d*|footer\d*|footnotes|endnotes)\.xml$/;

  function partLabel(name) {
    if (/^word\/document/.test(name)) return '본문';
    if (/header/.test(name)) return '머리글';
    if (/footer/.test(name)) return '바닥글';
    if (/footnotes/.test(name)) return '각주';
    if (/endnotes/.test(name)) return '미주';
    return name;
  }

  function elementText(el) {
    var ts = el.getElementsByTagNameNS(W_NS, 't'), s = '';
    for (var i = 0; i < ts.length; i++) s += ts[i].textContent;
    return s;
  }

  /* 워드 표에서 '이름' 열에 들어 있는 값을 모읍니다. (표 안 이름은 문맥이 없어 규칙만으로는 놓침) */
  function docxNameValues(doc) {
    var out = {};
    var tables = doc.getElementsByTagNameNS(W_NS, 'tbl');
    for (var t = 0; t < tables.length; t++) {
      var rows = tables[t].getElementsByTagNameNS(W_NS, 'tr');
      if (rows.length < 2) continue;
      var headCells = rows[0].getElementsByTagNameNS(W_NS, 'tc');
      var cols = [], c, k;
      for (c = 0; c < headCells.length; c++) {
        var h = elementText(headCells[c]).replace(/\s/g, '');
        if (NAME_HEADERS[h]) cols.push(c);
      }
      if (!cols.length) continue;
      for (var r = 1; r < rows.length; r++) {
        var cells = rows[r].getElementsByTagNameNS(W_NS, 'tc');
        for (k = 0; k < cols.length; k++) {
          if (cols[k] >= cells.length) continue;
          var v = elementText(cells[k]).trim();
          if (isNameValue(v)) out[v] = 1;
        }
      }
    }
    return out;
  }

  function docxParagraphs(doc) {
    var nodes = doc.getElementsByTagNameNS(W_NS, 'p');
    var texts = [];
    for (var i = 0; i < nodes.length; i++) {
      var ts = nodes[i].getElementsByTagNameNS(W_NS, 't');
      if (!ts.length) continue;
      var s = '';
      for (var j = 0; j < ts.length; j++) s += ts[j].textContent;
      if (s) texts.push(s);
    }
    return texts;
  }

  /* docx → { units: [{label, text}], parts: {이름: XML문자열} } */
  function docxRead(buffer) {
    return JSZip.loadAsync(buffer).then(function (zip) {
      var names = Object.keys(zip.files).filter(function (n) {
        return DOCX_PARTS.test(n) && !zip.files[n].dir;
      });
      var units = [], parts = {};
      var chain = Promise.resolve();
      names.forEach(function (name) {
        chain = chain.then(function () {
          return zip.file(name).async('string').then(function (xml) {
            parts[name] = xml;
            var doc = new DOMParser().parseFromString(xml, 'application/xml');
            var nameVals = docxNameValues(doc);
            var paras = docxParagraphs(doc);
            for (var i = 0; i < paras.length; i++) {
              units.push({
                label: partLabel(name),
                text: paras[i],
                hint: nameVals[paras[i].trim()] ? 'name' : ''
              });
            }
          });
        });
      });
      return chain.then(function () { return { units: units, parts: parts }; });
    });
  }

  /* docx 원본 + 가리기 목록 → 새 docx 파일(Blob) */
  function docxApply(buffer, items) {
    return JSZip.loadAsync(buffer).then(function (zip) {
      var names = Object.keys(zip.files).filter(function (n) {
        return DOCX_PARTS.test(n) && !zip.files[n].dir;
      });
      var changed = 0;
      var chain = Promise.resolve();
      names.forEach(function (name) {
        chain = chain.then(function () {
          return zip.file(name).async('string').then(function (xml) {
            var doc = new DOMParser().parseFromString(xml, 'application/xml');
            if (doc.getElementsByTagName('parsererror').length) return;
            var nodes = doc.getElementsByTagNameNS(W_NS, 'p');
            var dirty = false;
            for (var i = 0; i < nodes.length; i++) {
              var ts = nodes[i].getElementsByTagNameNS(W_NS, 't');
              if (!ts.length) continue;
              var texts = [], j;
              for (j = 0; j < ts.length; j++) texts.push(ts[j].textContent);
              var next = maskParagraphRuns(texts, items);
              for (j = 0; j < ts.length; j++) {
                if (next[j] !== texts[j]) {
                  ts[j].textContent = next[j];
                  ts[j].setAttributeNS(XML_NS, 'xml:space', 'preserve');
                  dirty = true;
                }
              }
            }
            if (dirty) {
              changed++;
              zip.file(name, new XMLSerializer().serializeToString(doc));
            }
          });
        });
      });
      return chain.then(function () {
        if (!changed) return null;
        return zip.generateAsync({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          compression: 'DEFLATE'
        });
      });
    });
  }

  /* =========================================================
     엑셀(.xlsx) — SheetJS로 셀을 하나씩 보며 가립니다.
     ========================================================= */
  function cellText(cell) {
    if (!cell) return '';
    if (cell.f) return ''; // 수식은 건드리지 않습니다.
    if (cell.t === 's' || cell.t === 'str' || cell.t === 'inlineStr') {
      return cell.v == null ? '' : String(cell.v);
    }
    if (cell.t === 'n') {
      var d = String(cell.v);
      return /^\d{9,16}$/.test(d) ? d : '';
    }
    return '';
  }

  function eachCell(wb, fn) {
    for (var s = 0; s < wb.SheetNames.length; s++) {
      var name = wb.SheetNames[s];
      var ws = wb.Sheets[name];
      if (!ws || !ws['!ref']) continue;
      var range = XLSX.utils.decode_range(ws['!ref']);
      for (var R = range.s.r; R <= range.e.r; R++) {
        for (var C = range.s.c; C <= range.e.c; C++) {
          var addr = XLSX.utils.encode_cell({ r: R, c: C });
          var cell = ws[addr];
          if (!cell) continue;
          fn(cell, name, addr, ws);
        }
      }
    }
  }

  /* 엑셀에서 '이름' 같은 머리글 아래 열의 값을 모읍니다. */
  function xlsxNameValues(wb) {
    var out = {};
    for (var s = 0; s < wb.SheetNames.length; s++) {
      var ws = wb.Sheets[wb.SheetNames[s]];
      if (!ws || !ws['!ref']) continue;
      var range = XLSX.utils.decode_range(ws['!ref']);
      for (var R = range.s.r; R <= range.e.r; R++) {
        for (var C = range.s.c; C <= range.e.c; C++) {
          var cell = ws[XLSX.utils.encode_cell({ r: R, c: C })];
          if (!cell) continue;
          var head = cellText(cell).replace(/\s/g, '');
          if (!head || !NAME_HEADERS[head]) continue;
          for (var RR = R + 1; RR <= range.e.r; RR++) {
            var c2 = ws[XLSX.utils.encode_cell({ r: RR, c: C })];
            var v = c2 ? cellText(c2).trim() : '';
            if (!v) continue;
            if (isNameValue(v)) out[v] = 1;
          }
        }
      }
    }
    return out;
  }

  function xlsxRead(wb) {
    var units = [], nameVals = xlsxNameValues(wb);
    eachCell(wb, function (cell, sheet, addr) {
      var t = cellText(cell);
      if (t) units.push({ label: sheet + '!' + addr, text: t, hint: nameVals[t.trim()] ? 'name' : '' });
    });
    return units;
  }

  /* 표의 '이름' 열에서 찾은 값을 가리기 목록으로 만들어 줍니다. */
  function hintedFindings(units) {
    var out = [];
    for (var i = 0; i < units.length; i++) {
      var u = units[i];
      if (!u || u.hint !== 'name') continue;
      var v = (u.text || '').trim();
      if (!isNameValue(v)) continue;
      out.push({
        type: 'name', label: '이름',
        original: v, replacement: maskName(v),
        start: 0, end: 0
      });
    }
    return out;
  }

  function xlsxApply(wb, items) {
    var changed = 0;
    eachCell(wb, function (cell, sheet, addr) {
      var t = cellText(cell);
      if (!t) return;
      var masked = applyItems(t, items);
      if (masked === t) return;
      cell.t = 's';
      cell.v = masked;
      delete cell.w;
      delete cell.h;
      delete cell.r;
      changed++;
    });
    return changed;
  }

  global.Ans = {
    scan: scan,
    unique: unique,
    apply: applyItems,
    summarize: summarize,
    maskParagraphRuns: maskParagraphRuns,
    hintedFindings: hintedFindings,
    docx: { read: docxRead, apply: docxApply },
    xlsx: { read: xlsxRead, apply: xlsxApply }
  };
})(typeof window !== 'undefined' ? window : this);
