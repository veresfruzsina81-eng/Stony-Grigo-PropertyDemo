const I18N = {
  hu:{
    nav_home:"Kezdőlap", nav_props:"Ingatlanok", nav_team:"Kollégáink",
    nav_partners:"Partnereink", nav_invest:"Befektetőknek", nav_contact:"Kapcsolat",
    hero_title:"Együtt megtaláljuk álmaid otthonát",
    hero_sub:"Együtt megálmodjuk a következő lépést.",
    btn_team:"Kollégáink →", btn_props:"Ingatlanok →",
    why_title:"Miért jó, ha minket választ?",
    why_sub:"Mert segítségedre lehetünk – akár egy új, vagy már meglévő ingatlanoddal kapcsolatban.",
    bottom_title:"Találj új otthonra", bottom_sub:"Lépj kapcsolatba kollégáinkkal – segítünk a következő lépésben.",
    mk_title:"Velünk gyorsabb az út az otthonodhoz",
    mk_sub:"Személyre szabott keresés, jogi háttér, 20+ év tapasztalat."
  },
  en:{
    nav_home:"Home", nav_props:"Properties", nav_team:"Our Team",
    nav_partners:"Partners", nav_invest:"For Investors", nav_contact:"Contact",
    hero_title:"Together we’ll find your dream home",
    hero_sub:"We’ll take the next step together.",
    btn_team:"Our Team →", btn_props:"Properties →",
    why_title:"Why choose us?",
    why_sub:"We can help you with new or existing properties.",
    bottom_title:"Find your new home", bottom_sub:"Get in touch with our team – we’ll help you move forward.",
    mk_title:"A faster path to your home",
    mk_sub:"Tailored search, legal support, 20+ years of experience."
  },
  de:{
    nav_home:"Startseite", nav_props:"Immobilien", nav_team:"Team",
    nav_partners:"Partner", nav_invest:"Für Investoren", nav_contact:"Kontakt",
    hero_title:"Gemeinsam finden wir Ihr Traumhaus",
    hero_sub:"Gemeinsam machen wir den nächsten Schritt.",
    btn_team:"Unser Team →", btn_props:"Immobilien →",
    why_title:"Warum wir?",
    why_sub:"Wir unterstützen Sie bei neuen und bestehenden Immobilien.",
    bottom_title:"Finden Sie Ihr neues Zuhause", bottom_sub:"Kontaktieren Sie unser Team – wir helfen weiter.",
    mk_title:"Schneller zum Zuhause",
    mk_sub:"Individuelle Suche, Rechtsbeistand, 20+ Jahre Erfahrung."
  }
};

(function(){
  const box = document.getElementById('lang');
  if(!box) return;
  const btn   = box.querySelector('.langbtn');
  const flag  = btn.querySelector('.flag');
  const label = btn.querySelector('strong');
  const menu  = box.querySelector('.langmenu');

  const setBtn = (code)=>{
    if(code==='en'){ flag.src='https://flagcdn.com/w20/gb.png'; label.textContent='EN'; }
    else if(code==='de'){ flag.src='https://flagcdn.com/w20/de.png'; label.textContent='DE'; }
    else{ flag.src='https://flagcdn.com/w20/hu.png'; label.textContent='HU'; }
  };

  const apply = (code)=>{
    const d = I18N[code] || I18N.hu;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(d[k]) el.textContent = d[k];
    });
    // nav linkek
    const m = document.querySelector('.menu');
    if(m){
      const L = m.querySelectorAll('a');
      if(L[0]) L[0].textContent = d.nav_home;
      if(L[1]) L[1].textContent = d.nav_props;
      if(L[2]) L[2].textContent = d.nav_team;
      if(L[3]) L[3].textContent = d.nav_partners;
      if(L[4]) L[4].textContent = d.nav_invest;
      if(L[5]) L[5].textContent = d.nav_contact;
    }
    setBtn(code);
    localStorage.setItem('lang', code);
  };

  // open/close
  btn.addEventListener('click', (e)=>{ e.stopPropagation(); box.classList.toggle('open'); });
  document.addEventListener('click', ()=> box.classList.remove('open'));
  menu.querySelectorAll('button[data-code]').forEach(b=>{
    b.addEventListener('click', ()=> apply(b.getAttribute('data-code')));
  });

  apply(localStorage.getItem('lang') || 'hu');

  // Ingatlanok tabok – vizuális
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click',()=>{
      document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
    });
  });
})();
