(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),i=(c(9),c(2)),l=(c(10),c(11),c(0)),o=function(e){var t=e.active,c=e.setActive,a=e.content;return Object(l.jsx)("div",{className:t?"Modal Modal--active":"Modal",onClick:function(){c(!1),window.location.reload()},children:Object(l.jsx)("div",{className:"Modal__content",children:a})})},u=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),u=r[0],j=r[1],p=Object(a.useState)(0),b=Object(i.a)(p,2),O=b[0],d=b[1],v=Object(a.useState)(!1),f=Object(i.a)(v,2),_=f[0],m=f[1],h=Object(a.useState)(-1),x=Object(i.a)(h,2),A=x[0],S=x[1],N=Object(a.useState)(!1),k=Object(i.a)(N,2),y=k[0],M=k[1],w=Object(a.useState)(""),C=Object(i.a)(w,2),g=C[0],E=C[1],I=Object(a.useState)(!1),J=Object(i.a)(I,2),Y=J[0],B=J[1],D=Object(a.useState)(-1),L=Object(i.a)(D,2),q=L[0],z=L[1],F=function(e){for(var t=[],c=0;c<e*e;c+=1)t.push(Object(l.jsx)("div",{className:"App__cell"}));return t},G=Object(a.useState)(F(10)),H=Object(i.a)(G,2),K=H[0],P=H[1],Q=function(){if(u){if(O>9||A>9)return E(O>9?"You win":"You lose"),M(!0),j(!1),d(0),S(0),void n(0);var e=F(10);if(Y)e[q]=Object(l.jsx)("div",{className:_?"App__cell App__cell--clicked":"App__cell App__cell--unclicked"}),B(!1);else{_||S(A+1),m(!1);var t=Math.floor(100*Math.random());z(t),e[t]=Object(l.jsx)("div",{className:"App__cell App__cell--active",onClick:R}),B(!0)}P(e)}},R=function(){d(O+1),m(!0)};return Object(a.useEffect)((function(){var e=setInterval(Q,c);return function(){clearInterval(e)}}),[u,K,_]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__board",children:K.map((function(e){return e}))}),Object(l.jsxs)("form",{className:"App__form",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("input",{type:"number",className:"App__input",placeholder:"Enter delay time in ms",value:0===c?"":c,onChange:function(e){return n(Number(e.target.value))}}),Object(l.jsx)("button",{type:"submit",className:"App__button",onClick:function(){j(!0)},children:"Start"})]}),u&&Object(l.jsxs)("div",{className:"App__scoreList",children:["playerScore:\xa0",O,Object(l.jsx)("br",{}),"computerScore:\xa0",A]}),Object(l.jsx)(o,{active:y,setActive:M,content:g,reset:Q})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.61b85047.chunk.js.map