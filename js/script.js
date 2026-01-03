window.throttle=(n,a)=>{let s,o;return(...l)=>{let e=this;!o||Date.now()-o>=a?(n.apply(e,l),o=Date.now()):(clearTimeout(s),s=setTimeout(()=>{n.apply(e,l),o=Date.now()},a-(Date.now()-o)))}},(()=>{[Element,Document,Window].forEach(e=>{e.prototype._addEventListener=e.prototype.addEventListener,e.prototype._removeEventListener=e.prototype.removeEventListener,e.prototype.addEventListener=e.prototype.on=function(r,i,t){this.__listeners__=this.__listeners__||{},this.__listeners__[r]=this.__listeners__[r]||[];for(var[d,m]of this.__listeners__[r])if(d===i&&JSON.stringify(m)===JSON.stringify(t))return this;return this.__listeners__[r].push([i,t]),this._addEventListener(r,i,t),this},e.prototype.removeEventListener=e.prototype.off=function(r,i,t){return this.__listeners__&&this.__listeners__[r]&&(i?(this._removeEventListener(r,i,t),this.__listeners__[r]=this.__listeners__[r].filter(([d,m])=>d!==i||JSON.stringify(m)!==JSON.stringify(t)),this.__listeners__[r].length===0&&delete this.__listeners__[r]):(this.__listeners__[r].forEach(([d,m])=>{this.removeEventListener(r,d,m)}),delete this.__listeners__[r])),this}}),window._$=e=>document.querySelector(e),window._$$=e=>document.querySelectorAll(e);let n=document.createElement("a"),a=(n.className="nav-icon dark-mode-btn",_$("#sub-nav").append(n),window.matchMedia("(prefers-color-scheme: dark)").matches);function s(e){var r=e==="true"||e==="auto"&&a;document.documentElement.setAttribute("data-theme",r?"dark":null),localStorage.setItem("dark_mode",e),n.id=`nav-${e==="true"?"moon":e==="false"?"sun":"circle-half-stroke"}-btn`,document.body.dispatchEvent(new CustomEvent((r?"dark":"light")+"-theme-set"))}s(localStorage.getItem("dark_mode")||document.documentElement.getAttribute("data-theme-mode")||"auto"),n.addEventListener("click",throttle(()=>{var e=["auto","false","true"];s(e[(e.indexOf(localStorage.getItem("dark_mode"))+1)%3])},1e3));let o=0;if(document.addEventListener("scroll",()=>{var e=document.documentElement.scrollTop||document.body.scrollTop,r=e-o;window.diffY=r,o=e,r<0?_$("#header-nav").classList.remove("header-nav-hidden"):_$("#header-nav").classList.add("header-nav-hidden")}),window.Pace&&Pace.on("done",()=>{Pace.sources[0].elements=[]}),window.materialTheme){let r=function(){var t;_$("#reimu-generated-theme-style")||((t=document.createElement("style")).id="reimu-generated-theme-style",t.textContent=`
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
    `,document.body.appendChild(t))};var l=r;let e=new materialTheme.ColorThemeExtractor({needTransition:!1});async function i(t){t=await e.generateThemeSchemeFromImage(t),document.documentElement.style.setProperty("--md-sys-color-primary-light",e.hexFromArgb(t.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",e.hexFromArgb(t.schemes.dark.props.primary)),_$("#reimu-generated-theme-style")||r()}window.generateSchemeHandler=()=>{var t;window.bannerElement?.src?window.bannerElement.complete?i(bannerElement):window.bannerElement.addEventListener("load",()=>{i(bannerElement)},{once:!0}):window.bannerElement?.style.background&&(t=window.bannerElement.style.background.match(/\d+/g),t=e.generateThemeScheme({r:parseInt(t[0]),g:parseInt(t[1]),b:parseInt(t[2])}),document.documentElement.style.setProperty("--md-sys-color-primary-light",e.hexFromArgb(t.schemes.light.props.primary)),document.documentElement.style.setProperty("--md-sys-color-primary-dark",e.hexFromArgb(t.schemes.dark.props.primary)),r())}}})();var safeImport=async(n,a)=>{if(!a)return import(n);var s=await(await fetch(n)).text(),o=await crypto.subtle.digest("SHA-384",new TextEncoder().encode(s));if("sha384-"+btoa(String.fromCharCode(...new Uint8Array(o)))!==a)throw new Error("Integrity check failed for "+n);return o=new Blob([s],{type:"application/javascript"}),a=URL.createObjectURL(o),n=await import(a),URL.revokeObjectURL(a),n};
