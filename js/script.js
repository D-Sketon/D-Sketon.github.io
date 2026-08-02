window.throttle=(a,o)=>{let s,n;return(...d)=>{let c=this;!n||Date.now()-n>=o?(a.apply(c,d),n=Date.now()):(clearTimeout(s),s=setTimeout(()=>{a.apply(c,d),n=Date.now()},o-(Date.now()-n)))}},(()=>{[Element,Document,Window].forEach(e=>{e.prototype._addEventListener=e.prototype.addEventListener,e.prototype._removeEventListener=e.prototype.removeEventListener,e.prototype.addEventListener=e.prototype.on=function(r,i,t){for(var[m,l]of(this.__listeners__=this.__listeners__||{},this.__listeners__[r]=this.__listeners__[r]||[],this.__listeners__[r]))if(m===i&&JSON.stringify(l)===JSON.stringify(t))return this;return this.__listeners__[r].push([i,t]),this._addEventListener(r,i,t),this},e.prototype.removeEventListener=e.prototype.off=function(r,i,t){return this.__listeners__&&this.__listeners__[r]&&(i?(this._removeEventListener(r,i,t),this.__listeners__[r]=this.__listeners__[r].filter(([m,l])=>m!==i||JSON.stringify(l)!==JSON.stringify(t)),this.__listeners__[r].length===0&&delete this.__listeners__[r]):(this.__listeners__[r].forEach(([m,l])=>{this.removeEventListener(r,m,l)}),delete this.__listeners__[r])),this}}),window._$=e=>document.querySelector(e),window._$$=e=>document.querySelectorAll(e);let a=window.matchMedia("(prefers-color-scheme: dark)").matches;function o(e){var r=e==="true"||e==="auto"&&a;r?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("dark_mode",e),n&&(n.id=`nav-${e==="true"?"moon":e==="false"?"sun":"circle-half-stroke"}-btn`),document.body.dispatchEvent(new CustomEvent("reimu:theme-set",{detail:{isDark:r,mode:e}}))}var s=window.REIMU_CONFIG?.dark_mode||{};let n=null,d=(s.button!==!1&&((n=document.createElement("a")).className="nav-icon dark-mode-btn",_$("#sub-nav")?.append(n),n.addEventListener("click",throttle(()=>{var e=["auto","false","true"];o(e[(e.indexOf(localStorage.getItem("dark_mode"))+1)%3])},1e3))),o(localStorage.getItem("dark_mode")||document.documentElement.getAttribute("data-theme-mode")||"auto"),0);if(document.addEventListener("scroll",()=>{var e=document.documentElement.scrollTop||document.body.scrollTop,r=e-d;window.diffY=r,d=e,r<0?_$("#header-nav").classList.remove("header-nav-hidden"):_$("#header-nav").classList.add("header-nav-hidden")}),window.Pace&&Pace.on("done",()=>{Pace.sources[0].elements=[]}),window.materialTheme){let r=function(){var t;_$("#reimu-generated-theme-style")||((t=document.createElement("style")).id="reimu-generated-theme-style",t.textContent=`
    :root {
      --red-0: var(--md-sys-color-primary-light);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-light) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-light) 75%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-light) 55%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-light) 40%, white);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-light) 15%, white);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-light) 10%, white);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-light) 5%, white);
    
      --color-border: var(--red-3);
      --color-link: var(--red-1);
      --color-meta-shadow: var(--red-6);
      --color-h2-after: var(--red-1);
      --color-red-6-shadow: var(--red-2);
      --color-red-3-shadow: var(--red-3);
    }
    
    [data-theme="dark"]:root {
      --red-0: var(--red-1);
      --red-1: color-mix(in srgb, var(--md-sys-color-primary-dark) 90%, white);
      --red-2: color-mix(in srgb, var(--md-sys-color-primary-dark) 80%, white);
      --red-3: color-mix(in srgb, var(--md-sys-color-primary-dark) 75%, white);
      --red-4: color-mix(in srgb, var(--md-sys-color-primary-dark) 30%, transparent);
      --red-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 20%, transparent);
      --red-5-5: color-mix(in srgb, var(--md-sys-color-primary-dark) 10%, transparent);
      --red-6: color-mix(in srgb, var(--md-sys-color-primary-dark) 5%, transparent);
      
      --color-border: var(--red-5);
    }
    `,document.body.appendChild(t))};var c=r;let e=new materialTheme.ColorThemeExtractor({needTransition:!1});async function i(t){t=await e.generateThemeSchemeFromImage(t),document.documentElement.style.setProperty("--md-sys-color-primary-light",e.hexFromArgb(t.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",e.hexFromArgb(t.schemes.dark.props.primary)),(t=_$("#reimu-generated-theme-style"))||r()}window.generateSchemeHandler=()=>{var t;window.bannerElement?.src?window.bannerElement.complete?i(bannerElement):window.bannerElement.addEventListener("load",()=>{i(bannerElement)},{once:!0}):window.bannerElement?.style.background&&(t=window.bannerElement.style.background.match(/\d+/g),t=e.generateThemeScheme({r:parseInt(t[0]),g:parseInt(t[1]),b:parseInt(t[2])}),document.documentElement.style.setProperty("--md-sys-color-primary-light",e.hexFromArgb(t.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",e.hexFromArgb(t.schemes.dark.props.primary)),r())}}})();var safeImport=async(a,o)=>{if(!o)return import(a);var s=await(await fetch(a)).text(),n=await crypto.subtle.digest("SHA-384",new TextEncoder().encode(s));if("sha384-"+btoa(String.fromCharCode(...new Uint8Array(n)))!==o)throw new Error("Integrity check failed for "+a);return n=new Blob([s],{type:"application/javascript"}),o=URL.createObjectURL(n),a=await import(o),URL.revokeObjectURL(o),a};
