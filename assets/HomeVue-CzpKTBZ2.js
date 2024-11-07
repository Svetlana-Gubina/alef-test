import{u as ye,d as re,r as L,w as Oe,o as Ie,h as Pe,a as V,c as U,b as ee,e as te,f as d,g as xe,i as we,_ as Ne,s as Ae,j as G,v as q,k as Le,F as ce,l as Be,m as Me}from"./index-CGL3-tf1.js";import{u as de,v as Ke}from"./store-CQNpiMqX.js";function je(o){return typeof o=="function"?o():ye(o)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Ve(o){var e;const t=je(o);return(e=t==null?void 0:t.$el)!=null?e:t}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Te=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],W=Te.join(","),ke=typeof Element>"u",x=ke?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Y=!ke&&Element.prototype.getRootNode?function(o){var e;return o==null||(e=o.getRootNode)===null||e===void 0?void 0:e.call(o)}:function(o){return o==null?void 0:o.ownerDocument},Z=function o(e,t){var a;t===void 0&&(t=!0);var s=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),u=s===""||s==="true",r=u||t&&e&&o(e.parentNode);return r},Ue=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},Fe=function(e,t,a){if(Z(e))return[];var s=Array.prototype.slice.apply(e.querySelectorAll(W));return t&&x.call(e,W)&&s.unshift(e),s=s.filter(a),s},Ee=function o(e,t,a){for(var s=[],u=Array.from(e);u.length;){var r=u.shift();if(!Z(r,!1))if(r.tagName==="SLOT"){var c=r.assignedElements(),f=c.length?c:r.children,g=o(f,!0,a);a.flatten?s.push.apply(s,g):s.push({scopeParent:r,candidates:g})}else{var F=x.call(r,W);F&&a.filter(r)&&(t||!e.includes(r))&&s.push(r);var w=r.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(r),S=!Z(w,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(r));if(w&&S){var R=o(w===!0?r.children:w.children,!0,a);a.flatten?s.push.apply(s,R):s.push({scopeParent:r,candidates:R})}else u.unshift.apply(u,r.children)}}return s},Se=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},P=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Ue(e))&&!Se(e)?0:e.tabIndex},_e=function(e,t){var a=P(e);return a<0&&t&&!Se(e)?0:a},Ge=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ce=function(e){return e.tagName==="INPUT"},qe=function(e){return Ce(e)&&e.type==="hidden"},$e=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},We=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},Ye=function(e){if(!e.name)return!0;var t=e.form||Y(e),a=function(c){return t.querySelectorAll('input[type="radio"][name="'+c+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=a(window.CSS.escape(e.name));else try{s=a(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var u=We(s,e.form);return!u||u===e},Ze=function(e){return Ce(e)&&e.type==="radio"},Xe=function(e){return Ze(e)&&!Ye(e)},ze=function(e){var t,a=e&&Y(e),s=(t=a)===null||t===void 0?void 0:t.host,u=!1;if(a&&a!==e){var r,c,f;for(u=!!((r=s)!==null&&r!==void 0&&(c=r.ownerDocument)!==null&&c!==void 0&&c.contains(s)||e!=null&&(f=e.ownerDocument)!==null&&f!==void 0&&f.contains(e));!u&&s;){var g,F,w;a=Y(s),s=(g=a)===null||g===void 0?void 0:g.host,u=!!((F=s)!==null&&F!==void 0&&(w=F.ownerDocument)!==null&&w!==void 0&&w.contains(s))}}return u},fe=function(e){var t=e.getBoundingClientRect(),a=t.width,s=t.height;return a===0&&s===0},He=function(e,t){var a=t.displayCheck,s=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var u=x.call(e,"details>summary:first-of-type"),r=u?e.parentElement:e;if(x.call(r,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof s=="function"){for(var c=e;e;){var f=e.parentElement,g=Y(e);if(f&&!f.shadowRoot&&s(f)===!0)return fe(e);e.assignedSlot?e=e.assignedSlot:!f&&g!==e.ownerDocument?e=g.host:e=f}e=c}if(ze(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return fe(e);return!1},Je=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var s=t.children.item(a);if(s.tagName==="LEGEND")return x.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},X=function(e,t){return!(t.disabled||Z(t)||qe(t)||He(t,e)||$e(t)||Je(t))},ae=function(e,t){return!(Xe(t)||P(t)<0||!X(e,t))},Qe=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},et=function o(e){var t=[],a=[];return e.forEach(function(s,u){var r=!!s.scopeParent,c=r?s.scopeParent:s,f=_e(c,r),g=r?o(s.candidates):c;f===0?r?t.push.apply(t,g):t.push(c):a.push({documentOrder:u,tabIndex:f,item:s,isScope:r,content:g})}),a.sort(Ge).reduce(function(s,u){return u.isScope?s.push.apply(s,u.content):s.push(u.content),s},[]).concat(t)},tt=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Ee([e],t.includeContainer,{filter:ae.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Qe}):a=Fe(e,t.includeContainer,ae.bind(null,t)),et(a)},at=function(e,t){t=t||{};var a;return t.getShadowRoot?a=Ee([e],t.includeContainer,{filter:X.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=Fe(e,t.includeContainer,X.bind(null,t)),a},A=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return x.call(e,W)===!1?!1:ae(t,e)},rt=Te.concat("iframe").join(","),Q=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return x.call(e,rt)===!1?!1:X(t,e)};/*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function nt(o,e,t){return(e=ot(e))in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function ve(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),t.push.apply(t,a)}return t}function be(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(t),!0).forEach(function(a){nt(o,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):ve(Object(t)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(t,a))})}return o}function it(o,e){if(typeof o!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var a=t.call(o,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function ot(o){var e=it(o,"string");return typeof e=="symbol"?e:e+""}var pe={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},st=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ut=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},_=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},lt=function(e){return _(e)&&!e.shiftKey},ct=function(e){return _(e)&&e.shiftKey},me=function(e){return setTimeout(e,0)},he=function(e,t){var a=-1;return e.every(function(s,u){return t(s)?(a=u,!1):!0}),a},j=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),s=1;s<t;s++)a[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,a):e},$=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},dt=[],ft=function(e,t){var a=(t==null?void 0:t.document)||document,s=(t==null?void 0:t.trapStack)||dt,u=be({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:lt,isKeyBackward:ct},t),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},c,f=function(n,i,l){return n&&n[i]!==void 0?n[i]:u[l||i]},g=function(n,i){var l=typeof(i==null?void 0:i.composedPath)=="function"?i.composedPath():void 0;return r.containerGroups.findIndex(function(b){var p=b.container,h=b.tabbableNodes;return p.contains(n)||(l==null?void 0:l.includes(p))||h.find(function(y){return y===n})})},F=function(n){var i=u[n];if(typeof i=="function"){for(var l=arguments.length,b=new Array(l>1?l-1:0),p=1;p<l;p++)b[p-1]=arguments[p];i=i.apply(void 0,b)}if(i===!0&&(i=void 0),!i){if(i===void 0||i===!1)return i;throw new Error("`".concat(n,"` was specified but was not a node, or did not return a node"))}var h=i;if(typeof i=="string"&&(h=a.querySelector(i),!h))throw new Error("`".concat(n,"` as selector refers to no known node"));return h},w=function(){var n=F("initialFocus");if(n===!1)return!1;if(n===void 0||!Q(n,u.tabbableOptions))if(g(a.activeElement)>=0)n=a.activeElement;else{var i=r.tabbableGroups[0],l=i&&i.firstTabbableNode;n=l||F("fallbackFocus")}if(!n)throw new Error("Your focus-trap needs to have at least one focusable element");return n},S=function(){if(r.containerGroups=r.containers.map(function(n){var i=tt(n,u.tabbableOptions),l=at(n,u.tabbableOptions),b=i.length>0?i[0]:void 0,p=i.length>0?i[i.length-1]:void 0,h=l.find(function(N){return A(N)}),y=l.slice().reverse().find(function(N){return A(N)}),k=!!i.find(function(N){return P(N)>0});return{container:n,tabbableNodes:i,focusableNodes:l,posTabIndexesFound:k,firstTabbableNode:b,lastTabbableNode:p,firstDomTabbableNode:h,lastDomTabbableNode:y,nextTabbableNode:function(I){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,D=i.indexOf(I);return D<0?M?l.slice(l.indexOf(I)+1).find(function(K){return A(K)}):l.slice(0,l.indexOf(I)).reverse().find(function(K){return A(K)}):i[D+(M?1:-1)]}}}),r.tabbableGroups=r.containerGroups.filter(function(n){return n.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!F("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(r.containerGroups.find(function(n){return n.posTabIndexesFound})&&r.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},R=function(n){var i=n.activeElement;if(i)return i.shadowRoot&&i.shadowRoot.activeElement!==null?R(i.shadowRoot):i},E=function(n){if(n!==!1&&n!==R(document)){if(!n||!n.focus){E(w());return}n.focus({preventScroll:!!u.preventScroll}),r.mostRecentlyFocusedNode=n,st(n)&&n.select()}},C=function(n){var i=F("setReturnFocus",n);return i||(i===!1?!1:n)},v=function(n){var i=n.target,l=n.event,b=n.isBackward,p=b===void 0?!1:b;i=i||$(l),S();var h=null;if(r.tabbableGroups.length>0){var y=g(i,l),k=y>=0?r.containerGroups[y]:void 0;if(y<0)p?h=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:h=r.tabbableGroups[0].firstTabbableNode;else if(p){var N=he(r.tabbableGroups,function(H){var J=H.firstTabbableNode;return i===J});if(N<0&&(k.container===i||Q(i,u.tabbableOptions)&&!A(i,u.tabbableOptions)&&!k.nextTabbableNode(i,!1))&&(N=y),N>=0){var I=N===0?r.tabbableGroups.length-1:N-1,M=r.tabbableGroups[I];h=P(i)>=0?M.lastTabbableNode:M.lastDomTabbableNode}else _(l)||(h=k.nextTabbableNode(i,!1))}else{var D=he(r.tabbableGroups,function(H){var J=H.lastTabbableNode;return i===J});if(D<0&&(k.container===i||Q(i,u.tabbableOptions)&&!A(i,u.tabbableOptions)&&!k.nextTabbableNode(i))&&(D=y),D>=0){var K=D===r.tabbableGroups.length-1?0:D+1,le=r.tabbableGroups[K];h=P(i)>=0?le.firstTabbableNode:le.firstDomTabbableNode}else _(l)||(h=k.nextTabbableNode(i))}}else h=F("fallbackFocus");return h},T=function(n){var i=$(n);if(!(g(i,n)>=0)){if(j(u.clickOutsideDeactivates,n)){c.deactivate({returnFocus:u.returnFocusOnDeactivate});return}j(u.allowOutsideClick,n)||n.preventDefault()}},O=function(n){var i=$(n),l=g(i,n)>=0;if(l||i instanceof Document)l&&(r.mostRecentlyFocusedNode=i);else{n.stopImmediatePropagation();var b,p=!0;if(r.mostRecentlyFocusedNode)if(P(r.mostRecentlyFocusedNode)>0){var h=g(r.mostRecentlyFocusedNode),y=r.containerGroups[h].tabbableNodes;if(y.length>0){var k=y.findIndex(function(N){return N===r.mostRecentlyFocusedNode});k>=0&&(u.isKeyForward(r.recentNavEvent)?k+1<y.length&&(b=y[k+1],p=!1):k-1>=0&&(b=y[k-1],p=!1))}}else r.containerGroups.some(function(N){return N.tabbableNodes.some(function(I){return P(I)>0})})||(p=!1);else p=!1;p&&(b=v({target:r.mostRecentlyFocusedNode,isBackward:u.isKeyBackward(r.recentNavEvent)})),E(b||r.mostRecentlyFocusedNode||w())}r.recentNavEvent=void 0},De=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.recentNavEvent=n;var l=v({event:n,isBackward:i});l&&(_(n)&&n.preventDefault(),E(l))},ne=function(n){(u.isKeyForward(n)||u.isKeyBackward(n))&&De(n,u.isKeyBackward(n))},ie=function(n){ut(n)&&j(u.escapeDeactivates,n)!==!1&&(n.preventDefault(),c.deactivate())},oe=function(n){var i=$(n);g(i,n)>=0||j(u.clickOutsideDeactivates,n)||j(u.allowOutsideClick,n)||(n.preventDefault(),n.stopImmediatePropagation())},se=function(){if(r.active)return pe.activateTrap(s,c),r.delayInitialFocusTimer=u.delayInitialFocus?me(function(){E(w())}):E(w()),a.addEventListener("focusin",O,!0),a.addEventListener("mousedown",T,{capture:!0,passive:!1}),a.addEventListener("touchstart",T,{capture:!0,passive:!1}),a.addEventListener("click",oe,{capture:!0,passive:!1}),a.addEventListener("keydown",ne,{capture:!0,passive:!1}),a.addEventListener("keydown",ie),c},ue=function(){if(r.active)return a.removeEventListener("focusin",O,!0),a.removeEventListener("mousedown",T,!0),a.removeEventListener("touchstart",T,!0),a.removeEventListener("click",oe,!0),a.removeEventListener("keydown",ne,!0),a.removeEventListener("keydown",ie),c},Re=function(n){var i=n.some(function(l){var b=Array.from(l.removedNodes);return b.some(function(p){return p===r.mostRecentlyFocusedNode})});i&&E(w())},z=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Re):void 0,B=function(){z&&(z.disconnect(),r.active&&!r.paused&&r.containers.map(function(n){z.observe(n,{subtree:!0,childList:!0})}))};return c={get active(){return r.active},get paused(){return r.paused},activate:function(n){if(r.active)return this;var i=f(n,"onActivate"),l=f(n,"onPostActivate"),b=f(n,"checkCanFocusTrap");b||S(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,i==null||i();var p=function(){b&&S(),se(),B(),l==null||l()};return b?(b(r.containers.concat()).then(p,p),this):(p(),this)},deactivate:function(n){if(!r.active)return this;var i=be({onDeactivate:u.onDeactivate,onPostDeactivate:u.onPostDeactivate,checkCanReturnFocus:u.checkCanReturnFocus},n);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,ue(),r.active=!1,r.paused=!1,B(),pe.deactivateTrap(s,c);var l=f(i,"onDeactivate"),b=f(i,"onPostDeactivate"),p=f(i,"checkCanReturnFocus"),h=f(i,"returnFocus","returnFocusOnDeactivate");l==null||l();var y=function(){me(function(){h&&E(C(r.nodeFocusedBeforeActivation)),b==null||b()})};return h&&p?(p(C(r.nodeFocusedBeforeActivation)).then(y,y),this):(y(),this)},pause:function(n){if(r.paused||!r.active)return this;var i=f(n,"onPause"),l=f(n,"onPostPause");return r.paused=!0,i==null||i(),ue(),B(),l==null||l(),this},unpause:function(n){if(!r.paused||!r.active)return this;var i=f(n,"onUnpause"),l=f(n,"onPostUnpause");return r.paused=!1,i==null||i(),S(),se(),B(),l==null||l(),this},updateContainerElements:function(n){var i=[].concat(n).filter(Boolean);return r.containers=i.map(function(l){return typeof l=="string"?a.querySelector(l):l}),r.active&&S(),B(),this}},c.updateContainerElements(e),c};const vt=re({name:"UseFocusTrap",props:["as","options"],setup(o,{slots:e}){let t;const a=L(),s=()=>t&&t.activate(),u=()=>t&&t.deactivate();return Oe(()=>Ve(a),r=>{r&&(t=ft(r,o.options||{}),s())},{flush:"post"}),Ie(()=>u()),()=>{if(e.default)return Pe(o.as||"div",{ref:a},e.default())}}}),bt={key:0,class:"modal-overlay"},pt=re({__name:"ModalComponent",props:{isOpen:Boolean},emits:["modal-close"],setup(o,{emit:e}){const t=e,a=()=>{t("modal-close")},s=L(null);return(u,r)=>o.isOpen?(V(),U("div",bt,[ee(ye(vt),null,{default:te(()=>[d("div",{class:"modal-wrapper",ref_key:"target",ref:s},[d("div",{class:"modal-container",ref_key:"target",ref:s},[d("button",{class:"modal-close",type:"button","aria-label":"Закрыть модальное окно",onClick:a},r[0]||(r[0]=[d("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M1 1L17 17M17 1L1 17",stroke:"white","stroke-width":"2","stroke-linecap":"round"})],-1)])),xe(u.$slots,"content",{},void 0,!0)],512)],512)]),_:3})])):we("",!0)}}),ge=Ne(pt,[["__scopeId","data-v-2026a8e1"]]),mt={class:"home"},ht={action:"#",method:"POST"},gt={class:"personal-data"},yt={class:"form-item"},wt={class:"form-item"},Nt={key:0,class:"kids-inner"},Tt={class:"kids-list"},kt={class:"form-item"},Ft=["onUpdate:modelValue"],Et={class:"form-item"},St=["onUpdate:modelValue"],Ct=["onClick"],Dt=5,Rt=re({__name:"HomeVue",setup(o){const e=de(),{setData:t}=de(),{userData:a}=Ae(e),s=L(!1),u=L(!1),r=L(""),c=L(a.value),f=()=>{t(c.value),R(),setTimeout(()=>{E()},1e3)},g=()=>{const C={id:Ke(),name:"",age:0};c.value.kids.length>=Dt||(c.value.kids=[...c.value.kids,C])},F=()=>{s.value=!1,c.value.kids=c.value.kids.filter(C=>C.id!==r.value)},w=C=>{s.value=!0,r.value=C},S=()=>{s.value=!1,r.value=""},R=()=>{u.value=!0},E=()=>{u.value=!1};return(C,v)=>(V(),U(ce,null,[ee(ge,{isOpen:s.value,onModalClose:S,name:"login-modal"},{content:te(()=>[d("div",{class:"modal-content"},[v[2]||(v[2]=d("p",null,"Вы действительно хотите удалить ребенка?",-1)),d("div",{class:"modal-footer"},[d("button",{type:"button",onClick:F},"Да"),d("button",{type:"button",onClick:S},"Нет")])])]),_:1},8,["isOpen"]),ee(ge,{isOpen:u.value,onModalClose:E,name:"login-modal"},{content:te(()=>v[3]||(v[3]=[d("div",{class:"modal-content"},[d("p",null,"Данные успешно сохранены")],-1)])),_:1},8,["isOpen"]),d("section",mt,[v[11]||(v[11]=d("h1",{class:"sr-only"},"Персональные данные",-1)),d("form",ht,[d("div",gt,[v[6]||(v[6]=d("p",{class:"data-title"},"Персональные данные",-1)),d("div",yt,[v[4]||(v[4]=d("label",{for:"name"},"Имя",-1)),G(d("input",{type:"text",id:"name","onUpdate:modelValue":v[0]||(v[0]=T=>c.value.name=T)},null,512),[[q,c.value.name]])]),d("div",wt,[v[5]||(v[5]=d("label",{for:"age"},"Возраст",-1)),G(d("input",{type:"number",id:"age","onUpdate:modelValue":v[1]||(v[1]=T=>c.value.age=T)},null,512),[[q,c.value.age]])])]),d("div",{class:"kids-data"},[d("button",{onClick:g,class:"add-kid",type:"button"},v[7]||(v[7]=[d("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"})],-1),Le(" Добавить ребенка ")]))]),c.value.kids.length?(V(),U("div",Nt,[v[10]||(v[10]=d("p",{class:"data-title"},"Дети (макс. 5)",-1)),d("ul",Tt,[(V(!0),U(ce,null,Be(c.value.kids,T=>(V(),U("li",{class:"kids-item",key:T.id},[d("div",kt,[v[8]||(v[8]=d("label",{for:"name"},"Имя",-1)),G(d("input",{type:"text",id:"name","onUpdate:modelValue":O=>T.name=O},null,8,Ft),[[q,T.name]])]),d("div",Et,[v[9]||(v[9]=d("label",{for:"age"},"Возраст",-1)),G(d("input",{type:"number",id:"age","onUpdate:modelValue":O=>T.age=O},null,8,St),[[q,T.age]])]),d("button",{onClick:O=>w(T.id),class:"remove-kid",type:"button"}," Удалить ",8,Ct)]))),128))])])):we("",!0),d("button",{onClick:Me(f,["prevent"]),class:"save",type:"submit"}," Сохранить ")])])],64))}}),Pt=Ne(Rt,[["__scopeId","data-v-c0838247"]]);export{Pt as default};