// ===== Nyelvválasztó (HU/EN/DE) – egyszerű kliens oldali szótár =====
const dict = {
  hu: {
    nav_home: "Kezdőlap",
    nav_props: "Ingatlanok",
    nav_team: "Kollégáink",
    nav_contact: "Kapcsolat",
    hero_title: "Együtt megtaláljuk álmaid otthonát",
    hero_sub: "Együtt megálmodjuk a következő lépést.",
    why_title: "Miért jó, ha minket választ?",
    why_sub: "Mert segítségedre lehetünk, akár egy új, vagy már meglévő ingatlanoddal kapcsolatban.",
    cta_title: "Találj új otthonra",
    cta_sub: "Lépj kapcsolatba kollégáinkkal!",
    partners_title: "Partnereink",
  },
  en: {
    nav_home: "Home",
    nav_props: "Properties",
    nav_team: "Our Team",
    nav_contact: "Contact",
    hero_title: "Together we’ll find your dream home",
    hero_sub: "Let’s plan the next step – together.",
    why_title: "Why choose us?",
    why_sub: "We can help with your new or existing property, end-to-end.",
    cta_title: "Find your new home",
    cta_sub: "Get in touch with our colleagues!",
    partners_title: "Our Partners",
  },
  de: {
    nav_home: "Startseite",
    nav_props: "Immobilien",
    nav_team: "Team",
    nav_contact: "Kontakt",
    hero_title: "Gemeinsam finden wir Ihr Traumhaus",
    hero_sub: "Den nächsten Schritt planen – gemeinsam.",
    why_title: "Warum wir?",
    why_sub: "Wir unterstützen Sie rund um neue und bestehende Immobilien.",
    cta_title: "Finden Sie Ihr neues Zuhause",
    cta_sub: "Kontaktieren Sie unser Team!",
    partners_title: "Unsere Partner",
  },
};

function applyLang(lang){
  const table = dict[lang] || dict.hu;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (table[key]) el.textContent = table[key];
  });
  const btn = document.getElementById("langBtn");
  btn.textContent = (lang==="hu"?"🇭🇺 HU":lang==="en"?"🇬🇧 EN":"🇩🇪 DE")+" ▾";
  localStorage.setItem("sg_lang", lang);
}

// Menü nyit/zár
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
if(langBtn && langMenu){
  langBtn.addEventListener("click", ()=>{
    langMenu.style.display = langMenu.style.display === "flex" ? "none" : "flex";
  });
  langMenu.addEventListener("click", (e)=>{
    const btn = e.target.closest("button[data-lang]");
    if(!btn) return;
    applyLang(btn.dataset.lang);
    langMenu.style.display = "none";
  });
  document.addEventListener("click", (e)=>{
    if(!langMenu.contains(e.target) && e.target!==langBtn) langMenu.style.display="none";
  });
  applyLang(localStorage.getItem("sg_lang") || "hu");
}

// ===== Marquee – duplázott pálya, folyamatos görgés =====
document.querySelectorAll(".marquee .track").forEach(track=>{
  // duplázás, hogy a scroll folytonos legyen
  track.innerHTML = track.innerHTML + track.innerHTML;
});
