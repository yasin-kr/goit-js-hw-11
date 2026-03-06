import{S as d,i as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="54895040-c15864496dc75d0003b770ec3",h="https://pixabay.com/api/";function y(n){const s=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),r=`${h}?${s}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const i=document.querySelector(".gallery"),l=document.querySelector(".loader-wrapper");function g(){i.innerHTML=""}function v(n){const s=n.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}">
<img
class="gallery-img"
src="${r}"
alt="${e}"
/>
</a>

<div class="info">
  <div class="info-item">
    <span class="info-label">Likes</span>
    <span class="info-value">${t}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Views</span>
    <span class="info-value">${a}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Comments</span>
    <span class="info-value">${u}</span>
  </div>

  <div class="info-item">
    <span class="info-label">Downloads</span>
    <span class="info-value">${f}</span>
  </div>
</div>
</li>`).join("");i.insertAdjacentHTML("beforeend",s)}function L(){l.style.display="flex"}function b(){l.style.display="none"}const c=document.querySelector(".search-form"),w=document.querySelector(".search-input"),S=new d(".gallery a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",$);function $(n){n.preventDefault();const s=w.value.trim();s&&(g(),L(),y(s).then(r=>{if(r.hits.length===0){q();return}v(r.hits),S.refresh()}).catch(P).finally(()=>b()),c.reset())}function q(){p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(n){console.log(n)}
//# sourceMappingURL=index.js.map
