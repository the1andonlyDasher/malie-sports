(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{121:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/impressum",function(){return i(34)}])},3492:function(e,t){"use strict";t.Z={src:"/_next/static/media/malie-Logo.cd166a37.svg",height:189,width:399,blurWidth:0,blurHeight:0}},6712:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(3079);let r={hidden:{clipPath:"circle(0% at 50% 50%)"},enter:{clipPath:"circle(100% at 50% 50%)",transition:{duration:.75,delay:.5,type:"tween",ease:"circOut"}},exit:{clipPath:"circle(0% at 50% 50%)",transition:{delay:1,duration:.5}}},s=e=>{let{children:t}=e;return(0,n.jsx)(a.E.div,{className:"bg__trans",variants:r,initial:"hidden",animate:"enter",exit:"exit",children:t})};t.Z=s},6345:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(3079);i(2659),i(9237);let r={open:{clipPath:"circle(100% at 50% 50%)",transition:{type:"tween",staggerChildren:.07,delayChildren:.2}},closed:{clipPath:"circle(0% at 50% 50%)",transition:{delay:.5,type:"tween",staggerChildren:.05,staggerDirection:-1}}},s=e=>{let{children:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.E.ul,{id:"nav-items-mobile",className:"nav-items-mobile",variants:r,children:t})})};t.Z=s},5568:function(e,t,i){"use strict";i.d(t,{L:function(){return o}});var n=i(5893),a=i(7294),r=i(3079),s=i(1664),l=i.n(s);let c={initial:{x:50,opacity:0},animate:{x:0,opacity:1},exit:{x:50,opacity:0}},o=e=>{let{href:t,name:i,clickLink:s}=e,[o,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{d(e=>!e&&(document.body.scrollTop>100||document.documentElement.scrollTop>100)||(!e||!(document.body.scrollTop<4)||!(document.documentElement.scrollTop<4))&&e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.E.li,{className:"navItem",variants:c,initial:"initial",animate:"animate",exit:"exit",transition:{type:"tween",duration:.75},children:(0,n.jsx)(l(),{"aria-label":i,scroll:!1,className:o?"nav-link black":"nav-link",href:"".concat(t),onClick:s,children:i})})})}},2659:function(e,t,i){"use strict";i.d(t,{L:function(){return c}});var n=i(5893);i(7294);var a=i(3079),r=i(1664),s=i.n(r);let l={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},c=e=>{let{href:t,name:i,toggle:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.E.li,{className:"nav-item",variants:l,children:(0,n.jsx)(s(),{scroll:!1,onClick:r,"aria-label":i,className:"nav-link black",href:"".concat(t),children:i})})})}},9237:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(4305),r=i(3079);let s=e=>{let{toggle:t,clickLink:i}=e,[s,l]=(0,a.n)(!0,!1);return(0,n.jsxs)("button",{onClick:t,id:"menu-toggle","aria-label":"mobile-menu-toggle","aria-controls":"nav-items-mobile","aria-expanded":"false",children:["Menu",(0,n.jsx)(r.E.div,{className:"bar",variants:{closed:{rotate:[45,0,0],top:["50%","50%","35%"]},open:{rotate:[0,0,45],top:["35%","50%","50%"]},transition:{type:"spring",stiffness:20,restDelta:2}}}),(0,n.jsx)(r.E.div,{className:"bar ",variants:{closed:{rotate:[-45,0,0],top:["50%","50%","65%"]},open:{rotate:[0,0,-45],top:["65%","50%","50%"]},transition:{type:"spring",stiffness:20,restDelta:2}}})]})};t.Z=s},1999:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(3079);i(5568);let r={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}},s=e=>{let{children:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.E.ul,{className:"nav-items-desktop",variants:r,children:t})})};t.Z=s},2095:function(e,t,i){"use strict";var n=i(5893),a=i(7294);i(1664);var r=i(5675),s=i.n(r),l=i(4305),c=i(3079),o=i(5568),d=i(1999),u=i(6345),h=i(2659),p=i(9237);let x=e=>{let{logo:t,alt:i,children:r}=e,x=(0,a.useRef)(),[m,v]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=()=>{v(e=>!e&&(document.body.scrollTop>100||document.documentElement.scrollTop>100)||(!e||!(document.body.scrollTop<4)||!(document.documentElement.scrollTop<4))&&e)};return e(),window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let[f,g]=(0,l.n)(!1,!0),y=["Home","Training","\xdcber mich","Kontakt"],j=["/","/#cards","/#about","/#contact"];return(0,n.jsx)(c.E.nav,{className:m?"navbar shrunk":"navbar",variants:{closed:{},open:{}},ref:x,initial:!1,animate:f?"open":"closed",children:(0,n.jsxs)("div",{className:"navbar__container","aria-haspopup":"menu",children:[(0,n.jsx)(c.E.a,{"aria-label":"Home","aria-current":"page",className:"navbar__logo active",href:"/",variants:{initial:{scale:0,opacity:0},enter:{scale:[0,1.2,1],opacity:1},exit:{scale:0,opacity:0}},initial:"hidden",animate:"enter",exit:"exit",children:(0,n.jsx)(s(),{src:t,alt:i})}),(0,n.jsx)(d.Z,{children:y.map((e,t)=>(0,n.jsx)(o.L,{name:e,href:j[t]},e))}),(0,n.jsx)(u.Z,{children:y.map((e,t)=>(0,n.jsx)(h.L,{toggle:()=>g(),name:e,href:j[t]},e))}),(0,n.jsx)(p.Z,{toggle:()=>g()})]})})};t.Z=x},4544:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(3079);let r={initial:{opacity:0},enter:{opacity:1,transition:{type:"spring",stiffness:100,duration:.5}},exit:{opacity:0,transition:{type:"spring",stiffness:100,duration:.5,delay:.5}}},s={initial:{transition:{staggerChildren:.2}},enter:{transition:{staggerChildren:.2,delayChildren:.35}},exit:{transition:{staggerChildren:.2,delayChildren:.5}}},l=e=>{let{footerText:t,children:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.E.footer,{variants:r,className:"footer",children:[(0,n.jsx)("h5",{children:t}),(0,n.jsx)(a.E.ul,{variants:s,className:"footer-links",children:i})]})})};t.Z=l},8259:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(1664),r=i.n(a),s=i(3079);let l=e=>{let{linkName:t,target:i}=e;return(0,n.jsx)(s.E.li,{children:(0,n.jsx)(r(),{scroll:!1,"aria-label":t,className:"btn__outline",href:"".concat(i),children:t})})};t.Z=l},3943:function(e,t,i){"use strict";var n=i(5893),a=i(7294),r=i(3079);let s={initial:{transition:{staggerChildren:.2}},enter:{transition:{staggerChildren:.2,delayChildren:.35}},exit:{transition:{staggerChildren:.2}}},l={initial:{opacity:0},enter:{opacity:1,transition:{ease:"easeIn",duration:.5,delay:.5}},exit:{opacity:0,transition:{ease:"easeOut",duration:.5}}},c=(0,a.forwardRef)(function(e,t){let i=(0,a.useRef)();return(0,n.jsx)(r.E.section,{"data-section-name":e.sectionName,initial:"initial",whileInView:"enter",viewport:{margin:"100px 0px 100px 0px"},exit:"exit",ref:t,id:e.id,variants:s,children:(0,n.jsxs)(r.E.div,{ref:i,variants:s,className:"__s__b",children:[e.header?(0,n.jsx)(r.E.h2,{variants:l,children:e.header}):null,e.text?(0,n.jsx)(r.E.p,{variants:l,children:e.text}):null,e.children]})})});t.Z=c},34:function(e,t,i){"use strict";i.r(t);var n=i(5893),a=i(3943);i(7294);var r=i(2095),s=i(6712),l=i(3079),c=i(4544),o=i(8259),d=i(3492);let u={initial:{opacity:0},enter:{opacity:1,transition:{type:"spring",stiffness:100,duration:.5,delay:1.25}},exit:{opacity:0,transition:{type:"spring",stiffness:100,duration:.5}}},h=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{logo:d.Z,alt:"Logo von Malie Sports"}),(0,n.jsx)(s.Z,{}),(0,n.jsx)(a.Z,{header:"Impressum",text:"",children:(0,n.jsxs)(l.E.div,{style:{width:"100%"},variants:u,children:[(0,n.jsx)(l.E.h3,{children:"Saskia Kristin Kracke"}),(0,n.jsx)(l.E.p,{children:"Adresse aus Datenschutzgr\xfcnden (Pirvate Adresse) unter der angegebenen E-Mail abrufbar"}),(0,n.jsx)(l.E.p,{children:"Kontakt:"}),(0,n.jsx)(l.E.p,{children:"E-Mail: saskia@malie-sports.de"}),(0,n.jsx)(l.E.p,{children:"Mobil: 0170 1824465"}),(0,n.jsx)(l.E.p,{children:"Inhaltlich verantwortlich gem\xe4\xdf \xa7 5 TMG"})]})}),(0,n.jsxs)(c.Z,{footerText:"Malie \xa9 2023",children:[(0,n.jsx)(o.Z,{linkName:"AGB",target:"/agb"}),(0,n.jsx)(o.Z,{linkName:"Datenschutz",target:"datenschutz"})]})]});t.default=h}},function(e){e.O(0,[881,774,888,179],function(){return e(e.s=121)}),_N_E=e.O()}]);