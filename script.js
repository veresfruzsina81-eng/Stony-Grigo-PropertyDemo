// --- Nyelvi szótár (HU/EN/DE) csak a főbb elemekre ---
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
    mk_title:"Velünk gyorsabb az út az otthonodhoz", mk_sub:"Személyre szabott keresés, jogi háttér, 20+ év tapasztalat."
  },
  en:{
    nav_home:"Home", nav_props:"Properties", nav_team:"Our Team",
    nav_partners:"Partners", nav_invest:"For Investors", nav_contact:"Contact",
    hero_title:"Together we’ll find your dream home",
    hero_sub:"We’ll take the next step together.",
    btn_team:"Our Team →", btn_props:"Properties →",
    why_title:"Why choose us?",
    why_sub:"We help with new or existing properties.",
    bottom_title:"Find your new home", bottom_sub:"Get in touch with our team – we’ll help you move forward.",
    mk_title:"Faster path to your home", mk_sub:"Tailored search, legal support, 20+ years of experience."
  },
  de:{
    nav_home:"Startseite", nav_props:"Immobilien", nav_team:"Team",
    nav_partners:"Partner", nav_invest:"Für Investoren", nav_contact:"Kontakt",
    hero_title:"Gemeinsam finden wir Ihr Traumhaus",
    hero_sub:"Gemeinsam machen wir den nächsten Schritt.",
    btn_team:"Unser Team →", btn_props:"Immobilien →",
    why_title:"Warum wir?",
    why_sub:"Wir unterstützen bei neuen und bestehenden Immobilien.",
    bottom_title:"Finden Sie Ihr neues Zuhause", bottom_sub:"Kontaktieren Sie unser Team – wir helfen weiter.",
    mk_title:"Schneller zum Zuhause", mk_sub:"Individuelle Suche, rechtliche Unterstützung, 20+ Jahre Erfahrung."
  }
};

// Alkalmazás
(function(){
  const root = document.documentElement;
  const box  = document.getElementById('lang');
  if(box){
    const btn  = box.querySelector('.langbtn');
    const flag = btn.querySelector('.flag');
    const strong = btn.querySelector('strong');
    const menu = box.querySelector('.langmenu');

    const setBtn = (code)=>{
      if(code==='en'){ flag.src='https://flagcdn.com/w20/gb.png'; strong.textContent='EN'; }
      else if(code==='de'){ flag.src='https://flagcdn.com/w20/de.png'; strong.textContent='DE'; }
      else { flag.src='https://flagcdn.com/w20/hu.png'; strong.textContent='HU'; }
    };

    const apply = (code)=>{
      const d = I18N[code] || I18N.hu;
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const k = el.getAttribute('data-i18n');
        if(d[k]) el.textContent = d[k];
      });
      // nav
      const m = document.querySelector('.menu');
      if(m){
        const links = m.querySelectorAll('a');
        if(links[0]) links[0].textContent = d.nav_home;
        if(links[1]) links[1].textContent = d.nav_props;
        if(links[2]) links[2].textContent = d.nav_team;
        if(links[3]) links[3].textContent = d.nav_partners;
        if(links[4]) links[4].textContent = d.nav_invest;
        if(links[5]) links[5].textContent = d.nav_contact;
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
  }
})();
