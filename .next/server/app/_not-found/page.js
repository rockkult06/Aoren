(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},693:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>u}),r(8713),r(6085),r(2516);var n=r(1493),o=r(796),a=r(3777),i=r.n(a),s=r(4347),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,6085,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2516)),"D:\\aorenclone\\Aoren\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6085,23)),"next/dist/client/components/not-found-error"]}],d=[],c="/_not-found/page",f={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3267:(e,t,r)=>{Promise.resolve().then(r.bind(r,4077)),Promise.resolve().then(r.bind(r,7050))},8816:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7885,23)),Promise.resolve().then(r.t.bind(r,9629,23)),Promise.resolve().then(r.t.bind(r,5471,23)),Promise.resolve().then(r.t.bind(r,6462,23)),Promise.resolve().then(r.t.bind(r,4253,23)),Promise.resolve().then(r.t.bind(r,3891,23))},4077:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5414),o=r(6867),a=r(9313),i=r(8263);function s({children:e}){let[t]=(0,o.useState)(()=>new i.qH);return(0,a.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),n.jsx(n.Fragment,{children:e})}),n.jsx(i.LC,{sheet:t.instance,children:e})}},7050:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var n=r(8263);let o=(0,n.vJ)`
  :root {
    --primary-color: #007bff;
    --text-color: #333;
    --background-light: #f9f9f9;
    --header-bg: rgba(0, 0, 0, 0.4);
    --box-bg: rgba(255, 255, 255, 0.2);
    --font-manrope: var(--font-manrope), sans-serif; /* Manrope font variable */
    --font-lora: var(--font-lora), serif; /* Lora font variable */
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-manrope); /* Default to Manrope */
    line-height: 1.6;
    font-size: 16px;
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-manrope); /* Manrope for headings */
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #222;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
  }

  /* Material Icons */
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    transition: color 0.3s ease;
  }

  /* Smooth transitions for all elements */
  * {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
  }
`},2516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>u});var n=r(393),o=r(9097),a=r.n(o),i=r(5805);let s=(0,i.createProxy)(String.raw`D:\aorenclone\Aoren\lib\styled-components-registry.tsx#default`),l=(0,i.createProxy)(String.raw`D:\aorenclone\Aoren\styles\globals.tsx#default`);r(8857);let u={title:"Aoren - T\xfcrkiye'nin \xd6nde Gelen Hukuk B\xfcrosu",description:"Aoren Hukuk B\xfcrosu - Hukuki danışmanlık, arabuluculuk ve yasal destek hizmetleri",generator:"v0.dev"};function d({children:e}){return n.jsx("html",{lang:"tr",className:`${a().variable}`,children:n.jsx("body",{className:`${a().className} antialiased`,children:(0,n.jsxs)(s,{children:[n.jsx(l,{}),e]})})})}},5175:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8713:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return o},default:function(){return a}});let n=r(5175),o="next/dist/client/components/parallel-route-default.js";function a(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8857:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[566],()=>r(693));module.exports=n})();