/* Shared behaviour for all four mockups: scroll reveals + mobile menu.
   Same logic as the live index.html, factored out so the mockups only
   carry their own hero script. */
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const mt=document.getElementById('menuToggle'), mm=document.getElementById('mobileMenu');
  if(!mt||!mm) return;
  const close=()=>{ mm.classList.remove('open'); mt.classList.remove('open'); mt.setAttribute('aria-expanded','false'); };
  mt.addEventListener('click',()=>{
    const open=mm.classList.toggle('open');
    mt.classList.toggle('open',open);
    mt.setAttribute('aria-expanded',open?'true':'false');
  });
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
})();
