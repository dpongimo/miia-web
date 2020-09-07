import{w as a,_ as n,a as r,b as e,c as t,i as c,s,d as o,S as i,e as l,t as u,f as d,g as f,h,j as v,k as p,l as y,m,n as E,o as g,p as b,q as k,r as I,u as w,v as S,x as P,y as T,z as C,A as N,B as A,C as $,D,E as H,F as x,G as O,H as L,I as V,J as R,K as _,L as U,M,N as q,O as B,P as K}from"./client.27009c8b.js";import{G as Y,r as J,P as j,T as F}from"./TagSearch.65b8df4e.js";var G=a("No Error"),W=a(!1);function z(a){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,c=r(a);if(n){var s=r(this).constructor;t=Reflect.construct(c,arguments,s)}else t=c.apply(this,arguments);return e(this,t)}}function Q(a){var n,r,e,t,c;return{c:function(){n=l("div"),r=l("button"),e=u("Request Key"),this.h()},l:function(a){n=d(a,"DIV",{class:!0});var t=f(n);r=d(t,"BUTTON",{class:!0});var c=f(r);e=h(c,"Request Key"),c.forEach(v),t.forEach(v),this.h()},h:function(){p(r,"class","btn btn-primary"),p(n,"class","request-new-key")},m:function(s,o){y(s,n,o),m(n,r),m(r,e),t||(c=E(r,"click",a[10]),t=!0)},p:g,d:function(a){a&&v(n),t=!1,c()}}}function X(a){var n,r,e=a[5]&&Z(a);function t(a,n){return a[6]&&a[6].constructor==TypeError?ea:null!=a[6]?ra:void 0}var c=t(a),s=c&&c(a);return{c:function(){e&&e.c(),n=b(),s&&s.c(),r=k()},l:function(a){e&&e.l(a),n=I(a),s&&s.l(a),r=k()},m:function(a,t){e&&e.m(a,t),y(a,n,t),s&&s.m(a,t),y(a,r,t)},p:function(a,o){a[5]?e?e.p(a,o):((e=Z(a)).c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null),c===(c=t(a))&&s?s.p(a,o):(s&&s.d(1),(s=c&&c(a))&&(s.c(),s.m(r.parentNode,r)))},d:function(a){e&&e.d(a),a&&v(n),s&&s.d(a),a&&v(r)}}}function Z(a){var n,r,e,t,c=!a[0]&&aa(a),s=!a[1]&&!!a[3]&&na();return{c:function(){n=l("div"),r=l("div"),e=b(),c&&c.c(),t=b(),s&&s.c(),this.h()},l:function(a){n=d(a,"DIV",{class:!0,role:!0});var o=f(n);r=d(o,"DIV",{class:!0,role:!0,"aria-hidden":!0}),f(r).forEach(v),e=I(o),c&&c.l(o),t=I(o),s&&s.l(o),o.forEach(v),this.h()},h:function(){p(r,"class","spinner-border"),p(r,"role","status"),p(r,"aria-hidden","true"),p(n,"class","alert alert-primary d-flex align-items-left"),p(n,"role","alert")},m:function(a,o){y(a,n,o),m(n,r),m(n,e),c&&c.m(n,null),m(n,t),s&&s.m(n,null)},p:function(a,r){a[0]?c&&(c.d(1),c=null):c?c.p(a,r):((c=aa(a)).c(),c.m(n,t)),!a[1]&&a[3]?s||((s=na()).c(),s.m(n,null)):s&&(s.d(1),s=null)},d:function(a){a&&v(n),c&&c.d(),s&&s.d()}}}function aa(a){var n,r,e,t,c;return{c:function(){n=l("p"),r=u("Connecting to\n            "),e=l("strong"),t=u(a[2]),c=u("\n            ...")},l:function(s){n=d(s,"P",{});var o=f(n);r=h(o,"Connecting to\n            "),e=d(o,"STRONG",{});var i=f(e);t=h(i,a[2]),i.forEach(v),c=h(o,"\n            ..."),o.forEach(v)},m:function(a,s){y(a,n,s),m(n,r),m(n,e),m(e,t),m(n,c)},p:function(a,n){4&n&&w(t,a[2])},d:function(a){a&&v(n)}}}function na(a){var n,r;return{c:function(){n=l("p"),r=u("Validating key...")},l:function(a){n=d(a,"P",{});var e=f(n);r=h(e,"Validating key..."),e.forEach(v)},m:function(a,e){y(a,n,e),m(n,r)},d:function(a){a&&v(n)}}}function ra(a){var n,r,e,t,c,s,o,i,g,k,S,P,T,C,N,A=a[0]?"while validating your key":"while connecting",$=String(a[6])+"";return{c:function(){n=l("div"),r=l("h4"),e=u("Error "),t=u(A),c=b(),s=l("hr"),o=b(),i=l("code"),g=u($),k=b(),S=l("button"),P=l("span"),T=u("×"),this.h()},l:function(a){n=d(a,"DIV",{class:!0,role:!0});var l=f(n);r=d(l,"H4",{class:!0});var u=f(r);e=h(u,"Error "),t=h(u,A),u.forEach(v),c=I(l),s=d(l,"HR",{}),o=I(l),i=d(l,"CODE",{class:!0});var p=f(i);g=h(p,$),p.forEach(v),k=I(l),S=d(l,"BUTTON",{type:!0,class:!0,"data-dismiss":!0,"aria-label":!0});var y=f(S);P=d(y,"SPAN",{"aria-hidden":!0});var m=f(P);T=h(m,"×"),m.forEach(v),y.forEach(v),l.forEach(v),this.h()},h:function(){p(r,"class","alert-heading"),p(i,"class","mb-0"),p(P,"aria-hidden","true"),p(S,"type","button"),p(S,"class","close"),p(S,"data-dismiss","alert"),p(S,"aria-label","Close"),p(n,"class","alert alert-danger alert-dismissible fade show"),p(n,"role","alert")},m:function(l,u){y(l,n,u),m(n,r),m(r,e),m(r,t),m(n,c),m(n,s),m(n,o),m(n,i),m(i,g),m(n,k),m(n,S),m(S,P),m(P,T),C||(N=E(S,"click",a[17]),C=!0)},p:function(a,n){1&n&&A!==(A=a[0]?"while validating your key":"while connecting")&&w(t,A),64&n&&$!==($=String(a[6])+"")&&w(g,$)},d:function(a){a&&v(n),C=!1,N()}}}function ea(a){var n,r,e,t,c,s,o,i,g,k,S,P,T,C,N,A,$,D,H,x,O,L,V,R,_,U,M,q,B,K,Y,J,j,F,G,W,z,Q,X,Z,aa,na,ra,ea,ta,ca,sa,oa,ia,la,ua,da,fa,ha,va,pa,ya,ma,Ea,ga,ba,ka,Ia,wa,Sa,Pa,Ta,Ca,Na,Aa,$a,Da,Ha,xa,Oa,La,Va,Ra,_a,Ua,Ma,qa,Ba,Ka,Ya,Ja,ja,Fa,Ga,Wa,za,Qa,Xa,Za,an,nn,rn,en,tn,cn,sn,on,ln,un,dn,fn,hn,vn,pn,yn,mn,En,gn,bn,kn,In,wn,Sn,Pn,Tn,Cn,Nn,An,$n,Dn,Hn,xn,On,Ln,Vn,Rn,_n,Un,Mn,qn,Bn,Kn=a[0]?"while validating your key":"while connecting";return{c:function(){n=l("div"),r=l("h4"),e=u("Error "),t=u(Kn),c=b(),s=l("hr"),o=b(),i=l("div"),g=l("div"),k=l("h4"),S=u("Fixes"),P=b(),T=l("p"),C=u("Depending on what the Test Connection box says you can fix the\n              problem in various ways."),N=b(),A=l("div"),$=l("div"),D=l("details"),H=l("summary"),x=l("span"),O=u("Did Not Connect: Potential Security Issue\n                      "),L=l("span"),V=u("Most Likely"),R=b(),_=l("div"),U=l("p"),M=u("To authorize your connection, you'll need to tell your\n                      browser to trust your Hydrus Client's self-signed HTTPS\n                      certificate."),q=b(),B=l("p"),K=u("In the Test Connection box, you'll need to allow the\n                      connection. This varies by browser but you'll press\n                      something like:"),Y=b(),J=l("ol"),j=l("li"),F=l("span"),G=u("Advanced..."),W=b(),z=l("li"),Q=l("span"),X=u("Accept the Risk and Continue"),Z=b(),aa=l("ul"),na=l("li"),ra=l("p"),ea=u("If this button doesn't show up,\n                              "),ta=l("a"),ca=u("click here"),sa=u("\n                              and try again."),oa=b(),ia=l("div"),la=l("details"),ua=l("summary"),da=l("span"),fa=u("Unable to connect"),ha=b(),va=l("div"),pa=l("p"),ya=u("Make sure that you're allowing Hydrus Client through your\n                      OS's firewall."),ma=b(),Ea=l("p"),ga=u("Make sure the address you entered\n                      "),ba=l("code"),ka=u(a[2]),Ia=u("\n                      is correct.\n                      "),wa=l("a"),Sa=u("University of Central Arkansas has a decent guide on\n                        finding your local IP address."),Pa=u("\n                      A good address will use a format similar to:"),Ta=b(),Ca=l("ul"),Na=l("li"),Aa=l("code"),$a=u("https://127.0.0.1:45869"),Da=b(),Ha=l("span"),xa=u("Hydrus Client is directly on the same computer"),Oa=b(),La=l("li"),Va=l("code"),Ra=u("https://192.168.1.150:45869"),_a=b(),Ua=l("ul"),Ma=l("li"),qa=l("span"),Ba=u("Hydrus Client is on your LAN"),Ka=b(),Ya=l("li"),Ja=l("code"),ja=u("https://your-exact-pc-name.local:45869"),Fa=b(),Ga=l("ul"),Wa=l("li"),za=l("span"),Qa=u("Hydrus Client is on your LAN and you are accessing\n                              from an iOS or MacOS device"),Xa=b(),Za=l("li"),an=l("code"),nn=u("https://your-exact-pc-name:45869"),rn=b(),en=l("ul"),tn=l("li"),cn=l("span"),sn=u('Hydrus Client is on your LAN and you are accessing\n                              from a Windows device that is set to "Private\n                              Network"'),on=b(),ln=l("div"),un=l("details"),dn=l("summary"),fn=l("span"),hn=u("The connection was reset"),vn=b(),pn=l("div"),yn=l("p"),mn=u("Your address and port are correct, but you're connecting\n                      to Hydrus over HTTP instead of HTTPS."),En=b(),gn=l("p"),bn=u("Make sure that\n                      "),kn=l("strong"),In=u("use https"),wn=u("\n                      is checked in\n                      "),Sn=l("code"),Pn=u("services / manage services / edit: client api"),Tn=b(),Cn=l("div"),Nn=l("div"),An=l("h5"),$n=l("h5"),Dn=u("Test Connection"),Hn=b(),xn=l("div"),On=l("div"),Ln=l("iframe"),Rn=b(),_n=l("button"),Un=l("span"),Mn=u("×"),this.h()},l:function(l){n=d(l,"DIV",{class:!0,role:!0});var u=f(n);r=d(u,"H4",{class:!0});var p=f(r);e=h(p,"Error "),t=h(p,Kn),p.forEach(v),c=I(u),s=d(u,"HR",{}),o=I(u),i=d(u,"DIV",{class:!0});var y=f(i);g=d(y,"DIV",{class:!0});var m=f(g);k=d(m,"H4",{});var E=f(k);S=h(E,"Fixes"),E.forEach(v),P=I(m),T=d(m,"P",{});var b=f(T);C=h(b,"Depending on what the Test Connection box says you can fix the\n              problem in various ways."),b.forEach(v),N=I(m),A=d(m,"DIV",{class:!0});var w=f(A);$=d(w,"DIV",{class:!0});var Vn=f($);D=d(Vn,"DETAILS",{});var qn=f(D);H=d(qn,"SUMMARY",{class:!0});var Bn=f(H);x=d(Bn,"SPAN",{});var Yn=f(x);O=h(Yn,"Did Not Connect: Potential Security Issue\n                      "),L=d(Yn,"SPAN",{class:!0});var Jn=f(L);V=h(Jn,"Most Likely"),Jn.forEach(v),Yn.forEach(v),Bn.forEach(v),R=I(qn),_=d(qn,"DIV",{class:!0});var jn=f(_);U=d(jn,"P",{});var Fn=f(U);M=h(Fn,"To authorize your connection, you'll need to tell your\n                      browser to trust your Hydrus Client's self-signed HTTPS\n                      certificate."),Fn.forEach(v),q=I(jn),B=d(jn,"P",{});var Gn=f(B);K=h(Gn,"In the Test Connection box, you'll need to allow the\n                      connection. This varies by browser but you'll press\n                      something like:"),Gn.forEach(v),Y=I(jn),J=d(jn,"OL",{});var Wn=f(J);j=d(Wn,"LI",{class:!0});var zn=f(j);F=d(zn,"SPAN",{class:!0});var Qn=f(F);G=h(Qn,"Advanced..."),Qn.forEach(v),zn.forEach(v),W=I(Wn),z=d(Wn,"LI",{class:!0});var Xn=f(z);Q=d(Xn,"SPAN",{class:!0});var Zn=f(Q);X=h(Zn,"Accept the Risk and Continue"),Zn.forEach(v),Z=I(Xn),aa=d(Xn,"UL",{});var ar=f(aa);na=d(ar,"LI",{});var nr=f(na);ra=d(nr,"P",{});var rr=f(ra);ea=h(rr,"If this button doesn't show up,\n                              "),ta=d(rr,"A",{href:!0,target:!0,class:!0});var er=f(ta);ca=h(er,"click here"),er.forEach(v),sa=h(rr,"\n                              and try again."),rr.forEach(v),nr.forEach(v),ar.forEach(v),Xn.forEach(v),Wn.forEach(v),jn.forEach(v),qn.forEach(v),Vn.forEach(v),oa=I(w),ia=d(w,"DIV",{class:!0});var tr=f(ia);la=d(tr,"DETAILS",{});var cr=f(la);ua=d(cr,"SUMMARY",{class:!0});var sr=f(ua);da=d(sr,"SPAN",{});var or=f(da);fa=h(or,"Unable to connect"),or.forEach(v),sr.forEach(v),ha=I(cr),va=d(cr,"DIV",{class:!0});var ir=f(va);pa=d(ir,"P",{});var lr=f(pa);ya=h(lr,"Make sure that you're allowing Hydrus Client through your\n                      OS's firewall."),lr.forEach(v),ma=I(ir),Ea=d(ir,"P",{});var ur=f(Ea);ga=h(ur,"Make sure the address you entered\n                      "),ba=d(ur,"CODE",{class:!0});var dr=f(ba);ka=h(dr,a[2]),dr.forEach(v),Ia=h(ur,"\n                      is correct.\n                      "),wa=d(ur,"A",{target:!0,rel:!0,href:!0});var fr=f(wa);Sa=h(fr,"University of Central Arkansas has a decent guide on\n                        finding your local IP address."),fr.forEach(v),Pa=h(ur,"\n                      A good address will use a format similar to:"),ur.forEach(v),Ta=I(ir),Ca=d(ir,"UL",{});var hr=f(Ca);Na=d(hr,"LI",{});var vr=f(Na);Aa=d(vr,"CODE",{});var pr=f(Aa);$a=h(pr,"https://127.0.0.1:45869"),pr.forEach(v),Da=I(vr),Ha=d(vr,"SPAN",{});var yr=f(Ha);xa=h(yr,"Hydrus Client is directly on the same computer"),yr.forEach(v),vr.forEach(v),Oa=I(hr),La=d(hr,"LI",{});var mr=f(La);Va=d(mr,"CODE",{});var Er=f(Va);Ra=h(Er,"https://192.168.1.150:45869"),Er.forEach(v),_a=I(mr),Ua=d(mr,"UL",{});var gr=f(Ua);Ma=d(gr,"LI",{});var br=f(Ma);qa=d(br,"SPAN",{});var kr=f(qa);Ba=h(kr,"Hydrus Client is on your LAN"),kr.forEach(v),br.forEach(v),gr.forEach(v),mr.forEach(v),Ka=I(hr),Ya=d(hr,"LI",{});var Ir=f(Ya);Ja=d(Ir,"CODE",{});var wr=f(Ja);ja=h(wr,"https://your-exact-pc-name.local:45869"),wr.forEach(v),Fa=I(Ir),Ga=d(Ir,"UL",{});var Sr=f(Ga);Wa=d(Sr,"LI",{});var Pr=f(Wa);za=d(Pr,"SPAN",{});var Tr=f(za);Qa=h(Tr,"Hydrus Client is on your LAN and you are accessing\n                              from an iOS or MacOS device"),Tr.forEach(v),Pr.forEach(v),Sr.forEach(v),Ir.forEach(v),Xa=I(hr),Za=d(hr,"LI",{});var Cr=f(Za);an=d(Cr,"CODE",{});var Nr=f(an);nn=h(Nr,"https://your-exact-pc-name:45869"),Nr.forEach(v),rn=I(Cr),en=d(Cr,"UL",{});var Ar=f(en);tn=d(Ar,"LI",{});var $r=f(tn);cn=d($r,"SPAN",{});var Dr=f(cn);sn=h(Dr,'Hydrus Client is on your LAN and you are accessing\n                              from a Windows device that is set to "Private\n                              Network"'),Dr.forEach(v),$r.forEach(v),Ar.forEach(v),Cr.forEach(v),hr.forEach(v),ir.forEach(v),cr.forEach(v),tr.forEach(v),on=I(w),ln=d(w,"DIV",{class:!0});var Hr=f(ln);un=d(Hr,"DETAILS",{});var xr=f(un);dn=d(xr,"SUMMARY",{class:!0});var Or=f(dn);fn=d(Or,"SPAN",{});var Lr=f(fn);hn=h(Lr,"The connection was reset"),Lr.forEach(v),Or.forEach(v),vn=I(xr),pn=d(xr,"DIV",{class:!0});var Vr=f(pn);yn=d(Vr,"P",{});var Rr=f(yn);mn=h(Rr,"Your address and port are correct, but you're connecting\n                      to Hydrus over HTTP instead of HTTPS."),Rr.forEach(v),En=I(Vr),gn=d(Vr,"P",{});var _r=f(gn);bn=h(_r,"Make sure that\n                      "),kn=d(_r,"STRONG",{});var Ur=f(kn);In=h(Ur,"use https"),Ur.forEach(v),wn=h(_r,"\n                      is checked in\n                      "),Sn=d(_r,"CODE",{});var Mr=f(Sn);Pn=h(Mr,"services / manage services / edit: client api"),Mr.forEach(v),_r.forEach(v),Vr.forEach(v),xr.forEach(v),Hr.forEach(v),w.forEach(v),m.forEach(v),Tn=I(y),Cn=d(y,"DIV",{class:!0});var qr=f(Cn);Nn=d(qr,"DIV",{class:!0});var Br=f(Nn);An=d(Br,"H5",{class:!0});var Kr=f(An);$n=d(Kr,"H5",{});var Yr=f($n);Dn=h(Yr,"Test Connection"),Yr.forEach(v),Kr.forEach(v),Hn=I(Br),xn=d(Br,"DIV",{class:!0});var Jr=f(xn);On=d(Jr,"DIV",{class:!0});var jr=f(On);Ln=d(jr,"IFRAME",{src:!0,title:!0}),f(Ln).forEach(v),jr.forEach(v),Jr.forEach(v),Br.forEach(v),qr.forEach(v),y.forEach(v),Rn=I(u),_n=d(u,"BUTTON",{type:!0,class:!0,"data-dismiss":!0,"aria-label":!0});var Fr=f(_n);Un=d(Fr,"SPAN",{"aria-hidden":!0});var Gr=f(Un);Mn=h(Gr,"×"),Gr.forEach(v),Fr.forEach(v),u.forEach(v),this.h()},h:function(){p(r,"class","alert-heading"),p(L,"class","badge bg-secondary"),p(H,"class","card-header"),p(F,"class","btn btn-secondary btn-sm disabled"),p(j,"class","m-2"),p(Q,"class","btn btn-secondary btn-sm disabled"),p(ta,"href",a[2]),p(ta,"target","_blank"),p(ta,"class","btn btn-primary"),p(z,"class","m-2"),p(_,"class","card-body"),p($,"class","card"),p(ua,"class","card-header"),p(ba,"class","badge bg-secondary"),p(wa,"target","_blank"),p(wa,"rel","noreferrer noopener"),p(wa,"href","https://uca.edu/it/knowledgebase-legacy/finding-your-ip-address-lan/"),p(va,"class","card-body"),p(ia,"class","card"),p(dn,"class","card-header"),p(pn,"class","card-body"),p(ln,"class","card"),p(A,"class","accordian"),p(g,"class","col col-12 col-md-7 col-lg-8"),p(An,"class","card-header"),Ln.src!==(Vn=a[2])&&p(Ln,"src",Vn),p(Ln,"title","Invalid HTTPS Fix"),p(On,"class","embed-responsive embed-responsive-1by1 svelte-1uy18mz"),p(xn,"class","card-body"),p(Nn,"class","card"),p(Cn,"class","col col-12 col-md-5 col-lg-4"),p(i,"class","row"),p(Un,"aria-hidden","true"),p(_n,"type","button"),p(_n,"class","close"),p(_n,"data-dismiss","alert"),p(_n,"aria-label","Close"),p(n,"class","alert alert-danger alert-dismissible fade show"),p(n,"role","alert")},m:function(l,u){y(l,n,u),m(n,r),m(r,e),m(r,t),m(n,c),m(n,s),m(n,o),m(n,i),m(i,g),m(g,k),m(k,S),m(g,P),m(g,T),m(T,C),m(g,N),m(g,A),m(A,$),m($,D),m(D,H),m(H,x),m(x,O),m(x,L),m(L,V),m(D,R),m(D,_),m(_,U),m(U,M),m(_,q),m(_,B),m(B,K),m(_,Y),m(_,J),m(J,j),m(j,F),m(F,G),m(J,W),m(J,z),m(z,Q),m(Q,X),m(z,Z),m(z,aa),m(aa,na),m(na,ra),m(ra,ea),m(ra,ta),m(ta,ca),m(ra,sa),m(A,oa),m(A,ia),m(ia,la),m(la,ua),m(ua,da),m(da,fa),m(la,ha),m(la,va),m(va,pa),m(pa,ya),m(va,ma),m(va,Ea),m(Ea,ga),m(Ea,ba),m(ba,ka),m(Ea,Ia),m(Ea,wa),m(wa,Sa),m(Ea,Pa),m(va,Ta),m(va,Ca),m(Ca,Na),m(Na,Aa),m(Aa,$a),m(Na,Da),m(Na,Ha),m(Ha,xa),m(Ca,Oa),m(Ca,La),m(La,Va),m(Va,Ra),m(La,_a),m(La,Ua),m(Ua,Ma),m(Ma,qa),m(qa,Ba),m(Ca,Ka),m(Ca,Ya),m(Ya,Ja),m(Ja,ja),m(Ya,Fa),m(Ya,Ga),m(Ga,Wa),m(Wa,za),m(za,Qa),m(Ca,Xa),m(Ca,Za),m(Za,an),m(an,nn),m(Za,rn),m(Za,en),m(en,tn),m(tn,cn),m(cn,sn),m(A,on),m(A,ln),m(ln,un),m(un,dn),m(dn,fn),m(fn,hn),m(un,vn),m(un,pn),m(pn,yn),m(yn,mn),m(pn,En),m(pn,gn),m(gn,bn),m(gn,kn),m(kn,In),m(gn,wn),m(gn,Sn),m(Sn,Pn),m(i,Tn),m(i,Cn),m(Cn,Nn),m(Nn,An),m(An,$n),m($n,Dn),m(Nn,Hn),m(Nn,xn),m(xn,On),m(On,Ln),m(n,Rn),m(n,_n),m(_n,Un),m(Un,Mn),qn||(Bn=E(_n,"click",a[16]),qn=!0)},p:function(a,n){1&n&&Kn!==(Kn=a[0]?"while validating your key":"while connecting")&&w(t,Kn),4&n&&p(ta,"href",a[2]),4&n&&w(ka,a[2]),4&n&&Ln.src!==(Vn=a[2])&&p(Ln,"src",Vn)},d:function(a){a&&v(n),qn=!1,Bn()}}}function ta(a){var n,r,e,t,c,s,o,i,E=a[7]?"while requesting a new key":"",g=a[8]?"while validating your key":"",k=a[7]&&ca(),S=a[8]&&sa(a);return{c:function(){n=l("div"),r=l("h4"),e=u("Error "),t=u(E),c=b(),s=u(g),o=b(),k&&k.c(),i=b(),S&&S.c(),this.h()},l:function(a){n=d(a,"DIV",{class:!0,role:!0});var l=f(n);r=d(l,"H4",{class:!0});var u=f(r);e=h(u,"Error "),t=h(u,E),c=I(u),s=h(u,g),u.forEach(v),o=I(l),k&&k.l(l),i=I(l),S&&S.l(l),l.forEach(v),this.h()},h:function(){p(r,"class","alert-heading"),p(n,"class","alert alert-danger"),p(n,"role","alert")},m:function(a,l){y(a,n,l),m(n,r),m(r,e),m(r,t),m(r,c),m(r,s),m(n,o),k&&k.m(n,null),m(n,i),S&&S.m(n,null)},p:function(a,r){128&r&&E!==(E=a[7]?"while requesting a new key":"")&&w(t,E),256&r&&g!==(g=a[8]?"while validating your key":"")&&w(s,g),a[7]?k||((k=ca()).c(),k.m(n,i)):k&&(k.d(1),k=null),a[8]?S?S.p(a,r):((S=sa(a)).c(),S.m(n,null)):S&&(S.d(1),S=null)},d:function(a){a&&v(n),k&&k.d(),S&&S.d()}}}function ca(a){var n,r,e,t,c,s,o;return{c:function(){n=l("p"),r=u("To request a new key, open Hydrus Client and go to\n          "),e=l("code"),t=u("services / review services / local / client api"),c=u("\n          and press\n          "),s=l("code"),o=u("add / from api request")},l:function(a){n=d(a,"P",{});var i=f(n);r=h(i,"To request a new key, open Hydrus Client and go to\n          "),e=d(i,"CODE",{});var l=f(e);t=h(l,"services / review services / local / client api"),l.forEach(v),c=h(i,"\n          and press\n          "),s=d(i,"CODE",{});var u=f(s);o=h(u,"add / from api request"),u.forEach(v),i.forEach(v)},m:function(a,i){y(a,n,i),m(n,r),m(n,e),m(e,t),m(n,c),m(n,s),m(s,o)},d:function(a){a&&v(n)}}}function sa(a){var n,r,e,t,c,s,o,i,k,w,S,P;return{c:function(){n=l("p"),r=u("If you just created a key, make sure to\n          "),e=l("strong"),t=u("apply"),c=u("\n          your changes before validating again."),s=b(),o=l("p"),i=u("If you need a new key, press\n          "),k=l("button"),w=u("Request Key"),this.h()},l:function(a){n=d(a,"P",{});var l=f(n);r=h(l,"If you just created a key, make sure to\n          "),e=d(l,"STRONG",{});var u=f(e);t=h(u,"apply"),u.forEach(v),c=h(l,"\n          your changes before validating again."),l.forEach(v),s=I(a),o=d(a,"P",{});var p=f(o);i=h(p,"If you need a new key, press\n          "),k=d(p,"BUTTON",{class:!0});var y=f(k);w=h(y,"Request Key"),y.forEach(v),p.forEach(v),this.h()},h:function(){p(k,"class","btn btn-primary btn-sm")},m:function(l,u){y(l,n,u),m(n,r),m(n,e),m(e,t),m(n,c),y(l,s,u),y(l,o,u),m(o,i),m(o,k),m(k,w),S||(P=E(k,"click",a[10]),S=!0)},p:g,d:function(a){a&&v(n),a&&v(s),a&&v(o),S=!1,P()}}}function oa(a){var n,r,e,t,c,s,o,i,k,w,A,$,D,H,x,O,L,V,R,_,U,M,q,B,K,Y,J,j,F,G,W,z=!a[4]&&Q(a),Z=!a[0]&&X(a),aa=(a[7]||a[8])&&ta(a);return{c:function(){n=l("section"),r=l("form"),e=l("label"),t=u("Your Hydrus Client API URL"),c=b(),s=l("div"),o=l("input"),i=b(),k=l("button"),w=u("Connect"),A=b(),$=l("div"),D=u("The IP address or domain and port of your Hydrus Client"),H=b(),x=l("label"),O=u("Your Hydrus Client API Key"),L=b(),V=l("div"),z&&z.c(),R=b(),_=l("input"),U=b(),M=l("button"),q=u("Validate Key"),K=b(),Y=l("div"),J=u("The generated API key from your Hydrus Client"),j=b(),Z&&Z.c(),F=b(),aa&&aa.c(),this.h()},l:function(a){n=d(a,"SECTION",{class:!0});var l=f(n);r=d(l,"FORM",{id:!0});var u=f(r);e=d(u,"LABEL",{for:!0,class:!0});var p=f(e);t=h(p,"Your Hydrus Client API URL"),p.forEach(v),c=I(u),s=d(u,"DIV",{class:!0});var y=f(s);o=d(y,"INPUT",{id:!0,class:!0,type:!0,"aria-describedby":!0}),i=I(y),k=d(y,"BUTTON",{class:!0,type:!0,disabled:!0});var m=f(k);w=h(m,"Connect"),m.forEach(v),y.forEach(v),A=I(u),$=d(u,"DIV",{id:!0,class:!0});var E=f($);D=h(E,"The IP address or domain and port of your Hydrus Client"),E.forEach(v),H=I(u),x=d(u,"LABEL",{for:!0,class:!0});var g=f(x);O=h(g,"Your Hydrus Client API Key"),g.forEach(v),L=I(u),V=d(u,"DIV",{class:!0});var b=f(V);z&&z.l(b),R=I(b),_=d(b,"INPUT",{id:!0,class:!0,type:!0,"aria-describedby":!0}),U=I(b),M=d(b,"BUTTON",{class:!0,disabled:!0,type:!0});var S=f(M);q=h(S,"Validate Key"),S.forEach(v),b.forEach(v),K=I(u),Y=d(u,"DIV",{id:!0,class:!0});var P=f(Y);J=h(P,"The generated API key from your Hydrus Client"),P.forEach(v),u.forEach(v),j=I(l),Z&&Z.l(l),F=I(l),aa&&aa.l(l),l.forEach(v),this.h()},h:function(){p(e,"for","url-input"),p(e,"class","form-label"),p(o,"id","url-input"),p(o,"class","form-control"),p(o,"type","url"),p(o,"aria-describedby","url-help"),S(o,"is-valid",a[0]),p(k,"class","btn btn-primary"),p(k,"type","submit"),k.disabled=a[5],S(k,"disabled",a[5]),p(s,"class","input-group"),p($,"id","url-help"),p($,"class","form-text"),p(x,"for","key-input"),p(x,"class","form-label"),p(_,"id","key-input"),p(_,"class","form-control"),p(_,"type","password"),p(_,"aria-describedby","key-help"),S(_,"is-valid",a[1]),p(M,"class","btn"),M.disabled=B=!a[4],p(M,"type","submit"),S(M,"btn-secondary",!a[4]),S(M,"btn-primary",!!a[4]),p(V,"class","input-group"),p(Y,"id","key-help"),p(Y,"class","form-text"),p(r,"id","connect-address input-group"),p(n,"class","container")},m:function(l,u){y(l,n,u),m(n,r),m(r,e),m(e,t),m(r,c),m(r,s),m(s,o),P(o,a[2]),m(s,i),m(s,k),m(k,w),m(r,A),m(r,$),m($,D),m(r,H),m(r,x),m(x,O),m(r,L),m(r,V),z&&z.m(V,null),m(V,R),m(V,_),P(_,a[4]),m(V,U),m(V,M),m(M,q),m(r,K),m(r,Y),m(Y,J),m(n,j),Z&&Z.m(n,null),m(n,F),aa&&aa.m(n,null),G||(W=[E(o,"input",a[12]),E(k,"click",a[9]),E(_,"change",a[13]),E(_,"input",a[14]),E(r,"submit",T(a[15]))],G=!0)},p:function(a,r){var e=C(r,1)[0];4&e&&P(o,a[2]),1&e&&S(o,"is-valid",a[0]),32&e&&(k.disabled=a[5]),32&e&&S(k,"disabled",a[5]),a[4]?z&&(z.d(1),z=null):z?z.p(a,e):((z=Q(a)).c(),z.m(V,R)),16&e&&_.value!==a[4]&&P(_,a[4]),2&e&&S(_,"is-valid",a[1]),16&e&&B!==(B=!a[4])&&(M.disabled=B),16&e&&S(M,"btn-secondary",!a[4]),16&e&&S(M,"btn-primary",!!a[4]),a[0]?Z&&(Z.d(1),Z=null):Z?Z.p(a,e):((Z=X(a)).c(),Z.m(n,F)),a[7]||a[8]?aa?aa.p(a,e):((aa=ta(a)).c(),aa.m(n,null)):aa&&(aa.d(1),aa=null)},i:g,o:g,d:function(a){a&&v(n),z&&z.d(),Z&&Z.d(),aa&&aa.d(),G=!1,N(W)}}}function ia(a,n,r){var e="http://127.0.0.1:45869",t="",c="",s=!1,o=void 0,i=n.address_validated,l=void 0!==i&&i,u=n.key_validated,d=void 0!==u&&u,f=!1,h=!1;function v(){return p.apply(this,arguments)}function p(){return(p=$(D.mark((function a(){var n,c,i;return D.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!s){a.next=2;break}return a.abrupt("return");case 2:return r(6,o=""),r(5,s=!0),n=Y(e),console.log(n.address),a.prev=6,a.next=9,n.api_version();case 9:if(c=a.sent,i=c.version,console.log("Connected with API version: ".concat(i)),localStorage.setItem("address",JSON.stringify(e)),r(0,l=!0),!t){a.next=17;break}return a.next=17,E();case 17:a.next=26;break;case 19:a.prev=19,a.t0=a.catch(6),console.error(a.t0),G.set(a.t0),W.set(!1),r(6,o=a.t0),r(0,l=!1);case 26:r(5,s=!1);case 27:case"end":return a.stop()}}),a,null,[[6,19]])})))).apply(this,arguments)}function y(){return m.apply(this,arguments)}function m(){return(m=$(D.mark((function a(){var n,e,s;return D.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=Y(),r(6,o=""),r(7,f=!1),a.prev=3,a.next=6,n.request_new_permissions("miia-web",J);case 6:e=a.sent,s=e.access_key,localStorage.setItem("access_key",JSON.stringify(t)),r(3,t=s),r(4,c=t),r(8,h=!1),a.next=19;break;case 14:a.prev=14,a.t0=a.catch(3),console.error(a.t0),r(6,o=a.t0),r(7,f=!0);case 19:case"end":return a.stop()}}),a,null,[[3,14]])})))).apply(this,arguments)}function E(){return g.apply(this,arguments)}function g(){return(g=$(D.mark((function a(){var n,e,c;return D.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(5,s=!0),r(8,h=!1),r(7,f=!1),(n=Y()).access_key=t,r(6,o=""),a.prev=6,a.next=9,n.verify_access_key(t);case 9:e=a.sent,c=e.human_description,localStorage.setItem("access_key",JSON.stringify(t)),console.log(c),r(1,d=!0),W.set(!0),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(6),console.error(a.t0),r(6,o=a.t0),r(1,d=!1),r(8,h=!0);case 23:r(5,s=!1);case 24:case"end":return a.stop()}}),a,null,[[6,17]])})))).apply(this,arguments)}A((function(){var a=localStorage.getItem("address");a&&r(2,e=JSON.parse(a));var n=localStorage.getItem("access_key");n&&(r(3,t=JSON.parse(n)),r(4,c=JSON.parse(n))),$(D.mark((function n(){return D.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=10;break}return n.prev=1,n.next=4,v();case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),console.error(n.t0),r(6,o=n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()}));return a.$set=function(a){"address_validated"in a&&r(0,l=a.address_validated),"key_validated"in a&&r(1,d=a.key_validated)},[l,d,e,t,c,s,o,f,h,v,y,E,function(){e=this.value,r(2,e)},function(){r(1,d=!1)},function(){c=this.value,r(4,c)},function(){l?d||(c?(r(3,t=c),E()):y()):v()},function(){r(6,o=void 0)},function(){r(6,o=void 0)}]}var la=function(a){n(e,i);var r=z(e);function e(a){var n;return t(this,e),n=r.call(this),c(o(n),a,ia,oa,s,{address_validated:0,key_validated:1}),n}return e}();function ua(a){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var t,c=r(a);if(n){var s=r(this).constructor;t=Reflect.construct(c,arguments,s)}else t=c.apply(this,arguments);return e(this,t)}}function da(a){var n,r;return{c:function(){n=l("span"),r=u("Not Connected"),this.h()},l:function(a){n=d(a,"SPAN",{class:!0});var e=f(n);r=h(e,"Not Connected"),e.forEach(v),this.h()},h:function(){p(n,"class","badge bg-danger")},m:function(a,e){y(a,n,e),m(n,r)},d:function(a){a&&v(n)}}}function fa(a){var n,r;return{c:function(){n=l("span"),r=u("Connected"),this.h()},l:function(a){n=d(a,"SPAN",{class:!0});var e=f(n);r=h(e,"Connected"),e.forEach(v),this.h()},h:function(){p(n,"class","badge bg-secondary")},m:function(a,e){y(a,n,e),m(n,r)},d:function(a){a&&v(n)}}}function ha(a){var n,r;return{c:function(){n=l("span"),r=u("Not Authenticated"),this.h()},l:function(a){n=d(a,"SPAN",{class:!0});var e=f(n);r=h(e,"Not Authenticated"),e.forEach(v),this.h()},h:function(){p(n,"class","badge bg-danger")},m:function(a,e){y(a,n,e),m(n,r)},d:function(a){a&&v(n)}}}function va(a){var n,r;return{c:function(){n=l("span"),r=u("Authenticated"),this.h()},l:function(a){n=d(a,"SPAN",{class:!0});var e=f(n);r=h(e,"Authenticated"),e.forEach(v),this.h()},h:function(){p(n,"class","badge bg-secondary")},m:function(a,e){y(a,n,e),m(n,r)},d:function(a){a&&v(n)}}}function pa(a){var n,r,e,t,c;function s(n){a[4].call(null,n)}function o(n){a[5].call(null,n)}var i={};return void 0!==a[0]&&(i.address_validated=a[0]),void 0!==a[1]&&(i.key_validated=a[1]),r=new la({props:i}),B.push((function(){return K(r,"address_validated",s)})),B.push((function(){return K(r,"key_validated",o)})),{c:function(){n=l("div"),H(r.$$.fragment),this.h()},l:function(a){n=d(a,"DIV",{class:!0});var e=f(n);O(r.$$.fragment,e),e.forEach(v),this.h()},h:function(){p(n,"class","setup svelte-1q0y9rk")},m:function(a,e){y(a,n,e),L(r,n,null),c=!0},p:function(a,n){var c={};!e&&1&n&&(e=!0,c.address_validated=a[0],U((function(){return e=!1}))),!t&&2&n&&(t=!0,c.key_validated=a[1],U((function(){return t=!1}))),r.$set(c)},i:function(a){c||(V(r.$$.fragment,a),c=!0)},o:function(a){R(r.$$.fragment,a),c=!1},d:function(a){a&&v(n),_(r)}}}function ya(a){var n,r,e,t,c,s,o,i,g,k,w,S,P,T,C,N,A,$;function D(a,n){return a[0]?fa:da}var H=D(a),x=H(a);function O(a,n){return a[1]?va:ha}var L=O(a),_=L(a),U=a[2]&&pa(a);return{c:function(){n=l("div"),r=l("h1"),e=u("Miia Web!"),t=b(),c=l("p"),s=u("a web client for Hydrus"),o=b(),i=l("div"),g=l("div"),k=l("button"),w=l("span"),S=u("Hydrus Setup"),P=b(),x.c(),T=b(),_.c(),C=b(),U&&U.c(),this.h()},l:function(a){n=d(a,"DIV",{class:!0});var l=f(n);r=d(l,"H1",{});var u=f(r);e=h(u,"Miia Web!"),u.forEach(v),t=I(l),c=d(l,"P",{});var p=f(c);s=h(p,"a web client for Hydrus"),p.forEach(v),l.forEach(v),o=I(a),i=d(a,"DIV",{class:!0});var y=f(i);g=d(y,"DIV",{class:!0});var m=f(g);k=d(m,"BUTTON",{class:!0});var E=f(k);w=d(E,"SPAN",{});var b=f(w);S=h(b,"Hydrus Setup"),b.forEach(v),P=I(E),x.l(E),T=I(E),_.l(E),E.forEach(v),C=I(m),U&&U.l(m),m.forEach(v),y.forEach(v),this.h()},h:function(){p(n,"class","col col-12"),p(k,"class","card-header text-left svelte-1q0y9rk"),p(g,"class","card"),p(i,"class","col col-12")},m:function(l,u){y(l,n,u),m(n,r),m(r,e),m(n,t),m(n,c),m(c,s),y(l,o,u),y(l,i,u),m(i,g),m(g,k),m(k,w),m(w,S),m(k,P),x.m(k,null),m(k,T),_.m(k,null),m(g,C),U&&U.m(g,null),N=!0,A||($=E(k,"click",a[3]),A=!0)},p:function(a,n){H!==(H=D(a))&&(x.d(1),(x=H(a))&&(x.c(),x.m(k,T))),L!==(L=O(a))&&(_.d(1),(_=L(a))&&(_.c(),_.m(k,null))),a[2]?U?(U.p(a,n),4&n&&V(U,1)):((U=pa(a)).c(),V(U,1),U.m(g,null)):U&&(M(),R(U,1,1,(function(){U=null})),q())},i:function(a){N||(V(U),N=!0)},o:function(a){R(U),N=!1},d:function(a){a&&v(n),a&&v(o),a&&v(i),x.d(),_.d(),U&&U.d(),A=!1,$()}}}function ma(a){var n,r,e,t,c,s;return c=new F({}),{c:function(){n=l("div"),r=l("h2"),e=u("New Search"),t=b(),H(c.$$.fragment),this.h()},l:function(a){n=d(a,"DIV",{class:!0});var s=f(n);r=d(s,"H2",{});var o=f(r);e=h(o,"New Search"),o.forEach(v),t=I(s),O(c.$$.fragment,s),s.forEach(v),this.h()},h:function(){p(n,"class","col col-12")},m:function(a,o){y(a,n,o),m(n,r),m(r,e),m(n,t),L(c,n,null),s=!0},i:function(a){s||(V(c.$$.fragment,a),s=!0)},o:function(a){R(c.$$.fragment,a),s=!1},d:function(a){a&&v(n),_(c)}}}function Ea(a){var n,r,e,t,c;return r=new j({props:{$$slots:{default:[ya]},$$scope:{ctx:a}}}),t=new j({props:{$$slots:{default:[ma]},$$scope:{ctx:a}}}),{c:function(){n=b(),H(r.$$.fragment),e=b(),H(t.$$.fragment),this.h()},l:function(a){x('[data-svelte="svelte-1nj90w7"]',document.head).forEach(v),n=I(a),O(r.$$.fragment,a),e=I(a),O(t.$$.fragment,a),this.h()},h:function(){document.title="Miia Web"},m:function(a,s){y(a,n,s),L(r,a,s),y(a,e,s),L(t,a,s),c=!0},p:function(a,n){var e=C(n,1)[0],c={};135&e&&(c.$$scope={dirty:e,ctx:a}),r.$set(c);var s={};128&e&&(s.$$scope={dirty:e,ctx:a}),t.$set(s)},i:function(a){c||(V(r.$$.fragment,a),V(t.$$.fragment,a),c=!0)},o:function(a){R(r.$$.fragment,a),R(t.$$.fragment,a),c=!1},d:function(a){a&&v(n),_(r,a),a&&v(e),_(t,a)}}}function ga(a,n,r){var e=!1,t=!1,c=!1;return a.$$.update=function(){3&a.$$.dirty&&r(2,c=!e||!t)},[e,t,c,function(){r(2,c=!c)},function(a){r(0,e=a)},function(a){r(1,t=a)}]}var ba=function(a){n(e,i);var r=ua(e);function e(a){var n;return t(this,e),n=r.call(this),c(o(n),a,ga,Ea,s,{}),n}return e}();export default ba;