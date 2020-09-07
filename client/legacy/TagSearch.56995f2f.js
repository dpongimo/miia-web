import{L as e,a as t,M as n,c as r,m as a,r as s,N as i,_ as o,b as c,i as u,s as l,d as f,S as _,e as h,f as d,g as p,h as g,j as v,k as y,q as b,O as E,v as m,x as k,P as S,l as w,Q as x,I as T,J as I,o as O,R as A,t as R,p as G,u as P,A as N,C as D,y as L,z as j,n as C,T as U,B as F,U as q}from"./client.19c3c8e8.js";function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Y(t,n,r){return(Y=M()?Reflect.construct:function(t,n,r){var a=[null];a.push.apply(a,n);var s=new(Function.bind.apply(t,a));return r&&e(s,r.prototype),s}).apply(null,arguments)}function V(n){var r="function"==typeof Map?new Map:void 0;return(V=function(n){if(null===n||(a=n,-1===Function.toString.call(a).indexOf("[native code]")))return n;var a;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,s)}function s(){return Y(n,arguments,t(this).constructor)}return s.prototype=Object.create(n.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e(s,n)})(n)}function K(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=t(e);if(n){var s=t(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return c(this,r)}}var H,J={API_VERSION:"/api_version",SESSION_KEY:"/session_key",REQUEST_NEW_PERMISSIONS:"/request_new_permissions",VERIFY_ACCESS_KEY:"/verify_access_key",ADD_FILE:"/add_files/add_file",CLEAN_TAGS:"/add_tags/clean_tags",GET_TAG_SERVICES:"/add_tags/get_tag_services",ADD_TAGS:"/add_tags/add_tags",GET_URL_FILES:"/add_urls/get_url_files",GET_URL_INFO:"/add_urls/get_url_info",ADD_URL:"/add_urls/add_url",ASSOCIATE_URL:"/add_urls/associate_url",GET_COOKIES:"/manage_cookies/get_cookies",SET_COOKIES:"/manage_cookies/set_cookies",GET_PAGES:"/manage_pages/get_pages",GET_PAGE_INFO:"/manage_pages/get_page_info",FOCUS_PAGE:"/manage_pages/focus_page",SEARCH_FILES:"/get_files/search_files",GET_FILE:"/get_files/file",GET_THUMBNAIL:"/get_files/thumbnail",GET_FILE_METADATA:"/get_files/file_metadata"},$={NOT_IN_DATABASE:0,SUCCESSFUL:1,ALREADY_IN_DATABASE:2,PREVIOUSLY_DELETED:3,FAILED:4,VETOED:7},B={ADD_TO_LOCAL:0,DELETE_FROM_LOCAL:1,PEND_TO_REPOSITORY:2,RESCIND_PEND_FROM_REPOSITORY:3,PETITION_FROM_REPOSITORY:4,RESCIND_A_PETITION_FROM_REPOSITORY:5},W={POST_URL:0,FILE_URL:2,GALLERY_URL:3,WATCHABLE_URL:4,UNKNOWN_URL:5},Q={IMPORT_URLS:0,IMPORT_FILES:1,ADD_TAGS:2,SEARCH_FILES:3,MANAGE_PAGES:4,MANAGE_COOKIES:5},z={Current:0,Pending:1,Deleted:2,Petitioned:3},X={"Gallery downloader":1,"Simple downloader":2,"Hard drive import":3,Petitions:5,"File search":6,"URL downloader":7,Duplicates:8,"Thread watcher":9,"Page of pages":10},Z=function(e){o(n,e);var t=K(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).name=a.constructor.name,a}return n}(V(Error)),ee=function(e){o(n,e);var t=K(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).name=a.constructor.name,a}return n}(V(Error)),te=function(e){o(n,e);var t=K(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).name=a.constructor.name,a}return n}(V(Error)),ne=function(e){o(n,e);var t=K(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).name=a.constructor.name,a}return n}(V(Error)),re=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.address="address"in t?t.address:e.default_api_address,this.access_key="key"in t?t.key:""}var t,o,c,u,l,f,_,h,d,p,g,v,y,b,E,m,k,S,w,x,T,I,O;return n(e,[{key:"build_call",value:(O=a(s.mark((function e(t,n){var r,a,o,c,u,l,f=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>2&&void 0!==f[2]?f[2]:{},""!==this.access_key&&("headers"in r&&"Hydrus-Client-API-Access-Key"in r.headers||("headers"in r||(r.headers={}),r.headers["Hydrus-Client-API-Access-Key"]=this.access_key)),a=this.address+n,"queries"in r){for(o in a+="?",r.queries)r.queries.hasOwnProperty(o)&&(c=r.queries[o],"object"===i(c)&&(c=JSON.stringify(c)),a+=o+"="+c+"&");a=a.substr(0,a.length-1)}return a=encodeURI(a),u="parse"in r?r.parse:"json",e.next=8,fetch(a,{method:t,headers:r.headers,body:"data"in r?r.data:r.json});case 8:if(!(l=e.sent).ok){e.next=21;break}e.t0=u,e.next="blob"===e.t0?13:(e.t0,16);break;case 13:return e.next=15,l.blob();case 15:return e.abrupt("return",e.sent);case 16:return e.next=18,l.json();case 18:return e.abrupt("return",e.sent);case 19:e.next=22;break;case 21:throw new Z(l.statusText);case 22:case"end":return e.stop()}}),e,this)}))),function(e,t){return O.apply(this,arguments)})},{key:"api_version",value:(I=a(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.API_VERSION);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return I.apply(this,arguments)})},{key:"api_check",value:(T=a(s.mark((function e(){var t,n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api_version();case 2:if(t=e.sent,!((n=t.version)>13)){e.next=8;break}throw new ne("You are using an older version of hydrus.js (".concat(13,") that may not work with the newer api (").concat(n,"). Please check if there is an update available!"));case 8:if(!(13>n)){e.next=10;break}throw new ne("This version of hydrus.js (".concat(13,") is built for a newer version of the api than what your hydrus installation is currently using (").concat(n,"). Please update your hydrus."));case 10:case"end":return e.stop()}}),e,this)}))),function(){return T.apply(this,arguments)})},{key:"session_key",value:(x=a(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.SESSION_KEY);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return x.apply(this,arguments)})},{key:"request_new_permissions",value:(w=a(s.mark((function e(t,n){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.REQUEST_NEW_PERMISSIONS,{queries:{name:t,basic_permissions:JSON.stringify(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)})},{key:"verify_access_key",value:(S=a(s.mark((function e(){var t,n,r=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=""!==t?{headers:{"Hydrus-Client-API-Access-Key":t}}:{},e.next=4,this.build_call("GET",J.VERIFY_ACCESS_KEY,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"add_file",value:(k=a(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("add_file is not tested"),e.next=3,this.build_call("POST",J.ADD_FILE,"path"in t?{json:{path:t.path}}:{headers:{"Content-Type":"application/octet-stream"},data:t.bytes});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return k.apply(this,arguments)})},{key:"add_tags",value:(m=a(s.mark((function e(t,n){var r;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},"service_names_to_tags"in t||"service_names_to_actions_to_tags"in t){e.next=5;break}throw new ee("You must have at least one 'service_names...' argument");case 5:if("object"===i(n)?Object.keys(n).length>1?r.hashes=n:r.hash=n[0]:r.hash=n,"service_names_to_tags"in t&&(r.service_names_to_tags=t.service_names_to_tags),"service_names_to_actions_to_tags"in t&&(r.service_names_to_actions_to_tags=t.service_names_to_actions_to_tags),!("add_siblings_and_parents"in t)){e.next=14;break}if(i(t.add_siblings_and_parents)!==boolean){e.next=13;break}r.add_siblings_and_parents=t.add_siblings_and_parents,e.next=14;break;case 13:throw new te("value of add_siblings_and_parents is of improper type: expects boolean");case 14:return e.next=16,this.build_call("POST",J.ADD_TAGS,{json:r});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e,this)}))),function(e,t){return m.apply(this,arguments)})},{key:"clean_tags",value:(E=a(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.CLEAN_TAGS,{queries:{tags:JSON.stringify(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return E.apply(this,arguments)})},{key:"get_tag_services",value:(b=a(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.GET_TAG_SERVICES);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"get_url_files",value:(y=a(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.GET_URL_FILES,{queries:{url:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"get_url_info",value:(v=a(s.mark((function e(t,n){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.GET_URL_INFO,{queries:{url:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"add_url",value:(g=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},"url"in t){e.next=5;break}throw new ee("You must have a url argument");case 5:if(n.url=t.url,"destination_page_name"in t&&(n.destination_page_name=t.destination_page_name),"destination_page_key"in t&&(n.destination_page_key=t.destination_page_key),!("show_destination_page"in t)){e.next=14;break}if("boolean"!=typeof t.show_destination_page){e.next=13;break}n.show_destination_page=t.show_destination_page,e.next=14;break;case 13:throw new te("value of show_destination_page is of improper type: expects boolean");case 14:if(!("service_names_to_tags"in t)){e.next=20;break}if("object"!==i(t.service_names_to_tags)){e.next=19;break}n.service_names_to_tags=t.service_names_to_tags,e.next=20;break;case 19:throw new te("value of service_names_to_tags is of improper type: expects object");case 20:return e.next=22,this.build_call("POST",J.ADD_URL,{json:n});case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}}),e,this)}))),function(e){return g.apply(this,arguments)})},{key:"associate_url",value:(p=a(s.mark((function e(t,n){var r;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},"to_add"in t||"to_delete"in t){e.next=5;break}throw new ee("You must have at least one 'to_delete' or 'to_add' argument");case 5:"to_add"in t&&("object"===i(t.to_add)?Object.keys(t.to_add).length>1?r.urls_to_add=t.to_add:r.url_to_add=t.to_add[0]:r.url_to_add=t.to_add),"to_delete"in t&&("object"===i(t.to_delete)?Object.keys(t.to_delete).length>1?r.urls_to_delete=t.to_delete:r.url_to_delete=t.to_delete[0]:r.url_to_delete=t.to_delete),"object"===i(n)?Object.keys(n).length>1?r.hashes=n:r.hash=n[0]:r.hash=n;case 8:return e.next=10,this.build_call("POST",J.ASSOCIATE_URL,{json:r});case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return p.apply(this,arguments)})},{key:"search_files",value:(d=a(s.mark((function e(t){var n,r,a=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]&&a[1],r=a.length>2&&void 0!==a[2]&&a[2],e.next=4,this.build_call("GET",J.SEARCH_FILES,{queries:{tags:JSON.stringify(t),system_inbox:n,system_archive:r}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"get_file_metadata",value:(h=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!("file_ids"in t)||!("hashes"in t)){e.next=5;break}throw new te("only one argument is required, choose either file_ids or hashes");case 5:if(!("file_ids"in t)){e.next=11;break}if("object"!==i(t.file_ids)){e.next=10;break}n.file_ids=JSON.stringify(t.file_ids),e.next=11;break;case 10:throw new te("value of file_ids is of improper type: expects list");case 11:if(!("hashes"in t)){e.next=17;break}if("object"!==i(t.hashes)){e.next=16;break}n.hashes=JSON.stringify(t.hashes),e.next=17;break;case 16:throw new te("value of hashes is of improper type: expects list");case 17:"only_return_identifiers"in t&&(n.only_return_identifiers=t.only_return_identifiers);case 18:return console.log(n),e.next=21,this.build_call("GET",J.GET_FILE_METADATA,{queries:n});case 21:return e.abrupt("return",e.sent);case 22:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"get_file",value:(_=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!("file_id"in t)||!("hash"in t)){e.next=5;break}throw new te("only one argument is required, choose either file_id or hash");case 5:"file_id"in t&&(n.file_id=t.file_id),"hash"in t&&(n.hash=t.hash);case 7:return e.next=9,this.build_call("GET",J.GET_FILE,{parse:"blob",queries:n});case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"get_thumbnail",value:(f=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!("file_id"in t)||!("hash"in t)){e.next=5;break}throw new te("only one argument is required, choose either file_id or hash");case 5:"file_id"in t&&(n.file_id=t.file_id),"hash"in t&&(n.hash=t.hash);case 7:return e.next=9,this.build_call("GET",J.GET_THUMBNAIL,{parse:"blob",queries:n});case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"get_cookies",value:(l=a(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.GET_COOKIES,{queries:{domain:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"set_cookies",value:(u=a(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("POST",J.SET_COOKIES,{json:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"get_pages",value:(c=a(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.build_call("GET",J.GET_PAGES);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"get_page_info",value:(o=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},"page_key"in t){e.next=5;break}throw new te("page_key argument required");case 5:n.page_key=t.page_key,"simple"in t&&(n.simple=t.simple);case 7:return e.next=9,this.build_call("GET",J.GET_PAGE_INFO,{queries:n});case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"focus_page",value:(t=a(s.mark((function e(t){var n;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!("page_key"in t)){e.next=5;break}n.page_key=t.page_key,e.next=6;break;case 5:throw new te("page_key argument required");case 6:return e.next=8,this.build_call("POST",J.FOCUS_PAGE,{json:n});case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}],[{key:"default_api_address",get:function(){return"http://127.0.0.1:45869"}},{key:"ENDPOINTS",get:function(){return J}},{key:"FILE_STATUS",get:function(){return $}},{key:"TAG_ACTIONS",get:function(){return B}},{key:"URL_TYPE",get:function(){return W}},{key:"PERMISSIONS",get:function(){return Q}},{key:"STATUS_NUMBERS",get:function(){return z}},{key:"PAGE_TYPES",get:function(){return X}}]),e}(),ae=["image/jpg","image/png","image/gif"];function se(e){return ae.includes(e)}function ie(e,t){var n={address:e||ce()};return n.key=t||function(){try{return JSON.parse(localStorage.getItem("access_key"))}catch(e){return}}(),H=new re(n)}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return H||ie(e,t),H.fetch=fetch,H}function ce(){try{return JSON.parse(localStorage.getItem("address"))}catch(e){return re.default_api_address}}var ue=[re.PERMISSIONS.SEARCH_FILES,re.PERMISSIONS.MANAGE_PAGES];function le(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=t(e);if(n){var s=t(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return c(this,r)}}function fe(e){var t,n,r;return{c:function(){t=h("div"),n=h("video"),this.h()},l:function(e){t=d(e,"DIV",{class:!0});var r=p(t);n=d(r,"VIDEO",{preload:!0,autobuffer:!0,autoplay:!0,muted:!0,loop:!0,playsinline:!0,src:!0,class:!0}),p(n).forEach(g),r.forEach(g),this.h()},h:function(){v(n,"preload",""),v(n,"autobuffer",""),n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,n.src!==(r=e[1].video)&&v(n,"src",r),v(n,"class","svelte-1jxpqpn"),v(t,"class","video-stage svelte-1jxpqpn")},m:function(r,a){y(r,t,a),b(t,n),e[9](n)},p:function(e,t){2&t&&n.src!==(r=e[1].video)&&v(n,"src",r)},d:function(n){n&&g(t),e[9](null)}}}function _e(e){var t,n,r,a,s,i=!!e[1].video&&fe(e),o=e[8].default,c=E(o,e,e[7],null);return{c:function(){t=h("section"),i&&i.c(),n=m(),r=h("div"),a=h("div"),c&&c.c(),this.h()},l:function(e){t=d(e,"SECTION",{style:!0,class:!0});var s=p(t);i&&i.l(s),n=k(s),r=d(s,"DIV",{class:!0});var o=p(r);a=d(o,"DIV",{class:!0,style:!0});var u=p(a);c&&c.l(u),u.forEach(g),o.forEach(g),s.forEach(g),this.h()},h:function(){v(a,"class","row"),S(a,"justify-content",e[3]),v(r,"class","container svelte-1jxpqpn"),S(t,"background-color",e[1].color),S(t,"background-image",e[1].image),S(t,"min-height",e[0]),S(t,"color",e[1].text_color),S(t,"text-shadow",e[2]),S(t,"background-position",e[1].image_position),S(t,"--page-padding",e[4]),v(t,"class","svelte-1jxpqpn")},m:function(o,u){y(o,t,u),i&&i.m(t,null),b(t,n),b(t,r),b(r,a),c&&c.m(a,null),e[10](t),s=!0},p:function(e,r){var u=w(r,1)[0];e[1].video?i?i.p(e,u):((i=fe(e)).c(),i.m(t,n)):i&&(i.d(1),i=null),c&&c.p&&128&u&&x(c,o,e,e[7],u,null,null),(!s||8&u)&&S(a,"justify-content",e[3]),(!s||2&u)&&S(t,"background-color",e[1].color),(!s||2&u)&&S(t,"background-image",e[1].image),(!s||1&u)&&S(t,"min-height",e[0]),(!s||2&u)&&S(t,"color",e[1].text_color),(!s||4&u)&&S(t,"text-shadow",e[2]),(!s||2&u)&&S(t,"background-position",e[1].image_position),(!s||16&u)&&S(t,"--page-padding",e[4])},i:function(e){s||(T(c,e),s=!0)},o:function(e){I(c,e),s=!1},d:function(n){n&&g(t),i&&i.d(),c&&c.d(n),e[10](null)}}}function he(e,t,n){var r,a,s=t.min_height,i=void 0===s?"":s,o=t.background,c=void 0===o?{video:null,image:null,image_position:null,color:null,text_color:null}:o,u=t.text_shadow,l=void 0===u?void 0:u,f=t.justify,_=void 0===f?void 0:f,h=t.page_padding,d=void 0===h?"10vh":h;O((function(){var e=new IntersectionObserver((function(e){e[0].isIntersecting?r&&r.play():e[0].isIntersecting||r&&r.pause()}));return e.observe(a),function(){e.disconnect()}}));var p=t.$$slots,g=void 0===p?{}:p,v=t.$$scope;return e.$set=function(e){"min_height"in e&&n(0,i=e.min_height),"background"in e&&n(1,c=e.background),"text_shadow"in e&&n(2,l=e.text_shadow),"justify"in e&&n(3,_=e.justify),"page_padding"in e&&n(4,d=e.page_padding),"$$scope"in e&&n(7,v=e.$$scope)},[i,c,l,_,d,r,a,v,g,function(e){A[e?"unshift":"push"]((function(){n(5,r=e)}))},function(e){A[e?"unshift":"push"]((function(){n(6,a=e)}))}]}var de=function(e){o(n,_);var t=le(n);function n(e){var a;return r(this,n),a=t.call(this),u(f(a),e,he,_e,l,{min_height:0,background:1,text_shadow:2,justify:3,page_padding:4}),a}return n}();function pe(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=t(e);if(n){var s=t(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return c(this,r)}}function ge(e,t,n){var r=e.slice();return r[8]=t[n],r}function ve(e){var t,n,r,a,s,i,o,c,u=e[8]+"";function l(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e)[5].apply(t,[e[8]].concat(r))}return{c:function(){t=h("button"),n=R(u),r=m(),a=h("span"),s=R("×"),this.h()},l:function(e){t=d(e,"BUTTON",{type:!0,class:!0,title:!0});var i=p(t);n=G(i,u),r=k(i),a=d(i,"SPAN",{class:!0,"aria-hidden":!0});var o=p(a);s=G(o,"×"),o.forEach(g),i.forEach(g),this.h()},h:function(){v(a,"class","badge"),v(a,"aria-hidden","true"),v(t,"type","button"),v(t,"class","btn btn-secondary btn-sm"),v(t,"title",i="Remove tag '"+e[8]+"'")},m:function(e,i){y(e,t,i),b(t,n),b(t,r),b(t,a),b(a,s),o||(c=P(t,"click",N(l)),o=!0)},p:function(r,a){e=r,1&a&&u!==(u=e[8]+"")&&D(n,u),1&a&&i!==(i="Remove tag '"+e[8]+"'")&&v(t,"title",i)},d:function(e){e&&g(t),o=!1,c()}}}function ye(e){for(var t,n,r,a,s,i,o,c,u,l,f,_,E,S,x,T,I,O,A=e[2].length>0?"Add Tag":"Search",q=e[0],M=[],Y=0;Y<q.length;Y+=1)M[Y]=ve(ge(e,q,Y));return{c:function(){t=h("section"),n=h("form"),r=h("div");for(var e=0;e<M.length;e+=1)M[e].c();a=m(),s=h("input"),i=m(),o=h("button"),c=R(A),l=m(),f=h("div"),_=h("div"),E=h("h3"),S=R("Search Tags"),x=m(),T=h("div"),this.h()},l:function(e){t=d(e,"SECTION",{id:!0,class:!0});var u=p(t);n=d(u,"FORM",{});var h=p(n);r=d(h,"DIV",{class:!0});for(var v=p(r),y=0;y<M.length;y+=1)M[y].l(v);a=k(v),s=d(v,"INPUT",{type:!0,class:!0,placeholder:!0,"aria-label":!0,"aria-describedby":!0}),i=k(v),o=d(v,"BUTTON",{class:!0,type:!0,id:!0,disabled:!0});var b=p(o);c=G(b,A),b.forEach(g),v.forEach(g),l=k(h),f=d(h,"DIV",{id:!0,class:!0});var m=p(f);_=d(m,"DIV",{id:!0,class:!0});var w=p(_);E=d(w,"H3",{class:!0});var I=p(E);S=G(I,"Search Tags"),I.forEach(g),w.forEach(g),x=k(m),T=d(m,"DIV",{id:!0,class:!0}),p(T).forEach(g),m.forEach(g),h.forEach(g),u.forEach(g),this.h()},h:function(){v(s,"type","text"),v(s,"class","form-control"),v(s,"placeholder","tag:to add"),v(s,"aria-label","Tag to add to search query"),v(s,"aria-describedby","add-tag"),v(o,"class","btn"),v(o,"type","submit"),v(o,"id","search"),o.disabled=u=0===e[0].length&&0===e[2].length,L(o,"btn-success",0===e[2].length&&e[0].length>0),L(o,"btn-primary",e[2].length>0),L(o,"disabled",0===e[2].length&&0===e[0].length),v(r,"class","input-group"),v(E,"class","sr-only sr-only-focusable"),v(_,"id","tags"),v(_,"class","col"),v(T,"id","action"),v(T,"class","col-auto text-center"),v(f,"id","query"),v(f,"class","row"),v(t,"id","search"),v(t,"class","container")},m:function(u,h){y(u,t,h),b(t,n),b(n,r);for(var d=0;d<M.length;d+=1)M[d].m(r,null);b(r,a),b(r,s),j(s,e[2]),b(r,i),b(r,o),b(o,c),b(n,l),b(n,f),b(f,_),b(_,E),b(E,S),b(f,x),b(f,T),I||(O=[P(s,"input",e[6]),P(n,"submit",N(e[7]))],I=!0)},p:function(e,t){var n=w(t,1)[0];if(17&n){var i;for(q=e[0],i=0;i<q.length;i+=1){var l=ge(e,q,i);M[i]?M[i].p(l,n):(M[i]=ve(l),M[i].c(),M[i].m(r,a))}for(;i<M.length;i+=1)M[i].d(1);M.length=q.length}4&n&&s.value!==e[2]&&j(s,e[2]),4&n&&A!==(A=e[2].length>0?"Add Tag":"Search")&&D(c,A),5&n&&u!==(u=0===e[0].length&&0===e[2].length)&&(o.disabled=u),5&n&&L(o,"btn-success",0===e[2].length&&e[0].length>0),4&n&&L(o,"btn-primary",e[2].length>0),5&n&&L(o,"disabled",0===e[2].length&&0===e[0].length)},i:C,o:C,d:function(e){e&&g(t),U(M,e),I=!1,F(O)}}}function be(e,t,n){var r=t.tags,a=void 0===r?["landscape"]:r,s="";function i(){console.log(s),a.includes(s)||(a.push(s),n(0,a)),n(2,s="")}function o(e){var t=a.indexOf(String(e));console.log(e,t),a.splice(t,1),n(0,a)}var c=t.onSearch,u=void 0===c?function(e){q("/tags?q=".concat(JSON.stringify(e)))}:c;return e.$set=function(e){"tags"in e&&n(0,a=e.tags),"onSearch"in e&&n(1,u=e.onSearch)},[a,u,s,i,o,function(e){o(e)},function(){s=this.value,n(2,s)},function(){s.length>0?i():u(a)}]}var Ee=function(e){o(n,_);var t=pe(n);function n(e){var a;return r(this,n),a=t.call(this),u(f(a),e,be,ye,l,{tags:0,onSearch:1}),a}return n}();export{oe as G,se as I,de as P,Ee as T,ue as r};