(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{644:(e,s,r)=>{Promise.resolve().then(r.bind(r,6506))},6266:(e,s,r)=>{"use strict";r.d(s,{GV:()=>c,jL:()=>l});var t=r(3391);let l=t.wA.withTypes(),c=t.d4.withTypes();t.Pj.withTypes()},6506:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o});var t=r(5155),l=r(2115),c=r(2734),a=r(560),n=r(6266),i=r(9389);r(2283);let u=(0,l.lazy)(()=>Promise.all([r.e(931),r.e(144)]).then(r.bind(r,8144))),o=()=>{let[e,s]=(0,l.useState)(!1),{questions:r,userQuizResult:o,userAnswers:d,correctAnswers:h}=(0,n.GV)(e=>e.statsReducer),{percentage:f,correctAnswersLength:x,total:y}=(0,a.A)();return(0,t.jsxs)("div",{className:"w-full h-full flex justify-center items-center relative overflow-hidden",children:[(0,t.jsxs)("div",{className:"absolute top-40 left-20 text-5xl bg-zinc-800 rounded-2xl p-1",children:[(0,t.jsx)("span",{children:x}),(0,t.jsx)("span",{children:"/"}),(0,t.jsx)("span",{children:y})]}),(0,t.jsxs)("div",{className:"grid grid-rows-3 place-items-center w-full h-full text-gray-500 ".concat(e?"hide":"show"),children:[(0,t.jsx)("h2",{className:"text-center text-4xl text-pink-500",children:"Your Score"}),(0,t.jsx)(i.A,{percentage:f,showReaction:!0}),(0,t.jsxs)("div",{className:"score-show-detail",onClick:()=>s(!0),children:[(0,t.jsx)(c.M12,{className:"score-show-detail__btn"}),(0,t.jsx)("p",{className:"score-show-detail__text",children:"Detail"})]})]}),e&&(0,t.jsx)(l.Suspense,{fallback:null,children:(0,t.jsx)(u,{correctAnswers:h,questions:r,userAnswers:d,userQuizResult:o,resultDetailDisplay:e,setResultDetailDisplay:s})})]})}},9389:(e,s,r)=>{"use strict";r.d(s,{A:()=>a});var t=r(5155),l=r(2115),c=r(9030);r(6688);let a=e=>{let{percentage:s,showReaction:r=!1,size:a=1,className:n}=e,i=(0,l.useRef)(null),u=(0,l.useRef)(null),o=375*a-375*a*s/100,d={red:"#ff2727",yellow:"#ffff38",blue:"#3333ff",green:"#008100"},h=()=>{switch(!0){case s<=25:return d.red;case s>25&&s<=50:return d.yellow;case s>50&&s<=75:return d.blue;case s>75:return d.green;default:throw Error("unexpected return")}};return(0,l.useEffect)(()=>{i.current.style.setProperty("--calc",o.toString()),i.current.style.setProperty("--mult",a.toString()),u.current.style.setProperty("--mult",a.toString()),u.current.style.width="".concat(200*a,"px"),u.current.style.height="".concat(200*a,"px")},[]),(0,t.jsxs)("div",{className:"flex justify-center items-center gap-3 flex-col ".concat(n),children:[(0,t.jsxs)("div",{className:"flex justify-center items-center relative rounded-full score__score-demo",ref:u,children:[(0,t.jsx)("div",{className:"score-demo__bg absolute w-full h-full rounded-full bg-pink-300"}),(0,t.jsx)("div",{className:"score-demo__score-bar absolute rounded-full",children:(0,t.jsx)("svg",{className:"score-bar__svg",children:(0,t.jsx)("circle",{style:{stroke:h()},cx:70*a,cy:70*a,r:60*a,className:"score-bar__bar",ref:i})})}),(0,t.jsx)(c.Ay,{className:"score-demo__score-precentage",delay:.3,end:s,suffix:"%",style:{color:h()}})]}),r?(0,t.jsxs)("div",{className:"score-bar-reaction",children:[":: ",(()=>{switch(h()){case d.red:return"Bad luck! Maybe try again?";case d.yellow:return"Well done! Want to try again?";case d.blue:return'Awesome! You "DO" know things!';case d.green:return"Perfect! You should give yourself a treat!";default:return"oops something went wrong"}})()," ::"]}):null]})}},560:(e,s,r)=>{"use strict";r.d(s,{A:()=>l});var t=r(6266);let l=()=>{let{userQuizResult:e}=(0,t.GV)(e=>e.statsReducer),{amount:s}=(0,t.GV)(e=>e.settingsReducer),r=e.filter(e=>e).length;return{percentage:Math.round(r/e.length*100),correctAnswersLength:r,total:s}}},2283:()=>{},6688:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[577,589,87,391,404,441,517,358],()=>s(644)),_N_E=e.O()}]);