if("serviceWorker"in navigator&&window.swPath){function emitUpdate(){_$(".notification-wrapper").classList.add("show")}_$("#notification-update-btn").onclick=()=>{try{navigator.serviceWorker.getRegistration().then((e=>{e.waiting.postMessage("skipWaiting")}))}catch(e){window.location.reload()}},_$("#notification-close-btn").onclick=()=>{_$(".notification-wrapper").classList.remove("show")},navigator.serviceWorker.register(swPath).then((e=>{console.log("Service Worker 注册成功: ",e),e.waiting?emitUpdate():e.onupdatefound=()=>{console.log("Service Worker 更新中...");const o=e.installing;o.onstatechange=()=>{"installed"===o.state&&navigator.serviceWorker.controller&&emitUpdate()}}})).catch((e=>{console.log("Service Worker 注册失败: ",e)}));let e=!1;navigator.serviceWorker.addEventListener("controllerchange",(()=>{e||(e=!0,window.location.reload())}))}