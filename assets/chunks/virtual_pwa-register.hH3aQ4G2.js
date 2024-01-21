import{Y as E}from"./framework.xodzkkLE.js";function f(g={}){const{immediate:u=!1,onNeedRefresh:r,onOfflineReady:i,onRegistered:o,onRegisteredSW:c,onRegisterError:n}=g;let e,d,a;const w=async(p=!0)=>{await d,await(a==null?void 0:a())};async function m(){if("serviceWorker"in navigator){const{Workbox:p}=await E(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));e=new p("/zig-course/sw.js",{scope:"/zig-course/",type:"classic"}),a=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let t=!1;const l=()=>{t=!0,e==null||e.addEventListener("controlling",s=>{s.isUpdate&&window.location.reload()}),r==null||r()};e.addEventListener("installed",s=>{typeof s.isUpdate>"u"?typeof s.isExternal<"u"?s.isExternal?l():!t&&(i==null||i()):s.isExternal?window.location.reload():!t&&(i==null||i()):s.isUpdate||i==null||i()}),e.addEventListener("waiting",l),e.addEventListener("externalwaiting",l)}e.register({immediate:u}).then(t=>{c?c("/zig-course/sw.js",t):o==null||o(t)}).catch(t=>{n==null||n(t)})}}return d=m(),w}export{f as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
