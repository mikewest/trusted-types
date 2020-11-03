(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';const aa="onabort onactivate onactivateinvisible onafterprint onafterupdate onanimationcancel onanimationend onanimationiteration onanimationstart onariarequest onauxclick onbeforeactivate onbeforecopy onbeforecut onbeforedeactivate onbeforeeditfocus onbeforepaste onbeforeprint onbeforeunload onbegin onblur onbounce oncancel oncanplay oncanplaythrough oncellchange onchange onclick onclose oncommand oncontextmenu oncontrolselect oncopy oncuechange oncut ondataavailable ondatasetchanged ondatasetcomplete ondblclick ondeactivate ondrag ondragdrop ondragend ondragenter ondragexit ondragleave ondragover ondragstart ondrop ondurationchange onemptied onend onended onerror onerrorupdate onexit onfilterchange onfinish onfocus onfocusin onfocusout onformdata onfullscreenchange onfullscreenerror ongotpointercapture onhelp oninput oninvalid onkeydown onkeypress onkeyup onlayoutcomplete onload onloadeddata onloadedmetadata onloadend onloadstart onlosecapture onlostpointercapture onmediacomplete onmediaerror onmessage onmousedown onmouseenter onmouseleave onmousemove onmouseout onmouseover onmouseup onmousewheel onmove onmoveend onmovestart onmozfullscreenchange onmozfullscreenerror onmscontentzoom onmsgesturechange onmsgesturedoubletap onmsgestureend onmsgesturehold onmsgesturestart onmsgesturetap onmsgotpointercapture onmsinertiastart onmslostpointercapture onmsmanipulationstatechanged onmspointercancel onmspointerdown onmspointerenter onmspointerleave onmspointermove onmspointerout onmspointerover onmspointerup onoffline ononline onoutofsync onoverscroll onpaste onpause onplay onplaying onpointercancel onpointerdown onpointerenter onpointerleave onpointermove onpointerout onpointerover onpointerrawupdate onpointerup onprogress onpropertychange onratechange onreadystatechange onrepeat onreset onresize onresizeend onresizestart onresume onreverse onrowdelete onrowenter onrowexit onrowinserted onscroll onscrollend onsearch onseek onseeked onseeking onselect onselectionchange onselectstart onshow onstalled onstart onstop onstorage onsubmit onsuspend onsynchrestored ontimeerror ontimeupdate ontoggle ontrackchange ontransitioncancel ontransitionend ontransitionrun ontransitionstart onunload onurlflip onvolumechange onwaiting onwebkitanimationend onwebkitanimationiteration onwebkitanimationstart onwebkitfullscreenchange onwebkitfullscreenerror onwebkittransitionend onwheel".split(" ");
function ba(){if("undefined"!==typeof window){const a=[];for(const b in HTMLElement.prototype)"on"===b.slice(0,2)&&a.push(b);return a}return aa};const ca="undefined"!==typeof window,da=()=>{throw new TypeError("undefined conversion");},ka=()=>null,{toLowerCase:la,toUpperCase:ma}=String.prototype;function na(){throw new TypeError("Illegal constructor");}function h(){throw new TypeError("Illegal constructor");}
const {G:r,F:oa}=function(){function a(e){let g=S.get(e);void 0===g&&(g=m(null),S.set(e,g));return g}function b(e){const g=ea(e);if(null==g||ea(g)!==fa)throw Error();for(const p of T(g))u(e,p,{value:e[p]});return e}function c(e,g){v(e.prototype);delete e.name;u(e,"name",{value:g})}function d(e){return g=>g instanceof e&&S.has(g)}function f(e,g){function p(z,U){const ya=g[U]||("default"==e?ka:da),za=v(new z(K,e));return v({[U](w,...L){w=ya(""+w,...L);if(void 0===w||null===w){if("default"==e)return w;
w=""}w=""+w;L=v(m(za));a(L).v=w;return L}}[U])}const l=m(na.prototype);for(const z of T(M))l[z]=p(M[z],z);u(l,"name",{value:e,writable:!1,configurable:!1,enumerable:!0});return v(l)}function k(e,g,p,l="",z=""){e=ma.apply(String(e));(l=z?z:l)||(l="http://www.w3.org/1999/xhtml");if(l=F.apply(t,[l])?t[l]:null){if(F.apply(l,[e])&&l[e]&&F.apply(l[e][g],[p])&&l[e][g][p])return l[e][g][p];if(F.apply(l,["*"])&&F.apply(l["*"][g],[p])&&l["*"][g][p])return l["*"][g][p]}}function n(){return G}const {assign:q,
create:m,defineProperty:u,freeze:v,getOwnPropertyNames:T,getPrototypeOf:ea,prototype:fa}=Object,{hasOwnProperty:F}=fa,{forEach:Aa,push:Ba}=Array.prototype,K=Symbol(),S=b(new WeakMap),H=b([]),N=b([]);let ha=!0,G=null,O=!1;class P{constructor(e,g){if(e!==K)throw Error("cannot call the constructor");u(this,"policyName",{value:g,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class A extends P{}c(A,"TrustedScriptURL");class B extends P{}c(B,"TrustedHTML");class x extends P{}c(x,
"TrustedScript");c(P,"TrustedType");const ia=v(m(new B(K,"")));a(ia).v="";const ja=v(m(new x(K,"")));a(ja).v="";const t={["http://www.w3.org/1999/xhtml"]:{EMBED:{attributes:{src:A.name}},IFRAME:{attributes:{srcdoc:B.name}},OBJECT:{attributes:{data:A.name,codebase:A.name}},SCRIPT:{attributes:{src:A.name,text:x.name},properties:{innerText:x.name,textContent:x.name,text:x.name}},"*":{attributes:{},properties:{innerHTML:B.name,outerHTML:B.name}}},["http://www.w3.org/2000/svg"]:{"*":{attributes:{},properties:{}}}};
var E={codebase:"codeBase",formaction:"formAction"};!ca||"srcdoc"in HTMLIFrameElement.prototype||delete t["http://www.w3.org/1999/xhtml"].IFRAME.attributes.srcdoc;for(const e of Object.keys(t["http://www.w3.org/1999/xhtml"])){t["http://www.w3.org/1999/xhtml"][e].properties||(t["http://www.w3.org/1999/xhtml"][e].properties={});for(const g of Object.keys(t["http://www.w3.org/1999/xhtml"][e].attributes))t["http://www.w3.org/1999/xhtml"][e].properties[E[g]?E[g]:g]=t["http://www.w3.org/1999/xhtml"][e].attributes[g]}for(const e of ba())t["http://www.w3.org/1999/xhtml"]["*"].attributes[e]=
"TrustedScript",t["http://www.w3.org/2000/svg"]["*"].attributes[e]="TrustedScript";const M={createHTML:B,createScriptURL:A,createScript:x},Ca=M.hasOwnProperty;E=m(h.prototype);q(E,{createPolicy:function(e,g){if(!e.match(/^[-#a-zA-Z0-9=_/@.%]+$/g))throw new TypeError("Policy "+e+" contains invalid characters.");if(O&&-1===N.indexOf(e)&&-1===N.indexOf("*"))throw new TypeError("Policy "+e+" disallowed.");if("default"===e&&G)throw new TypeError("Policy "+e+" already exists.");if(O&&!ha&&-1!==H.indexOf(e))throw new TypeError("Policy "+
e+" exists.");H.push(e);const p=m(null);if(g&&"object"===typeof g)for(const l of T(g))Ca.call(M,l)&&(p[l]=g[l]);else console.warn("trustedTypes.createPolicy "+e+" was given an empty policy");v(p);g=f(e,p);"default"===e&&(G=g);return g},m:d(B),o:d(A),i:d(x),j:function(e,g,p="",l=""){g=la.apply(String(g));return k(e,"attributes",g,p,l)||null},w:function(e,g,p=""){return k(e,"properties",String(g),p)||null},l:function(e=""){if(!e)try{e=document.documentElement.namespaceURI}catch(g){e="http://www.w3.org/1999/xhtml"}return(e=
t[e])?JSON.parse(JSON.stringify(e)):{}},s:ia,u:ja,J:G,TrustedHTML:B,TrustedScriptURL:A,TrustedScript:x});u(E,"defaultPolicy",{get:n,set:()=>{}});return{G:v(E),F:function(e,g){O=!0;N.length=0;Aa.call(e,p=>{Ba.call(N,""+p)});ha=g;H.length=0},I:function(){O=!1},K:n,L:function(){G=null;H.splice(H.indexOf("default"),1)}}}();function pa(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map(c=>c.split(b)).reduce(function(c,d){d[0]&&(c[d[0]]=d.slice(1).map(f=>f).sort());return c},{})}
function qa(a){const b=pa(a),c="require-trusted-types-for"in b&&b["require-trusted-types-for"].includes("'script'");let d=["*"],f=!0;"trusted-types"in b&&(d=b["trusted-types"].filter(k=>"'"!==k.charAt(0)),f=b["trusted-types"].includes("'allow-duplicates'"),1==b["trusted-types"].length&&"'none'"==b["trusted-types"][0]&&(d=[]));return new ra(!0,c,d,f,a)}class ra{constructor(a,b,c,d,f=null,k=null){this.a=a;this.b=b;this.f=c;this.c=d;this.g=f;this.h=k}};const {defineProperty:y}=Object;function sa(a,b,c){y(a,b,{value:c})};const {apply:C}=Reflect,{getOwnPropertyNames:ta,getOwnPropertyDescriptor:D,getPrototypeOf:ua}=Object,{hasOwnProperty:I}=Object.prototype,{slice:va}=String.prototype;let wa;const J=r.l("http://www.w3.org/1999/xhtml"),Q={TrustedHTML:r.TrustedHTML,TrustedScript:r.TrustedScript,TrustedScriptURL:r.TrustedScriptURL};for(const a of Object.keys(J)){const b=J[a].properties;for(const [c,d]of Object.entries(b))b[c]=Q[d]}
const R={TrustedHTML:r.m,TrustedScriptURL:r.o,TrustedScript:r.i},xa={TrustedHTML:"createHTML",TrustedScriptURL:"createScriptURL",TrustedScript:"createScript"};function V(a,b,c){return b instanceof a.a[c]}
function Da(a,b,c,d){if(a.a.Node){var f=b,k,n,q=ua(a.a.Node.prototype);do(n=(k=D(f,c))?k.set:null)||(f=ua(f)||q);while(!n&&f!==q&&f);if(n instanceof Function){q=W(b,c);if(a.c[q])throw Error(`TrustedTypesEnforcer: Double installation detected: ${q} ${c}`);var m=function(u){a.f.call(a,this,c,d,n,0,[u])};f===b?y(b,c,{set:m}):y(b,c,{set:m,get:k.get,configurable:!0});a.c[q]=n}else a.b.a&&console.warn("No setter for property "+c+" on object"+b)}}
function X(a,b,c,d,f){b&&Y(a,b,c,function(k,...n){return a.f.call(a,this,c,d,k,f,n)})}function Ea(a){a.a.Element&&(Y(a,a.a.Element.prototype,"setAttribute",function(b,...c){return a.D.bind(a,this,b).apply(a,c)}),Y(a,a.a.Element.prototype,"setAttributeNS",function(b,...c){return a.C.bind(a,this,b).apply(a,c)}))}
function Fa(a){["appendChild","insertBefore","replaceChild"].forEach(b=>{a.a.Node&&Y(a,a.a.Node.prototype,b,function(c,...d){return a.h.bind(a,this,!1,c).apply(a,d)})});Y(a,a.A,"insertAdjacentText",function(b,...c){return a.B.bind(a,this,b).apply(a,c)});a.a.Element&&"after"in a.a.Element.prototype&&(["after","before","replaceWith"].forEach(b=>{Y(a,a.a.Element.prototype,b,function(c,...d){return a.h.bind(a,this,!0,c).apply(a,d)})}),["append","prepend"].forEach(b=>{Y(a,a.a.Element.prototype,b,function(c,
...d){return a.h.bind(a,this,!1,c).apply(a,d)})}))}function Ga(a){for(const b of ta(J))for(const c of ta(J[b].properties)){const d="*"==b?"HTMLElement":a.a.document?a.g(a.a.document.createElement(b).constructor):null;null!=d&&a.a[d]&&Da(a,a.a[d].prototype,c,J[b].properties[c])}}
function Ha(a){oa(a.b.f,a.b.c);if(a.b.b||a.b.a)"ShadowRoot"in a.a&&Da(a,a.a.ShadowRoot.prototype,"innerHTML",r.TrustedHTML),wa=function(b){return b&&b.createRange?0==b.createRange().createContextualFragment({toString:()=>"<div></div>"}).childNodes.length:!1}(a.a.document),a.a.Range&&X(a,a.a.Range.prototype,"createContextualFragment",r.TrustedHTML,0),X(a,a.A,"insertAdjacentHTML",r.TrustedHTML,1),a.a.Document&&D(a.a.Document.prototype,"write")?X(a,a.a.Document.prototype,"write",r.TrustedHTML,0):a.a.HTMLDocument&&
D(a.a.HTMLDocument.prototype,"write")&&X(a,a.a.HTMLDocument.prototype,"write",r.TrustedHTML,0),"DOMParser"in a.a&&X(a,a.a.DOMParser.prototype,"parseFromString",r.TrustedHTML,0),X(a,a.a,"setInterval",r.TrustedScript,0),X(a,a.a,"setTimeout",r.TrustedScript,0),Ea(a),Fa(a),Ga(a)}
function Y(a,b,c,d){if(b){var f=D(b,c),k=f?f.value:null;if(k instanceof Function){f=W(b,c);if(a.c[f])throw Error(`TrustedTypesEnforcer: Double installation detected: ${f} ${c}`);sa(b,c,function(...n){return d.bind(this,k).apply(this,n)});a.c[f]=k}else a.b.a&&console.warn("Property "+c+" on object"+b+" is not a function")}}function Z(a,b,c=""){const d=r.defaultPolicy;return d&&R.hasOwnProperty(a)?d[xa[a]](b,c):null}
function Ia(a,b,c,d,f){const k=a.g(b.constructor)||""+b,n=`Failed to set ${c} on ${k}: `+`This property requires ${d.name}.`;a.b.a&&console.warn(n,c,b,d,f);const q=a.a.SecurityPolicyViolationEvent||null;if("function"===typeof q&&a.a.document){var m="";if(d===r.TrustedScriptURL){m=a.a;d="function"==typeof m.URL?m.URL.prototype.constructor:null;try{var u=new d(f,m.document.baseURI||void 0)}catch(v){u=null}if(m=u||"")m=m.href}f=C(va,f,[0,40]);c=new q("securitypolicyviolation",{bubbles:!0,blockedURI:m,
disposition:a.b.b?"enforce":"report",documentURI:a.a.document.location.href,effectiveDirective:"require-trusted-types-for",originalPolicy:a.b.g,statusCode:0,violatedDirective:"require-trusted-types-for",sample:`${k}.${c} ${f}`});V(a,b,"Node")&&b.isConnected?b.dispatchEvent(c):a.a.document.dispatchEvent(c)}if(a.b.b)throw new TypeError(n);}function W(a,b){return""+(a.constructor.name?a.constructor.name:a.constructor)+"-"+b}
class Ja{constructor(a){this.b=a;this.c={};this.a=a.h||("undefined"!==typeof window?window:null);if(!this.a||"object"!==typeof this.a)throw Error("The polyfill expects a global `window` object or emulated `window-like` object passed to the enforcer as second argument");this.A=(b=>b.Element&&b.HTMLElement?C(I,b.Element.prototype,["insertAdjacentHTML"])?b.Element.prototype:b.HTMLElement.prototype:null)(this.a);this.a.document?this.g=this.a.document.createElement("div").constructor.name?b=>b.name:b=>
(""+b).match(/^\[object (\S+)\]$/)[1]:this.g=()=>null}D(a,b,...c){if(null!==a.constructor&&V(this,a,"Element")){var d=(c[0]=String(c[0])).toLowerCase();if((d=r.j(a.tagName,d,a.namespaceURI))&&C(I,Q,[d]))return this.f(a,"setAttribute",Q[d],b,1,c)}return C(b,a,c)}C(a,b,...c){if(null!==a.constructor&&V(this,a,"Element")){var d=c[0]?String(c[0]):null;c[0]=d;const f=(c[1]=String(c[1])).toLowerCase();if((d=r.j(a.tagName,f,a.namespaceURI,d))&&C(I,Q,[d]))return this.f(a,"setAttributeNS",Q[d],b,2,c)}return C(b,
a,c)}h(a,b,c,...d){if(this.a.Node&&this.a.document){if(V(this,b?a.parentNode:a,"HTMLScriptElement")&&0<d.length)for(b=0;b<d.length;b++){let f=d[b];if(V(this,f,"Node")&&f.nodeType!==this.a.Node.TEXT_NODE)continue;if(V(this,f,"Node")&&f.nodeType==this.a.Node.TEXT_NODE)f=f.textContent;else if(r.i(f)){d[b]=this.a.document.createTextNode(""+f);continue}const k=Z("TrustedScript",""+f,"script.text");null===k||void 0===k?Ia(this,a,c.name,r.TrustedScript,f):f=k;d[b]=this.a.document.createTextNode(""+f)}return C(c,
a,d)}}B(a,b,...c){const d=["beforebegin","afterend"];if(this.a.document&&this.a.Node&&V(this,a,"Element")&&V(this,a.parentElement,"HTMLScriptElement")&&1<c.length&&d.includes(c[0])&&!r.i(c[1])){c[1]=""+c[1];b=Z("TrustedScript",c[1],"script.text");null===b||void 0===b?Ia(this,a,"insertAdjacentText",r.TrustedScript,c[1]):c[1]=b;b=this.a.document.createTextNode(""+c[1]);const f=this.c[W(this.a.Node.prototype,"insertBefore")];switch(c[0]){case d[0]:C(f,a.parentElement,[b,a]);break;case d[1]:C(f,a.parentElement,
[b,a.nextSibling])}}else C(b,a,c)}f(a,b,c,d,f,k){const n=k[f];var q=c.name;if(R.hasOwnProperty(q)&&R[q](n))return wa&&"createContextualFragment"==b&&(k[f]=k[f].toString()),C(d,a,k);if(c===r.TrustedScript){const m="setAttribute"==b||"setAttributeNS"===b||"on"===C(va,b,[0,2]);if(("setInterval"===b||"setTimeout"===b||m)&&"function"===typeof n||m&&null===n)return C(d,a,k)}k[f]=""+n;q=Z(q,n,(V(this,a,"Element")?a.localName:this.g(a?a.constructor:window.constructor))+"."+b);null===q||void 0===q?Ia(this,
a,b,c,n):k[f]=q;return C(d,a,k)}};function Ka(){try{var a;if(!(a=document.currentScript)){{const c=document.getElementsByTagName("script");a=c[c.length-1]}}if(a&&"Content-Security-Policy:"==a.textContent.trim().substr(0,24))return a.textContent.trim().slice(24);if(a.dataset.csp)return a.dataset.csp;const b=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(b)return b.content.trim()}catch(b){}return null}var La;
a:{for(const a of["trustedTypes","TrustedTypes"])if(window[a]&&!window[a]._isPolyfill_){La=!1;break a}La=!0}
if(La){if("undefined"!==typeof window&&(window.TrustedTypes&&"undefined"===typeof window.trustedTypes&&(window.trustedTypes=Object.freeze(window.TrustedTypes)),"undefined"===typeof window.trustedTypes)){var Ma=Object.create(h.prototype);Object.assign(Ma,{m:r.m,o:r.o,i:r.i,createPolicy:r.createPolicy,j:r.j,w:r.w,l:r.l,s:r.s,u:r.u,H:!0});Object.defineProperty(Ma,"defaultPolicy",Object.getOwnPropertyDescriptor(r,"defaultPolicy")||{});window.trustedTypes=Object.freeze(Ma);window.TrustedHTML=r.TrustedHTML;
window.TrustedScriptURL=r.TrustedScriptURL;window.TrustedScript=r.TrustedScript;window.TrustedTypePolicy=na;window.TrustedTypePolicyFactory=h}{const a=Ka(),b=a?qa(a):new ra(!1,!1,[],!0);Ha(new Ja(b))}};}).call(this);

//# sourceMappingURL=trustedtypes.build.js.map
