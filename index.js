import{S as d,i as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="54895040-c15864496dc75d0003b770ec3",h="https://pixabay.com/api/";function y(o){const r=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${h}?${r}`;return fetch(n).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const a=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper");function g(){a.innerHTML=""}function L(o){const r=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${i}">
<img
class="gallery-img"
src="${n}"
alt="${e}"
/>
</a>

<div class="info">
<p>Likes ${t}</p>
<p>Views ${s}</p>
<p>Comments ${u}</p>
<p>Downloads ${f}</p>
</div>
</li>`).join("");a.insertAdjacentHTML("beforeend",r)}function w(){c.style.display="flex"}function S(){c.style.display="none"}const l=document.querySelector(".search-form"),b=document.querySelector(".search-input"),$=new d(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",q);function q(o){o.preventDefault();const r=b.value.trim();r&&(g(),w(),y(r).then(n=>{if(n.hits.length===0){v();return}L(n.hits),$.refresh()}).catch(P).finally(()=>S()),l.reset())}function v(){p.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(o){console.error(o)}
//# sourceMappingURL=index.js.map
