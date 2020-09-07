import{w as a,S as e,i as r,s,e as t,t as c,c as n,a as o,b as l,d as i,f as d,g as h,h as u,l as f,n as v,j as y,k as p,m,o as E,p as g,q as b,r as I,u as k,v as w,x as S,y as T,z as C,A as P,B as N,C as A,D as $,E as H,F as D,G as O,H as L,I as V}from"./client.5382c41e.js";import{G as _,r as x,P as U,T as M}from"./TagSearch.798e19d6.js";const R=a("No Error"),q=a(!1);function B(a){let e,r,s,y,p;return{c(){e=t("div"),r=t("button"),s=c("Request Key"),this.h()},l(a){e=n(a,"DIV",{class:!0});var t=o(e);r=n(t,"BUTTON",{class:!0});var c=o(r);s=l(c,"Request Key"),c.forEach(i),t.forEach(i),this.h()},h(){d(r,"class","btn btn-primary"),d(e,"class","request-new-key")},m(t,c){h(t,e,c),u(e,r),u(r,s),y||(p=f(r,"click",a[10]),y=!0)},p:v,d(a){a&&i(e),y=!1,p()}}}function Y(a){let e,r,s=a[5]&&K(a);function t(a,e){return a[6]&&a[6].constructor==TypeError?G:null!=a[6]?J:void 0}let c=t(a),n=c&&c(a);return{c(){s&&s.c(),e=y(),n&&n.c(),r=p()},l(a){s&&s.l(a),e=m(a),n&&n.l(a),r=p()},m(a,t){s&&s.m(a,t),h(a,e,t),n&&n.m(a,t),h(a,r,t)},p(a,o){a[5]?s?s.p(a,o):(s=K(a),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),c===(c=t(a))&&n?n.p(a,o):(n&&n.d(1),n=c&&c(a),n&&(n.c(),n.m(r.parentNode,r)))},d(a){s&&s.d(a),a&&i(e),n&&n.d(a),a&&i(r)}}}function K(a){let e,r,s,c,l=!a[0]&&j(a),f=!a[1]&&!!a[3]&&F();return{c(){e=t("div"),r=t("div"),s=y(),l&&l.c(),c=y(),f&&f.c(),this.h()},l(a){e=n(a,"DIV",{class:!0,role:!0});var t=o(e);r=n(t,"DIV",{class:!0,role:!0,"aria-hidden":!0}),o(r).forEach(i),s=m(t),l&&l.l(t),c=m(t),f&&f.l(t),t.forEach(i),this.h()},h(){d(r,"class","spinner-border"),d(r,"role","status"),d(r,"aria-hidden","true"),d(e,"class","alert alert-primary d-flex align-items-left"),d(e,"role","alert")},m(a,t){h(a,e,t),u(e,r),u(e,s),l&&l.m(e,null),u(e,c),f&&f.m(e,null)},p(a,r){a[0]?l&&(l.d(1),l=null):l?l.p(a,r):(l=j(a),l.c(),l.m(e,c)),!a[1]&&a[3]?f||(f=F(),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(a){a&&i(e),l&&l.d(),f&&f.d()}}}function j(a){let e,r,s,d,f;return{c(){e=t("p"),r=c("Connecting to\n            "),s=t("strong"),d=c(a[2]),f=c("\n            ...")},l(t){e=n(t,"P",{});var c=o(e);r=l(c,"Connecting to\n            "),s=n(c,"STRONG",{});var h=o(s);d=l(h,a[2]),h.forEach(i),f=l(c,"\n            ..."),c.forEach(i)},m(a,t){h(a,e,t),u(e,r),u(e,s),u(s,d),u(e,f)},p(a,e){4&e&&E(d,a[2])},d(a){a&&i(e)}}}function F(a){let e,r;return{c(){e=t("p"),r=c("Validating key...")},l(a){e=n(a,"P",{});var s=o(e);r=l(s,"Validating key..."),s.forEach(i)},m(a,s){h(a,e,s),u(e,r)},d(a){a&&i(e)}}}function J(a){let e,r,s,v,p,g,b,I,k,w,S,T,C,P,N,A=a[0]?"while validating your key":"while connecting",$=String(a[6])+"";return{c(){e=t("div"),r=t("h4"),s=c("Error "),v=c(A),p=y(),g=t("hr"),b=y(),I=t("code"),k=c($),w=y(),S=t("button"),T=t("span"),C=c("×"),this.h()},l(a){e=n(a,"DIV",{class:!0,role:!0});var t=o(e);r=n(t,"H4",{class:!0});var c=o(r);s=l(c,"Error "),v=l(c,A),c.forEach(i),p=m(t),g=n(t,"HR",{}),b=m(t),I=n(t,"CODE",{class:!0});var d=o(I);k=l(d,$),d.forEach(i),w=m(t),S=n(t,"BUTTON",{type:!0,class:!0,"data-dismiss":!0,"aria-label":!0});var h=o(S);T=n(h,"SPAN",{"aria-hidden":!0});var u=o(T);C=l(u,"×"),u.forEach(i),h.forEach(i),t.forEach(i),this.h()},h(){d(r,"class","alert-heading"),d(I,"class","mb-0"),d(T,"aria-hidden","true"),d(S,"type","button"),d(S,"class","close"),d(S,"data-dismiss","alert"),d(S,"aria-label","Close"),d(e,"class","alert alert-danger alert-dismissible fade show"),d(e,"role","alert")},m(t,c){h(t,e,c),u(e,r),u(r,s),u(r,v),u(e,p),u(e,g),u(e,b),u(e,I),u(I,k),u(e,w),u(e,S),u(S,T),u(T,C),P||(N=f(S,"click",a[17]),P=!0)},p(a,e){1&e&&A!==(A=a[0]?"while validating your key":"while connecting")&&E(v,A),64&e&&$!==($=String(a[6])+"")&&E(k,$)},d(a){a&&i(e),P=!1,N()}}}function G(a){let e,r,s,v,p,g,b,I,k,w,S,T,C,P,N,A,$,H,D,O,L,V,_,x,U,M,R,q,B,Y,K,j,F,J,G,W,z,Q,X,Z,aa,ea,ra,sa,ta,ca,na,oa,la,ia,da,ha,ua,fa,va,ya,pa,ma,Ea,ga,ba,Ia,ka,wa,Sa,Ta,Ca,Pa,Na,Aa,$a,Ha,Da,Oa,La,Va,_a,xa,Ua,Ma,Ra,qa,Ba,Ya,Ka,ja,Fa,Ja,Ga,Wa,za,Qa,Xa,Za,ae,ee,re,se,te,ce,ne,oe,le,ie,de,he,ue,fe,ve,ye,pe,me,Ee,ge,be,Ie,ke,we,Se,Te,Ce,Pe,Ne,Ae,$e,He,De,Oe,Le,Ve,_e,xe,Ue,Me,Re,qe,Be=a[0]?"while validating your key":"while connecting";return{c(){e=t("div"),r=t("h4"),s=c("Error "),v=c(Be),p=y(),g=t("hr"),b=y(),I=t("div"),k=t("div"),w=t("h4"),S=c("Fixes"),T=y(),C=t("p"),P=c("Depending on what the Test Connection box says you can fix the\n              problem in various ways."),N=y(),A=t("div"),$=t("div"),H=t("details"),D=t("summary"),O=t("span"),L=c("Did Not Connect: Potential Security Issue\n                      "),V=t("span"),_=c("Most Likely"),x=y(),U=t("div"),M=t("p"),R=c("To authorize your connection, you'll need to tell your\n                      browser to trust your Hydrus Client's self-signed HTTPS\n                      certificate."),q=y(),B=t("p"),Y=c("In the Test Connection box, you'll need to allow the\n                      connection. This varies by browser but you'll press\n                      something like:"),K=y(),j=t("ol"),F=t("li"),J=t("span"),G=c("Advanced..."),W=y(),z=t("li"),Q=t("span"),X=c("Accept the Risk and Continue"),Z=y(),aa=t("ul"),ea=t("li"),ra=t("p"),sa=c("If this button doesn't show up,\n                              "),ta=t("a"),ca=c("click here"),na=c("\n                              and try again."),oa=y(),la=t("div"),ia=t("details"),da=t("summary"),ha=t("span"),ua=c("Unable to connect"),fa=y(),va=t("div"),ya=t("p"),pa=c("Make sure that you're allowing Hydrus Client through your\n                      OS's firewall."),ma=y(),Ea=t("p"),ga=c("Make sure the address you entered\n                      "),ba=t("code"),Ia=c(a[2]),ka=c("\n                      is correct.\n                      "),wa=t("a"),Sa=c("University of Central Arkansas has a decent guide on\n                        finding your local IP address."),Ta=c("\n                      A good address will use a format similar to:"),Ca=y(),Pa=t("ul"),Na=t("li"),Aa=t("code"),$a=c("https://127.0.0.1:45869"),Ha=y(),Da=t("span"),Oa=c("Hydrus Client is directly on the same computer"),La=y(),Va=t("li"),_a=t("code"),xa=c("https://192.168.1.150:45869"),Ua=y(),Ma=t("ul"),Ra=t("li"),qa=t("span"),Ba=c("Hydrus Client is on your LAN"),Ya=y(),Ka=t("li"),ja=t("code"),Fa=c("https://your-exact-pc-name.local:45869"),Ja=y(),Ga=t("ul"),Wa=t("li"),za=t("span"),Qa=c("Hydrus Client is on your LAN and you are accessing\n                              from an iOS or MacOS device"),Xa=y(),Za=t("li"),ae=t("code"),ee=c("https://your-exact-pc-name:45869"),re=y(),se=t("ul"),te=t("li"),ce=t("span"),ne=c('Hydrus Client is on your LAN and you are accessing\n                              from a Windows device that is set to "Private\n                              Network"'),oe=y(),le=t("div"),ie=t("details"),de=t("summary"),he=t("span"),ue=c("The connection was reset"),fe=y(),ve=t("div"),ye=t("p"),pe=c("Your address and port are correct, but you're connecting\n                      to Hydrus over HTTP instead of HTTPS."),me=y(),Ee=t("p"),ge=c("Make sure that\n                      "),be=t("strong"),Ie=c("use https"),ke=c("\n                      is checked in\n                      "),we=t("code"),Se=c("services / manage services / edit: client api"),Te=y(),Ce=t("div"),Pe=t("div"),Ne=t("h5"),Ae=t("h5"),$e=c("Test Connection"),He=y(),De=t("div"),Oe=t("div"),Le=t("iframe"),_e=y(),xe=t("button"),Ue=t("span"),Me=c("×"),this.h()},l(t){e=n(t,"DIV",{class:!0,role:!0});var c=o(e);r=n(c,"H4",{class:!0});var d=o(r);s=l(d,"Error "),v=l(d,Be),d.forEach(i),p=m(c),g=n(c,"HR",{}),b=m(c),I=n(c,"DIV",{class:!0});var h=o(I);k=n(h,"DIV",{class:!0});var u=o(k);w=n(u,"H4",{});var f=o(w);S=l(f,"Fixes"),f.forEach(i),T=m(u),C=n(u,"P",{});var y=o(C);P=l(y,"Depending on what the Test Connection box says you can fix the\n              problem in various ways."),y.forEach(i),N=m(u),A=n(u,"DIV",{class:!0});var E=o(A);$=n(E,"DIV",{class:!0});var Ve=o($);H=n(Ve,"DETAILS",{});var Re=o(H);D=n(Re,"SUMMARY",{class:!0});var qe=o(D);O=n(qe,"SPAN",{});var Ye=o(O);L=l(Ye,"Did Not Connect: Potential Security Issue\n                      "),V=n(Ye,"SPAN",{class:!0});var Ke=o(V);_=l(Ke,"Most Likely"),Ke.forEach(i),Ye.forEach(i),qe.forEach(i),x=m(Re),U=n(Re,"DIV",{class:!0});var je=o(U);M=n(je,"P",{});var Fe=o(M);R=l(Fe,"To authorize your connection, you'll need to tell your\n                      browser to trust your Hydrus Client's self-signed HTTPS\n                      certificate."),Fe.forEach(i),q=m(je),B=n(je,"P",{});var Je=o(B);Y=l(Je,"In the Test Connection box, you'll need to allow the\n                      connection. This varies by browser but you'll press\n                      something like:"),Je.forEach(i),K=m(je),j=n(je,"OL",{});var Ge=o(j);F=n(Ge,"LI",{class:!0});var We=o(F);J=n(We,"SPAN",{class:!0});var ze=o(J);G=l(ze,"Advanced..."),ze.forEach(i),We.forEach(i),W=m(Ge),z=n(Ge,"LI",{class:!0});var Qe=o(z);Q=n(Qe,"SPAN",{class:!0});var Xe=o(Q);X=l(Xe,"Accept the Risk and Continue"),Xe.forEach(i),Z=m(Qe),aa=n(Qe,"UL",{});var Ze=o(aa);ea=n(Ze,"LI",{});var ar=o(ea);ra=n(ar,"P",{});var er=o(ra);sa=l(er,"If this button doesn't show up,\n                              "),ta=n(er,"A",{href:!0,target:!0,class:!0});var rr=o(ta);ca=l(rr,"click here"),rr.forEach(i),na=l(er,"\n                              and try again."),er.forEach(i),ar.forEach(i),Ze.forEach(i),Qe.forEach(i),Ge.forEach(i),je.forEach(i),Re.forEach(i),Ve.forEach(i),oa=m(E),la=n(E,"DIV",{class:!0});var sr=o(la);ia=n(sr,"DETAILS",{});var tr=o(ia);da=n(tr,"SUMMARY",{class:!0});var cr=o(da);ha=n(cr,"SPAN",{});var nr=o(ha);ua=l(nr,"Unable to connect"),nr.forEach(i),cr.forEach(i),fa=m(tr),va=n(tr,"DIV",{class:!0});var or=o(va);ya=n(or,"P",{});var lr=o(ya);pa=l(lr,"Make sure that you're allowing Hydrus Client through your\n                      OS's firewall."),lr.forEach(i),ma=m(or),Ea=n(or,"P",{});var ir=o(Ea);ga=l(ir,"Make sure the address you entered\n                      "),ba=n(ir,"CODE",{class:!0});var dr=o(ba);Ia=l(dr,a[2]),dr.forEach(i),ka=l(ir,"\n                      is correct.\n                      "),wa=n(ir,"A",{target:!0,rel:!0,href:!0});var hr=o(wa);Sa=l(hr,"University of Central Arkansas has a decent guide on\n                        finding your local IP address."),hr.forEach(i),Ta=l(ir,"\n                      A good address will use a format similar to:"),ir.forEach(i),Ca=m(or),Pa=n(or,"UL",{});var ur=o(Pa);Na=n(ur,"LI",{});var fr=o(Na);Aa=n(fr,"CODE",{});var vr=o(Aa);$a=l(vr,"https://127.0.0.1:45869"),vr.forEach(i),Ha=m(fr),Da=n(fr,"SPAN",{});var yr=o(Da);Oa=l(yr,"Hydrus Client is directly on the same computer"),yr.forEach(i),fr.forEach(i),La=m(ur),Va=n(ur,"LI",{});var pr=o(Va);_a=n(pr,"CODE",{});var mr=o(_a);xa=l(mr,"https://192.168.1.150:45869"),mr.forEach(i),Ua=m(pr),Ma=n(pr,"UL",{});var Er=o(Ma);Ra=n(Er,"LI",{});var gr=o(Ra);qa=n(gr,"SPAN",{});var br=o(qa);Ba=l(br,"Hydrus Client is on your LAN"),br.forEach(i),gr.forEach(i),Er.forEach(i),pr.forEach(i),Ya=m(ur),Ka=n(ur,"LI",{});var Ir=o(Ka);ja=n(Ir,"CODE",{});var kr=o(ja);Fa=l(kr,"https://your-exact-pc-name.local:45869"),kr.forEach(i),Ja=m(Ir),Ga=n(Ir,"UL",{});var wr=o(Ga);Wa=n(wr,"LI",{});var Sr=o(Wa);za=n(Sr,"SPAN",{});var Tr=o(za);Qa=l(Tr,"Hydrus Client is on your LAN and you are accessing\n                              from an iOS or MacOS device"),Tr.forEach(i),Sr.forEach(i),wr.forEach(i),Ir.forEach(i),Xa=m(ur),Za=n(ur,"LI",{});var Cr=o(Za);ae=n(Cr,"CODE",{});var Pr=o(ae);ee=l(Pr,"https://your-exact-pc-name:45869"),Pr.forEach(i),re=m(Cr),se=n(Cr,"UL",{});var Nr=o(se);te=n(Nr,"LI",{});var Ar=o(te);ce=n(Ar,"SPAN",{});var $r=o(ce);ne=l($r,'Hydrus Client is on your LAN and you are accessing\n                              from a Windows device that is set to "Private\n                              Network"'),$r.forEach(i),Ar.forEach(i),Nr.forEach(i),Cr.forEach(i),ur.forEach(i),or.forEach(i),tr.forEach(i),sr.forEach(i),oe=m(E),le=n(E,"DIV",{class:!0});var Hr=o(le);ie=n(Hr,"DETAILS",{});var Dr=o(ie);de=n(Dr,"SUMMARY",{class:!0});var Or=o(de);he=n(Or,"SPAN",{});var Lr=o(he);ue=l(Lr,"The connection was reset"),Lr.forEach(i),Or.forEach(i),fe=m(Dr),ve=n(Dr,"DIV",{class:!0});var Vr=o(ve);ye=n(Vr,"P",{});var _r=o(ye);pe=l(_r,"Your address and port are correct, but you're connecting\n                      to Hydrus over HTTP instead of HTTPS."),_r.forEach(i),me=m(Vr),Ee=n(Vr,"P",{});var xr=o(Ee);ge=l(xr,"Make sure that\n                      "),be=n(xr,"STRONG",{});var Ur=o(be);Ie=l(Ur,"use https"),Ur.forEach(i),ke=l(xr,"\n                      is checked in\n                      "),we=n(xr,"CODE",{});var Mr=o(we);Se=l(Mr,"services / manage services / edit: client api"),Mr.forEach(i),xr.forEach(i),Vr.forEach(i),Dr.forEach(i),Hr.forEach(i),E.forEach(i),u.forEach(i),Te=m(h),Ce=n(h,"DIV",{class:!0});var Rr=o(Ce);Pe=n(Rr,"DIV",{class:!0});var qr=o(Pe);Ne=n(qr,"H5",{class:!0});var Br=o(Ne);Ae=n(Br,"H5",{});var Yr=o(Ae);$e=l(Yr,"Test Connection"),Yr.forEach(i),Br.forEach(i),He=m(qr),De=n(qr,"DIV",{class:!0});var Kr=o(De);Oe=n(Kr,"DIV",{class:!0});var jr=o(Oe);Le=n(jr,"IFRAME",{src:!0,title:!0}),o(Le).forEach(i),jr.forEach(i),Kr.forEach(i),qr.forEach(i),Rr.forEach(i),h.forEach(i),_e=m(c),xe=n(c,"BUTTON",{type:!0,class:!0,"data-dismiss":!0,"aria-label":!0});var Fr=o(xe);Ue=n(Fr,"SPAN",{"aria-hidden":!0});var Jr=o(Ue);Me=l(Jr,"×"),Jr.forEach(i),Fr.forEach(i),c.forEach(i),this.h()},h(){d(r,"class","alert-heading"),d(V,"class","badge bg-secondary"),d(D,"class","card-header"),d(J,"class","btn btn-secondary btn-sm disabled"),d(F,"class","m-2"),d(Q,"class","btn btn-secondary btn-sm disabled"),d(ta,"href",a[2]),d(ta,"target","_blank"),d(ta,"class","btn btn-primary"),d(z,"class","m-2"),d(U,"class","card-body"),d($,"class","card"),d(da,"class","card-header"),d(ba,"class","badge bg-secondary"),d(wa,"target","_blank"),d(wa,"rel","noreferrer noopener"),d(wa,"href","https://uca.edu/it/knowledgebase-legacy/finding-your-ip-address-lan/"),d(va,"class","card-body"),d(la,"class","card"),d(de,"class","card-header"),d(ve,"class","card-body"),d(le,"class","card"),d(A,"class","accordian"),d(k,"class","col col-12 col-md-7 col-lg-8"),d(Ne,"class","card-header"),Le.src!==(Ve=a[2])&&d(Le,"src",Ve),d(Le,"title","Invalid HTTPS Fix"),d(Oe,"class","embed-responsive embed-responsive-1by1 svelte-1uy18mz"),d(De,"class","card-body"),d(Pe,"class","card"),d(Ce,"class","col col-12 col-md-5 col-lg-4"),d(I,"class","row"),d(Ue,"aria-hidden","true"),d(xe,"type","button"),d(xe,"class","close"),d(xe,"data-dismiss","alert"),d(xe,"aria-label","Close"),d(e,"class","alert alert-danger alert-dismissible fade show"),d(e,"role","alert")},m(t,c){h(t,e,c),u(e,r),u(r,s),u(r,v),u(e,p),u(e,g),u(e,b),u(e,I),u(I,k),u(k,w),u(w,S),u(k,T),u(k,C),u(C,P),u(k,N),u(k,A),u(A,$),u($,H),u(H,D),u(D,O),u(O,L),u(O,V),u(V,_),u(H,x),u(H,U),u(U,M),u(M,R),u(U,q),u(U,B),u(B,Y),u(U,K),u(U,j),u(j,F),u(F,J),u(J,G),u(j,W),u(j,z),u(z,Q),u(Q,X),u(z,Z),u(z,aa),u(aa,ea),u(ea,ra),u(ra,sa),u(ra,ta),u(ta,ca),u(ra,na),u(A,oa),u(A,la),u(la,ia),u(ia,da),u(da,ha),u(ha,ua),u(ia,fa),u(ia,va),u(va,ya),u(ya,pa),u(va,ma),u(va,Ea),u(Ea,ga),u(Ea,ba),u(ba,Ia),u(Ea,ka),u(Ea,wa),u(wa,Sa),u(Ea,Ta),u(va,Ca),u(va,Pa),u(Pa,Na),u(Na,Aa),u(Aa,$a),u(Na,Ha),u(Na,Da),u(Da,Oa),u(Pa,La),u(Pa,Va),u(Va,_a),u(_a,xa),u(Va,Ua),u(Va,Ma),u(Ma,Ra),u(Ra,qa),u(qa,Ba),u(Pa,Ya),u(Pa,Ka),u(Ka,ja),u(ja,Fa),u(Ka,Ja),u(Ka,Ga),u(Ga,Wa),u(Wa,za),u(za,Qa),u(Pa,Xa),u(Pa,Za),u(Za,ae),u(ae,ee),u(Za,re),u(Za,se),u(se,te),u(te,ce),u(ce,ne),u(A,oe),u(A,le),u(le,ie),u(ie,de),u(de,he),u(he,ue),u(ie,fe),u(ie,ve),u(ve,ye),u(ye,pe),u(ve,me),u(ve,Ee),u(Ee,ge),u(Ee,be),u(be,Ie),u(Ee,ke),u(Ee,we),u(we,Se),u(I,Te),u(I,Ce),u(Ce,Pe),u(Pe,Ne),u(Ne,Ae),u(Ae,$e),u(Pe,He),u(Pe,De),u(De,Oe),u(Oe,Le),u(e,_e),u(e,xe),u(xe,Ue),u(Ue,Me),Re||(qe=f(xe,"click",a[16]),Re=!0)},p(a,e){1&e&&Be!==(Be=a[0]?"while validating your key":"while connecting")&&E(v,Be),4&e&&d(ta,"href",a[2]),4&e&&E(Ia,a[2]),4&e&&Le.src!==(Ve=a[2])&&d(Le,"src",Ve)},d(a){a&&i(e),Re=!1,qe()}}}function W(a){let e,r,s,f,v,p,g,b,I=a[7]?"while requesting a new key":"",k=a[8]?"while validating your key":"",w=a[7]&&z(),S=a[8]&&Q(a);return{c(){e=t("div"),r=t("h4"),s=c("Error "),f=c(I),v=y(),p=c(k),g=y(),w&&w.c(),b=y(),S&&S.c(),this.h()},l(a){e=n(a,"DIV",{class:!0,role:!0});var t=o(e);r=n(t,"H4",{class:!0});var c=o(r);s=l(c,"Error "),f=l(c,I),v=m(c),p=l(c,k),c.forEach(i),g=m(t),w&&w.l(t),b=m(t),S&&S.l(t),t.forEach(i),this.h()},h(){d(r,"class","alert-heading"),d(e,"class","alert alert-danger"),d(e,"role","alert")},m(a,t){h(a,e,t),u(e,r),u(r,s),u(r,f),u(r,v),u(r,p),u(e,g),w&&w.m(e,null),u(e,b),S&&S.m(e,null)},p(a,r){128&r&&I!==(I=a[7]?"while requesting a new key":"")&&E(f,I),256&r&&k!==(k=a[8]?"while validating your key":"")&&E(p,k),a[7]?w||(w=z(),w.c(),w.m(e,b)):w&&(w.d(1),w=null),a[8]?S?S.p(a,r):(S=Q(a),S.c(),S.m(e,null)):S&&(S.d(1),S=null)},d(a){a&&i(e),w&&w.d(),S&&S.d()}}}function z(a){let e,r,s,d,f,v,y;return{c(){e=t("p"),r=c("To request a new key, open Hydrus Client and go to\n          "),s=t("code"),d=c("services / review services / local / client api"),f=c("\n          and press\n          "),v=t("code"),y=c("add / from api request")},l(a){e=n(a,"P",{});var t=o(e);r=l(t,"To request a new key, open Hydrus Client and go to\n          "),s=n(t,"CODE",{});var c=o(s);d=l(c,"services / review services / local / client api"),c.forEach(i),f=l(t,"\n          and press\n          "),v=n(t,"CODE",{});var h=o(v);y=l(h,"add / from api request"),h.forEach(i),t.forEach(i)},m(a,t){h(a,e,t),u(e,r),u(e,s),u(s,d),u(e,f),u(e,v),u(v,y)},d(a){a&&i(e)}}}function Q(a){let e,r,s,p,E,g,b,I,k,w,S,T;return{c(){e=t("p"),r=c("If you just created a key, make sure to\n          "),s=t("strong"),p=c("apply"),E=c("\n          your changes before validating again."),g=y(),b=t("p"),I=c("If you need a new key, press\n          "),k=t("button"),w=c("Request Key"),this.h()},l(a){e=n(a,"P",{});var t=o(e);r=l(t,"If you just created a key, make sure to\n          "),s=n(t,"STRONG",{});var c=o(s);p=l(c,"apply"),c.forEach(i),E=l(t,"\n          your changes before validating again."),t.forEach(i),g=m(a),b=n(a,"P",{});var d=o(b);I=l(d,"If you need a new key, press\n          "),k=n(d,"BUTTON",{class:!0});var h=o(k);w=l(h,"Request Key"),h.forEach(i),d.forEach(i),this.h()},h(){d(k,"class","btn btn-primary btn-sm")},m(t,c){h(t,e,c),u(e,r),u(e,s),u(s,p),u(e,E),h(t,g,c),h(t,b,c),u(b,I),u(b,k),u(k,w),S||(T=f(k,"click",a[10]),S=!0)},p:v,d(a){a&&i(e),a&&i(g),a&&i(b),S=!1,T()}}}function X(a){let e,r,s,p,E,w,S,T,C,P,N,A,$,H,D,O,L,V,_,x,U,M,R,q,K,j,F,J,G,z,Q,X=!a[4]&&B(a),Z=!a[0]&&Y(a),aa=(a[7]||a[8])&&W(a);return{c(){e=t("section"),r=t("form"),s=t("label"),p=c("Your Hydrus Client API URL"),E=y(),w=t("div"),S=t("input"),T=y(),C=t("button"),P=c("Connect"),N=y(),A=t("div"),$=c("The IP address or domain and port of your Hydrus Client"),H=y(),D=t("label"),O=c("Your Hydrus Client API Key"),L=y(),V=t("div"),X&&X.c(),_=y(),x=t("input"),U=y(),M=t("button"),R=c("Validate Key"),K=y(),j=t("div"),F=c("The generated API key from your Hydrus Client"),J=y(),Z&&Z.c(),G=y(),aa&&aa.c(),this.h()},l(a){e=n(a,"SECTION",{class:!0});var t=o(e);r=n(t,"FORM",{id:!0});var c=o(r);s=n(c,"LABEL",{for:!0,class:!0});var d=o(s);p=l(d,"Your Hydrus Client API URL"),d.forEach(i),E=m(c),w=n(c,"DIV",{class:!0});var h=o(w);S=n(h,"INPUT",{id:!0,class:!0,type:!0,"aria-describedby":!0}),T=m(h),C=n(h,"BUTTON",{class:!0,type:!0,disabled:!0});var u=o(C);P=l(u,"Connect"),u.forEach(i),h.forEach(i),N=m(c),A=n(c,"DIV",{id:!0,class:!0});var f=o(A);$=l(f,"The IP address or domain and port of your Hydrus Client"),f.forEach(i),H=m(c),D=n(c,"LABEL",{for:!0,class:!0});var v=o(D);O=l(v,"Your Hydrus Client API Key"),v.forEach(i),L=m(c),V=n(c,"DIV",{class:!0});var y=o(V);X&&X.l(y),_=m(y),x=n(y,"INPUT",{id:!0,class:!0,type:!0,"aria-describedby":!0}),U=m(y),M=n(y,"BUTTON",{class:!0,disabled:!0,type:!0});var g=o(M);R=l(g,"Validate Key"),g.forEach(i),y.forEach(i),K=m(c),j=n(c,"DIV",{id:!0,class:!0});var b=o(j);F=l(b,"The generated API key from your Hydrus Client"),b.forEach(i),c.forEach(i),J=m(t),Z&&Z.l(t),G=m(t),aa&&aa.l(t),t.forEach(i),this.h()},h(){d(s,"for","url-input"),d(s,"class","form-label"),d(S,"id","url-input"),d(S,"class","form-control"),d(S,"type","url"),d(S,"aria-describedby","url-help"),g(S,"is-valid",a[0]),d(C,"class","btn btn-primary"),d(C,"type","submit"),C.disabled=a[5],g(C,"disabled",a[5]),d(w,"class","input-group"),d(A,"id","url-help"),d(A,"class","form-text"),d(D,"for","key-input"),d(D,"class","form-label"),d(x,"id","key-input"),d(x,"class","form-control"),d(x,"type","password"),d(x,"aria-describedby","key-help"),g(x,"is-valid",a[1]),d(M,"class","btn"),M.disabled=q=!a[4],d(M,"type","submit"),g(M,"btn-secondary",!a[4]),g(M,"btn-primary",!!a[4]),d(V,"class","input-group"),d(j,"id","key-help"),d(j,"class","form-text"),d(r,"id","connect-address input-group"),d(e,"class","container")},m(t,c){h(t,e,c),u(e,r),u(r,s),u(s,p),u(r,E),u(r,w),u(w,S),b(S,a[2]),u(w,T),u(w,C),u(C,P),u(r,N),u(r,A),u(A,$),u(r,H),u(r,D),u(D,O),u(r,L),u(r,V),X&&X.m(V,null),u(V,_),u(V,x),b(x,a[4]),u(V,U),u(V,M),u(M,R),u(r,K),u(r,j),u(j,F),u(e,J),Z&&Z.m(e,null),u(e,G),aa&&aa.m(e,null),z||(Q=[f(S,"input",a[12]),f(C,"click",a[9]),f(x,"change",a[13]),f(x,"input",a[14]),f(r,"submit",I(a[15]))],z=!0)},p(a,[r]){4&r&&b(S,a[2]),1&r&&g(S,"is-valid",a[0]),32&r&&(C.disabled=a[5]),32&r&&g(C,"disabled",a[5]),a[4]?X&&(X.d(1),X=null):X?X.p(a,r):(X=B(a),X.c(),X.m(V,_)),16&r&&x.value!==a[4]&&b(x,a[4]),2&r&&g(x,"is-valid",a[1]),16&r&&q!==(q=!a[4])&&(M.disabled=q),16&r&&g(M,"btn-secondary",!a[4]),16&r&&g(M,"btn-primary",!!a[4]),a[0]?Z&&(Z.d(1),Z=null):Z?Z.p(a,r):(Z=Y(a),Z.c(),Z.m(e,G)),a[7]||a[8]?aa?aa.p(a,r):(aa=W(a),aa.c(),aa.m(e,null)):aa&&(aa.d(1),aa=null)},i:v,o:v,d(a){a&&i(e),X&&X.d(),Z&&Z.d(),aa&&aa.d(),z=!1,k(Q)}}}function Z(a,e,r){let s="https://127.0.0.1:45869",t="",c="",n=!1,o=void 0,{address_validated:l=!1}=e,{key_validated:i=!1}=e,d=!1,h=!1;async function u(){if(n)return;r(6,o=""),r(5,n=!0);const a=_(s);console.log(a.address);try{const{version:e}=await a.api_version();console.log("Connected with API version: "+e),localStorage.setItem("address",JSON.stringify(s)),r(0,l=!0),t&&await v()}catch(a){console.error(a),R.set(a),q.set(!1),r(6,o=a),r(0,l=!1)}r(5,n=!1)}async function f(){const a=_();r(6,o=""),r(7,d=!1);try{const{access_key:e}=await a.request_new_permissions("miia-web",x);localStorage.setItem("access_key",JSON.stringify(t)),r(3,t=e),r(4,c=t),r(8,h=!1)}catch(a){console.error(a),r(6,o=a),r(7,d=!0)}}async function v(){r(5,n=!0),r(8,h=!1),r(7,d=!1);const a=_();a.access_key=t,r(6,o="");try{const{human_description:e}=await a.verify_access_key(t);localStorage.setItem("access_key",JSON.stringify(t)),console.log(e),r(1,i=!0),q.set(!0)}catch(a){console.error(a),r(6,o=a),r(1,i=!1),r(8,h=!0)}r(5,n=!1)}w(()=>{const a=localStorage.getItem("address");a&&r(2,s=JSON.parse(a));const e=localStorage.getItem("access_key");e&&(r(3,t=JSON.parse(e)),r(4,c=JSON.parse(e))),(async()=>{if(a)try{await u()}catch(a){console.error(a),r(6,o=a)}})()});return a.$set=a=>{"address_validated"in a&&r(0,l=a.address_validated),"key_validated"in a&&r(1,i=a.key_validated)},[l,i,s,t,c,n,o,d,h,u,f,v,function(){s=this.value,r(2,s)},()=>{r(1,i=!1)},function(){c=this.value,r(4,c)},()=>{l?i||(c?(r(3,t=c),v()):f()):u()},()=>{r(6,o=void 0)},()=>{r(6,o=void 0)}]}class aa extends e{constructor(a){super(),r(this,a,Z,X,s,{address_validated:0,key_validated:1})}}function ea(a){let e,r;return{c(){e=t("span"),r=c("Not Connected"),this.h()},l(a){e=n(a,"SPAN",{class:!0});var s=o(e);r=l(s,"Not Connected"),s.forEach(i),this.h()},h(){d(e,"class","badge bg-danger")},m(a,s){h(a,e,s),u(e,r)},d(a){a&&i(e)}}}function ra(a){let e,r;return{c(){e=t("span"),r=c("Connected"),this.h()},l(a){e=n(a,"SPAN",{class:!0});var s=o(e);r=l(s,"Connected"),s.forEach(i),this.h()},h(){d(e,"class","badge bg-secondary")},m(a,s){h(a,e,s),u(e,r)},d(a){a&&i(e)}}}function sa(a){let e,r;return{c(){e=t("span"),r=c("Not Authenticated"),this.h()},l(a){e=n(a,"SPAN",{class:!0});var s=o(e);r=l(s,"Not Authenticated"),s.forEach(i),this.h()},h(){d(e,"class","badge bg-danger")},m(a,s){h(a,e,s),u(e,r)},d(a){a&&i(e)}}}function ta(a){let e,r;return{c(){e=t("span"),r=c("Authenticated"),this.h()},l(a){e=n(a,"SPAN",{class:!0});var s=o(e);r=l(s,"Authenticated"),s.forEach(i),this.h()},h(){d(e,"class","badge bg-secondary")},m(a,s){h(a,e,s),u(e,r)},d(a){a&&i(e)}}}function ca(a){let e,r,s,c,l;function u(e){a[4].call(null,e)}function f(e){a[5].call(null,e)}let v={};return void 0!==a[0]&&(v.address_validated=a[0]),void 0!==a[1]&&(v.key_validated=a[1]),r=new aa({props:v}),L.push(()=>V(r,"address_validated",u)),L.push(()=>V(r,"key_validated",f)),{c(){e=t("div"),S(r.$$.fragment),this.h()},l(a){e=n(a,"DIV",{class:!0});var s=o(e);C(r.$$.fragment,s),s.forEach(i),this.h()},h(){d(e,"class","setup svelte-1q0y9rk")},m(a,s){h(a,e,s),P(r,e,null),l=!0},p(a,e){const t={};!s&&1&e&&(s=!0,t.address_validated=a[0],H(()=>s=!1)),!c&&2&e&&(c=!0,t.key_validated=a[1],H(()=>c=!1)),r.$set(t)},i(a){l||(N(r.$$.fragment,a),l=!0)},o(a){A(r.$$.fragment,a),l=!1},d(a){a&&i(e),$(r)}}}function na(a){let e,r,s,v,p,E,g,b,I,k,w,S,T,C,P,$,H,L;function V(a,e){return a[0]?ra:ea}let _=V(a),x=_(a);function U(a,e){return a[1]?ta:sa}let M=U(a),R=M(a),q=a[2]&&ca(a);return{c(){e=t("div"),r=t("h1"),s=c("Miia Web!"),v=y(),p=t("p"),E=c("a web client for Hydrus"),g=y(),b=t("div"),I=t("div"),k=t("button"),w=t("span"),S=c("Hydrus Setup"),T=y(),x.c(),C=y(),R.c(),P=y(),q&&q.c(),this.h()},l(a){e=n(a,"DIV",{class:!0});var t=o(e);r=n(t,"H1",{});var c=o(r);s=l(c,"Miia Web!"),c.forEach(i),v=m(t),p=n(t,"P",{});var d=o(p);E=l(d,"a web client for Hydrus"),d.forEach(i),t.forEach(i),g=m(a),b=n(a,"DIV",{class:!0});var h=o(b);I=n(h,"DIV",{class:!0});var u=o(I);k=n(u,"BUTTON",{class:!0});var f=o(k);w=n(f,"SPAN",{});var y=o(w);S=l(y,"Hydrus Setup"),y.forEach(i),T=m(f),x.l(f),C=m(f),R.l(f),f.forEach(i),P=m(u),q&&q.l(u),u.forEach(i),h.forEach(i),this.h()},h(){d(e,"class","col col-12"),d(k,"class","card-header text-left svelte-1q0y9rk"),d(I,"class","card"),d(b,"class","col col-12")},m(t,c){h(t,e,c),u(e,r),u(r,s),u(e,v),u(e,p),u(p,E),h(t,g,c),h(t,b,c),u(b,I),u(I,k),u(k,w),u(w,S),u(k,T),x.m(k,null),u(k,C),R.m(k,null),u(I,P),q&&q.m(I,null),$=!0,H||(L=f(k,"click",a[3]),H=!0)},p(a,e){_!==(_=V(a))&&(x.d(1),x=_(a),x&&(x.c(),x.m(k,C))),M!==(M=U(a))&&(R.d(1),R=M(a),R&&(R.c(),R.m(k,null))),a[2]?q?(q.p(a,e),4&e&&N(q,1)):(q=ca(a),q.c(),N(q,1),q.m(I,null)):q&&(D(),A(q,1,1,()=>{q=null}),O())},i(a){$||(N(q),$=!0)},o(a){A(q),$=!1},d(a){a&&i(e),a&&i(g),a&&i(b),x.d(),R.d(),q&&q.d(),H=!1,L()}}}function oa(a){let e,r,s,f,v,p;return v=new M({}),{c(){e=t("div"),r=t("h2"),s=c("New Search"),f=y(),S(v.$$.fragment),this.h()},l(a){e=n(a,"DIV",{class:!0});var t=o(e);r=n(t,"H2",{});var c=o(r);s=l(c,"New Search"),c.forEach(i),f=m(t),C(v.$$.fragment,t),t.forEach(i),this.h()},h(){d(e,"class","col col-12")},m(a,t){h(a,e,t),u(e,r),u(r,s),u(e,f),P(v,e,null),p=!0},i(a){p||(N(v.$$.fragment,a),p=!0)},o(a){A(v.$$.fragment,a),p=!1},d(a){a&&i(e),$(v)}}}function la(a){let e,r,s,t,c;return r=new U({props:{$$slots:{default:[na]},$$scope:{ctx:a}}}),t=new U({props:{$$slots:{default:[oa]},$$scope:{ctx:a}}}),{c(){e=y(),S(r.$$.fragment),s=y(),S(t.$$.fragment),this.h()},l(a){T('[data-svelte="svelte-1nj90w7"]',document.head).forEach(i),e=m(a),C(r.$$.fragment,a),s=m(a),C(t.$$.fragment,a),this.h()},h(){document.title="Miia Web"},m(a,n){h(a,e,n),P(r,a,n),h(a,s,n),P(t,a,n),c=!0},p(a,[e]){const s={};135&e&&(s.$$scope={dirty:e,ctx:a}),r.$set(s);const c={};128&e&&(c.$$scope={dirty:e,ctx:a}),t.$set(c)},i(a){c||(N(r.$$.fragment,a),N(t.$$.fragment,a),c=!0)},o(a){A(r.$$.fragment,a),A(t.$$.fragment,a),c=!1},d(a){a&&i(e),$(r,a),a&&i(s),$(t,a)}}}function ia(a,e,r){let s=!1,t=!1,c=!1;return a.$$.update=()=>{3&a.$$.dirty&&r(2,c=!s||!t)},[s,t,c,()=>{r(2,c=!c)},function(a){s=a,r(0,s)},function(a){t=a,r(1,t)}]}export default class extends e{constructor(a){super(),r(this,a,ia,la,s,{})}}
