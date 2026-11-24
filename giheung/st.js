
(function(){
var ST={step:0,o:{cloth:0,bg:0,face:0,season:2,scene:'',fd:-1,fdIn:'',fpT:'',fpIn:''}};
try{var sv=JSON.parse(localStorage.getItem('st-gh-v1')||'null');if(sv&&sv.o)ST.o=Object.assign(ST.o,sv.o)}catch(e){}
function save(){try{localStorage.setItem('st-gh-v1',JSON.stringify({o:ST.o}))}catch(e){}}
function esc(t){return String(t==null?'':t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var CLOTH=['흰 셔츠 + 검정 정장 재킷','흰 셔츠 + 남색 정장 재킷','흰 블라우스 + 베이지 재킷','흰 블라우스 (재킷 없이)','흰 셔츠 (재킷 없이)'];
var BG=['흰색','연한 하늘색','연한 회색'];
var FACE=['아주 옅은 미소','은은한 미소'];var FACEP=['입을 다문 채 입꼬리만 아주 살짝 올린 옅은 미소(이는 보이지 않게, 자연스럽고 차분한 인상)','입꼬리를 살짝 올린 은은한 미소(이는 거의 보이지 않게)'];
var SEASON=[
 {n:'봄',ex:'교토 벚꽃길 / 파리 튈르리 정원 / 네덜란드 튤립 정원 / 진해 여좌천 벚꽃 / 제주 유채꽃밭 / 경주 보문호 벚꽃',avoid:'두꺼운 코트·목도리 같은 겨울옷',fit:'가볍고 화사한 봄 재킷·니트'},
 {n:'여름',ex:'그리스 산토리니 / 하와이 해변 / 이탈리아 아말피 해안 / 제주 협재 바다 / 남해 다랭이마을 / 강릉 경포 해변',avoid:'두꺼운 겨울옷',fit:'시원하고 세련된 여름옷'},
 {n:'가을',ex:'파리 센 강변 노을 / 프라하 카를교 야경 / 스위스 알프스 호숫가 / 교토 단풍 사찰 / 제주 억새 오름 / 서울 한강 야경 / 경주 은행나무길 / 순천만 갈대밭 노을',avoid:'두꺼운 코트·목도리 같은 겨울옷',fit:'요즘 감각의 세련된 가을 패션'},
 {n:'겨울',ex:'핀란드 오로라 설원 / 오스트리아 할슈타트 설경 / 뉴욕 크리스마스 거리 / 삿포로 눈 축제 / 평창 설원 / 서울 덕수궁 돌담길 눈 / 부산 해운대 겨울 바다 야경',avoid:'너무 얇은 여름옷',fit:'따뜻하고 세련된 겨울 코트·니트 패션'}];
var TITLE=['3년 차 선임','팀장','실장','원장','사장님(대표)','프리랜서 전문가'];
var DREAM=['배운 기술로 단골손님이 생긴 일터를 지키고 있어요','후배를 가르치는 든든한 선임이 되었어요','다시 시작한 일로 가족에게 자랑스러운 사람이 되었어요','내 이름을 건 가게를 열었어요','AI를 잘 다루는 일잘러로 인정받고 있어요','자격증을 따서 원하던 일을 하고 있어요'];
var STEPS=['증명사진','가장 나다운 지금의 나','10년 후 나의 모습','응원 엽서'];
var FD=['관장이 되어 직원들과 회의를 이끄는 모습','장애인복지 전문가로 무대에서 강연하는 모습','내 집 마련 후 가족과 집들이하는 모습','가족과 해외여행을 떠난 모습','내 이름으로 낸 책을 들고 있는 작가의 모습','대학원 졸업식에서 학위모를 쓴 모습','전원주택 마당에서 텃밭을 가꾸는 모습','내 카페·공방을 연 사장님의 모습','마라톤을 완주한 건강한 모습','후배들에게 존경받는 멘토로 상을 받는 모습'];
var FP=['센터장실 창가','대학 강당 무대','내 집 거실','파리 에펠탑 앞','스위스 알프스 호숫가','제주 바닷가','전주 한옥마을','전원주택 마당','크루즈 갑판','시상식 무대'];
var FPM=[['센터장실 창가','회의실','센터 개소식 행사장','센터 앞 현판'],['대학 강당 무대','전국 워크숍 단상','방송 스튜디오'],['햇살 드는 거실','정원 있는 마당','바다 보이는 테라스','새집 현관 앞'],['파리 에펠탑','스위스 알프스','그리스 산토리니','뉴욕 센트럴파크','교토 단풍길'],['서점 사인회','북카페','출판 기념회'],['캠퍼스 잔디밭','졸업식장','도서관 앞'],['텃밭','장독대 마당','시골집 툇마루'],['가게 앞 간판','카운터','작업대'],['결승선','해변 러닝 코스','시상대'],['시상식 무대','기념 촬영 포토월']];
function fpList(){var o=ST.o;return (!o.fdIn.trim()&&o.fd>-1&&FPM[o.fd])?FPM[o.fd]:FP}
function today(){var d=new Date();return d.getFullYear()+'. '+String(d.getMonth()+1).padStart(2,'0')+'. '+String(d.getDate()).padStart(2,'0')}

function U(t){return '<span class="u">'+esc(t)+'</span>'}
function prompt(html){var o=ST.o,s=ST.step,L=[];
 var w=html?U:function(t){return t};
 if(s===0){L=['첨부한 내 사진으로 직원 프로필·사원증에 쓸 증명사진을 만들어 줘.',
  '- 얼굴 생김새·피부 톤·나이는 실물 그대로, 보정은 자연스럽게 살짝만.',
  '- 옷: '+w(CLOTH[o.cloth])+', 단정하게.',
  '- 배경: '+w(BG[o.bg])+' 단색, 그림자 없이 고르고 밝은 조명.',
  '- 표정: '+w(FACEP[o.face]||FACEP[0])+', 정면, 어깨까지 보이는 상반신, 머리는 단정하게 정리.',
  '- 크기: 세로 3×4 증명사진 비율, 질문 없이 바로 만들어 줘.']}
 if(s===1){var se=SEASON[o.season];
  L=['사진 속 인물의 얼굴 생김새만 실물과 가깝게 하고, 표정·동작·포즈·시선·머리·옷은 선택한 배경에 어울리도록 만들어 줘.',
  '아래에 내가 적은 '+w(se.n)+' 풍경 속에서 찍은 \'가장 나다운 지금의 나\' 사진을 만들어 줘. 적은 내용이 없으면 인물의 분위기에 가장 어울리는 국내외 '+se.n+' 명소를 네가 골라 줘.',
  '그 장소가 가장 아름답게 빛나는 시간(맑은 낮, 노을, 야경 중)과 그곳 '+se.n+'의 특별한 풍경을 살리고, 인물에게는 그 장소와 옷 색이 가장 조화로운 '+se.fit+'을 입혀 줘.',
  '하이엔드 패션 매거진의 인물 화보처럼, 시네마틱한 조명과 깊이 있는 색감, 인물에 초점이 맞고 배경은 부드럽게 흐려진 얕은 심도로 만들어 줘.',
  '인물에게서는 세월이 쌓인 깊이와 성숙한 여유가 배어 나오도록, 자연스럽고 은은한 미소와 자신감 있고 우아한 자세로 표현하고, 장소가 어디인지 배경에 맞게 분위기 있게 넣어 줘.',
  se.avoid+'과 증명사진처럼 정면에 선 자세는 피해 줘.',
  '하단에 "'+today()+'"로 작게 넣고, 세로(2:3)로 질문 없이 바로 만들어 줘.',
  '',
  (html?'<span class="b">지금의 나를 가장 빛나게 할 '+esc(se.n)+' 풍경은?:</span> ':'지금의 나를 가장 빛나게 할 '+se.n+' 풍경은?: ')+(o.scene.trim()?w(o.scene.trim()):(html?'<span class="stph">(비워 두면 AI가 골라요) 예) '+esc(se.ex.split(' / ').slice(0,3).join(' / '))+'</span>':''))]}
 if(s===2){var d=o.fdIn.trim()||(o.fd>-1?FD[o.fd]:''),pl=o.fpIn.trim()||o.fpT,yr=new Date().getFullYear()+10;
  L=['첨부한 내 사진 속 얼굴로, 10년 후 꿈을 이룬 나의 모습을 하이엔드 패션 매거진 화보 한 장으로 만들어 줘.','',
  '[10년 후의 나]',
  '- 꿈을 이룬 장면: '+(d?w(d):(html?'<span class="stph">(왼쪽에서 고르거나 직접 쓰세요)</span>':'(내가 꿈꾸는 10년 후 모습)')),
  '- 배경: '+(pl?w(pl):'그 장면에 가장 잘 어울리는 배경을 네가 골라 줘'),'',
  '[화보 연출]',
  '- 성공한 커리어 우먼의 분위기가 물씬 풍기게, 강하고 아름답고 우아하게 표현해 줘. (사진 속 인물이 남성이면 성공한 커리어 리더로)',
  '- 얼굴 생김새는 실물과 가깝게, 나이는 지금보다 10년 지난 모습으로. 세월이 쌓인 여유와 자신감이 배어 나오게.',
  '- 옷차림·헤어·메이크업은 그 장면과 배경에 가장 잘 어울리는 세련된 스타일로.',
  '- 인물과 배경이 자연스럽게 어우러지게. 그 장소가 가장 아름다운 시간과 빛을 네가 골라 시네마틱한 조명과 깊이 있는 색감으로.',
  '- 자신감 있고 우아한 자세와 은은한 미소. 증명사진처럼 정면에 똑바로 선 자세는 피해 줘.',
  '- 하단에 작게 "10년 후, '+yr+'"을 넣고, 세로(2:3)로 질문 없이 바로 만들어 줘.']}
 return L.join('\n')}
function chips(arr,key,multi){var o=ST.o;return '<div class="st-chips">'+arr.map(function(x,i){var on=multi?!!o[key][i]:o[key]===i;return '<button type="button" data-stc="'+key+'" data-i="'+i+'"'+(on?' class="on"':'')+'>'+esc(x)+'</button>'}).join('')+'</div>'}
function left(){var o=ST.o,s=ST.step;
 if(s===0)return '<div class="st-q q1"><em>1</em>옷</div>'+chips(CLOTH,'cloth')+'<div class="st-q q2"><em>2</em>배경색</div>'+chips(BG,'bg')+'<div class="st-q q3"><em>3</em>표정</div>'+chips(FACE,'face');
 if(s===1)return '<div class="st-q q1"><em>1</em>계절</div>'+chips(SEASON.map(function(x){return x.n}),'season')+'<div class="st-q q2"><em>2</em>지금의 나를 가장 빛나게 할 풍경 <small>비워 두면 AI가 골라요</small></div><div class="st-chips">'+SEASON[o.season].ex.split(' / ').map(function(x){return '<button type="button" data-stscene="'+esc(x)+'"'+(o.scene.trim()===x?' class="on"':'')+'>'+esc(x)+'</button>'}).join('')+'</div><input class="st-in" data-sti="scene" value="'+esc(o.scene)+'" placeholder="직접 쓰기 (예: 우리 동네 단골 카페 창가)">';
 return '<div class="st-q q1"><em>1</em>10년 후 꿈을 이룬 나는? <small>하나 고르거나 직접 쓰기</small></div>'+chips(FD,'fd')+'<input class="st-in" data-sti="fdIn" value="'+esc(o.fdIn)+'" placeholder="직접 쓰기 (예: 우리 센터 프로그램이 전국 우수사례로 뽑혀 발표하는 모습)">'+
 '<div class="st-q q2"><em>2</em>배경 <small>꿈에 맞는 예시 · 비워 두면 AI가 골라요</small></div><div class="st-chips">'+fpList().map(function(t){return '<button type="button" data-stbg="'+esc(t)+'"'+(o.fpT===t&&!o.fpIn.trim()?' class="on"':'')+'>'+esc(t)+'</button>'}).join('')+'</div><input class="st-in" data-sti="fpIn" value="'+esc(o.fpIn)+'" placeholder="직접 쓰기 (예: 고향 바닷가 마을)">'}
var INFO=[['내 얼굴이 잘 나온 셀카 1장','없어요 (왼쪽에서 고르기)','직원 소개·프로필·명함 사진으로 쓸 수 있어요'],
 ['1단계에서 만든 증명사진','지금의 나를 가장 빛나게 할 풍경','단풍만이 아니라 야경·노을·바다·설경도 좋아요 · 옷이 어색하면 "계절에 맞는 옷으로 다시"'],
 ['1단계에서 만든 증명사진','10년 후 꿈 · 배경','어색하면 "표정을 더 자연스럽게", "나이를 조금 더 젊게"처럼 한 줄만 보내요']];
function card4(){return '<div class="st-box st-card4"><svg viewBox="0 0 160 110" aria-hidden="true"><rect x="8" y="14" width="144" height="86" rx="8" fill="#fffaf2" stroke="#C96A2B" stroke-width="3"/><path d="M80 18v78" stroke="#e8cdb6" stroke-width="2"/><rect x="16" y="24" width="56" height="64" rx="4" fill="#ffd9b8"/><circle cx="44" cy="46" r="10" fill="#fff3c4"/><path d="M18 84l18-20 14 12 20-22v38H18z" fill="#f3a46b"/><rect x="118" y="22" width="24" height="28" rx="2" fill="#ffe2cf" stroke="#C96A2B"/><path d="M88 34h22M88 46h26M88 58h24M88 70h20" stroke="#9a8a7c" stroke-width="3" stroke-linecap="round"/><path d="M128 4c-8 0-8 12 0 10 8 2 8-10 0-10z" fill="#f59ab5"/></svg><div><b style="font-size:20px">10년 후의 내가 지금의 나에게 보내는 엽서</b><p style="margin:6px 0 10px;color:#4e5e56">1~3단계로 그린 10년 후의 꿈을 응원 엽서로 마무리해요. "마음 쉼터 → 나를 응원하는 엽서"에서 10년 후 꿈과 지금까지 잘 해 온 나를 고르면 돼요.</p><div class="st-acts"><button type="button" class="h" data-stgo="heart">응원 엽서 만들러 가기 →</button></div></div></div>'}
function body(){var s=ST.step;
 var head='<div class="st-steps">'+STEPS.map(function(n,i){return '<button type="button" data-sts="'+i+'"'+(i===s?' class="on"':'')+'><i>'+(i+1)+'</i>'+esc(n)+'</button>'}).join('')+'</div>';
 if(s===3)return head+card4();
 var I=INFO[s];
 return head+'<div class="st-info"><span><b>사진 첨부</b>'+esc(I[0])+'</span><span><b>채울 빈칸</b>'+esc(I[1])+'</span><span><b>도움말</b>'+esc(I[2])+'</span></div>'+
 '<div class="st-grid"><div class="st-box" id="st-left">'+left()+'</div><div class="st-box"><p class="st-flow">① 사진 넣기 → ② 프롬프트 붙여넣기 → ③ 초록 글씨 확인 → ④ 보내기</p>'+
 '<div class="st-acts sttop"><button type="button" class="p" data-sto="gpt">ChatGPT 열기</button><button type="button" class="s" data-sto="gem">제미나이 열기 (복사)</button><button type="button" class="s" data-sto="cp">복사만</button>'+'</div><div class="st-pv" id="st-pv">'+prompt(true)+'</div>'+
 '<ul class="st-help"><li>ChatGPT는 프롬프트가 자동으로 들어가요. 사진만 올리면 돼요. 제미나이는 사진을 넣고 붙여넣기(길게 누르기 → 붙여넣기) 해요.</li><li>얼굴 사진이 걱정되면 "AI 맞춤 설정 가이드"의 임시 채팅·학습 끄기를 먼저 확인해요.</li><li>무료 계정은 하루 그림 수가 적어요. 안 나오면 다른 앱이나 내일 다시 해요.</li></ul></div></div>'}
function copy(t){try{navigator.clipboard.writeText(t)}catch(e){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(x){}a.remove()}}
function toast(m){if(typeof showToast==='function')showToast(m)}
function refresh(full){var r=document.getElementById('st-root');if(!r)return;if(full){r.innerHTML=body();return}var pv=document.getElementById('st-pv');if(pv)pv.innerHTML=prompt(true)}
function bind(){var r=document.getElementById('st-root');if(!r||r._b)return;r._b=1;
 r.addEventListener('click',function(e){var b=e.target.closest('[data-sts]');if(b){ST.step=+b.dataset.sts;refresh(1);return}
  b=e.target.closest('[data-stc]');if(b){var k=b.dataset.stc,i=+b.dataset.i;if(k==='fd'){ST.o.fd=ST.o.fd===i?-1:i;ST.o.fdIn='';ST.o.fpT=''}else{ST.o[k]=i}save();refresh(1);return}
  b=e.target.closest('[data-stbg]');if(b){var v2=b.dataset.stbg;ST.o.fpT=(ST.o.fpT===v2?'':v2);ST.o.fpIn='';save();refresh(1);return}
  b=e.target.closest('[data-stscene]');if(b){var v=b.dataset.stscene;ST.o.scene=(ST.o.scene.trim()===v?'':v);save();refresh(1);return}
    b=e.target.closest('[data-sto]');if(b){var p=prompt(false);copy(p);var m=b.dataset.sto;if(m==='gpt'){var w=window.open('https://chatgpt.com/?q='+encodeURIComponent(p),'_blank');if(w)w.opener=null;toast('ChatGPT에 프롬프트가 들어갔어요. 사진을 올려 주세요.')}else if(m==='gem'){window.open('https://gemini.google.com/app','_blank','noopener');toast('프롬프트를 복사했어요. 사진을 넣고 붙여넣기 하세요.')}else toast('프롬프트를 복사했어요.');return}
  b=e.target.closest('[data-stgo]');if(b){if(typeof go==='function'){go(b.dataset.stgo);setTimeout(function(){var t=[].slice.call(document.querySelectorAll('#v-heart button')).filter(function(x){return /응원하는 엽서/.test(x.textContent)})[0];if(t)t.click()},150)}return}});
 r.addEventListener('input',function(e){var t=e.target;if(t.dataset&&t.dataset.sti){ST.o[t.dataset.sti]=t.value;save();refresh(0)}});
 r.addEventListener('change',function(e){var t=e.target;if(t.dataset&&(t.dataset.sti==='fdIn'||t.dataset.sti==='fpIn'))refresh(1)})}
window.STUDIO={view:function(){return '<section class="panel st"><div class="sec-h" style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px"><h2 style="margin:0;font-size:25px">나만의 사진관</h2><span style="color:#4e5e56">증명사진 한 장으로 지금의 나 · 10년 후의 나까지</span></div><div id="st-root">'+body()+'</div></section>'},bind:bind};

/* ===== 제미나이 비서 ===== */
var GBC=[['em','응급·안전'],['life','실생활'],['digi','디지털'],['work','현장 업무'],['mind','마음·배움']];
var GB=[
 ['em','화상 응급처치','🔥','✋',['음성'],'뜨거운 물에 손을 데었어. 지금 바로 뭘 해야 해?','물집이 크거나 넓게 데면 바로 병원·119'],
 ['em','베인 상처','🩹','👆',['카메라','음성'],'손가락이 베였는데 이 상처 어떻게 처치해?','피가 멈추지 않으면 바로 병원'],
 ['em','아이가 삼킨 물건','👶','🔋',['카메라'],'아이가 이걸 삼킨 것 같아. 이 포장지 좀 봐 줘','숨쉬기 힘들어하면 즉시 119'],
 ['em','쓰러진 사람 발견','🚑','📞',['음성'],'119에 신고했어. 기다리는 동안 내가 뭘 하면 돼?','119 상담원 안내가 언제나 먼저예요'],
 ['em','정전·차단기','⚡','🏠',['카메라'],'전기가 나갔어. 이 차단기에서 뭘 올려야 해?','타는 냄새가 나면 만지지 말고 119'],
 ['em','약 봉투 확인','💊','📋',['카메라'],'이 약 봉투, 언제 몇 알 먹으라는 거야?','최종 확인은 꼭 약사·의사에게'],
 ['life','냉장고 요리','🧊','🍳',['카메라'],'이 재료로 30분 안에 저녁 메뉴 알려 줘',''],
 ['life','가전 표시등','🔧','💡',['카메라'],'보일러에 이 불이 깜빡여. 무슨 뜻이야?','전기·가스는 무리하게 고치지 말고 기사님께'],
 ['life','고지서·안내문','📄','🔍',['카메라'],'이 고지서 핵심만 쉽게 알려 줘','금액·날짜는 원문으로 한 번 더 확인'],
 ['life','외국어 메뉴판','🍜','🌏',['카메라'],'이 메뉴판 한국어로 읽어 주고 추천해 줘',''],
 ['life','오늘 옷차림','👗','🪞',['카메라'],'오늘 모임인데 이 옷 어때? 어울리는 신발도',''],
 ['life','시든 화분','🪴','💧',['카메라'],'이 화분 잎이 왜 노래져? 어떻게 살려?',''],
 ['digi','키오스크·앱 사용','📱','👉',['화면 공유'],'이 화면에서 다음에 뭘 눌러야 해?',''],
 ['digi','수상한 문자','⚠️','✉️',['화면 공유'],'이 문자 사기 같아? 링크 눌러도 돼?','링크는 누르지 말고 먼저 확인부터'],
 ['digi','휴대폰 설정','⚙️','🔠',['화면 공유'],'글씨를 크게 하는 법 하나씩 알려 줘',''],
 ['work','가정 방문 통역','🏠','🗣️',['음성'],'베트남어로 "다음 주 화요일 오전에 다시 방문할게요"라고 말해 줘','상담 내용·이름 같은 개인정보는 말하지 않기'],
 ['work','공문·안내문 핵심','📄','🔍',['카메라'],'이 공문에서 마감일이랑 제출 서류만 알려 줘','날짜·금액은 원문으로 다시 확인'],
 ['work','행사장 안전 점검','🎪','✅',['카메라'],'이 행사장 보고 아이들한테 위험한 곳 알려 줘',''],
 ['work','프로그램 아이디어','💡','👨‍👩‍👧',['음성'],'주말 이용자 가족 프로그램 아이디어 3개만 말해 줘',''],
 ['work','엑셀 화면 묻기','📊','👉',['화면 공유'],'이 엑셀에서 월별 합계 내는 법 알려 줘','이용자 이름이 보이는 화면은 공유하지 않기'],
 ['mind','고민 털어놓기','💬','🌙',['음성'],'오늘 민원 응대가 너무 힘들었어. 들어 줄래?','마음이 많이 힘들면 사람에게도 꼭 말해요'],
 ['mind','외국어 말하기','🗣️','☕',['음성'],'카페에서 영어로 주문하는 연습하자',''],
 ['mind','아이 숙제 돕기','✏️','📐',['카메라'],'이 수학 문제 아이한테 쉽게 설명하는 법 알려 줘','']];
var GBS={c:'em'};
var COL={em:['#fde7e7','#e53935'],life:['#F4F0E9','#1F6F5A'],digi:['#ece9fb','#5b45c4'],work:['#fff1e6','#C96A2B'],mind:['#e8f1fb','#2f6fa8']};
function scene(x){var c=COL[x[0]],m=x[4][0];
 var screen=m==='화면 공유'?'<rect x="104" y="30" width="56" height="86" rx="8" fill="#fff" stroke="'+c[1]+'" stroke-width="3"/><rect x="111" y="40" width="42" height="8" rx="3" fill="'+c[0]+'"/><rect x="111" y="54" width="42" height="26" rx="4" fill="'+c[0]+'"/><text x="132" y="106" font-size="22" text-anchor="middle">'+x[3]+'</text>':m==='카메라'?'<rect x="104" y="30" width="56" height="86" rx="8" fill="#1d2433"/><rect x="109" y="38" width="46" height="62" rx="4" fill="'+c[0]+'"/><text x="132" y="80" font-size="30" text-anchor="middle">'+x[2]+'</text><circle cx="132" cy="108" r="4" fill="#fff"/>':'<rect x="104" y="30" width="56" height="86" rx="8" fill="#1d2433"/><circle cx="132" cy="62" r="18" fill="'+c[0]+'"/><path d="M122 62h4M128 55v14M134 52v20M140 58v8" stroke="'+c[1]+'" stroke-width="3" stroke-linecap="round"/><text x="132" y="104" font-size="11" fill="#fff" text-anchor="middle" font-weight="700">Live</text>';
 var big=m==='화면 공유'?x[2]:m==='카메라'?x[3]:x[2];
 return '<svg viewBox="0 0 240 132" aria-hidden="true"><rect width="240" height="132" fill="'+c[0]+'"/><circle cx="54" cy="70" r="40" fill="#fff" opacity=".75"/><text x="54" y="86" font-size="42" text-anchor="middle">'+big+'</text>'+screen+'<path d="M168 30h56a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8h-40l-10 9v-9h-6a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" fill="#fff" stroke="'+c[1]+'" stroke-width="2"/><text x="196" y="53" font-size="13" text-anchor="middle" fill="'+c[1]+'" font-weight="800">'+esc(m)+'</text></svg>'}
function gbBody(){var tabs='<div class="gb-tabs">'+GBC.map(function(c){return '<button type="button" data-gbc="'+c[0]+'" class="'+(c[0]==='em'?'em ':'')+(GBS.c===c[0]?'on':'')+'">'+esc(c[1])+'</button>'}).join('')+'</div>';
 var list=GB.filter(function(x){return x[0]===GBS.c});
 return tabs+(GBS.c==='em'?'<div class="gb-sos">위급하면 먼저 119에 전화하세요. 제미나이는 구조를 기다리는 동안 돕는 보조예요.</div>':'')+
 '<div class="gb-cards">'+list.map(function(x){return '<div class="gb-card'+(x[0]==='em'?' em':'')+'">'+scene(x)+'<div class="bd"><h4>'+esc(x[1])+'</h4><div class="gb-mode">'+x[4].map(function(m){return '<span>'+esc(m)+'</span>'}).join('')+'</div><p class="gb-say">"'+esc(x[5])+'"</p>'+(x[6]?'<p class="gb-warn">'+esc(x[6])+'</p>':'')+'</div></div>'}).join('')+'</div>'}
function phone(n){var inner=n===1?'<rect x="14" y="50" width="36" height="12" rx="6" fill="#1d3f8f"/><text x="32" y="59" font-size="8" fill="#fff" text-anchor="middle" font-weight="700">Live</text><rect x="14" y="20" width="36" height="22" rx="4" fill="#e3ebfd"/>':n===2?'<circle cx="24" cy="56" r="7" fill="#1d3f8f"/><rect x="20" y="53" width="8" height="6" rx="1" fill="#fff"/><circle cx="40" cy="56" r="7" fill="#1d3f8f"/><rect x="36" y="52" width="8" height="8" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="32" cy="32" r="12" fill="#e3ebfd"/>':'<circle cx="32" cy="38" r="14" fill="#e3ebfd"/><path d="M24 38h3M29 32v12M35 30v16M40 35v6" stroke="#1d3f8f" stroke-width="2.5" stroke-linecap="round"/>';
 return '<svg viewBox="0 0 64 80"><rect x="8" y="4" width="48" height="72" rx="8" fill="#fff" stroke="#1d3f8f" stroke-width="3"/>'+inner+'</svg>'}
function gbBind(){var r=document.getElementById('gb-root');if(!r||r._b)return;r._b=1;r.addEventListener('click',function(e){var b=e.target.closest('[data-gbc]');if(b){GBS.c=b.dataset.gbc;r.innerHTML=gbBody()}})}
window.GBIZ={view:function(){return '<section class="panel st"><div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px"><h2 style="margin:0;font-size:25px">제미나이 비서</h2><span style="color:#4e5e56">말하고 · 비추고 · 화면 보여 주며 묻는 제미나이 라이브</span></div>'+
 '<div class="gb-how"><div>'+phone(1)+'<div><b>1. Live 버튼</b><span>제미나이 앱 아래쪽 Live 버튼을 눌러요</span></div></div><div>'+phone(2)+'<div><b>2. 카메라 · 화면 공유</b><span>보여 줄 게 있으면 카메라나 화면 공유 버튼</span></div></div><div>'+phone(3)+'<div><b>3. 그냥 말하기</b><span>사람에게 묻듯 말로 물어보면 말로 답해요</span></div></div></div>'+
 '<p class="gb-note"><span><b>휴대폰 앱에서만</b> (컴퓨터 웹에서는 안 돼요)</span><span><b>무료</b>로 쓸 수 있어요</span><span>끝난 뒤 <b>대화 내용을 글로</b> 다시 볼 수 있어요</span><span>숫자·금액은 <b>원문과 한 번 더</b> 확인</span></p>'+
 '<div id="gb-root">'+gbBody()+'</div></section>'},bind:gbBind};
})();
