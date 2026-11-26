/* 2026.11.26 메뉴 사용설명서(앱별) + ChatGPT 새 기능 장표 + Canva 이미지 편집 설명서 */
(function(){
if(typeof APPS==='undefined'||!window.__SLD)return;
var D=window.__SLD,ic=window.__ic;
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function app(n){return APPS.find(function(a){return a.n===n})}
function addCard(an,c,pos){var A=app(an);if(!A||A.cards.some(function(k){return k.n===c.n}))return;if(pos==null)A.cards.push(c);else A.cards.splice(pos,0,c)}

/* ---------- ChatGPT 새 기능 장표 ---------- */
D['ChatGPT|프로젝트']={t:'대화·파일·지침을 주제별 폴더로 묶어, 같은 기준으로 이어서 일하는 작업방',where:'왼쪽 메뉴 → [프로젝트] → 새 프로젝트',
 what:'"2027 사업계획서"처럼 주제별 폴더를 만들고, 그 안에 지침(규칙)과 파일(서식·지침·작년 자료)을 넣어 두는 기능이에요. 폴더 안 대화는 모두 같은 지침과 파일을 보고 답해요.',
 pros:['대화가 주제별로 정리돼 다시 찾기 쉬워요','지침과 파일을 매번 다시 올리지 않아요','폴더 안 대화끼리 내용을 이어서 써요'],
 when:['사업계획서·결과보고서를 여러 번 나눠 쓸 때','매달 같은 형식의 일지·보고를 만들 때','행사 하나를 준비부터 결과까지 관리할 때'],
 how:['왼쪽 메뉴 프로젝트에서 새 프로젝트를 만들어요','지침(규칙)을 적어요','서식·지침·작년 자료 파일을 올려요','프로젝트 안에서 새 채팅으로 일해요'],
 out:['작년 대비 비교표','항목별 사업계획서 초안','같은 형식의 월간 보고'],
 say:'이 프로젝트의 지침과 파일을 기준으로, 올해 서식 순서대로 사업계획서 1번 항목 초안을 써 줘. 숫자는 자료에 있는 것만.',warn:'이용자 실명·주민번호 같은 개인정보가 담긴 파일은 올리지 마세요.'};
D['ChatGPT|웹 검색']={t:'지금 이 순간의 뉴스·정보를 인터넷에서 찾아 출처와 함께 알려 주는 기능',where:'입력창 [+] → [웹 검색]',
 what:'AI가 알고 있는 지식이 아니라 오늘 인터넷에 올라온 정보를 찾아서 답해요. 답 옆에 출처 링크가 붙어 바로 확인할 수 있어요.',
 pros:['최신 공고·뉴스를 바로 찾아요','출처 링크로 사실 확인이 쉬워요','여러 사이트를 한 번에 요약해요'],
 when:['새로 나온 공모사업·지원 공고를 찾을 때','바뀐 제도·지침 소식을 확인할 때','행사 장소·연락처 같은 정보를 찾을 때'],
 how:['입력창 [+]를 눌러요','웹 검색을 골라요','찾을 내용과 기간을 적어요','답 옆 출처 링크를 눌러 확인해요'],
 out:['이번 달 공모사업 목록과 링크','바뀐 제도 요약 3줄','장소·연락처 정리'],
 say:'이번 달 경기도 장애인복지 분야 공모사업을 찾아 공모명·지원 금액·마감일·링크를 표로 정리해 줘.',warn:'숫자·날짜는 출처 원문에서 한 번 더 확인하세요.'};
D['ChatGPT|심층 리서치']={t:'여러 자료를 오래 찾아 읽고, 출처가 달린 상세 보고서로 정리하는 조사 기능',where:'입력창 [+] → [심층 리서치]',
 what:'웹 검색이 빠른 답이라면 심층 리서치는 몇 분에서 수십 분 동안 수십 개 자료를 읽고 비교해 보고서를 만들어요. 시작 전에 무엇을 조사할지 질문으로 범위를 맞춰요.',
 pros:['며칠 걸릴 조사를 한 번에 맡겨요','비교표·요약·출처가 한 보고서에 정리돼요','질문으로 조사 범위를 먼저 맞춰요'],
 when:['다른 기관 우수 사례를 비교할 때','사업계획서 근거 자료(통계·정책)가 필요할 때','새 프로그램 기획 전 현황을 조사할 때'],
 how:['입력창 [+]에서 심층 리서치를 골라요','주제·비교 기준·원하는 형식을 적어요','되묻는 질문에 답해 범위를 정해요','완성된 보고서와 출처를 확인해요'],
 out:['우수 사례 5곳 비교 보고서','사업 근거 통계 정리','정책 변화 요약 보고서'],
 say:'장애인복지관 디지털 재활 프로그램 우수 사례 5곳을 운영 방식·대상·효과·출처로 비교한 보고서를 만들어 줘.',warn:'출처 링크를 열어 숫자·날짜를 원문과 대조하세요. 사용 횟수에 제한이 있어요.'};
D['ChatGPT|스케치']={t:'손으로 대충 그린 그림을 이미지로 첨부해, AI가 알아보고 그대로 활용하는 기능',where:'입력창 [+] → [스케치] → 그리고 첨부',
 what:'말로 설명하기 어려운 배치·모양을 화면에 직접 그려서 보내요. "이 배치대로 포스터를 만들어 줘"처럼 그림을 기준으로 만들게 할 수 있어요.',
 pros:['말보다 빠르게 배치를 전달해요','그림 실력이 없어도 대충 그리면 돼요','원하는 위치·순서를 정확히 맞춰요'],
 when:['포스터·안내지의 제목·그림 위치를 정할 때','행사장 자리 배치도를 만들 때','동선·순서도를 그림으로 설명할 때'],
 how:['입력창 [+]에서 스케치를 골라요','네모·화살표로 대충 그려요','첨부하고 무엇을 만들지 적어요','결과를 보고 고칠 곳을 말해요'],
 out:['스케치 배치대로 만든 포스터','깔끔하게 다시 그린 행사장 배치도','동선 안내도'],
 say:'첨부한 스케치 배치대로 A4 안내지를 만들어 줘. 위쪽 큰 네모는 제목, 가운데는 그림, 아래는 일시·장소야.',warn:'스케치에 이용자 이름 같은 개인정보는 쓰지 마세요.'};
D['ChatGPT|파일 가져오기']={t:'구글 드라이브까지 포함해 내 파일을 찾아 바로 첨부하는 기능',where:'입력창 [+] → [라이브러리에서 가져오기]',
 what:'컴퓨터에 내려받지 않아도 라이브러리와 연결된 구글 드라이브에서 파일을 검색해 대화에 첨부해요.',
 pros:['내려받고 다시 올리는 과정이 없어요','파일 이름으로 바로 찾아요','지난번 올린 파일도 다시 써요'],
 when:['드라이브에 있는 작년 결과보고서를 넣을 때','공유 폴더의 서식을 바로 쓸 때','지난달 올린 지침 PDF를 다시 쓸 때'],
 how:['입력창 [+]를 눌러요','라이브러리에서 가져오기를 골라요','파일 이름으로 검색해 골라요','첨부한 뒤 할 일을 적어요'],
 out:['첨부한 보고서 요약','서식에 맞춘 초안','지침 핵심 정리'],
 say:'첨부한 작년 결과보고서에서 성과지표와 실적만 표로 뽑아 줘.',warn:'처음 한 번 구글 드라이브 연결이 필요해요. 개인정보 파일은 첨부하지 마세요.'};
[['프로젝트','폴더로 묶는 작업방',1],['웹 검색','실시간 뉴스·정보',1],['심층 리서치','출처 달린 상세 보고서',1],['스케치','그려서 이미지로 첨부',1],['파일 가져오기','드라이브 파일 첨부',1]].forEach(function(c){addCard('ChatGPT',{n:c[0],d:c[1],s:c[1],f:c[2]})});

/* ---------- 메뉴 사용설명서 ---------- */
var MAN={
'ChatGPT':{title:'ChatGPT 메뉴 사용설명서',sub:'왼쪽 메뉴와 입력창 [+] 메뉴, 어디를 누르면 무엇을 하는지 한 장으로',groups:[
 {h:'왼쪽 메뉴',items:[['library','라이브러리','만든 이미지·올린 파일 보관함','지난달 카드뉴스 그림을 다시 꺼내 같은 캐릭터로 이어 만들기','라이브러리'],['folder','프로젝트','주제별 작업 폴더','"2027 사업계획서" 폴더에 서식·지침을 넣고 단계별로 작성','프로젝트'],['clock','예약','정한 시간에 자동 실행','매주 월요일 8시 새 공모사업 정리','예약'],['plug','플러그인','드라이브·Gmail·Canva 연결','드라이브 문서 요약 · Canva로 포스터 만들기','플러그인']]},
 {h:'입력창 [+] 메뉴',items:[['library','라이브러리에서 가져오기','Google Drive 포함 파일 찾아 첨부','드라이브의 작년 결과보고서를 바로 첨부','파일 가져오기'],['image','이미지 생성','글로 설명하면 그림','행사 포스터 배경·캐릭터 그림',''],['globe','웹 검색','실시간 뉴스·정보','이번 달 공모사업 공고 찾기','웹 검색'],['scope','심층 리서치','출처 달린 상세 보고서','우수 사례 5곳 비교 보고서','심층 리서치'],['sketch','스케치','그려서 이미지로 첨부','대충 그린 배치대로 안내지 만들기','스케치']]}]},
'제미나이':{title:'제미나이 메뉴 사용설명서',sub:'입력창 [+]와 도구, 왼쪽 메뉴에서 무엇을 고르면 되는지 한 장으로',groups:[
 {h:'입력창 [+] · 도구',items:[['scope','Deep Research','몇 분 조사해 보고서','공모사업 조건 비교 보고서','Deep Research'],['video','동영상 만들기','장면 설명 → 소리 있는 영상','8초 홍보 쇼츠','영상 만들기'],['music','음악 만들기','분위기·주제 → 30초 노래','프로그램 주제가','음악 30초'],['doc','Canvas','옆 화면에서 문서·웹페이지','휴대폰용 행사 안내 페이지','캔버스'],['book','가이드 학습','질문하며 가르쳐 주기','신규 직원 지침 공부','가이드 학습'],['user','개인 인텔리전스','Gmail·포토 연결 맞춤 답','작년 공모 안내 메일 찾기','개인 인텔리전스']]},
 {h:'왼쪽 메뉴 · 입력창 위',items:[['book','노트북','넣은 자료로만 답하는 공부방','사업안내 PDF에서 바뀐 점 찾기','노트북'],['clock','예약된 작업','정한 시간에 자동 실행','평일 8시 일정·메일 요약','예약'],['check','태스크','목표를 주면 여러 단계 처리','송년회 준비 일정 캘린더에 넣기','태스크'],['mic','Live (휴대폰)','말하고 비추며 묻기','고장 난 냉장고 비추고 원인 묻기','']]}]},
'Claude':{title:'Claude 메뉴 사용설명서',sub:'왼쪽 메뉴와 입력창 [+]에서 무엇을 고르면 되는지 한 장으로',groups:[
 {h:'왼쪽 메뉴',items:[['folder','프로젝트','지침·자료를 넣은 업무방','사업계획서 업무방','프로젝트'],['grid','아티팩트','만든 결과물 모음','안내문·명단·보고 슬라이드 다시 열기','아티팩트'],['clock','예약됨','정한 시간에 자동 실행','매주 공모 소식 정리','예약됨'],['pal','Design','포스터·안내지·화면 시안','A4 안내지 시안 2개','Design']]},
 {h:'입력창 [+] 메뉴',items:[['upload','파일·사진 추가','자료 첨부','결과보고서 PDF 첨부',''],['folder','폴더 추가','내 컴퓨터 폴더 연결(데스크톱)','일지 20개를 표로 정리','폴더 추가'],['scope','리서치','출처 달린 조사 보고서','우수 사례 비교','리서치'],['plug','플러그인(커넥터)','Canva·Gmail·드라이브 연결','시트 명단으로 출석률 계산','플러그인'],['pal','디자인 시스템','기관 색·글꼴 저장','같은 느낌의 홍보물 세트','디자인 시스템'],['rec','Skill 녹화','내 작업 순서 저장','월간 일지 정리 Skill','Skill 녹화']]}]},
'Canva':{title:'Canva 메뉴 사용설명서',sub:'왼쪽 메뉴에서 무엇을 고르면 되는지 한 장으로',groups:[
 {h:'왼쪽 메뉴',items:[['spark','Canva AI','말로 디자인·이미지·발표 자료 만들기','"인식개선 카드뉴스 만들어 줘"','AI 프레젠테이션'],['temp','추천 템플릿','크기별 완성 디자인','인스타 카드뉴스 템플릿 고르기','템플릿·디자인 만들기'],['shapes','요소','도형·아이콘·사진·그래픽','화살표·아이콘 넣기',''],['text','텍스트','제목·본문 글자 상자','행사명 큰 제목 넣기',''],['brand','브랜드 센터','기관 로고·색·글꼴 저장 (Pro)','기관 초록색 한 번에 적용',''],['upload','업로드 항목','내 사진·로고 올리기','행사 사진 넣기',''],['tools','도구','그리기·표·차트 등','참여 인원 차트','']]}]}
};
['ChatGPT','제미나이','Claude','Canva'].forEach(function(n){addCard(n,{n:'메뉴 사용설명서',d:'어디를 누르면 무엇을 하나',s:'메뉴 사용설명서',f:1},1)});
addCard('Canva',{n:'이미지 편집 사용설명서',d:'선택 · 도구 8가지',s:'이미지 편집 사용설명서',f:1},2);

/* 기능 한눈에 표에 새 카드 내용 채우기 */
(function(){var G=window.__ig;if(!G)return;['ChatGPT|프로젝트','ChatGPT|웹 검색','ChatGPT|심층 리서치','ChatGPT|스케치','ChatGPT|파일 가져오기','Canva|AI 앱과 연결','Canva|템플릿·디자인 만들기'].forEach(function(k){var x=D[k];if(!x||G[k])return;G[k]={s:x.t,st:x.where.split(/\s*→\s*/).map(function(t){return ['',t]}),tips:x.when.map(function(t){return ['',t]}),_new:1}});
 ['ChatGPT','제미나이','Claude','Canva'].forEach(function(n){var k=n+'|메뉴 사용설명서';if(!G[k])G[k]={s:'어디를 누르면 무엇을 하는지 메뉴별 설명과 예시',st:[['','메뉴 그림'],['','번호별 설명'],['','자세히 보기']],tips:[['','처음 앱을 열었을 때'],['','메뉴 이름이 헷갈릴 때']],_new:1}});
 G['Canva|이미지 편집 사용설명서']=G['Canva|이미지 편집 사용설명서']||{s:'사진 편집 화면의 선택·도구 9가지 설명',st:[['','사진 클릭'],['','[편집]'],['','도구 고르기']],tips:[['','배경 제거·오타 수정'],['','흐린 사진 선명하게']],_new:1};})();
function manHtml(an){var M=MAN[an];var n=0;
 return '<div class="man"><div class="man-gs">'+
 M.groups.map(function(g){return '<div class="man-mock"><div class="mm-h">'+e(g.h)+'</div>'+g.items.map(function(it){n++;var go=it[4];return '<div class="mm-r'+(go?' go':'')+'"'+(go?' data-go="'+e(go)+'" role="button" tabindex="0"':'')+'><i class="mm-n">'+n+'</i><span class="mm-i">'+ic(it[0],22)+'</span><span class="mm-t"><b>'+e(it[1])+'</b><small>'+e(it[2])+'</small></span>'+(go?'<span class="mm-go">자세히 보기 ›</span>':'')+'</div>'}).join('')+'</div>'}).join('')+
 '</div></div>'}

var CVT=[['전체 · 요소 · 영역 지정','선택','고칠 범위 고르기: 그림 전체, 그림 속 물건 하나, 붓으로 칠한 영역','캐릭터 옷 색만 바꿀 땐 [요소]로 캐릭터만 선택',0],
 ['조정','adjust','밝기·대비·채도·색감 조절','어두운 행사 사진을 밝고 선명하게',0],
 ['Magic Layers','layers','통째 그림을 글자·인물·배경 층으로 분리','AI 포스터의 오타 글자만 골라 고치기',0],
 ['Magic Edit','wand','칠한 부분을 글로 설명해 다른 것으로 바꾸기','테이블 위 꽃병을 케이크로 바꾸기',1],
 ['해상도 향상','hd','흐린 이미지를 선명하고 크게','작은 로고·사진을 인쇄용으로 키우기',0],
 ['배경 제거','cut','배경을 한 번에 지우고 인물·물건만 남기기','단체 사진에서 사람만 오려 포스터에 넣기',1],
 ['Magic Eraser','eraser','필요 없는 물건·사람을 문질러 지우기','사진 뒤 지나가는 사람·쓰레기통 지우기',1],
 ['이미지로 동영상 생성','video','사진 한 장을 몇 초짜리 움직이는 영상으로','캐릭터가 손 흔드는 짧은 영상',0],
 ['배경 생성','image','인물은 그대로 두고 배경을 새로 만들기','실내 사진을 봄꽃 배경으로',1]];
function cvHtml(){return '<div class="man">'+
 '<div class="cv-g"><figure class="cv-img"><img src="/img/giheung/canva/edit-panel.webp" alt="Canva 이미지 편집 화면" onclick="typeof zoomImg===\'function\'&&zoomImg(this.src)"><figcaption>순서: 사진 클릭 → 위쪽 [편집] → 선택 고르기 → 도구 고르기</figcaption></figure>'+
 '<div class="cv-list">'+CVT.map(function(t,i){return '<div class="mc"><div class="mc-t"><i>'+(i+1)+'</i><span class="mm-i">'+ic(t[1]==='선택'?'brush':t[1],18)+'</span><b>'+e(t[0])+'</b>'+(t[4]?'<span class="pro">Pro</span>':'')+'</div><p>'+e(t[2])+'</p><p class="ex"><em>예시</em>'+e(t[3])+'</p></div>'}).join('')+'</div></div>'+
 '<p class="man-note">왕관 표시(Pro)는 유료 요금제 기능이에요. 교육용·비영리 계정은 무료로 쓸 수 있는 경우가 있어요.</p></div>'}

function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;
 document.querySelectorAll('#R .ovt,#R .ovsub').forEach(function(n){n.remove()});document.querySelectorAll('#R .ovc').forEach(function(c){var b=c.querySelector('b');if(b&&/메뉴 사용설명서/.test(b.textContent))c.remove()});document.querySelectorAll('#R .bar .sub2').forEach(function(n){n.remove()});var A=APPS[S.app||0];if(!A)return;var C=A.cards[S.fc||0];if(!C)return;
 (function(){var t=document.querySelector('#app .ftb');if(!t||t.dataset.g)return;t.dataset.g=1;var cur=S.fc||0,TOP=['기능 한눈에','메뉴 사용설명서'];
  var KI={'기능 한눈에':'grid','메뉴 사용설명서':'side'};function bt(c,i){var k=KI[c.n]||(window.__kic?window.__kic(c.n):'')||'spark';return '<button type="button" class="fg-b'+(i===cur?' on':'')+'" data-i="'+i+'">'+ic(k,16)+'<span>'+e(c.n)+'</span></button>'}
  var top=[],fr=[],pd=[];A.cards.forEach(function(c,i){if(TOP.indexOf(c.n)>=0)top.push(bt(c,i));else if(c.f)fr.push(bt(c,i));else pd.push(bt(c,i))});
  var h='<div class="fg">'+(top.length?'<div class="fg-top">'+top.join('')+'</div>':'')+'<table class="fg-t"><tr><th class="f">무료</th><td><div class="fg-g">'+fr.join('')+'</div></td></tr>'+(pd.length?'<tr><th class="p">유료</th><td><div class="fg-g">'+pd.join('')+'</div></td></tr>':'')+'</table></div>';
  t.insertAdjacentHTML('beforebegin',h);t.style.display='none';
  var gl=t.parentNode.querySelector('.fg').previousElementSibling;if(gl&&/할 수 있는 것|누르면/.test(gl.textContent))gl.style.display='none';
  document.querySelectorAll('#app .fg-b').forEach(function(b){b.onclick=function(){S.fc=+b.dataset.i;S.ao=0;S.ut=0;save();render()}})})();
 var htm=C.n==='메뉴 사용설명서'&&MAN[A.n]?manHtml(A.n):(C.n==='이미지 편집 사용설명서'?cvHtml():'');
 document.querySelectorAll('.ftb tr').forEach(function(tr){var b=tr.querySelector('td b'),d=tr.children[1];if(b&&d&&!d.textContent.trim()){var k=A.cards.find(function(c){return c.n===b.textContent.trim()});if(k&&k.d)d.textContent=k.d}});
 if(!htm)return;var R=document.getElementById('R');if(!R)return;var bar=R.querySelector('.bar');
 if(!bar){R.innerHTML='<div class="bar"><span class="t">'+e(A.n)+' · '+e(C.n)+'</span></div>';bar=R.querySelector('.bar')}
 [].slice.call(R.children).forEach(function(n){if(n!==bar)n.remove()});var sub=bar.querySelector('.sub2');if(sub)sub.remove();
 bar.insertAdjacentHTML('afterend','<div class="sld-wrap">'+htm+'</div>');
 R.querySelectorAll('.mm-r.go').forEach(function(b){b.onclick=function(){var i=A.cards.findIndex(function(c){return c.n===b.dataset.go});if(i>=0){S.fc=i;save();render()}}})}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-man">'
+'.man{background:#fff;border:1px solid #D5E5DA;border-radius:14px;padding:12px 14px;display:grid;gap:12px;color:#263331}'
+'.man-hd{display:flex;align-items:center;gap:12px;border-bottom:2px solid #2F6B56;padding-bottom:10px}.man-lg svg{width:38px;height:38px;display:block}.man-hd b{display:block;font-size:20px;color:#1E5442}.man-hd span{font-size:14px;color:#66746f}'
+'.man-gs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;align-items:start}'
+'.man-mock{background:#fff;border:1px solid #D9DEDB;border-radius:14px;box-shadow:0 4px 14px rgba(0,0,0,.06);padding:8px}.mm-h{font-size:12.5px;font-weight:800;color:#66746f;padding:4px 8px 6px}'
+'.mm-r{display:grid;grid-template-columns:22px 30px 1fr auto;column-gap:8px;align-items:center;padding:10px;border-radius:10px;text-align:left}.mm-r.go{cursor:pointer}.mm-r.go:hover{background:#F1F8F3}.mm-t b{display:block;font-size:15.5px;font-weight:700;color:#111}.mm-t small{display:block;font-size:13px;color:#7a827e;margin-top:1px}.mm-go{font-size:12.5px;font-weight:800;color:#2F6B56;background:#F1F8F3;border:1px solid #D5E5DA;border-radius:999px;padding:5px 11px;white-space:nowrap}.mm-r.go:hover .mm-go{background:#2F6B56;color:#fff;border-color:#2F6B56}'
+'.mm-n,.mc-t i{font-style:normal;width:20px;height:20px;border-radius:50%;background:#E07A2E;color:#fff;font-size:11.5px;font-weight:800;display:grid;place-items:center}'
+'.mm-i{display:grid;place-items:center;color:#222}'
+'.man-cards,.cv-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}'
+'.mc{text-align:left;border:1px solid #E3ECE6;border-radius:12px;padding:10px 12px;display:grid;gap:5px;align-content:start;background:#fff}.mc-t{display:flex;align-items:center;gap:6px}.mc-t b{font-size:15px;color:#1E5442}.mc p{margin:0;font-size:13.5px;line-height:1.55}'
+'.mc .ex{background:#FFF8F1;border-radius:8px;padding:6px 8px}.mc .ex em{font-style:normal;font-weight:800;color:#C2652B;margin-right:6px}'
+'.mc-go{justify-self:start;border:1px solid #D5E5DA;background:#F7FBF8;border-radius:8px;padding:4px 10px;font-size:12.5px;font-weight:700;color:#2F6B56}'
+'.pro{margin-left:auto;font-size:11px;font-weight:800;background:#FFF1D6;color:#9A6700;border-radius:999px;padding:2px 7px}'
+'.cv-g{display:grid;grid-template-columns:330px 1fr;gap:14px;align-items:start}.cv-img{margin:0;border:1px solid #D9DEDB;border-radius:14px;overflow:hidden;background:#fff}.cv-img img{width:100%;display:block;cursor:zoom-in}.cv-img figcaption{font-size:12.5px;color:#66746f;padding:8px 10px;border-top:1px solid #E3ECE6}'
+'.man-note{margin:0;font-size:13px;color:#66746f}#R .ovs{padding:10px 12px!important;gap:8px!important}#app .pane .gl+.ftb{margin-top:0}'
+'.fg{display:grid;gap:8px;margin-top:4px}.fg-top{display:grid;grid-template-columns:1fr 1fr;gap:6px}.fg-t{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #D5E5DA;border-radius:12px;overflow:hidden}.fg-t th{width:46px;font-size:13px;font-weight:800;writing-mode:horizontal-tb;vertical-align:middle;border-bottom:1px solid #D5E5DA}.fg-t th.f{background:#E8F5EE;color:#1E7A4F}.fg-t th.p{background:#FFF1E6;color:#B4541A}.fg-t td{padding:8px;border-bottom:1px solid #D5E5DA;border-left:1px solid #D5E5DA}.fg-t tr:last-child th,.fg-t tr:last-child td{border-bottom:0}'
+'.fg-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.fg-b{display:flex;align-items:center;gap:7px;border:1px solid #D5E5DA;background:#fff;border-radius:9px;padding:7px 9px;font-size:13.5px;font-weight:700;color:#263331;text-align:left;cursor:pointer;min-width:0}.fg-b span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fg-b svg{flex:none;color:#2F6B56}.fg-b:hover{border-color:#2a9d8f}.fg-b.on{background:#2F6B56;border-color:#2F6B56;color:#fff}.fg-b.on svg{color:#fff}.fg-top .fg-b{background:#FFF1E6;border:1.5px solid #F0B98C;color:#9A4A12;font-size:14px;padding:9px 10px;justify-content:center}.fg-top .fg-b svg{color:#E07A2E}.fg-top .fg-b:nth-child(2){background:#E8F3FF;border-color:#A9CBEF;color:#1D4F8A}.fg-top .fg-b:nth-child(2) svg{color:#2F6FB8}.fg-top .fg-b.on{background:#E07A2E;border-color:#E07A2E;color:#fff}.fg-top .fg-b:nth-child(2).on{background:#2F6FB8;border-color:#2F6FB8}.fg-top .fg-b.on svg{color:#fff}'
+'@media(max-width:1000px){.man-gs,.cv-g{grid-template-columns:1fr}}'
+'</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 플러그인 연결 지도 (앱 로고·연결 순서·바로 쓰는 요청) */
(function(){
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var B={
drive:'<svg viewBox="0 0 24 24"><path d="M8.2 3h7.6l6.2 10.8h-7.6z" fill="#F4B400"/><path d="M8.2 3 2 13.8 5.8 20.4 12 9.6z" fill="#0F9D58"/><path d="M5.8 20.4h12.4l3.8-6.6H9.6z" fill="#4285F4"/></svg>',
gmail:'<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" stroke="#D5D9DD"/><path d="M3 6.5 12 13l9-6.5" fill="none" stroke="#EA4335" stroke-width="2.4" stroke-linejoin="round"/><path d="M3 7v11M21 7v11" stroke="#4285F4" stroke-width="2.4"/></svg>',
cal:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" stroke="#D5D9DD"/><path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2H3z" fill="#4285F4"/><text x="12" y="18" text-anchor="middle" font-size="9" font-weight="800" fill="#1A73E8" font-family="Arial">31</text></svg>',
sheets:'<svg viewBox="0 0 24 24"><path d="M5 2h10l5 5v15H5z" fill="#0F9D58"/><rect x="8" y="10" width="9" height="8" fill="#fff"/><path d="M8 13h9M8 16h9M12 10v8" stroke="#0F9D58" stroke-width="1.2"/></svg>',
canva:(window.__LOGO&&window.__LOGO.Canva)||'',
higgs:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#111"/><path d="M7 6v12M17 6v12M7 12h10" stroke="#D4FF3B" stroke-width="2.6" stroke-linecap="round"/></svg>',
capcut:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#000"/><path d="M5 8l7 4-7 4M19 8l-7 4 7 4" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/></svg>',
adobe:'<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#EB1000"/><path d="M12 5 6 19h3l1.4-3.6h4l-1.2-3H11.4L12 11l3.4 8h2.6z" fill="#fff"/></svg>',
chrome:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#DB4437"/><path d="M12 12 3.3 17A10 10 0 0 0 12 22z" fill="#0F9D58"/><path d="M12 12v10a10 10 0 0 0 8.7-15z" fill="#F4B400"/><path d="M12 12 3.3 17A10 10 0 0 1 3.3 7z" fill="#0F9D58"/><circle cx="12" cy="12" r="4.4" fill="#fff"/><circle cx="12" cy="12" r="3.4" fill="#4285F4"/></svg>',
notion:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" stroke="#111" stroke-width="1.6"/><path d="M8 17V7l8 10V7" fill="none" stroke="#111" stroke-width="2"/></svg>'};
var HUB={
'ChatGPT|플러그인':{steps:[['왼쪽 메뉴 [앱(플러그인)]','plug'],['쓸 앱 찾기','tools'],['[연결] 누르기','link'],['로그인·허용','user'],['채팅에서 @앱이름','chat']],
 apps:[['drive','구글 드라이브','내 문서 찾아 읽기·요약','@Google Drive 올해 사업계획서에서 예산 부분만 요약해 줘.'],['gmail','Gmail','메일 찾기·답장 초안','@Gmail 지난주 받은 공모 안내 메일을 찾아 마감일만 알려 줘.'],['cal','구글 캘린더','일정 확인·등록','@Google Calendar 다음 주 송년회 준비 일정을 넣어 줘.'],['canva','Canva','포스터·카드뉴스 바로 만들기','@Canva 이 문구로 송년회 포스터 시안 만들어 줘. 초록·주황, 큰 글씨.'],['higgs','Higgsfield','AI 영상 만들기','@Higgsfield 첨부한 캐릭터가 손 흔드는 5초 영상 만들어 줘.'],['capcut','CapCut','영상 편집·자막','@CapCut 이 영상에 큰 자막을 넣고 15초 쇼츠로 편집해 줘.'],['adobe','Adobe','PDF·이미지 편집','@Adobe 첨부한 PDF에서 3쪽만 뽑아 줘.']]},
'Claude|플러그인':{steps:[['입력창 [+]','plus'],['[커넥터(플러그인)]','plug'],['쓸 앱 켜기','link'],['로그인·허용','user'],['채팅에서 앱 이름 넣어 요청','chat']],
 apps:[['drive','구글 드라이브','문서 찾아 읽기·요약','구글 드라이브에서 올해 사업계획서를 찾아 성과지표만 표로 정리해 줘.'],['gmail','Gmail','메일 찾기·답장 초안','Gmail에서 후원 문의 메일을 찾아 답장 초안을 써 줘.'],['cal','구글 캘린더','일정 확인·등록','구글 캘린더에 다음 주 사례회의 일정을 넣어 줘.'],['sheets','구글 시트','표 읽고 계산·채우기','구글 시트 12월 참여자 명단에서 프로그램별 출석률을 계산해 줘.'],['canva','Canva','디자인 만들기·불러오기','Canva로 12월 송년회 카드뉴스 4장을 같은 디자인으로 만들어 줘.'],['chrome','Chrome','크롬에서 웹 작업 대신','Chrome에서 복지로 사이트의 올해 공모 공고를 찾아 정리해 줘.'],['notion','Notion','회의록·업무 페이지 정리','Notion 회의록 페이지에 오늘 회의 내용을 정리해 넣어 줘.']]}};
function hub(k){var H=HUB[k],ic=window.__ic,lg=(window.__LOGO||{})[k.split('|')[0]]||'';
 return '<section class="hub"><h4>이렇게 연결해요</h4><div class="hub-st">'+H.steps.map(function(s,i){return (i?'<em>›</em>':'')+'<span><i>'+(i+1)+'</i>'+(ic?ic(s[1],16):'')+e(s[0])+'</span>'}).join('')+'</div>'+
 '<div class="hub-m"><div class="hub-c"><span class="hub-lg">'+lg+'</span><b>'+e(k.split('|')[0])+'</b><small>앱을 연결하면<br>채팅 한 번으로 일해요</small></div><div class="hub-g">'+H.apps.map(function(a){return '<div class="hub-a"><div class="hub-ah"><span class="hub-bi">'+B[a[0]]+'</span><span><b>'+e(a[1])+'</b><small>'+e(a[2])+'</small></span></div><p>'+e(a[3])+'</p><button type="button" class="hub-cp" data-t="'+e(a[3])+'">복사</button></div>'}).join('')+'</div></div>'+
 '<p class="hub-n">앱 목록은 계정·요금제·지역에 따라 다를 수 있어요. 처음 한 번만 연결하면 다음부터는 바로 불러와요.</p></section>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A)return;var C=A.cards[S.fc||0];if(!C)return;var k=A.n+'|'+C.n;if(!HUB[k])return;
 var p=document.querySelector('#R .sld-path');if(!p||document.querySelector('#R .hub'))return;p.insertAdjacentHTML('afterend',hub(k));
 document.querySelectorAll('#R .hub-cp').forEach(function(b){b.onclick=function(){try{navigator.clipboard.writeText(b.dataset.t)}catch(er){}b.textContent='복사됨';setTimeout(function(){b.textContent='복사'},1200)}})}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-hub">'
+'.hub{border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px;display:grid;gap:12px;background:#fff}.hub h4{margin:0;font-size:15px;font-weight:800;color:#1E5442;padding-bottom:6px;border-bottom:2px solid #E07A2E;justify-self:start}'
+'.hub-st{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.hub-st span{display:inline-flex;align-items:center;gap:6px;background:#F7FBF8;border:1px solid #D5E5DA;border-radius:9px;padding:6px 10px;font-size:13.5px;font-weight:700}.hub-st i{font-style:normal;width:18px;height:18px;border-radius:50%;background:#E07A2E;color:#fff;font-size:11px;display:grid;place-items:center}.hub-st em{font-style:normal;color:#E07A2E;font-weight:800}'
+'.hub-m{display:grid;grid-template-columns:150px 1fr;gap:12px;align-items:stretch}.hub-c{background:#F1F8F3;border:2px solid #2F6B56;border-radius:14px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;padding:12px;position:relative}.hub-lg svg{width:54px;height:54px;display:block}.hub-c b{font-size:17px;color:#1E5442}.hub-c small{font-size:12.5px;color:#4b5a55;line-height:1.5}'
+'.hub-c::after{content:"";position:absolute;right:-14px;top:50%;width:14px;border-top:2px dashed #2F6B56}'
+'.hub-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;border:2px dashed #CFE3D6;border-radius:14px;padding:8px}'
+'.hub-a{position:relative;background:#fff;border:1px solid #E3ECE6;border-radius:12px;padding:9px 10px;display:grid;gap:6px;align-content:start}.hub-ah{display:flex;align-items:center;gap:8px}.hub-bi svg{width:30px;height:30px;display:block}.hub-ah b{display:block;font-size:14.5px;color:#111}.hub-ah small{display:block;font-size:12px;color:#66746f}'
+'.hub-a p{margin:0;background:#FFF8F1;border-radius:8px;padding:6px 8px;font-size:12.5px;line-height:1.5;font-weight:600;padding-right:44px}.hub-cp{position:absolute;right:16px;bottom:15px;border:1px solid #D5E5DA;background:#fff;border-radius:6px;padding:2px 6px;font-size:11.5px;font-weight:700}'
+'.hub-n{margin:0;font-size:12.5px;color:#66746f}@media(max-width:900px){.hub-m{grid-template-columns:1fr}.hub-c::after{display:none}}'
+'</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 모든 기능 장표를 플러그인 지도처럼: 순서 띠 + 가운데 기능 + 쓰임 카드 */
(function(){
var D=window.__SLD;
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var SKIP={'ChatGPT|플러그인':1,'Claude|플러그인':1};
function map(an,cn,x){var ic=window.__ic,kic=window.__kic||function(){return ''},lg=(window.__LOGO||{})[an]||'',fi=kic(cn)||kic(x.where.split('→').pop())||'spark';
 var n=Math.max(x.when.length,x.out.length),cards=[];for(var i=0;i<n;i++){var w=x.when[i]||'',o=x.out[i]||'';var k=kic(o)||kic(w)||fi;
  cards.push('<div class="hub-a"><div class="hub-ah"><span class="fm-i">'+ic(k,20)+'</span><span><small>이럴 때</small><b>'+e(w)+'</b></span></div>'+(o?'<p class="fm-o"><em>결과</em>'+e(o)+'</p>':'')+'</div>')}
 return '<section class="hub"><h4>이렇게 써요</h4><div class="hub-st">'+x.how.map(function(s,i){var k=kic(s);return (i?'<em>›</em>':'')+'<span><i>'+(i+1)+'</i>'+(k?ic(k,16):'')+e(s)+'</span>'}).join('')+'</div>'+
 '<div class="hub-m"><div class="hub-c"><span class="fm-c"><span class="hub-lg">'+lg+'</span><span class="fm-f">'+ic(fi,22)+'</span></span><b>'+e(cn)+'</b><small>'+e(x.t)+'</small></div><div class="hub-g">'+cards.join('')+'</div></div></section>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A)return;var C=A.cards[S.fc||0];if(!C)return;var k=A.n+'|'+C.n,x=D[k];if(!x||SKIP[k])return;
 var sld=document.querySelector('#R .sld');if(!sld||sld.dataset.m)return;sld.dataset.m=1;
 var path=sld.querySelector('.sld-path'),say=sld.querySelector('.sld-say'),w=sld.querySelector('.sld-w');
 var html=(path?path.outerHTML:'')+map(A.n,C.n,x)+'<div class="sld-g2 fm-2"><section><h4>무엇인가요</h4><p>'+e(x.what)+'</p></section><section><h4>장점</h4><ul>'+x.pros.map(function(p){return '<li>'+e(p)+'</li>'}).join('')+'</ul></section></div>'+(say?say.outerHTML:'')+(w?w.outerHTML:'');
 sld.innerHTML=html;var cp=sld.querySelector('.sld-cp');if(cp)cp.onclick=function(){try{navigator.clipboard.writeText(x.say)}catch(er){}cp.textContent='복사됨';setTimeout(function(){cp.textContent='복사'},1200)}}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-fm">.fm-c{display:flex;align-items:center;gap:6px}.fm-f{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:#fff;border:1.5px solid #2F6B56;color:#2F6B56}.hub-c .hub-lg svg{width:44px;height:44px}'
+'.fm-i{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:#F1F8F3;color:#2F6B56;flex:none}.hub-ah small{color:#C2652B!important;font-weight:800}.hub-ah b{font-size:14px!important;line-height:1.4}'
+'.fm-o{margin:0;background:#F7FBF8!important;border-radius:8px;padding:6px 8px!important;font-size:13px!important;font-weight:600}.fm-o em{font-style:normal;color:#2F6B56;font-weight:800;margin-right:6px}'
+'.fm-2{grid-template-columns:1.2fr 1fr!important}.sld-say{border:1px solid #E3ECE6;border-radius:12px;padding:12px 14px}.hub-c small{max-width:180px}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 노트북(NotebookLM) 스튜디오 8가지 */
(function(){
var D=window.__SLD;if(!D)return;
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var x=D['제미나이|노트북'];if(x){
 x.t='내가 넣은 자료(지침·안내서·보고서)만 읽고 답하고, 그 자료로 오디오·슬라이드·마인드맵·퀴즈까지 만들어 주는 자료 작업실';
 x.where='notebooklm.google.com 또는 제미나이 왼쪽 메뉴 → [새 노트북] → 소스 추가';
 x.what='사업안내·운영지침·작년 결과보고서 같은 자료(소스)를 넣으면, 그 자료 안에서만 찾아 답하고 몇 쪽인지 출처 번호를 달아 줘요. 오른쪽 "스튜디오"에서는 같은 자료로 오디오 해설, 발표 슬라이드, 마인드맵, 퀴즈, 인포그래픽을 버튼 하나로 만들어요.';
 x.pros=['지어낸 답 없이 넣은 자료 근거로만 답해요','출처 번호를 누르면 원문 그 쪽이 바로 열려요','스튜디오 버튼 하나로 교육 자료 8가지를 만들어요','두꺼운 지침을 귀로 듣고, 그림으로 한눈에 봐요'];
 x.when=['올해 사업안내에서 바뀐 점을 찾을 때','신규 직원에게 지침을 교육할 때','평가 준비로 지표별 근거를 모을 때'];
 x.out=['바뀐 점 비교표 (쪽수 포함)','지침 오디오 해설·퀴즈','평가지표별 근거 목록'];
 x.how=['새 노트북을 만들어요','지침·안내서·보고서 PDF를 소스로 넣어요','왼쪽 채팅에서 질문하고 출처 번호로 확인해요','오른쪽 스튜디오에서 만들 자료를 눌러요'];
 x.say='올해 장애인복지관 사업안내에서 작년과 달라진 점을 표로 정리해 줘. 항목·바뀐 내용·쪽수 칸으로, 자료에 없는 건 "자료에 없음"으로.';}
var ST=[['오디오 오버뷰','#3F51B5','<path d="M5 9v6M9 6v12M13 9v6"/><path d="M18 3l.9 2.1L21 6l-2.1.9L18 9l-.9-2.1L15 6l2.1-.9z"/>','자료를 두 사람이 대화하듯 풀어 주는 팟캐스트','출근길에 이어폰으로 올해 운영지침 핵심 15분 듣기'],
 ['슬라이드 자료','#B0457E','<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14"/>','자료 내용으로 발표용 장표 만들기','신규 직원 오리엔테이션 10장'],
 ['동영상 개요','#43A047','<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 10 5-3v10l-5-3"/>','그림과 내레이션이 있는 해설 영상','직원 교육 시간에 지침 요약 영상 틀기'],
 ['마인드맵','#6A5ACD','<rect x="2" y="10" width="5" height="4" rx="1"/><rect x="16" y="3" width="6" height="4" rx="1"/><rect x="16" y="10" width="6" height="4" rx="1"/><rect x="16" y="17" width="6" height="4" rx="1"/><path d="M7 12h4M11 5v14M11 5h5M11 12h5M11 19h5"/>','주제와 하위 내용을 가지 그림으로','사업안내 전체 구조를 한 장으로 보기'],
 ['보고서','#B0457E','<rect x="4" y="7" width="13" height="14" rx="2"/><path d="M7 4h11a2 2 0 0 1 2 2v11"/><path d="M19 1.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z"/>','브리핑 문서·요약 보고서·학습 가이드','팀장 보고용 "올해 바뀐 점" 1쪽 요약'],
 ['플래시카드','#E0892E','<rect x="8" y="3" width="12" height="15" rx="2"/><path d="M5 7v12a2 2 0 0 0 2 2h9"/>','앞면 질문·뒷면 답 암기 카드','평가지표·법정 기준 외우기'],
 ['퀴즈','#3D6E8F','<rect x="7" y="3" width="14" height="14" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h12"/><path d="M12 8a2 2 0 1 1 2.5 2c-.6.3-.5.8-.5 1.5M14 14h0"/>','이해했는지 확인하는 객관식 문제','신규 직원 지침 이해도 10문제'],
 ['인포그래픽','#E0892E','<path d="M6 20V10M10 20v-6M14 20V8M18 20v-3"/><circle cx="6" cy="5" r="1.4"/><circle cx="14" cy="4" r="1.4"/>','핵심 숫자·흐름을 그림 한 장으로','보호자 안내용 서비스 이용 절차 한 장']];
var BEST=[['지침·안내서','두꺼운 사업안내·운영지침 PDF','"주간이용센터 인력 기준 몇 쪽이야?"'],['작년 보고서','결과보고서·평가 자료','"작년 성과지표 실적만 표로"'],['교육 자료','법정 의무교육·매뉴얼','"신규 직원용 퀴즈 10문제"'],['회의·상담 기록','가명 처리한 회의록 여러 개','"반복해서 나온 건의사항 정리"']];
function studio(){return '<section class="nb"><h4>스튜디오 — 버튼 하나로 만드는 8가지</h4><div class="nb-g">'+ST.map(function(t){return '<div class="nb-a"><span class="nb-i" style="color:'+t[1]+'"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+t[2]+'</svg></span><b>'+e(t[0])+'</b><small>'+e(t[3])+'</small><p><em>예시</em>'+e(t[4])+'</p></div>'}).join('')+'</div>'+
 '<h4>이런 자료를 넣을 때 가장 좋아요</h4><div class="nb-b">'+BEST.map(function(b){return '<div><b>'+e(b[0])+'</b><small>'+e(b[1])+'</small><p>'+e(b[2])+'</p></div>'}).join('')+'</div><p class="hub-n">스튜디오 메뉴 이름·개수는 업데이트에 따라 달라질 수 있어요. 소스는 노트북 하나에 여러 개 넣을 수 있어요.</p></section>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A||A.n!=='제미나이')return;var C=A.cards[S.fc||0];if(!C||C.n!=='노트북')return;
 var sld=document.querySelector('#R .sld');if(!sld||sld.dataset.nb)return;sld.dataset.nb=1;var say=sld.querySelector('.sld-say'),w=sld.querySelector('.sld-w');
 sld.innerHTML='<p class="nb-lead"><b>노트북</b>은 내가 넣은 지침·안내서·보고서(소스)만 읽고 답하는 자료 작업실이에요. 답마다 몇 쪽인지 출처 번호가 붙고, 같은 자료로 아래 스튜디오 8가지를 버튼 하나로 만들어요.</p>'+studio()+'<section class="nb-pros"><h4>장점</h4><ul>'+x.pros.map(function(p){return '<li>'+e(p)+'</li>'}).join('')+'</ul></section>'+(say?say.outerHTML:'')+(w?w.outerHTML:'');
 var cp=sld.querySelector('.sld-cp');if(cp)cp.onclick=function(){try{navigator.clipboard.writeText(x.say)}catch(er){}cp.textContent='복사됨';setTimeout(function(){cp.textContent='복사'},1200)};
 var bd=document.querySelector('#app .pane .bd');if(bd&&!bd.querySelector('.nb-how'))bd.insertAdjacentHTML('beforeend','<div class="nb-how"><h4>노트북 쓰는 법</h4><ol><li><b>새 노트북</b> 만들기<small>notebooklm.google.com 또는 제미나이 왼쪽 메뉴</small></li><li><b>소스 추가</b><small>지침·안내서·보고서 PDF, 구글 문서, 웹 링크</small></li><li><b>왼쪽 채팅에서 질문</b><small>답 옆 출처 번호를 눌러 원문 확인</small></li><li><b>오른쪽 스튜디오</b>에서 만들 자료 누르기<small>오디오·슬라이드·마인드맵·퀴즈 등</small></li></ol><p>자료에 없는 내용은 "자료에 없음"으로 답하게 하세요. 이용자 실명이 든 자료는 넣지 않아요.</p></div>')}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-nb">.nb{border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px;display:grid;gap:12px;background:#fff}.nb h4{margin:0;font-size:15px;font-weight:800;color:#1E5442;padding-bottom:6px;border-bottom:2px solid #E07A2E;justify-self:start}'
+'.nb-g{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.nb-a{border:1px solid #E5E7EA;border-radius:16px;padding:10px 12px;display:grid;gap:4px;align-content:start;background:#fff}.nb-i{display:block}.nb-a b{font-size:15px;color:#111}.nb-a small{font-size:12.5px;color:#4b5a55;line-height:1.45}.nb-a p{margin:2px 0 0;background:#FFF8F1;border-radius:8px;padding:5px 8px;font-size:12.5px;line-height:1.45;font-weight:600}.nb-a p em{font-style:normal;color:#C2652B;font-weight:800;margin-right:5px}'
+'.nb-b{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.nb-b>div{background:#F7FBF8;border:1px solid #D5E5DA;border-radius:12px;padding:9px 11px;display:grid;gap:3px}.nb-b b{color:#2F6B56;font-size:14px}.nb-b small{font-size:12.5px;color:#4b5a55}.nb-b p{margin:0;font-size:12.5px;font-weight:600}'
+'.nb-lead{margin:0;font-size:15px!important;line-height:1.7;background:#F7FBF8;border:1px solid #D5E5DA;border-radius:12px;padding:10px 14px}.nb-lead b{color:#1E5442}.nb-pros{border:1px solid #E3ECE6;border-radius:12px;padding:12px 14px}'
+'.nb-how{margin-top:12px;border:1px solid #D5E5DA;border-radius:12px;padding:12px;background:#fff;display:grid;gap:8px}.nb-how h4{margin:0;font-size:14.5px;font-weight:800;color:#1E5442;padding-bottom:4px;border-bottom:2px solid #E07A2E;justify-self:start}.nb-how ol{margin:0;padding:0;list-style:none;counter-reset:n;display:grid;gap:6px}.nb-how li{counter-increment:n;position:relative;padding:7px 9px 7px 36px;background:#F7FBF8;border-radius:9px;font-size:13.5px}.nb-how li::before{content:counter(n);position:absolute;left:9px;top:8px;width:20px;height:20px;border-radius:50%;background:#E07A2E;color:#fff;font-size:11.5px;font-weight:800;display:grid;place-items:center}.nb-how small{display:block;font-size:12px;color:#66746f}.nb-how p{margin:0;font-size:12.5px;color:#66746f}'
+'@media(max-width:1100px){.nb-g,.nb-b{grid-template-columns:repeat(2,minmax(0,1fr))}}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 AI 맞춤 설정 가이드: 자주 묻는 질문·비교표를 왼쪽에 표로 요약 */
(function(){
function e(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var Q=[['대화가 기록에 안 남게','오른쪽 위 점선 연필 → 임시 채팅','오른쪽 위 말풍선 → 임시 채팅'],
 ['AI 학습에 안 쓰이게','톱니바퀴 → 활동 → 활동 기록 보관 사용 중지','설정 → 데이터 관리 → 데이터 학습 허용 끄기'],
 ['AI가 나를 기억 못 하게','톱니바퀴 → 개인 인텔리전스 → 메모리 끄기','설정 → 개인 맞춤 설정 → 메모리 끄기'],
 ['매번 같은 설명 안 하게','개인 인텔리전스 → Gemini 요청 사항 → + 추가','개인 맞춤 설정 → 사용자 지정 지침'],
 ['이미 남은 기록 지우기','톱니바퀴 → 활동 → 기록 삭제','대화 옆 ⋯ → 삭제 (설정 → 데이터 관리 → 모두 삭제)']];
function sum(){var t=document.querySelector('#aig .aig-tbl table');
 return '<div class="aigL"><h4>이럴 땐 이렇게</h4><table class="aigq"><thead><tr><th>하고 싶은 것</th><th>제미나이</th><th>ChatGPT</th></tr></thead><tbody>'+Q.map(function(r){return '<tr><th>'+e(r[0])+'</th><td>'+e(r[1])+'</td><td>'+e(r[2])+'</td></tr>'}).join('')+'</tbody></table>'+
 (t?'<h4>설정별로 무엇이 남나요</h4>'+t.outerHTML.replace('<table','<table class="aigc"'):'')+'<p class="aigL-n">임시 채팅·기록 중지도 안전 확인을 위해 잠시(제미나이 72시간, ChatGPT 최대 30일) 보관돼요.</p></div>'}
function put(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A||!A.aig)return;var bd=document.querySelector('#app .pane .bd');if(!bd||!document.getElementById('aig'))return;
 var old=bd.querySelector('.aigL');var h=sum();if(old){if(old.outerHTML!==h)old.outerHTML=h}else bd.insertAdjacentHTML('beforeend',h);
 var ag=document.getElementById('aig');if(ag&&!ag._o){ag._o=1;new MutationObserver(function(){clearTimeout(ag._t);ag._t=setTimeout(put,30)}).observe(ag,{childList:true,subtree:true})}}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{put()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-aigL">#aig .aig-low,#aig .aig-tbl{display:none!important}'
+'.aigL{margin-top:12px;display:grid;gap:8px}.aigL h4{margin:4px 0 0;font-size:14.5px;font-weight:800;color:#1E5442;padding-bottom:4px;border-bottom:2px solid #E07A2E;justify-self:start}'
+'.aigL table{width:100%;border-collapse:collapse;font-size:12.5px;line-height:1.45;background:#fff}.aigL th,.aigL td{border:1px solid #D5E5DA;padding:6px 7px;vertical-align:top;text-align:left}'
+'.aigL thead th{background:#2F6B56;color:#fff;font-weight:700;text-align:center}.aigq tbody th{background:#FFF4EA;color:#9A4A12;font-weight:800;width:28%}.aigq td{font-weight:600}'
+'.aigc thead th,.aigc tr:first-child th,.aigc tr:first-child td{background:#2F6B56!important;color:#fff!important;text-align:center}.aigc td{text-align:center}.aigc tr>*:first-child{text-align:left;background:#F7FBF8;font-weight:700}'
+'.aigL-n{margin:0;font-size:12px;color:#66746f}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 제미나이 캔버스: 실제 시작 화면 + 캔버스 창 구조 그림 */
(function(){
function cv(){return '<section class="cvw"><h4>캔버스 화면은 이렇게 생겼어요</h4><div class="cvw-g">'+
 '<figure class="cvw-s"><img src="/img/giheung/gem/canvas-start.webp" alt="제미나이 Canvas 켠 시작 화면" onclick="typeof zoomImg===\'function\'&&zoomImg(this.src)"><figcaption><i>1</i>[+] → 도구 → <b>Canvas</b>를 켜면 입력창 위에 Canvas 표시가 붙어요</figcaption></figure>'+
 '<div class="cvw-m"><div class="cvw-win"><div class="cvw-chat"><span class="cvw-tag"><i>2</i>채팅</span><div class="b u">송년 음악회 안내 웹페이지를 휴대폰에서 잘 보이게 만들어 줘</div><div class="b g">캔버스에 안내 페이지를 만들었어요. 색이나 문구를 바꿔 볼까요?</div><div class="b u">버튼 색을 초록으로 바꿔 줘</div><div class="cvw-in">요청 계속 입력…</div></div>'+
 '<div class="cvw-cv"><div class="cvw-bar"><span class="cvw-tag"><i>3</i>캔버스 창</span><span class="cvw-tab"><b>미리보기</b><em>코드</em></span><span class="cvw-act"><i>4</i>공유 · 내보내기</span></div>'+
 '<div class="cvw-pg"><div class="cvw-hero">송년 음악회<small>함께여서 빛나는 우리</small></div><div class="cvw-row"><span>일시 12.18(목) 14:00</span><span>장소 복지관 강당</span></div><div class="cvw-btn">참가 신청하기</div><span class="cvw-sel">더 짧게 · 쉬운 말로 · 고치기</span><span class="cvw-tag t5"><i>5</i>글자를 드래그해서 바로 고치기</span></div>'+
 '<div class="cvw-mk"><span class="cvw-tag"><i>6</i>만들기</span><em>웹페이지</em><em>인포그래픽</em><em>퀴즈</em><em>오디오 개요</em></div></div></div></div></div>'+
 '<ol class="cvw-l"><li><b>채팅</b> 왼쪽에서 계속 말로 고칠 것을 요청</li><li><b>캔버스 창</b> 오른쪽 큰 화면에 결과물이 바로 열림</li><li><b>미리보기·코드</b> 웹페이지는 실제 모습으로 확인</li><li><b>공유·내보내기</b> 링크 공유, 구글 문서로 내보내기</li><li><b>드래그해서 고치기</b> 문장을 골라 "더 짧게·쉬운 말로"</li><li><b>만들기</b> 같은 내용을 웹페이지·인포그래픽·퀴즈로 바꾸기</li></ol></section>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A||A.n!=='제미나이')return;var C=A.cards[S.fc||0];if(!C||C.n!=='캔버스')return;
 var p=document.querySelector('#R .sld .sld-path');if(!p||document.querySelector('#R .cvw'))return;p.insertAdjacentHTML('afterend',cv())}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-cvw">.cvw{border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px;display:grid;gap:10px;background:#fff}.cvw h4{margin:0;font-size:15px;font-weight:800;color:#1E5442;padding-bottom:6px;border-bottom:2px solid #E07A2E;justify-self:start}'
+'.cvw-g{display:grid;grid-template-columns:240px 1fr;gap:12px;align-items:start}.cvw-s{margin:0;border:1px solid #DADCE0;border-radius:12px;overflow:hidden}.cvw-s img{width:100%;display:block;cursor:zoom-in}.cvw-s figcaption{font-size:12.5px;padding:7px 9px;border-top:1px solid #E8EAED;line-height:1.5}'
+'.cvw i{font-style:normal;display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#E07A2E;color:#fff;font-size:11px;font-weight:800;margin-right:4px;vertical-align:1px}'
+'.cvw-win{border:1px solid #DADCE0;border-radius:14px;overflow:hidden;display:grid;grid-template-columns:38% 62%;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.06);min-height:300px}'
+'.cvw-chat{background:#F8FAFD;padding:10px;display:flex;flex-direction:column;gap:7px;border-right:1px solid #E8EAED}.cvw-chat .b{font-size:12px;line-height:1.45;border-radius:12px;padding:7px 9px;max-width:92%}.cvw-chat .u{align-self:flex-end;background:#E9EEF6}.cvw-chat .g{background:#fff;border:1px solid #E8EAED}.cvw-in{margin-top:auto;border:1px solid #DADCE0;border-radius:999px;padding:6px 10px;font-size:11.5px;color:#80868B;background:#fff}'
+'.cvw-tag{font-size:12px;font-weight:800;color:#9A4A12;background:#FFF1E6;border:1px solid #F0B98C;border-radius:999px;padding:2px 8px 2px 3px;align-self:flex-start;white-space:nowrap}'
+'.cvw-cv{display:flex;flex-direction:column}.cvw-bar{display:flex;align-items:center;gap:8px;padding:7px 10px;border-bottom:1px solid #E8EAED;flex-wrap:wrap}.cvw-tab{display:inline-flex;border:1px solid #DADCE0;border-radius:999px;overflow:hidden;font-size:11.5px}.cvw-tab b,.cvw-tab em{font-style:normal;padding:3px 9px}.cvw-tab b{background:#D3E3FD;color:#0B57D0}.cvw-act{margin-left:auto;font-size:12px;font-weight:700;color:#0B57D0}'
+'.cvw-pg{position:relative;margin:10px;border:1px solid #E8EAED;border-radius:12px;padding:12px;display:grid;gap:8px;background:#fff}.cvw-hero{background:linear-gradient(135deg,#2F6B56,#3E8A6F);color:#fff;border-radius:10px;padding:12px;font-size:18px;font-weight:800}.cvw-hero small{display:block;font-size:12px;font-weight:500;opacity:.9}.cvw-row{display:flex;gap:6px;flex-wrap:wrap}.cvw-row span{font-size:12px;background:#F1F8F3;border-radius:8px;padding:5px 8px}.cvw-btn{justify-self:start;background:#2F6B56;color:#fff;border-radius:999px;padding:6px 14px;font-size:12.5px;font-weight:800}'
+'.cvw-sel{position:absolute;right:10px;top:46px;background:#fff;border:1px solid #DADCE0;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:11px;padding:4px 8px;color:#3C4043}.cvw-tag.t5{position:absolute;right:10px;bottom:-11px;background:#fff}'
+'.cvw-mk{display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding:10px;border-top:1px solid #E8EAED;margin-top:auto}.cvw-mk em{font-style:normal;font-size:11.5px;border:1px solid #DADCE0;border-radius:999px;padding:3px 9px}'
+'.cvw-l{margin:0;padding:0;list-style:none;counter-reset:n;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.cvw-l li{counter-increment:n;position:relative;font-size:12.5px;line-height:1.45;background:#F7FBF8;border-radius:9px;padding:7px 9px 7px 32px}.cvw-l li::before{content:counter(n);position:absolute;left:8px;top:8px;width:18px;height:18px;border-radius:50%;background:#E07A2E;color:#fff;font-size:11px;font-weight:800;display:grid;place-items:center}.cvw-l b{display:block;color:#1E5442}'
+'@media(max-width:1100px){.cvw-g{grid-template-columns:1fr}.cvw-l{grid-template-columns:1fr 1fr}}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 Claude 아티팩트 창 · 모션그래픽 실제 결과 */
(function(){
function art(){var T=[['문서','#3D6FD8','안내문·보고서·회의록','송년회 안내문 → 워드·PDF'],['슬라이드','#B4541A','발표 장표','운영위원회 보고 10장 → PPT'],['스프레드시트','#2E7D32','표·명단·계산 (베타)','12월 참여자 명단·출석률'],['디자인','#6A4FD8','포스터·안내지·카드뉴스','송년회 포스터 시안 2개'],['데이터','#B23A3A','차트·대시보드','월별 참여 인원 그래프'],['화이트보드','#A8457E','아이디어·흐름도 (베타)','행사 준비 흐름도']];
 return '<section class="cvw"><h4>아티팩트 화면 (실제 화면)</h4><div class="ac-g"><figure class="cvw-s ac-img"><img src="/img/giheung/claude/artifacts.webp" alt="Claude 아티팩트 화면" onclick="typeof zoomImg===\'function\'&&zoomImg(this.src)"><figcaption>왼쪽 메뉴 [아티팩트]를 누르면 열리는 화면 · 누르면 크게 보여요</figcaption></figure>'+
 '<div class="ac-r"><ol class="cvw-l one"><li><b>전체 · 내 항목 · 공유받음</b>내가 만든 것과 공유받은 결과물을 나눠 보기</li><li><b>검색 · 정렬 · 보기 · +</b>결과물 찾기, + 로 새로 만들기</li><li><b>새로운 무언가 만들기</b>아래 6가지 중 골라서 바로 시작</li><li><b>아래쪽 카드 목록</b>만든 결과물이 카드로 모여 다시 열고 고치기</li></ol></div></div>'+
 '<div class="ac-t">'+T.map(function(t,i){return '<div class="ac-c"><span class="ac-n" style="background:'+t[1]+'">'+(i+1)+'</span><b style="color:'+t[1]+'">'+t[0]+'</b><small>'+t[2]+'</small><p><em>예시</em>'+t[3]+'</p></div>'}).join('')+'</div>'+
 '<p class="hub-n">Claude Design·Slides로 만든 것도 이제 아티팩트로 저장돼요. 메뉴 이름은 업데이트에 따라 바뀔 수 있어요.</p></section>'}
function mot(){return '<section class="cvw"><h4>이런 화면이 나와요 (실제 재생)</h4><div class="mv"><div class="mv-f"><iframe src="/giheung/v2/demo/motion.html" title="모션그래픽 결과 예시" loading="lazy"></iframe></div>'+
 '<div class="mv-t"><p><b>"모집 안내가 제목→일시→장소→문의 순서로 하나씩 나타나는 15초 화면 만들어 줘"</b>라고 하면 왼쪽처럼 글자가 차례로 나타나는 화면이 만들어져요.</p><ol class="cvw-l one"><li><b>재생 확인</b> 아티팩트 창에서 바로 재생</li><li><b>고치기</b> "더 천천히", "글자 더 크게"라고 말하기</li><li><b>전체 화면</b> 로비 TV에 띄우기</li><li><b>녹화</b> Win + Alt + R로 영상 파일 만들기</li></ol></div></div></section>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A||A.n!=='Claude')return;var C=A.cards[S.fc||0];if(!C)return;
 var f=C.n==='아티팩트'?art:C.n==='모션그래픽'?mot:null;if(!f)return;var p=document.querySelector('#R .sld .sld-path');if(!p||document.querySelector('#R .cvw'))return;p.insertAdjacentHTML('afterend',f())}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-aw">.aw{grid-template-columns:32% 68%!important}.aw-doc{margin:10px;border:1px solid #E8EAED;border-radius:10px;overflow:hidden;height:330px;background:#fff}.aw-doc iframe{width:100%;height:100%;border:0;display:block}'
+'.ac-g{display:grid;grid-template-columns:1.5fr 1fr;gap:12px;align-items:start}.ac-img img{width:100%}.ac-t{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.ac-c{border:1px solid #E3ECE6;border-radius:12px;padding:9px 11px;display:grid;gap:3px;align-content:start}.ac-n{width:20px;height:20px;border-radius:6px;color:#fff;font-size:11.5px;font-weight:800;display:grid;place-items:center}.ac-c b{font-size:15px}.ac-c small{font-size:12.5px;color:#4b5a55}.ac-c p{margin:2px 0 0;background:#FFF8F1;border-radius:8px;padding:5px 8px;font-size:12.5px;font-weight:600}.ac-c p em{font-style:normal;color:#C2652B;font-weight:800;margin-right:5px}.cvw-l.one b{display:block}@media(max-width:1100px){.ac-g{grid-template-columns:1fr}.ac-t{grid-template-columns:1fr 1fr}}'
+'.mv{display:grid;grid-template-columns:1.3fr 1fr;gap:12px;align-items:start}.mv-f{aspect-ratio:16/9;border-radius:12px;overflow:hidden;border:1px solid #DADCE0;box-shadow:0 4px 14px rgba(0,0,0,.08)}.mv-f iframe{width:100%;height:100%;border:0;display:block}.mv-t p{margin:0 0 8px;font-size:14px;line-height:1.65}.cvw-l.one{grid-template-columns:1fr}@media(max-width:1100px){.mv{grid-template-columns:1fr}}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
/* 2026.11.26 실제 화면 캡처 넣기 (그린 화면 대신) */
(function(){
var P='/img/giheung/cap/';
var C={
'ChatGPT|라이브러리':[['gpt_library','왼쪽 메뉴 → 이미지: 만든 그림이 모두 모여 있어요']],
'ChatGPT|스페이스':[['gpt_space','페이지·슬라이드·시트·이미지·사이트를 한곳에서 만들고 모아 봐요']],
'ChatGPT|예약':[['gpt_sched','예약 화면: 새 작업 만들기, 진행 중·완료된 예약 목록']],
'ChatGPT|플러그인':[['gpt_plugin','플러그인 화면: 설치된 앱(Canva·Gmail·Drive·Higgsfield 등)과 추가할 앱 목록']],
'ChatGPT|프로젝트':[['gpt_project_new','프로젝트 만들기: 이름을 정하면 채팅·파일·지침이 한 자리에 모여요']],
'ChatGPT|웹 검색':[['gpt_plus','입력창 [+] 메뉴 → 웹 검색']],
'ChatGPT|심층 리서치':[['gpt_plus','입력창 [+] 메뉴 → 심층 리서치']],
'ChatGPT|스케치':[['gpt_plus','입력창 [+] 메뉴 → 스케치']],
'ChatGPT|파일 가져오기':[['gpt_plus','입력창 [+] 메뉴 → 라이브러리에서 가져오기 · Google Drive']],
'제미나이|Deep Research':[['gem_deep','Deep Research를 켜면 "무엇을 조사하고 싶으신가요?"로 바뀌어요']],
'제미나이|캔버스':[['gem_canvas_inline','Canvas를 켜고 요청하면 대화 안에 결과 창이 열려요 (코드·미리보기·내보내기·공유)'],['gem_canvas','크게 펼친 캔버스: 오른쪽 아래 창에서 계속 말로 고쳐요']],
'제미나이|노트북':[['gem_notebook','왼쪽 출처 · 가운데 채팅 · 오른쪽 스튜디오']],
'제미나이|예약':[['gem_side','왼쪽 메뉴 → 예약']],
'제미나이|음악 30초':[['gem_plus','입력창 [+] → 음악 만들기']],
'제미나이|영상 만들기':[['gem_plus','입력창 [+] → 동영상 만들기 (자물쇠 = 유료)']],
'제미나이|가이드 학습':[['gem_tools','[+] → 도구 더보기 → 가이드 학습']],
'제미나이|개인 인텔리전스':[['gem_tools','[+] → 도구 더보기 → 개인 인텔리전스 (Labs) 켜기']],
'제미나이|태스크':[['gem_plus','입력창 위 [채팅 · 태스크] 중 태스크']],
'Canva|AI 프레젠테이션':[['canva_ai','왼쪽 Canva AI → 만들 것 설명 · 아래에서 프레젠테이션 고르기']],
'Canva|템플릿·디자인 만들기':[['canva_tpl','왼쪽 템플릿 → 검색하거나 종류 고르기']],
'Canva|AI 앱과 연결':[['gpt_plugin','ChatGPT 플러그인 화면에 Canva가 설치된 모습']]};
var M={'ChatGPT':['gpt_more','gpt_plus'],'제미나이':['gem_tools','gem_side2'],'Canva':['canva_home']};
function fig(a){return '<figure class="rc"><img src="'+P+a[0]+'.webp" alt="'+a[1]+'" loading="lazy" onclick="typeof zoomImg===\'function\'&&zoomImg(this.src)"><figcaption>'+a[1]+'</figcaption></figure>'}
function post(){if(typeof VIEW==='undefined'||VIEW!=='apps')return;var A=APPS[S.app||0];if(!A)return;var Cd=A.cards[S.fc||0];if(!Cd)return;var R=document.getElementById('R');if(!R||R.querySelector('.rc'))return;
 if(Cd.n==='메뉴 사용설명서'&&M[A.n]){var gs=R.querySelectorAll('.man-mock');gs.forEach(function(g,i){var im=M[A.n][i];if(!im)return;var w=document.createElement('div');w.className='rc-g';g.parentNode.insertBefore(w,g);w.innerHTML=fig([im,'실제 화면']);w.appendChild(g);g.classList.add('rc-list')});R.querySelector('.man-gs')&&R.querySelector('.man-gs').classList.add('rc-one');return}
 var L=C[A.n+'|'+Cd.n];if(!L)return;var h='<section class="rcs"><h4>실제 화면</h4><div class="rc-w'+(L.length>1?' two':'')+'">'+L.map(fig).join('')+'</div></section>';
 var cv=R.querySelector('.cvw');if(A.n==='제미나이'&&Cd.n==='캔버스'&&cv){cv.outerHTML=h;return}
 var at=R.querySelector('.nb-lead')||R.querySelector('.sld-path');if(at)at.insertAdjacentHTML('afterend',h)}
var _r=render;render=function(){var r=_r.apply(this,arguments);try{post()}catch(er){console.error(er)}return r};
document.head.insertAdjacentHTML('beforeend','<style id="gh-rc">.rcs{border:1px solid #D5E5DA;border-radius:12px;padding:12px 14px;display:grid;gap:10px;background:#fff}.rcs h4{margin:0;font-size:15px;font-weight:800;color:#1E5442;padding-bottom:6px;border-bottom:2px solid #E07A2E;justify-self:start}'
+'.rc-w{display:grid;grid-template-columns:minmax(0,560px);justify-content:center}.rc-w.two{grid-template-columns:1fr 1fr;justify-content:stretch}'
+'.rc{margin:0;border:1px solid #CFD6D2;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.08)}.rc img{width:100%;display:block;cursor:zoom-in}.rc figcaption{font-size:13px;padding:8px 10px;border-top:1px solid #E3ECE6;background:#F7FBF8;font-weight:600}'
+'.man-gs.rc-one{grid-template-columns:1fr!important}.rc-g{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:14px;align-items:start}.rc-g .rc figcaption{display:none}.rc-list{box-shadow:none!important;border-color:#E3ECE6!important}'
+'@media(max-width:1000px){.rc-g,.rc-w.two{grid-template-columns:1fr}}</style>');
if(typeof VIEW!=='undefined'&&VIEW==='apps')render();
})();
