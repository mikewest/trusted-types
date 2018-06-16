(function(){'use strict';class d{constructor(a,b,c,e){this.K=a;this.I=b;this.C=c;this.w=e}static N(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map((a)=>a.split(b)).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map((a)=>a).sort());return a},{})}static D(a){a=d.N(a);const b="trusted-types"in a;return new d(!0,b,null,b?a["trusted-types"]:["*"])}};const {apply:n}=Reflect,{hasOwnProperty:t}=Object.prototype,v=function(){function a(a){let b=w.get(a);void 0===b&&(b=h(null),w.set(a,b));return b}function b(a){const b=C(a);if(null==b||C(b)!==K)throw Error();for(let c of L(b))x(a,c,{value:a[c]});return a}function c(a,b){l(a.prototype);delete a.name;x(a,"name",{value:b})}function e(a){return(b)=>b instanceof a&&w.has(b)}function f(a,b){return function(a,c){a=k(a);if(!a||!n(t,a,[b]))throw Error("Policy not found");return(0,a[b])(c)}}function g(b,c){function e(e,
f){const J=c[f],g=l(new e(D,b));return l({[f](b){const c=l(h(g));a(c).value=""+J(b);return c}}[f])}return l({createHTML:e(p,"createHTML"),createScriptURL:e(q,"createScriptURL"),createURL:e(r,"createURL")})}function k(a){return E.get(""+a)||null}const {assign:m,create:h,defineProperty:x,freeze:l,getOwnPropertyNames:L,getPrototypeOf:C,prototype:K}=Object,{forEach:M,push:N}=Array.prototype,D=Symbol(),w=b(new WeakMap),y=b([]),E=b(new Map),z=b([]);let A=!1;class u{constructor(a,b){if(a!==D)throw Error("cannot call the constructor");
x(this,"policyName",{value:""+b,enumerable:!0})}toString(){return a(this).value}valueOf(){return a(this).value}}class r extends u{}c(r,"TrustedURL");class q extends u{}c(q,"TrustedScriptURL");class p extends u{}c(p,"TrustedHTML");c(u,"TrustedType");const O={createHTML:()=>{throw Error("undefined conversion");},createURL:()=>{throw Error("undefined conversion");},createScriptURL:()=>{throw Error("undefined conversion");},expose:!1};return l({b:p,a:r,c:q,m:f(p,"createHTML"),s:f(r,"createURL"),o:f(q,
"createScriptURL"),A:function(a,b){a=""+a;if(A&&!z.includes(a))throw Error("Policy "+a+" disallowed.");if(y.includes(a))throw Error("Policy "+a+" exists.");y.push(a);const c=m(h(null),O);b(c);l(c);b=g(a,c);c.expose&&E.set(a,b);return b},F:k,v:function(){return y.slice()},J:e(p),M:e(r),L:e(q),O:function(a){a.includes("*")?A=!1:(A=!0,z.length=0,M.call(a,(a)=>{N.call(z,""+a)}))}})}();function B(a,b,c){Object.defineProperty(a,b,{set:c})}function F(a,b,c){Object.defineProperty(a,b,{value:c})};const {apply:G}=Reflect,{getOwnPropertyNames:H,hasOwnProperty:I}=Object,P={HTMLAnchorElement:{href:v.a},HTMLAreaElement:{href:v.a},HTMLBaseElement:{href:v.a},HTMLButtonElement:{formaction:v.a},HTMLSourceElement:{src:v.a},HTMLImageElement:{src:v.a},HTMLTrackElement:{src:v.a},HTMLMediaElement:{src:v.a},HTMLInputElement:{src:v.a,formaction:v.a},HTMLFrameElement:{src:v.a},HTMLIFrameElement:{src:v.a,srcdoc:v.b},HTMLLinkElement:{href:v.c},HTMLObjectElement:{data:v.c,codebase:v.c},HTMLEmbedElement:{src:v.c},
HTMLScriptElement:{src:v.c}},Q={TrustedHTML:v.J,TrustedURL:v.M,TrustedScriptURL:v.L},R={TrustedHTML:v.m,TrustedURL:v.s,TrustedScriptURL:v.o},S={codebase:"codeBase",formaction:"formAction"};
class T{constructor(a){this.g=a;this.i={}}G(){v.O(this.g.w);this.l(Element.prototype,"innerHTML",v.b);this.l(Element.prototype,"outerHTML",v.b);this.f(Range.prototype,"createContextualFragment",v.b,0);this.f(Element.prototype,"insertAdjacentHTML",v.b,1);Object.getOwnPropertyDescriptor(Document.prototype,"write")?this.f(Document.prototype,"write",v.b,0):this.f(HTMLDocument.prototype,"write",v.b,0);this.f(window,"open",v.a,0);DOMParser&&this.f(DOMParser.prototype,"parseFromString",v.b,0);this.S();this.H()}H(){for(let a of H(P))for(let b of H(P[a])){const c=
G(I,S,[b])?S[b]:b;this.l(window[a].prototype,c,P[a][b])}}S(){let a=this;this.j(Element.prototype,"setAttribute",function(b,...c){return a.R.bind(a,this,b).apply(a,c)});this.j(Element.prototype,"setAttributeNS",function(b,...c){return a.P.bind(a,this,b).apply(a,c)})}R(a,b,...c){if(null!==a.constructor){var e=(c[0]=String(c[0])).toLowerCase();e=a.constructor&&a.constructor.name&&P[a.constructor.name]&&P[a.constructor.name][e];if(e instanceof Function)return this.h(a,"setAttribute",e,b,1,c)}return b.apply(a,
c)}P(a,b,...c){if(null!==a.constructor){c[0]=String(c[0]);var e=(c[1]=String(c[1])).toLowerCase();e=a.constructor&&a.constructor.name&&P[a.constructor.name]&&P[a.constructor.name][e];if(e instanceof Function)return this.h(a,"setAttributeNS",e,b,2,c)}return b.apply(a,c)}f(a,b,c,e){let f=this;this.j(a,b,function(a,...k){return f.h.call(f,this,b,c,a,e,k)})}j(a,b,c){var e=Object.getOwnPropertyDescriptor(a,b);let f=e?e.value:null;if(!(f instanceof Function))throw new TypeError("Property "+b+" on object"+
a+" is not a function");e=this.u(a,b);if(this.i[e])throw Error("TrustedTypesEnforcer: Double installation detected");F(a,b,function(...a){return c.bind(this,f).apply(this,a)});this.i[e]=f}l(a,b,c){let e=Object.getOwnPropertyDescriptor(a,b).set,f=this.u(a,b);if(this.i[f])throw Error("TrustedTypesEnforcer: Double installation detected");let g=this;B(a,b,function(a){g.h.call(g,this,b,c,e,0,[a])});this.i[f]=e}u(a,b){return""+a.constructor.name+"-"+b}h(a,b,c,e,f,g){let k=g[f];const m=""+c.name;if(Q.hasOwnProperty(m)&&
Q[m](k))return G(e,a,g);var h=this.g.C;if(h&&v.v().includes(h)&&(h=R[m](h,k),Q.hasOwnProperty(m)&&Q[m](h)))return g[f]=h,G(e,a,g);e="Failed to set "+b+" property on "+(""+a||a.constructor.name)+": This document requires `"+c.name+"` assignment.";this.g.K&&console.warn(e,b,a,c,k);if(this.g.I)throw new TypeError(e);}};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:v.b,TrustedURL:v.a,TrustedScriptURL:v.c,createHTML:v.m,createURL:v.s,createScriptURL:v.o,createPolicy:v.A,getExposedPolicy:v.F,getPolicyNames:v.v});{const a=function(){try{var c;if(!(c=document.currentScript)){{let a=document.getElementsByTagName("script");c=a[a.length-1]}}if(c&&"Content-Security-Policy:"==c.textContent.trim().substr(0,24))return c.textContent.trim().slice(24);if(c.dataset.B)return c.dataset.B;const a=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(a)return a.content.trim()}catch(e){}return null}(),b=a?d.D(a):new d(!0,!0,null,["*"]);(new T(b)).G()};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map
