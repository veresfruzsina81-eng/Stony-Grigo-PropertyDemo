// Zászlós nyelvváltó (vizuális) – index.html-hez
function switchLang(code){
  const btn = document.querySelector('#lang .langbtn strong');
  const flag = document.querySelector('#lang .langbtn .flag');
  if(!btn || !flag) return;
  if(code==='hu'){ btn.textContent='HU'; flag.src='https://flagcdn.com/w20/hu.png'; }
  if(code==='en'){ btn.textContent='EN'; flag.src='https://flagcdn.com/w20/gb.png'; }
  if(code==='de'){ btn.textContent='DE'; flag.src='https://flagcdn.com/w20/de.png'; }
  document.getElementById('lang').classList.remove('open');
}
document.addEventListener('click', e=>{
  const box=document.getElementById('lang');
  if(!box) return;
  if(!box.contains(e.target)) box.classList.remove('open');
});

// Ingatlanok tabok (Eladó/Kiadó/Mediterrán)
document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
  });
});
