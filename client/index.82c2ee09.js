import{w as t,S as a,i as e,s,e as n,a as r,n as c,d as l,o,b as i,t as d,c as h,f as u,g as f,h as p,j as g,l as y,k as m,m as b,p as v,q as E,r as T,u as S,v as I,x as N,y as k,z as w,A as $,B as O,C as V,D,E as U,F as _}from"./client.30172695.js";import{G as x,r as P}from"./hydrus-connection.284b40d2.js";const q=t("No Error"),C=t(!1);function R(t){let a,e,s,n,c,o,S,I,N,k=!t[1]&&H(t);return{c(){a=i("div"),k&&k.c(),e=m(),s=i("div"),n=i("input"),c=m(),o=i("button"),S=d("Validate Manual Key"),this.h()},l(t){a=h(t,"DIV",{id:!0});var r=u(a);k&&k.l(r),e=b(r),s=h(r,"DIV",{class:!0});var i=u(s);n=h(i,"INPUT",{class:!0,type:!0}),c=b(i),o=h(i,"BUTTON",{class:!0});var d=u(o);S=f(d,"Validate Manual Key"),d.forEach(l),i.forEach(l),r.forEach(l),this.h()},h(){p(n,"class","form-control"),p(n,"type","password"),p(o,"class","btn"),v(o,"btn-secondary",!t[1]),v(o,"btn-primary",!!t[1]),p(s,"class","add-manual-key input-group"),p(a,"id","connect-key")},m(l,i){r(l,a,i),k&&k.m(a,null),g(a,e),g(a,s),g(s,n),E(n,t[2]),g(s,c),g(s,o),g(o,S),I||(N=[y(n,"input",t[10]),y(o,"click",t[11])],I=!0)},p(t,s){t[1]?k&&(k.d(1),k=null):k?k.p(t,s):(k=H(t),k.c(),k.m(a,e)),4&s&&n.value!==t[2]&&E(n,t[2]),2&s&&v(o,"btn-secondary",!t[1]),2&s&&v(o,"btn-primary",!!t[1])},d(t){t&&l(a),k&&k.d(),I=!1,T(N)}}}function B(t){let a,e,s,n,c,o,S,I,N,k,w,$=t[3]&&J(t);return{c(){a=i("div"),e=i("p"),s=d("Hydrus Client URL"),n=m(),c=i("input"),o=m(),S=i("button"),I=d("Connect"),N=m(),$&&$.c(),this.h()},l(t){a=h(t,"DIV",{id:!0});var r=u(a);e=h(r,"P",{});var i=u(e);s=f(i,"Hydrus Client URL"),i.forEach(l),n=b(r),c=h(r,"INPUT",{}),o=b(r),S=h(r,"BUTTON",{class:!0});var d=u(S);I=f(d,"Connect"),d.forEach(l),N=b(r),$&&$.l(r),r.forEach(l),this.h()},h(){p(S,"class","btn btn-primary"),v(S,"disabled",t[3]),p(a,"id","connect-address")},m(l,i){r(l,a,i),g(a,e),g(e,s),g(a,n),g(a,c),E(c,t[0]),g(a,o),g(a,S),g(S,I),g(a,N),$&&$.m(a,null),k||(w=[y(c,"input",t[9]),y(S,"click",t[6])],k=!0)},p(t,e){1&e&&c.value!==t[0]&&E(c,t[0]),8&e&&v(S,"disabled",t[3]),t[3]?$?$.p(t,e):($=J(t),$.c(),$.m(a,null)):$&&($.d(1),$=null)},d(t){t&&l(a),$&&$.d(),k=!1,T(w)}}}function H(t){let a,e,s,n,o;return{c(){a=i("div"),e=i("button"),s=d("Request Temporary Key"),this.h()},l(t){a=h(t,"DIV",{class:!0});var n=u(a);e=h(n,"BUTTON",{class:!0});var r=u(e);s=f(r,"Request Temporary Key"),r.forEach(l),n.forEach(l),this.h()},h(){p(e,"class","btn btn-primary"),p(a,"class","request-new-key")},m(c,l){r(c,a,l),g(a,e),g(e,s),n||(o=y(e,"click",t[7]),n=!0)},p:c,d(t){t&&l(a),n=!1,o()}}}function J(t){let a,e,s,n,c=!t[4]&&M(t),o=!t[5]&&!!t[1]&&A();return{c(){a=i("div"),e=i("div"),s=m(),c&&c.c(),n=m(),o&&o.c(),this.h()},l(t){a=h(t,"DIV",{class:!0,role:!0});var r=u(a);e=h(r,"DIV",{class:!0,role:!0,"aria-hidden":!0}),u(e).forEach(l),s=b(r),c&&c.l(r),n=b(r),o&&o.l(r),r.forEach(l),this.h()},h(){p(e,"class","spinner-border"),p(e,"role","status"),p(e,"aria-hidden","true"),p(a,"class","alert alert-primary d-flex align-items-left"),p(a,"role","alert")},m(t,l){r(t,a,l),g(a,e),g(a,s),c&&c.m(a,null),g(a,n),o&&o.m(a,null)},p(t,e){t[4]?c&&(c.d(1),c=null):c?c.p(t,e):(c=M(t),c.c(),c.m(a,n)),!t[5]&&t[1]?o||(o=A(),o.c(),o.m(a,null)):o&&(o.d(1),o=null)},d(t){t&&l(a),c&&c.d(),o&&o.d()}}}function M(t){let a,e,s,n,c;return{c(){a=i("p"),e=d("Connecting to\n            "),s=i("strong"),n=d(t[0]),c=d("\n            ...")},l(r){a=h(r,"P",{});var o=u(a);e=f(o,"Connecting to\n            "),s=h(o,"STRONG",{});var i=u(s);n=f(i,t[0]),i.forEach(l),c=f(o,"\n            ..."),o.forEach(l)},m(t,l){r(t,a,l),g(a,e),g(a,s),g(s,n),g(a,c)},p(t,a){1&a&&S(n,t[0])},d(t){t&&l(a)}}}function A(t){let a,e;return{c(){a=i("p"),e=d("Validating key...")},l(t){a=h(t,"P",{});var s=u(a);e=f(s,"Validating key..."),s.forEach(l)},m(t,s){r(t,a,s),g(a,e)},d(t){t&&l(a)}}}function j(t){let a;function e(t,a){return t[4]?t[5]?void 0:R:B}let s=e(t),o=s&&s(t);return{c(){o&&o.c(),a=n()},l(t){o&&o.l(t),a=n()},m(t,e){o&&o.m(t,e),r(t,a,e)},p(t,[n]){s===(s=e(t))&&o?o.p(t,n):(o&&o.d(1),o=s&&s(t),o&&(o.c(),o.m(a.parentNode,a)))},i:c,o:c,d(t){o&&o.d(t),t&&l(a)}}}function K(t,a,e){let s="http://127.0.0.1:45869",n="",r="",c=!1,l=!1,i=!1;async function d(){if(c)return;e(3,c=!0);const t=x(s);try{const{version:a}=await t.api_version();console.log("Connected with API version: "+a),localStorage.setItem("address",JSON.stringify(s)),e(4,l=!0),n&&await h()}catch(t){console.error(t),q.set(t),C.set(!1)}e(3,c=!1)}async function h(){e(3,c=!0);const t=x();t.access_key=n;try{const{human_description:a}=await t.verify_access_key(n);localStorage.setItem("access_key",JSON.stringify(n)),console.log(a),e(5,i=!0),C.set(!0)}catch(t){console.error(t)}e(3,c=!1)}o(()=>{const t=localStorage.getItem("address");t&&e(0,s=JSON.parse(t));const a=localStorage.getItem("access_key");a&&e(1,n=JSON.parse(a)),(async()=>{if(t)try{await d()}catch(t){console.error(t)}})()});return[s,n,r,c,l,i,d,async function(){const t=x();try{const{access_key:a}=await t.request_new_permissions("miia-web",P);localStorage.setItem("access_key",JSON.stringify(n)),e(1,n=a),e(2,r=n)}catch(t){console.error(t)}},h,function(){s=this.value,e(0,s)},function(){r=this.value,e(2,r)},()=>{e(1,n=r),h()}]}class W extends a{constructor(t){super(),e(this,t,K,j,s,{})}}function F(t,a,e){const s=t.slice();return s[7]=a[e],s}function G(t){let a,e,s,n,c,o,v,E,T=t[7]+"";function N(...a){return t[5](t[7],...a)}return{c(){a=i("button"),e=d(T),s=m(),n=i("span"),c=d("×"),this.h()},l(t){a=h(t,"BUTTON",{type:!0,class:!0,title:!0});var r=u(a);e=f(r,T),s=b(r),n=h(r,"SPAN",{class:!0,"aria-hidden":!0});var o=u(n);c=f(o,"×"),o.forEach(l),r.forEach(l),this.h()},h(){p(n,"class","badge"),p(n,"aria-hidden","true"),p(a,"type","button"),p(a,"class","btn btn-secondary btn-sm"),p(a,"title",o="Remove tag '"+t[7]+"'")},m(t,l){r(t,a,l),g(a,e),g(a,s),g(a,n),g(n,c),v||(E=y(a,"click",I(N)),v=!0)},p(s,n){t=s,1&n&&T!==(T=t[7]+"")&&S(e,T),1&n&&o!==(o="Remove tag '"+t[7]+"'")&&p(a,"title",o)},d(t){t&&l(a),v=!1,E()}}}function L(t){let a,e,s,n,o,S,k,w,$,O,V,D,U,_,x,P,q,C,R,B,H,J,M,A,j,K=t[0],W=[];for(let a=0;a<K.length;a+=1)W[a]=G(F(t,K,a));return{c(){a=i("div"),e=i("h2"),s=d("Search"),n=m(),o=i("form"),S=i("div");for(let t=0;t<W.length;t+=1)W[t].c();k=m(),w=i("input"),$=m(),O=i("button"),V=d("Add Tag"),U=m(),_=i("button"),x=d("Search"),q=m(),C=i("div"),R=i("div"),B=i("h3"),H=d("Search Tags"),J=m(),M=i("div"),this.h()},l(t){a=h(t,"DIV",{id:!0});var r=u(a);e=h(r,"H2",{});var c=u(e);s=f(c,"Search"),c.forEach(l),n=b(r),o=h(r,"FORM",{});var i=u(o);S=h(i,"DIV",{class:!0});var d=u(S);for(let t=0;t<W.length;t+=1)W[t].l(d);k=b(d),w=h(d,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),$=b(d),O=h(d,"BUTTON",{class:!0,disabled:!0,type:!0,id:!0});var p=u(O);V=f(p,"Add Tag"),p.forEach(l),U=b(d),_=h(d,"BUTTON",{class:!0,type:!0,id:!0,disabled:!0});var g=u(_);x=f(g,"Search"),g.forEach(l),d.forEach(l),q=b(i),C=h(i,"DIV",{id:!0,class:!0});var y=u(C);R=h(y,"DIV",{id:!0,class:!0});var m=u(R);B=h(m,"H3",{class:!0});var v=u(B);H=f(v,"Search Tags"),v.forEach(l),m.forEach(l),J=b(y),M=h(y,"DIV",{id:!0,class:!0}),u(M).forEach(l),y.forEach(l),i.forEach(l),r.forEach(l),this.h()},h(){p(w,"type","text"),p(w,"class","form-control"),p(w,"placeholder","tag:to-add"),p(w,"aria-label","Tag to add to search query"),p(w,"aria-describedby","add-tag"),p(O,"class","btn"),O.disabled=D=0===t[1].length,p(O,"type","button"),p(O,"id","add-tag"),v(O,"btn-primary",t[1].length>0),v(O,"btn-outline-secondary",0===t[1].length),p(_,"class","btn btn-success"),p(_,"type","button"),p(_,"id","search"),_.disabled=P=0===t[0].length,p(S,"class","input-group"),p(B,"class","sr-only sr-only-focusable"),p(R,"id","tags"),p(R,"class","col"),p(M,"id","action"),p(M,"class","col-auto text-center"),p(C,"id","query"),p(C,"class","row"),p(a,"id","search")},m(c,l){r(c,a,l),g(a,e),g(e,s),g(a,n),g(a,o),g(o,S);for(let t=0;t<W.length;t+=1)W[t].m(S,null);g(S,k),g(S,w),E(w,t[1]),g(S,$),g(S,O),g(O,V),g(S,U),g(S,_),g(_,x),g(o,q),g(o,C),g(C,R),g(R,B),g(B,H),g(C,J),g(C,M),A||(j=[y(w,"input",t[6]),y(O,"click",I(t[2])),y(_,"click",I(t[4]))],A=!0)},p(t,[a]){if(9&a){let e;for(K=t[0],e=0;e<K.length;e+=1){const s=F(t,K,e);W[e]?W[e].p(s,a):(W[e]=G(s),W[e].c(),W[e].m(S,k))}for(;e<W.length;e+=1)W[e].d(1);W.length=K.length}2&a&&w.value!==t[1]&&E(w,t[1]),2&a&&D!==(D=0===t[1].length)&&(O.disabled=D),2&a&&v(O,"btn-primary",t[1].length>0),2&a&&v(O,"btn-outline-secondary",0===t[1].length),1&a&&P!==(P=0===t[0].length)&&(_.disabled=P)},i:c,o:c,d(t){t&&l(a),N(W,t),A=!1,T(j)}}}function z(t,a,e){let{tags:s=["landscape"]}=a,n="";function r(t){const a=s.indexOf(String(t));console.log(t,a),s.splice(a,1),e(0,s)}return t.$set=t=>{"tags"in t&&e(0,s=t.tags)},[s,n,function(){console.log(n),s.includes(n)||(s.push(n),e(0,s)),e(1,n="")},r,function(){k("/tags?q="+JSON.stringify(s))},t=>{r(t)},function(){n=this.value,e(1,n)}]}class Q extends a{constructor(t){super(),e(this,t,z,L,s,{tags:0})}}function X(t){let a,e,s,n,o,p,y,v,E,T,S;return v=new W({}),T=new Q({}),{c(){a=m(),e=i("h1"),s=d("Miia Web!"),n=m(),o=i("p"),p=d("a web client for Hydrus"),y=m(),w(v.$$.fragment),E=m(),w(T.$$.fragment),this.h()},l(t){$('[data-svelte="svelte-1nj90w7"]',document.head).forEach(l),a=b(t),e=h(t,"H1",{});var r=u(e);s=f(r,"Miia Web!"),r.forEach(l),n=b(t),o=h(t,"P",{});var c=u(o);p=f(c,"a web client for Hydrus"),c.forEach(l),y=b(t),O(v.$$.fragment,t),E=b(t),O(T.$$.fragment,t),this.h()},h(){document.title="Miia Web"},m(t,c){r(t,a,c),r(t,e,c),g(e,s),r(t,n,c),r(t,o,c),g(o,p),r(t,y,c),V(v,t,c),r(t,E,c),V(T,t,c),S=!0},p:c,i(t){S||(D(v.$$.fragment,t),D(T.$$.fragment,t),S=!0)},o(t){U(v.$$.fragment,t),U(T.$$.fragment,t),S=!1},d(t){t&&l(a),t&&l(e),t&&l(n),t&&l(o),t&&l(y),_(v,t),t&&l(E),_(T,t)}}}function Y(t){return[]}export default class extends a{constructor(t){super(),e(this,t,Y,X,s,{})}}