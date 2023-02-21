"use strict";
exports.id = 284;
exports.ids = [284];
exports.modules = {

/***/ 57284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W3mAccountButton": () => (/* binding */ We),
  "W3mConnectButton": () => (/* binding */ ae),
  "W3mCoreButton": () => (/* binding */ ne),
  "W3mModal": () => (/* binding */ re),
  "W3mNetworkSwitch": () => (/* binding */ ie)
});

;// CONCATENATED MODULE: ./node_modules/@lit-labs/ssr-dom-shim/index.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const attributes = new WeakMap();
const attributesForElement = (element) => {
    let attrs = attributes.get(element);
    if (attrs === undefined) {
        attributes.set(element, (attrs = new Map()));
    }
    return attrs;
};
// The typings around the exports below are a little funky:
//
// 1. We want the `name` of the shim classes to match the real ones at runtime,
//    hence e.g. `class Element`.
// 2. We can't shadow the global types with a simple class declaration, because
//    then we can't reference the global types for casting, hence e.g.
//    `const ElementShim = class Element`.
// 3. We want to export the classes typed as the real ones, hence e.g.
//    `const ElementShimWithRealType = ElementShim as object as typeof Element;`.
// 4. We want the exported names to match the real ones, hence e.g.
//    `export {ElementShimWithRealType as Element}`.
const ElementShim = class Element {
    constructor() {
        this.__shadowRoot = null;
    }
    get attributes() {
        return Array.from(attributesForElement(this)).map(([name, value]) => ({
            name,
            value,
        }));
    }
    get shadowRoot() {
        return this.__shadowRoot;
    }
    setAttribute(name, value) {
        // Emulate browser behavior that silently casts all values to string. E.g.
        // `42` becomes `"42"` and `{}` becomes `"[object Object]""`.
        attributesForElement(this).set(name, String(value));
    }
    removeAttribute(name) {
        attributesForElement(this).delete(name);
    }
    hasAttribute(name) {
        return attributesForElement(this).has(name);
    }
    attachShadow(init) {
        const shadowRoot = { host: this };
        if (init && init.mode === 'open') {
            this.__shadowRoot = shadowRoot;
        }
        return shadowRoot;
    }
    getAttribute(name) {
        const value = attributesForElement(this).get(name);
        return value ?? null;
    }
};
const ElementShimWithRealType = (/* unused pure expression or super */ null && (ElementShim));

const HTMLElementShim = class HTMLElement extends ElementShim {
};
const HTMLElementShimWithRealType = HTMLElementShim;

const CustomElementRegistryShim = class CustomElementRegistry {
    constructor() {
        this.__definitions = new Map();
    }
    define(name, ctor) {
        if (this.__definitions.has(name)) {
            throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': ` +
                `the name "${name}" has already been used with this registry`);
        }
        this.__definitions.set(name, {
            ctor,
            // Note it's important we read `observedAttributes` in case it is a getter
            // with side-effects, as is the case in Lit, where it triggers class
            // finalization.
            //
            // TODO(aomarks) To be spec compliant, we should also capture the
            // registration-time lifecycle methods like `connectedCallback`. For them
            // to be actually accessible to e.g. the Lit SSR element renderer, though,
            // we'd need to introduce a new API for accessing them (since `get` only
            // returns the constructor).
            observedAttributes: ctor.observedAttributes ?? [],
        });
    }
    get(name) {
        const definition = this.__definitions.get(name);
        return definition?.ctor;
    }
};
const CustomElementRegistryShimWithRealType = CustomElementRegistryShim;

