import{S as e,i as t,s as n,O as l,e as s,c as a,a as i,d as r,f as c,p as o,g as h,n as d,P as u,v as f,H as m,t as g,b as v,K as p,h as $,o as b,l as x,u as _,j as E,m as y,k as w,F as k,C as I,G as D,B as V,x as R,z as U,A as L,D as O,I as P,r as S,E as T,Q as M,R as N,T as j,U as Q,M as A}from"./client.449b79cd.js";import{G as B,I as z,P as G,T as H}from"./TagSearch.17d0e55f.js";function C(e,t=this){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))}function F(e){let t,n,l,o=e[13].message+"";return{c(){t=s("div"),n=s("pre"),l=g(o),this.h()},l(e){t=a(e,"DIV",{class:!0});var s=i(t);n=a(s,"PRE",{style:!0});var c=i(n);l=v(c,o),c.forEach(r),s.forEach(r),this.h()},h(){p(n,"color","red"),c(t,"class","card-body")},m(e,s){h(e,t,s),$(t,n),$(n,l)},p(e,t){1&t&&o!==(o=e[13].message+"")&&b(l,o)},d(e){e&&r(t)}}}function q(e){let t,n,l,i;return{c(){t=s("img"),this.h()},l(e){t=a(e,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){t.src!==(n=URL.createObjectURL(e[12]))&&c(t,"src",n),c(t,"alt",e[0]),c(t,"id",e[0]),c(t,"class","svelte-1x1zhyt")},m(n,s){h(n,t,s),e[8](t),l||(i=[x(t,"load",e[4]),x(t,"click",e[5])],l=!0)},p(e,l){1&l&&t.src!==(n=URL.createObjectURL(e[12]))&&c(t,"src",n),1&l&&c(t,"alt",e[0]),1&l&&c(t,"id",e[0])},d(n){n&&r(t),e[8](null),l=!1,_(i)}}}function J(e){let t,n,l,o,d,u;return{c(){t=s("div"),n=s("div"),l=E(),o=s("p"),d=g("Querying "),u=g(e[0]),this.h()},l(s){t=a(s,"DIV",{class:!0});var c=i(t);n=a(c,"DIV",{class:!0,role:!0,"aria-hidden":!0}),i(n).forEach(r),l=y(c),o=a(c,"P",{});var h=i(o);d=v(h,"Querying "),u=v(h,e[0]),h.forEach(r),c.forEach(r),this.h()},h(){c(n,"class","spinner-border"),c(n,"role","status"),c(n,"aria-hidden","true"),c(t,"class","card-body loading svelte-1x1zhyt")},m(e,s){h(e,t,s),$(t,n),$(t,l),$(t,o),$(o,d),$(o,u)},p(e,t){1&t&&b(u,e[0])},d(e){e&&r(t)}}}function K(e){let t,n,u={ctx:e,current:null,token:null,pending:J,then:q,catch:F,value:12,error:13};return l(n=e[3](e[0]),u),{c(){t=s("div"),u.block.c(),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=i(t);u.block.l(n),n.forEach(r),this.h()},h(){c(t,"class","card svelte-1x1zhyt"),o(t,"active",e[1])},m(e,n){h(e,t,n),u.block.m(t,u.anchor=null),u.mount=()=>t,u.anchor=null},p(s,[a]){if(e=s,u.ctx=e,1&a&&n!==(n=e[3](e[0]))&&l(n,u));else{const t=e.slice();t[12]=u.resolved,u.block.p(t,a)}2&a&&o(t,"active",e[1])},i:d,o:d,d(e){e&&r(t),u.block.d(),u.token=null,u=null}}}function W(e,t,n){let l,{file_id:s}=t,{max_width:a=200}=t,{max_height:i=200}=t,{active:r=!1}=t;const c=u();return f(async()=>{}),e.$set=e=>{"file_id"in e&&n(0,s=e.file_id),"max_width"in e&&n(6,a=e.max_width),"max_height"in e&&n(7,i=e.max_height),"active"in e&&n(1,r=e.active)},[s,r,l,async function(e){const t=B();return await t.get_thumbnail({file_id:e})},function(){const e=function(e,t,n,l){const s=Math.min(n/e,l/t);return{width:e*s,height:t*s}}(l.naturalWidth,l.naturalHeight,a,i);n(2,l.width=e.width,l),n(2,l.height=e.height,l)},function(e){c("click",{source_event:e,file_id:s,dom_image:l})},a,i,function(e){m[e?"unshift":"push"](()=>{l=e,n(2,l)})}]}class Y extends e{constructor(e){super(),t(this,e,W,K,n,{file_id:0,max_width:6,max_height:7,active:1})}}function X(e){let t,n,s={ctx:e,current:null,token:null,pending:te,then:ee,catch:Z,value:6,error:7};return l(n=e[2](e[0]),s),{c(){t=w(),s.block.c()},l(e){t=w(),s.block.l(e)},m(e,n){h(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t},p(t,a){if(e=t,s.ctx=e,1&a&&n!==(n=e[2](e[0]))&&l(n,s));else{const t=e.slice();t[6]=s.resolved,s.block.p(t,a)}},d(e){e&&r(t),s.block.d(e),s.token=null,s=null}}}function Z(e){let t,n,l,c=e[7].message+"";return{c(){t=E(),n=s("pre"),l=g(c),this.h()},l(e){t=y(e),n=a(e,"PRE",{style:!0});var s=i(n);l=v(s,c),s.forEach(r),this.h()},h(){p(n,"color","red")},m(e,s){h(e,t,s),h(e,n,s),$(n,l)},p(e,t){1&t&&c!==(c=e[7].message+"")&&b(l,c)},d(e){e&&r(t),e&&r(n)}}}function ee(e){let t,n;return{c(){t=s("img"),this.h()},l(e){t=a(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){c(t,"class","img-fluid"),t.src!==(n=e[6])&&c(t,"src",n),c(t,"alt","")},m(e,n){h(e,t,n)},p(e,l){1&l&&t.src!==(n=e[6])&&c(t,"src",n)},d(e){e&&r(t)}}}function te(e){let t,n;return{c(){t=s("div"),this.h()},l(e){t=a(e,"DIV",{class:!0,role:!0,title:!0,"aria-hidden":!0}),i(t).forEach(r),this.h()},h(){c(t,"class","spinner-border svelte-1imv7t1"),c(t,"role","status"),c(t,"title",n="Downloading "+e[0]),c(t,"aria-hidden","true")},m(e,n){h(e,t,n)},p(e,l){1&l&&n!==(n="Downloading "+e[0])&&c(t,"title",n)},d(e){e&&r(t)}}}function ne(e){let t,n="object"==typeof e[1]&&z(e[1].mime),l=n&&X(e);return{c(){l&&l.c(),t=w()},l(e){l&&l.l(e),t=w()},m(e,n){l&&l.m(e,n),h(e,t,n)},p(e,[s]){2&s&&(n="object"==typeof e[1]&&z(e[1].mime)),n?l?l.p(e,s):(l=X(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:d,o:d,d(e){l&&l.d(e),e&&r(t)}}}function le(e,t,n){let l,{file_id:s}=t,{metadata:a}=t,{file:i=null}=t;return f(async()=>()=>{l&&URL.revokeObjectURL(l)}),e.$set=e=>{"file_id"in e&&n(0,s=e.file_id),"metadata"in e&&n(1,a=e.metadata),"file"in e&&n(3,i=e.file)},[s,a,async function(e){l&&URL.revokeObjectURL(l);const t=B(),r=await t.get_file({file_id:s});return n(3,i=new File([r],String(s)+a.ext,{type:a.mime})),l=URL.createObjectURL(i),l},i]}class se extends e{constructor(e){super(),t(this,e,le,ne,n,{file_id:0,metadata:1,file:3})}}function ae(e){let t,n,l,o,d,u,f,m,p,b,_,w,R;const U=[re,ie],L=[];function O(e,t){return"number"==typeof e[0]?0:1}o=O(e),d=L[o]=U[o](e);let P=e[0]>0&&de(e),S=e[0]<e[2].length-1&&ue(e);return{c(){t=s("div"),n=s("div"),l=s("div"),d.c(),u=E(),P&&P.c(),f=E(),S&&S.c(),m=E(),p=s("button"),b=g("❌"),this.h()},l(e){t=a(e,"DIV",{class:!0});var s=i(t);n=a(s,"DIV",{class:!0});var c=i(n);l=a(c,"DIV",{class:!0});var o=i(l);d.l(o),o.forEach(r),c.forEach(r),u=y(s),P&&P.l(s),f=y(s),S&&S.l(s),m=y(s),p=a(s,"BUTTON",{class:!0});var h=i(p);b=v(h,"❌"),h.forEach(r),s.forEach(r),this.h()},h(){c(l,"class","image current svelte-70xrmp"),c(n,"class","images svelte-70xrmp"),c(p,"class","close svelte-70xrmp"),c(t,"class","background svelte-70xrmp")},m(s,a){h(s,t,a),$(t,n),$(n,l),L[o].m(l,null),$(t,u),P&&P.m(t,null),$(t,f),S&&S.m(t,null),$(t,m),$(t,p),$(p,b),_=!0,w||(R=x(p,"click",e[6]),w=!0)},p(e,n){let s=o;o=O(e),o===s?L[o].p(e,n):(k(),I(L[s],1,1,()=>{L[s]=null}),D(),d=L[o],d||(d=L[o]=U[o](e),d.c()),V(d,1),d.m(l,null)),e[0]>0?P?P.p(e,n):(P=de(e),P.c(),P.m(t,f)):P&&(P.d(1),P=null),e[0]<e[2].length-1?S?S.p(e,n):(S=ue(e),S.c(),S.m(t,m)):S&&(S.d(1),S=null)},i(e){_||(V(d),_=!0)},o(e){I(d),_=!1},d(e){e&&r(t),L[o].d(),P&&P.d(),S&&S.d(),w=!1,R()}}}function ie(e){let t,n,l,c;return{c(){t=s("pre"),n=g("index ["),l=g(e[0]),c=g("] is not a number"),this.h()},l(s){t=a(s,"PRE",{style:!0});var o=i(t);n=v(o,"index ["),l=v(o,e[0]),c=v(o,"] is not a number"),o.forEach(r),this.h()},h(){p(t,"color","red")},m(e,s){h(e,t,s),$(t,n),$(t,l),$(t,c)},p(e,t){1&t&&b(l,e[0])},i:d,o:d,d(e){e&&r(t)}}}function re(e){let t,n,s,a={ctx:e,current:null,token:null,pending:he,then:oe,catch:ce,value:10,error:11,blocks:[,,,]};return l(n=e[3](e[2][e[0]]),a),{c(){t=w(),a.block.c()},l(e){t=w(),a.block.l(e)},m(e,n){h(e,t,n),a.block.m(e,a.anchor=n),a.mount=()=>t.parentNode,a.anchor=t,s=!0},p(t,s){if(e=t,a.ctx=e,5&s&&n!==(n=e[3](e[2][e[0]]))&&l(n,a));else{const t=e.slice();t[10]=a.resolved,a.block.p(t,s)}},i(e){s||(V(a.block),s=!0)},o(e){for(let e=0;e<3;e+=1){const t=a.blocks[e];I(t)}s=!1},d(e){e&&r(t),a.block.d(e),a.token=null,a=null}}}function ce(e){let t,n,l,c,o,u,f,m,x,_,w,k,I,D,V,R,U=e[2].length+"",L=e[2][e[0]]+"",O=e[11].message+"";return{c(){t=s("p"),n=g("Querying\n              "),l=s("code"),c=g(e[0]),o=g("\n              of\n              "),u=s("code"),f=g("file_ids["),m=g(U),x=g("]"),_=E(),w=g(L),k=g("'s metadata"),I=E(),D=s("pre"),V=g(O),R=E(),this.h()},l(s){t=a(s,"P",{style:!0});var h=i(t);n=v(h,"Querying\n              "),l=a(h,"CODE",{});var d=i(l);c=v(d,e[0]),d.forEach(r),o=v(h,"\n              of\n              "),u=a(h,"CODE",{});var g=i(u);f=v(g,"file_ids["),m=v(g,U),x=v(g,"]"),g.forEach(r),_=y(h),w=v(h,L),k=v(h,"'s metadata"),h.forEach(r),I=y(s),D=a(s,"PRE",{style:!0});var p=i(D);V=v(p,O),p.forEach(r),R=y(s),this.h()},h(){p(t,"color","yellow"),p(D,"color","red")},m(e,s){h(e,t,s),$(t,n),$(t,l),$(l,c),$(t,o),$(t,u),$(u,f),$(u,m),$(u,x),$(t,_),$(t,w),$(t,k),h(e,I,s),h(e,D,s),$(D,V),h(e,R,s)},p(e,t){1&t&&b(c,e[0]),4&t&&U!==(U=e[2].length+"")&&b(m,U),5&t&&L!==(L=e[2][e[0]]+"")&&b(w,L),5&t&&O!==(O=e[11].message+"")&&b(V,O)},i:d,o:d,d(e){e&&r(t),e&&r(I),e&&r(D),e&&r(R)}}}function oe(e){let t,n;return t=new se({props:{file_id:e[2][e[0]],metadata:e[10]}}),{c(){R(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){L(t,e,l),n=!0},p(e,n){const l={};5&n&&(l.file_id=e[2][e[0]]),5&n&&(l.metadata=e[10]),t.$set(l)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function he(e){let t,n;return{c(){t=s("div"),this.h()},l(e){t=a(e,"DIV",{class:!0,role:!0,title:!0}),i(t).forEach(r),this.h()},h(){c(t,"class","spinner-border svelte-70xrmp"),c(t,"role","status"),c(t,"title",n="Querying "+e[2][e[0]]+"'s metadata")},m(e,n){h(e,t,n)},p(e,l){5&l&&n!==(n="Querying "+e[2][e[0]]+"'s metadata")&&c(t,"title",n)},i:d,o:d,d(e){e&&r(t)}}}function de(e){let t,n,l,o;return{c(){t=s("button"),n=g("◀"),this.h()},l(e){t=a(e,"BUTTON",{id:!0,class:!0});var l=i(t);n=v(l,"◀"),l.forEach(r),this.h()},h(){c(t,"id","previous"),c(t,"class","nav-buttons svelte-70xrmp")},m(s,a){h(s,t,a),$(t,n),l||(o=x(t,"click",e[4]),l=!0)},p:d,d(e){e&&r(t),l=!1,o()}}}function ue(e){let t,n,l,o;return{c(){t=s("button"),n=g("▶"),this.h()},l(e){t=a(e,"BUTTON",{id:!0,class:!0});var l=i(t);n=v(l,"▶"),l.forEach(r),this.h()},h(){c(t,"id","next"),c(t,"class","nav-buttons svelte-70xrmp")},m(s,a){h(s,t,a),$(t,n),l||(o=x(t,"click",e[5]),l=!0)},p:d,d(e){e&&r(t),l=!1,o()}}}function fe(e){let t,n,l=e[1]&&ae(e);return{c(){l&&l.c(),t=w()},l(e){l&&l.l(e),t=w()},m(e,s){l&&l.m(e,s),h(e,t,s),n=!0},p(e,[n]){e[1]?l?(l.p(e,n),2&n&&V(l,1)):(l=ae(e),l.c(),V(l,1),l.m(t.parentNode,t)):l&&(k(),I(l,1,1,()=>{l=null}),D())},i(e){n||(V(l),n=!0)},o(e){I(l),n=!1},d(e){l&&l.d(e),e&&r(t)}}}function me(e,t,n){let l,{file_ids:s=[]}=t,{index:a=0}=t,{enabled:i=!1}=t,r=new Map;f(()=>{});return e.$set=e=>{"file_ids"in e&&n(2,s=e.file_ids),"index"in e&&n(0,a=e.index),"enabled"in e&&n(1,i=e.enabled)},[a,i,s,async function(e){if(r.has(e))return r.get(e);{l||(l=B());const{metadata:t}=await l.get_file_metadata({file_ids:[e]});return r.set(e,t[0]),t[0]}},()=>{n(0,a--,a)},()=>{n(0,a++,a)},()=>{n(1,i=!1)}]}class ge extends e{constructor(e){super(),t(this,e,me,fe,n,{file_ids:2,index:0,enabled:1})}}const{Map:ve}=N;function pe(e,t,n){const l=e.slice();return l[21]=t[n],l[23]=n,l}function $e(e,t){let n,l,o,d=t[23];l=new Y({props:{file_id:t[21],active:t[0]==t[23]}}),l.$on("click",(function(...e){return t[12](t[23],...e)}));const u=()=>t[13](n,d),f=()=>t[13](null,d);return{key:e,first:null,c(){n=s("div"),R(l.$$.fragment),this.h()},l(e){n=a(e,"DIV",{class:!0});var t=i(n);U(l.$$.fragment,t),t.forEach(r),this.h()},h(){c(n,"class","entry svelte-1009vrm"),this.first=n},m(e,t){h(e,n,t),L(l,n,null),u(),o=!0},p(e,n){t=e;const s={};4&n&&(s.file_id=t[21]),5&n&&(s.active=t[0]==t[23]),l.$set(s),d!==t[23]&&(f(),d=t[23],u())},i(e){o||(V(l.$$.fragment,e),o=!0)},o(e){I(l.$$.fragment,e),o=!1},d(e){e&&r(n),O(l),f()}}}function be(e){let t,n,l,o,d,u,f,_,w,N,Q,A,B,z,G,H,C,F,q,J,K,W,Y,X,Z,ee,te,ne,le,se,ae=[],ie=new ve,re=e[2].length+"",ce=e[1].length+"",oe=e[2].length+"";function he(t){e[9].call(null,t)}function de(t){e[10].call(null,t)}function ue(t){e[11].call(null,t)}let fe={};void 0!==e[0]&&(fe.index=e[0]),void 0!==e[5]&&(fe.enabled=e[5]),void 0!==e[2]&&(fe.file_ids=e[2]),t=new ge({props:fe}),m.push(()=>P(t,"index",he)),m.push(()=>P(t,"enabled",de)),m.push(()=>P(t,"file_ids",ue));let me=e[2];const be=e=>e[21];for(let t=0;t<me.length;t+=1){let n=pe(e,me,t),l=be(n);ie.set(l,ae[t]=$e(l,n))}return{c(){R(t.$$.fragment),d=E(),u=s("div");for(let e=0;e<ae.length;e+=1)ae[e].c();f=E(),_=s("div"),w=s("div"),N=s("div"),Q=s("div"),A=s("p"),B=g("Loaded "),z=g(re),G=g(" / "),H=g(ce),C=E(),F=s("div"),q=s("div"),J=g(oe),Y=E(),X=s("div"),Z=s("button"),ee=g("Load More"),this.h()},l(e){U(t.$$.fragment,e),d=y(e),u=a(e,"DIV",{class:!0});var n=i(u);for(let e=0;e<ae.length;e+=1)ae[e].l(n);f=y(n),_=a(n,"DIV",{class:!0});var l=i(_);w=a(l,"DIV",{class:!0});var s=i(w);N=a(s,"DIV",{class:!0});var c=i(N);Q=a(c,"DIV",{class:!0});var o=i(Q);A=a(o,"P",{});var h=i(A);B=v(h,"Loaded "),z=v(h,re),G=v(h," / "),H=v(h,ce),h.forEach(r),C=y(o),F=a(o,"DIV",{class:!0});var m=i(F);q=a(m,"DIV",{class:!0,role:!0,style:!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0});var g=i(q);J=v(g,oe),g.forEach(r),m.forEach(r),o.forEach(r),c.forEach(r),Y=y(s),X=a(s,"DIV",{class:!0});var p=i(X);Z=a(p,"BUTTON",{class:!0,disabled:!0});var $=i(Z);ee=v($,"Load More"),$.forEach(r),p.forEach(r),s.forEach(r),l.forEach(r),n.forEach(r),this.h()},h(){c(q,"class","progress-bar"),c(q,"role","progressbar"),p(q,"width",e[2].length/e[1].length*100+"%"),c(q,"aria-valuenow",K=e[2].length),c(q,"aria-valuemin","0"),c(q,"aria-valuemax",W=e[1].length),c(F,"class","progress"),c(Q,"class","col col-12"),c(N,"class","row"),c(Z,"class","btn btn-primary m-3"),Z.disabled=te=e[2].length>=e[1].length,c(X,"class","col"),c(w,"class","container"),c(_,"class","next-batch-placeholder text-center svelte-1009vrm"),c(u,"class","gallery")},m(n,l){L(t,n,l),h(n,d,l),h(n,u,l);for(let e=0;e<ae.length;e+=1)ae[e].m(u,null);$(u,f),$(u,_),$(_,w),$(w,N),$(N,Q),$(Q,A),$(A,B),$(A,z),$(A,G),$(A,H),$(Q,C),$(Q,F),$(F,q),$(q,J),$(w,Y),$(w,X),$(X,Z),$(Z,ee),e[14](_),e[15](u),ne=!0,le||(se=x(Z,"click",S(e[7])),le=!0)},p(e,[s]){const a={};if(!n&&1&s&&(n=!0,a.index=e[0],T(()=>n=!1)),!l&&32&s&&(l=!0,a.enabled=e[5],T(()=>l=!1)),!o&&4&s&&(o=!0,a.file_ids=e[2],T(()=>o=!1)),t.$set(a),45&s){const t=e[2];k(),ae=M(ae,s,be,1,e,t,ie,u,j,$e,f,pe),D()}(!ne||4&s)&&re!==(re=e[2].length+"")&&b(z,re),(!ne||2&s)&&ce!==(ce=e[1].length+"")&&b(H,ce),(!ne||4&s)&&oe!==(oe=e[2].length+"")&&b(J,oe),(!ne||6&s)&&p(q,"width",e[2].length/e[1].length*100+"%"),(!ne||4&s&&K!==(K=e[2].length))&&c(q,"aria-valuenow",K),(!ne||2&s&&W!==(W=e[1].length))&&c(q,"aria-valuemax",W),(!ne||6&s&&te!==(te=e[2].length>=e[1].length))&&(Z.disabled=te)},i(e){if(!ne){V(t.$$.fragment,e);for(let e=0;e<me.length;e+=1)V(ae[e]);ne=!0}},o(e){I(t.$$.fragment,e);for(let e=0;e<ae.length;e+=1)I(ae[e]);ne=!1},d(n){O(t,n),n&&r(d),n&&r(u);for(let e=0;e<ae.length;e+=1)ae[e].d();e[14](null),e[15](null),le=!1,se()}}}function xe(e,t,n){let l,s,{file_ids:a=[]}=t,i=[],{range:r=10}=t,{index:c=0}=t,o=0,h=[],d=[],u=0,g=!1;function v(){if(a.length>0&&a.length!==h.length){const e=h.length,t=e+r-1,l=a.slice(e,Math.min(t,a.length));n(2,h=h.concat(l))}}f(()=>{const e=new IntersectionObserver(e=>{for(const t of e)switch(t.target){case s:v()}});return e.observe(s),()=>{e.disconnect()}});return e.$set=e=>{"file_ids"in e&&n(1,a=e.file_ids),"range"in e&&n(8,r=e.range),"index"in e&&n(0,c=e.index)},e.$$.update=()=>{65538&e.$$.dirty&&a!==i&&(n(16,i=a),n(18,u=0),n(0,c=0),n(17,o=0),n(2,h=[])),262145&e.$$.dirty&&n(18,u=Math.max(c,u)),262150&e.$$.dirty&&u>=h.length-2&&a.length>0&&(0===h.length?async function(){for(;l.scrollHeight<window.innerHeight;)v(),await Q(),await C(200)}():v()),131083&e.$$.dirty&&a.length>0&&c!==o&&d&&d[c]&&(n(17,o=c),d[c].scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))},[c,a,h,d,l,g,s,v,r,function(e){c=e,n(0,c),n(1,a),n(16,i)},function(e){g=e,n(5,g)},function(e){h=e,n(2,h),n(1,a),n(16,i)},(e,t)=>{n(0,c=e),n(5,g=!0)},function(e,t){d[t]!==e&&m[e?"unshift":"push"](()=>{d[t]=e,n(3,d),n(2,h),n(1,a),n(16,i)})},function(e){m[e?"unshift":"push"](()=>{s=e,n(6,s)})},function(e){m[e?"unshift":"push"](()=>{l=e,n(4,l)})}]}class _e extends e{constructor(e){super(),t(this,e,xe,be,n,{file_ids:1,range:8,index:0})}}function Ee(e,t,n){const l=e.slice();return l[11]=t[n],l}function ye(e){let t,n,l=e[11]+"";return{c(){t=s("span"),n=g(l),this.h()},l(e){t=a(e,"SPAN",{class:!0});var s=i(t);n=v(s,l),s.forEach(r),this.h()},h(){c(t,"class","badge bg-secondary")},m(e,l){h(e,t,l),$(t,n)},p(e,t){2&t&&l!==(l=e[11]+"")&&b(n,l)},d(e){e&&r(t)}}}function we(e){let t,n,l,o,d,u,f,m,p,b,x,_=e[1],w=[];for(let t=0;t<_.length;t+=1)w[t]=ye(Ee(e,_,t));return b=new H({props:{tags:e[1],onSearch:e[4]}}),{c(){t=s("div"),n=s("div"),l=s("details"),o=s("summary"),d=s("span"),u=g("Search:"),f=E();for(let e=0;e<w.length;e+=1)w[e].c();m=E(),p=s("div"),R(b.$$.fragment),this.h()},l(e){t=a(e,"DIV",{class:!0});var s=i(t);n=a(s,"DIV",{class:!0});var c=i(n);l=a(c,"DETAILS",{});var h=i(l);o=a(h,"SUMMARY",{class:!0});var g=i(o);d=a(g,"SPAN",{});var $=i(d);u=v($,"Search:"),$.forEach(r),f=y(g);for(let e=0;e<w.length;e+=1)w[e].l(g);g.forEach(r),m=y(h),p=a(h,"DIV",{class:!0});var x=i(p);U(b.$$.fragment,x),x.forEach(r),h.forEach(r),c.forEach(r),s.forEach(r),this.h()},h(){c(o,"class","card-header"),c(p,"class","card-body"),c(n,"class","card"),c(t,"class","col")},m(s,a){h(s,t,a),$(t,n),$(n,l),$(l,o),$(o,d),$(d,u),$(o,f);for(let e=0;e<w.length;e+=1)w[e].m(o,null);e[3](o),$(l,m),$(l,p),L(b,p,null),x=!0},p(e,t){if(2&t){let n;for(_=e[1],n=0;n<_.length;n+=1){const l=Ee(e,_,n);w[n]?w[n].p(l,t):(w[n]=ye(l),w[n].c(),w[n].m(o,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=_.length}const n={};2&t&&(n.tags=e[1]),2&t&&(n.onSearch=e[4]),b.$set(n)},i(e){x||(V(b.$$.fragment,e),x=!0)},o(e){I(b.$$.fragment,e),x=!1},d(n){n&&r(t),A(w,n),e[3](null),O(b)}}}function ke(e){let t,n,l,s,a;function i(t){e[5].call(null,t)}t=new G({props:{$$slots:{default:[we]},$$scope:{ctx:e}}});let c={};return void 0!==e[0]&&(c.file_ids=e[0]),l=new _e({props:c}),m.push(()=>P(l,"file_ids",i)),{c(){R(t.$$.fragment),n=E(),R(l.$$.fragment)},l(e){U(t.$$.fragment,e),n=y(e),U(l.$$.fragment,e)},m(e,s){L(t,e,s),h(e,n,s),L(l,e,s),a=!0},p(e,[n]){const a={};16390&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const i={};!s&&1&n&&(s=!0,i.file_ids=e[0],T(()=>s=!1)),l.$set(i)},i(e){a||(V(t.$$.fragment,e),V(l.$$.fragment,e),a=!0)},o(e){I(t.$$.fragment,e),I(l.$$.fragment,e),a=!1},d(e){O(t,e),e&&r(n),O(l,e)}}}function Ie(e,t,n){let l,s=[],a=[];f(()=>{const e=window.location.search,t=new URLSearchParams(e),l=t.get("q");if(l){const e=JSON.parse(l);n(1,a=e)}t.get("id")});return e.$$.update=()=>{2&e.$$.dirty&&async function(e){if(l){const t=B(),l=await t.search_files(e,!0,!0);console.log("Recieved ",s.length," files."),n(0,s=l.file_ids)}}(a)},[s,a,l,function(e){m[e?"unshift":"push"](()=>{l=e,n(2,l)})},e=>{console.log("tags set"),n(1,a=e)},function(e){s=e,n(0,s)}]}export default class extends e{constructor(e){super(),t(this,e,Ie,ke,n,{})}}
