(()=>{_$$("pre").forEach(e=>{var c,t=e.parentNode;t.classList.contains("gutter")||((c=document.createElement("div")).className="code-area",t.insertBefore(c,e),t.removeChild(e),c.appendChild(e))});let o=(window.REIMU_CONFIG?.code_block||{}).expand;if(_$$("figure.highlight").forEach(e=>{e.querySelector(".code-figcaption")||e.insertAdjacentHTML("afterbegin",`
  <div class="code-figcaption">
    <div class="code-left-wrap">
      <div class="code-decoration"></div>
      <div class="code-lang"></div>
    </div>
    <div class="code-right-wrap">
      <div class="code-copy icon-copy"></div>
      <div class="icon-chevron-down code-expand"></div>
    </div>
  </div>`),o!==void 0&&(o===!1||typeof o=="number"&&e.querySelectorAll("td.code .line").length>o)&&e.classList.add("code-closed")}),_$$(".code-expand").forEach(e=>{e.off("click").on("click",()=>{e.closest("figure").classList.toggle("code-closed")})}),_$$("figure.highlight").forEach(e=>{var c=e.className.split(" ")[1];if(c){let t=c.replace("line-numbers","").trim().replace("language-","").trim();t=t.toUpperCase(),(c=e.querySelector(".code-lang"))&&(c.innerText=t)}}),window.ClipboardJS){let e=window.REIMU_CONFIG?.clipboard_tips||{},c=new ClipboardJS(".code-copy",{text:t=>{var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t.parentNode.parentNode.nextElementSibling.querySelector("td.code")),i.removeAllRanges(),i.addRange(r);let n=i.toString();return e.copyright?.enable&&n.length>=e.copyright?.count?n+`

`+(e.copyright?.content??""):n}});c.on("success",t=>{t.trigger.classList.add("icon-check"),t.trigger.classList.remove("icon-copy"),_$("#copy-tooltip").innerText=e.success,_$("#copy-tooltip").style.opacity=1,setTimeout(()=>{_$("#copy-tooltip").style.opacity=0,t.trigger.classList.add("icon-copy"),t.trigger.classList.remove("icon-check")},1e3),t.clearSelection()}),c.on("error",t=>{t.trigger.classList.add("icon-times"),t.trigger.classList.remove("icon-copy"),_$("#copy-tooltip").innerText=e.fail,_$("#copy-tooltip").style.opacity=1,setTimeout(()=>{_$("#copy-tooltip").style.opacity=0,t.trigger.classList.add("icon-copy"),t.trigger.classList.remove("icon-times")},1e3)}),window.Pjax&&window.addEventListener("pjax:send",()=>{c.destroy()},{once:!0})}})();
