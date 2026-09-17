function $(s){return document.querySelector(s)}
function $all(s){return [...document.querySelectorAll(s)]}
function cleanPhone(v){return String(v||"").replace(/\D/g,"")}
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}

document.addEventListener("DOMContentLoaded",()=>{
  const menu=$(".menu"),nav=$(".nav");
  if(menu)menu.onclick=()=>nav.classList.toggle("open");
  $all("[data-phone]").forEach(a=>a.href="tel:"+SITE_CONFIG.PHONE);
  $all("[data-whatsapp]").forEach(a=>a.href="https://wa.me/"+cleanPhone(SITE_CONFIG.WHATSAPP));
  $all("[data-email]").forEach(a=>a.href="mailto:"+SITE_CONFIG.EMAIL);
  $all("[data-advocate]").forEach(x=>x.textContent=SITE_CONFIG.ADVOCATE);
  const page=location.pathname.split("/").pop()||"index.html";
  $all(".nav a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("active")});
});

async function api(action,data={}){
  if(!SITE_CONFIG.API_URL||SITE_CONFIG.API_URL.includes(https://script.google.com/macros/s/AKfycbxgbOyOxRmBk26vU_oJk4xqHKvyMJn3ChV0koBHV3Y6UbC0JQ9QtvEUir1nT1ojfYI/exec))
    throw new Error("Google Apps Script Web App URL अभी assets/config.js में नहीं डाली गई है।");
  const res=await fetch(SITE_CONFIG.API_URL,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action,...data})});
  const out=await res.json();
  if(!out.ok)throw new Error(out.message||"Request failed");
  return out;
}
