/* 2026.11 강의 자료실 방 비밀번호 창
   - 강사 기기(dubaero_owner)는 묻지 않고 바로 열림
   - 수강생·담당자는 한 번 비밀번호를 맞히면 그 기기에서 90일 동안 바로 열림
   - 비밀번호는 암호화 값(SHA-256)만 저장합니다.
   새 방을 만들면 ROOMS 에 '주소': ['암호화 값'] 을 한 줄 추가하세요. */
(function(){
  var ROOMS={
    '/family/':['27782676119a0706a707ff64a30386cdf9bdea6ef1033726fbd8b36a5a55caff'],
    '/masan/':['58610cf8357f0868fdd4bee0a42894aadfa6b73a8a2aaac0e8a7459e9fdf3491','43cce5d2f89e9987210baf8b16ac6b75916c5d081c442d51637f7009cea2e8b5']
  };
  var MASTER=['f3a5d86222eef5c5fb1378be55098057fbd6c7c399e43e1311773b4545ad2269','d2ff28beb6a7e88b09f21b6bb19d403182f66179a16187233c027c682c7d2f6f'];
  var OKD=90*24*60*60*1000, path=location.pathname, key=null;
  Object.keys(ROOMS).forEach(function(k){ if(path.indexOf(k)===0) key=k; });
  if(!key) return;
  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}}
  function sha(t){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(t)).then(function(b){return Array.prototype.map.call(new Uint8Array(b),function(x){return ('0'+x.toString(16)).slice(-2);}).join('');});}
  function open_(){ return ls('dubaero_owner')==='1' || (+ls('room_ok:'+key)||0) > Date.now(); }
  var adm=null; try{adm=new URLSearchParams(location.search).get('admin');}catch(e){}
  if(open_() && !adm) return;

  var root=document.documentElement; root.classList.add('rg-lock');
  var st=document.createElement('style');
  st.textContent='html.rg-lock body>*:not(#rg-gate){display:none!important}'+
  '#rg-gate{position:fixed;inset:0;z-index:2147483000;background:#F6F8FA;display:grid;place-items:center;padding:18px;font-family:"Noto Sans KR","Pretendard",system-ui,sans-serif;letter-spacing:-.01em}'+
  '#rg-gate .rg-box{box-sizing:border-box;width:min(440px,100%);background:#fff;border:1px solid #E1E6EC;border-radius:18px;padding:34px 28px 28px;display:grid;gap:10px;box-shadow:0 24px 50px -30px rgba(23,48,79,.45)}'+
  '#rg-gate small{font-size:14px;font-weight:700;color:#1F6FB2}#rg-gate h1{font-size:24px;color:#17304F;margin:0}'+
  '#rg-gate p{font-size:16px;color:#4A5562;margin:0}#rg-gate form{display:flex;gap:8px;margin-top:8px}'+
  '#rg-gate input{flex:1;min-width:0;font:inherit;font-size:18px;padding:13px 16px;border:1px solid #C9D3DD;border-radius:10px;color:#17304F}'+
  '#rg-gate input:focus{outline:2px solid #1F6FB2;outline-offset:1px}'+
  '#rg-gate button{font:inherit;font-size:17px;font-weight:500;min-height:52px;padding:0 22px;border:0;border-radius:10px;background:#17304F;color:#fff;cursor:pointer}'+
  '#rg-gate .rg-m{min-height:1.5em;font-size:15px;color:#B5553A}#rg-gate .rg-f{font-size:13.5px;color:#5F6B78;margin-top:6px}'+
  '@media (max-width:480px){#rg-gate form{flex-direction:column}}';
  (document.head||root).appendChild(st);

  function unlock(){root.classList.remove('rg-lock');var g=document.getElementById('rg-gate');if(g)g.remove();}
  if(adm){ sha(adm).then(function(h){ if(MASTER.indexOf(h)>-1){ ls('dubaero_owner','1'); unlock(); } else if(open_()) unlock(); }); if(open_()){ unlock(); return; } }

  function build(){
    if(!root.classList.contains('rg-lock')||document.getElementById('rg-gate'))return;
    var g=document.createElement('div');g.id='rg-gate';g.setAttribute('role','dialog');g.setAttribute('aria-modal','true');g.setAttribute('aria-labelledby','rg-t');
    g.innerHTML='<div class="rg-box"><small>강의 자료실</small><h1 id="rg-t">비밀번호를 입력해 주세요</h1>'+
      '<p>강의 때 안내받은 비밀번호를 한 번만 넣으면, 이 기기에서는 다음부터 바로 열립니다.</p>'+
      '<form autocomplete="off"><label for="rg-in" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">비밀번호</label>'+
      '<input id="rg-in" type="password" placeholder="비밀번호" autocapitalize="off" spellcheck="false"><button type="submit">들어가기</button></form>'+
      '<div class="rg-m" aria-live="polite"></div><div class="rg-f">이서정 AI 강사 · 오늘두AI · 디지털이음연구소</div></div>';
    document.body.appendChild(g);
    var inp=g.querySelector('input'),msg=g.querySelector('.rg-m');
    setTimeout(function(){inp.focus();},50);
    g.querySelector('form').addEventListener('submit',function(e){
      e.preventDefault();var v=inp.value.trim();if(!v)return;
      sha(v).then(function(h){
        if(MASTER.indexOf(h)>-1){ls('dubaero_owner','1');unlock();return;}
        if(ROOMS[key].indexOf(h)>-1){ls('room_ok:'+key,String(Date.now()+OKD));unlock();return;}
        msg.textContent='비밀번호가 맞지 않아요. 강의 때 안내받은 비밀번호를 확인해 주세요.';inp.select();
      }).catch(function(){msg.textContent='이 화면에서는 확인할 수 없어요. 주소가 https 로 시작하는지 확인해 주세요.';});
    });
  }
  if(document.body)build();else document.addEventListener('DOMContentLoaded',build);
})();
