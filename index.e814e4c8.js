!function(){var e=document.querySelector("#btn-header"),t=document.querySelector("#btn-hero"),n=document.querySelector("#btn-hero"),l=document.querySelector(".backdrop"),o=document.querySelector(".modal__title"),c=document.querySelector(".order"),d=document.querySelector(".modal__text "),r=[],a=function(){c.addEventListener("submit",(function(e){var t=e.target.name.value,n=e.target.phone.value,l=e.target.email.value;e.preventDefault(),t&&n&&l&&(c.style.display="none",o.style.display="none",d.style.display="flex",r.push({name:t,phone:n,email:l}))})),l.style.display="block",document.querySelector("#btn-close").addEventListener("click",(function(){l.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(l.style.display="none")})),l.addEventListener("click",(function(e){e.target===l&&(l.style.display="none")}))};e.addEventListener("click",a),t.addEventListener("click",a),n.addEventListener("click",a)}();
//# sourceMappingURL=index.e814e4c8.js.map
