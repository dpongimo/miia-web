import{S as t,i as e,s as n,G as l,b as s,c as a,f as i,d as c,h as r,p as o,a as h,n as d,H as u,o as f,I as m,t as g,g as p,J as v,j as $,u as b,l as x,r as _,k as y,m as E,e as k,K as w,B as I,L as D,A as R,v as V,y as S,z as L,C as U,M as O,N,O as P,P as j,Q as M,R as T,E as Q}from"./client.5eb595c1.js";import{G as A,I as H,T as z}from"./TagSearch.a52a3657.js";function B(t,e=this){return new Promise((function(n){setTimeout(n.bind(null,e),t)}))}function G(t){let e,n,l,o=t[13].message+"";return{c(){e=s("div"),n=s("pre"),l=g(o),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=i(e);n=a(s,"PRE",{style:!0});var r=i(n);l=p(r,o),r.forEach(c),s.forEach(c),this.h()},h(){v(n,"color","red"),r(e,"class","card-body")},m(t,s){h(t,e,s),$(e,n),$(n,l)},p(t,e){1&e&&o!==(o=t[13].message+"")&&b(l,o)},d(t){t&&c(e)}}}function C(t){let e,n,l,i;return{c(){e=s("img"),this.h()},l(t){e=a(t,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){e.src!==(n=URL.createObjectURL(t[12]))&&r(e,"src",n),r(e,"alt",t[0]),r(e,"id",t[0]),r(e,"class","svelte-1x1zhyt")},m(n,s){h(n,e,s),t[8](e),l||(i=[x(e,"load",t[4]),x(e,"click",t[5])],l=!0)},p(t,l){1&l&&e.src!==(n=URL.createObjectURL(t[12]))&&r(e,"src",n),1&l&&r(e,"alt",t[0]),1&l&&r(e,"id",t[0])},d(n){n&&c(e),t[8](null),l=!1,_(i)}}}function J(t){let e,n,l,o,d,u;return{c(){e=s("div"),n=s("div"),l=y(),o=s("p"),d=g("Querying "),u=g(t[0]),this.h()},l(s){e=a(s,"DIV",{class:!0});var r=i(e);n=a(r,"DIV",{class:!0,role:!0,"aria-hidden":!0}),i(n).forEach(c),l=E(r),o=a(r,"P",{});var h=i(o);d=p(h,"Querying "),u=p(h,t[0]),h.forEach(c),r.forEach(c),this.h()},h(){r(n,"class","spinner-border"),r(n,"role","status"),r(n,"aria-hidden","true"),r(e,"class","card-body loading svelte-1x1zhyt")},m(t,s){h(t,e,s),$(e,n),$(e,l),$(e,o),$(o,d),$(o,u)},p(t,e){1&e&&b(u,t[0])},d(t){t&&c(e)}}}function q(t){let e,n,u={ctx:t,current:null,token:null,pending:J,then:C,catch:G,value:12,error:13};return l(n=t[3](t[0]),u),{c(){e=s("div"),u.block.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=i(e);u.block.l(n),n.forEach(c),this.h()},h(){r(e,"class","card svelte-1x1zhyt"),o(e,"active",t[1])},m(t,n){h(t,e,n),u.block.m(e,u.anchor=null),u.mount=()=>e,u.anchor=null},p(s,[a]){if(t=s,u.ctx=t,1&a&&n!==(n=t[3](t[0]))&&l(n,u));else{const e=t.slice();e[12]=u.resolved,u.block.p(e,a)}2&a&&o(e,"active",t[1])},i:d,o:d,d(t){t&&c(e),u.block.d(),u.token=null,u=null}}}function F(t,e,n){let l,{file_id:s}=e,{max_width:a=200}=e,{max_height:i=200}=e,{active:c=!1}=e;const r=u();return f(async()=>{}),t.$set=t=>{"file_id"in t&&n(0,s=t.file_id),"max_width"in t&&n(6,a=t.max_width),"max_height"in t&&n(7,i=t.max_height),"active"in t&&n(1,c=t.active)},[s,c,l,async function(t){const e=A();return await e.get_thumbnail({file_id:t})},function(){const t=function(t,e,n,l){const s=Math.min(n/t,l/e);return{width:t*s,height:e*s}}(l.naturalWidth,l.naturalHeight,a,i);n(2,l.width=t.width,l),n(2,l.height=t.height,l)},function(t){r("click",{source_event:t,file_id:s,dom_image:l})},a,i,function(t){m[t?"unshift":"push"](()=>{l=t,n(2,l)})}]}class K extends t{constructor(t){super(),e(this,t,F,q,n,{file_id:0,max_width:6,max_height:7,active:1})}}function W(t){let e,n,s={ctx:t,current:null,token:null,pending:Z,then:X,catch:Y,value:6,error:7};return l(n=t[2](t[0]),s),{c(){e=k(),s.block.c()},l(t){e=k(),s.block.l(t)},m(t,n){h(t,e,n),s.block.m(t,s.anchor=n),s.mount=()=>e.parentNode,s.anchor=e},p(e,a){if(t=e,s.ctx=t,1&a&&n!==(n=t[2](t[0]))&&l(n,s));else{const e=t.slice();e[6]=s.resolved,s.block.p(e,a)}},d(t){t&&c(e),s.block.d(t),s.token=null,s=null}}}function Y(t){let e,n,l,r=t[7].message+"";return{c(){e=y(),n=s("pre"),l=g(r),this.h()},l(t){e=E(t),n=a(t,"PRE",{style:!0});var s=i(n);l=p(s,r),s.forEach(c),this.h()},h(){v(n,"color","red")},m(t,s){h(t,e,s),h(t,n,s),$(n,l)},p(t,e){1&e&&r!==(r=t[7].message+"")&&b(l,r)},d(t){t&&c(e),t&&c(n)}}}function X(t){let e,n;return{c(){e=s("img"),this.h()},l(t){e=a(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){r(e,"class","img-fluid"),e.src!==(n=t[6])&&r(e,"src",n),r(e,"alt","")},m(t,n){h(t,e,n)},p(t,l){1&l&&e.src!==(n=t[6])&&r(e,"src",n)},d(t){t&&c(e)}}}function Z(t){let e,n;return{c(){e=s("div"),this.h()},l(t){e=a(t,"DIV",{class:!0,role:!0,title:!0,"aria-hidden":!0}),i(e).forEach(c),this.h()},h(){r(e,"class","spinner-border svelte-1imv7t1"),r(e,"role","status"),r(e,"title",n="Downloading "+t[0]),r(e,"aria-hidden","true")},m(t,n){h(t,e,n)},p(t,l){1&l&&n!==(n="Downloading "+t[0])&&r(e,"title",n)},d(t){t&&c(e)}}}function tt(t){let e,n="object"==typeof t[1]&&H(t[1].mime),l=n&&W(t);return{c(){l&&l.c(),e=k()},l(t){l&&l.l(t),e=k()},m(t,n){l&&l.m(t,n),h(t,e,n)},p(t,[s]){2&s&&(n="object"==typeof t[1]&&H(t[1].mime)),n?l?l.p(t,s):(l=W(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:d,o:d,d(t){l&&l.d(t),t&&c(e)}}}function et(t,e,n){let l,{file_id:s}=e,{metadata:a}=e,{file:i=null}=e;return f(async()=>()=>{l&&URL.revokeObjectURL(l)}),t.$set=t=>{"file_id"in t&&n(0,s=t.file_id),"metadata"in t&&n(1,a=t.metadata),"file"in t&&n(3,i=t.file)},[s,a,async function(t){l&&URL.revokeObjectURL(l);const e=A(),c=await e.get_file({file_id:s});return n(3,i=new File([c],String(s)+a.ext,{type:a.mime})),l=URL.createObjectURL(i),l},i]}class nt extends t{constructor(t){super(),e(this,t,et,tt,n,{file_id:0,metadata:1,file:3})}}function lt(t){let e,n,l,o,d,u,f,m,v,b,_,k,V;const S=[at,st],L=[];function U(t,e){return"number"==typeof t[0]?0:1}o=U(t),d=L[o]=S[o](t);let O=t[0]>0&&ot(t),N=t[0]<t[2].length-1&&ht(t);return{c(){e=s("div"),n=s("div"),l=s("div"),d.c(),u=y(),O&&O.c(),f=y(),N&&N.c(),m=y(),v=s("button"),b=g("❌"),this.h()},l(t){e=a(t,"DIV",{class:!0});var s=i(e);n=a(s,"DIV",{class:!0});var r=i(n);l=a(r,"DIV",{class:!0});var o=i(l);d.l(o),o.forEach(c),r.forEach(c),u=E(s),O&&O.l(s),f=E(s),N&&N.l(s),m=E(s),v=a(s,"BUTTON",{class:!0});var h=i(v);b=p(h,"❌"),h.forEach(c),s.forEach(c),this.h()},h(){r(l,"class","image current svelte-70xrmp"),r(n,"class","images svelte-70xrmp"),r(v,"class","close svelte-70xrmp"),r(e,"class","background svelte-70xrmp")},m(s,a){h(s,e,a),$(e,n),$(n,l),L[o].m(l,null),$(e,u),O&&O.m(e,null),$(e,f),N&&N.m(e,null),$(e,m),$(e,v),$(v,b),_=!0,k||(V=x(v,"click",t[6]),k=!0)},p(t,n){let s=o;o=U(t),o===s?L[o].p(t,n):(w(),I(L[s],1,1,()=>{L[s]=null}),D(),d=L[o],d||(d=L[o]=S[o](t),d.c()),R(d,1),d.m(l,null)),t[0]>0?O?O.p(t,n):(O=ot(t),O.c(),O.m(e,f)):O&&(O.d(1),O=null),t[0]<t[2].length-1?N?N.p(t,n):(N=ht(t),N.c(),N.m(e,m)):N&&(N.d(1),N=null)},i(t){_||(R(d),_=!0)},o(t){I(d),_=!1},d(t){t&&c(e),L[o].d(),O&&O.d(),N&&N.d(),k=!1,V()}}}function st(t){let e,n,l,r;return{c(){e=s("pre"),n=g("index ["),l=g(t[0]),r=g("] is not a number"),this.h()},l(s){e=a(s,"PRE",{style:!0});var o=i(e);n=p(o,"index ["),l=p(o,t[0]),r=p(o,"] is not a number"),o.forEach(c),this.h()},h(){v(e,"color","red")},m(t,s){h(t,e,s),$(e,n),$(e,l),$(e,r)},p(t,e){1&e&&b(l,t[0])},i:d,o:d,d(t){t&&c(e)}}}function at(t){let e,n,s,a={ctx:t,current:null,token:null,pending:rt,then:ct,catch:it,value:10,error:11,blocks:[,,,]};return l(n=t[3](t[2][t[0]]),a),{c(){e=k(),a.block.c()},l(t){e=k(),a.block.l(t)},m(t,n){h(t,e,n),a.block.m(t,a.anchor=n),a.mount=()=>e.parentNode,a.anchor=e,s=!0},p(e,s){if(t=e,a.ctx=t,5&s&&n!==(n=t[3](t[2][t[0]]))&&l(n,a));else{const e=t.slice();e[10]=a.resolved,a.block.p(e,s)}},i(t){s||(R(a.block),s=!0)},o(t){for(let t=0;t<3;t+=1){const e=a.blocks[t];I(e)}s=!1},d(t){t&&c(e),a.block.d(t),a.token=null,a=null}}}function it(t){let e,n,l,r,o,u,f,m,x,_,k,w,I,D,R,V,S=t[2].length+"",L=t[2][t[0]]+"",U=t[11].message+"";return{c(){e=s("p"),n=g("Querying\n              "),l=s("code"),r=g(t[0]),o=g("\n              of\n              "),u=s("code"),f=g("file_ids["),m=g(S),x=g("]"),_=y(),k=g(L),w=g("'s metadata"),I=y(),D=s("pre"),R=g(U),V=y(),this.h()},l(s){e=a(s,"P",{style:!0});var h=i(e);n=p(h,"Querying\n              "),l=a(h,"CODE",{});var d=i(l);r=p(d,t[0]),d.forEach(c),o=p(h,"\n              of\n              "),u=a(h,"CODE",{});var g=i(u);f=p(g,"file_ids["),m=p(g,S),x=p(g,"]"),g.forEach(c),_=E(h),k=p(h,L),w=p(h,"'s metadata"),h.forEach(c),I=E(s),D=a(s,"PRE",{style:!0});var v=i(D);R=p(v,U),v.forEach(c),V=E(s),this.h()},h(){v(e,"color","yellow"),v(D,"color","red")},m(t,s){h(t,e,s),$(e,n),$(e,l),$(l,r),$(e,o),$(e,u),$(u,f),$(u,m),$(u,x),$(e,_),$(e,k),$(e,w),h(t,I,s),h(t,D,s),$(D,R),h(t,V,s)},p(t,e){1&e&&b(r,t[0]),4&e&&S!==(S=t[2].length+"")&&b(m,S),5&e&&L!==(L=t[2][t[0]]+"")&&b(k,L),5&e&&U!==(U=t[11].message+"")&&b(R,U)},i:d,o:d,d(t){t&&c(e),t&&c(I),t&&c(D),t&&c(V)}}}function ct(t){let e,n;return e=new nt({props:{file_id:t[2][t[0]],metadata:t[10]}}),{c(){V(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){L(e,t,l),n=!0},p(t,n){const l={};5&n&&(l.file_id=t[2][t[0]]),5&n&&(l.metadata=t[10]),e.$set(l)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function rt(t){let e,n;return{c(){e=s("div"),this.h()},l(t){e=a(t,"DIV",{class:!0,role:!0,title:!0}),i(e).forEach(c),this.h()},h(){r(e,"class","spinner-border svelte-70xrmp"),r(e,"role","status"),r(e,"title",n="Querying "+t[2][t[0]]+"'s metadata")},m(t,n){h(t,e,n)},p(t,l){5&l&&n!==(n="Querying "+t[2][t[0]]+"'s metadata")&&r(e,"title",n)},i:d,o:d,d(t){t&&c(e)}}}function ot(t){let e,n,l,o;return{c(){e=s("button"),n=g("◀"),this.h()},l(t){e=a(t,"BUTTON",{id:!0,class:!0});var l=i(e);n=p(l,"◀"),l.forEach(c),this.h()},h(){r(e,"id","previous"),r(e,"class","nav-buttons svelte-70xrmp")},m(s,a){h(s,e,a),$(e,n),l||(o=x(e,"click",t[4]),l=!0)},p:d,d(t){t&&c(e),l=!1,o()}}}function ht(t){let e,n,l,o;return{c(){e=s("button"),n=g("▶"),this.h()},l(t){e=a(t,"BUTTON",{id:!0,class:!0});var l=i(e);n=p(l,"▶"),l.forEach(c),this.h()},h(){r(e,"id","next"),r(e,"class","nav-buttons svelte-70xrmp")},m(s,a){h(s,e,a),$(e,n),l||(o=x(e,"click",t[5]),l=!0)},p:d,d(t){t&&c(e),l=!1,o()}}}function dt(t){let e,n,l=t[1]&&lt(t);return{c(){l&&l.c(),e=k()},l(t){l&&l.l(t),e=k()},m(t,s){l&&l.m(t,s),h(t,e,s),n=!0},p(t,[n]){t[1]?l?(l.p(t,n),2&n&&R(l,1)):(l=lt(t),l.c(),R(l,1),l.m(e.parentNode,e)):l&&(w(),I(l,1,1,()=>{l=null}),D())},i(t){n||(R(l),n=!0)},o(t){I(l),n=!1},d(t){l&&l.d(t),t&&c(e)}}}function ut(t,e,n){let l,{file_ids:s=[]}=e,{index:a=0}=e,{enabled:i=!1}=e,c=new Map;f(()=>{});return t.$set=t=>{"file_ids"in t&&n(2,s=t.file_ids),"index"in t&&n(0,a=t.index),"enabled"in t&&n(1,i=t.enabled)},[a,i,s,async function(t){if(c.has(t))return c.get(t);{l||(l=A());const{metadata:e}=await l.get_file_metadata({file_ids:[t]});return c.set(t,e[0]),e[0]}},()=>{n(0,a--,a)},()=>{n(0,a++,a)},()=>{n(1,i=!1)}]}class ft extends t{constructor(t){super(),e(this,t,ut,dt,n,{file_ids:2,index:0,enabled:1})}}const{Map:mt}=j;function gt(t,e,n){const l=t.slice();return l[21]=e[n],l[23]=n,l}function pt(t,e){let n,l,o,d=e[23];l=new K({props:{file_id:e[21],active:e[0]==e[23]}}),l.$on("click",(function(...t){return e[12](e[23],...t)}));const u=()=>e[13](n,d),f=()=>e[13](null,d);return{key:t,first:null,c(){n=s("div"),V(l.$$.fragment),this.h()},l(t){n=a(t,"DIV",{class:!0});var e=i(n);S(l.$$.fragment,e),e.forEach(c),this.h()},h(){r(n,"class","entry svelte-dgcmbo"),this.first=n},m(t,e){h(t,n,e),L(l,n,null),u(),o=!0},p(t,n){e=t;const s={};4&n&&(s.file_id=e[21]),5&n&&(s.active=e[0]==e[23]),l.$set(s),d!==e[23]&&(f(),d=e[23],u())},i(t){o||(R(l.$$.fragment,t),o=!0)},o(t){I(l.$$.fragment,t),o=!1},d(t){t&&c(n),U(l),f()}}}function vt(t){let e,n,l,o,d,u,f,v,_,k,j,T,Q,A,H,z,B,G=[],C=new mt,J=t[2].length+"",q=t[1].length+"";function F(e){t[9].call(null,e)}function K(e){t[10].call(null,e)}function W(e){t[11].call(null,e)}let Y={};void 0!==t[0]&&(Y.index=t[0]),void 0!==t[5]&&(Y.enabled=t[5]),void 0!==t[2]&&(Y.file_ids=t[2]),e=new ft({props:Y}),m.push(()=>O(e,"index",F)),m.push(()=>O(e,"enabled",K)),m.push(()=>O(e,"file_ids",W));let X=t[2];const Z=t=>t[21];for(let e=0;e<X.length;e+=1){let n=gt(t,X,e),l=Z(n);C.set(l,G[e]=pt(l,n))}return{c(){V(e.$$.fragment),d=y(),u=s("div");for(let t=0;t<G.length;t+=1)G[t].c();f=y(),v=s("div"),_=s("div"),k=s("span"),j=g("Loaded "),T=g(J),Q=g(" / "),A=g(q),this.h()},l(t){S(e.$$.fragment,t),d=E(t),u=a(t,"DIV",{class:!0});var n=i(u);for(let t=0;t<G.length;t+=1)G[t].l(n);f=E(n),v=a(n,"DIV",{class:!0});var l=i(v);_=a(l,"DIV",{class:!0});var s=i(_);k=a(s,"SPAN",{});var r=i(k);j=p(r,"Loaded "),T=p(r,J),Q=p(r," / "),A=p(r,q),r.forEach(c),s.forEach(c),l.forEach(c),n.forEach(c),this.h()},h(){r(_,"class","alert alert-primary d-flex align-items-center"),r(v,"class","next-batch-placeholder svelte-dgcmbo"),r(u,"class","gallery")},m(n,l){L(e,n,l),h(n,d,l),h(n,u,l);for(let t=0;t<G.length;t+=1)G[t].m(u,null);$(u,f),$(u,v),$(v,_),$(_,k),$(k,j),$(k,T),$(k,Q),$(k,A),t[14](v),t[15](u),H=!0,z||(B=x(_,"click",t[7]),z=!0)},p(t,[s]){const a={};if(!n&&1&s&&(n=!0,a.index=t[0],N(()=>n=!1)),!l&&32&s&&(l=!0,a.enabled=t[5],N(()=>l=!1)),!o&&4&s&&(o=!0,a.file_ids=t[2],N(()=>o=!1)),e.$set(a),45&s){const e=t[2];w(),G=P(G,s,Z,1,t,e,C,u,M,pt,f,gt),D()}(!H||4&s)&&J!==(J=t[2].length+"")&&b(T,J),(!H||2&s)&&q!==(q=t[1].length+"")&&b(A,q)},i(t){if(!H){R(e.$$.fragment,t);for(let t=0;t<X.length;t+=1)R(G[t]);H=!0}},o(t){I(e.$$.fragment,t);for(let t=0;t<G.length;t+=1)I(G[t]);H=!1},d(n){U(e,n),n&&c(d),n&&c(u);for(let t=0;t<G.length;t+=1)G[t].d();t[14](null),t[15](null),z=!1,B()}}}function $t(t,e,n){let l,s,{file_ids:a=[]}=e,i=[],{range:c=10}=e,{index:r=0}=e,o=0,h=[],d=[],u=0,g=!1;function p(){if(a.length>0&&a.length!==h.length){const t=h.length,e=t+c-1,l=a.slice(t,Math.min(e,a.length));n(2,h=h.concat(l))}}f(()=>{const t=new IntersectionObserver(t=>{for(const e of t)switch(e.target){case s:p()}});return t.observe(s),()=>{t.disconnect()}});return t.$set=t=>{"file_ids"in t&&n(1,a=t.file_ids),"range"in t&&n(8,c=t.range),"index"in t&&n(0,r=t.index)},t.$$.update=()=>{65538&t.$$.dirty&&a!==i&&(n(16,i=a),n(2,h=[])),262145&t.$$.dirty&&n(18,u=Math.max(r,u)),262150&t.$$.dirty&&u>=h.length-2&&a.length>0&&(0===h.length?async function(){for(;l.scrollHeight<window.innerHeight;)p(),await T(),await B(200)}():p()),131083&t.$$.dirty&&a.length>0&&r!==o&&d&&d[r]&&(n(17,o=r),d[r].scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))},[r,a,h,d,l,g,s,p,c,function(t){r=t,n(0,r)},function(t){g=t,n(5,g)},function(t){h=t,n(2,h),n(1,a),n(16,i)},(t,e)=>{n(0,r=t),n(5,g=!0)},function(t,e){d[e]!==t&&m[t?"unshift":"push"](()=>{d[e]=t,n(3,d),n(2,h),n(1,a),n(16,i)})},function(t){m[t?"unshift":"push"](()=>{s=t,n(6,s)})},function(t){m[t?"unshift":"push"](()=>{l=t,n(4,l)})}]}class bt extends t{constructor(t){super(),e(this,t,$t,vt,n,{file_ids:1,range:8,index:0})}}function xt(t,e,n){const l=t.slice();return l[11]=e[n],l}function _t(t){let e,n,l=t[11]+"";return{c(){e=s("span"),n=g(l),this.h()},l(t){e=a(t,"SPAN",{type:!0,class:!0});var s=i(e);n=p(s,l),s.forEach(c),this.h()},h(){r(e,"type","button"),r(e,"class","btn btn-secondary btn-sm")},m(t,l){h(t,e,l),$(e,n)},p(t,e){2&e&&l!==(l=t[11]+"")&&b(n,l)},d(t){t&&c(e)}}}function yt(t){let e,n,l,o,d,u,f,v,b,x,_,k,w,D,P,j,M,T,A=t[1],H=[];for(let e=0;e<A.length;e+=1)H[e]=_t(xt(t,A,e));function B(e){t[5].call(null,e)}D=new z({props:{tags:t[1],onSearch:t[4]}});let G={};return void 0!==t[0]&&(G.file_ids=t[0]),j=new bt({props:G}),m.push(()=>O(j,"file_ids",B)),{c(){e=s("h1"),n=g("Search Results for"),l=y(),o=s("div"),d=y(),u=s("div"),f=s("details"),v=s("summary"),b=s("span"),x=g("Search:"),_=y();for(let t=0;t<H.length;t+=1)H[t].c();k=y(),w=s("div"),V(D.$$.fragment),P=y(),V(j.$$.fragment),this.h()},l(t){e=a(t,"H1",{});var s=i(e);n=p(s,"Search Results for"),s.forEach(c),l=E(t),o=a(t,"DIV",{class:!0}),i(o).forEach(c),d=E(t),u=a(t,"DIV",{class:!0});var r=i(u);f=a(r,"DETAILS",{});var h=i(f);v=a(h,"SUMMARY",{class:!0});var m=i(v);b=a(m,"SPAN",{});var g=i(b);x=p(g,"Search:"),g.forEach(c),_=E(m);for(let t=0;t<H.length;t+=1)H[t].l(m);m.forEach(c),k=E(h),w=a(h,"DIV",{class:!0});var $=i(w);S(D.$$.fragment,$),$.forEach(c),h.forEach(c),r.forEach(c),P=E(t),S(j.$$.fragment,t),this.h()},h(){r(o,"class","tags"),r(v,"class","card-header"),r(w,"class","card-body"),r(u,"class","card")},m(s,a){h(s,e,a),$(e,n),h(s,l,a),h(s,o,a),t[3](o),h(s,d,a),h(s,u,a),$(u,f),$(f,v),$(v,b),$(b,x),$(v,_);for(let t=0;t<H.length;t+=1)H[t].m(v,null);$(f,k),$(f,w),L(D,w,null),h(s,P,a),L(j,s,a),T=!0},p(t,[e]){if(2&e){let n;for(A=t[1],n=0;n<A.length;n+=1){const l=xt(t,A,n);H[n]?H[n].p(l,e):(H[n]=_t(l),H[n].c(),H[n].m(v,null))}for(;n<H.length;n+=1)H[n].d(1);H.length=A.length}const n={};2&e&&(n.tags=t[1]),2&e&&(n.onSearch=t[4]),D.$set(n);const l={};!M&&1&e&&(M=!0,l.file_ids=t[0],N(()=>M=!1)),j.$set(l)},i(t){T||(R(D.$$.fragment,t),R(j.$$.fragment,t),T=!0)},o(t){I(D.$$.fragment,t),I(j.$$.fragment,t),T=!1},d(n){n&&c(e),n&&c(l),n&&c(o),t[3](null),n&&c(d),n&&c(u),Q(H,n),U(D),n&&c(P),U(j,n)}}}function Et(t,e,n){let l,s=[],a=[];f(()=>{const t=window.location.search,e=new URLSearchParams(t),l=e.get("q");if(l){const t=JSON.parse(l);n(1,a=t)}e.get("id")});return t.$$.update=()=>{2&t.$$.dirty&&(console.log("update!!"),async function(t){if(l){const e=A(),l=await e.search_files(t,!0,!0);n(0,s=l.file_ids)}}(a))},[s,a,l,function(t){m[t?"unshift":"push"](()=>{l=t,n(2,l)})},t=>{console.log("tags set"),n(1,a=t)},function(t){s=t,n(0,s)}]}export default class extends t{constructor(t){super(),e(this,t,Et,yt,n,{})}}
