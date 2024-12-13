"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,d=p["".concat(l,".").concat(g)]||p[g]||h[g]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:11,description:"AI Agents Integration"},a="AI Agents integration",s={unversionedId:"protocol/agents-integration",id:"protocol/agents-integration",title:"AI Agents integration",description:"AI Agents Integration",source:"@site/docs/protocol/agents-integration.mdx",sourceDirName:"protocol",slug:"/protocol/agents-integration",permalink:"/docs/protocol/agents-integration",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,description:"AI Agents Integration"},sidebar:"tutorialSidebar",previous:{title:"User Flows",permalink:"/docs/protocol/user-flows"},next:{title:"Agents Query Protocol",permalink:"/docs/protocol/query-protocol"}},l={},c=[{value:"Integration with a Human in the loop",id:"integration-with-a-human-in-the-loop",level:2},{value:"AI Agent integration without Human in the loop",id:"ai-agent-integration-without-human-in-the-loop",level:2}],u={toc:c};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ai-agents-integration"},"AI Agents integration"),(0,o.kt)("p",null,"Via the Nevermined Protocol agents can be integrated to be used by users or other applications. Once the user owns the plan giving access to an AI Agent, it is up to the user to decide how they want to integrate or use that agent. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Building a user interface that sends queries to the agent and return the answers provided"),(0,o.kt)("li",{parentName:"ul"},"Integrating the Agent in another AI Agent with a bigger purpose. So the second agent integrating the first one can decompose complex questions into smaller steps where some of these steps can be resolved by other AI."),(0,o.kt)("li",{parentName:"ul"},"Use directly the AI Agent sending direct queries from a command line interface or similar.")),(0,o.kt)("h2",{id:"integration-with-a-human-in-the-loop"},"Integration with a Human in the loop"),(0,o.kt)("p",null,"This scenario is the representation of a user who identifies an interesting AI Agent, purchases it and integrates the agent (via the Nevermined Library) in some software. The flow is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user discovers an AI Agent via Nevermined App or Library"),(0,o.kt)("li",{parentName:"ol"},"The user purchases the Payment Plan attached to it. The settlements for the payment and distribution are registered on-chain"),(0,o.kt)("li",{parentName:"ol"},"The user gets an access key (JWT) granting access to the Payment Plan\u2019s assets and services"),(0,o.kt)("li",{parentName:"ol"},"The user configures the Access Token, Proxy and DID of the Agent in the software"),(0,o.kt)("li",{parentName:"ol"},"Via the Nevermined Library (or standard HTTP requests) the software configured by the user requests the execution of a Task to the AI Agent through the Proxy"),(0,o.kt)("li",{parentName:"ol"},"The Nevermined Proxy validates the request"),(0,o.kt)("li",{parentName:"ol"},"If everything is right the Proxy forwards the request to the Upstream AI Agent"),(0,o.kt)("li",{parentName:"ol"},"The Agent process the Task requested and returns the results")),(0,o.kt)("p",null,"As described before, if the execution was correct Nevermined infrastructure will redeem the credits used to process the Task."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AI Agent integration with human in the loop",src:n(70891).Z,width:"960",height:"540"})),(0,o.kt)("h2",{id:"ai-agent-integration-without-human-in-the-loop"},"AI Agent integration without Human in the loop"),(0,o.kt)("p",null,"This scenario is more sophisticated and represents an autonomous agent that via the Nevermined Protocol discovers other agents and integrating them automatically without any user interaction. This scenario requires the AI Builder to create an AI Agent integrated via the Nevermined Library, sophisticated enough to perform the discovery process, purchase and query programmatically via that Library. The flow is as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The AI Builder gets the Nevermined API Key from the Nevermined App. The user is able to configure certain permissions associated with the key"),(0,o.kt)("li",{parentName:"ol"},"The App returns the Nevermined API Key to the AI Builder"),(0,o.kt)("li",{parentName:"ol"},"The AI Builder configures the API Key in the Agent via Nevermined Library"),(0,o.kt)("li",{parentName:"ol"},"Having the API Key configured the AI Agent can discover other agents, purchase access credits and query them without any human interaction")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AI Agent integration without a human in the loop",src:n(86612).Z,width:"960",height:"540"})))}h.isMDXComponent=!0},70891:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration_human-0e3715bb23c9037a9ba8e1b183e5b6b9.png"},86612:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration_without_human-966d1b115a9d0a4f4fcbd4d3ce17dbdf.png"}}]);