const ssr_dom_shim_customElements = new CustomElementRegistryShimWithRealType();
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=globalThis,css_tag_e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class css_tag_o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(css_tag_e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new css_tag_o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new css_tag_o(n,t,s)},S=(s,n)=>{css_tag_e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=css_tag_e||void 0===css_tag_t.CSSStyleSheet?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_r,h;const reactive_element_o=globalThis;null!==(reactive_element_r=reactive_element_o.customElements)&&void 0!==reactive_element_r||(reactive_element_o.customElements=ssr_dom_shim_customElements);const reactive_element_n=reactive_element_o.trustedTypes,l=reactive_element_n?reactive_element_n.emptyScript:"",a=reactive_element_o.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,i)=>i!==t&&(i==i||t==t),reactive_element_c={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends(globalThis.HTMLElement??HTMLElementShimWithRealType){constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=reactive_element_c){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||reactive_element_c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(c(t))}else void 0!==t&&i.push(c(t));return i}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=reactive_element_c){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:d).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:d;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:v}),(null!==(h=reactive_element_o.reactiveElementVersions)&&void 0!==h?h:reactive_element_o.reactiveElementVersions=[]).push("1.6.1");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/node/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=globalThis,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o=`lit$${(Math.random()+"").slice(9)}$`,lit_html_n="?"+lit_html_o,lit_html_l=`<${lit_html_n}>`,lit_html_h=void 0===lit_html_i.document?{createTreeWalker:()=>({})}:document,lit_html_r=(t="")=>lit_html_h.createComment(t),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_u=Array.isArray,lit_html_c=t=>lit_html_u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),lit_html_v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lit_html_a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,g=/^(?:script|style|textarea|title)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=$(1),lit_html_x=$(2),T=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),w=new WeakMap,A=lit_html_h.createTreeWalker(lit_html_h,129,null,!1),E=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=lit_html_v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===lit_html_v?"!--"===u[1]?d=lit_html_a:void 0!==u[1]?d=f:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:lit_html_v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===lit_html_a||d===f?d=lit_html_v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===lit_html_v?s+lit_html_l:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+lit_html_o+y):s+lit_html_o+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(u):u,n]};class C{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=E(t,i);if(this.el=C.createElement(v,e),A.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_o),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?R:"@"===i[1]?H:lit_html_S})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if(g.test(l.tagName)){const t=l.textContent.split(lit_html_o),i=t.length-1;if(i>0){l.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],lit_html_r()),A.nextNode(),c.push({type:2,index:++h});l.append(t[i],lit_html_r())}}}else if(8===l.nodeType)if(l.data===lit_html_n)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_o,t+1));)c.push({type:7,index:h}),t+=lit_html_o.length-1}h++}}static createElement(t,i){const s=lit_html_h.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=P(t,r._$AS(t,i.values),r,e)),i}class V{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_h).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.u.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=A.nextNode(),l++)}return o}p(t){let i=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cm=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),lit_html_d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lit_html_c(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==b&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.T(lit_html_h.createTextNode(t)),this._$AH=t}$(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=C.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(s);else{const t=new V(o,this),i=t.v(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let i=w.get(t.strings);return void 0===i&&w.set(t.strings,i=new C(t)),i}k(t){lit_html_u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.O(lit_html_r()),this.O(lit_html_r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class lit_html_S{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends lit_html_S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}const k=lit_html_s?lit_html_s.emptyScript:"";class R extends lit_html_S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class H extends lit_html_S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:b)===T)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const L={P:"$lit$",A:lit_html_o,M:lit_html_n,C:1,L:E,R:V,D:lit_html_c,V:P,I:N,H:lit_html_S,N:R,U:H,B:M,F:I},z=lit_html_i.litHtmlPolyfillSupport;null==z||z(C,N),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.6.1");const W=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(lit_html_r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=W(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.2");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/decorators/custom-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const custom_element_e=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);
//# sourceMappingURL=custom-element.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const property_i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}};function property_e(e){return(n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i)})(e,n,t):property_i(e,n)}
//# sourceMappingURL=property.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/decorators/state.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_t(t){return property_e({...t,state:!0})}
//# sourceMappingURL=state.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/decorators/query-assigned-elements.js

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var query_assigned_elements_l;const query_assigned_elements_n=null!=(null===(query_assigned_elements_l=globalThis.HTMLSlotElement)||void 0===query_assigned_elements_l?void 0:query_assigned_elements_l.prototype.assignedElements)?(o,l)=>o.assignedElements(l):(o,l)=>o.assignedNodes(l).filter((o=>o.nodeType===Node.ELEMENT_NODE));function query_assigned_elements_e(l){const{slot:e,selector:t}=null!=l?l:{};return o({descriptor:o=>({get(){var o;const r="slot"+(e?`[name=${e}]`:":not([name])"),s=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),i=null!=s?query_assigned_elements_n(s,l):[];return t?i.filter((o=>o.matches(t))):i},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-elements.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/node/decorators/query-assigned-nodes.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function query_assigned_nodes_o(o,n,r){let l,s=o;return"object"==typeof o?(s=o.slot,l=o):l={flatten:n},r?t({slot:s,flatten:n,selector:r}):e({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}
//# sourceMappingURL=query-assigned-nodes.js.map

;// CONCATENATED MODULE: ./node_modules/lit/decorators.js

//# sourceMappingURL=decorators.js.map

// EXTERNAL MODULE: ./node_modules/@web3modal/core/dist/index.js + 2 modules
var dist = __webpack_require__(30218);
;// CONCATENATED MODULE: ./node_modules/lit-html/node/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/node/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const class_map_o=directive_e(class extends directive_i{constructor(t){var i;if(super(t),t.type!==directive_t.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.nt){this.nt=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.nt.add(t);return this.render(s)}const e=i.element.classList;this.nt.forEach((t=>{t in s||(e.remove(t),this.nt.delete(t))}));for(const t in s){const i=!!s[t];i===this.nt.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.nt.add(t)):(e.remove(t),this.nt.delete(t)))}return T}});
//# sourceMappingURL=class-map.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map

;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/defaults.es.js
const defaults = {
    duration: 0.3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease",
};



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/time.es.js
const time = {
    ms: (seconds) => seconds * 1000,
    s: (milliseconds) => milliseconds / 1000,
};



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/noop.es.js
const noop = () => { };
const noopReturn = (v) => v;



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/stop-animation.es.js
function stopAnimation(animation, needsCommit = true) {
    if (!animation || animation.playState === "finished")
        return;
    // Suppress error thrown by WAAPI
    try {
        if (animation.stop) {
            animation.stop();
        }
        else {
            needsCommit && animation.commitStyles();
            animation.cancel();
        }
    }
    catch (e) { }
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/controls.es.js



const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = defaults.duration) => {
    return new Proxy({
        animations: animationFactory.map(createAnimation).filter(Boolean),
        duration,
        options,
    }, controls);
};
/**
 * TODO:
 * Currently this returns the first animation, ideally it would return
 * the first active animation.
 */
const getActiveAnimation = (state) => state.animations[0];
const controls = {
    get: (target, key) => {
        const activeAnimation = getActiveAnimation(target);
        switch (key) {
            case "duration":
                return target.duration;
            case "currentTime":
                return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
            case "playbackRate":
            case "playState":
                return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
            case "finished":
                if (!target.finished) {
                    target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
                }
                return target.finished;
            case "stop":
                return () => {
                    target.animations.forEach((animation) => stopAnimation(animation));
                };
            case "forEachNative":
                /**
                 * This is for internal use only, fire a callback for each
                 * underlying animation.
                 */
                return (callback) => {
                    target.animations.forEach((animation) => callback(animation, target));
                };
            default:
                return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined"
                    ? undefined
                    : () => target.animations.forEach((animation) => animation[key]());
        }
    },
    set: (target, key, value) => {
        switch (key) {
            case "currentTime":
                value = time.ms(value);
            case "currentTime":
            case "playbackRate":
                for (let i = 0; i < target.animations.length; i++) {
                    target.animations[i][key] = value;
                }
                return true;
        }
        return false;
    },
};
const selectFinished = (animation) => animation.finished;



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-easing-generator.es.js
const isEasingGenerator = (easing) => typeof easing === "object" &&
    Boolean(easing.createAnimation);



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-number.es.js
const is_number_es_isNumber = (value) => typeof value === "number";



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-easing-list.es.js


const isEasingList = (easing) => Array.isArray(easing) && !is_number_es_isNumber(easing[0]);



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/mix.es.js
const mix = (min, max, progress) => -progress * min + progress * max + min;



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/progress.es.js
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/offset.es.js



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}
function defaultOffset(length) {
    const offset = [0];
    fillOffset(offset, length - 1);
    return offset;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/wrap.es.js
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/easing.es.js



function getEasingForSegment(easing, i) {
    return isEasingList(easing)
        ? easing[wrap(0, easing.length, i)]
        : easing;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/clamp.es.js
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/interpolate.es.js







function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
    const length = output.length;
    /**
     * If the input length is lower than the output we
     * fill the input to match. This currently assumes the input
     * is an animation progress value so is a good candidate for
     * moving outside the function.
     */
    const remainder = length - input.length;
    remainder > 0 && fillOffset(input, remainder);
    return (t) => {
        let i = 0;
        for (; i < length - 2; i++) {
            if (t < input[i + 1])
                break;
        }
        let progressInRange = clamp(0, 1, progress(input[i], input[i + 1], t));
        const segmentEasing = getEasingForSegment(easing, i);
        progressInRange = segmentEasing(progressInRange);
        return mix(output[i], output[i + 1], progressInRange);
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/easing/dist/cubic-bezier.es.js


/*
  Bezier function generator

  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.

  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.

  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noopReturn;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/easing/dist/steps.es.js


const steps = (steps, direction = "end") => (progress) => {
    progress =
        direction === "end"
            ? Math.min(progress, 0.999)
            : Math.max(progress, 0.001);
    const expanded = progress * steps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / steps);
};



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-function.es.js
const isFunction = (value) => typeof value === "function";



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-cubic-bezier.es.js


const isCubicBezier = (easing) => Array.isArray(easing) && is_number_es_isNumber(easing[0]);



;// CONCATENATED MODULE: ./node_modules/@motionone/animation/dist/utils/easing.es.js



const namedEasings = {
    ease: cubicBezier(0.25, 0.1, 0.25, 1.0),
    "ease-in": cubicBezier(0.42, 0.0, 1.0, 1.0),
    "ease-in-out": cubicBezier(0.42, 0.0, 0.58, 1.0),
    "ease-out": cubicBezier(0.0, 0.0, 0.58, 1.0),
};
const functionArgsRegex = /\((.*?)\)/;
function easing_es_getEasingFunction(definition) {
    // If already an easing function, return
    if (isFunction(definition))
        return definition;
    // If an easing curve definition, return bezier function
    if (isCubicBezier(definition))
        return cubicBezier(...definition);
    // If we have a predefined easing function, return
    if (namedEasings[definition])
        return namedEasings[definition];
    // If this is a steps function, attempt to create easing curve
    if (definition.startsWith("steps")) {
        const args = functionArgsRegex.exec(definition);
        if (args) {
            const argsArray = args[1].split(",");
            return steps(parseFloat(argsArray[0]), argsArray[1].trim());
        }
    }
    return noopReturn;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/animation/dist/Animation.es.js



class Animation {
    constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", } = {}) {
        this.startTime = null;
        this.rate = 1;
        this.t = 0;
        this.cancelTimestamp = null;
        this.easing = noopReturn;
        this.duration = 0;
        this.totalDuration = 0;
        this.repeat = 0;
        this.playState = "idle";
        this.finished = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        easing = easing || defaults.easing;
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            initialDuration = custom.duration || initialDuration;
        }
        this.repeat = repeat;
        this.easing = isEasingList(easing) ? noopReturn : easing_es_getEasingFunction(easing);
        this.updateDuration(initialDuration);
        const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(easing_es_getEasingFunction) : noopReturn);
        this.tick = (timestamp) => {
            var _a;
            // TODO: Temporary fix for OptionsResolver typing
            delay = delay;
            let t = 0;
            if (this.pauseTime !== undefined) {
                t = this.pauseTime;
            }
            else {
                t = (timestamp - this.startTime) * this.rate;
            }
            this.t = t;
            // Convert to seconds
            t /= 1000;
            // Rebase on delay
            t = Math.max(t - delay, 0);
            /**
             * If this animation has finished, set the current time
             * to the total duration.
             */
            if (this.playState === "finished" && this.pauseTime === undefined) {
                t = this.totalDuration;
            }
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = t / this.duration;
            // TODO progress += iterationStart
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            iterationProgress === 1 && currentIteration--;
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = currentIteration % 2;
            if (direction === "reverse" ||
                (direction === "alternate" && iterationIsOdd) ||
                (direction === "alternate-reverse" && !iterationIsOdd)) {
                iterationProgress = 1 - iterationProgress;
            }
            const p = t >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
            const latest = interpolate$1(this.easing(p));
            output(latest);
            const isAnimationFinished = this.pauseTime === undefined &&
                (this.playState === "finished" || t >= this.totalDuration + endDelay);
            if (isAnimationFinished) {
                this.playState = "finished";
                (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
            }
            else if (this.playState !== "idle") {
                this.frameRequestId = requestAnimationFrame(this.tick);
            }
        };
        this.play();
    }
    play() {
        const now = performance.now();
        this.playState = "running";
        if (this.pauseTime !== undefined) {
            this.startTime = now - this.pauseTime;
        }
        else if (!this.startTime) {
            this.startTime = now;
        }
        this.cancelTimestamp = this.startTime;
        this.pauseTime = undefined;
        this.frameRequestId = requestAnimationFrame(this.tick);
    }
    pause() {
        this.playState = "paused";
        this.pauseTime = this.t;
    }
    finish() {
        this.playState = "finished";
        this.tick(0);
    }
    stop() {
        var _a;
        this.playState = "idle";
        if (this.frameRequestId !== undefined) {
            cancelAnimationFrame(this.frameRequestId);
        }
        (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
    }
    cancel() {
        this.stop();
        this.tick(this.cancelTimestamp);
    }
    reverse() {
        this.rate *= -1;
    }
    commitStyles() { }
    updateDuration(duration) {
        this.duration = duration;
        this.totalDuration = duration * (this.repeat + 1);
    }
    get currentTime() {
        return this.t;
    }
    set currentTime(t) {
        if (this.pauseTime !== undefined || this.rate === 0) {
            this.pauseTime = t;
        }
        else {
            this.startTime = performance.now() - t / this.rate;
        }
    }
    get playbackRate() {
        return this.rate;
    }
    set playbackRate(rate) {
        this.rate = rate;
    }
}



// EXTERNAL MODULE: ./node_modules/hey-listen/dist/hey-listen.es.js
var hey_listen_es = __webpack_require__(24394);
;// CONCATENATED MODULE: ./node_modules/@motionone/types/dist/MotionValue.es.js
/**
 * The MotionValue tracks the state of a single animatable
 * value. Currently, updatedAt and current are unused. The
 * long term idea is to use this to minimise the number
 * of DOM reads, and to abstract the DOM interactions here.
 */
class MotionValue {
    setAnimation(animation) {
        this.animation = animation;
        animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => { });
    }
    clearAnimation() {
        this.animation = this.generator = undefined;
    }
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/data.es.js


const data = new WeakMap();
function getAnimationData(element) {
    if (!data.has(element)) {
        data.set(element, {
            transforms: [],
            values: new Map(),
        });
    }
    return data.get(element);
}
function getMotionValue(motionValues, name) {
    if (!motionValues.has(name)) {
        motionValues.set(name, new MotionValue());
    }
    return motionValues.get(name);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/array.es.js
function addUniqueItem(array, item) {
    array.indexOf(item) === -1 && array.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/transforms.es.js



/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
const axes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
};
const rotation = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (v) => v + "deg",
};
const baseTransformProperties = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (v) => v + "px",
    },
    rotate: rotation,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: noopReturn,
    },
    skew: rotation,
};
const transformDefinitions = new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
/**
 * Generate a list of every possible transform key
 */
const transforms = ["x", "y", "z"];
order.forEach((name) => {
    axes.forEach((axis) => {
        transforms.push(name + axis);
        transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
const compareTransformOrder = (a, b) => transforms.indexOf(a) - transforms.indexOf(b);
/**
 * Provide a quick way to check if a string is the name of a transform
 */
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
    // Map x to translateX etc
    if (transformAlias[name])
        name = transformAlias[name];
    const { transforms } = getAnimationData(element);
    addUniqueItem(transforms, name);
    /**
     * TODO: An optimisation here could be to cache the transform in element data
     * and only update if this has changed.
     */
    element.style.transform = buildTransformTemplate(transforms);
};
const buildTransformTemplate = (transforms) => transforms
    .sort(compareTransformOrder)
    .reduce(transformListToString, "")
    .trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/css-var.es.js


const isCssVar = (name) => name.startsWith("--");
const registeredProperties = new Set();
function registerCssVariable(name) {
    if (registeredProperties.has(name))
        return;
    registeredProperties.add(name);
    try {
        const { syntax, initialValue } = transformDefinitions.has(name)
            ? transformDefinitions.get(name)
            : {};
        CSS.registerProperty({
            name,
            inherits: false,
            syntax,
            initialValue,
        });
    }
    catch (e) { }
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/feature-detection.es.js
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
    cssRegisterProperty: () => typeof CSS !== "undefined" &&
        Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            testAnimation({ opacity: [1] });
        }
        catch (e) {
            return false;
        }
        return true;
    },
    finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished),
    linearEasing: () => {
        try {
            testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
        }
        catch (e) {
            return false;
        }
        return true;
    },
};
const results = {};
const supports = {};
for (const key in featureTests) {
    supports[key] = () => {
        if (results[key] === undefined)
            results[key] = featureTests[key]();
        return results[key];
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/easing.es.js



// Create a linear easing point for every x second
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
    let points = "";
    const numPoints = Math.round(duration / resolution);
    for (let i = 0; i < numPoints; i++) {
        points += easing(progress(0, numPoints - 1, i)) + ", ";
    }
    return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
    if (isFunction(easing)) {
        return supports.linearEasing()
            ? `linear(${generateLinearEasingPoints(easing, duration)})`
            : defaults.easing;
    }
    else {
        return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
    }
};
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/keyframes.es.js
function hydrateKeyframes(keyframes, readInitialValue) {
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] === null) {
            keyframes[i] = i ? keyframes[i - 1] : readInitialValue();
        }
    }
    return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/get-style-name.es.js


function getStyleName(key) {
    if (transformAlias[key])
        key = transformAlias[key];
    return isTransform(key) ? asTransformCssVar(key) : key;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/style.es.js




const style = {
    get: (element, name) => {
        name = getStyleName(name);
        let value = isCssVar(name)
            ? element.style.getPropertyValue(name)
            : getComputedStyle(element)[name];
        if (!value && value !== 0) {
            const definition = transformDefinitions.get(name);
            if (definition)
                value = definition.initialValue;
        }
        return value;
    },
    set: (element, name, value) => {
        name = getStyleName(name);
        if (isCssVar(name)) {
            element.style.setProperty(name, value);
        }
        else {
            element.style[name] = value;
        }
    },
};



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/is-string.es.js
const isString = (value) => typeof value === "string";



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/get-unit.es.js


function getUnitConverter(keyframes, definition) {
    var _a;
    let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
    const finalKeyframe = keyframes[keyframes.length - 1];
    if (isString(finalKeyframe)) {
        const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
        if (unit)
            toUnit = (value) => value + unit;
    }
    return toUnit;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/animate-style.es.js












function getDevToolsRecord() {
    return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
    const record = getDevToolsRecord();
    const isRecording = options.record !== false && record;
    let animation;
    let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, } = options;
    const data = getAnimationData(element);
    const valueIsTransform = isTransform(key);
    let canAnimateNatively = supports.waapi();
    /**
     * If this is an individual transform, we need to map its
     * key to a CSS variable and update the element's transform style
     */
    valueIsTransform && addTransformToElement(element, key);
    const name = getStyleName(key);
    const motionValue = getMotionValue(data.values, name);
    /**
     * Get definition of value, this will be used to convert numerical
     * keyframes into the default value type.
     */
    const definition = transformDefinitions.get(name);
    /**
     * Stop the current animation, if any. Because this will trigger
     * commitStyles (DOM writes) and we might later trigger DOM reads,
     * this is fired now and we return a factory function to create
     * the actual animation that can get called in batch,
     */
    stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) &&
        options.record !== false);
    /**
     * Batchable factory function containing all DOM reads.
     */
    return () => {
        const readInitialValue = () => { var _a, _b; return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0; };
        /**
         * Replace null values with the previous keyframe value, or read
         * it from the DOM if it's the first keyframe.
         */
        let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
        /**
         * Detect unit type of keyframes.
         */
        const toUnit = getUnitConverter(keyframes, definition);
        if (isEasingGenerator(easing)) {
            const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
            easing = custom.easing;
            keyframes = custom.keyframes || keyframes;
            duration = custom.duration || duration;
        }
        /**
         * If this is a CSS variable we need to register it with the browser
         * before it can be animated natively. We also set it with setProperty
         * rather than directly onto the element.style object.
         */
        if (isCssVar(name)) {
            if (supports.cssRegisterProperty()) {
                registerCssVariable(name);
            }
            else {
                canAnimateNatively = false;
            }
        }
        /**
         * If we've been passed a custom easing function, and this browser
         * does **not** support linear() easing, and the value is a transform
         * (and thus a pure number) we can still support the custom easing
         * by falling back to the animation polyfill.
         */
        if (valueIsTransform &&
            !supports.linearEasing() &&
            (isFunction(easing) || (isEasingList(easing) && easing.some(isFunction)))) {
            canAnimateNatively = false;
        }
        /**
         * If we can animate this value with WAAPI, do so.
         */
        if (canAnimateNatively) {
            /**
             * Convert numbers to default value types. Currently this only supports
             * transforms but it could also support other value types.
             */
            if (definition) {
                keyframes = keyframes.map((value) => is_number_es_isNumber(value) ? definition.toDefaultUnit(value) : value);
            }
            /**
             * If this browser doesn't support partial/implicit keyframes we need to
             * explicitly provide one.
             */
            if (keyframes.length === 1 &&
                (!supports.partialKeyframes() || isRecording)) {
                keyframes.unshift(readInitialValue());
            }
            const animationOptions = {
                delay: time.ms(delay),
                duration: time.ms(duration),
                endDelay: time.ms(endDelay),
                easing: !isEasingList(easing)
                    ? convertEasing(easing, duration)
                    : undefined,
                direction,
                iterations: repeat + 1,
                fill: "both",
            };
            animation = element.animate({
                [name]: keyframes,
                offset,
                easing: isEasingList(easing)
                    ? easing.map((thisEasing) => convertEasing(thisEasing, duration))
                    : undefined,
            }, animationOptions);
            /**
             * Polyfill finished Promise in browsers that don't support it
             */
            if (!animation.finished) {
                animation.finished = new Promise((resolve, reject) => {
                    animation.onfinish = resolve;
                    animation.oncancel = reject;
                });
            }
            const target = keyframes[keyframes.length - 1];
            animation.finished
                .then(() => {
                if (persist)
                    return;
                // Apply styles to target
                style.set(element, name, target);
                // Ensure fill modes don't persist
                animation.cancel();
            })
                .catch(noop);
            /**
             * This forces Webkit to run animations on the main thread by exploiting
             * this condition:
             * https://trac.webkit.org/browser/webkit/trunk/Source/WebCore/platform/graphics/ca/GraphicsLayerCA.cpp?rev=281238#L1099
             *
             * This fixes Webkit's timing bugs, like accelerated animations falling
             * out of sync with main thread animations and massive delays in starting
             * accelerated animations in WKWebView.
             */
            if (!allowWebkitAcceleration)
                animation.playbackRate = 1.000001;
            /**
             * If we can't animate the value natively then we can fallback to the numbers-only
             * polyfill for transforms.
             */
        }
        else if (AnimationPolyfill && valueIsTransform) {
            /**
             * If any keyframe is a string (because we measured it from the DOM), we need to convert
             * it into a number before passing to the Animation polyfill.
             */
            keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
            /**
             * If we only have a single keyframe, we need to create an initial keyframe by reading
             * the current value from the DOM.
             */
            if (keyframes.length === 1) {
                keyframes.unshift(parseFloat(readInitialValue()));
            }
            animation = new AnimationPolyfill((latest) => {
                style.set(element, name, toUnit ? toUnit(latest) : latest);
            }, keyframes, Object.assign(Object.assign({}, options), { duration,
                easing }));
        }
        else {
            const target = keyframes[keyframes.length - 1];
            style.set(element, name, definition && is_number_es_isNumber(target)
                ? definition.toDefaultUnit(target)
                : target);
        }
        if (isRecording) {
            record(element, key, keyframes, {
                duration,
                delay: delay,
                easing,
                repeat,
                offset,
            }, "motion-one");
        }
        motionValue.setAnimation(animation);
        return animation;
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/utils/options.es.js
const getOptions = (options, key) => 
/**
 * TODO: Make test for this
 * Always return a new object otherwise delay is overwritten by results of stagger
 * and this results in no stagger
 */
options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options);



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = document.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = document.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/utils/stagger.es.js



function stagger(duration = 0.1, { start = 0, from = 0, easing } = {}) {
    return (i, total) => {
        const fromIndex = isNumber(from) ? from : getFromIndex(from, total);
        const distance = Math.abs(fromIndex - i);
        let delay = duration * distance;
        if (easing) {
            const maxDelay = total * duration;
            const easingFunction = getEasingFunction(easing);
            delay = easingFunction(delay / maxDelay) * maxDelay;
        }
        return start + delay;
    };
}
function getFromIndex(from, total) {
    if (from === "first") {
        return 0;
    }
    else {
        const lastIndex = total - 1;
        return from === "last" ? lastIndex : lastIndex / 2;
    }
}
function resolveOption(option, i, total) {
    return isFunction(option) ? option(i, total) : option;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/create-animate.es.js







function createAnimate(AnimatePolyfill) {
    return function animate(elements, keyframes, options = {}) {
        elements = resolveElements(elements);
        const numElements = elements.length;
        (0,hey_listen_es/* invariant */.k)(Boolean(numElements), "No valid element provided.");
        (0,hey_listen_es/* invariant */.k)(Boolean(keyframes), "No keyframes defined.");
        /**
         * Create and start new animations
         */
        const animationFactories = [];
        for (let i = 0; i < numElements; i++) {
            const element = elements[i];
            for (const key in keyframes) {
                const valueOptions = getOptions(options, key);
                valueOptions.delay = resolveOption(valueOptions.delay, i, numElements);
                const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
                animationFactories.push(animation);
            }
        }
        return withControls(animationFactories, options, 
        /**
         * TODO:
         * If easing is set to spring or glide, duration will be dynamically
         * generated. Ideally we would dynamically generate this from
         * animation.effect.getComputedTiming().duration but this isn't
         * supported in iOS13 or our number polyfill. Perhaps it's possible
         * to Proxy animations returned from animateStyle that has duration
         * as a getter.
         */
        options.duration);
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/animate/index.es.js



const animate = createAnimate(Animation);



;// CONCATENATED MODULE: ./node_modules/motion/dist/animate.es.js




function animateProgress(target, options = {}) {
    return withControls([
        () => {
            const animation = new Animation(target, [0, 1], options);
            animation.finished.catch(() => { });
            return animation;
        },
    ], options, options.duration);
}
function animate_es_animate(target, keyframesOrOptions, options) {
    const factory = isFunction(target) ? animateProgress : animate;
    return factory(target, keyframesOrOptions, options);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/spring/defaults.es.js
const defaults_es_defaults = {
    stiffness: 100.0,
    damping: 10.0,
    mass: 1.0,
};



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/spring/utils.es.js


const calcDampingRatio = (stiffness = defaults_es_defaults.stiffness, damping = defaults_es_defaults.damping, mass = defaults_es_defaults.mass) => damping / (2 * Math.sqrt(stiffness * mass));



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/utils/has-reached-target.es.js
function hasReachedTarget(origin, target, current) {
    return ((origin < target && current >= target) ||
        (origin > target && current <= target));
}



;// CONCATENATED MODULE: ./node_modules/@motionone/utils/dist/velocity.es.js
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/utils/velocity.es.js


const sampleT = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - sampleT, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/spring/index.es.js






const spring = ({ stiffness = defaults_es_defaults.stiffness, damping = defaults_es_defaults.damping, mass = defaults_es_defaults.mass, from = 0, to = 1, velocity = 0.0, restSpeed = 2, restDistance = 0.5, } = {}) => {
    velocity = velocity ? time.s(velocity) : 0.0;
    const state = {
        done: false,
        hasReachedTarget: false,
        current: from,
        target: to,
    };
    const initialDelta = to - from;
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
    const dampingRatio = calcDampingRatio(stiffness, damping, mass);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = undampedAngularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
        // Underdamped spring (bouncy)
        resolveSpring = (t) => to -
            Math.exp(-dampingRatio * undampedAngularFreq * t) *
                (((-velocity + dampingRatio * undampedAngularFreq * initialDelta) /
                    angularFreq) *
                    Math.sin(angularFreq * t) +
                    initialDelta * Math.cos(angularFreq * t));
    }
    else {
        // Critically damped spring
        resolveSpring = (t) => {
            return (to -
                Math.exp(-undampedAngularFreq * t) *
                    (initialDelta + (-velocity + undampedAngularFreq * initialDelta) * t));
        };
    }
    return (t) => {
        state.current = resolveSpring(t);
        const currentVelocity = t === 0
            ? velocity
            : calcGeneratorVelocity(resolveSpring, t, state.current);
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - state.current) <= restDistance;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        state.hasReachedTarget = hasReachedTarget(from, to, state.current);
        return state;
    };
};



;// CONCATENATED MODULE: ./node_modules/@motionone/generators/dist/utils/pregenerate-keyframes.es.js


const timeStep = 10;
const maxDuration = 10000;
function pregenerateKeyframes(generator, toUnit = noopReturn) {
    let overshootDuration = undefined;
    let timestamp = timeStep;
    let state = generator(0);
    const keyframes = [toUnit(state.current)];
    while (!state.done && timestamp < maxDuration) {
        state = generator(timestamp);
        keyframes.push(toUnit(state.done ? state.target : state.current));
        if (overshootDuration === undefined && state.hasReachedTarget) {
            overshootDuration = timestamp;
        }
        timestamp += timeStep;
    }
    const duration = timestamp - timeStep;
    /**
     * If generating an animation that didn't actually move,
     * generate a second keyframe so we have an origin and target.
     */
    if (keyframes.length === 1)
        keyframes.push(state.current);
    return {
        keyframes,
        duration: duration / 1000,
        overshootDuration: (overshootDuration !== null && overshootDuration !== void 0 ? overshootDuration : duration) / 1000,
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/easing/create-generator-easing.es.js






function canGenerate(value) {
    return is_number_es_isNumber(value) && !isNaN(value);
}
function getAsNumber(value) {
    return isString(value) ? parseFloat(value) : value;
}
function createGeneratorEasing(createGenerator) {
    const keyframesCache = new WeakMap();
    return (options = {}) => {
        const generatorCache = new Map();
        const getGenerator = (from = 0, to = 100, velocity = 0, isScale = false) => {
            const key = `${from}-${to}-${velocity}-${isScale}`;
            if (!generatorCache.has(key)) {
                generatorCache.set(key, createGenerator(Object.assign({ from,
                    to,
                    velocity, restSpeed: isScale ? 0.05 : 2, restDistance: isScale ? 0.01 : 0.5 }, options)));
            }
            return generatorCache.get(key);
        };
        const getKeyframes = (generator, toUnit) => {
            if (!keyframesCache.has(generator)) {
                keyframesCache.set(generator, pregenerateKeyframes(generator, toUnit));
            }
            return keyframesCache.get(generator);
        };
        return {
            createAnimation: (keyframes, shouldGenerate = true, getOrigin, name, motionValue) => {
                let settings;
                let origin;
                let target;
                let velocity = 0;
                let toUnit = noopReturn;
                const numKeyframes = keyframes.length;
                /**
                 * If we should generate an animation for this value, run some preperation
                 * like resolving target/origin, finding a unit (if any) and determine if
                 * it is actually possible to generate.
                 */
                if (shouldGenerate) {
                    toUnit = getUnitConverter(keyframes, name ? transformDefinitions.get(getStyleName(name)) : undefined);
                    const targetDefinition = keyframes[numKeyframes - 1];
                    target = getAsNumber(targetDefinition);
                    if (numKeyframes > 1 && keyframes[0] !== null) {
                        /**
                         * If we have multiple keyframes, take the initial keyframe as the origin.
                         */
                        origin = getAsNumber(keyframes[0]);
                    }
                    else {
                        const prevGenerator = motionValue === null || motionValue === void 0 ? void 0 : motionValue.generator;
                        /**
                         * If we have an existing generator for this value we can use it to resolve
                         * the animation's current value and velocity.
                         */
                        if (prevGenerator) {
                            /**
                             * If we have a generator for this value we can use it to resolve
                             * the animations's current value and velocity.
                             */
                            const { animation, generatorStartTime } = motionValue;
                            const startTime = (animation === null || animation === void 0 ? void 0 : animation.startTime) || generatorStartTime || 0;
                            const currentTime = (animation === null || animation === void 0 ? void 0 : animation.currentTime) || performance.now() - startTime;
                            const prevGeneratorCurrent = prevGenerator(currentTime).current;
                            origin = prevGeneratorCurrent;
                            velocity = calcGeneratorVelocity((t) => prevGenerator(t).current, currentTime, prevGeneratorCurrent);
                        }
                        else if (getOrigin) {
                            /**
                             * As a last resort, read the origin from the DOM.
                             */
                            origin = getAsNumber(getOrigin());
                        }
                    }
                }
                /**
                 * If we've determined it is possible to generate an animation, do so.
                 */
                if (canGenerate(origin) && canGenerate(target)) {
                    const generator = getGenerator(origin, target, velocity, name === null || name === void 0 ? void 0 : name.includes("scale"));
                    settings = Object.assign(Object.assign({}, getKeyframes(generator, toUnit)), { easing: "linear" });
                    // TODO Add test for this
                    if (motionValue) {
                        motionValue.generator = generator;
                        motionValue.generatorStartTime = performance.now();
                    }
                }
                /**
                 * If by now we haven't generated a set of keyframes, create a generic generator
                 * based on the provided props that animates from 0-100 to fetch a rough
                 * "overshootDuration" - the moment when the generator first hits the animation target.
                 * Then return animation settings that will run a normal animation for that duration.
                 */
                if (!settings) {
                    const keyframesMetadata = getKeyframes(getGenerator(0, 100));
                    settings = {
                        easing: "ease",
                        duration: keyframesMetadata.overshootDuration,
                    };
                }
                return settings;
            },
        };
    };
}



;// CONCATENATED MODULE: ./node_modules/@motionone/dom/dist/easing/spring/index.es.js



const index_es_spring = createGeneratorEasing(spring);



;// CONCATENATED MODULE: ./node_modules/lit-html/node/directives/if-defined.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const if_defined_l=l=>null!=l?l:b;
//# sourceMappingURL=if-defined.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/if-defined.js

//# sourceMappingURL=if-defined.js.map

// EXTERNAL MODULE: ./node_modules/qrcode/lib/index.js
var lib = __webpack_require__(94734);
;// CONCATENATED MODULE: ./node_modules/@web3modal/ui/dist/index.js
var It=Object.defineProperty,st=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,ct=(e,t,a)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,dt=(e,t)=>{for(var a in t||(t={}))Et.call(t,a)&&ct(e,a,t[a]);if(st)for(var a of st(t))Mt.call(t,a)&&ct(e,a,t[a]);return e};function ht(){return{default:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(51,150,255)",background:"rgb(232,242,252)"},dark:{inverse:"rgb(255,255,255)",foreground:"rgb(71,161,255)",background:"rgb(21,38,55)"}},magenta:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(198,83,128)",background:"rgb(244,221,230)"},dark:{inverse:"rgb(255,255,255)",foreground:"rgb(203,77,140)",background:"rgb(57,35,43)"}},blue:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(61,92,245)",background:"rgb(232,235,252)"},dark:{inverse:"rgb(255,255,255)",foreground:"rgb(81,109,251)",background:"rgb(28,33,59)"}},orange:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(234,140,46)",background:"rgb(244,236,221)"},dark:{inverse:"rgb(0,0,0)",foreground:"rgb(255,166,76)",background:"rgb(57,50,34)"}},green:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(38,181,98)",background:"rgb(218,246,218)"},dark:{inverse:"rgb(0,0,0)",foreground:"rgb(38,217,98)",background:"rgb(35,52,40)"}},purple:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(121,76,255)",background:"rgb(225,218,246)"},dark:{inverse:"rgb(255,255,255)",foreground:"rgb(144,110,247)",background:"rgb(36,31,51)"}},teal:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(43,182,182)",background:"rgb(217,242,238)"},dark:{inverse:"rgb(0,0,0)",foreground:"rgb(54,226,226)",background:"rgb(29,48,52)"}},blackWhite:{light:{inverse:"rgb(255,255,255)",foreground:"rgb(20,20,20)",background:"rgb(255,255,255)"},dark:{inverse:"rgb(0,0,0)",foreground:"rgb(255,255,255)",background:"rgb(20,20,20)"}}}}function Wt(){return{light:{foreground:{1:"rgb(20,20,20)",2:"rgb(121,134,134)",3:"rgb(158,169,169)"},background:{1:"rgb(255,255,255)",2:"rgb(241,243,243)",3:"rgb(228,231,231)"},overlay:"rgba(0,0,0,0.1)"},dark:{foreground:{1:"rgb(228,231,231)",2:"rgb(148,158,158)",3:"rgb(110,119,119)"},background:{1:"rgb(20,20,20)",2:"rgb(39,42,42)",3:"rgb(59,64,64)"},overlay:"rgba(255,255,255,0.1"}}}function At(){return{default:{1:"#B6B9C9",2:"#C653C6",3:"#794DFF",4:"#2EB8B8"},blue:{1:"#E8EBFD",2:"#C653C6",3:"#2DD2C5",4:"#3D5CF5"},magenta:{1:"#F4DDE6",2:"#E0D452",3:"#F09475",4:"#D1618D"},orange:{1:"#F4ECDD",2:"#B4EB47",3:"#3075E8",4:"#EB9947"},green:{1:"#DAF6DA",2:"#E06B92",3:"#99E54D",4:"#26B562"},purple:{1:"#E1DAF6",2:"#EB9947",3:"#E06B92",4:"#794DFF"},teal:{1:"#D9F2EE",2:"#F09475",3:"#794DFF",4:"#2EB8B8"},blackWhite:{1:"#E3E8E8",2:"#98AEAE",3:"#516767",4:"#242E2E"}}}const dist_u={color(){var e,t;const a=(e=dist/* ConfigCtrl.state.themeColor */.t0.state.themeColor)!=null?e:"default",n=(t=dist/* ConfigCtrl.state.themeMode */.t0.state.themeMode)!=null?t:"dark",o=ht()[a][n],r=Wt()[n],i=At()[a];return{foreground:dt({accent:o.foreground,inverse:o.inverse},r.foreground),background:dt({accent:o.background},r.background),gradient:i,overlay:r.overlay,error:"rgb(242, 90, 103)"}},setTheme(){const e=document.querySelector(":root"),{themeZIndex:t}=dist/* ConfigCtrl.state */.t0.state;if(e){const a={"--w3m-color-fg-accent":dist_u.color().foreground.accent,"--w3m-color-fg-inverse":dist_u.color().foreground.inverse,"--w3m-color-fg-1":dist_u.color().foreground[1],"--w3m-color-fg-2":dist_u.color().foreground[2],"--w3m-color-fg-3":dist_u.color().foreground[3],"--w3m-color-bg-1":dist_u.color().background[1],"--w3m-color-bg-2":dist_u.color().background[2],"--w3m-color-bg-3":dist_u.color().background[3],"--w3m-color-overlay":dist_u.color().overlay,"--w3m-color-err":dist_u.color().error,"--w3m-color-success":ht().green.light.foreground,"--w3m-gradient-1":dist_u.color().gradient[1],"--w3m-gradient-2":dist_u.color().gradient[2],"--w3m-gradient-3":dist_u.color().gradient[3],"--w3m-gradient-4":dist_u.color().gradient[4],"--w3m-modal-z-index":`${t}`};Object.entries(a).forEach(([n,o])=>e.style.setProperty(n,o))}},globalCss:i`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent}button::after{content:'';position:absolute;inset:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-color-fg-inverse);background:var(--w3m-color-fg-accent)}`},Lt=i`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-fg-accent);border-radius:50%;margin-bottom:4px}button path{fill:var(--w3m-color-fg-inverse)}`;var jt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,ke=(e,t,a,n)=>{for(var o=n>1?void 0:n?St(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&jt(t,a,o),o};let te=class extends lit_element_s{constructor(){super(...arguments),this.icon=void 0,this.label="",this.onClick=()=>null}render(){return y`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`}};te.styles=[dist_u.globalCss,Lt],ke([property_e()],te.prototype,"icon",2),ke([property_e()],te.prototype,"label",2),ke([property_e()],te.prototype,"onClick",2),te=ke([custom_element_e("w3m-box-button")],te);const Pt=i`button{border-radius:28px;height:28px;padding:0 10px;background-color:var(--w3m-color-fg-accent)}button path{fill:var(--w3m-color-fg-inverse)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{background-color:var(--w3m-color-bg-3)}`;var _t=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,le=(e,t,a,n)=>{for(var o=n>1?void 0:n?Dt(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&_t(t,a,o),o};let G=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.iconLeft=void 0,this.iconRight=void 0,this.onClick=()=>null}render(){const e={"w3m-icon-left":this.iconLeft!==void 0,"w3m-icon-right":this.iconRight!==void 0};return y`<button class="${class_map_o(e)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<w3m-text variant="small-normal" color="inverse"><slot></slot></w3m-text>${this.iconRight}</button>`}};G.styles=[dist_u.globalCss,Pt],le([property_e()],G.prototype,"disabled",2),le([property_e()],G.prototype,"iconLeft",2),le([property_e()],G.prototype,"iconRight",2),le([property_e()],G.prototype,"onClick",2),G=le([custom_element_e("w3m-button")],G);const Tt=i`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-color-fg-accent);background-color:transparent}.w3m-secondary::after{display:none}`;var Nt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Te=(e,t,a,n)=>{for(var o=n>1?void 0:n?Rt(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Nt(t,a,o),o};let se=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.variant="primary"}render(){const e={"w3m-secondary":this.variant==="secondary"};return y`<button ?disabled="${this.disabled}" class="${class_map_o(e)}"><slot></slot></button>`}};se.styles=[dist_u.globalCss,Tt],Te([property_e()],se.prototype,"disabled",2),Te([property_e()],se.prototype,"variant",2),se=Te([custom_element_e("w3m-button-big")],se);let Bt=class{constructor(...t){this.angle=0,this.t=1253106,this.last=0,this.height=500,this.amp=300,this.seed=15,this.freqX=14e-5,this.freqY=29e-5,this.freqDelta=1e-5,this.activeColors=[1,1,1,1],this.isMetaKey=!1,this.playing=!1,mt(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<550?5:6}),mt(this,"animate",a=>{if(this.playing){if(this.shouldSkipFrame(a)||(this.t+=Math.min(a-this.last,1e3/15),this.last=a,this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()),this.last!==0&&this.isStatic)return this.minigl.render();requestAnimationFrame(this.animate)}})}play(t){this.el=t,this.connect()}stop(){this.playing=!1}async connect(){this.shaderFiles={vertex:"varying vec3 v_color;void main(){float time=u_time*u_global.noiseSpeed;vec2 noiseCoord=resolution*uvNorm*u_global.noiseFreq;vec2 st=1.-uvNorm.xy;float tilt=resolution.y/2.0*uvNorm.y;float incline=resolution.x*uvNorm.x/2.0*u_vertDeform.incline;float offset=resolution.x/2.0*u_vertDeform.incline*mix(u_vertDeform.offsetBottom,u_vertDeform.offsetTop,uv.y);float noise=snoise(vec3(noiseCoord.x*u_vertDeform.noiseFreq.x+time*u_vertDeform.noiseFlow,noiseCoord.y*u_vertDeform.noiseFreq.y,time*u_vertDeform.noiseSpeed+u_vertDeform.noiseSeed))*u_vertDeform.noiseAmp;noise*=1.0-pow(abs(uvNorm.y),2.0);noise=max(0.0,noise);vec3 pos=vec3(position.x,position.y+tilt+incline+noise-offset,position.z);if(u_active_colors[0]==1.){v_color=u_baseColor;}for(int i=0;i<u_waveLayers_length;i++){if(u_active_colors[i+1]==1.){WaveLayers layer=u_waveLayers[i];float noise=smoothstep(layer.noiseFloor,layer.noiseCeil,snoise(vec3(noiseCoord.x*layer.noiseFreq.x+time*layer.noiseFlow,noiseCoord.y*layer.noiseFreq.y,time*layer.noiseSpeed+layer.noiseSeed))/2.0+0.5);v_color=blendNormal(v_color,layer.color,pow(noise,4.));}}gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}",noise:`
// MIT License: Copyright (C) 2011 Ashima Arts. All rights reserved. https://github.com/ashima/webgl-noise, https://github.com/stegu/webgl-noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`,blend:`
// MIT Licence: Copyright (C) 2015 Jamie Owen. All rights reserved. https://github.com/jamieowen/glsl-blend
vec3 blendNormal(vec3 base, vec3 blend){return blend;}vec3 blendNormal(vec3 base,vec3 blend,float opacity){return (blendNormal(base,blend)*opacity+base*(1.0-opacity));}float blendScreen(float base,float blend){return 1.0-((1.0-base)*(1.0-blend));}vec3 blendScreen(vec3 base,vec3 blend){return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));}vec3 blendScreen(vec3 base,vec3 blend,float opacity){return (blendScreen(base, blend)*opacity+base*(1.0-opacity));}vec3 blendMultiply(vec3 base,vec3 blend){return base*blend;}vec3 blendMultiply(vec3 base,vec3 blend,float opacity){return (blendMultiply(base,blend)*opacity+base*(1.0-opacity));}float blendOverlay(float base,float blend){return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));}vec3 blendOverlay(vec3 base,vec3 blend){return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));}vec3 blendOverlay(vec3 base,vec3 blend,float opacity){return (blendOverlay(base,blend)*opacity+base*(1.0-opacity));}vec3 blendHardLight(vec3 base,vec3 blend){return blendOverlay(blend,base);}vec3 blendHardLight(vec3 base,vec3 blend,float opacity){return (blendHardLight(base,blend)*opacity+base*(1.0-opacity));}float blendSoftLight(float base,float blend){return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));}vec3 blendSoftLight(vec3 base,vec3 blend){return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));}vec3 blendSoftLight(vec3 base,vec3 blend,float opacity){return (blendSoftLight(base,blend)*opacity+base*(1.0-opacity));}float blendColorDodge(float base,float blend){return (blend==1.0)?blend:min(base/(1.0-blend),1.0);}vec3 blendColorDodge(vec3 base,vec3 blend){return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));}vec3 blendColorDodge(vec3 base,vec3 blend,float opacity){return (blendColorDodge(base, blend)*opacity+base*(1.0-opacity));}float blendColorBurn(float base,float blend){return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);}vec3 blendColorBurn(vec3 base,vec3 blend){return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));}vec3 blendColorBurn(vec3 base,vec3 blend,float opacity){return (blendColorBurn(base, blend)*opacity+base*(1.0-opacity));}float blendVividLight(float base,float blend){return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));}vec3 blendVividLight(vec3 base,vec3 blend){return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));}vec3 blendVividLight(vec3 base,vec3 blend,float opacity){return (blendVividLight(base,blend)*opacity+base*(1.0-opacity));}float blendLighten(float base,float blend){return max(blend,base);}vec3 blendLighten(vec3 base,vec3 blend){return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));}vec3 blendLighten(vec3 base,vec3 blend,float opacity){return (blendLighten(base,blend)*opacity+base*(1.0-opacity));}float blendLinearBurn(float base,float blend){return max(base+blend-1.0,0.0);}vec3 blendLinearBurn(vec3 base,vec3 blend){return max(base+blend-vec3(1.0),vec3(0.0));}vec3 blendLinearBurn(vec3 base,vec3 blend,float opacity){return (blendLinearBurn(base, blend)*opacity+base*(1.0-opacity));}float blendLinearDodge(float base,float blend){return min(base+blend,1.0);}vec3 blendLinearDodge(vec3 base,vec3 blend){return min(base+blend,vec3(1.0));}vec3 blendLinearDodge(vec3 base,vec3 blend,float opacity){return (blendLinearDodge(base,blend)*opacity+base*(1.0-opacity));}float blendLinearLight(float base,float blend){return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));}vec3 blendLinearLight(vec3 base,vec3 blend){return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));}vec3 blendLinearLight(vec3 base,vec3 blend,float opacity){return (blendLinearLight(base,blend)*opacity+base*(1.0-opacity));}`,fragment:"varying vec3 v_color;void main(){vec3 color=v_color;if(u_darken_top==1.0){vec2 st=gl_FragCoord.xy/resolution.xy;color.g-=pow(st.y+sin(-12.0)*st.x,u_shadow_power)*0.4;}gl_FragColor=vec4(color,1.0);}"},this.conf={density:[.06,.16]},this.minigl=new Ht(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())})}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let t=1;t<this.sectionColors.length;t+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[t],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+t/this.sectionColors.length,3+t/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*t}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*t}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*t}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*t})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(""),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(t){return!!window.document.hidden||parseInt(t,10)%2==0||void 0}updateFrequency(t){this.freqX+=t,this.freqY+=t}toggleColor(t){this.activeColors[t]=this.activeColors[t]===0?1:0}init(){this.playing=!0,this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate)}waitForCssVars(){this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--w3m-gradient-1").indexOf("#")!==-1?this.init():this.init()}initGradientColors(){this.sectionColors=["--w3m-gradient-1","--w3m-gradient-2","--w3m-gradient-3","--w3m-gradient-4"].map(t=>{let a=this.computedCanvasStyle.getPropertyValue(t).trim();return a.length===4&&(a=`#${a.substr(1).split("").map(n=>n+n).join("")}`),a&&`0x${a.substr(1)}`}).filter(Boolean).map(Ut)}};function Ut(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}function mt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let Ht=class{constructor(t,a,n){const o=this;o.canvas=t,o.gl=o.canvas.getContext("webgl",{antialias:!0}),o.meshes=[];const r=o.gl;a&&n&&this.setSize(a,n),Object.defineProperties(o,{Material:{enumerable:!1,value:class{constructor(c,m,s={}){const d=this;function v(N,E){const x=r.createShader(N);return r.shaderSource(x,E),r.compileShader(x),r.getShaderParameter(x,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(x)),x}function O(N,E){return Object.entries(N).map(([x,A])=>A.getDeclaration(x,E)).join("")}d.uniforms=s,d.uniformInstances=[];const C="precision highp float;";d.vertexSource=`${C} attribute vec4 position;attribute vec2 uv;attribute vec2 uvNorm;${O(o.commonUniforms,"vertex")} ${O(s,"vertex")} ${c}`,d.Source=`${C} ${O(o.commonUniforms,"fragment")} ${O(s,"fragment")} ${m} `,d.vertexShader=v(r.VERTEX_SHADER,d.vertexSource),d.fragmentShader=v(r.FRAGMENT_SHADER,d.Source),d.program=r.createProgram(),r.attachShader(d.program,d.vertexShader),r.attachShader(d.program,d.fragmentShader),r.linkProgram(d.program),r.getProgramParameter(d.program,r.LINK_STATUS)||console.error(r.getProgramInfoLog(d.program)),r.useProgram(d.program),d.attachUniforms(void 0,o.commonUniforms),d.attachUniforms(void 0,d.uniforms)}attachUniforms(c,m){const s=this;c===void 0?Object.entries(m).forEach(([d,v])=>{s.attachUniforms(d,v)}):m.type=="array"?m.value.forEach((d,v)=>s.attachUniforms(`${c}[${v}]`,d)):m.type=="struct"?Object.entries(m.value).forEach(([d,v])=>s.attachUniforms(`${c}.${d}`,v)):s.uniformInstances.push({uniform:m,location:r.getUniformLocation(s.program,c)})}}},Uniform:{enumerable:!1,value:class{constructor(c){this.type="float",Object.assign(this,c),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(c){this.value!==void 0&&r[`uniform${this.typeFn}`](c,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(c,m,s){const d=this;if(d.excludeFrom!==m){if(d.type==="array")return d.value[0].getDeclaration(c,m,d.value.length)+`const int ${c}_length=${d.value.length};`;if(d.type==="struct"){let v=c.replace("u_","");return v=v.charAt(0).toUpperCase()+v.slice(1),`uniform struct ${v} {`+Object.entries(d.value).map(([O,C])=>C.getDeclaration(O,m).replace(/^uniform/,"")).join("")+`} ${c}${s>0?`[${s}]`:""};`}return`uniform ${d.type} ${c}${s>0?`[${s}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(c,m,s,d,v){r.createBuffer(),this.attributes={position:new o.Attribute({target:r.ARRAY_BUFFER,size:3}),uv:new o.Attribute({target:r.ARRAY_BUFFER,size:2}),uvNorm:new o.Attribute({target:r.ARRAY_BUFFER,size:2}),index:new o.Attribute({target:r.ELEMENT_ARRAY_BUFFER,size:3,type:r.UNSIGNED_SHORT})},this.setTopology(s,d),this.setSize(c,m,v)}setTopology(c=1,m=1){const s=this;s.xSegCount=c,s.ySegCount=m,s.vertexCount=(s.xSegCount+1)*(s.ySegCount+1),s.quadCount=s.xSegCount*s.ySegCount*2,s.attributes.uv.values=new Float32Array(2*s.vertexCount),s.attributes.uvNorm.values=new Float32Array(2*s.vertexCount),s.attributes.index.values=new Uint16Array(3*s.quadCount);for(let d=0;d<=s.ySegCount;d++)for(let v=0;v<=s.xSegCount;v++){const O=d*(s.xSegCount+1)+v;if(s.attributes.uv.values[2*O]=v/s.xSegCount,s.attributes.uv.values[2*O+1]=1-d/s.ySegCount,s.attributes.uvNorm.values[2*O]=v/s.xSegCount*2-1,s.attributes.uvNorm.values[2*O+1]=1-d/s.ySegCount*2,v<s.xSegCount&&d<s.ySegCount){const C=d*s.xSegCount+v;s.attributes.index.values[6*C]=O,s.attributes.index.values[6*C+1]=O+1+s.xSegCount,s.attributes.index.values[6*C+2]=O+1,s.attributes.index.values[6*C+3]=O+1,s.attributes.index.values[6*C+4]=O+1+s.xSegCount,s.attributes.index.values[6*C+5]=O+2+s.xSegCount}}s.attributes.uv.update(),s.attributes.uvNorm.update(),s.attributes.index.update()}setSize(c=1,m=1,s="xz"){const d=this;d.width=c,d.height=m,d.orientation=s,d.attributes.position.values&&d.attributes.position.values.length===3*d.vertexCount||(d.attributes.position.values=new Float32Array(3*d.vertexCount));const v=c/-2,O=m/-2,C=c/d.xSegCount,N=m/d.ySegCount;for(let E=0;E<=d.ySegCount;E++){const x=O+E*N;for(let A=0;A<=d.xSegCount;A++){const M=v+A*C,P=E*(d.xSegCount+1)+A;d.attributes.position.values[3*P+"xyz".indexOf(s[0])]=M,d.attributes.position.values[3*P+"xyz".indexOf(s[1])]=-x}}d.attributes.position.update()}}},Mesh:{enumerable:!1,value:class{constructor(c,m){const s=this;s.geometry=c,s.material=m,s.attributeInstances=[],Object.entries(s.geometry.attributes).forEach(([d,v])=>{s.attributeInstances.push({attribute:v,location:v.attach(d,s.material.program)})}),o.meshes.push(s)}draw(){r.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:c,location:m})=>c.update(m)),this.attributeInstances.forEach(({attribute:c,location:m})=>c.use(m)),r.drawElements(r.TRIANGLES,this.geometry.attributes.index.values.length,r.UNSIGNED_SHORT,0)}remove(){o.meshes=o.meshes.filter(c=>c!=this)}}},Attribute:{enumerable:!1,value:class{constructor(c){this.type=r.FLOAT,this.normalized=!1,this.buffer=r.createBuffer(),Object.assign(this,c),this.update()}update(){this.values!==void 0&&(r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,this.values,r.STATIC_DRAW))}attach(c,m){const s=r.getAttribLocation(m,c);return this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(s),r.vertexAttribPointer(s,this.size,this.type,this.normalized,0,0)),s}use(c){r.bindBuffer(this.target,this.buffer),this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(c),r.vertexAttribPointer(c,this.size,this.type,this.normalized,0,0))}}}});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];o.commonUniforms={projectionMatrix:new o.Uniform({type:"mat4",value:i}),modelViewMatrix:new o.Uniform({type:"mat4",value:i}),resolution:new o.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new o.Uniform({type:"float",value:1})}}setSize(t=640,a=480){this.width=t,this.height=a,this.canvas.width=t,this.canvas.height=a,this.gl.viewport(0,0,t,a),this.commonUniforms.resolution.value=[t,a],this.commonUniforms.aspectRatio.value=t/a}setOrthographicCamera(t=0,a=0,n=0,o=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(o-r),0,t,a,n,1]}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(t=>t.draw())}};const dist_g={CROSS_ICON:lit_html_x`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,NOISE_TEXTURE:lit_html_x`<svg id="w3m-transparent-noise"><filter id="w3m-noise"><feTurbulence type="fractalNoise" baseFrequency="0.8"/></filter><rect width="100%" height="100%" filter="url(#w3m-noise)"/></svg>`,WALLET_CONNECT_LOGO:lit_html_x`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,WALLET_CONNECT_ICON:lit_html_x`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,WALLET_CONNECT_ICON_COLORED:lit_html_x`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,BACK_ICON:lit_html_x`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,COPY_ICON:lit_html_x`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,RETRY_ICON:lit_html_x`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,DESKTOP_ICON:lit_html_x`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,MOBILE_ICON:lit_html_x`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,ARROW_DOWN_ICON:lit_html_x`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,ARROW_UP_RIGHT_ICON:lit_html_x`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,ARROW_RIGHT_ICON:lit_html_x`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,QRCODE_ICON:lit_html_x`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,SCAN_ICON:lit_html_x`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,CHECKMARK_ICON:lit_html_x`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,HELP_ETH_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,HELP_PAINTING_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,HELP_CHART_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,HELP_KEY_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,HELP_USER_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,HELP_LOCK_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,HELP_COMPAS_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,HELP_NOUN_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,HELP_DAO_IMG:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,SEARCH_ICON:lit_html_x`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,HELP_ICON:lit_html_x`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,WALLET_ICON:lit_html_x`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,NETWORK_PLACEHOLDER:lit_html_x`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,WALLET_PLACEHOLDER:lit_html_x`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,TOKEN_PLACEHOLDER:lit_html_x`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,ACCOUNT_COPY:lit_html_x`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,ACCOUNT_DISCONNECT:lit_html_x`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`},Zt={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00"};var Z=(e=>(e.metaMask="metaMask",e.trust="trust",e.phantom="phantom",e.brave="brave",e.spotEthWallet="spotEthWallet",e.exodus="exodus",e.tokenPocket="tokenPocket",e.frame="frame",e.tally="tally",e.coinbaseWallet="coinbaseWallet",e.core="core",e.bitkeep="bitkeep",e.mathWallet="mathWallet",e.opera="opera",e.tokenary="tokenary",e["1inch"]="1inch",e.kuCoinWallet="kuCoinWallet",e.ledger="ledger",e))(Z||{});const J={injectedPreset:{metaMask:{name:"MetaMask",icon:"619537c0-2ff3-4c78-9ed8-a05e7567f300",url:"https://metamask.io",isMobile:!0,isInjected:!0},trust:{name:"Trust",icon:"0528ee7e-16d1-4089-21e3-bbfb41933100",url:"https://trustwallet.com",isMobile:!0,isInjected:!0},spotEthWallet:{name:"Spot",icon:"1bf33a89-b049-4a1c-d1f6-4dd7419ee400",url:"https://www.spot-wallet.com",isMobile:!0,isInjected:!0},phantom:{name:"Phantom",icon:"62471a22-33cb-4e65-5b54-c3d9ea24b900",url:"https://phantom.app",isInjected:!0},core:{name:"Core",icon:"35f9c46e-cc57-4aa7-315d-e6ccb2a1d600",url:"https://core.app",isMobile:!0,isInjected:!0},bitkeep:{name:"BitKeep",icon:"3f7075d0-4ab7-4db5-404d-3e4c05e6fe00",url:"https://bitkeep.com",isMobile:!0,isInjected:!0},tokenPocket:{name:"TokenPocket",icon:"f3119826-4ef5-4d31-4789-d4ae5c18e400",url:"https://www.tokenpocket.pro",isMobile:!0,isInjected:!0},mathWallet:{name:"MathWallet",icon:"26a8f588-3231-4411-60ce-5bb6b805a700",url:"https://mathwallet.org",isMobile:!0,isInjected:!0},exodus:{name:"Exodus",icon:"4c16cad4-cac9-4643-6726-c696efaf5200",url:"https://www.exodus.com",isMobile:!0,isDesktop:!0,isInjected:!0},kuCoinWallet:{name:"KuCoin Wallet",icon:"1e47340b-8fd7-4ad6-17e7-b2bd651fae00",url:"https://kuwallet.com",isMobile:!0,isInjected:!0},ledger:{name:"Ledger",icon:"a7f416de-aa03-4c5e-3280-ab49269aef00",url:"https://www.ledger.com",isDesktop:!0},brave:{name:"Brave",icon:"125e828e-9936-4451-a8f2-949c119b7400",url:"https://brave.com/wallet",isInjected:!0},frame:{name:"Frame",icon:"cd492418-ea85-4ef1-aeed-1c9e20b58900",url:"https://frame.sh",isInjected:!0},tally:{name:"Tally",icon:"98d2620c-9fc8-4a1c-31bc-78d59d00a300",url:"https://tallyho.org",isInjected:!0},coinbaseWallet:{name:"Coinbase",icon:"f8068a7f-83d7-4190-1f94-78154a12c600",url:"https://www.coinbase.com/wallet",isInjected:!0},opera:{name:"Opera",icon:"877fa1a4-304d-4d45-ca8e-f76d1a556f00",url:"https://www.opera.com/crypto",isInjected:!0},tokenary:{name:"Tokenary",icon:"5e481041-dc3c-4a81-373a-76bbde91b800",url:"https://tokenary.io",isDesktop:!0,isInjected:!0},["1inch"]:{name:"1inch Wallet",icon:"dce1ee99-403f-44a9-9f94-20de30616500",url:"https://1inch.io/wallet",isMobile:!0}},getInjectedId(e){if(e.toUpperCase()!=="INJECTED"&&e.length)return e;const{ethereum:t,spotEthWallet:a,coinbaseWalletExtension:n}=window;return t?t.isTrust||t.isTrustWallet?"trust":t.isPhantom?"phantom":t.isBraveWallet?"brave":a?"spotEthWallet":t.isExodus?"exodus":t.isTokenPocket?"tokenPocket":t.isFrame?"frame":t.isTally?"tally":n?"coinbaseWallet":t.isAvalanche?"core":t.isBitKeep?"bitkeep":t.isMathWallet?"mathWallet":t.isOpera?"opera":t.isTokenary?"tokenary":t.isOneInchIOSWallet||t.isOneInchAndroidWallet?"1inch":t.isKuCoinWallet?"kuCoinWallet":t.isMetaMask?"metaMask":"injected":"metaMask"},getInjectedName(e){var t,a;if(e.length&&e.toUpperCase()!=="INJECTED")return e;const n=J.getInjectedId("");return(a=(t=J.injectedPreset[n])==null?void 0:t.name)!=null?a:"Injected"}},Ft={ETH:{icon:"692ed6ba-e569-459a-556a-776476829e00"},WETH:{icon:"692ed6ba-e569-459a-556a-776476829e00"},AVAX:{icon:"30c46e53-e989-45fb-4549-be3bd4eb3b00"},FTM:{icon:"06b26297-fe0c-4733-5d6b-ffa5498aac00"},BNB:{icon:"93564157-2e8e-4ce7-81df-b264dbee9b00"},MATIC:{icon:"41d04d42-da3b-4453-8506-668cc0727900"},OP:{icon:"ab9c186a-c52f-464b-2906-ca59d760a400"},xDAI:{icon:"02b53f6a-e3d4-479e-1cb4-21178987d100"},EVMOS:{icon:"f926ff41-260d-4028-635e-91913fc28e00"},METIS:{icon:"3897a66d-40b9-4833-162f-a2c90531c900"},IOTX:{icon:"34e68754-e536-40da-c153-6ef2e7188a00"}};var zt=Object.defineProperty,pt=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,ut=(e,t,a)=>t in e?zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,qt=(e,t)=>{for(var a in t||(t={}))Vt.call(t,a)&&ut(e,a,t[a]);if(pt)for(var a of pt(t))Gt.call(t,a)&&ut(e,a,t[a]);return e};const dist_h={MOBILE_BREAKPOINT:600,W3M_RECENT_WALLET:"W3M_RECENT_WALLET",rejectStandaloneButtonComponent(){const{isStandalone:e}=dist/* OptionsCtrl.state */.zb.state;if(e)throw new Error("Web3Modal button components are not available in standalone mode.")},getShadowRootElement(e,t){const a=e.renderRoot.querySelector(t);if(!a)throw new Error(`${t} not found`);return a},getWalletId(e){return J.getInjectedId(e)},getWalletIcon(e){var t,a;const n=(t=J.injectedPreset[e])==null?void 0:t.icon,{projectId:o,walletImages:r}=dist/* ConfigCtrl.state */.t0.state;return(a=r?.[e])!=null?a:o&&n?dist/* ExplorerCtrl.getImageUrl */.uc.getImageUrl(n):""},getWalletName(e,t=!1){const a=J.getInjectedName(e);return t?a.split(" ")[0]:a},getChainIcon(e){var t;const a=Zt[e],{projectId:n,chainImages:o}=dist/* ConfigCtrl.state */.t0.state;return(t=o?.[e])!=null?t:n&&a?dist/* ExplorerCtrl.getImageUrl */.uc.getImageUrl(a):""},getTokenIcon(e){var t,a;const n=(t=Ft[e])==null?void 0:t.icon,{projectId:o,tokenImages:r}=dist/* ConfigCtrl.state */.t0.state;return(a=r?.[e])!=null?a:o&&n?dist/* ExplorerCtrl.getImageUrl */.uc.getImageUrl(n):""},isMobileAnimation(){return window.innerWidth<=dist_h.MOBILE_BREAKPOINT},async preloadImage(e){return new Promise((t,a)=>{const n=new Image;n.onload=t,n.onerror=a,n.src=e})},getErrorMessage(e){return e instanceof Error?e.message:"Unknown Error"},debounce(e,t=500){let a;return(...n)=>{function o(){e(...n)}a&&clearTimeout(a),a=setTimeout(o,t)}},async handleMobileLinking(e){const{standaloneUri:t,selectedChain:a}=dist/* OptionsCtrl.state */.zb.state,{links:n,name:o}=e;function r(i){let c="";n!=null&&n.universal?c=dist/* CoreUtil.formatUniversalUrl */.zv.formatUniversalUrl(n.universal,i,o):n!=null&&n.native&&(c=dist/* CoreUtil.formatNativeUrl */.zv.formatNativeUrl(n.native,i,o)),dist/* CoreUtil.openHref */.zv.openHref(c)}t?(dist_h.setRecentWallet(e),r(t)):(await dist/* ClientCtrl.client */.Id.client().connectWalletConnect(i=>{r(i)},a?.id),dist_h.setRecentWallet(e),dist/* ModalCtrl.close */.jb.close())},async handleAndroidLinking(){const{standaloneUri:e,selectedChain:t}=dist/* OptionsCtrl.state */.zb.state;e?dist/* CoreUtil.openHref */.zv.openHref(e):(await dist/* ClientCtrl.client */.Id.client().connectWalletConnect(a=>{dist/* CoreUtil.setWalletConnectAndroidDeepLink */.zv.setWalletConnectAndroidDeepLink(a),dist/* CoreUtil.openHref */.zv.openHref(a)},t?.id),dist/* ModalCtrl.close */.jb.close())},async handleUriCopy(){const{standaloneUri:e}=dist/* OptionsCtrl.state */.zb.state;if(e)await navigator.clipboard.writeText(e);else{const t=dist/* ClientCtrl.client */.Id.client().walletConnectUri;await navigator.clipboard.writeText(t)}dist/* ToastCtrl.openToast */.Vs.openToast("Link copied","success")},async handleConnectorConnection(e,t){try{const{selectedChain:a}=dist/* OptionsCtrl.state */.zb.state;await dist/* ClientCtrl.client */.Id.client().connectConnector(e,a?.id),dist/* ModalCtrl.close */.jb.close()}catch(a){console.error(a),t?t():dist/* ToastCtrl.openToast */.Vs.openToast(dist_h.getErrorMessage(a),"error")}},getCustomWallets(){var e;const{desktopWallets:t,mobileWallets:a}=dist/* ConfigCtrl.state */.t0.state;return(e=dist/* CoreUtil.isMobile */.zv.isMobile()?a:t)!=null?e:[]},getCustomImageUrls(){const{chainImages:e,walletImages:t}=dist/* ConfigCtrl.state */.t0.state,a=Object.values(e??{}),n=Object.values(t??{});return Object.values([...a,...n])},getConnectorImageUrls(){return dist/* ClientCtrl.client */.Id.client().getConnectors().map(({id:e})=>J.getInjectedId(e)).map(e=>dist_h.getWalletIcon(e))},truncate(e,t=8){return e.length<=t?e:`${e.substring(0,4)}...${e.substring(e.length-4)}`},generateAvatarColors(e){var t;const a=(t=e.match(/.{1,7}/g))==null?void 0:t.splice(0,5),n=[];a?.forEach(r=>{let i=0;for(let m=0;m<r.length;m+=1)i=r.charCodeAt(m)+((i<<5)-i),i=i&i;const c=[0,0,0];for(let m=0;m<3;m+=1){const s=i>>m*8&255;c[m]=s}n.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`)});const o=document.querySelector(":root");if(o){const r={"--w3m-color-av-1":n[0],"--w3m-color-av-2":n[1],"--w3m-color-av-3":n[2],"--w3m-color-av-4":n[3],"--w3m-color-av-5":n[4]};Object.entries(r).forEach(([i,c])=>o.style.setProperty(i,c))}},setRecentWallet(e){const{walletConnectVersion:t}=dist/* OptionsCtrl.state */.zb.state;localStorage.setItem(dist_h.W3M_RECENT_WALLET,JSON.stringify({[t]:e}))},getRecentWallet(){const e=localStorage.getItem(dist_h.W3M_RECENT_WALLET);if(e){const{walletConnectVersion:t}=dist/* OptionsCtrl.state */.zb.state,a=JSON.parse(e);if(a[t])return a[t]}},getExtensionWallets(){const e=[];for(const[t,a]of Object.entries(J.injectedPreset))t!==Z.coinbaseWallet&&a&&a.isInjected&&!a.isDesktop&&e.push(qt({id:t},a));return e},caseSafeIncludes(e,t){return e.toUpperCase().includes(t.toUpperCase())}},Kt=i`#w3m-transparent-noise,.w3m-canvas,.w3m-color-placeholder,.w3m-gradient-placeholder,.w3m-highlight{inset:0;position:absolute;display:block;pointer-events:none;width:100%;height:100px;border-radius:8px 8px 0 0;transform:translateY(-5px)}.w3m-gradient-placeholder{background:linear-gradient(var(--w3m-gradient-1),var(--w3m-gradient-2),var(--w3m-gradient-3),var(--w3m-gradient-4))}.w3m-color-placeholder{background-color:var(--w3m-color-fg-accent)}.w3m-highlight{border:1px solid var(--w3m-color-overlay)}.w3m-canvas{opacity:0;transition:opacity 2s ease;box-shadow:0 8px 28px -6px rgba(10,16,31,.12),0 18px 88px -4px rgba(10,16,31,.14)}.w3m-canvas-visible{opacity:1}#w3m-transparent-noise{mix-blend-mode:multiply;opacity:.35}.w3m-toolbar{height:28px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-color-fg-inverse)}.w3m-action-btn{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color,.2s ease;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay),0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08)}.w3m-action-btn:hover{background-color:var(--w3m-color-bg-2)}.w3m-action-btn svg{display:block;object-position:center}.w3m-action-btn path{fill:var(--w3m-color-fg-1)}.w3m-actions{display:flex}.w3m-actions button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}`;var Yt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Ne=(e,t,a,n)=>{for(var o=n>1?void 0:n?Xt(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Yt(t,a,o),o};const vt=new Bt;let ce=class extends lit_element_s{constructor(){super(),this.open=!1,this.isHelp=!1,this.unsubscribeRouter=void 0,this.playTimeout=void 0,this.unsubscribeRouter=dist/* RouterCtrl.subscribe */.AV.subscribe(e=>{this.isHelp=e.view==="Help"})}firstUpdated(){const{themeBackground:e}=dist/* ConfigCtrl.state */.t0.state;e==="gradient"&&(this.playTimeout=setTimeout(()=>{vt.play(this.canvasEl),this.open=!0},800))}disconnectedCallback(){var e;(e=this.unsubscribeRouter)==null||e.call(this),clearTimeout(this.playTimeout),vt.stop()}get canvasEl(){return dist_h.getShadowRootElement(this,".w3m-canvas")}onHelp(){dist/* RouterCtrl.push */.AV.push("Help")}render(){const{themeBackground:e}=dist/* ConfigCtrl.state */.t0.state,t={"w3m-canvas":!0,"w3m-canvas-visible":this.open},a={"w3m-actions":!0,"w3m-help-active":this.isHelp};return y`${e==="themeColor"?y`<div class="w3m-color-placeholder"></div>`:null} ${e==="gradient"?y`<div class="w3m-gradient-placeholder"></div><canvas class="${class_map_o(t)}"></canvas>${dist_g.NOISE_TEXTURE}`:null}<div class="w3m-highlight"></div><div class="w3m-toolbar">${dist_g.WALLET_CONNECT_LOGO}<div class="${class_map_o(a)}"><button class="w3m-action-btn" @click="${this.onHelp}">${dist_g.HELP_ICON}</button> <button class="w3m-action-btn" @click="${dist/* ModalCtrl.close */.jb.close}">${dist_g.CROSS_ICON}</button></div></div>`}};ce.styles=[dist_u.globalCss,Kt],Ne([state_t()],ce.prototype,"open",2),Ne([state_t()],ce.prototype,"isHelp",2),ce=Ne([custom_element_e("w3m-modal-backcard")],ce);const Qt=i`main{padding:20px;padding-top:0;width:100%}`;var Jt=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,to=(e,t,a,n)=>{for(var o=n>1?void 0:n?eo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Jt(t,a,o),o};let Re=class extends lit_element_s{render(){return y`<main><slot></slot></main>`}};Re.styles=[dist_u.globalCss,Qt],Re=to([custom_element_e("w3m-modal-content")],Re);const oo=i`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;var ao=Object.defineProperty,no=Object.getOwnPropertyDescriptor,ro=(e,t,a,n)=>{for(var o=n>1?void 0:n?no(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&ao(t,a,o),o};let Be=class extends lit_element_s{render(){return y`<footer><slot></slot></footer>`}};Be.styles=[dist_u.globalCss,oo],Be=ro([custom_element_e("w3m-modal-footer")],Be);const io=i`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px;transition:opacity .2s ease}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-color-fg-accent)}`;var lo=Object.defineProperty,so=Object.getOwnPropertyDescriptor,de=(e,t,a,n)=>{for(var o=n>1?void 0:n?so(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&lo(t,a,o),o};let q=class extends lit_element_s{constructor(){super(...arguments),this.title="",this.onAction=void 0,this.actionIcon=void 0,this.border=!1}backBtnTemplate(){return y`<button class="w3m-back-btn" @click="${dist/* RouterCtrl.goBack */.AV.goBack}">${dist_g.BACK_ICON}</button>`}actionBtnTemplate(){return y`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`}render(){const e={"w3m-border":this.border},t=dist/* RouterCtrl.state.history.length */.AV.state.history.length>1,a=this.title?y`<w3m-text variant="large-bold">${this.title}</w3m-text>`:y`<slot></slot>`;return y`<header class="${class_map_o(e)}">${t?this.backBtnTemplate():null} ${a} ${this.onAction?this.actionBtnTemplate():null}</header>`}};q.styles=[dist_u.globalCss,io],de([property_e()],q.prototype,"title",2),de([property_e()],q.prototype,"onAction",2),de([property_e()],q.prototype,"actionIcon",2),de([property_e()],q.prototype,"border",2),q=de([custom_element_e("w3m-modal-header")],q);const co=i`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;var ho=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,Ue=(e,t,a,n)=>{for(var o=n>1?void 0:n?mo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&ho(t,a,o),o};let he=class extends lit_element_s{constructor(){super(),this.view=dist/* RouterCtrl.state.view */.AV.state.view,this.prevView=dist/* RouterCtrl.state.view */.AV.state.view,this.unsubscribe=void 0,this.oldHeight="0px",this.resizeObserver=void 0,this.unsubscribe=dist/* RouterCtrl.subscribe */.AV.subscribe(e=>{this.view!==e.view&&this.onChangeRoute()})}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{const t=`${e.contentRect.height}px`;this.oldHeight!=="0px"&&(animate_es_animate(this.routerEl,{height:[this.oldHeight,t]},{duration:.2}),animate_es_animate(this.routerEl,{opacity:[0,1],scale:[.99,1]},{duration:.37,delay:.03})),this.oldHeight=t}),this.resizeObserver.observe(this.contentEl)}disconnectedCallback(){var e,t;(e=this.unsubscribe)==null||e.call(this),(t=this.resizeObserver)==null||t.disconnect()}get routerEl(){return dist_h.getShadowRootElement(this,".w3m-router")}get contentEl(){return dist_h.getShadowRootElement(this,".w3m-content")}viewTemplate(){switch(this.view){case"ConnectWallet":return y`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;case"SelectNetwork":return y`<w3m-select-network-view></w3m-select-network-view>`;case"InjectedConnector":return y`<w3m-injected-connector-view></w3m-injected-connector-view>`;case"InstallConnector":return y`<w3m-install-connector-view></w3m-install-connector-view>`;case"GetWallet":return y`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"DesktopConnector":return y`<w3m-desktop-connector-view></w3m-desktop-connector-view>`;case"WalletExplorer":return y`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;case"Qrcode":return y`<w3m-qrcode-view></w3m-qrcode-view>`;case"Help":return y`<w3m-help-view></w3m-help-view>`;case"Account":return y`<w3m-account-view></w3m-account-view>`;case"SwitchNetwork":return y`<w3m-switch-network-view></w3m-switch-network-view>`;default:return y`<div>Not Found</div>`}}async onChangeRoute(){await animate_es_animate(this.routerEl,{opacity:[1,0],scale:[1,1.02]},{duration:.15}).finished,this.view=dist/* RouterCtrl.state.view */.AV.state.view}render(){return y`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`}};he.styles=[dist_u.globalCss,co],Ue([state_t()],he.prototype,"view",2),Ue([state_t()],he.prototype,"prevView",2),he=Ue([custom_element_e("w3m-modal-router")],he);const po=i`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:10px 15px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:36px;border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-color-fg-accent)}.w3m-error path{fill:var(--w3m-color-err)}`;var uo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,gt=(e,t,a,n)=>{for(var o=n>1?void 0:n?vo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&uo(t,a,o),o};let $e=class extends lit_element_s{constructor(){super(),this.open=!1,this.unsubscribe=void 0,this.timeout=void 0,this.unsubscribe=dist/* ToastCtrl.subscribe */.Vs.subscribe(e=>{e.open?(this.open=!0,this.timeout=setTimeout(()=>dist/* ToastCtrl.closeToast */.Vs.closeToast(),2200)):(this.open=!1,clearTimeout(this.timeout))})}disconnectedCallback(){var e;(e=this.unsubscribe)==null||e.call(this),clearTimeout(this.timeout),dist/* ToastCtrl.closeToast */.Vs.closeToast()}render(){const{message:e,variant:t}=dist/* ToastCtrl.state */.Vs.state,a={"w3m-success":t==="success","w3m-error":t==="error"};return this.open?y`<div class="${class_map_o(a)}">${t==="success"?dist_g.CHECKMARK_ICON:null} ${t==="error"?dist_g.CROSS_ICON:null}<w3m-text variant="small-normal">${e}</w3m-text></div>`:null}};$e.styles=[dist_u.globalCss,po],gt([state_t()],$e.prototype,"open",2),$e=gt([custom_element_e("w3m-modal-toast")],$e);const go=i`button{padding:5px;border-radius:10px;transition:all .2s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:hover{background-color:var(--w3m-color-overlay)}`;var wo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,Oe=(e,t,a,n)=>{for(var o=n>1?void 0:n?bo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&wo(t,a,o),o};let oe=class extends lit_element_s{constructor(){super(...arguments),this.onClick=()=>null,this.name="",this.chainId=""}render(){return y`<button @click="${this.onClick}"><w3m-network-image chainId="${this.chainId}"></w3m-network-image><w3m-text variant="xsmall-normal">${this.name}</w3m-text></button>`}};oe.styles=[dist_u.globalCss,go],Oe([property_e()],oe.prototype,"onClick",2),Oe([property_e()],oe.prototype,"name",2),Oe([property_e()],oe.prototype,"chainId",2),oe=Oe([custom_element_e("w3m-network-button")],oe);const fo=i`div{width:inherit;height:inherit}.polygon-stroke{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}`;var yo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,wt=(e,t,a,n)=>{for(var o=n>1?void 0:n?xo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&yo(t,a,o),o};let Ie=class extends lit_element_s{constructor(){super(...arguments),this.chainId=""}render(){const e=dist_h.getChainIcon(this.chainId);return e?y`<div><svg width="54" height="59" viewBox="0 0 54 59" fill="none"><defs><clipPath id="polygon"><path d="M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z"/></clipPath></defs><image clip-path="url(#polygon)" href="${e}" width="58" height="59" x="-2" y="0"/><path class="polygon-stroke" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z" stroke="#fff"/></svg></div>`:y`${dist_g.NETWORK_PLACEHOLDER}`}};Ie.styles=[dist_u.globalCss,fo],wt([property_e()],Ie.prototype,"chainId",2),Ie=wt([custom_element_e("w3m-network-image")],Ie);const Co=.1,bt=2.5,F=7;function He(e,t,a){return e===t?!1:(e-t<0?t-e:e-t)<=a+Co}function ko(e,t){const a=Array.prototype.slice.call(lib.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(a.length);return a.reduce((o,r,i)=>(i%n===0?o.push([r]):o[o.length-1].push(r))&&o,[])}const $o={generate(e,t,a,n){const o=n==="light"?"#141414":"#fff",r=n==="light"?"#fff":"#141414",i=[],c=ko(e,"Q"),m=t/c.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:E,y:x})=>{const A=(c.length-F)*m*E,M=(c.length-F)*m*x,P=.32;for(let U=0;U<s.length;U+=1){const ee=m*(F-U*2);i.push(lit_html_x`<rect fill="${U%2===0?o:r}" height="${ee}" rx="${ee*P}" ry="${ee*P}" width="${ee}" x="${A+m*U}" y="${M+m*U}">`)}});const d=Math.floor((a+25)/m),v=c.length/2-d/2,O=c.length/2+d/2-1,C=[];c.forEach((E,x)=>{E.forEach((A,M)=>{if(c[x][M]&&!(x<F&&M<F||x>c.length-(F+1)&&M<F||x<F&&M>c.length-(F+1))&&!(x>v&&x<O&&M>v&&M<O)){const P=x*m+m/2,U=M*m+m/2;C.push([P,U])}})});const N={};return C.forEach(([E,x])=>{N[E]?N[E].push(x):N[E]=[x]}),Object.entries(N).map(([E,x])=>{const A=x.filter(M=>x.every(P=>!He(M,P,m)));return[Number(E),A]}).forEach(([E,x])=>{x.forEach(A=>{i.push(lit_html_x`<circle cx="${E}" cy="${A}" fill="${o}" r="${m/bt}">`)})}),Object.entries(N).filter(([E,x])=>x.length>1).map(([E,x])=>{const A=x.filter(M=>x.some(P=>He(M,P,m)));return[Number(E),A]}).map(([E,x])=>{x.sort((M,P)=>M<P?-1:1);const A=[];for(const M of x){const P=A.find(U=>U.some(ee=>He(M,ee,m)));P?P.push(M):A.push([M])}return[E,A.map(M=>[M[0],M[M.length-1]])]}).forEach(([E,x])=>{x.forEach(([A,M])=>{i.push(lit_html_x`<line x1="${E}" x2="${E}" y1="${A}" y2="${M}" stroke="${o}" stroke-width="${m/(bt/2)}" stroke-linecap="round">`)})}),i}},Oo=i`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:15px}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-color-fg-accent)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;var Io=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,me=(e,t,a,n)=>{for(var o=n>1?void 0:n?Eo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Io(t,a,o),o};let K=class extends lit_element_s{constructor(){super(...arguments),this.uri="",this.size=0,this.logoSrc="",this.walletId=""}svgTemplate(){var e;const t=(e=dist/* ConfigCtrl.state.themeMode */.t0.state.themeMode)!=null?e:"light";return lit_html_x`<svg height="${this.size}" width="${this.size}">${$o.generate(this.uri,this.size,this.size/4,t)}</svg>`}render(){return y`<div>${this.walletId||this.logoSrc?y`<w3m-wallet-image walletId="${if_defined_l(this.walletId)}" src="${if_defined_l(this.logoSrc)}"></w3m-wallet-image>`:dist_g.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`}};K.styles=[dist_u.globalCss,Oo],me([property_e()],K.prototype,"uri",2),me([property_e({type:Number})],K.prototype,"size",2),me([property_e()],K.prototype,"logoSrc",2),me([property_e()],K.prototype,"walletId",2),K=me([custom_element_e("w3m-qrcode")],K);const Mo=i`:host{position:relative;height:28px;width:75%}input{width:100%;height:100%;line-height:28px!important;border-radius:28px;font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin-right:4px}.w3m-placeholder{top:0;left:50%;transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:100%;width:fit-content;position:relative}input:focus-within+.w3m-placeholder,input:not(:placeholder-shown)+.w3m-placeholder{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+.w3m-placeholder w3m-text,input:not(:placeholder-shown)+.w3m-placeholder w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-color-fg-accent)}path{fill:var(--w3m-color-fg-2)}`;var Wo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,ft=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ao(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Wo(t,a,o),o};let Ee=class extends lit_element_s{constructor(){super(...arguments),this.onChange=()=>null}render(){const e=dist/* CoreUtil.isMobile */.zv.isMobile()?"Search mobile wallets":"Search desktop wallets";return y`<input type="text" @input="${this.onChange}" placeholder="${e}"><div class="w3m-placeholder">${dist_g.SEARCH_ICON}<w3m-text color="secondary" variant="medium-thin">${e}</w3m-text></div>`}};Ee.styles=[dist_u.globalCss,Mo],ft([property_e()],Ee.prototype,"onChange",2),Ee=ft([custom_element_e("w3m-search-input")],Ee);const Lo=i`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-color-fg-accent)}`;var jo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Po=(e,t,a,n)=>{for(var o=n>1?void 0:n?So(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&jo(t,a,o),o};let Ze=class extends lit_element_s{render(){return y`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`}};Ze.styles=[dist_u.globalCss,Lo],Ze=Po([custom_element_e("w3m-spinner")],Ze);const _o=i`span{font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xxsmall-bold{font-weight:700;font-size:10px;line-height:12px;letter-spacing:.02em;text-transform:uppercase}.w3m-xsmall-normal{font-weight:600;font-size:12px;line-height:14px;letter-spacing:-.03em}.w3m-small-thin{font-weight:500;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-small-normal{font-weight:600;font-size:14px;line-height:16px;letter-spacing:-.03em}.w3m-medium-thin{font-weight:500;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-normal{font-weight:600;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-medium-bold{font-weight:700;font-size:16px;line-height:20px;letter-spacing:-.03em}.w3m-large-bold{font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.03em}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-color-fg-inverse)}.w3m-color-accnt{color:var(--w3m-color-fg-accent)}.w3m-color-error{color:var(--w3m-color-err)}`;var Do=Object.defineProperty,To=Object.getOwnPropertyDescriptor,Fe=(e,t,a,n)=>{for(var o=n>1?void 0:n?To(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Do(t,a,o),o};let pe=class extends lit_element_s{constructor(){super(...arguments),this.variant="medium-normal",this.color="primary"}render(){const e={"w3m-large-bold":this.variant==="large-bold","w3m-medium-bold":this.variant==="medium-bold","w3m-medium-normal":this.variant==="medium-normal","w3m-medium-thin":this.variant==="medium-thin","w3m-small-normal":this.variant==="small-normal","w3m-small-thin":this.variant==="small-thin","w3m-xsmall-normal":this.variant==="xsmall-normal","w3m-xxsmall-bold":this.variant==="xxsmall-bold","w3m-color-primary":this.color==="primary","w3m-color-secondary":this.color==="secondary","w3m-color-tertiary":this.color==="tertiary","w3m-color-inverse":this.color==="inverse","w3m-color-accnt":this.color==="accent","w3m-color-error":this.color==="error"};return y`<span class="${class_map_o(e)}"><slot></slot></span>`}};pe.styles=[dist_u.globalCss,_o],Fe([property_e()],pe.prototype,"variant",2),Fe([property_e()],pe.prototype,"color",2),pe=Fe([custom_element_e("w3m-text")],pe);const No=i`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;var Ro=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,yt=(e,t,a,n)=>{for(var o=n>1?void 0:n?Bo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ro(t,a,o),o};let Me=class extends lit_element_s{constructor(){super(...arguments),this.symbol=void 0}render(){var e;const t=dist_h.getTokenIcon((e=this.symbol)!=null?e:"");return t?y`<div><img src="${t}" alt="${this.id}"></div>`:dist_g.TOKEN_PLACEHOLDER}};Me.styles=[dist_u.globalCss,No],yt([property_e()],Me.prototype,"symbol",2),Me=yt([custom_element_e("w3m-token-image")],Me);const Uo=i`button{transition:all .2s ease;width:100%;height:100%;border-radius:10px;display:flex;align-items:flex-start}button:hover{background-color:var(--w3m-color-overlay)}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:15px;margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;var Ho=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,dist_z=(e,t,a,n)=>{for(var o=n>1?void 0:n?Zo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ho(t,a,o),o};let dist_H=class extends lit_element_s{constructor(){super(...arguments),this.onClick=()=>null,this.name="",this.walletId="",this.label=void 0,this.src=void 0,this.installed=!1,this.recent=!1}sublabelTemplate(){return this.recent?y`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">RECENT</w3m-text>`:this.installed?y`<w3m-text class="w3m-sublabel" variant="xxsmall-bold" color="tertiary">INSTALLED</w3m-text>`:null}render(){var e;return y`<button @click="${this.onClick}"><div><w3m-wallet-image walletId="${this.walletId}" .src="${this.src}"></w3m-wallet-image><w3m-text variant="xsmall-normal">${(e=this.label)!=null?e:dist_h.getWalletName(this.name,!0)}</w3m-text>${this.sublabelTemplate()}</div></button>`}};dist_H.styles=[dist_u.globalCss,Uo],dist_z([property_e()],dist_H.prototype,"onClick",2),dist_z([property_e()],dist_H.prototype,"name",2),dist_z([property_e()],dist_H.prototype,"walletId",2),dist_z([property_e()],dist_H.prototype,"label",2),dist_z([property_e()],dist_H.prototype,"src",2),dist_z([property_e()],dist_H.prototype,"installed",2),dist_z([property_e()],dist_H.prototype,"recent",2),dist_H=dist_z([custom_element_e("w3m-wallet-button")],dist_H);const Fo=i`div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;var zo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,ze=(e,t,a,n)=>{for(var o=n>1?void 0:n?Vo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&zo(t,a,o),o};let ue=class extends lit_element_s{constructor(){super(...arguments),this.walletId=void 0,this.src=void 0}render(){var e;const t=dist_h.getWalletId((e=this.walletId)!=null?e:""),a=dist_h.getWalletId(t),n=this.src?this.src:dist_h.getWalletIcon(a);return y`${n.length?y`<div><img src="${n}" alt="${this.id}"></div>`:dist_g.WALLET_PLACEHOLDER}`}};ue.styles=[dist_u.globalCss,Fo],ze([property_e()],ue.prototype,"walletId",2),ze([property_e()],ue.prototype,"src",2),ue=ze([custom_element_e("w3m-wallet-image")],ue);const Go=i`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:10px;padding:4px 4px 4px 8px}div button{border-radius:16px;padding:4px 8px 4px 4px;height:auto;margin-left:10px;color:var(--w3m-color-fg-inverse);background-color:var(--w3m-color-fg-accent)}button::after{content:'';inset:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;var qo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,xt=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ko(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&qo(t,a,o),o};let We=class extends lit_element_s{constructor(){super(),this.balance="hide",dist_h.rejectStandaloneButtonComponent()}onOpen(){const{isStandalone:e}=dist/* OptionsCtrl.state */.zb.state;e||dist/* ModalCtrl.open */.jb.open({route:"Account"})}accountTemplate(){return y`<w3m-avatar></w3m-avatar><w3m-address-text></w3m-address-text>`}render(){return this.balance==="show"?y`<div><w3m-balance></w3m-balance><button @click="${this.onOpen}">${this.accountTemplate()}</button></div>`:y`<w3m-button-big @click="${this.onOpen}">${this.accountTemplate()}</w3m-button-big>`}};We.styles=[dist_u.globalCss,Go],xt([property_e()],We.prototype,"balance",2),We=xt([custom_element_e("w3m-account-button")],We);const Yo=i`button{display:flex;border-radius:10px;flex-direction:column;transition:background-color .2s ease;justify-content:center;padding:5px;width:100px}button:hover{background-color:var(--w3m-color-overlay)}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;var Xo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Ve=(e,t,a,n)=>{for(var o=n>1?void 0:n?Qo(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Xo(t,a,o),o};let ve=class extends lit_element_s{constructor(){super(),this.chainId="",this.label="",this.unsubscribeNetwork=void 0;const{selectedChain:e}=dist/* OptionsCtrl.state */.zb.state;this.chainId=e?.id.toString(),this.label=e?.name,this.unsubscribeNetwork=dist/* OptionsCtrl.subscribe */.zb.subscribe(({selectedChain:t})=>{this.chainId=t?.id.toString(),this.label=t?.name})}disconnectedCallback(){var e;(e=this.unsubscribeNetwork)==null||e.call(this)}onClick(){dist/* RouterCtrl.push */.AV.push("SelectNetwork")}render(){const{chains:e}=dist/* OptionsCtrl.state */.zb.state,t=e&&e.length>1;return y`<button @click="${this.onClick}" ?disabled="${!t}"><w3m-network-image chainId="${if_defined_l(this.chainId)}"></w3m-network-image><w3m-text variant="xsmall-normal" color="accent">${this.label}</w3m-text></button>`}};ve.styles=[dist_u.globalCss,Yo],Ve([state_t()],ve.prototype,"chainId",2),Ve([state_t()],ve.prototype,"label",2),ve=Ve([custom_element_e("w3m-account-network-button")],ve);const Jo=i`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ge=(e,t,a,n)=>{for(var o=n>1?void 0:n?ta(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&ea(t,a,o),o};let Y=class extends lit_element_s{constructor(){super(),this.address=void 0,this.name=void 0,this.loading=!0,this.variant="button",this.unsubscribeAccount=void 0,this.address=dist/* OptionsCtrl.state.address */.zb.state.address,this.name=dist/* OptionsCtrl.state.profileName */.zb.state.profileName,this.loading=Boolean(dist/* OptionsCtrl.state.profileLoading */.zb.state.profileLoading),this.unsubscribeAccount=dist/* OptionsCtrl.subscribe */.zb.subscribe(({address:e,profileName:t,profileLoading:a})=>{this.address=e,this.name=t,this.loading=Boolean(a)})}disconnectedCallback(){var e;(e=this.unsubscribeAccount)==null||e.call(this)}render(){var e;const t=this.variant==="button",a={"w3m-loading":this.loading};return y`<w3m-text class="${class_map_o(a)}" variant="${t?"medium-normal":"large-bold"}" color="${t?"inverse":"primary"}">${this.name?this.name:dist_h.truncate((e=this.address)!=null?e:"")}</w3m-text>`}};Y.styles=[dist_u.globalCss,Jo],ge([state_t()],Y.prototype,"address",2),ge([state_t()],Y.prototype,"name",2),ge([state_t()],Y.prototype,"loading",2),ge([property_e()],Y.prototype,"variant",2),Y=ge([custom_element_e("w3m-address-text")],Y);const oa=i`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 10),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px}.w3m-slider::after,.w3m-slider::before{content:'';height:100%;width:50px;z-index:2;position:absolute;background:linear-gradient(to right,var(--w3m-color-bg-1) 0,transparent 100%);top:0}.w3m-slider::before{left:0}.w3m-slider::after{right:0;transform:rotateZ(180deg)}.w3m-track{display:flex;width:calc(70px * 20);animation:scroll 20s linear infinite}.w3m-action{padding:30px 0 10px 0;display:flex;justify-content:center;align-items:center;flex-direction:column}.w3m-action w3m-button-big:last-child{margin-top:10px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;box-shadow:0 2px 4px -2px rgba(0,0,0,.12),0 4px 4px -2px rgba(0,0,0,.08);border-radius:15px}`;var aa=Object.defineProperty,na=Object.getOwnPropertyDescriptor,ra=(e,t,a,n)=>{for(var o=n>1?void 0:n?na(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&aa(t,a,o),o};let Ge=class extends lit_element_s{onGoToQrcode(){dist/* RouterCtrl.push */.AV.push("Qrcode")}onGoToGetWallet(){dist/* RouterCtrl.push */.AV.push("GetWallet")}render(){const{previewWallets:e}=dist/* ExplorerCtrl.state */.uc.state,t=e.length,a=[...e,...e];return y`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${dist_g.QRCODE_ICON}"></w3m-modal-header><w3m-modal-content>${t?y`<div class="w3m-slider"><div class="w3m-track">${a.map(({image_url:n})=>y`<w3m-wallet-image src="${n.lg}"></w3m-wallet-image>`)}</div></div>`:null}<div class="w3m-action"><w3m-button-big @click="${dist_h.handleAndroidLinking}"><w3m-text variant="medium-normal" color="inverse">Select Wallet</w3m-text></w3m-button-big><w3m-button-big variant="secondary" @click="${this.onGoToGetWallet}"><w3m-text variant="medium-normal" color="accent">I don’t have a wallet</w3m-text></w3m-button-big></div></w3m-modal-content>`}};Ge.styles=[dist_u.globalCss,oa],Ge=ra([custom_element_e("w3m-android-wallet-selection")],Ge);const ia=i`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;var la=Object.defineProperty,sa=Object.getOwnPropertyDescriptor,we=(e,t,a,n)=>{for(var o=n>1?void 0:n?sa(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&la(t,a,o),o};let X=class extends lit_element_s{constructor(){super(),this.address=void 0,this.avatar=void 0,this.loading=!0,this.size="small",this.unsubscribeAccount=void 0,this.address=dist/* OptionsCtrl.state.address */.zb.state.address,this.avatar=dist/* OptionsCtrl.state.profileAvatar */.zb.state.profileAvatar,this.loading=Boolean(dist/* OptionsCtrl.state.profileLoading */.zb.state.profileLoading),this.unsubscribeAccount=dist/* OptionsCtrl.subscribe */.zb.subscribe(({address:e,profileAvatar:t,profileLoading:a})=>{this.address=e,this.avatar=t,this.loading=Boolean(a)})}disconnectedCallback(){var e;(e=this.unsubscribeAccount)==null||e.call(this)}render(){const e={"w3m-placeholder":!0,"w3m-small":this.size==="small","w3m-medium":this.size==="medium"};return this.avatar?y`<img class="${class_map_o(e)}" src="${this.avatar}">`:this.address?(dist_h.generateAvatarColors(this.address),y`<div class="${class_map_o(e)}">${this.loading?y`<div class="w3m-loader"></div>`:null}</div>`):null}};X.styles=[dist_u.globalCss,ia],we([state_t()],X.prototype,"address",2),we([state_t()],X.prototype,"avatar",2),we([state_t()],X.prototype,"loading",2),we([property_e()],X.prototype,"size",2),X=we([custom_element_e("w3m-avatar")],X);const ca=i`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;var da=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,qe=(e,t,a,n)=>{for(var o=n>1?void 0:n?ha(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&da(t,a,o),o};let be=class extends lit_element_s{constructor(){var e,t;super(),this.symbol=void 0,this.amount=void 0,this.unsubscribeAccount=void 0,this.symbol=(e=dist/* OptionsCtrl.state.balance */.zb.state.balance)==null?void 0:e.symbol,this.amount=(t=dist/* OptionsCtrl.state.balance */.zb.state.balance)==null?void 0:t.amount,this.unsubscribeAccount=dist/* OptionsCtrl.subscribe */.zb.subscribe(({balance:a})=>{this.symbol=a?.symbol,this.amount=a?.amount})}disconnectedCallback(){var e;(e=this.unsubscribeAccount)==null||e.call(this)}render(){let e="_._";return this.amount==="0.0"&&(e=0),this.amount&&this.amount.length>6&&(e=parseFloat(this.amount).toFixed(3)),y`<div><w3m-token-image symbol="${if_defined_l(this.symbol)}"></w3m-token-image><w3m-text variant="medium-normal" color="primary">${e} ${this.symbol}</w3m-text></div>`}};be.styles=[dist_u.globalCss,ca],qe([state_t()],be.prototype,"symbol",2),qe([state_t()],be.prototype,"amount",2),be=qe([custom_element_e("w3m-balance")],be);const ma=i`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-color-fg-inverse)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;var pa=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,Ae=(e,t,a,n)=>{for(var o=n>1?void 0:n?ua(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&pa(t,a,o),o};let ae=class extends lit_element_s{constructor(){super(),this.loading=!1,this.label="Connect Wallet",this.icon="show",this.modalUnsub=void 0,dist_h.rejectStandaloneButtonComponent(),this.modalUnsub=dist/* ModalCtrl.subscribe */.jb.subscribe(e=>{e.open&&(this.loading=!0),e.open||(this.loading=!1)})}disconnectedCallback(){var e;(e=this.modalUnsub)==null||e.call(this)}iconTemplate(){return this.icon==="show"?dist_g.WALLET_CONNECT_ICON:null}onClick(){dist/* OptionsCtrl.state.isConnected */.zb.state.isConnected?this.onDisconnect():this.onConnect()}onConnect(){this.loading=!0;const{enableNetworkView:e}=dist/* ConfigCtrl.state */.t0.state,{chains:t,selectedChain:a}=dist/* OptionsCtrl.state */.zb.state,n=t?.length&&t.length>1;e||n&&!a?dist/* ModalCtrl.open */.jb.open({route:"SelectNetwork"}):dist/* ModalCtrl.open */.jb.open({route:"ConnectWallet"})}onDisconnect(){dist/* ClientCtrl.client */.Id.client().disconnect(),dist/* OptionsCtrl.resetAccount */.zb.resetAccount()}render(){return y`<w3m-button-big .disabled="${this.loading}" @click="${this.onClick}">${this.loading?y`<w3m-spinner></w3m-spinner><w3m-text variant="medium-normal" color="accent">Connecting...</w3m-text>`:y`${this.iconTemplate()}<w3m-text variant="medium-normal" color="inverse">${this.label}</w3m-text>`}</w3m-button-big>`}};ae.styles=[dist_u.globalCss,ma],Ae([state_t()],ae.prototype,"loading",2),Ae([property_e()],ae.prototype,"label",2),Ae([property_e()],ae.prototype,"icon",2),ae=Ae([custom_element_e("w3m-connect-button")],ae);var va=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,fe=(e,t,a,n)=>{for(var o=n>1?void 0:n?ga(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&va(t,a,o),o};let ne=class extends lit_element_s{constructor(){super(),this.isConnected=!1,this.label="Connect Wallet",this.icon="show",this.balance="hide",this.unsubscribeAccount=void 0,dist_h.rejectStandaloneButtonComponent(),this.isConnected=dist/* OptionsCtrl.state.isConnected */.zb.state.isConnected,this.unsubscribeAccount=dist/* OptionsCtrl.subscribe */.zb.subscribe(({isConnected:e})=>{this.isConnected=e})}disconnectedCallback(){var e;(e=this.unsubscribeAccount)==null||e.call(this)}render(){const{enableAccountView:e}=dist/* ConfigCtrl.state */.t0.state;return this.isConnected&&e?y`<w3m-account-button balance="${if_defined_l(this.balance)}"></w3m-account-button>`:y`<w3m-connect-button label="${this.isConnected?"Disconnect":if_defined_l(this.label)}" icon="${if_defined_l(this.icon)}"></w3m-connect-button>`}};fe([state_t()],ne.prototype,"isConnected",2),fe([property_e()],ne.prototype,"label",2),fe([property_e()],ne.prototype,"icon",2),fe([property_e()],ne.prototype,"balance",2),ne=fe([custom_element_e("w3m-core-button")],ne);const dist_R={allowedExplorerListings(e){const{explorerAllowList:t,explorerDenyList:a}=dist/* ConfigCtrl.state */.t0.state;let n=[...e];return t&&(n=n.filter(o=>t.includes(o.id))),a&&(n=n.filter(o=>!a.includes(o.id))),n},walletsWithInjected(e){let t=[...e??[]];if(window.ethereum){const a=dist_h.getWalletName("");t=t.filter(({name:n})=>!dist_h.caseSafeIncludes(n,a))}return t},connectorWallets(){const{isStandalone:e}=dist/* OptionsCtrl.state */.zb.state;if(e)return[];let t=dist/* ClientCtrl.client */.Id.client().getConnectors();return!window.ethereum&&dist/* CoreUtil.isMobile */.zv.isMobile()&&(t=t.filter(({id:a})=>a!=="injected"&&a!==Z.metaMask)),t},walletTemplatesWithRecent(e,t){let a=[...e];if(t){const n=dist_h.getRecentWallet();a=a.filter(o=>!o.values.includes(n?.name)),a.splice(1,0,t)}return a},deduplicateExplorerListingsFromConnectors(e){const{isStandalone:t}=dist/* OptionsCtrl.state */.zb.state;if(t)return e;const a=dist/* ClientCtrl.client */.Id.client().getConnectors().map(({name:n})=>n.toUpperCase());return e.filter(({name:n})=>!a.includes(n.toUpperCase()))}},wa=i`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-color-fg-accent)}`;var ba=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ya=(e,t,a,n)=>{for(var o=n>1?void 0:n?fa(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&ba(t,a,o),o};let Ke=class extends lit_element_s{onDesktopWallet(e){dist/* RouterCtrl.push */.AV.push("DesktopConnector",{DesktopConnector:e})}onInjectedWallet(){dist/* RouterCtrl.push */.AV.push("InjectedConnector")}onInstallConnector(){dist/* RouterCtrl.push */.AV.push("InstallConnector",{InstallConnector:{id:"metaMask",name:"MetaMask",isMobile:!0,url:"https://metamask.io"}})}async onConnectorWallet(e){window.ethereum?e==="injected"||e===Z.metaMask?this.onInjectedWallet():await dist_h.handleConnectorConnection(e):this.onInstallConnector()}desktopWalletsTemplate(){const{desktopWallets:e}=dist/* ConfigCtrl.state */.t0.state;return e?.map(({id:t,name:a,links:{universal:n,native:o}})=>y`<w3m-wallet-button walletId="${t}" name="${a}" .onClick="${()=>this.onDesktopWallet({name:a,walletId:t,universal:n,native:o})}"></w3m-wallet-button>`)}previewWalletsTemplate(){let e=dist_R.allowedExplorerListings(dist/* ExplorerCtrl.state.previewWallets */.uc.state.previewWallets);return e=dist_R.deduplicateExplorerListingsFromConnectors(e),e.map(({name:t,desktop:{universal:a,native:n},homepage:o,image_url:r,id:i})=>y`<w3m-wallet-button src="${r.lg}" name="${t}" .onClick="${()=>this.onDesktopWallet({walletId:i,name:t,native:n,universal:a||o,icon:r.lg})}"></w3m-wallet-button>`)}connectorWalletsTemplate(){return dist_R.connectorWallets().map(({id:e,name:t,ready:a})=>y`<w3m-wallet-button .installed="${["injected","metaMask"].includes(e)&&a}" name="${t}" walletId="${e}" .onClick="${async()=>this.onConnectorWallet(e)}"></w3m-wallet-button>`)}recentWalletTemplate(){const e=dist_h.getRecentWallet();if(!e)return;const{id:t,name:a,links:n,image:o}=e;return y`<w3m-wallet-button .recent="${!0}" name="${a}" walletId="${if_defined_l(t)}" src="${if_defined_l(o)}" .onClick="${()=>this.onDesktopWallet({name:a,walletId:t,universal:n?.universal,native:n?.native,icon:o})}"></w3m-wallet-button>`}render(){const{standaloneUri:e}=dist/* OptionsCtrl.state */.zb.state,t=this.desktopWalletsTemplate(),a=this.previewWalletsTemplate(),n=this.connectorWalletsTemplate(),o=this.recentWalletTemplate(),r=[...t??[],...a],i=[...n,...r],c=dist_R.walletTemplatesWithRecent(i,o),m=dist_R.walletTemplatesWithRecent(r,o),s=e?m:c,d=s.length>4;let v=[];d?v=s.filter(C=>!C.values.includes(Z.coinbaseWallet)).slice(0,3):v=s;const O=Boolean(v.length);return y`<w3m-modal-header border="${!0}" title="Connect your wallet" .onAction="${dist_h.handleUriCopy}" .actionIcon="${dist_g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${dist_g.MOBILE_ICON}<w3m-text variant="small-normal" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${dist_g.SCAN_ICON}<w3m-text variant="small-normal" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${O?y`<w3m-modal-footer><div class="w3m-desktop-title">${dist_g.DESKTOP_ICON}<w3m-text variant="small-normal" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${v} ${d?y`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}</div></w3m-modal-footer>`:null}`}};Ke.styles=[dist_u.globalCss,wa],Ke=ya([custom_element_e("w3m-desktop-wallet-selection")],Ke);const xa=i`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-color-fg-accent);text-decoration:none;transition:opacity .2s ease-in-out}a:hover{opacity:.8}`;var Ca=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,$a=(e,t,a,n)=>{for(var o=n>1?void 0:n?ka(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ca(t,a,o),o};let Ye=class extends lit_element_s{render(){const{termsOfServiceUrl:e,privacyPolicyUrl:t}=dist/* ConfigCtrl.state */.t0.state;return e??t?y`<div><w3m-text variant="small-normal" color="secondary">By connecting your wallet, you agree to our<br>${e?y`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`:null} ${e&&t?"and":null} ${t?y`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`:null}</w3m-text></div>`:null}};Ye.styles=[dist_u.globalCss,xa],Ye=$a([custom_element_e("w3m-legal-notice")],Ye);const Oa=i`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;var Ia=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,Ma=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ea(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ia(t,a,o),o};let Xe=class extends lit_element_s{onGoToQrcode(){dist/* RouterCtrl.push */.AV.push("Qrcode")}async onConnectorWallet(e){await dist_h.handleConnectorConnection(e)}mobileWalletsTemplate(){const{mobileWallets:e}=dist/* ConfigCtrl.state */.t0.state,t=dist_R.walletsWithInjected(e);if(t.length)return t.map(({id:a,name:n,links:{universal:o,native:r}})=>y`<w3m-wallet-button name="${n}" walletId="${a}" .onClick="${async()=>dist_h.handleMobileLinking({links:{native:r,universal:o},name:n,id:a})}"></w3m-wallet-button>`)}previewWalletsTemplate(){const{previewWallets:e}=dist/* ExplorerCtrl.state */.uc.state;let t=dist_R.walletsWithInjected(e);return t=dist_R.allowedExplorerListings(t),t=dist_R.deduplicateExplorerListingsFromConnectors(t),t.map(({image_url:a,name:n,mobile:{native:o,universal:r},id:i})=>y`<w3m-wallet-button name="${n}" src="${a.lg}" .onClick="${async()=>dist_h.handleMobileLinking({links:{native:o,universal:r},name:n,id:i,image:a.lg})}"></w3m-wallet-button>`)}connectorWalletsTemplate(){let e=dist_R.connectorWallets();return window.ethereum||(e=e.filter(({id:t})=>t!=="injected"&&t!==Z.metaMask)),e.map(({name:t,id:a,ready:n})=>y`<w3m-wallet-button .installed="${["injected","metaMask"].includes(a)&&n}" name="${t}" walletId="${a}" .onClick="${async()=>this.onConnectorWallet(a)}"></w3m-wallet-button>`)}recentWalletTemplate(){const e=dist_h.getRecentWallet();if(!e)return;const{id:t,name:a,links:n,image:o}=e;return y`<w3m-wallet-button .recent="${!0}" name="${a}" walletId="${if_defined_l(t)}" src="${if_defined_l(o)}" .onClick="${async()=>dist_h.handleMobileLinking({name:a,id:t,links:n,image:o})}"></w3m-wallet-button>`}render(){const{standaloneUri:e}=dist/* OptionsCtrl.state */.zb.state,t=this.connectorWalletsTemplate(),a=this.mobileWalletsTemplate(),n=this.previewWalletsTemplate(),o=this.recentWalletTemplate(),r=a??n,i=[...t,...r],c=dist_R.walletTemplatesWithRecent(i,o),m=dist_R.walletTemplatesWithRecent(r,o),s=e?m:c,d=s.length>8;let v=[];d?v=s.filter(E=>!E.values.includes(Z.coinbaseWallet)).slice(0,7):v=s;const O=v.slice(0,4),C=v.slice(4,8),N=Boolean(v.length);return y`<w3m-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${dist_g.QRCODE_ICON}"></w3m-modal-header>${N?y`<w3m-modal-content><div class="w3m-grid">${O} ${C.length?y`${C} ${d?y`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`:null}`:null}</div></w3m-modal-content>`:null}`}};Xe.styles=[dist_u.globalCss,Oa],Xe=Ma([custom_element_e("w3m-mobile-wallet-selection")],Xe);const Wa=i`:host{all:initial}.w3m-overlay{inset:0;position:fixed;z-index:var(--w3m-modal-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}.w3m-open{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0}.w3m-card{width:100%;position:relative;transform:translateY(5px);border-radius:30px;overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:600px){.w3m-container{max-width:440px}.w3m-card{transform:translateY(5px);border-radius:40px 40px 0 0}.w3m-overlay{align-items:flex-end}}`;var Aa=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Le=(e,t,a,n)=>{for(var o=n>1?void 0:n?La(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Aa(t,a,o),o};let re=class extends lit_element_s{constructor(){if(super(),this.open=!1,this.preload=!0,this.activeChainId=void 0,this.unsubscribeModal=void 0,this.unsubscribeConfig=void 0,this.unwatchAccount=void 0,this.unwatchNetwork=void 0,this.abortController=void 0,dist_u.setTheme(),this.unsubscribeConfig=dist/* ConfigCtrl.subscribe */.t0.subscribe(dist_u.setTheme),this.unsubscribeModal=dist/* ModalCtrl.subscribe */.jb.subscribe(e=>{e.open?this.onOpenModalEvent():this.onCloseModalEvent()}),!dist/* OptionsCtrl.state.isStandalone */.zb.state.isStandalone){dist/* OptionsCtrl.getAccount */.zb.getAccount();const e=dist/* OptionsCtrl.getSelectedChain */.zb.getSelectedChain();this.activeChainId=e?.id,this.fetchEnsProfile(),this.fetchBalance(),this.unwatchNetwork=dist/* ClientCtrl.client */.Id.client().watchNetwork(t=>{const a=t.chain;a&&this.activeChainId!==a.id&&(dist/* OptionsCtrl.setSelectedChain */.zb.setSelectedChain(a),this.activeChainId=a.id,dist/* OptionsCtrl.resetBalance */.zb.resetBalance(),this.fetchBalance())}),this.unwatchAccount=dist/* ClientCtrl.client */.Id.client().watchAccount(t=>{const{address:a}=dist/* OptionsCtrl.state */.zb.state;t.address!==a&&(this.fetchEnsProfile(t.address),this.fetchBalance(t.address)),dist/* OptionsCtrl.setAddress */.zb.setAddress(t.address),dist/* OptionsCtrl.setIsConnected */.zb.setIsConnected(t.isConnected)})}this.preloadModalData()}disconnectedCallback(){var e,t,a,n;(e=this.unsubscribeModal)==null||e.call(this),(t=this.unsubscribeConfig)==null||t.call(this),(a=this.unwatchAccount)==null||a.call(this),(n=this.unwatchNetwork)==null||n.call(this)}get overlayEl(){return dist_h.getShadowRootElement(this,".w3m-overlay")}get containerEl(){return dist_h.getShadowRootElement(this,".w3m-container")}async fetchEnsProfile(e){try{if(dist/* ConfigCtrl.state.enableAccountView */.t0.state.enableAccountView){dist/* OptionsCtrl.setProfileLoading */.zb.setProfileLoading(!0);const t=e??dist/* OptionsCtrl.state.address */.zb.state.address,{id:a}=dist/* ClientCtrl.client */.Id.client().getDefaultChain();if(t&&a===1){const[n,o]=await Promise.all([dist/* ClientCtrl.client */.Id.client().fetchEnsName({address:t,chainId:1}),dist/* ClientCtrl.client */.Id.client().fetchEnsAvatar({address:t,chainId:1})]);o&&await dist_h.preloadImage(o),dist/* OptionsCtrl.setProfileName */.zb.setProfileName(n),dist/* OptionsCtrl.setProfileAvatar */.zb.setProfileAvatar(o)}}}catch(t){console.error(t),dist/* ToastCtrl.openToast */.Vs.openToast(dist_h.getErrorMessage(t),"error")}finally{dist/* OptionsCtrl.setProfileLoading */.zb.setProfileLoading(!1)}}async fetchBalance(e){try{if(dist/* ConfigCtrl.state.enableAccountView */.t0.state.enableAccountView){dist/* OptionsCtrl.setBalanceLoading */.zb.setBalanceLoading(!0);const t=e??dist/* OptionsCtrl.state.address */.zb.state.address;if(t){const a=await dist/* ClientCtrl.client */.Id.client().fetchBalance({address:t});dist/* OptionsCtrl.setBalance */.zb.setBalance({amount:a.formatted,symbol:a.symbol})}}}catch(t){console.error(t),dist/* ToastCtrl.openToast */.Vs.openToast(dist_h.getErrorMessage(t),"error")}finally{dist/* OptionsCtrl.setBalanceLoading */.zb.setBalanceLoading(!1)}}toggleBodyScroll(e){if(document.querySelector("body"))if(e){const t=document.getElementById("w3m-styles");t?.remove()}else document.head.insertAdjacentHTML("beforeend",'<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')}async preloadExplorerData(){var e;const{standaloneChains:t,chains:a,walletConnectVersion:n}=dist/* OptionsCtrl.state */.zb.state,o=t?.join(",");await Promise.all([dist/* ExplorerCtrl.getPreviewWallets */.uc.getPreviewWallets({page:1,entries:10,chains:o,device:dist/* CoreUtil.isMobile */.zv.isMobile()?"mobile":"desktop",version:n}),dist/* ExplorerCtrl.getRecomendedWallets */.uc.getRecomendedWallets()]),dist/* OptionsCtrl.setIsDataLoaded */.zb.setIsDataLoaded(!0);const{previewWallets:r,recomendedWallets:i}=dist/* ExplorerCtrl.state */.uc.state,c=(e=a?.map(s=>dist_h.getChainIcon(s.id)))!=null?e:[],m=[...r,...i].map(s=>s.image_url.lg);await this.preloadExplorerImages([...c,...m])}async preloadExplorerImages(e){e.length&&await Promise.all(e.map(async t=>dist_h.preloadImage(t)))}async preloadCustomImages(){const e=dist_h.getCustomImageUrls();e.length&&await Promise.all(e.map(async t=>dist_h.preloadImage(t)))}async preloadConnectorImages(){if(!dist/* OptionsCtrl.state.isStandalone */.zb.state.isStandalone){const e=dist_h.getConnectorImageUrls();e.length&&await Promise.all(e.map(async t=>dist_h.preloadImage(t)))}}async preloadModalData(){try{this.preload&&(this.preload=!1,await Promise.all([this.preloadExplorerData(),this.preloadCustomImages(),this.preloadConnectorImages()]))}catch(e){console.error(e),dist/* ToastCtrl.openToast */.Vs.openToast("Failed preloading","error")}}onCloseModal(e){e.target===e.currentTarget&&dist/* ModalCtrl.close */.jb.close()}async onOpenModalEvent(){await this.preloadModalData(),this.toggleBodyScroll(!1);const e=.2;await animate_es_animate(this.containerEl,{y:0},{duration:0}).finished,animate_es_animate(this.overlayEl,{opacity:[0,1]},{duration:.2,delay:e}),animate_es_animate(this.containerEl,dist_h.isMobileAnimation()?{y:["50vh",0]}:{scale:[.98,1]},{scale:{easing:index_es_spring({velocity:.4})},y:{easing:index_es_spring({mass:.5})},delay:e}),this.addKeyboardEvents(),this.open=!0}async onCloseModalEvent(){this.toggleBodyScroll(!0),this.removeKeyboardEvents(),await Promise.all([animate_es_animate(this.containerEl,dist_h.isMobileAnimation()?{y:[0,"50vh"]}:{scale:[1,.98]},{scale:{easing:index_es_spring({velocity:0})},y:{easing:index_es_spring({mass:.5})}}).finished,animate_es_animate(this.overlayEl,{opacity:[1,0]},{duration:.2}).finished]),this.open=!1}addKeyboardEvents(){this.abortController=new AbortController,window.addEventListener("keydown",e=>{var t;e.key==="Escape"?dist/* ModalCtrl.close */.jb.close():e.key==="Tab"&&((t=e.target)!=null&&t.tagName.includes("W3M-")||this.containerEl.focus())},this.abortController),this.containerEl.focus()}removeKeyboardEvents(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}render(){const e={"w3m-overlay":!0,"w3m-open":this.open};return y`<div id="w3m-modal" class="${class_map_o(e)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${this.open?y`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`:null}</div></div>`}};re.styles=[dist_u.globalCss,Wa],Le([state_t()],re.prototype,"open",2),Le([state_t()],re.prototype,"preload",2),Le([state_t()],re.prototype,"activeChainId",2),re=Le([custom_element_e("w3m-modal")],re);const ja=i`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;var Sa=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,je=(e,t,a,n)=>{for(var o=n>1?void 0:n?Pa(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Sa(t,a,o),o};let ie=class extends lit_element_s{constructor(){super(),this.chainId="",this.label="",this.wrongNetwork=!1,this.unsubscribeNetwork=void 0,dist_h.rejectStandaloneButtonComponent();const{selectedChain:e}=dist/* OptionsCtrl.state */.zb.state;this.onSetChainData(e),this.unsubscribeNetwork=dist/* OptionsCtrl.subscribe */.zb.subscribe(({selectedChain:t})=>{this.onSetChainData(t)})}disconnectedCallback(){var e;(e=this.unsubscribeNetwork)==null||e.call(this)}onSetChainData(e){if(e){const{chains:t}=dist/* OptionsCtrl.state */.zb.state,a=t?.map(n=>n.id);this.chainId=e.id.toString(),this.wrongNetwork=!(a!=null&&a.includes(e.id)),this.label=this.wrongNetwork?"Wrong Network":e.name}}onClick(){dist/* ModalCtrl.open */.jb.open({route:"SelectNetwork"})}render(){var e;const{chains:t}=dist/* OptionsCtrl.state */.zb.state,a=t&&t.length>1;return y`<w3m-button-big @click="${this.onClick}" ?disabled="${!a}"><w3m-network-image chainId="${if_defined_l(this.chainId)}"></w3m-network-image><w3m-text variant="medium-normal" color="inverse">${(e=this.label)!=null&&e.length?this.label:"Select Network"}</w3m-text></w3m-button-big>`}};ie.styles=[dist_u.globalCss,ja],je([state_t()],ie.prototype,"chainId",2),je([state_t()],ie.prototype,"label",2),je([state_t()],ie.prototype,"wrongNetwork",2),ie=je([custom_element_e("w3m-network-switch")],ie);const _a=i`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:10px;transition:background-color .2s ease;height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:15px;justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:hover{background-color:var(--w3m-color-overlay)}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:8px;border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;var Da=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Na=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ta(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Da(t,a,o),o};let Qe=class extends lit_element_s{onClick(){dist/* RouterCtrl.push */.AV.push("WalletExplorer")}render(){const{previewWallets:e}=dist/* ExplorerCtrl.state */.uc.state,t=dist_h.getCustomWallets(),a=[...e,...t].reverse().slice(0,4);return y`<button @click="${this.onClick}"><div class="w3m-icons">${a.map(n=>{var o;const r=(o=n.image_url)==null?void 0:o.lg;if(r)return y`<img src="${r}">`;const i=dist_h.getWalletId(n.id),c=dist_h.getWalletIcon(i);return c?y`<img src="${c}">`:dist_g.WALLET_PLACEHOLDER})}</div><w3m-text variant="xsmall-normal">View All</w3m-text></button>`}};Qe.styles=[dist_u.globalCss,_a],Qe=Na([custom_element_e("w3m-view-all-wallets-button")],Qe);const Ra=i`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;var Ba=Object.defineProperty,Ua=Object.getOwnPropertyDescriptor,Ct=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ua(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ba(t,a,o),o};let Se=class extends lit_element_s{constructor(){super(),this.uri="",this.createConnectionAndWait()}get overlayEl(){return dist_h.getShadowRootElement(this,".w3m-qr-container")}async createConnectionAndWait(e=0){var t;try{const{standaloneUri:a}=dist/* OptionsCtrl.state */.zb.state;a?setTimeout(()=>this.uri=a,0):(await dist/* ClientCtrl.client */.Id.client().connectWalletConnect(n=>this.uri=n,(t=dist/* OptionsCtrl.state.selectedChain */.zb.state.selectedChain)==null?void 0:t.id),dist/* ModalCtrl.close */.jb.close())}catch(a){console.error(a),dist/* ToastCtrl.openToast */.Vs.openToast("Connection request declined","error"),e<2&&this.createConnectionAndWait(e+1)}}render(){return y`<div class="w3m-qr-container">${this.uri?y`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}"></w3m-qrcode>`:y`<w3m-spinner></w3m-spinner>`}</div>`}};Se.styles=[dist_u.globalCss,Ra],Ct([state_t()],Se.prototype,"uri",2),Se=Ct([custom_element_e("w3m-walletconnect-qr")],Se);const Ha=i`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-color-success);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-color-success),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;var Za=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,za=(e,t,a,n)=>{for(var o=n>1?void 0:n?Fa(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Za(t,a,o),o};let Je=class extends lit_element_s{onDisconnect(){dist/* ModalCtrl.close */.jb.close(),dist/* ClientCtrl.client */.Id.client().disconnect(),dist/* OptionsCtrl.resetAccount */.zb.resetAccount()}async onCopyAddress(){var e;await navigator.clipboard.writeText((e=dist/* OptionsCtrl.state.address */.zb.state.address)!=null?e:""),dist/* ToastCtrl.openToast */.Vs.openToast("Address copied","success")}render(){return y`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-normal" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${dist_g.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${dist_g.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`}};Je.styles=[dist_u.globalCss,Ha],Je=za([custom_element_e("w3m-account-view")],Je);var Va=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,qa=(e,t,a,n)=>{for(var o=n>1?void 0:n?Ga(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Va(t,a,o),o};let et=class extends lit_element_s{viewTemplate(){return dist/* CoreUtil.isAndroid */.zv.isAndroid()?y`<w3m-android-wallet-selection></w3m-android-wallet-selection>`:dist/* CoreUtil.isMobile */.zv.isMobile()?y`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`:y`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`}render(){return y`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`}};et.styles=[dist_u.globalCss],et=qa([custom_element_e("w3m-connect-wallet-view")],et);const Ka=i`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}.w3m-install-actions{display:flex}.w3m-install-actions w3m-button{margin:0 5px;opacity:1}`;var Ya=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,kt=(e,t,a,n)=>{for(var o=n>1?void 0:n?Xa(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ya(t,a,o),o};let Pe=class extends lit_element_s{constructor(){super(),this.uri="",this.createConnectionAndWait()}getRouterData(){var e;const t=(e=dist/* RouterCtrl.state.data */.AV.state.data)==null?void 0:e.DesktopConnector;if(!t)throw new Error("Missing router data");return t}onFormatAndRedirect(e){const{native:t,universal:a,name:n}=this.getRouterData();if(t){const o=dist/* CoreUtil.formatNativeUrl */.zv.formatNativeUrl(t,e,n);dist/* CoreUtil.openHref */.zv.openHref(o)}else if(a){const o=dist/* CoreUtil.formatUniversalUrl */.zv.formatUniversalUrl(a,e,n);dist/* CoreUtil.openHref */.zv.openHref(o,"_blank")}}async createConnectionAndWait(e=0){var t;const{standaloneUri:a}=dist/* OptionsCtrl.state */.zb.state,{name:n,walletId:o,native:r,universal:i,icon:c}=this.getRouterData(),m={name:n,id:o,links:{native:r,universal:i},image:c};if(a)dist_h.setRecentWallet(m),this.onFormatAndRedirect(a);else try{await dist/* ClientCtrl.client */.Id.client().connectWalletConnect(s=>{this.uri=s,this.onFormatAndRedirect(s)},(t=dist/* OptionsCtrl.state.selectedChain */.zb.state.selectedChain)==null?void 0:t.id),dist_h.setRecentWallet(m),dist/* ModalCtrl.close */.jb.close()}catch(s){console.error(s),dist/* ToastCtrl.openToast */.Vs.openToast("Connection request declined","error"),e<2&&this.createConnectionAndWait(e+1)}}onConnectWithMobile(){dist/* RouterCtrl.push */.AV.push("Qrcode")}onGoToWallet(){const{universal:e,name:t}=this.getRouterData();if(e){const a=dist/* CoreUtil.formatUniversalUrl */.zv.formatUniversalUrl(e,this.uri,t);dist/* CoreUtil.openHref */.zv.openHref(a,"_blank")}}render(){const{name:e,icon:t,universal:a,walletId:n}=this.getRouterData(),o=dist_h.getWalletName(e);return y`<w3m-modal-header title="${o}"></w3m-modal-header><w3m-modal-content><div class="w3m-wrapper">${t?y`<w3m-wallet-image src="${t}" size="lg"></w3m-wallet-image>`:y`<w3m-wallet-image size="lg" walletid="${if_defined_l(n)}"></w3m-wallet-image>`}<div class="w3m-connecting-title"><w3m-spinner></w3m-spinner><w3m-text variant="large-bold" color="secondary">${`Continue in ${o}...`}</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${async()=>this.createConnectionAndWait()}" .iconRight="${dist_g.RETRY_ICON}">Retry</w3m-button>${a?y`<w3m-button .onClick="${this.onGoToWallet.bind(this)}" .iconLeft="${dist_g.ARROW_UP_RIGHT_ICON}">Go to Wallet</w3m-button>`:y`<w3m-button .onClick="${this.onConnectWithMobile}" .iconLeft="${dist_g.MOBILE_ICON}">Connect with Mobile</w3m-button>`}</div></div></w3m-modal-content>`}};Pe.styles=[dist_u.globalCss,Ka],kt([state_t()],Pe.prototype,"uri",2),Pe=kt([custom_element_e("w3m-desktop-connector-view")],Pe);const Qa=i`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;var Ja=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=(e,t,a,n)=>{for(var o=n>1?void 0:n?en(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Ja(t,a,o),o};let tt=class extends lit_element_s{constructor(){super(...arguments),this.explorerUrl="https://explorer.walletconnect.com/"}onGet(e){dist/* CoreUtil.openHref */.zv.openHref(e,"_blank")}onExplore(){dist/* CoreUtil.openHref */.zv.openHref(this.explorerUrl,"_blank")}render(){const{recomendedWallets:e}=dist/* ExplorerCtrl.state */.uc.state,t=dist_h.getCustomWallets().slice(0,6),a=e.length,n=t.length;return y`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${a?e.map(({name:o,image_url:r,homepage:i})=>y`<div class="w3m-wallet-item"><w3m-wallet-image src="${r.lg}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o}</w3m-text><w3m-button .iconRight="${dist_g.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i)}">Get</w3m-button></div></div>`):null} ${n?t.map(({name:o,id:r,links:i})=>y`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${r}"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-normal">${o}</w3m-text><w3m-button .iconRight="${dist_g.ARROW_RIGHT_ICON}" .onClick="${()=>this.onGet(i.universal)}">Get</w3m-button></div></div>`):null}</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-normal">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${this.onExplore.bind(this)}" .iconRight="${dist_g.ARROW_UP_RIGHT_ICON}">Explore Wallets</w3m-button></div>`}};tt.styles=[dist_u.globalCss,Qa],tt=tn([custom_element_e("w3m-get-wallet-view")],tt);const on=i`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;var an=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,rn=(e,t,a,n)=>{for(var o=n>1?void 0:n?nn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&an(t,a,o),o};let ot=class extends lit_element_s{constructor(){super(...arguments),this.learnUrl="https://ethereum.org/en/wallets/"}onGet(){dist/* RouterCtrl.push */.AV.push("GetWallet")}onLearnMore(){dist/* CoreUtil.openHref */.zv.openHref(this.learnUrl,"_blank")}render(){return y`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${dist_g.HELP_CHART_IMG} ${dist_g.HELP_PAINTING_IMG} ${dist_g.HELP_ETH_IMG}</div><w3m-text variant="medium-normal">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${dist_g.HELP_KEY_IMG} ${dist_g.HELP_USER_IMG} ${dist_g.HELP_LOCK_IMG}</div><w3m-text variant="medium-normal">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${dist_g.HELP_COMPAS_IMG} ${dist_g.HELP_NOUN_IMG} ${dist_g.HELP_DAO_IMG}</div><w3m-text variant="medium-normal">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(this)}" .iconLeft="${dist_g.WALLET_ICON}">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(this)}" .iconRight="${dist_g.ARROW_UP_RIGHT_ICON}">Learn More</w3m-button></div></w3m-modal-content>`}};ot.styles=[dist_u.globalCss,on],ot=rn([custom_element_e("w3m-help-view")],ot);const ln=i`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:20px}w3m-spinner{margin-right:10px}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-injected-error w3m-button{opacity:1}`;var sn=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,at=(e,t,a,n)=>{for(var o=n>1?void 0:n?cn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&sn(t,a,o),o};let ye=class extends lit_element_s{constructor(){super(),this.connecting=!0,this.error=!1,this.connector=dist/* ClientCtrl.client */.Id.client().getConnectorById("injected"),this.onConnect()}async onConnect(){const{ready:e}=this.connector;e&&(this.error=!1,this.connecting=!0,await dist_h.handleConnectorConnection("injected",()=>{this.error=!0,this.connecting=!1}))}render(){const e=dist_h.getWalletName(this.connector.name),t=dist_h.getWalletId(this.connector.id),a={"w3m-injected-wrapper":!0,"w3m-injected-error":this.error};return y`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="${class_map_o(a)}"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-connecting-title">${this.connecting?y`<w3m-spinner></w3m-spinner>`:null}<w3m-text variant="large-bold" color="${this.error?"error":"secondary"}">${this.error?"Connection declined":`Continue in ${e}...`}</w3m-text></div><w3m-button .onClick="${this.onConnect.bind(this)}" .disabled="${!this.error}" .iconRight="${dist_g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`}};ye.styles=[dist_u.globalCss,ln],at([state_t()],ye.prototype,"connecting",2),at([state_t()],ye.prototype,"error",2),ye=at([custom_element_e("w3m-injected-connector-view")],ye);const dn=i`.w3m-injected-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}.w3m-install-title{display:flex;align-items:center;justify-content:center;flex-direction:column}.w3m-install-title w3m-text:last-child{margin-top:10px;max-width:240px}.w3m-install-actions{display:flex;margin-top:15px;align-items:center;flex-direction:column}@media(max-width:355px){.w3m-install-actions{flex-direction:column;align-items:center}}w3m-wallet-image{border-radius:15px;width:25%;aspect-ratio:1/1;margin-bottom:20px}w3m-button{opacity:0}.w3m-install-actions w3m-button{margin:5px;opacity:1}.w3m-info-text{text-align:center}`;var hn=Object.defineProperty,mn=Object.getOwnPropertyDescriptor,pn=(e,t,a,n)=>{for(var o=n>1?void 0:n?mn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&hn(t,a,o),o};let nt=class extends lit_element_s{getRouterData(){var e;const t=(e=dist/* RouterCtrl.state.data */.AV.state.data)==null?void 0:e.InstallConnector;if(!t)throw new Error("Missing router data");return t}onInstall(){const{url:e}=this.getRouterData();dist/* CoreUtil.openHref */.zv.openHref(e,"_blank")}onMobile(){const{name:e}=this.getRouterData();dist/* RouterCtrl.push */.AV.push("ConnectWallet"),dist/* ToastCtrl.openToast */.Vs.openToast(`Scan the code with ${e}`,"success")}render(){const{name:e,id:t,isMobile:a}=this.getRouterData();return y`<w3m-modal-header title="${e}"></w3m-modal-header><w3m-modal-content><div class="w3m-injected-wrapper"><w3m-wallet-image walletId="${t}" size="lg"></w3m-wallet-image><div class="w3m-install-title"><w3m-text variant="large-bold">Install ${e}</w3m-text><w3m-text color="secondary" variant="medium-thin" class="w3m-info-text">To connect ${e}, install the browser extension.</w3m-text></div><div class="w3m-install-actions"><w3m-button .onClick="${this.onInstall.bind(this)}" .iconLeft="${dist_g.ARROW_DOWN_ICON}">Install Extension</w3m-button>${a?y`<w3m-button .onClick="${this.onMobile.bind(this)}" .iconLeft="${dist_g.MOBILE_ICON}">${e} Mobile</w3m-button>`:null}</div></div></w3m-modal-content>`}};nt.styles=[dist_u.globalCss,dn],nt=pn([custom_element_e("w3m-install-connector-view")],nt);var un=Object.defineProperty,vn=Object.getOwnPropertyDescriptor,gn=(e,t,a,n)=>{for(var o=n>1?void 0:n?vn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&un(t,a,o),o};let rt=class extends lit_element_s{render(){return y`<w3m-modal-header title="Scan the code" .onAction="${dist_h.handleUriCopy}" .actionIcon="${dist_g.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`}};rt.styles=[dist_u.globalCss],rt=gn([custom_element_e("w3m-qrcode-view")],rt);const wn=i`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}`;var bn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,yn=(e,t,a,n)=>{for(var o=n>1?void 0:n?fn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&bn(t,a,o),o};let it=class extends lit_element_s{async onSelectChain(e){const{isConnected:t,selectedChain:a,walletConnectVersion:n}=dist/* OptionsCtrl.state */.zb.state;t?a?.id===e.id?dist/* RouterCtrl.replace */.AV.replace("Account"):n===2?(await dist/* ClientCtrl.client */.Id.client().switchNetwork({chainId:e.id}),dist/* RouterCtrl.replace */.AV.replace("Account")):dist/* RouterCtrl.push */.AV.push("SwitchNetwork",{SwitchNetwork:e}):(dist/* RouterCtrl.push */.AV.push("ConnectWallet"),dist/* OptionsCtrl.setSelectedChain */.zb.setSelectedChain(e))}render(){const{chains:e}=dist/* OptionsCtrl.state */.zb.state;return y`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div class="w3m-grid">${e?.map(t=>y`<w3m-network-button name="${t.name}" chainId="${t.id}" .onClick="${async()=>this.onSelectChain(t)}">${t.name}</w3m-network-button>`)}</div></w3m-modal-content>`}};it.styles=[dist_u.globalCss,wn],it=yn([custom_element_e("w3m-select-network-view")],it);const xn=i`.w3m-wrapper{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;flex-direction:column}.w3m-connecting-title{display:flex;align-items:center;justify-content:center;margin-bottom:16px}w3m-spinner{margin-right:10px}w3m-network-image{width:96px;height:96px;margin-bottom:20px}w3m-button{opacity:0}.w3m-error w3m-button{opacity:1}`;var Cn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,$t=(e,t,a,n)=>{for(var o=n>1?void 0:n?kn(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&Cn(t,a,o),o};let _e=class extends lit_element_s{constructor(){super(),this.error=!1,this.onSwitchNetwork()}getRouterData(){var e;const t=(e=dist/* RouterCtrl.state.data */.AV.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error("Missing router data");return t}async onSwitchNetwork(){try{this.error=!1;const e=this.getRouterData();await dist/* ClientCtrl.client */.Id.client().switchNetwork({chainId:e.id}),dist/* OptionsCtrl.setSelectedChain */.zb.setSelectedChain(e),dist/* RouterCtrl.replace */.AV.replace("Account")}catch{this.error=!0}}render(){const{id:e,name:t}=this.getRouterData(),a={"w3m-wrapper":!0,"w3m-error":this.error};return y`<w3m-modal-header title="${`Connect to ${t}`}"></w3m-modal-header><w3m-modal-content><div class="${class_map_o(a)}"><w3m-network-image chainId="${e}"></w3m-network-image><div class="w3m-connecting-title">${this.error?null:y`<w3m-spinner></w3m-spinner>`}<w3m-text variant="large-bold" color="${this.error?"error":"secondary"}">${this.error?"Connection declined":"Approve in your wallet"}</w3m-text></div><w3m-button .onClick="${this.onSwitchNetwork.bind(this)}" .disabled="${!this.error}" .iconRight="${dist_g.RETRY_ICON}">Try Again</w3m-button></div></w3m-modal-content>`}};_e.styles=[dist_u.globalCss,xn],$t([state_t()],_e.prototype,"error",2),_e=$t([custom_element_e("w3m-switch-network-view")],_e);const $n=i`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;var On=Object.defineProperty,In=Object.getOwnPropertyDescriptor,xe=(e,t,a,n)=>{for(var o=n>1?void 0:n?In(t,a):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(o=(n?i(t,a,o):i(o))||o);return n&&o&&On(t,a,o),o};const lt=40;let Q=class extends lit_element_s{constructor(){super(...arguments),this.loading=!dist/* ExplorerCtrl.state.wallets.listings.length */.uc.state.wallets.listings.length,this.firstFetch=!dist/* ExplorerCtrl.state.wallets.listings.length */.uc.state.wallets.listings.length,this.search="",this.endReached=!1,this.intersectionObserver=void 0,this.searchDebounce=dist_h.debounce(e=>{e.length>=3?(this.firstFetch=!0,this.endReached=!1,this.search=e,dist/* ExplorerCtrl.resetSearch */.uc.resetSearch(),this.fetchWallets()):this.search&&(this.search="",this.endReached=this.isLastPage(),dist/* ExplorerCtrl.resetSearch */.uc.resetSearch())})}firstUpdated(){this.createPaginationObserver()}disconnectedCallback(){var e;(e=this.intersectionObserver)==null||e.disconnect()}get placeholderEl(){return dist_h.getShadowRootElement(this,".w3m-placeholder-block")}createPaginationObserver(){this.intersectionObserver=new IntersectionObserver(([e])=>{e.isIntersecting&&!(this.search&&this.firstFetch)&&this.fetchWallets()}),this.intersectionObserver.observe(this.placeholderEl)}isLastPage(){const{wallets:e,search:t}=dist/* ExplorerCtrl.state */.uc.state,{listings:a,total:n}=this.search?t:e;return n<=lt||a.length>=n}async fetchWallets(){var e;const{wallets:t,search:a}=dist/* ExplorerCtrl.state */.uc.state,n=dist_h.getExtensionWallets(),{listings:o,total:r,page:i}=this.search?a:t;if(!this.endReached&&(this.firstFetch||r>lt&&o.length<r))try{this.loading=!0;const c=(e=dist/* OptionsCtrl.state.standaloneChains */.zb.state.standaloneChains)==null?void 0:e.join(","),{listings:m}=await dist/* ExplorerCtrl.getPaginatedWallets */.uc.getPaginatedWallets({page:this.firstFetch?1:i+1,entries:lt,device:dist/* CoreUtil.isMobile */.zv.isMobile()?"mobile":"desktop",search:this.search,version:dist/* OptionsCtrl.state.walletConnectVersion */.zb.state.walletConnectVersion,chains:c}),s=m.map(({image_url:v})=>v.lg),d=n.map(({id:v})=>dist_h.getWalletIcon(v));await Promise.all([...s.map(async v=>dist_h.preloadImage(v)),...d.map(async v=>dist_h.preloadImage(v)),dist/* CoreUtil.wait */.zv.wait(300)]),this.endReached=this.isLastPage()}catch(c){console.error(c),dist/* ToastCtrl.openToast */.Vs.openToast(dist_h.getErrorMessage(c),"error")}finally{this.loading=!1,this.firstFetch=!1}}onConnectCustom({name:e,id:t,links:a}){dist/* CoreUtil.isMobile */.zv.isMobile()?dist_h.handleMobileLinking({links:a,name:e,id:t}):dist/* RouterCtrl.push */.AV.push("DesktopConnector",{DesktopConnector:{name:e,walletId:t,universal:a.universal,native:a.native}})}onConnectListing(e){if(dist/* CoreUtil.isMobile */.zv.isMobile()){const{id:t,image_url:a}=e,{native:n,universal:o}=e.mobile;dist_h.handleMobileLinking({links:{native:n,universal:o},name:e.name,id:t,image:a.lg})}else dist/* RouterCtrl.push */.AV.push("DesktopConnector",{DesktopConnector:{name:e.name,icon:e.image_url.lg,universal:e.desktop.universal||e.homepage,native:e.desktop.native}})}onConnectExtension(e){dist_h.getWalletId("")===e.id?dist/* RouterCtrl.push */.AV.push("InjectedConnector"):dist/* RouterCtrl.push */.AV.push("InstallConnector",{InstallConnector:e})}onSearchChange(e){const{value:t}=e.target;this.searchDebounce(t)}coinbaseConnectorTemplate(){try{const e=dist/* ClientCtrl.client */.Id.client().getConnectorById(Z.coinbaseWallet);return y`<w3m-wallet-button name="${e.name}" walletId="${e.id}" .onClick="${async()=>dist_h.handleConnectorConnection(Z.coinbaseWallet)}"></w3m-wallet-button>`}catch{return null}}render(){const{wallets:e,search:t}=dist/* ExplorerCtrl.state */.uc.state,{isStandalone:a}=dist/* OptionsCtrl.state */.zb.state;let{listings:n}=this.search?t:e;n=dist_R.allowedExplorerListings(n);const o=this.loading&&!n.length,r=this.search.length>=3,i=!o&&(!r||dist_h.caseSafeIncludes(Z.coinbaseWallet,this.search));let c=!a&&!dist/* CoreUtil.isMobile */.zv.isMobile()?dist_h.getExtensionWallets():[],m=dist_h.getCustomWallets();r&&(c=c.filter(({name:O})=>dist_h.caseSafeIncludes(O,this.search)),m=m.filter(({name:O})=>dist_h.caseSafeIncludes(O,this.search)));const s=!this.loading&&!n.length&&!c.length&&!i,d=Math.max(c.length,n.length),v={"w3m-loading":o,"w3m-end-reached":this.endReached||!this.loading,"w3m-empty":s};return y`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(this)}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${class_map_o(v)}"><div class="w3m-grid">${o?null:[...Array(d)].map((O,C)=>y`${m[C]?y`<w3m-wallet-button name="${m[C].name}" walletId="${m[C].id}" .onClick="${()=>this.onConnectCustom(m[C])}"></w3m-wallet-button>`:null} ${c[C]?y`<w3m-wallet-button name="${c[C].name}" walletId="${c[C].id}" .onClick="${()=>this.onConnectExtension(c[C])}"></w3m-wallet-button>`:null} ${n[C]?y`<w3m-wallet-button src="${n[C].image_url.lg}" name="${n[C].name}" walletId="${n[C].id}" .onClick="${()=>this.onConnectListing(n[C])}"></w3m-wallet-button>`:null}`)} ${i?this.coinbaseConnectorTemplate():null}</div><div class="w3m-placeholder-block">${s?y`<w3m-text variant="large-bold" color="secondary">No results found</w3m-text>`:null} ${!s&&this.loading?y`<w3m-spinner></w3m-spinner>`:null}</div></w3m-modal-content>`}};Q.styles=[dist_u.globalCss,$n],xe([state_t()],Q.prototype,"loading",2),xe([state_t()],Q.prototype,"firstFetch",2),xe([state_t()],Q.prototype,"search",2),xe([state_t()],Q.prototype,"endReached",2),Q=xe([custom_element_e("w3m-wallet-explorer-view")],Q);
//# sourceMappingURL=index.js.map


/***/ })

};
;