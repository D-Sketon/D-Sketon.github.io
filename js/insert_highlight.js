(()=>{_$$("pre").forEach(e=>{var c,i=e.parentNode;i.classList.contains("gutter")||((c=document.createElement("div")).className="code-area",i.replaceChild(c,e),c.appendChild(e))});let n=(window.REIMU_CONFIG?.code_block||{}).expand;if(_$$("figure.highlight").forEach(e=>{e.querySelector(".code-figcaption")||e.insertAdjacentHTML("afterbegin",`
  <div class="code-figcaption">
    <div class="code-left-wrap">
      <div class="code-decoration"></div>
      <div class="code-lang"></div>
    </div>
    <div class="code-right-wrap">
      <div class="code-copy icon-copy"></div>
      <div class="icon-chevron-down code-expand"></div>
    </div>
  </div>`),n!==void 0&&(n===!1||typeof n=="number"&&e.querySelectorAll("td.code .line").length>n)&&(e.classList.add("code-closed"),e.style.display="none",e.style.display="");var c=e.className.split(" ")[1];c&&(c=c.replace("line-numbers","").replace("language-","").trim().toUpperCase(),e=e.querySelector(".code-lang"))&&(e.innerText=c)}),_$$(".code-expand").forEach(e=>{e.off("click").on("click",()=>{e.closest("figure")?.classList.toggle("code-closed")})}),window.ClipboardJS){let e=window.REIMU_CONFIG?.clipboard_tips||{},c=(o,t)=>{if(typeof o=="string")return o;if(typeof o=="object"){let r=document.documentElement.lang.toLowerCase();var s=Object.keys(o).find(a=>a.toLowerCase()===r);if(s&&o[s])return o[s]}return t},i=new ClipboardJS(".code-copy",{text:o=>{let t=o.parentNode.parentNode.parentNode.querySelector("td.code")?.innerText||"";return e.copyright?.enable&&t.length>=e.copyright?.count&&(t+=`

`+(e.copyright?.content??"")),t}});i.on("success",o=>{o.trigger.classList.add("icon-check"),o.trigger.classList.remove("icon-copy");var t=c(e.success,"Copy successfully (*^\u25BD^*)");_$("#copy-tooltip").innerText=t,_$("#copy-tooltip").style.opacity=1,setTimeout(()=>{_$("#copy-tooltip").style.opacity=0,o.trigger.classList.add("icon-copy"),o.trigger.classList.remove("icon-check")},1e3),o.clearSelection()}),i.on("error",o=>{o.trigger.classList.add("icon-times"),o.trigger.classList.remove("icon-copy");var t=c(e.fail,"Copy failed (\uFF9F\u22BF\uFF9F)\uFF82");_$("#copy-tooltip").innerText=t,_$("#copy-tooltip").style.opacity=1,setTimeout(()=>{_$("#copy-tooltip").style.opacity=0,o.trigger.classList.add("icon-copy"),o.trigger.classList.remove("icon-times")},1e3)}),window.Pjax&&window.addEventListener("pjax:send",()=>{i.destroy()},{once:!0}),window.AOS?.refresh()}})();
