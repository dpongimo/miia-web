import{w as t,_ as n,a as r,b as e,c as a,i as c,s,d as i,S as o,e as u,f as l,g as f,n as h,h as d,o as p,j as v,r as y,k as g,t as m,l as b,m as E,p as k,q as x,u as S,v as R,x as w,y as I,z as T,A as N,B as D,C as $,D as O,E as V,F as P,G as _,H as U,I as q,J as C,K as H,L as J}from"./client.3f2ff0b7.js";import{G as A,r as B}from"./hydrus-connection.1b679d16.js";var M=t("No Error"),K=t(!1);function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(n){var s=r(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return e(this,a)}}function G(t){var n,r,e,a,c,s,i,o,u,f=!t[1]&&W(t);return{c:function(){n=g("div"),f&&f.c(),r=w(),e=g("div"),a=g("input"),c=w(),s=g("button"),i=m("Validate Manual Key"),this.h()},l:function(t){n=b(t,"DIV",{id:!0});var o=E(n);f&&f.l(o),r=I(o),e=b(o,"DIV",{class:!0});var u=E(e);a=b(u,"INPUT",{class:!0,type:!0}),c=I(u),s=b(u,"BUTTON",{class:!0});var l=E(s);i=k(l,"Validate Manual Key"),l.forEach(d),u.forEach(d),o.forEach(d),this.h()},h:function(){x(a,"class","form-control"),x(a,"type","password"),x(s,"class","btn"),T(s,"btn-secondary",!t[1]),T(s,"btn-primary",!!t[1]),x(e,"class","add-manual-key input-group"),x(n,"id","connect-key")},m:function(h,d){l(h,n,d),f&&f.m(n,null),S(n,r),S(n,e),S(e,a),N(a,t[2]),S(e,c),S(e,s),S(s,i),o||(u=[R(a,"input",t[10]),R(s,"click",t[11])],o=!0)},p:function(t,e){t[1]?f&&(f.d(1),f=null):f?f.p(t,e):((f=W(t)).c(),f.m(n,r)),4&e&&a.value!==t[2]&&N(a,t[2]),2&e&&T(s,"btn-secondary",!t[1]),2&e&&T(s,"btn-primary",!!t[1])},d:function(t){t&&d(n),f&&f.d(),o=!1,D(u)}}}function L(t){var n,r,e,a,c,s,i,o,u,f,h,p=t[3]&&F(t);return{c:function(){n=g("div"),r=g("p"),e=m("Hydrus Client URL"),a=w(),c=g("input"),s=w(),i=g("button"),o=m("Connect"),u=w(),p&&p.c(),this.h()},l:function(t){n=b(t,"DIV",{id:!0});var l=E(n);r=b(l,"P",{});var f=E(r);e=k(f,"Hydrus Client URL"),f.forEach(d),a=I(l),c=b(l,"INPUT",{}),s=I(l),i=b(l,"BUTTON",{class:!0});var h=E(i);o=k(h,"Connect"),h.forEach(d),u=I(l),p&&p.l(l),l.forEach(d),this.h()},h:function(){x(i,"class","btn btn-primary"),T(i,"disabled",t[3]),x(n,"id","connect-address")},m:function(d,v){l(d,n,v),S(n,r),S(r,e),S(n,a),S(n,c),N(c,t[0]),S(n,s),S(n,i),S(i,o),S(n,u),p&&p.m(n,null),f||(h=[R(c,"input",t[9]),R(i,"click",t[6])],f=!0)},p:function(t,r){1&r&&c.value!==t[0]&&N(c,t[0]),8&r&&T(i,"disabled",t[3]),t[3]?p?p.p(t,r):((p=F(t)).c(),p.m(n,null)):p&&(p.d(1),p=null)},d:function(t){t&&d(n),p&&p.d(),f=!1,D(h)}}}function W(t){var n,r,e,a,c;return{c:function(){n=g("div"),r=g("button"),e=m("Request Temporary Key"),this.h()},l:function(t){n=b(t,"DIV",{class:!0});var a=E(n);r=b(a,"BUTTON",{class:!0});var c=E(r);e=k(c,"Request Temporary Key"),c.forEach(d),a.forEach(d),this.h()},h:function(){x(r,"class","btn btn-primary"),x(n,"class","request-new-key")},m:function(s,i){l(s,n,i),S(n,r),S(r,e),a||(c=R(r,"click",t[7]),a=!0)},p:h,d:function(t){t&&d(n),a=!1,c()}}}function F(t){var n,r,e,a,c=!t[4]&&z(t),s=!t[5]&&!!t[1]&&Q();return{c:function(){n=g("div"),r=g("div"),e=w(),c&&c.c(),a=w(),s&&s.c(),this.h()},l:function(t){n=b(t,"DIV",{class:!0,role:!0});var i=E(n);r=b(i,"DIV",{class:!0,role:!0,"aria-hidden":!0}),E(r).forEach(d),e=I(i),c&&c.l(i),a=I(i),s&&s.l(i),i.forEach(d),this.h()},h:function(){x(r,"class","spinner-border"),x(r,"role","status"),x(r,"aria-hidden","true"),x(n,"class","alert alert-primary d-flex align-items-left"),x(n,"role","alert")},m:function(t,i){l(t,n,i),S(n,r),S(n,e),c&&c.m(n,null),S(n,a),s&&s.m(n,null)},p:function(t,r){t[4]?c&&(c.d(1),c=null):c?c.p(t,r):((c=z(t)).c(),c.m(n,a)),!t[5]&&t[1]?s||((s=Q()).c(),s.m(n,null)):s&&(s.d(1),s=null)},d:function(t){t&&d(n),c&&c.d(),s&&s.d()}}}function z(t){var n,r,e,a,c;return{c:function(){n=g("p"),r=m("Connecting to\n            "),e=g("strong"),a=m(t[0]),c=m("\n            ...")},l:function(s){n=b(s,"P",{});var i=E(n);r=k(i,"Connecting to\n            "),e=b(i,"STRONG",{});var o=E(e);a=k(o,t[0]),o.forEach(d),c=k(i,"\n            ..."),i.forEach(d)},m:function(t,s){l(t,n,s),S(n,r),S(n,e),S(e,a),S(n,c)},p:function(t,n){1&n&&$(a,t[0])},d:function(t){t&&d(n)}}}function Q(t){var n,r;return{c:function(){n=g("p"),r=m("Validating key...")},l:function(t){n=b(t,"P",{});var e=E(n);r=k(e,"Validating key..."),e.forEach(d)},m:function(t,e){l(t,n,e),S(n,r)},d:function(t){t&&d(n)}}}function X(t){var n;function r(t,n){return t[4]?t[5]?void 0:G:L}var e=r(t),a=e&&e(t);return{c:function(){a&&a.c(),n=u()},l:function(t){a&&a.l(t),n=u()},m:function(t,r){a&&a.m(t,r),l(t,n,r)},p:function(t,c){var s=f(c,1)[0];e===(e=r(t))&&a?a.p(t,s):(a&&a.d(1),(a=e&&e(t))&&(a.c(),a.m(n.parentNode,n)))},i:h,o:h,d:function(t){a&&a.d(t),t&&d(n)}}}function Y(t,n,r){var e="http://127.0.0.1:45869",a="",c="",s=!1,i=!1,o=!1;function u(){return l.apply(this,arguments)}function l(){return(l=v(y.mark((function t(){var n,c,o;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!s){t.next=2;break}return t.abrupt("return");case 2:return r(3,s=!0),n=A(e),t.prev=4,t.next=7,n.api_version();case 7:if(c=t.sent,o=c.version,console.log("Connected with API version: ".concat(o)),localStorage.setItem("address",JSON.stringify(e)),r(4,i=!0),!a){t.next=15;break}return t.next=15,h();case 15:t.next=22;break;case 17:t.prev=17,t.t0=t.catch(4),console.error(t.t0),M.set(t.t0),K.set(!1);case 22:r(3,s=!1);case 23:case"end":return t.stop()}}),t,null,[[4,17]])})))).apply(this,arguments)}function f(){return(f=v(y.mark((function t(){var n,e,s;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=A(),t.prev=1,t.next=4,n.request_new_permissions("miia-web",B);case 4:e=t.sent,s=e.access_key,localStorage.setItem("access_key",JSON.stringify(a)),r(1,a=s),r(2,c=a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return(d=v(y.mark((function t(){var n,e,c;return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(3,s=!0),(n=A()).access_key=a,t.prev=3,t.next=6,n.verify_access_key(a);case 6:e=t.sent,c=e.human_description,localStorage.setItem("access_key",JSON.stringify(a)),console.log(c),r(5,o=!0),K.set(!0),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.error(t.t0);case 17:r(3,s=!1);case 18:case"end":return t.stop()}}),t,null,[[3,14]])})))).apply(this,arguments)}p((function(){var t=localStorage.getItem("address");t&&r(0,e=JSON.parse(t));var n=localStorage.getItem("access_key");n&&r(1,a=JSON.parse(n)),v(y.mark((function n(){return y.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=9;break}return n.prev=1,n.next=4,u();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()}));return[e,a,c,s,i,o,u,function(){return f.apply(this,arguments)},h,function(){e=this.value,r(0,e)},function(){c=this.value,r(2,c)},function(){r(1,a=c),h()}]}var Z=function(t){n(e,o);var r=j(e);function e(t){var n;return a(this,e),n=r.call(this),c(i(n),t,Y,X,s,{}),n}return e}();function tt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(n){var s=r(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return e(this,a)}}function nt(t,n,r){var e=t.slice();return e[7]=n[r],e}function rt(t){var n,r,e,a,c,s,i,o,u=t[7]+"";function f(){for(var n,r=arguments.length,e=new Array(r),a=0;a<r;a++)e[a]=arguments[a];return(n=t)[4].apply(n,[t[7]].concat(e))}return{c:function(){n=g("button"),r=m(u),e=w(),a=g("span"),c=m("×"),this.h()},l:function(t){n=b(t,"BUTTON",{type:!0,class:!0,title:!0});var s=E(n);r=k(s,u),e=I(s),a=b(s,"SPAN",{class:!0,"aria-hidden":!0});var i=E(a);c=k(i,"×"),i.forEach(d),s.forEach(d),this.h()},h:function(){x(a,"class","badge"),x(a,"aria-hidden","true"),x(n,"type","button"),x(n,"class","btn btn-secondary btn-sm"),x(n,"title",s="Remove tag '"+t[7]+"'")},m:function(t,s){l(t,n,s),S(n,r),S(n,e),S(n,a),S(a,c),i||(o=R(n,"click",O(f)),i=!0)},p:function(e,a){t=e,1&a&&u!==(u=t[7]+"")&&$(r,u),1&a&&s!==(s="Remove tag '"+t[7]+"'")&&x(n,"title",s)},d:function(t){t&&d(n),i=!1,o()}}}function et(t){for(var n,r,e,a,c,s,i,o,u,p,v,y,$,P,_,U,q,C,H,J,A,B,M,K,j,G,L=t[0],W=[],F=0;F<L.length;F+=1)W[F]=rt(nt(t,L,F));return{c:function(){n=g("div"),r=g("h2"),e=m("Search"),a=w(),c=g("form"),s=g("div");for(var t=0;t<W.length;t+=1)W[t].c();i=w(),o=g("input"),u=w(),p=g("button"),v=m("Add Tag"),$=w(),P=g("a"),_=m("Search"),C=w(),H=g("div"),J=g("div"),A=g("h3"),B=m("Search Tags"),M=w(),K=g("div"),this.h()},l:function(t){n=b(t,"DIV",{id:!0});var l=E(n);r=b(l,"H2",{});var f=E(r);e=k(f,"Search"),f.forEach(d),a=I(l),c=b(l,"FORM",{});var h=E(c);s=b(h,"DIV",{class:!0});for(var y=E(s),g=0;g<W.length;g+=1)W[g].l(y);i=I(y),o=b(y,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),u=I(y),p=b(y,"BUTTON",{class:!0,disabled:!0,type:!0,id:!0});var m=E(p);v=k(m,"Add Tag"),m.forEach(d),$=I(y),P=b(y,"A",{class:!0,type:!0,id:!0,disabled:!0,href:!0});var x=E(P);_=k(x,"Search"),x.forEach(d),y.forEach(d),C=I(h),H=b(h,"DIV",{id:!0,class:!0});var S=E(H);J=b(S,"DIV",{id:!0,class:!0});var R=E(J);A=b(R,"H3",{class:!0});var w=E(A);B=k(w,"Search Tags"),w.forEach(d),R.forEach(d),M=I(S),K=b(S,"DIV",{id:!0,class:!0}),E(K).forEach(d),S.forEach(d),h.forEach(d),l.forEach(d),this.h()},h:function(){x(o,"type","text"),x(o,"class","form-control"),x(o,"placeholder","tag:to-add"),x(o,"aria-label","Tag to add to search query"),x(o,"aria-describedby","add-tag"),x(p,"class","btn"),p.disabled=y=0===t[1].length,x(p,"type","button"),x(p,"id","add-tag"),T(p,"btn-primary",t[1].length>0),T(p,"btn-outline-secondary",0===t[1].length),x(P,"class","btn btn-success"),x(P,"type","search"),x(P,"id","search"),x(P,"disabled",U=0===t[0].length),x(P,"href",q="/tags?q="+JSON.stringify(t[0])),x(s,"class","input-group"),x(A,"class","sr-only sr-only-focusable"),x(J,"id","tags"),x(J,"class","col"),x(K,"id","action"),x(K,"class","col-auto text-center"),x(H,"id","query"),x(H,"class","row"),x(n,"id","search")},m:function(f,h){l(f,n,h),S(n,r),S(r,e),S(n,a),S(n,c),S(c,s);for(var d=0;d<W.length;d+=1)W[d].m(s,null);S(s,i),S(s,o),N(o,t[1]),S(s,u),S(s,p),S(p,v),S(s,$),S(s,P),S(P,_),S(c,C),S(c,H),S(H,J),S(J,A),S(A,B),S(H,M),S(H,K),j||(G=[R(o,"input",t[5]),R(p,"click",O(t[2]))],j=!0)},p:function(t,n){var r=f(n,1)[0];if(9&r){var e;for(L=t[0],e=0;e<L.length;e+=1){var a=nt(t,L,e);W[e]?W[e].p(a,r):(W[e]=rt(a),W[e].c(),W[e].m(s,i))}for(;e<W.length;e+=1)W[e].d(1);W.length=L.length}2&r&&o.value!==t[1]&&N(o,t[1]),2&r&&y!==(y=0===t[1].length)&&(p.disabled=y),2&r&&T(p,"btn-primary",t[1].length>0),2&r&&T(p,"btn-outline-secondary",0===t[1].length),1&r&&U!==(U=0===t[0].length)&&x(P,"disabled",U),1&r&&q!==(q="/tags?q="+JSON.stringify(t[0]))&&x(P,"href",q)},i:h,o:h,d:function(t){t&&d(n),V(W,t),j=!1,D(G)}}}function at(t,n,r){var e=n.tags,a=void 0===e?["landscape"]:e,c="";function s(t){var n=a.indexOf(String(t));console.log(t,n),a.splice(n,1),r(0,a)}return t.$set=function(t){"tags"in t&&r(0,a=t.tags)},[a,c,function(){console.log(c),a.includes(c)||(a.push(c),r(0,a)),r(1,c="")},s,function(t){s(t)},function(){c=this.value,r(1,c)}]}var ct=function(t){n(e,o);var r=tt(e);function e(t){var n;return a(this,e),n=r.call(this),c(i(n),t,at,et,s,{tags:0}),n}return e}();function st(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=r(t);if(n){var s=r(this).constructor;a=Reflect.construct(c,arguments,s)}else a=c.apply(this,arguments);return e(this,a)}}function it(t){var n,r,e,a,c,s,i,o,u,f,p;return o=new Z({}),f=new ct({}),{c:function(){n=w(),r=g("h1"),e=m("Miia Web!"),a=w(),c=g("p"),s=m("a web client for Hydrus"),i=w(),P(o.$$.fragment),u=w(),P(f.$$.fragment),this.h()},l:function(t){_('[data-svelte="svelte-1nj90w7"]',document.head).forEach(d),n=I(t),r=b(t,"H1",{});var l=E(r);e=k(l,"Miia Web!"),l.forEach(d),a=I(t),c=b(t,"P",{});var h=E(c);s=k(h,"a web client for Hydrus"),h.forEach(d),i=I(t),U(o.$$.fragment,t),u=I(t),U(f.$$.fragment,t),this.h()},h:function(){document.title="Miia Web"},m:function(t,h){l(t,n,h),l(t,r,h),S(r,e),l(t,a,h),l(t,c,h),S(c,s),l(t,i,h),q(o,t,h),l(t,u,h),q(f,t,h),p=!0},p:h,i:function(t){p||(C(o.$$.fragment,t),C(f.$$.fragment,t),p=!0)},o:function(t){H(o.$$.fragment,t),H(f.$$.fragment,t),p=!1},d:function(t){t&&d(n),t&&d(r),t&&d(a),t&&d(c),t&&d(i),J(o,t),t&&d(u),J(f,t)}}}function ot(t){return[]}var ut=function(t){n(e,o);var r=st(e);function e(t){var n;return a(this,e),n=r.call(this),c(i(n),t,ot,it,s,{}),n}return e}();export default ut;