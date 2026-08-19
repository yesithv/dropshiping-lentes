function fmt(n){var s=Math.round(Math.abs(n)).toString(),r='';for(var i=s.length-1,c=0;i>=0;i--,c++){if(c>0&&c%3===0){r='.'+r;}r=s[i]+r;}return r;}
function calcMargen(id){
  var prov=Number.parseFloat(document.getElementById('prov-'+id).value);
  var price=Number.parseFloat(document.getElementById('pventa-'+id).value);
  var totalEl=document.getElementById('ctotal-'+id);
  var margenEl=document.getElementById('cmargen-'+id);
  var pctEl=document.getElementById('cpct-'+id);
  var blank='<span class="calc-val" style="color:var(--muted)">—</span>';
  if(!prov||!price||price<=0){totalEl.innerHTML='<span class="calc-lbl">Costo total</span>'+blank;margenEl.innerHTML='<span class="calc-lbl">Margen</span>'+blank;pctEl.innerHTML='<span class="calc-lbl">%</span>'+blank;return;}
  var pasarela=0.04*price+800;
  var total=prov+17750+pasarela;
  var margen=price-total;
  var pct=margen/price*100;
  totalEl.innerHTML='<span class="calc-lbl">Costo total</span><span class="calc-val" style="color:var(--txt)">$'+fmt(total)+'</span>';
  var mc=margen>=0?'var(--txt)':'#ff8080';
  margenEl.innerHTML='<span class="calc-lbl">Margen</span><span class="calc-val" style="color:'+mc+'">'+(margen<0?'−':'')+'$'+fmt(margen)+'</span>';
  var color,label,cls;
  if(pct>=35){color='var(--accent2)';label='Viable con pauta';cls='s-viable';}
  else if(pct>=20){color='var(--warn)';label='Viable con condiciones';cls='s-cond';}
  else if(pct>=10){color='var(--accent)';label='Analizar';cls='s-ana';}
  else if(pct>0){color='#ff8080';label='No viable';cls='s-bad';}
  else{color='#ff8080';label='Pérdida';cls='s-bad';}
  pctEl.innerHTML='<span class="calc-lbl">%</span><span class="calc-val" style="color:'+color+'">'+pct.toFixed(1)+'%</span><span class="calc-status '+cls+'">'+label+'</span>';
}
function addPctBadges(){
  var cells=document.querySelectorAll('.accordion-body table tbody tr td:last-child');
  cells.forEach(function(td){
    var txt=td.textContent.trim();
    var m=txt.match(/^(−?-?\d+[.,]\d+)%/);
    if(!m)return;
    var pct=Number.parseFloat(m[1].replace(',','.').replace('−','-'));
    var color,cls,label;
    if(pct>=35){color='var(--accent2)';cls='s-viable';label='Viable con pauta';}
    else if(pct>=20){color='var(--warn)';cls='s-cond';label='Viable con condiciones';}
    else if(pct>=10){color='var(--accent)';cls='s-ana';label='Analizar';}
    else if(pct>0){color='#ff8080';cls='s-bad';label='No viable';}
    else{color='#ff8080';cls='s-bad';label='Pérdida';}
    td.style.color='';
    td.innerHTML='<span style="color:'+color+';font-weight:700">'+m[1]+'%</span><span class="calc-status '+cls+'">'+label+'</span>';
  });
}
document.addEventListener('DOMContentLoaded',addPctBadges);

function initScrollSpy(){
  var navLinks=Array.prototype.slice.call(document.querySelectorAll('.navlinks a'));
  var sections=navLinks.map(function(link){return document.getElementById(link.getAttribute('href').slice(1));}).filter(Boolean);
  if(!sections.length)return;
  var setActive=function(id){
    navLinks.forEach(function(link){
      link.classList.toggle('active',link.getAttribute('href')==='#'+id);
    });
  };
  var observer=new IntersectionObserver(function(entries){
    var visible=entries.filter(function(e){return e.isIntersecting;});
    if(!visible.length)return;
    visible.sort(function(a,b){return a.boundingClientRect.top-b.boundingClientRect.top;});
    setActive(visible[0].target.id);
  },{rootMargin:'-80px 0px -70% 0px', threshold:0});
  sections.forEach(function(sec){observer.observe(sec);});
}
document.addEventListener('DOMContentLoaded',initScrollSpy);

function wrapTablesForScroll(){
  document.querySelectorAll('table').forEach(function(table){
    if(table.closest('.table-scroll'))return;
    var wrapper=document.createElement('div');
    wrapper.className='table-scroll';
    table.parentNode.insertBefore(wrapper,table);
    wrapper.appendChild(table);
  });
}
document.addEventListener('DOMContentLoaded',wrapTablesForScroll);

function initMobileNav(){
  var toggle=document.getElementById('nav-toggle');
  if(!toggle)return;
  document.querySelectorAll('.navlinks a').forEach(function(link){
    link.addEventListener('click',function(){toggle.checked=false;});
  });
}
document.addEventListener('DOMContentLoaded',initMobileNav);
