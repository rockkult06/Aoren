(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6162:e=>{"use strict";e.exports=require("stream")},8617:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),t(6370),t(2516),t(6085);var n=t(1493),i=t(796),a=t(3777),o=t.n(a),l=t(4347),s={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>l[e]);t.d(r,s);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6370)),"D:\\aorenclone\\Aoren\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,2516)),"D:\\aorenclone\\Aoren\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,6085,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\aorenclone\\Aoren\\app\\page.tsx"],p="/page",x={require:t,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5831:(e,r,t)=>{Promise.resolve().then(t.bind(t,1306)),Promise.resolve().then(t.bind(t,8596)),Promise.resolve().then(t.bind(t,6853)),Promise.resolve().then(t.bind(t,1033)),Promise.resolve().then(t.bind(t,8508))},1306:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});var n=t(5414),i=t(6867);let a=()=>{let[e,r]=(0,i.useState)(0),t=(0,i.useRef)(null),a=["/1.mp4","/2.mp4","/3.mp4","/4.mp4"];return(0,i.useEffect)(()=>{let n=t.current;if(!n)return;let i=()=>{n.duration&&n.currentTime>=n.duration-2&&r((e+1)%a.length)},o=()=>{r((e+1)%a.length)},l=()=>{console.log(`Video y\xfckleniyor: ${a[e]}`)},s=()=>{console.log(`Video oynatılabilir: ${a[e]}`),n.play().catch(r=>{console.error(`Video oynatma hatası: ${a[e]}`,r)})},d=()=>{console.error(`Video y\xfckleme hatası: ${a[e]}`),r((e+1)%a.length)};return n.addEventListener("timeupdate",i),n.addEventListener("ended",o),n.addEventListener("loadstart",l),n.addEventListener("canplay",s),n.addEventListener("error",d),n.load(),()=>{n.removeEventListener("timeupdate",i),n.removeEventListener("ended",o),n.removeEventListener("loadstart",l),n.removeEventListener("canplay",s),n.removeEventListener("error",d)}},[e,a]),(0,n.jsxs)("div",{className:"fixed inset-0 w-full h-full overflow-hidden -z-10",children:[(0,n.jsxs)("video",{ref:t,className:"absolute inset-0 w-full h-full object-cover",autoPlay:!0,muted:!0,playsInline:!0,preload:"metadata",children:[n.jsx("source",{src:a[e],type:"video/mp4"}),"Tarayıcınız video elementini desteklemiyor."]},e),n.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"})]})}},1033:(e,r,t)=>{"use strict";t.d(r,{default:()=>d});var n=t(5414),i=t(8263),a=t(6867);let o=i.ZP.section`
position: relative;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
overflow: hidden;
background: transparent;
`,l=i.ZP.div`
display: flex;
gap: 40px;
z-index: 2;
margin-top: 80px;

@media (max-width: 1024px) {
  gap: 30px;
}

@media (max-width: 768px) {
  flex-direction: column;
  gap: 25px;
  margin-top: 60px;
  padding: 0 20px;
}
`,s=i.ZP.div`
background-color: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(10px);
padding: 45px 35px;
border-radius: 20px;
cursor: pointer;
transition: all 0.3s ease;
width: 380px;
min-height: 240px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

&:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
}

h2 {
  font-size: 1.1em;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

p {
  font-size: 1em;
  opacity: 0.9;
  color: white;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  width: 100%;
  padding: 35px 30px;
  min-height: auto;
  border-radius: 18px;
  
  &:hover {
    border-radius: 22px;
  }
}
`,d=()=>{let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{e.current&&(e.current.playbackRate=.75)},[]),n.jsx(o,{children:(0,n.jsxs)(l,{children:[(0,n.jsxs)(s,{children:[n.jsx("h2",{children:"T\xdcRKİYE'NİN \xd6NDE GELEN HUKUK B\xdcROLARINDAN BİRİ"}),n.jsx("p",{children:"T\xfcm ekibi g\xf6r\xfcn"})]}),(0,n.jsxs)(s,{children:[n.jsx("h2",{children:"M\xdcVEKKİLLERİMİZE T\xdcM OFİSLERİMİZDE HİZMET VERİYORUZ"}),n.jsx("p",{children:"Ofislerimizi g\xf6r\xfcn"})]}),(0,n.jsxs)(s,{children:[n.jsx("h2",{children:"T\xdcM HUKUKİ UZMANLIK ALANLARINDA HİZMET VERİYORUZ"}),n.jsx("p",{children:"Uzmanlık alanlarımızı g\xf6r\xfcn"})]})]})})}},8508:(e,r,t)=>{"use strict";t.d(r,{default:()=>x});var n=t(5414),i=t(8263);let a=i.ZP.div`
  padding: 120px 40px 80px 40px;
  background: rgba(249, 249, 249, 0.9);
  backdrop-filter: blur(2px);
  color: #333;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`,o=i.ZP.h2`
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 50px;
  color: #222;
  font-weight: 600;
`,l=i.ZP.section`
  max-width: 900px;
  margin: 0 auto 80px auto;
  text-align: center;

  p {
    font-size: 1.15em;
    line-height: 1.8;
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`,s=i.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`,d=i.ZP.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 20px;
  }

  .card-date {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
    line-height: 1.4;
    color: #333;
  }

  .read-more {
    color: #007bff;
    font-size: 0.9em;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,c=i.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto 80px auto;
`,p=i.ZP.div`
  text-align: center;
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 15px auto;
    background-color: #ddd;
    background-image: url('/placeholder.svg?height=150&width=150');
    background-size: cover;
    background-position: center;
  }
  
  h4 {
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #333;
  }
  
  p {
    font-size: 0.9em;
    color: #666;
    margin: 0;
  }
`,x=()=>(0,n.jsxs)(a,{children:[(0,n.jsxs)(l,{children:[n.jsx("p",{children:"AOREN, T\xfcrkiye'nin \xf6nde gelen hukuk b\xfcrolarından biri olarak 220'den fazla \xe7alışanı ile hizmet vermektedir."}),n.jsx("button",{children:"Daha fazla bilgi"})]}),n.jsx(o,{children:"Her zaman yetenekli \xe7alışanlar arıyoruz:"}),n.jsx(c,{children:[{name:"Av. Mehmet Aoren",title:"Kurucu Ortak"},{name:"Av. Ayşe Kaya",title:"Ortak"},{name:"Av. Can Demir",title:"Kıdemli Avukat"},{name:"Av. Zeynep \xd6z",title:"Avukat"},{name:"Av. Ali Yılmaz",title:"Avukat"},{name:"Av. Fatma Şen",title:"Avukat"}].map((e,r)=>(0,n.jsxs)(p,{children:[n.jsx("div",{className:"profile-image"}),n.jsx("h4",{children:e.name}),n.jsx("p",{children:e.title})]},r))}),n.jsx(o,{children:"AOREN'den son haberler"}),n.jsx(s,{children:[{id:1,date:"10.12.2024",title:"Ticaret Hukukunda Yeni D\xfczenlemeler",image:"/placeholder.svg?height=200&width=300"},{id:2,date:"08.12.2024",title:"Aile Hukukunda G\xfcncel Gelişmeler",image:"/placeholder.svg?height=200&width=300"},{id:3,date:"05.12.2024",title:"İş Hukuku Uygulamaları",image:"/placeholder.svg?height=200&width=300"},{id:4,date:"02.12.2024",title:"Ceza Hukukunda Yenilikler",image:"/placeholder.svg?height=200&width=300"}].map(e=>(0,n.jsxs)(d,{children:[n.jsx("img",{src:e.image||"/placeholder.svg",alt:e.title}),(0,n.jsxs)("div",{className:"card-content",children:[n.jsx("div",{className:"card-date",children:e.date}),n.jsx("h3",{children:e.title}),n.jsx("a",{href:"#",className:"read-more",children:"→ Devamını oku"})]})]},e.id))}),n.jsx(o,{children:"Yaklaşan seminerler"}),(0,n.jsxs)(s,{children:[(0,n.jsxs)(d,{children:[n.jsx("img",{src:"/placeholder.svg?height=200&width=300",alt:"Seminer"}),(0,n.jsxs)("div",{className:"card-content",children:[n.jsx("div",{className:"card-date",children:"15.12.2024"}),n.jsx("h3",{children:"Ticaret Hukuku Semineri"}),n.jsx("a",{href:"#",className:"read-more",children:"→ Detaylar"})]})]}),(0,n.jsxs)(d,{children:[n.jsx("img",{src:"/placeholder.svg?height=200&width=300",alt:"Seminer"}),(0,n.jsxs)("div",{className:"card-content",children:[n.jsx("div",{className:"card-date",children:"20.12.2024"}),n.jsx("h3",{children:"İş Hukuku Workshop'u"}),n.jsx("a",{href:"#",className:"read-more",children:"→ Detaylar"})]})]})]})]})},6370:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var n=t(393),i=t(1363),a=t.n(i),o=t(5805);let l=(0,o.createProxy)(String.raw`D:\aorenclone\Aoren\components\header.tsx#default`),s=(0,o.createProxy)(String.raw`D:\aorenclone\Aoren\components\HeroSection.tsx#default`),d=(0,o.createProxy)(String.raw`D:\aorenclone\Aoren\components\MainContent.tsx#default`),c=(0,o.createProxy)(String.raw`D:\aorenclone\Aoren\components\Footer.tsx#default`),p=(0,o.createProxy)(String.raw`D:\aorenclone\Aoren\components\BackgroundVideo.tsx#default`);function x(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[n.jsx("title",{children:"Aoren - T\xfcrkiye'nin \xd6nde Gelen Hukuk B\xfcrosu"}),n.jsx("meta",{name:"description",content:"Aoren Hukuk B\xfcrosu"}),n.jsx("link",{rel:"icon",href:"/favicon.ico"}),n.jsx("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})]}),n.jsx(p,{}),n.jsx(l,{}),n.jsx(s,{}),n.jsx(d,{}),n.jsx(c,{})]})}},1363:(e,r)=>{"use strict";function t(){return null}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}}),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[566,367,667],()=>t(8617));module.exports=n})();