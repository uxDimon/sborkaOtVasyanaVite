import"./style.37bd6843.js";const t=document.querySelectorAll("[data-tab-id]");if(t){let o=new Set;for(const a of t)o.add(a.dataset.tabId);for(const t of o){let o=function(o){for(const t of a.controlList)t.classList.remove("active");for(const t of a.blockList)t.style.display="none";document.querySelector(`[data-tab-id="${t}"][data-tab-control="${o}"]`).classList.add("active"),document.querySelector(`[data-tab-id="${t}"][data-tab-block="${o}"]`).style.display=""};const a={controlList:document.querySelectorAll(`[data-tab-id="${t}"][data-tab-control]`),blockList:document.querySelectorAll(`[data-tab-id="${t}"][data-tab-block]`)};o(a.controlList[0].dataset.tabControl);for(const t of a.controlList)t.addEventListener("click",(()=>{o(t.dataset.tabControl)}))}}console.log("Страница 2");