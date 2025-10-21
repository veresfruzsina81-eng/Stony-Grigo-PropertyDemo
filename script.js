// ===== Nyelvváltás (HU/EN/DE) – localStorage + data-i18n =====
const i18n = {
  HU: {
    nav_home: "Kezdőlap",
    nav_props: "Ingatlanok",
    nav_team: "Kollégáink",
    nav_partners: "Partnereink",
    nav_invest: "Befektetőknek",
    nav_contact: "Kapcsolat",
    hero_title: "Együtt megtaláljuk álmaid otthonát",
    why_title: "Miért jó, ha minket választ?",
    why_lead: "Mert segítségedre lehetünk, akár egy új, vagy már meglévő ingatlanoddal kapcsolatban.",
    f1:"20 év tapasztalat", f2:"Díjmentes tanácsadás", f3:"Új otthon itthon és külföldön",
    f4:"Ingatlanközvetítés", f5:"Vevőképviselet", f6:"Ügyvédi / Közjegyzői támogatás",
    f7:"Ingatlankezelés & üzemeltetés", f8:"Generál kivitelezés",
    f9:"Ingatlan felújítás / átépítés", f10:"Lakberendezési tanácsadás", f11:"100%-os megelégedettség",
    partners: "Partnereink",
    find_home: "Találj új otthonra",
    cta_team: "Lépj kapcsolatba a kollégákkal!",
    props_tabs_sell:"Eladó", props_tabs_rent:"Kiadó", props_tabs_med:"Mediterrán ingatlanok",
    key:"Kulcsszó", what:"Mit keres?",
    cat:"Kategória", choose_cat:"Válassz kategóriát",
    loc:"Lokáció",
    adv:"Részletes Szűrés",
    search:"Keresés",
    pill_sell:"Eladó ingatlanok",
    pill_rent:"Kiadó ingatlanok",
    pill_med:"Mediterrán ingatlanok",
    marketing:"Miért jó, ha minket választ?",
    team_title:"Kollégáink",
    contact_title:"Lépjen velünk kapcsolatba",
    address:"1188 Budapest, Címer utca 19/A",
    phone:"+36 30 896 5858",
    email:"stonyproperty@gmail.com",
    city:"Budapest",
    facebook:"Facebook",
    footer:"© 2025 Stony & Grigo Property"
  },
  EN: {
    nav_home: "Home",
    nav_props: "Properties",
    nav_team: "Our Team",
    nav_partners: "Partners",
    nav_invest: "For Investors",
    nav_contact: "Contact",
    hero_title: "Together we’ll find your dream home",
    why_title: "Why choose us?",
    why_lead: "We can help with a brand-new purchase or your existing property.",
    f1:"20 years of experience", f2:"Free consulting", f3:"New home at home and abroad",
    f4:"Real-estate brokerage", f5:"Buyer representation", f6:"Attorney / Notary support",
    f7:"Property mgmt & operation", f8:"General contracting",
    f9:"Renovation / Remodeling", f10:"Interior consulting", f11:"100% satisfaction",
    partners:"Our Partners",
    find_home:"Find a new home",
    cta_team:"Get in touch with our team!",
    props_tabs_sell:"For Sale", props_tabs_rent:"For Rent", props_tabs_med:"Mediterranean",
    key:"Keyword", what:"What are you looking for?",
    cat:"Category", choose_cat:"Choose a category",
    loc:"Location",
    adv:"Advanced Filter",
    search:"Search",
    pill_sell:"For-sale listings",
    pill_rent:"Rental listings",
    pill_med:"Mediterranean listings",
    marketing:"Why choose us?",
    team_title:"Our Team",
    contact_title:"Contact us",
    address:"1188 Budapest, Címer utca 19/A",
    phone:"+36 30 896 5858",
    email:"stonyproperty@gmail.com",
    city:"Budapest",
    facebook:"Facebook",
    footer:"© 2025 Stony & Grigo Property"
  },
  DE: {
    nav_home: "Startseite",
    nav_props: "Immobilien",
    nav_team: "Team",
    nav_partners: "Partner",
    nav_invest: "Für Investoren",
    nav_contact: "Kontakt",
    hero_title: "Gemeinsam finden wir Ihr Traumzuhause",
    why_title: "Warum wir?",
    why_lead: "Wir helfen – beim Neukauf oder bei Ihrer bestehenden Immobilie.",
    f1:"20 Jahre Erfahrung", f2:"Kostenlose Beratung", f3:"Neues Zuhause im In- & Ausland",
    f4:"Maklerdienstleistungen", f5:"Käufervertretung", f6:"Anwalt / Notar Unterstützung",
    f7:"Objektverwaltung & Betrieb", f8:"Generalunternehmer",
    f9:"Sanierung / Umbau", f10:"Interior-Beratung", f11:"100% Zufriedenheit",
    partners:"Unsere Partner",
    find_home:"Finde ein neues Zuhause",
    cta_team:"Kontaktieren Sie unser Team!",
    props_tabs_sell:"Zum Verkauf", props_tabs_rent:"Zur Miete", props_tabs_med:"Mittelmeer",
    key:"Schlüsselwort", what:"Wonach suchen Sie?",
    cat:"Kategorie", choose_cat:"Kategorie wählen",
    loc:"Ort",
    adv:"Erweiterter Filter",
    search:"Suchen",
    pill_sell:"Verkaufsangebote",
    pill_rent:"Mietangebote",
    pill_med:"Mittelmeer-Angebote",
    marketing:"Warum wir?",
    team_title:"Unser Team",
    contact_title:"Kontakt aufnehmen",
    address:"1188 Budapest, Címer utca 19/A",
    phone:"+36 30 896 5858",
    email:"stonyproperty@gmail.com",
    city:"Budapest",
    facebook:"Facebook",
    footer:"© 2025 Stony & Grigo Property"
  }
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang][key] ?? "";
    if(el.tagName === "INPUT" || el.tagName==="TEXTAREA"){
      el.placeholder = val;
    }else{
      el.innerText = val;
    }
  });
  // lang button label
  const btn = document.querySelector(".lang-btn .code");
  if(btn) btn.textContent = lang;
}
function initLang(){
  let lang = localStorage.getItem("lang") || "HU";
  setLang(lang);
  const langWrap = document.querySelector(".lang");
  if(langWrap){
    langWrap.querySelector(".lang-btn").addEventListener("click",()=>langWrap.classList.toggle("open"));
    langWrap.querySelectorAll(".lang-item").forEach(it=>{
      it.addEventListener("click", ()=>{
        langWrap.classList.remove("open");
        setLang(it.getAttribute("data-code"));
      })
    })
    document.addEventListener("click",(e)=>{ if(!langWrap.contains(e.target)) langWrap.classList.remove("open"); })
  }
}
document.addEventListener("DOMContentLoaded", initLang);

// ===== végtelen partner/marketing “vetítés” – duplázás, hogy folyamatos legyen
function initMarquees(){
  document.querySelectorAll(".marquee .track").forEach(track=>{
    track.innerHTML += track.innerHTML; // duplázás
  });
}
document.addEventListener("DOMContentLoaded", initMarquees);
