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
