(this["webpackJsonpenglish-fight-ui"]=this["webpackJsonpenglish-fight-ui"]||[]).push([[0],{354:function(e,t,n){},355:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);n(248),n(274),n(276),n(277),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316);var r=n(1),a=n(0),c=n.n(a),i=n(173),o=n(58),s=n.n(o),u=n(3),l=n.n(u),d=n(7),f=n(20),p=n(185),j=n.n(p),b=n(187),h=n.n(b),O=(n(326),n(21)),m=n(47),v=n(76),x=n(88),k=n(174),w=n.n(k),y=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"waitForTimeout",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();y.isProductionMode=!0;var g=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"getSearchParam",value:function(e){return new URLSearchParams(window.location.search).get(e)}},{key:"getHashParam",value:function(e){return new URLSearchParams(window.location.hash.slice(1)).get(e)}}]),e}(),S=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"post",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:{},c=a.sendToken,i=void 0===c||c,o=a.expand,s=void 0===o?"":o,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:i,method:"POST",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:{},c=a.sendToken,i=void 0===c||c,o=a.expand,s=void 0===o?"":o,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:i,method:"PATCH",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c,i,o,s=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},a=r.expand,c=void 0===a?"":a,i=r.Model,o=void 0===i?null:i,t.abrupt("return",e.send(n,{sendToken:!0,method:"GET",expand:c,Model:o}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"send",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f,p,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.data,c=r.sendToken,i=r.method,o=r.expand,s=r.Model,u=void 0===s?null:s,d=new URLSearchParams,o&&(f=w()(o).join(","),d.append("expand",f)),p={headers:e.createHeaders({sendToken:c})},"GET"!==i&&(p.mode="cors",p.body=JSON.stringify(a)),p.method=i,t.next=8,Object(v.timeout)(fetch(e.createFullApiURL(n,d),p),1e4);case 8:return j=t.sent,t.abrupt("return",e.processResponse(j,u));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createHeaders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sendToken,r={Accept:"application/json","Content-Type":"application/json"};return n&&(r.Authorization=e.getAuthorizationHeader()),r}},{key:"getAuthorizationHeader",value:function(){if(g.getSearchParam("fake_vk_id")){if(y.isProductionMode)throw new Error("You cannot use fake_vk_id in production");return e.getFakeVKIDAuthHeader()}return e.getQueryStringAuthHeader()}},{key:"getQueryStringAuthHeader",value:function(){var e=window.location.search.slice(1);return"QueryString ".concat(e)}},{key:"getFakeVKIDAuthHeader",value:function(){var e=g.getSearchParam("fake_vk_id");return"FakeVKID ".concat(e)}},{key:"createFullApiURL",value:function(t,n){return e.createFullUrl("api/".concat(t),n)}},{key:"createFullUrl",value:function(t,n){var r=e.removeTrailingSlash("https://enfight.tmweb.ru"),a="".concat(r,"/").concat(t);return n&&String(n)&&(a+="?".concat(String(n))),a}},{key:"processResponse",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:null,!(n.status>=500&&n.status<600)){t.next=3;break}throw new Error("\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 3:return t.prev=3,t.next=6,n.json();case 6:a=t.sent,t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(3),new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 12:if(n.ok){t.next=16;break}if(!a.detail){t.next=15;break}throw new Error(a.detail);case 15:throw new Error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f");case 16:return t.abrupt("return",e.convertDataToFrontendFormat(a,r));case 17:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"convertDataToBackendFormat",value:function(e){return Object(x.toSnake)(e)}},{key:"convertDataToFrontendFormat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(x.toCamel)(e);return t?t.fromObject(n):n}},{key:"removeTrailingSlash",value:function(e){return e.endsWith("/")?e.slice(0,-1):e}}]),e}(),N=n(67),T=n(66),P=n(72),E=n(175),A=n.n(E),B=n(13),C=n.n(B);function U(e){return function(t){return A()(t,e)}}function _(e,t){return this.constructor.update(this,Object(P.a)({},e,{$set:t}))}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(B.struct)(e,{name:t,defaultProps:n});return r.fromObject=U(r),r.prototype.set=_,r}var I=Object(B.irreducible)("Null",(function(e){return null===e})),G=Object(B.refinement)(C.a.Number,(function(e){return e>=0}),"PositiveNumber"),R=Object(B.refinement)(C.a.Number,(function(e){return e>=1}),"ID"),M={ALLOW:"allow",BLOCK:"block",TO_BE_REQUESTED:"to be requested"},q="word",Q="picture",L=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(F({id:R,vkId:R,firstName:C.a.String,lastName:C.a.String,photoUrl:C.a.String,score:G,monthlyScore:G,foreverRank:G,monthlyRank:G,notificationsStatus:C.a.enums.of(Object.values(M),"notificationsStatus")},"User")),H=n(25),D=function(e){return Object(H.a)({AUTOMATIC_OPERATIONS:["*"]},e)},z="70656700",V=D({init:function(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!function(e,t,n,r,a,c,i){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,c=t.createElement(n),i=t.getElementsByTagName(n)[0],c.async=1,c.src="https://mc.yandex.ru/metrika/tag.js",i.parentNode.insertBefore(c,i)}(window,document,"script");try{ym(z,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){console.log("Seems like Yandex metrika is blocked"),console.warn(t)}case 3:case"end":return e.stop()}}),e)})))()},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{window.ym(z,"userParams",{UserID:e,vkId:t})}catch(r){console.log("Seems like Yandex metrika is blocked"),console.warn(r)}case 1:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return new Promise((function(n){try{window.ym(z,"reachGoal",e,t,(function(){return n()}))}catch(r){console.log("Seems like Yandex metrika is blocked"),console.warn(r)}}))}}),K=n(79),W=null;function Y(){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==W){e.next=2;break}throw new Error("Tracker was not initialized");case 2:return e.next=4,W;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=D({init:function(){return W=new Promise((function(e){K.a.init("GPS_dg48IHXOj1ZkH2CZ0xTEHzFkQme7wTxDvieVRW0",{autocapture:!1,loaded:function(){return e()}})})),Object(v.timeout)(W,1e4)},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y();case 2:r={vkId:t,"utm source":g.getHashParam("utm_source")||""},K.a.identify(String(e)),K.a.people.set_once(r),K.a.register_once(r);case 6:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y();case 2:K.a.capture(e,t);case 3:case"end":return n.stop()}}),n)})))()}}),X=D({init:function(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Init tracker");case 1:case"end":return e.stop()}}),e)})))()},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("linked session with userId ".concat(e,", vkId ").concat(t));case 1:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t?console.log("Reach goal ".concat(e," with params"),t):console.log("Reach goal ".concat(e));case 1:case"end":return n.stop()}}),n)})))()}}),$={AUTOMATIC_OPERATIONS:["init"],init:function(){var e=document.createElement("script");e.type="application/javascript",e.async=!0,e.src="https://vk.com/js/api/openapi.js?168",e.onload=function(){window.VK.Retargeting.Init("VK-RTRG-801543-7s37b"),window.VK.Retargeting.Hit()},document.head.appendChild(e)},reachGoal:function(e){y.isProductionMode&&window.VK.Goal(e)}},ee=n(176),te=n.n(ee),ne="G-WQCZ3XH0QS",re=null;function ae(){return ce.apply(this,arguments)}function ce(){return(ce=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==re){e.next=2;break}throw new Error("Tracker was not initialized");case 2:return e.next=4,re;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=D({init:function(){var e=document.createElement("script");return e.setAttribute("async","1"),e.setAttribute("src","https://www.googletagmanager.com/gtag/js?id=".concat(ne)),document.body.append(e),function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],window.gtag=e,e("js",new Date),e("config",ne)}(),re=new Promise((function(t){e.addEventListener("load",(function(){return t()}))})),Object(v.timeout)(re,1e4)},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ae();case 2:r=te()({utmSource:g.getHashParam("utm_source")},(function(e){return e}));try{gtag("set","user_properties",Object(x.toSnake)(Object(H.a)({id:e,vkId:t},r)))}catch(a){console.log("Seems like Google analytics is blocked"),console.warn(a)}case 4:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ae();case 2:try{gtag("event",e,t)}catch(r){console.log("Seems like Google analytics is blocked"),console.warn(r)}case 3:case"end":return n.stop()}}),n)})))()}}),oe=n(80),se=n.n(oe),ue=D({init:function(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:se.a.init("e93996ec9d92068567adf6bbb49e3e79");case 1:case"end":return e.stop()}}),e)})))()},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r={"vk id":t,"utm source":g.getHashParam("utm_source")||""},se.a.identify(String(e)),se.a.people.set_once(r),se.a.register_once(r);case 4:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:se.a.track(e,t);case 1:case"end":return n.stop()}}),n)})))()}}),le=y.isProductionMode?[V,Z,$,ie,ue]:[X];function de(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];le.forEach((function(t){("*"===t.AUTOMATIC_OPERATIONS[0]||t.AUTOMATIC_OPERATIONS.includes(e))&&t[e].apply(t,n)}))}var fe=function(e,t){de("identify",e,t)},pe=function(){de("init")},je=function(e,t){de("reachGoal",e,t)},be=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"fetchUserData",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("user",{Model:L}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"allowNotifications",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je("allow-notifications"),e.abrupt("return",S.patch("user",{notificationsStatus:M.ALLOW},{Model:L}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"blockNotifications",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je("block-notifications"),e.abrupt("return",S.patch("user",{notificationsStatus:M.BLOCK},{Model:L}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"requestNotifications",value:function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.areNotificationsEnabledOnVkSide){t.next=2;break}return t.abrupt("return",e.allowNotifications());case 2:return t.prev=2,t.next=5,s.a.send("VKWebAppAllowNotifications");case 5:if(n=t.sent,!n.result){t.next=9;break}return t.abrupt("return",e.allowNotifications());case 9:t.next=16;break;case 11:if(t.prev=11,t.t0=t.catch(2),"client_error"!==t.t0.error_type||!t.t0.error_data||4!==t.t0.error_data.error_code||"User denied"!==t.t0.error_data.error_reason){t.next=15;break}return t.abrupt("return",e.blockNotifications());case 15:throw t.t0;case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}()}]),e}();be.areNotificationsEnabledOnVkSide=Boolean(parseInt(g.getSearchParam("vk_are_notifications_enabled"),10));n(354);var he=n(383),Oe=(n(355),n(9)),me=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(F({id:R,question:C.a.String,answerWords:C.a.list(C.a.String),correctAnswer:C.a.union([I,C.a.String]),selectedAnswer:C.a.union([I,C.a.String]),isCorrect:C.a.Boolean},"Question")),ve=C.a.union([me,C.a.Number]);ve.dispatch=function(e){return"number"===typeof e?C.a.Number:me};var xe=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(F({id:R,questions:C.a.list(ve),points:C.a.Number},"Game")),ke=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"startSinglePlayerGame",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.post("game_definition",{type:t});case 2:return n=e.sent,e.abrupt("return",S.post("game",{gameDefinition:n.id},{expand:"questions",Model:xe}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"submitQuestion",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.patch("question/".concat(t.id),{selectedAnswer:t.selectedAnswer},{Model:me}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBattle",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S.get("game/".concat(t),{expand:"questions",Model:xe}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),we=n(49),ye=n.n(we),ge=n(78),Se=n.n(ge),Ne=n(73),Te=n.n(Ne),Pe=n(101),Ee=n.n(Pe),Ae=n(180),Be=n.n(Ae),Ce=n(179),Ue=n.n(Ce),_e=n(178),Fe=n.n(_e);var Ie=function(){return Object(Oe.x)()===Oe.k?Object(r.jsx)(Fe.a,{}):Object(r.jsx)(Ue.a,{})};function Ge(e){var t=e.panelHeaderProps,n=e.onBackButtonClick,a=e.text,c=e.showBackButton,i=Object(H.a)({},t);return i.left=c?Object(r.jsx)(Oe.o,{onClick:n,children:Object(r.jsx)(Ie,{})}):void 0,Object(r.jsx)(Oe.n,Object(H.a)(Object(H.a)({},i),{},{children:a}))}Ge.defaultProps={panelHeaderProps:{},showBackButton:!0,onBackButtonClick:function(){}};var Re=n(24),Me=n.n(Re);function qe(e){var t=e.delay,n=e.render,r=Object(a.useState)(!1),c=Object(f.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){o(!0)}),t);return function(){clearTimeout(e)}}),[t]),i?n():null}qe.propTypes={delay:Me.a.number,render:Me.a.func},qe.defaultProps={delay:200,render:function(){return Object(r.jsx)(Oe.p,{size:"large"})}};var Qe=qe,Le=function(e){var t=e.onStartBattle,n=e.user,c=e.onUpdateUser,i=Object(a.useState)(!1),o=Object(f.a)(i,2),s=o[0],u=o[1],p=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.checked,u(!0),e.prev=2,!n){e.next=9;break}return e.next=6,be.requestNotifications();case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,be.blockNotifications();case 11:r=e.sent;case 12:c(r);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ge,{text:"English Clash",showBackButton:!1}),n&&Object(r.jsx)(Se.a,{children:Object(r.jsx)(Te.a,{before:n.photoUrl?Object(r.jsx)(Be.a,{src:n.photoUrl}):null,description:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)("span",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u043a\u043e\u0432 - ",n.score]})," ",Object(r.jsxs)("span",{children:["\u041c\u0435\u0441\u0442\u043e \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435: ",n.foreverRank]})]}),multiline:!0,children:"".concat(n.firstName," ").concat(n.lastName)})}),Object(r.jsx)(Se.a,{children:Object(r.jsx)(Ee.a,{children:Object(r.jsx)(ye.a,{size:"xl",onClick:t,disabled:s,children:"\u041d\u0430\u0447\u0430\u0442\u044c!"})})}),n&&Object(r.jsx)(Se.a,{children:Object(r.jsx)(Te.a,{multiline:!0,indicator:Object(r.jsx)(Oe.r,{checked:n.notificationsStatus===M.ALLOW,onChange:p,disabled:s}),children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445"})}),s&&Object(r.jsx)(Qe,{})]})};Le.defaultProps={user:null};var He,De=Le,ze=(n(372),n(181)),Ve=function(){function e(){Object(O.a)(this,e)}return Object(m.a)(e,null,[{key:"createFullPictureUrl",value:function(t){var n=e.removePrecedingSlash(t);return S.createFullUrl(n)}},{key:"removePrecedingSlash",value:function(e){return e.startsWith("/")?e.slice(1):e}}]),e}(),Ke=(He={},Object(P.a)(He,q,(function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:["\u0421\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c: ",e]}),Object(r.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439:"})]})})),Object(P.a)(He,Q,(function(e){return Object(r.jsxs)("div",{className:"picture-question",children:[Object(r.jsx)("img",{src:Ve.createFullPictureUrl(e),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c"}),Object(r.jsx)("span",{children:"\u042d\u0442\u043e -"})]})})),He);var We=function(e){var t=e.question,n=e.gameType,a=e.onSelectAnswer,c=t.answerWords,i=t.selectedAnswer,o=t.isCorrect,s=t.correctAnswer,u=t.question,l=Ke[n];return Object(r.jsxs)(Ee.a,{children:[Object(r.jsx)(Oe.i,{children:l(u)}),c.map((function(e){var t=e===s,n=!o&&e===i,c=Object(ze.a)("answer-button",{correct:t,failure:n});return Object(r.jsx)(ye.a,{size:"xl",mode:"primary",stretched:!0,className:c,onClick:function(){return!i&&a(e)},children:e},e)}))]})},Ye=n(132),Je="setBattle",Ze="updateQuestion",Xe="goToNextQuestion",$e={battle:null,activeQuestion:null,hasNextQuestion:!1};function et(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je:var n=t.payload,r=n.questions;return Object(H.a)(Object(H.a)({},e),{},{battle:n,activeQuestion:r[0],hasNextQuestion:r.length>1});case Ze:var a=t.payload,c=e.battle.questions,i=c.findIndex((function(e){return e.id===a.id})),o=[].concat(Object(Ye.a)(c.slice(0,i)),[a],Object(Ye.a)(c.slice(i+1)));return Object(H.a)(Object(H.a)({},e),{},{battle:Object(H.a)(Object(H.a)({},e.battle),{},{questions:o}),activeQuestion:a});case Xe:var s=e.battle.questions,u=s.findIndex((function(t){return t.id===e.activeQuestion.id}));if(u===s.length-1)throw new Error("\u0412\u044b \u0443\u0436\u0435 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435");var l=u+1;return Object(H.a)(Object(H.a)({},e),{},{activeQuestion:s[l],hasNextQuestion:l<s.length-1});default:return e}}var tt=function(e){var t=e.onGoBack,n=e.onFinishGame,c=e.gameType,i=void 0===c?null:c,o=Object(a.useState)(!1),s=Object(f.a)(o,2),u=s[0],p=s[1],j=Object(a.useReducer)(et,$e),b=Object(f.a)(j,2),h=b[0],O=b[1],m=h.battle,v=h.activeQuestion,x=h.hasNextQuestion;Object(a.useEffect)((function(){i&&function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,ke.startSinglePlayerGame(i);case 4:t=e.sent,O({type:Je,payload:t});case 6:return e.prev=6,p(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var k=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=2;break}return e.abrupt("return");case 2:return r=v.set("selectedAnswer",t),p(!0),e.prev=4,e.next=7,ke.submitQuestion(r);case 7:a=e.sent,O({type:Ze,payload:a});case 9:return e.prev=9,p(!1),e.finish(9);case 12:return e.next=14,y.waitForTimeout(1e3);case 14:x?O({type:Xe}):n(m);case 15:case"end":return e.stop()}}),e,null,[[4,,9,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ge,{onBackButtonClick:t,text:"\u0418\u0433\u0440\u0430"}),v&&Object(r.jsx)(We,{question:v,onSelectAnswer:k,gameType:i}),u&&Object(r.jsx)(Qe,{})]})},nt=n(103),rt=n.n(nt),at=n(184),ct=n.n(at),it=(n(373),n(182)),ot=n.n(it),st=n(183),ut=n.n(st),lt=n(387);function dt(e){var t=e.user,n=e.onGoBack,c=e.battle,i=e.onRetry,o=e.onUpdateUser,s=c.questions,u=c.points,p=s.filter((function(e){return e.isCorrect})).length,j=s.length-p,b=Object(a.useState)(!1),h=Object(f.a)(b,2),O=h[0],m=h[1],v=Object(a.useState)(!1),x=Object(f.a)(v,2),k=x[0],w=x[1],y=t.notificationsStatus===M.TO_BE_REQUESTED,g=Object(r.jsxs)("div",{className:"action-buttons-wrapper",children:[Object(r.jsx)(ye.a,{onClick:n,size:"l",before:Object(r.jsx)(ot.a,{}),children:"\u0414\u043e\u043c\u043e\u0439"}),Object(r.jsx)(ye.a,{onClick:i,size:"l",before:Object(r.jsx)(ut.a,{}),children:"\u0415\u0449\u0435 \u0440\u0430\u0437"})]});function S(){return(S=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.prev=3,e.next=6,be.requestNotifications();case 6:t=e.sent,o(t),t.notificationsStatus===M.BLOCK&&m(!0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[3,,9,12]])})))).apply(this,arguments)}function N(){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.prev=3,e.t0=o,e.next=7,be.blockNotifications();case 7:e.t1=e.sent,(0,e.t0)(e.t1),m(!0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[3,,10,13]])})))).apply(this,arguments)}var P=Object(r.jsx)(Oe.d,{style:{marginTop:"10px"},children:Object(r.jsx)(Oe.c,{size:"l",style:{padding:"10px"},children:Object(r.jsxs)("div",{className:"notification-request-content",children:[Object(r.jsx)("span",{className:"notification-request-header",children:"\u0423\u0437\u043d\u0430\u0439 \u043f\u0435\u0440\u0432\u044b\u043c \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445 - \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f!"}),Object(r.jsxs)("div",{className:"notification-buttons-wrapper",children:[Object(r.jsx)(ye.a,{size:"m",mode:"commerce",className:"notification-button",onClick:function(){return S.apply(this,arguments)},disabled:k,children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(r.jsx)(ye.a,{size:"m",mode:"secondary",className:"notification-button",onClick:N,disabled:k,children:"\u041d\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"})]}),Object(r.jsx)("span",{className:"notification-request-close",children:Object(r.jsx)(lt.a,{onClick:N})}),Object(r.jsx)("span",{className:"notification-request-subtext",children:"\u0412\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435"})]})})});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ge,{text:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",onBackButtonClick:n}),Object(r.jsxs)(Se.a,{header:Object(r.jsx)(ct.a,{mode:"secondary",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),children:[Object(r.jsx)(Te.a,{indicator:Object(r.jsx)(rt.a,{mode:"primary",children:p}),children:"\u0412\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(Te.a,{indicator:Object(r.jsx)(rt.a,{mode:"primary",children:j}),children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(Te.a,{indicator:Object(r.jsx)(rt.a,{mode:"primary",children:u}),children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u043e\u0447\u043a\u043e\u0432:"})]}),!y&&g,y&&P,O&&Object(r.jsx)(Oe.f,{className:"subscribe-later",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043c\u043e\u0436\u043d\u043e \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435"}),k&&Object(r.jsx)(Qe,{})]})}dt.defaultProps={user:null,battle:null};var ft=dt,pt=n(389),jt=n(390),bt=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(F({id:R,firstName:C.a.String,lastName:C.a.String,photoUrl:C.a.String,score:G},"ScoreboardUser"));n(375);var ht=function(e){var t=e.rank,n=e.score,a=e.photoUrl,c=e.firstName,i=e.lastName;return Object(r.jsx)(Oe.q,{before:Object(r.jsx)(Oe.e,{children:t}),after:n,children:Object(r.jsxs)("div",{className:"scoreboard-item",children:[Object(r.jsx)(Oe.a,{size:40,src:a}),Object(r.jsxs)("div",{className:"scoreboard-item-name",children:[c," ",i]})]})})},Ot="forever",mt="monthly";var vt=function(e){var t=e.user,n=void 0===t?null:t,c=Object(a.useState)([]),i=Object(f.a)(c,2),o=i[0],s=i[1],u=Object(a.useState)(!1),p=Object(f.a)(u,2),j=p[0],b=p[1],h=Object(a.useState)(Ot),O=Object(f.a)(h,2),m=O[0],v=O[1],x=Object(a.useState)(!1),k=Object(f.a)(x,2),w=k[0],y=k[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s([]),b(!0),e.next=4,S.get("".concat(m,"_scoreboard"));case 4:t=e.sent,r=bt.fromObject(Object(H.a)({},n)),y(Boolean(t.find((function(e){return e.id===r.id})))),s(t),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m,n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ge,{text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",showBackButton:!1}),Object(r.jsx)(Oe.h,{vertical:"top",children:Object(r.jsxs)(Oe.u,{children:[Object(r.jsx)(Oe.v,{selected:m===Ot,onClick:function(){return v(Ot)},children:"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f"}),Object(r.jsx)(Oe.v,{selected:m===mt,onClick:function(){return v(mt)},children:"\u0417\u0430 \u043c\u0435\u0441\u044f\u0446"})]})}),Object(r.jsx)(Oe.f,{children:Object(r.jsxs)(Oe.i,{style:{paddingTop:"20px"},children:[!j&&Object(r.jsxs)(Oe.l,{children:[o.map((function(e,t){var n=e.id,a=e.firstName,c=e.lastName,i=e.photoUrl,o=e.score;return Object(r.jsx)(ht,{rank:t+1,score:o,photoUrl:i,firstName:a,lastName:c},n)})),!w&&Object(r.jsx)(ht,{rank:m===Ot?n.foreverRank:n.monthlyRank,score:m===Ot?n.score:n.monthlyScore,photoUrl:n.photoUrl,firstName:n.firstName,lastName:n.lastName})]}),j&&Object(r.jsx)(Qe,{})]})})]})};n(376);var xt=function(e){var t=e.onGoBack,n=e.onChoose;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ge,{text:"\u0422\u0438\u043f \u0438\u0433\u0440\u044b",onBackButtonClick:t}),Object(r.jsxs)(Oe.f,{children:[Object(r.jsx)(Oe.j,{mode:"primary",children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0438\u043f \u0438\u0433\u0440\u044b:"}),Object(r.jsxs)("div",{className:"choose-game-type-body",children:[Object(r.jsx)(Oe.b,{size:"l",onClick:function(){return n(Q)},children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(r.jsx)(Oe.b,{size:"l",onClick:function(){return n(q)},children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"})]})]})]})},kt=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(Object(r.jsx)(j.a,{})),o=Object(f.a)(i,2),s=o[0],u=o[1],p=Object(a.useState)("game"),b=Object(f.a)(p,2),O=b[0],m=b[1],v=Object(a.useState)("home"),x=Object(f.a)(v,2),k=x[0],w=x[1],g=Object(a.useState)(null),S=Object(f.a)(g,2),N=S[0],T=S[1],P=Object(a.useState)(null),E=Object(f.a)(P,2),A=E[0],B=E[1];function C(e){return U.apply(this,arguments)}function U(){return(U=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be.fetchUserData();case 3:if(n=e.sent,c(n),!t){e.next=13;break}if(n.notificationsStatus!==M.ALLOW||be.areNotificationsEnabledOnVkSide){e.next=12;break}return e.t0=c,e.next=10,be.blockNotifications();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:fe(n.id,n.vkId);case 13:return e.prev=13,u(null),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,,13,16]])})))).apply(this,arguments)}Object(a.useEffect)((function(){y.isProductionMode&&he.a({dsn:"https://ae49049c58d94887bed337d523675ca6@o158161.ingest.sentry.io/5554359",beforeSend:function(e,t){if(e.exception){var n=t&&t.originalException&&t.originalException instanceof Error&&t.originalException.message?t.originalException.message:"";u(Object(r.jsxs)(h.a,{actions:[{mode:"default",title:"\u041e\u041a",autoclose:!0}],onClose:function(){return u(null)},children:[Object(r.jsx)("h2",{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 =("}),n&&Object(r.jsx)("p",{className:"error-message",children:n}),Object(r.jsx)("p",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437"})]}))}return e}}),pe(),je("open app")}),[]),Object(a.useEffect)((function(){C(!0)}),[]);var _=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.getBattle(t.id);case 2:n=e.sent,T(n),w("results"),je("finish-game"),$.reachGoal("conversion"),C(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return w("home")},I=function(){w("choose-game-type")},G=function(e){e!==A&&B(e),w("battle"),je("start-game",{type:e,mode:"single"})};return Object(r.jsxs)(Oe.g,{activeStory:O,tabbar:Object(r.jsxs)(Oe.s,{children:[Object(r.jsx)(Oe.t,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",selected:"game"===O,onClick:function(){m("game"),w("home")},children:Object(r.jsx)(pt.a,{})}),Object(r.jsx)(Oe.t,{text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",selected:"scoreboard"===O,onClick:function(){m("scoreboard"),w("scoreboard-home")},children:Object(r.jsx)(jt.a,{})})]}),children:[Object(r.jsxs)(Oe.w,{id:"game",activePanel:k,popout:s,children:[Object(r.jsx)(Oe.m,{id:"home",children:Object(r.jsx)(De,{user:n,onStartBattle:I,onUpdateUser:function(e){return c(e)}})}),Object(r.jsx)(Oe.m,{id:"choose-game-type",children:Object(r.jsx)(xt,{onGoBack:F,onChoose:G})}),Object(r.jsx)(Oe.m,{id:"battle",children:Object(r.jsx)(tt,{onGoBack:I,onFinishGame:_,gameType:A})}),Object(r.jsx)(Oe.m,{id:"results",children:Object(r.jsx)(ft,{user:n,onRetry:function(){return G(A)},onGoBack:F,battle:N,onUpdateUser:function(e){return c(e)}})})]}),Object(r.jsx)(Oe.w,{id:"scoreboard",activePanel:k,popout:s,children:Object(r.jsx)(Oe.m,{id:"scoreboard-home",children:Object(r.jsx)(vt,{user:n})})})]})},wt=n(391);function yt(e){var t=e.children;return y.isProductionMode?Object(r.jsx)(wt.a,{fallback:function(e){var t=e.error,n=e.componentStack,a=e.resetError;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438:"}),Object(r.jsx)("p",{children:t.message}),Object(r.jsx)("p",{children:n}),Object(r.jsx)(ye.a,{onClick:a,children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},children:t}):t}s.a.send("VKWebAppInit"),s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=r.scheme||"client_light",document.body.attributes.setNamedItem(a)}})),Object(i.render)(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(yt,{children:Object(r.jsx)(kt,{})})}),document.getElementById("root")),y.isProductionMode||Promise.all([n.e(3),n.e(4)]).then(n.bind(null,395))}},[[381,1,2]]]);
//# sourceMappingURL=main.c859bccb.chunk.js.map