import{S as t,i as s,s as a,k as e,b as n,t as o,y as i,d as r,m as c,c as l,f as u,g as h,h as d,a as f,j as m,u as p,n as v}from"./client.f82d9d9c.js";function g(t){let s,a,g,j,w,y,b=t[0].title+"",x=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(b),w=e(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,b),s.forEach(r),w=c(t),y=l(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){d(y,"class","content svelte-1wwb11m")},m(t,s){f(t,a,s),f(t,g,s),m(g,j),f(t,w,s),f(t,y,s),y.innerHTML=x},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&b!==(b=t[0].title+"")&&p(j,b),1&a&&x!==(x=t[0].html+"")&&(y.innerHTML=x)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(w),t&&r(y)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function w(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,w,g,a,{post:0})}}export{j as preload};