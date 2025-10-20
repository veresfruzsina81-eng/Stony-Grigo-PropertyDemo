// Zászlós, üveges nyelvválasztó
(function(){
  const box = document.getElementById('lang');
  if(!box) return;
  const btn = box.querySelector('.langbtn');
  const menu = box.querySelector('.langmenu');
  const flag = btn ? btn.querySelector('.flag') : null;
  const codeEl = btn ? btn.querySelector('strong') : null;

  const setBtn = (code) => {
    if(!flag || !codeEl) return;
    if(code==='en'){ flag.src='https://flagcdn.com/w20/gb.png'; codeEl.textContent='EN'; }
    else if(code==='de'){ flag.src='https://flagcdn.com/w20/de.png'; codeEl.textContent='DE'; }
    else { flag.src='https://flagcdn.com/w20/hu.png'; codeEl.textContent='HU'; }
  };

  const current = localStorage.getItem('lang') || 'hu';
  setBtn(current);

  btn && btn.addEventListener('click', (e)=>{ e.stopPropagation(); box.classList.toggle('open'); });
  document.addEventListener('click', ()=> box.classList.remove('open'));
  menu && menu.querySelectorAll('button[data-code]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const code = b.getAttribute('data-code');
      localStorage.setItem('lang', code);
      setBtn(code);
      box.classList.remove('open');
    });
  });
})();

// Ingatlanok tabok (Eladó / Kiadó / Mediterrán – demo vizuál)
document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
  });
});
