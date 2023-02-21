"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 30218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Id": () => (/* binding */ L),
  "t0": () => (/* binding */ W),
  "zv": () => (/* binding */ d),
  "uc": () => (/* binding */ A),
  "jb": () => (/* binding */ k),
  "zb": () => (/* binding */ dist_a),
  "AV": () => (/* binding */ dist_g),
  "Vs": () => (/* binding */ P)
});

;// CONCATENATED MODULE: ./node_modules/proxy-compare/dist/index.modern.js
const e=Symbol(),t=Symbol(),r="a",n="w";let o=(e,t)=>new Proxy(e,t);const s=Object.getPrototypeOf,c=new WeakMap,l=e=>e&&(c.has(e)?c.get(e):s(e)===Object.prototype||s(e)===Array.prototype),f=e=>"object"==typeof e&&null!==e,i=new WeakMap,a=e=>e[t]||e,u=(c,f,p)=>{if(!l(c))return c;const y=a(c),g=(e=>Object.isFrozen(e)||Object.values(Object.getOwnPropertyDescriptors(e)).some(e=>!e.writable))(y);let h=p&&p.get(y);return h&&h[1].f===g||(h=((o,s)=>{const c={f:s};let l=!1;const f=(e,t)=>{if(!l){let s=c[r].get(o);if(s||(s={},c[r].set(o,s)),e===n)s[n]=!0;else{let r=s[e];r||(r=new Set,s[e]=r),r.add(t)}}},i={get:(e,n)=>n===t?o:(f("k",n),u(Reflect.get(e,n),c[r],c.c)),has:(t,n)=>n===e?(l=!0,c[r].delete(o),!0):(f("h",n),Reflect.has(t,n)),getOwnPropertyDescriptor:(e,t)=>(f("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(f(n),Reflect.ownKeys(e))};return s&&(i.set=i.deleteProperty=()=>!1),[i,c]})(y,g),h[1].p=o(g?(e=>{let t=i.get(e);if(!t){if(Array.isArray(e))t=Array.from(e);else{const r=Object.getOwnPropertyDescriptors(e);Object.values(r).forEach(e=>{e.configurable=!0}),t=Object.create(s(e),r)}i.set(e,t)}return t})(y):y,h[0]),p&&p.set(y,h)),h[1][r]=f,h[1].c=p,h[1].p},p=(e,t,r,o)=>{if(Object.is(e,t))return!1;if(!f(e)||!f(t))return!0;const s=r.get(a(e));if(!s)return!0;if(o){const r=o.get(e);if(r&&r.n===t)return r.g;o.set(e,{n:t,g:!1})}let c=null;try{for(const r of s.h||[])if(c=Reflect.has(e,r)!==Reflect.has(t,r),c)return c;if(!0===s[n]){if(c=((e,t)=>{const r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t),c)return c}else for(const r of s.o||[])if(c=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r),c)return c;for(const n of s.k||[])if(c=p(e[n],t[n],r,o),c)return c;return null===c&&(c=!0),c}finally{o&&o.set(e,{n:t,g:c})}},y=t=>!!l(t)&&e in t,g=e=>l(e)&&e[t]||null,h=(e,t=!0)=>{c.set(e,t)},w=(e,t,r)=>{const o=[],s=new WeakSet,c=(e,l)=>{if(s.has(e))return;f(e)&&s.add(e);const i=f(e)&&t.get(a(e));if(i){var u,p;if(null==(u=i.h)||u.forEach(e=>{const t=`:has(${String(e)})`;o.push(l?[...l,t]:[t])}),!0===i[n]){const e=":ownKeys";o.push(l?[...l,e]:[e])}else{var y;null==(y=i.o)||y.forEach(e=>{const t=`:hasOwn(${String(e)})`;o.push(l?[...l,t]:[t])})}null==(p=i.k)||p.forEach(t=>{r&&!("value"in(Object.getOwnPropertyDescriptor(e,t)||{}))||c(e[t],l?[...l,t]:[t])})}else l&&o.push(l)};return c(e),o},O=e=>{o=e};
//# sourceMappingURL=index.modern.mjs.map

;// CONCATENATED MODULE: ./node_modules/valtio/esm/vanilla.mjs


const isObject = (x) => typeof x === "object" && x !== null;
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
  switch (promise.status) {
    case "fulfilled":
      return promise.value;
    case "rejected":
      throw promise.reason;
    default:
      throw promise;
  }
}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  h(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    const value = Reflect.get(target, key);
    if (refSet.has(value)) {
      h(value, false);
      snap[key] = value;
    } else if (value instanceof Promise) {
      Object.defineProperty(snap, key, {
        get() {
          return handlePromise(value);
        }
      });
    } else if (proxyStateMap.has(value)) {
      snap[key] = snapshot(value, handlePromise);
    } else {
      snap[key] = value;
    }
  });
  return Object.freeze(snap);
}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction2 = (initialObject) => {
  if (!isObject(initialObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(initialObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propProxyState) => {
    if ( true && propProxyStates.has(prop)) {
      throw new Error("prop listener already exists");
    }
    if (listeners.size) {
      const remove = propProxyState[3](createPropListener(prop));
      propProxyStates.set(prop, [propProxyState, remove]);
    } else {
      propProxyStates.set(prop, [propProxyState]);
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ( true && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
  const handler = {
    deleteProperty(target, prop) {
      const prevValue = Reflect.get(target, prop);
      removePropListener(prop);
      const deleted = Reflect.deleteProperty(target, prop);
      if (deleted) {
        notifyUpdate(["delete", [prop], prevValue]);
      }
      return deleted;
    },
    set(target, prop, value, receiver) {
      var _a;
      const hasPrevValue = Reflect.has(target, prop);
      const prevValue = Reflect.get(target, prop, receiver);
      if (hasPrevValue && objectIs(prevValue, value)) {
        return true;
      }
      removePropListener(prop);
      if (isObject(value)) {
        value = g(value) || value;
      }
      let nextValue = value;
      if ((_a = Object.getOwnPropertyDescriptor(target, prop)) == null ? void 0 : _a.set) ; else if (value instanceof Promise) {
        value.then((v) => {
          value.status = "fulfilled";
          value.value = v;
          notifyUpdate(["resolve", [prop], v]);
        }).catch((e) => {
          value.status = "rejected";
          value.reason = e;
          notifyUpdate(["reject", [prop], e]);
        });
      } else {
        if (!proxyStateMap.has(value) && canProxy(value)) {
          nextValue = proxy(value);
        }
        const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
        if (childProxyState) {
          addPropListener(prop, childProxyState);
        }
      }
      Reflect.set(target, prop, nextValue, receiver);
      notifyUpdate(["set", [prop], value, prevValue]);
      return true;
    }
  };
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(initialObject, proxyObject);
  const proxyState = [
    baseObject,
    ensureVersion,
    createSnapshot,
    addListener
  ];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(initialObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      initialObject,
      key
    );
    if (desc.get || desc.set) {
      Object.defineProperty(baseObject, key, desc);
    } else {
      proxyObject[key] = initialObject[key];
    }
  });
  return proxyObject;
}) => [
  // public functions
  proxyFunction2,
  // shared state
  proxyStateMap,
  refSet,
  // internal things
  objectIs,
  newProxy,
  canProxy,
  defaultHandlePromise,
  snapCache,
  createSnapshot,
  proxyCache,
  versionHolder
];
const [proxyFunction] = buildProxyFunction();
function proxy(initialObject = {}) {
  return proxyFunction(initialObject);
}
function getVersion(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  return proxyState == null ? void 0 : proxyState[1]();
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ( true && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[3];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (notifyInSync) {
      callback(ops.splice(0));
      return;
    }
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject, handlePromise) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ( true && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion, createSnapshot] = proxyState;
  return createSnapshot(target, ensureVersion(), handlePromise);
}
function ref(obj) {
  refSet.add(obj);
  return obj;
}
const unstable_buildProxyFunction = (/* unused pure expression or super */ null && (buildProxyFunction));



// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(14300);
;// CONCATENATED MODULE: ./node_modules/@web3modal/core/dist/index.js
const dist_n=proxy({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,walletConnectVersion:1}),dist_a={state:dist_n,subscribe(e){return subscribe(dist_n,()=>e(dist_n))},setChains(e){dist_n.chains=e},setStandaloneChains(e){dist_n.standaloneChains=e},setStandaloneUri(e){dist_n.standaloneUri=e},getSelectedChain(){const e=L.client().getNetwork().chain;return e&&(dist_n.selectedChain=e),dist_n.selectedChain},setSelectedChain(e){dist_n.selectedChain=e},setIsStandalone(e){dist_n.isStandalone=e},setIsCustomDesktop(e){dist_n.isCustomDesktop=e},setIsCustomMobile(e){dist_n.isCustomMobile=e},getAccount(){const e=L.client().getAccount();dist_n.address=e.address,dist_n.isConnected=e.isConnected},setAddress(e){dist_n.address=e},setIsConnected(e){dist_n.isConnected=e},setProfileName(e){dist_n.profileName=e},setProfileAvatar(e){dist_n.profileAvatar=e},setProfileLoading(e){dist_n.profileLoading=e},setBalanceLoading(e){dist_n.balanceLoading=e},setBalance(e){dist_n.balance=e},setIsDataLoaded(e){dist_n.isDataLoaded=e},setIsUiLoaded(e){dist_n.isUiLoaded=e},setWalletConnectVersion(e){dist_n.walletConnectVersion=e},resetEnsProfile(){dist_n.profileName=void 0,dist_n.profileAvatar=void 0},resetBalance(){dist_n.balance=void 0},resetAccount(){dist_n.address=void 0,dist_n.isConnected=!1,dist_a.resetEnsProfile(),dist_a.resetBalance()}},dist_h=proxy({initialized:!1,ethereumClient:void 0}),L={setEthereumClient(e){!dist_h.initialized&&e&&(dist_h.ethereumClient=e,dist_a.setChains(e.chains),dist_h.initialized=!0)},client(){if(dist_h.ethereumClient)return dist_h.ethereumClient;throw new Error("ClientCtrl has no client set")}},d={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return d.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isEmptyObject(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.getOwnPropertyNames(e).length===0&&Object.getOwnPropertySymbols(e).length===0},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,s){if(d.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),this.setWalletConnectDeepLink(o,s);const l=encodeURIComponent(t);return`${o}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!d.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;e.endsWith("/")&&(o=e.slice(0,-1)),this.setWalletConnectDeepLink(o,s);const l=encodeURIComponent(t);return`${o}/wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t="_self"){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){localStorage.setItem(d.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink(e){const[t]=e.split("?");localStorage.setItem(d.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))},removeWalletConnectDeepLink(){localStorage.removeItem(d.WALLETCONNECT_DEEPLINK_CHOICE)},isNull(e){return e===null}};function S(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const dist_f=proxy({projectId:"",themeMode:S()?"dark":"light",themeColor:"default",themeBackground:d.isMobile()?"themeColor":"gradient",themeZIndex:89,mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,defaultChain:void 0,explorerAllowList:void 0,explorerDenyList:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),W={state:dist_f,subscribe(e){return subscribe(dist_f,()=>e(dist_f))},setConfig(e){var t,s,o,l;if(dist_a.setStandaloneChains(e.standaloneChains),dist_a.setIsStandalone(Boolean((t=e.standaloneChains)==null?void 0:t.length)||Boolean(e.enableStandaloneMode)),dist_a.setIsCustomMobile(Boolean((s=e.mobileWallets)==null?void 0:s.length)),dist_a.setIsCustomDesktop(Boolean((o=e.desktopWallets)==null?void 0:o.length)),dist_a.setWalletConnectVersion((l=e.walletConnectVersion)!=null?l:1),e.defaultChain)dist_a.setSelectedChain(e.defaultChain);else if(!dist_a.state.isStandalone){const u=L.client().getDefaultChain();dist_a.setSelectedChain(u)}Object.assign(dist_f,e)},setThemeConfig(e){Object.assign(dist_f,e)}},I="https://explorer-api.walletconnect.com";function dist_y(e){const t=Object.fromEntries(Object.entries(e).filter(([s,o])=>typeof o<"u"&&o!==null&&o!=="").map(([s,o])=>[s,o.toString()]));return new URLSearchParams(t).toString()}const v={async fetchWallets(e,t){const s=dist_y(t),o=`${I}/v3/wallets?projectId=${e}&${s}`;return(await fetch(o)).json()},formatImageUrl(e,t){return`${I}/v3/logo/lg/${t}?projectId=${e}`}},dist_r=proxy({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},previewWallets:[],recomendedWallets:[]});function b(){const{projectId:e}=W.state;if(!e)throw new Error("projectId is required to work with explorer api");return e}const A={state:dist_r,async getPreviewWallets(e){const{listings:t}=await v.fetchWallets(b(),e);return dist_r.previewWallets=Object.values(t),dist_r.previewWallets},async getRecomendedWallets(){const{listings:e}=await v.fetchWallets(b(),{page:1,entries:6});dist_r.recomendedWallets=Object.values(e)},async getPaginatedWallets(e){const{page:t,search:s}=e,{listings:o,total:l}=await v.fetchWallets(b(),e),u=Object.values(o),w=s?"search":"wallets";return dist_r[w]={listings:[...dist_r[w].listings,...u],total:l,page:t??1},{listings:u,total:l}},getImageUrl(e){return v.formatImageUrl(b(),e)},resetSearch(){dist_r.search={listings:[],total:0,page:1}}},dist_i=proxy({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),dist_g={state:dist_i,subscribe(e){return subscribe(dist_i,()=>e(dist_i))},push(e,t){e!==dist_i.view&&(dist_i.view=e,t&&(dist_i.data=t),dist_i.history.push(e))},replace(e){dist_i.view=e,dist_i.history=[e]},goBack(){if(dist_i.history.length>1){dist_i.history.pop();const[e]=dist_i.history.slice(-1);dist_i.view=e}}},C=proxy({open:!1}),k={state:C,subscribe(e){return subscribe(C,()=>e(C))},async open(e){return new Promise(t=>{const{isConnected:s,isStandalone:o,isUiLoaded:l,isDataLoaded:u}=dist_a.state,{enableNetworkView:w}=W.state;if(o?(dist_a.setStandaloneUri(e?.uri),dist_a.setStandaloneChains(e?.standaloneChains),dist_g.replace("ConnectWallet")):e!=null&&e.route?dist_g.replace(e.route):s?dist_g.replace("Account"):w?dist_g.replace("SelectNetwork"):dist_g.replace("ConnectWallet"),l&&u)C.open=!0,t();else{const E=setInterval(()=>{dist_a.state.isUiLoaded&&dist_a.state.isDataLoaded&&(clearInterval(E),C.open=!0,t())},200)}})},close(){C.open=!1}},dist_c=proxy({open:!1,message:"",variant:"success"}),P={state:dist_c,subscribe(e){return subscribe(dist_c,()=>e(dist_c))},openToast(e,t){dist_c.open=!0,dist_c.message=e,dist_c.variant=t},closeToast(){dist_c.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=external_buffer_.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 36648:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web3Modal": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _web3modal_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30218);
var s=Object.defineProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(o,e,t)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))c.call(e,t)&&i(o,t,e[t]);if(a)for(var t of a(e))d.call(e,t)&&i(o,t,e[t]);return o};class f{constructor(e){this.openModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl.open */ .jb.open,this.closeModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl.close */ .jb.close,this.subscribeModal=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ModalCtrl.subscribe */ .jb.subscribe,this.setTheme=_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ConfigCtrl.setThemeConfig */ .t0.setThemeConfig,_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .ConfigCtrl.setConfig */ .t0.setConfig(b({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await __webpack_require__.e(/* import() */ 284).then(__webpack_require__.bind(__webpack_require__, 57284));const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),_web3modal_core__WEBPACK_IMPORTED_MODULE_0__/* .OptionsCtrl.setIsUiLoaded */ .zb.setIsUiLoaded(!0)}}}
//# sourceMappingURL=index.js.map


/***/ })

};
;