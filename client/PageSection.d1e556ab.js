import{S as s,i as o,s as a,e,c as t,a as n,d as i,f as l,g as c,h as r,J as u,j as d,m as p,K as g,L as h,B as f,C as m,v,H as _}from"./client.62cd638b.js";function b(s){let o,a,u;return{c(){o=e("div"),a=e("video"),this.h()},l(s){o=t(s,"DIV",{class:!0});var e=n(o);a=t(e,"VIDEO",{preload:!0,autobuffer:!0,autoplay:!0,muted:!0,loop:!0,playsinline:!0,src:!0,class:!0}),n(a).forEach(i),e.forEach(i),this.h()},h(){l(a,"preload",""),l(a,"autobuffer",""),a.autoplay=!0,a.muted=!0,a.loop=!0,a.playsInline=!0,a.src!==(u=s[1].video)&&l(a,"src",u),l(a,"class","svelte-1jxpqpn"),l(o,"class","video-stage svelte-1jxpqpn")},m(e,t){c(e,o,t),r(o,a),s[9](a)},p(s,o){2&o&&a.src!==(u=s[1].video)&&l(a,"src",u)},d(a){a&&i(o),s[9](null)}}}function x(s){let o,a,v,_,x,y=!!s[1].video&&b(s);const j=s[8].default,k=u(j,s,s[7],null);return{c(){o=e("section"),y&&y.c(),a=d(),v=e("div"),_=e("div"),k&&k.c(),this.h()},l(s){o=t(s,"SECTION",{style:!0,class:!0});var e=n(o);y&&y.l(e),a=p(e),v=t(e,"DIV",{class:!0});var l=n(v);_=t(l,"DIV",{class:!0,style:!0});var c=n(_);k&&k.l(c),c.forEach(i),l.forEach(i),e.forEach(i),this.h()},h(){l(_,"class","row"),g(_,"justify-content",s[3]),l(v,"class","container svelte-1jxpqpn"),g(o,"background-color",s[1].color),g(o,"background-image",s[1].image),g(o,"min-height",s[0]),g(o,"color",s[1].text_color),g(o,"text-shadow",s[2]),g(o,"background-position",s[1].image_position),g(o,"--page-padding",s[4]),l(o,"class","svelte-1jxpqpn")},m(e,t){c(e,o,t),y&&y.m(o,null),r(o,a),r(o,v),r(v,_),k&&k.m(_,null),s[10](o),x=!0},p(s,[e]){s[1].video?y?y.p(s,e):(y=b(s),y.c(),y.m(o,a)):y&&(y.d(1),y=null),k&&k.p&&128&e&&h(k,j,s,s[7],e,null,null),(!x||8&e)&&g(_,"justify-content",s[3]),(!x||2&e)&&g(o,"background-color",s[1].color),(!x||2&e)&&g(o,"background-image",s[1].image),(!x||1&e)&&g(o,"min-height",s[0]),(!x||2&e)&&g(o,"color",s[1].text_color),(!x||4&e)&&g(o,"text-shadow",s[2]),(!x||2&e)&&g(o,"background-position",s[1].image_position),(!x||16&e)&&g(o,"--page-padding",s[4])},i(s){x||(f(k,s),x=!0)},o(s){m(k,s),x=!1},d(a){a&&i(o),y&&y.d(),k&&k.d(a),s[10](null)}}}function y(s,o,a){let e,t,{min_height:n=""}=o,{background:i={video:null,image:null,image_position:null,color:null,text_color:null}}=o,{text_shadow:l}=o,{justify:c}=o,{page_padding:r="6rem"}=o;v(()=>{const s=new IntersectionObserver(s=>{s[0].isIntersecting?e&&e.play():s[0].isIntersecting||e&&e.pause()});return s.observe(t),()=>{s.disconnect()}});let{$$slots:u={},$$scope:d}=o;return s.$set=s=>{"min_height"in s&&a(0,n=s.min_height),"background"in s&&a(1,i=s.background),"text_shadow"in s&&a(2,l=s.text_shadow),"justify"in s&&a(3,c=s.justify),"page_padding"in s&&a(4,r=s.page_padding),"$$scope"in s&&a(7,d=s.$$scope)},[n,i,l,c,r,e,t,d,u,function(s){_[s?"unshift":"push"](()=>{e=s,a(5,e)})},function(s){_[s?"unshift":"push"](()=>{t=s,a(6,t)})}]}class j extends s{constructor(s){super(),o(this,s,y,x,a,{min_height:0,background:1,text_shadow:2,justify:3,page_padding:4})}}export{j as P};