import{a as Et,c as et}from"./call-bind-33e6d5b2.js";const $t={},Mt=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"})),Wt=Et(Mt);var U=typeof Map=="function"&&Map.prototype,D=Object.getOwnPropertyDescriptor&&U?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,W=U&&D&&typeof D.get=="function"?D.get:null,rt=U&&Map.prototype.forEach,G=typeof Set=="function"&&Set.prototype,B=Object.getOwnPropertyDescriptor&&G?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,I=G&&B&&typeof B.get=="function"?B.get:null,nt=G&&Set.prototype.forEach,It=typeof WeakMap=="function"&&WeakMap.prototype,w=It?WeakMap.prototype.has:null,qt=typeof WeakSet=="function"&&WeakSet.prototype,_=qt?WeakSet.prototype.has:null,Rt=typeof WeakRef=="function"&&WeakRef.prototype,at=Rt?WeakRef.prototype.deref:null,Tt=Boolean.prototype.valueOf,Lt=Object.prototype.toString,At=Function.prototype.toString,kt=String.prototype.match,K=String.prototype.slice,s=String.prototype.replace,Nt=String.prototype.toUpperCase,it=String.prototype.toLowerCase,gt=RegExp.prototype.test,ot=Array.prototype.concat,u=Array.prototype.join,Dt=Array.prototype.slice,lt=Math.floor,z=typeof BigInt=="function"?BigInt.prototype.valueOf:null,C=Object.getOwnPropertySymbols,F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,m=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===m||"symbol")?Symbol.toStringTag:null,vt=Object.prototype.propertyIsEnumerable,ft=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function ut(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||gt.call(/e/,e))return e;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var a=t<0?-lt(-t):lt(t);if(a!==t){var i=String(a),r=K.call(e,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(e,n,"$&_")}var H=Wt,ct=H.custom,pt=mt(ct)?ct:null,St={__proto__:null,double:'"',single:"'"},Bt={__proto__:null,double:/(["\\])/g,single:/(['\\])/g},re=function t(e,n,a,i){var r=n||{};if(c(r,"quoteStyle")&&!c(St,r.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(c(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var p=c(r,"customInspect")?r.customInspect:!0;if(typeof p!="boolean"&&p!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(c(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(c(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=r.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Ot(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return v?ut(e,l):l}if(typeof e=="bigint"){var y=String(e)+"n";return v?ut(e,y):y}var q=typeof r.depth>"u"?5:r.depth;if(typeof a>"u"&&(a=0),a>=q&&q>0&&typeof e=="object")return V(e)?"[Array]":"[Object]";var S=te(r,a);if(typeof i>"u")i=[];else if(dt(i,e)>=0)return"[Circular]";function f(h,$,_t){if($&&(i=Dt.call(i),i.push($)),_t){var tt={depth:r.depth};return c(r,"quoteStyle")&&(tt.quoteStyle=r.quoteStyle),t(h,tt,a+1,i)}return t(h,r,a+1,i)}if(typeof e=="function"&&!yt(e)){var Q=Gt(e),X=M(e,f);return"[Function"+(Q?": "+Q:" (anonymous)")+"]"+(X.length>0?" { "+u.call(X,", ")+" }":"")}if(mt(e)){var Y=m?s.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):F.call(e);return typeof e=="object"&&!m?O(Y):Y}if(xt(e)){for(var d="<"+it.call(String(e.nodeName)),R=e.attributes||[],E=0;E<R.length;E++)d+=" "+R[E].name+"="+ht(Ct(R[E].value),"double",r);return d+=">",e.childNodes&&e.childNodes.length&&(d+="..."),d+="</"+it.call(String(e.nodeName))+">",d}if(V(e)){if(e.length===0)return"[]";var T=M(e,f);return S&&!jt(T)?"["+J(T,S)+"]":"[ "+u.call(T,", ")+" ]"}if(zt(e)){var L=M(e,f);return!("cause"in Error.prototype)&&"cause"in e&&!vt.call(e,"cause")?"{ ["+String(e)+"] "+u.call(ot.call("[cause]: "+f(e.cause),L),", ")+" }":L.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+u.call(L,", ")+" }"}if(typeof e=="object"&&p){if(pt&&typeof e[pt]=="function"&&H)return H(e,{depth:q-a});if(p!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Kt(e)){var Z=[];return rt&&rt.call(e,function(h,$){Z.push(f($,e,!0)+" => "+f(h,e))}),st("Map",W.call(e),Z,S)}if(Yt(e)){var x=[];return nt&&nt.call(e,function(h){x.push(f(h,e))}),st("Set",I.call(e),x,S)}if(Qt(e))return P("WeakMap");if(Zt(e))return P("WeakSet");if(Xt(e))return P("WeakRef");if(Ht(e))return O(f(Number(e)));if(Jt(e))return O(f(z.call(e)));if(Vt(e))return O(Tt.call(e));if(Ft(e))return O(f(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof et<"u"&&e===et)return"{ [object globalThis] }";if(!Pt(e)&&!yt(e)){var A=M(e,f),b=ft?ft(e)===Object.prototype:e instanceof Object||e.constructor===Object,k=e instanceof Object?"":"null prototype",j=!b&&o&&Object(e)===e&&o in e?K.call(g(e),8,-1):k?"Object":"",wt=b||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",N=wt+(j||k?"["+u.call(ot.call([],j||[],k||[]),": ")+"] ":"");return A.length===0?N+"{}":S?N+"{"+J(A,S)+"}":N+"{ "+u.call(A,", ")+" }"}return String(e)};function ht(t,e,n){var a=n.quoteStyle||e,i=St[a];return i+t+i}function Ct(t){return s.call(String(t),/"/g,"&quot;")}function V(t){return g(t)==="[object Array]"&&(!o||!(typeof t=="object"&&o in t))}function Pt(t){return g(t)==="[object Date]"&&(!o||!(typeof t=="object"&&o in t))}function yt(t){return g(t)==="[object RegExp]"&&(!o||!(typeof t=="object"&&o in t))}function zt(t){return g(t)==="[object Error]"&&(!o||!(typeof t=="object"&&o in t))}function Ft(t){return g(t)==="[object String]"&&(!o||!(typeof t=="object"&&o in t))}function Ht(t){return g(t)==="[object Number]"&&(!o||!(typeof t=="object"&&o in t))}function Vt(t){return g(t)==="[object Boolean]"&&(!o||!(typeof t=="object"&&o in t))}function mt(t){if(m)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!F)return!1;try{return F.call(t),!0}catch{}return!1}function Jt(t){if(!t||typeof t!="object"||!z)return!1;try{return z.call(t),!0}catch{}return!1}var Ut=Object.prototype.hasOwnProperty||function(t){return t in this};function c(t,e){return Ut.call(t,e)}function g(t){return Lt.call(t)}function Gt(t){if(t.name)return t.name;var e=kt.call(At.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function dt(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1}function Kt(t){if(!W||!t||typeof t!="object")return!1;try{W.call(t);try{I.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function Qt(t){if(!w||!t||typeof t!="object")return!1;try{w.call(t,w);try{_.call(t,_)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function Xt(t){if(!at||!t||typeof t!="object")return!1;try{return at.call(t),!0}catch{}return!1}function Yt(t){if(!I||!t||typeof t!="object")return!1;try{I.call(t);try{W.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function Zt(t){if(!_||!t||typeof t!="object")return!1;try{_.call(t,_);try{w.call(t,w)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function xt(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Ot(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return Ot(K.call(t,0,e.maxStringLength),e)+a}var i=Bt[e.quoteStyle||"single"];i.lastIndex=0;var r=s.call(s.call(t,i,"\\$1"),/[\x00-\x1f]/g,bt);return ht(r,"single",e)}function bt(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+Nt.call(e.toString(16))}function O(t){return"Object("+t+")"}function P(t){return t+" { ? }"}function st(t,e,n,a){var i=a?J(n,a):u.call(n,", ");return t+" ("+e+") {"+i+"}"}function jt(t){for(var e=0;e<t.length;e++)if(dt(t[e],`
`)>=0)return!1;return!0}function te(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=u.call(Array(t.indent+1)," ");else return null;return{base:n,prev:u.call(Array(e+1),n)}}function J(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+u.call(t,","+n)+`
`+e.prev}function M(t,e){var n=V(t),a=[];if(n){a.length=t.length;for(var i=0;i<t.length;i++)a[i]=c(t,i)?e(t[i],t):""}var r=typeof C=="function"?C(t):[],p;if(m){p={};for(var v=0;v<r.length;v++)p["$"+r[v]]=r[v]}for(var l in t)c(t,l)&&(n&&String(Number(l))===l&&l<t.length||m&&p["$"+l]instanceof Symbol||(gt.call(/[^\w$]/,l)?a.push(e(l,t)+": "+e(t[l],t)):a.push(l+": "+e(t[l],t))));if(typeof C=="function")for(var y=0;y<r.length;y++)vt.call(t,r[y])&&a.push("["+e(r[y])+"]: "+e(t[r[y]],t));return a}export{re as o};
