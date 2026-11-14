/* 2026.11.14 홈페이지 전체 글자 1px 작게 */
(function(){if(window.__fs)return;window.__fs=1;
 function walk(rules){for(var i=0;i<rules.length;i++){var r=rules[i];
  if(r.cssRules&&!r.style){walk(r.cssRules);continue;}
  if(r.style){var f=r.style.getPropertyValue('font-size'),m=/^(\d+(?:\.\d+)?)px$/.exec((f||'').trim());
   if(m)r.style.setProperty('font-size',Math.max(10,+m[1]-1)+'px',r.style.getPropertyPriority('font-size'));
   if(r.cssRules&&r.cssRules.length)walk(r.cssRules);}}}
 for(var s=0;s<document.styleSheets.length;s++){try{walk(document.styleSheets[s].cssRules)}catch(e){}}
})();
