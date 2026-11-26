/* 2026.11.27 쫄라맨 3D: 바짝 마른 사람이 코·배를 벌렁벌렁, 멍때리기, 메롱, 목 돌리기, 운동 */
(function(){
var uid=0;
function zz(pose,mode){var u='z'+(++uid);
 var D='<defs><radialGradient id="'+u+'h" cx="38%" cy="32%" r="70%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#F2F5F7"/><stop offset="1" stop-color="#C9D3D9"/></radialGradient>'
  +'<radialGradient id="'+u+'n" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#FFD6D6"/><stop offset=".6" stop-color="#F6A3A3"/><stop offset="1" stop-color="#E07B7B"/></radialGradient>'
  +'<radialGradient id="'+u+'b" cx="38%" cy="30%" r="75%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#EEF2F4"/><stop offset="1" stop-color="#C9D3D9"/></radialGradient>'
  +'<radialGradient id="'+u+'s" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="rgba(0,0,0,.28)"/><stop offset="1" stop-color="rgba(0,0,0,0)"/></radialGradient></defs>';
 function limb(d,c){return '<path class="'+(c||'')+'" d="'+d+'" stroke="#3A4148" stroke-width="4.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path class="'+(c||'')+'" d="'+d+'" stroke="#7D8890" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform="translate(-1 -1)"/>';}
 function hand(x,y){return '<circle cx="'+x+'" cy="'+y+'" r="3.2" fill="#3A4148"/>';}
 var arms={
  down:limb('M60 62 L46 78 L42 92','')+limb('M60 62 L74 78 L78 92','')+hand(42,92)+hand(78,92),
  belly:limb('M60 62 L45 74 L48 88','')+limb('M60 62 L75 74 L72 88','')+hand(48,88)+hand(72,88),
  up:limb('M60 62 L42 48 L28 28','')+limb('M60 62 L78 48 L92 28','')+hand(28,28)+hand(92,28),
  hips:limb('M60 62 L44 70 L50 84','')+limb('M60 62 L76 70 L70 84','')+hand(50,84)+hand(70,84),
  cup:limb('M60 62 L46 78 L42 92','')+limb('M60 62 L76 70 L70 52','')+hand(70,52)+'<rect x="66" y="40" width="11" height="13" rx="2.5" fill="#fff" stroke="#6C8A99" stroke-width="1.6"/><path d="M77 44 q5 0 5 4 t-5 4" fill="none" stroke="#6C8A99" stroke-width="1.6"/>',
  fist:limb('M60 62 L44 70 L36 64','')+limb('M60 62 L76 70 L84 64','')+'<circle class="zz-fs" cx="36" cy="64" r="4.6" fill="#3A4148"/><circle class="zz-fs" cx="84" cy="64" r="4.6" fill="#3A4148"/>',
  hug:limb('M60 62 L48 72 L70 70','')+limb('M60 62 L72 72 L50 70','')+hand(70,70)+hand(50,70),
  eyes:limb('M60 62 L44 54 L52 32','')+limb('M60 62 L76 54 L68 32','')+'<ellipse cx="52" cy="31" rx="5" ry="4" fill="#3A4148"/><ellipse cx="68" cy="31" rx="5" ry="4" fill="#3A4148"/>',
  laugh:limb('M60 62 L46 74 L56 86','')+limb('M60 62 L74 74 L64 86','')+hand(56,86)+hand(64,86),
  pray:limb('M60 62 L50 74 L59 70','')+limb('M60 62 L70 74 L61 70','')+hand(60,69),
  paper:limb('M60 62 L76 72 L88 70','')+limb('M60 62 L44 74 L42 90','')+hand(88,70)+hand(42,90)+'<g class="zz-pp"><rect x="86" y="52" width="28" height="34" rx="2" fill="#fff" stroke="#9AA6AD" stroke-width="1.4"/><circle cx="100" cy="64" r="7" fill="none" stroke="#3A4148" stroke-width="1.4"/><path d="M97 62 h1 M102 62 h1 M97 68 q3 -3 6 0 M93 58 l3 2 M107 58 l-3 2" stroke="#3A4148" stroke-width="1.4" stroke-linecap="round"/><path d="M92 78 h16 M92 82 h10" stroke="#C9D3D9" stroke-width="1.4"/></g>',
  throw:'<g class="zz-th">'+limb('M60 62 L80 58 L94 46','')+'<circle class="zz-ball" cx="97" cy="44" r="5" fill="#fff" stroke="#9AA6AD" stroke-width="1.4"/></g>'+limb('M60 62 L44 74 L42 90','')+hand(42,90),
  punch:'<g class="zz-pu">'+limb('M60 62 L80 64 L94 62','')+'<circle cx="95" cy="62" r="4.6" fill="#3A4148"/></g>'+limb('M60 62 L46 70 L50 78','')+hand(50,78),
  towel:limb('M60 62 L48 72 L52 80','')+limb('M60 62 L72 72 L68 80','')+'<path class="zz-tw" d="M44 80 q8 -6 16 0 t16 0" fill="none" stroke="#7FB8D8" stroke-width="6" stroke-linecap="round"/>'+hand(52,80)+hand(68,80),
  wave:limb('M60 62 L46 78 L42 92','')+'<g class="zz-wv">'+limb('M60 62 L76 52 L82 34','')+hand(82,34)+'</g>'+hand(42,92)};
 var legsToe=limb('M60 100 L52 118 L50 128','')+'<g class="zz-kick">'+limb('M60 100 L80 104 L98 104','')+'<path class="zz-toe" d="M98 104 l2 -7" stroke="#3A4148" stroke-width="4.6" stroke-linecap="round"/></g><ellipse cx="47" cy="129" rx="6" ry="3" fill="#3A4148"/>';
 var legsSit=limb('M60 100 L40 108 L66 116','')+limb('M60 100 L80 108 L54 116','')+'<ellipse cx="60" cy="118" rx="24" ry="4" fill="#CFE7DA" opacity=".8"/>';
 var legs=limb('M60 100 L52 118 L50 128','zz-ll')+limb('M60 100 L68 118 L70 128','zz-lr')+'<ellipse cx="47" cy="129" rx="6" ry="3" fill="#3A4148"/><ellipse cx="73" cy="129" rx="6" ry="3" fill="#3A4148"/>';
 var body=limb('M60 53 L60 100','')+'<circle class="zz-belly" cx="60" cy="82" r="5" fill="url(#'+u+'b)" stroke="#3A4148" stroke-width="2"/>';
 var eyes='<g class="zz-eyes"><ellipse cx="52.5" cy="31" rx="3.6" ry="4.2" fill="#3A4148"/><ellipse cx="67.5" cy="31" rx="3.6" ry="4.2" fill="#3A4148"/><circle cx="53.8" cy="29.4" r="1.4" fill="#fff"/><circle cx="68.8" cy="29.4" r="1.4" fill="#fff"/><circle cx="51.4" cy="32.8" r=".6" fill="#fff"/><circle cx="66.4" cy="32.8" r=".6" fill="#fff"/></g>';
 var daze='<g class="zz-daze" fill="none" stroke="#3A4148" stroke-width="1.4"><path d="M52.5 31 m-2.6 0 a2.6 2.6 0 1 1 2.6 2.6 a1.6 1.6 0 1 1 -1.6 -1.6"/><path d="M67.5 31 m-2.6 0 a2.6 2.6 0 1 1 2.6 2.6 a1.6 1.6 0 1 1 -1.6 -1.6"/></g>';
 var nose='<g class="zz-nose"><circle cx="60" cy="37" r="1.8" fill="url(#'+u+'n)" stroke="#3A4148" stroke-width="1"/></g>';
 var mouthS='<path class="zz-m" d="M56 41.5 q2 2.5 4 0 q2 2.5 4 0" fill="none" stroke="#7A3A2A" stroke-width="1.8" stroke-linecap="round"/>';
 var mouthO='<ellipse class="zz-mo" cx="60" cy="42.5" rx="2" ry="1.8" fill="#E8697D"/>';
 var tongue='<ellipse cx="60" cy="42" rx="4" ry="2" fill="#3A4148"/><path class="zz-tg" d="M57 42 q0 7 3 7 q3 0 3 -7z" fill="#F07A8A" stroke="#C24A5A" stroke-width="1"/>';
 var cheeks='<ellipse cx="46" cy="38" rx="4.2" ry="2.6" fill="#FF9EAE" opacity=".75"/><ellipse cx="74" cy="38" rx="4.2" ry="2.6" fill="#FF9EAE" opacity=".75"/>';
 var hair='';
 function head(face){return '<g class="zz-head"><path d="M60 12 q-2 -7 4 -9 q-1 6 -4 9z" fill="#7BC67E" stroke="#3E8E4A" stroke-width="1"/><path d="M60 13 q3 -6 9 -5 q-3 5 -9 5z" fill="#9BD89A" stroke="#3E8E4A" stroke-width="1"/><circle cx="60" cy="33" r="20" fill="url(#'+u+'h)" stroke="#3A4148" stroke-width="2.6"/><ellipse cx="52" cy="22" rx="6" ry="3.4" fill="#fff" opacity=".95"/>'+cheeks+face+'</g>';}
 var air='<g class="zz-air" fill="none" stroke="#7FB8D8" stroke-width="2" stroke-linecap="round"><path d="M68 41 q6 -3 12 0"/><path d="M70 46 q7 -3 14 0"/><path d="M68 51 q5 -2 10 0"/></g>';
 var sh='<ellipse cx="60" cy="130" rx="26" ry="5" fill="url(#'+u+'s)"/>';
 var P={breath:{a:'belly',f:eyes+nose+mouthO,x:air},balloon:{a:'belly',f:eyes+nose+'<g class="zz-puff"><circle cx="50" cy="39" r="4.2" fill="#F7B5BC"/><circle cx="70" cy="39" r="4.2" fill="#F7B5BC"/></g><circle cx="60" cy="42" r="1.4" fill="#3A4148"/>',x:air},
  window:{a:'down',f:daze+nose+'<path d="M56 42 h8" stroke="#3A4148" stroke-width="1.8" stroke-linecap="round"/>',x:'<g class="zz-win"><rect x="88" y="6" width="30" height="34" rx="3" fill="#E6F4FB" stroke="#7A8F99" stroke-width="2"/><path d="M103 6 V40 M88 23 H118" stroke="#7A8F99" stroke-width="1.6"/><g class="zz-cl"><path d="M92 16 q2 -4 6 -2 q3 -3 6 1 q4 0 3 3 h-15z" fill="#fff" stroke="#B7CBD4"/></g><circle cx="112" cy="33" r="3" fill="#FFD36B"/></g><text class="zz-tx" x="18" y="14">멍~</text>'},
  tongue:{a:'hips',f:'<g class="zz-eyes"><path d="M48.5 31 q4 -4.5 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/><path d="M63.5 31 q4 -4.5 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+tongue,x:'<text class="zz-tx" x="84" y="20">메롱~</text>'},
  neck:{a:'hips',f:eyes+nose+mouthS,x:'<path class="zz-arc" d="M34 10 q26 -14 52 0" fill="none" stroke="#2A9D8F" stroke-width="2" stroke-dasharray="3 4"/>'},
  exercise:{a:'up',f:eyes+nose+mouthO,x:'<text class="zz-tx" x="84" y="22">하나! 둘!</text>'},
  shoulder:{a:'down',f:eyes+nose+mouthS,x:''},
  stretch:{a:'up',f:'<g class="zz-eyes"><path d="M48.5 31 q4 3 8 0 M63.5 31 q4 3 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+'<ellipse class="zz-mo" cx="60" cy="42" rx="3.4" ry="3.8" fill="#3A4148"/>',x:'<text class="zz-tx" x="82" y="20">하~암</text>'},
  shake:{a:'down',f:daze+nose+mouthO,x:'<g stroke="#9AC7DE" stroke-width="2" stroke-linecap="round"><path d="M22 60 h-8 M24 72 h-10 M96 60 h8 M96 72 h10"/></g>'},
  shout:{a:'down',f:eyes+nose+'<ellipse class="zz-mo2" cx="60" cy="42" rx="4" ry="4" fill="#3A4148"/>',x:'<text class="zz-tx" x="84" y="22">아~~!</text>'},
  water:{a:'cup',top:1,f:eyes+nose+mouthS,x:'<path class="zz-st" d="M70 34 q-3 -5 0 -10 M75 34 q-3 -5 0 -10" fill="none" stroke="#B7CBD4" stroke-width="1.6" stroke-linecap="round"/>'},
  hum:{a:'belly',f:'<g class="zz-eyes"><path d="M48.5 31 q4 3 8 0 M63.5 31 q4 3 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+mouthO,x:'<g class="zz-note" fill="#2A9D8F"><path d="M88 22 V8 L100 5 V19" fill="none" stroke="#2A9D8F" stroke-width="2"/><circle cx="86" cy="22" r="3"/><circle cx="98" cy="19" r="3"/></g>'},
  fist:{a:'fist',f:eyes+nose+mouthS,x:'<text class="zz-tx" x="84" y="22">꽉! 쫙!</text>'},
  toe:{a:'hips',l:'toe',f:eyes+nose+mouthO,x:'<text class="zz-tx" x="80" y="86">당겨~</text>'},
  hug:{a:'hug',f:'<g class="zz-eyes"><path d="M48.5 31 q4 3 8 0 M63.5 31 q4 3 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+mouthS,x:'<g class="zz-hrt" fill="#FF8FA3"><path d="M92 18 c0 -4 6 -4 6 0 c0 -4 6 -4 6 0 c0 4 -6 8 -6 8 c0 0 -6 -4 -6 -8z"/></g>'},
  eyes:{a:'eyes',top:1,f:nose+mouthS,x:'<text class="zz-tx" x="84" y="20">따뜻~</text>'},
  meditate:{a:'pray',l:'sit',f:'<g class="zz-eyes"><path d="M48.5 31 q4 3 8 0 M63.5 31 q4 3 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+mouthS,x:'<text class="zz-tx zz-om" x="82" y="30">음~</text><circle class="zz-aura" cx="60" cy="70" r="46" fill="none" stroke="#9ADCCB" stroke-width="2"/>'},
  twist:{a:'hips',f:eyes+nose+mouthO,x:''},
  laugh:{a:'laugh',f:'<g class="zz-eyes"><path d="M48.5 31 q4 -4.5 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/><path d="M63.5 31 q4 -4.5 8 0" fill="none" stroke="#3A4148" stroke-width="2.2" stroke-linecap="round"/></g>'+nose+'<path d="M54 40 q6 8 12 0z" fill="#E8697D" stroke="#3A4148" stroke-width="1.4"/>',x:'<text class="zz-tx" x="82" y="22">하하하!</text>'},
  swear:{a:'hips',f:'<g class="zz-eyes"><path d="M47 26 l9 3 M73 26 l-9 3" stroke="#3A4148" stroke-width="2.4" stroke-linecap="round"/><circle cx="52.5" cy="32" r="2.8" fill="#3A4148"/><circle cx="67.5" cy="32" r="2.8" fill="#3A4148"/></g>'+nose+'<ellipse class="zz-mo2" cx="60" cy="43" rx="4" ry="4" fill="#3A4148"/>',x:'<g class="zz-bub"><rect x="80" y="4" width="36" height="18" rx="7" fill="#fff" stroke="#E07A2E" stroke-width="1.6"/><text x="98" y="17" text-anchor="middle" style="font:800 11px sans-serif;fill:#D9534A">#@%!</text></g><text x="84" y="34" style="font:700 8px sans-serif;fill:#8A949A">(소리 없이)</text>'},
  glare:{a:'paper',f:'<g class="zz-eyes"><path d="M47 26 l9 3 M73 26 l-9 3" stroke="#3A4148" stroke-width="2.4" stroke-linecap="round"/><circle cx="52.5" cy="32" r="2.8" fill="#3A4148"/><circle cx="67.5" cy="32" r="2.8" fill="#3A4148"/></g>'+nose+'<path d="M55 43 q5 -3 10 0" fill="none" stroke="#3A4148" stroke-width="1.8" stroke-linecap="round"/>',x:'<text class="zz-tx" x="6" y="20">째릿!</text><path class="zz-zap" d="M78 30 l6 2 -4 2 6 2" fill="none" stroke="#E07A2E" stroke-width="1.8"/>'},
  crumple:{a:'throw',f:'<g class="zz-eyes"><path d="M47 26 l9 3 M73 26 l-9 3" stroke="#3A4148" stroke-width="2.4" stroke-linecap="round"/><circle cx="52.5" cy="32" r="2.8" fill="#3A4148"/><circle cx="67.5" cy="32" r="2.8" fill="#3A4148"/></g>'+nose+mouthO,x:'<g><path d="M96 112 h18 l-3 18 h-12z" fill="#DCE6EA" stroke="#7A8F99" stroke-width="1.6"/><text class="zz-tx" x="86" y="104">골인!</text></g>'},
  punch:{a:'punch',f:'<g class="zz-eyes"><path d="M47 26 l9 3 M73 26 l-9 3" stroke="#3A4148" stroke-width="2.4" stroke-linecap="round"/><circle cx="52.5" cy="32" r="2.8" fill="#3A4148"/><circle cx="67.5" cy="32" r="2.8" fill="#3A4148"/></g>'+nose+mouthO,x:'<g class="zz-cs"><rect x="98" y="48" width="18" height="26" rx="8" fill="#FFD9A8" stroke="#D99A5A" stroke-width="1.6"/></g><text class="zz-tx" x="92" y="40">퍽!</text>'},
  towel:{a:'towel',f:'<g class="zz-eyes"><path d="M47 26 l9 3 M73 26 l-9 3" stroke="#3A4148" stroke-width="2.4" stroke-linecap="round"/><circle cx="52.5" cy="32" r="2.8" fill="#3A4148"/><circle cx="67.5" cy="32" r="2.8" fill="#3A4148"/></g>'+nose+'<path d="M55 42 h10" stroke="#3A4148" stroke-width="2" stroke-linecap="round"/>',x:'<text class="zz-tx" x="80" y="22">끄응~ 짜!</text>'},
  praise:{a:'wave',f:eyes+nose+mouthS,x:'<path class="zz-star" d="M96 10 l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1z" fill="#F7C873" stroke="#E0A43A"/>'}};
 var p=P[pose]||P.breath;
 return '<svg class="zz zz-'+pose+(mode?' zz-'+mode:'')+'" viewBox="0 0 120 136" aria-hidden="true">'+D+sh+p.x+'<g class="zz-body">'+(p.l==='toe'?legsToe:p.l==='sit'?legsSit:legs)+body+(p.top?head(p.f)+'<g class="zz-arms">'+arms[p.a]+'</g>':'<g class="zz-arms">'+arms[p.a]+'</g>'+head(p.f))+'</g></svg>';}
window.zz=zz;

/* 마음 지킴이 쉼 하나 그림 */
var MAP={breath:'breath',shout:'shout',swear:'swear',write:'glare',shoulder:'shoulder',fist:'fist',stretch:'stretch',neck:'neck',hug:'hug',palm:'eyes',smile:'tongue',shake:'shake',hum:'hum',walk:'exercise',window:'window',water:'water',praise:'praise',tongue:'tongue',exercise:'exercise',toe:'toe',glare:'glare',crumple:'crumple',punch:'punch',towel:'towel',hug2:'hug',eyes:'eyes',meditate:'meditate',twist:'twist',laugh:'laugh'};
if(typeof restFig==='function'){restFig=function(t){var f=(typeof RTYPE!=='undefined'&&RTYPE[t])||(/어깨/.test(t)?'shoulder':/물|차/.test(t)?'water':/창밖|보이는|멍/.test(t)?'window':/메롱|혀/.test(t)?'tongue':/운동|뛰기/.test(t)?'exercise':/고개|목/.test(t)?'neck':'breath');return zz(MAP[f]||'breath','loop');};
 var r=document.getElementById('h2-rest');if(r){var s=r.querySelector('svg'),pp=r.querySelector('p');if(s&&pp)s.outerHTML=restFig(pp.textContent)}}

/* 빡침 번역기: 쉼표 씨 숨 고르기 + 쉬는 동작 */
var LIST=[{"n": "기본 숨 고르기", "f": "breath", "d": "코로 4초 들이쉬면 코·배가 빵빵, 6초 내쉬면 쏙~", "p": [["코로 들이쉬기", 4, "in"], ["멈추기", 4, "hold"], ["입으로 내쉬기", 6, "out"]]},
 {"n": "풍선 빵빵 숨", "f": "balloon", "d": "볼을 풍선처럼 빵빵하게 부풀려 후~", "p": [["코로 들이쉬기", 4, "in"], ["볼 빵빵 후~", 6, "out"]]},
 {"n": "어깨 으쓱 툭!", "f": "shoulder", "d": "어깨를 귀까지 으쓱~ 올렸다가 툭! 떨어뜨리기", "p": [["으쓱~", 3, "act"], ["툭!", 2, "act"]]},
 {"n": "주먹 꽉! 손바닥 쫙!", "f": "fist", "d": "두 주먹을 5초 꽉 쥐었다가 쫙 펴기. 손끝까지 시원~", "p": [["꽉!", 5, "act"], ["쫙~", 3, "act"]]},
 {"n": "발끝 까딱까딱", "f": "toe", "d": "앉은 채 다리를 쭉 펴고 발끝을 몸 쪽으로 당겼다 밀기", "p": [["당겨~", 3, "act"], ["밀어~", 3, "act"]]},
 {"n": "창밖 멍때리기 챔피언", "f": "window", "d": "창밖 구름 보며 1분 동안 아무 생각 안 하기. 멍~", "p": [["멍~", 10, "act"], ["더 멍~", 10, "act"]]},
 {"n": "메롱 메롱 얼굴 체조", "f": "tongue", "d": "혀 쭉 내밀고 \"메롱~\". 얼굴 근육이 풀려요", "p": [["메롱~", 3, "act"], ["쉬기", 2, "hold"]]},
 {"n": "목 빙글빙글 부엉이", "f": "neck", "d": "부엉이처럼 고개를 천천히 오른쪽·왼쪽", "p": [["오른쪽~", 4, "act"], ["왼쪽~", 4, "act"]]},
 {"n": "팔 벌려 뛰기 10번", "f": "exercise", "d": "하나 둘! 앉아서는 팔만 위아래로", "p": [["하나 둘! 하나 둘!", 8, "act"]]},
 {"n": "기지개 하~암", "f": "stretch", "d": "두 팔 하늘로 쭉~ 하품 크게", "p": [["쭈~욱", 4, "act"], ["툭", 2, "hold"]]},
 {"n": "강아지 탈탈 털기", "f": "shake", "d": "물 털듯 온몸을 탈탈탈", "p": [["탈탈탈탈", 8, "act"]]},
 {"n": "나비 포옹 토닥토닥", "f": "hug", "d": "두 팔을 X자로 가슴에 얹고 토닥토닥 \"괜찮아, 잘하고 있어\"", "p": [["토닥토닥", 8, "act"]]},
 {"n": "손바닥 눈 찜질", "f": "eyes", "d": "손바닥을 싹싹 비벼 따뜻하게, 눈 위에 10초", "p": [["싹싹싹", 3, "act"], ["따뜻~", 10, "act"]]},
 {"n": "1분 명상 \"음~\"", "f": "meditate", "d": "눈 감고 숨소리만 듣기. 생각이 와도 그냥 보내기", "p": [["들이쉬고~", 4, "in"], ["내쉬고~", 6, "out"]]},
 {"n": "허리 비비 꼬기", "f": "twist", "d": "앉은 채 허리를 오른쪽·왼쪽으로 살살 비틀기", "p": [["오른쪽~", 4, "act"], ["왼쪽~", 4, "act"]]},
 {"n": "가짜 웃음 진짜 웃음", "f": "laugh", "d": "\"하하하!\" 억지로 10초 웃다 보면 진짜 웃음이 나요", "p": [["하하하!", 10, "act"]]},
 {"n": "소리 없는 \"아~\" 함성", "f": "shout", "d": "먼 산 보고 입만 크게 \"아~\" (소리는 안 내요)", "p": [["아~~!", 3, "act"], ["쉬기", 2, "hold"]]},
 {"n": "차 한 모금 호록", "f": "water", "d": "따뜻한 차를 향 맡으며 한 모금씩", "p": [["후~ 호록", 8, "act"]]},
 {"n": "콧노래 흥얼흥얼", "f": "hum", "d": "좋아하는 노래 한 소절 콧노래로", "p": [["음~ 음음~", 8, "act"]]},
 {"n": "나 칭찬 셀프 박수", "f": "praise", "d": "\"오늘도 버틴 나, 최고다!\" 소리 내어 칭찬", "p": [["최고다!", 5, "act"]]},
 {"n": "소리 없이 입으로만 욕하기", "f": "swear", "d": "입만 크게 벌리고 소리 없이 시원~하게 욕 세 번. 들키지 않게, 웃으면서", "p": [["#@%!", 3, "act"], ["한 번 더!", 3, "act"], ["후련~", 2, "hold"]]},
 {"n": "미운 사람 그려서 째려보기", "f": "glare", "d": "종이에 미운 사람 얼굴을 대충 그리고 10초 째릿! 노려보기", "p": [["슥슥 그리기", 5, "act"], ["째릿!", 10, "act"]]},
 {"n": "구겨서 휴지통 골인", "f": "crumple", "d": "그린 종이·욕 쓴 종이를 꾸깃꾸깃 구겨서 휴지통에 슛~ 골인!", "p": [["꾸깃꾸깃", 4, "act"], ["슛! 골인!", 3, "act"]]},
 {"n": "쿠션 펀치 퍽퍽", "f": "punch", "d": "쿠션이나 베개를 살살 퍽! 퍽! (사람·벽은 안 돼요)", "p": [["퍽! 퍽!", 6, "act"], ["후~", 3, "hold"]]},
 {"n": "수건 빨래 짜기", "f": "towel", "d": "수건을 빨래 짜듯 있는 힘껏 비틀기. 미운 마음도 쭉~", "p": [["끄응~ 짜!", 6, "act"], ["툭 풀기", 3, "hold"]]}];
function vent(){var box=document.querySelector('#v2-tool .breath');if(!box||box.dataset.zz)return;box.dataset.zz=1;var cur=0,run=0;
 box.innerHTML='<div class="zzv"><div class="zzv-f" id="zzv-f"></div><span class="zzv-t" id="zzv-t">준비</span><b id="zzv-n"></b><small id="zzv-d"></small><div class="zzv-b"><button type="button" id="zzv-go">따라 하기 (3번)</button><button type="button" id="zzv-nx">다른 쉬기 ›</button></div></div>';
 function g(i){return document.getElementById(i)}
 function set(i){cur=i;run++;var b=LIST[i];g('zzv-f').innerHTML=zz(b.f,b.p.some(function(x){return x[2]==='act'})?'loop':'');g('zzv-n').textContent='쉼표 씨와 '+b.n;g('zzv-d').textContent=b.d;g('zzv-t').textContent='준비';}
 g('zzv-nx').onclick=function(){set((cur+1)%LIST.length)};
 g('zzv-go').onclick=function(){run++;var my=run,b=LIST[cur],i=0,k=0,s=g('zzv-f').querySelector('svg'),t=g('zzv-t');s.classList.add('zz-on');
  function nx(){if(my!==run)return;if(k>=3){s.removeAttribute('data-ph');t.textContent='잘했어요!';return;}var p=b.p[i],left=p[1];s.style.setProperty('--d',p[1]+'s');s.setAttribute('data-ph',p[2]);t.textContent=p[0]+' '+left;
   var iv=setInterval(function(){if(my!==run){clearInterval(iv);return}left--;if(left>0)t.textContent=p[0]+' '+left;else clearInterval(iv)},1000);
   setTimeout(function(){i++;if(i>=b.p.length){i=0;k++}nx()},p[1]*1000)}
  nx()};
 set(0);}
vent();

document.head.insertAdjacentHTML('beforeend','<style id="zz-css">'
+'.zz{overflow:visible}.zz *{transform-box:fill-box;transform-origin:center}.zz .zz-body,.zz .zz-head{transform-box:view-box}'
+'.zz .zz-tx{font:800 11px Pretendard,sans-serif;fill:#C2652B}'
/* 반복(마음 지킴이·동작) */
+'.zz-loop.zz-breath .zz-nose,.zz-loop.zz-balloon .zz-nose{animation:zzN 10s ease-in-out infinite}.zz-loop.zz-breath .zz-belly,.zz-loop.zz-balloon .zz-belly{animation:zzB 10s ease-in-out infinite}.zz-loop.zz-breath .zz-eyes{animation:zzE 10s ease-in-out infinite}.zz-loop .zz-air{animation:zzA 10s ease-in-out infinite}.zz-loop.zz-balloon .zz-puff{animation:zzP 10s ease-in-out infinite}'
+'@keyframes zzN{0%,100%{transform:scale(1)}35%,55%{transform:scale(2.1)}80%{transform:scale(.75)}}@keyframes zzB{0%,100%{transform:scale(1)}35%,55%{transform:scale(2)}80%{transform:scale(.6)}}@keyframes zzE{0%,100%{transform:scale(1)}35%,55%{transform:scale(1.35)}80%{transform:scale(.85,.6)}}@keyframes zzA{0%,60%{opacity:0;transform:translateX(-4px)}75%{opacity:1;transform:translateX(4px)}95%,100%{opacity:0;transform:translateX(10px)}}@keyframes zzP{0%,55%{transform:scale(.4)}70%,85%{transform:scale(1.3)}100%{transform:scale(.4)}}'
+'.zz-window .zz-head{transform-origin:60px 54px;transform:rotate(14deg)}.zz-window .zz-daze path{animation:zzSp 3s linear infinite}.zz-window .zz-cl{animation:zzCl 6s linear infinite}.zz-window .zz-tx{animation:zzFl 3s ease-in-out infinite}'
+'@keyframes zzSp{to{transform:rotate(360deg)}}@keyframes zzCl{0%{transform:translateX(-4px)}100%{transform:translateX(12px)}}@keyframes zzFl{0%,100%{transform:translateY(0);opacity:.6}50%{transform:translateY(-4px);opacity:1}}'
+'.zz-tongue .zz-tg{transform-origin:60px 42px;transform-box:view-box;animation:zzTg .5s ease-in-out infinite alternate}.zz-tongue .zz-body{transform-origin:60px 128px;animation:zzWb 1s ease-in-out infinite alternate}.zz-tongue .zz-tx{animation:zzFl 1s infinite}@keyframes zzTg{from{transform:scaleY(.6) rotate(-6deg)}to{transform:scaleY(1.15) rotate(6deg)}}@keyframes zzWb{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}'
+'.zz-neck .zz-head{transform-origin:60px 54px;animation:zzNk 8s ease-in-out infinite}@keyframes zzNk{0%,100%{transform:rotate(0)}25%{transform:rotate(-24deg)}50%{transform:rotate(0)}75%{transform:rotate(24deg)}}'
+'.zz-exercise .zz-body{transform-origin:60px 130px;animation:zzJp .8s ease-in-out infinite alternate}@keyframes zzJp{from{transform:translateY(0) scaleY(1)}to{transform:translateY(-8px) scaleY(1.03)}}.zz-exercise .zz-tx{animation:zzFl .8s infinite}'
+'.zz-shoulder .zz-body{animation:zzSh 2s ease-in-out infinite}@keyframes zzSh{0%,40%,100%{transform:translateY(0)}20%{transform:translateY(-6px)}}'
+'.zz-stretch .zz-body{transform-origin:60px 130px;animation:zzSt 4s ease-in-out infinite}@keyframes zzSt{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.08)}}.zz-stretch .zz-mo{animation:zzYw 4s ease-in-out infinite}@keyframes zzYw{0%,100%{transform:scale(.4)}50%{transform:scale(1.2)}}'
+'.zz-shake .zz-body{transform-origin:60px 128px;animation:zzSk .18s linear infinite alternate}.zz-shake .zz-daze path{animation:zzSp 1s linear infinite}@keyframes zzSk{from{transform:rotate(-5deg)}to{transform:rotate(5deg)}}'
+'.zz-shout .zz-mo2{animation:zzMo 1.5s ease-in-out infinite}.zz-shout .zz-tx{animation:zzFl 1.5s infinite}@keyframes zzMo{0%,100%{transform:scale(.5)}50%{transform:scale(1.5,1.8)}}'
+'.zz-water .zz-st{animation:zzFl 2s infinite}.zz-hum .zz-body{transform-origin:60px 128px;animation:zzWb 1.2s ease-in-out infinite alternate}.zz-hum .zz-note{animation:zzFl 1.2s infinite}'
+'.zz-praise .zz-wv{transform-origin:60px 62px;transform-box:view-box;animation:zzWv .6s ease-in-out infinite alternate}.zz-praise .zz-star{animation:zzSt2 1.4s ease-in-out infinite}@keyframes zzWv{from{transform:rotate(-8deg)}to{transform:rotate(10deg)}}@keyframes zzSt2{0%,100%{transform:scale(.8) rotate(0)}50%{transform:scale(1.25) rotate(20deg)}}'
/* 따라 하기 단계 (빡침 번역기 숨) */
+'.zz:not(.zz-loop) .zz-nose,.zz:not(.zz-loop) .zz-belly,.zz:not(.zz-loop) .zz-eyes,.zz:not(.zz-loop) .zz-puff{transition:transform var(--d,4s) ease-in-out}.zz:not(.zz-loop) .zz-air{opacity:0;transition:opacity .4s}.zz:not(.zz-loop) .zz-puff{transform:scale(.4)}'
+'.zz[data-ph=in] .zz-nose,.zz[data-ph=hold] .zz-nose{transform:scale(2.1)}.zz[data-ph=in] .zz-belly,.zz[data-ph=hold] .zz-belly{transform:scale(2)}.zz[data-ph=in] .zz-eyes,.zz[data-ph=hold] .zz-eyes{transform:scale(1.35)}'
+'.zz[data-ph=out] .zz-nose{transform:scale(.75)}.zz[data-ph=out] .zz-belly{transform:scale(.6)}.zz[data-ph=out] .zz-eyes{transform:scale(.9,.6)}.zz[data-ph=out] .zz-air{opacity:1;animation:zzA2 1.2s ease-in-out infinite}.zz-balloon[data-ph=out] .zz-puff{transform:scale(1.3)}@keyframes zzA2{from{transform:translateX(-3px)}to{transform:translateX(6px)}}'
/* 크기 */
+'.rest-row svg.zz{width:120px!important;height:136px!important;background:radial-gradient(circle at 50% 60%,#EAF6EF 0,#EAF6EF 60%,transparent 61%)!important;border-radius:0!important;padding:0!important;stroke:none!important;flex:none}.rest-row svg.zz circle,.rest-row svg.zz rect{fill:revert-layer}'
+'#v2-tool .sright{grid-template-columns:minmax(0,1fr) 210px!important}#v2-tool .breath{padding:8px!important;align-items:center!important}'
+'.zzv{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;width:100%}.zzv-f{width:196px;height:206px;border-radius:50%;background:radial-gradient(circle at 50% 55%,#FFF4E6 0,#FFF4E6 62%,transparent 63%);display:grid;place-items:center}.zzv-f svg{width:190px;height:210px}'
+'.zzv-t{background:#2a9d8f;color:#fff;border-radius:999px;padding:3px 12px;font-size:13.5px;font-weight:800}.zzv b{font-size:14.5px;color:#1E5442}.zzv small{font-size:12.5px;color:#4b5a55;line-height:1.45}.zzv-b{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}.zzv-b button{border:1px solid #D5E5DA;background:#fff;border-radius:8px;padding:5px 10px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.zzv-b button:first-child{background:#2a9d8f;border-color:#2a9d8f;color:#fff}'
+'.zz-shoulder .zz-body{animation:none}.zz-shoulder .zz-arms{animation:zzSh2 2.4s ease-in-out infinite}.zz-shoulder .zz-head{animation:zzSh3 2.4s ease-in-out infinite}@keyframes zzSh2{0%,15%,100%{transform:translateY(0)}35%,60%{transform:translateY(-9px)}70%{transform:translateY(2px)}}@keyframes zzSh3{0%,15%,100%{transform:translateY(0)}35%,60%{transform:translateY(-3px)}}'
+'.zz-fist .zz-fs{animation:zzFs 2s ease-in-out infinite}@keyframes zzFs{0%,45%{transform:scale(1.25)}55%,100%{transform:scale(.6)}}.zz-fist .zz-tx{animation:zzFl 2s infinite}'
+'.zz-toe .zz-toe{transform-origin:98px 104px;transform-box:view-box;animation:zzTo 1.6s ease-in-out infinite alternate}@keyframes zzTo{from{transform:rotate(30deg)}to{transform:rotate(-30deg)}}.zz-toe .zz-kick{transform-origin:60px 100px;transform-box:view-box;animation:zzKk 3.2s ease-in-out infinite}@keyframes zzKk{0%,100%{transform:rotate(0)}50%{transform:rotate(-8deg)}}'
+'.zz-hug .zz-body{transform-origin:60px 128px;animation:zzWb 1.4s ease-in-out infinite alternate}.zz-hug .zz-hrt{animation:zzSt2 1.4s ease-in-out infinite}'
+'.zz-eyes .zz-tx{animation:zzFl 2s infinite}.zz-meditate .zz-aura{animation:zzAu 4s ease-in-out infinite}.zz-meditate .zz-om{animation:zzFl 4s infinite}.zz-meditate .zz-body{animation:zzFt 4s ease-in-out infinite}@keyframes zzAu{0%,100%{transform:scale(.85);opacity:.2}50%{transform:scale(1.05);opacity:.9}}@keyframes zzFt{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}'
+'.zz-twist .zz-body{transform-origin:60px 100px;animation:zzTw 3s ease-in-out infinite}@keyframes zzTw{0%,100%{transform:skewX(0) rotate(0)}25%{transform:skewX(-10deg) rotate(-6deg)}75%{transform:skewX(10deg) rotate(6deg)}}'
+'.zz-laugh .zz-body{transform-origin:60px 128px;animation:zzLg .35s ease-in-out infinite alternate}@keyframes zzLg{from{transform:translateY(0) rotate(-2deg)}to{transform:translateY(-3px) rotate(2deg)}}.zz-laugh .zz-tx{animation:zzFl .7s infinite}'
+'.zz-swear .zz-mo2{animation:zzSw .5s ease-in-out infinite alternate}@keyframes zzSw{from{transform:scale(.5,.4)}to{transform:scale(1.4,1.6)}}.zz-swear .zz-bub{animation:zzFl 1s infinite}.zz-swear .zz-body{transform-origin:60px 128px;animation:zzLg .25s infinite alternate}'
+'.zz-glare .zz-eyes{animation:zzGl 1.2s ease-in-out infinite}@keyframes zzGl{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.45)}}.zz-glare .zz-tx,.zz-glare .zz-zap{animation:zzFl .8s infinite}.zz-glare .zz-head{transform-origin:60px 54px;transform:rotate(10deg)}'
+'.zz-crumple .zz-th{transform-origin:60px 62px;transform-box:view-box;animation:zzTh 1.6s ease-in-out infinite}@keyframes zzTh{0%,30%{transform:rotate(30deg)}55%,100%{transform:rotate(-20deg)}}.zz-crumple .zz-ball{animation:zzBl 1.6s ease-in infinite}@keyframes zzBl{0%,50%{transform:translate(0,0);opacity:1}90%{transform:translate(18px,80px);opacity:1}100%{transform:translate(18px,80px);opacity:0}}'
+'.zz-punch .zz-pu{animation:zzPu .5s ease-in-out infinite alternate}@keyframes zzPu{from{transform:translateX(-8px)}to{transform:translateX(2px)}}.zz-punch .zz-cs{transform-origin:107px 61px;transform-box:view-box;animation:zzCs .5s ease-in-out infinite alternate}@keyframes zzCs{from{transform:scaleX(1)}to{transform:scaleX(.75) translateX(4px)}}.zz-punch .zz-tx{animation:zzFl .5s infinite}'
+'.zz-towel .zz-tw{animation:zzTw2 .6s ease-in-out infinite alternate}@keyframes zzTw2{from{transform:scaleY(1)}to{transform:scaleY(-1)}}.zz-towel .zz-body{transform-origin:60px 128px;animation:zzLg .3s infinite alternate}'
+'@media (prefers-reduced-motion:reduce){.zz *{animation:none!important}}'
+'</style>');
})();
