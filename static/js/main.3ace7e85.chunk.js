(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(2)),u=(c(10),c(11),c(0)),o=function(t){var e=t.active,c=t.setActive,n=t.content;return Object(u.jsx)("div",{className:e?"Modal Modal--active":"Modal",onClick:function(){return c(!1)},children:Object(u.jsx)("div",{className:"Modal__content",children:n})})},j=function(){var t=Object(n.useState)(0),e=Object(i.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)(!1),s=Object(i.a)(r,2),j=s[0],l=s[1],b=Object(n.useState)(0),p=Object(i.a)(b,2),O=p[0],d=p[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),m=f[0],h=f[1],_=Object(n.useState)(-1),x=Object(i.a)(_,2),S=x[0],N=x[1],A=Object(n.useState)(!1),k=Object(i.a)(A,2),y=k[0],M=k[1],C=Object(n.useState)(""),g=Object(i.a)(C,2),w=g[0],E=g[1],I=function(t){for(var e=[],c=0;c<t*t;c+=1)e.push(Object(u.jsx)("div",{className:"App__cell"}));return e},J=Object(n.useState)(I(10)),Y=Object(i.a)(J,2),B=Y[0],D=Y[1],L=function(){if(j){if(O>9||S>9)return E(O>9?"You win":"You lose"),M(!0),l(!1),d(0),N(0),void a(0);m||N(S+1),h(!1);var t=I(10);t[Math.floor(100*Math.random())]=Object(u.jsx)("div",{className:"App__cell--active",onClick:q}),D(t)}},q=function(){d(O+1),h(!0)};return Object(n.useEffect)((function(){var t=setInterval(L,c);return function(){clearInterval(t)}}),[j,B,m,O]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"App__board",children:B.map((function(t){return t}))}),Object(u.jsxs)("form",{className:"App__input",onSubmit:function(t){return t.preventDefault()},children:[Object(u.jsx)("input",{type:"number",className:"App__input",placeholder:"Enter delay time in ms",value:0===c?"":c,onChange:function(t){return a(Number(t.target.value))}}),Object(u.jsx)("button",{type:"submit",className:"App__button",onClick:function(){l(!0)},children:"Start"})]}),j&&Object(u.jsxs)("div",{className:"App__scoreList",children:["playerScore:",O,Object(u.jsx)("br",{}),"computerScore:",S]}),Object(u.jsx)(o,{active:y,setActive:M,content:w})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.3ace7e85.chunk.js.map