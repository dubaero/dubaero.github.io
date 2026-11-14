/* 2026.11 홈: 강의장 사진 배너 + 강의 후기(블로그) 자동 표시
   - /data/blog.json 은 GitHub 자동 작업(.github/workflows/blog.yml)이 네이버 블로그에서 가져와 채웁니다.
   - 아직 비어 있으면 index.html 안에 들어 있는 기본 사진이 그대로 보입니다. */
(function(){
  var stage=document.getElementById('bn-stage'),dotsBox=document.getElementById('bn-dots'),grid=document.getElementById('rv-grid');
  if(!stage)return;
  var BLOG='https://blog.naver.com/ricewitch',timer=null,idx=0;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
  function link(href){var a=document.createElement('a');a.href=href||BLOG;a.target='_blank';a.rel='noopener';return a;}

  function slides(){return Array.prototype.slice.call(stage.querySelectorAll('.bn-slide'));}
  function dots(){return Array.prototype.slice.call(dotsBox.querySelectorAll('button'));}
  function show(i){var s=slides(),d=dots();if(!s.length)return;idx=(i+s.length)%s.length;
    s.forEach(function(x,k){x.classList.toggle('on',k===idx);});d.forEach(function(x,k){x.classList.toggle('on',k===idx);});}
  function start(){stop();if(reduce||slides().length<2)return;timer=setInterval(function(){show(idx+1);},6000);}
  function stop(){if(timer)clearInterval(timer);timer=null;}
  function bindDots(){dots().forEach(function(b,k){b.addEventListener('click',function(){show(k);start();});});}
  stage.addEventListener('mouseenter',stop);stage.addEventListener('mouseleave',start);
  document.addEventListener('visibilitychange',function(){if(document.hidden)stop();else start();});

  function buildBanner(items){
    stage.innerHTML='';dotsBox.innerHTML='';
    items.forEach(function(it,k){
      var a=link(it.link);a.className='bn-slide'+(k===0?' on':'');
      var im=document.createElement('img');im.src=it.photo||it.img;im.alt=(it.title||'강의 후기')+' 현장 사진';if(k)im.loading='lazy';a.appendChild(im);
      var cap=el('span','bn-cap'),t=el('span');t.appendChild(el('small',null,it.date||''));t.appendChild(el('b',null,it.title||'강의 후기'));
      cap.appendChild(t);cap.appendChild(el('i',null,'후기 보기 →'));a.appendChild(cap);stage.appendChild(a);
      var d=document.createElement('button');d.type='button';d.setAttribute('aria-label',(k+1)+'번째 사진');if(k===0)d.className='on';dotsBox.appendChild(d);
    });
    idx=0;bindDots();
  }
  function buildReviews(items){
    if(!grid)return;grid.innerHTML='';
    items.forEach(function(it){
      var a=link(it.link);a.className='rv';
      var box=el('span','rv-img'),im=document.createElement('img');im.src=it.img;im.alt='';im.loading='lazy';box.appendChild(im);a.appendChild(box);
      var t=el('span');t.appendChild(el('b',null,it.title||'강의 후기'));t.appendChild(el('small',null,it.date||''));a.appendChild(t);
      grid.appendChild(a);
    });
  }

  bindDots();start();
  if(!window.fetch)return;
  fetch('/data/blog.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json();}).then(function(data){
    var items=(data&&data.items||[]).filter(function(x){return x&&x.img&&x.link;});
    if(!items.length)return;
    var photos=items.filter(function(x){return x.photo;});
    if(photos.length){buildBanner(photos.slice(0,5));start();}
    buildReviews(items.slice(0,8));
  }).catch(function(){});
})();
