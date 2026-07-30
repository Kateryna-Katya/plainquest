/* empty css                      */import{S as m,A as w}from"./assets/vendor-Dh8rjQuo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();let f=null;function g(){window.innerWidth<1440&&!f&&(f=new m(".main-swiper",{modules:[w],slidesPerView:1.2,spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:700}))}function v(){window.innerWidth>=1440&&f&&(f.destroy(!0,!0),f=null)}function h(){g(),v()}h();window.addEventListener("resize",h);document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".menu-button"),s=l.querySelector(".icon"),u=document.querySelector(".modal"),d=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const c=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_434)">
    <path d="M4 6H20" stroke="#FFCE37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 12H20" stroke="#FFCE37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 18H20" stroke="#FFCE37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_434">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,o=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_413)">
    <path d="M18 6L6 18" stroke="#FFCE37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 6L18 18" stroke="#FFCE37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_1_413">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;l.addEventListener("click",()=>{t=!t,s.innerHTML=t?o:c,t?n():i()}),d.forEach(a=>a.addEventListener("click",()=>{i(),s.innerHTML=c,t=!1})),window.addEventListener("scroll",r);function n(){u.style.display="block"}function i(){u.style.display="none"}function r(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function l(){const o=document.getElementById("site-header");return o?o.offsetHeight:0}function s(o){const n=document.getElementById(o);if(!n)return;const i=l(),r=n.getBoundingClientRect().top+window.pageYOffset-i;window.scrollTo({top:r,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(o=>{o.addEventListener("click",function(n){const i=this.getAttribute("href");if(!i)return;const[r,a]=i.split("#");if(!a)return;const p=window.location.pathname.split("/").pop();!(r===""||r==="./"||r===p||r==="./"+p)||!document.getElementById(a)||(n.preventDefault(),s(a),t(a))})});const d=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(o){e.forEach(i=>i.classList.remove("active"));const n=document.querySelector(`.navigation-item a[href*="#${o}"]`);n&&n.closest(".navigation-item").classList.add("active")}function c(){const o=window.pageYOffset+l()+100;d.forEach(n=>{const i=n.offsetTop,r=i+n.offsetHeight;o>=i&&o<r&&t(n.id)})}if(window.addEventListener("scroll",c),window.location.hash){const o=window.location.hash.substring(1);setTimeout(()=>{s(o),t(o)},300)}});
//# sourceMappingURL=index.js.map
