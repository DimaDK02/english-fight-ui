(this["webpackJsonpenglish-fight-ui"]=this["webpackJsonpenglish-fight-ui"]||[]).push([[0],{351:function(e,t,n){},352:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},378:function(e,t,n){"use strict";n.r(t);n(246),n(272),n(274),n(275),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314);var r=n(1),a=n(0),c=n.n(a),i=n(172),o=n(58),s=n.n(o),u=n(4),l=n.n(u),d=n(9),f=n(20),j=n(183),b=n.n(j),p=n(185),h=n.n(p),O=(n(324),n(24)),x=n(54),v=n(98),m=n(129),k=n(173),w=n.n(k),y=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"post",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:{},c=a.sendToken,i=void 0===c||c,o=a.expand,s=void 0===o?"":o,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:i,method:"POST",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>2&&void 0!==f[2]?f[2]:{},c=a.sendToken,i=void 0===c||c,o=a.expand,s=void 0===o?"":o,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:i,method:"PATCH",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c,i,o,s=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},a=r.expand,c=void 0===a?"":a,i=r.Model,o=void 0===i?null:i,t.abrupt("return",e.send(n,{sendToken:!0,method:"GET",expand:c,Model:o}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"send",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,i,o,s,u,d,f,j,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.data,c=r.sendToken,i=r.method,o=r.expand,s=r.Model,u=void 0===s?null:s,d=new URLSearchParams,o&&(f=w()(o).join(","),d.append("expand",f)),j={headers:e.createHeaders({sendToken:c})},"GET"!==i&&(j.mode="cors",j.body=JSON.stringify(a)),j.method=i,t.next=8,Object(v.timeout)(fetch(e.createFullApiURL(n,d),j),1e4);case 8:return b=t.sent,t.abrupt("return",e.processResponse(b,u));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createHeaders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sendToken,r={Accept:"application/json","Content-Type":"application/json"};return n&&(r.Authorization=e.getAuthorizationHeader()),r}},{key:"getAuthorizationHeader",value:function(){var e=window.location.search.slice(1);return"QueryString ".concat(e)}},{key:"createFullApiURL",value:function(t,n){return e.createFullUrl("api/".concat(t),n)}},{key:"createFullUrl",value:function(t,n){var r=e.removeTrailingSlash("https://enfight.tmweb.ru"),a="".concat(r,"/").concat(t);return n&&String(n)&&(a+="?".concat(String(n))),a}},{key:"processResponse",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:null,!(n.status>=500&&n.status<600)){t.next=3;break}throw new Error("\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 3:return t.prev=3,t.next=6,n.json();case 6:a=t.sent,t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(3),new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 12:if(n.ok){t.next=16;break}if(!a.detail){t.next=15;break}throw new Error(a.detail);case 15:throw new Error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f");case 16:return t.abrupt("return",e.convertDataToFrontendFormat(a,r));case 17:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"convertDataToBackendFormat",value:function(e){return Object(m.toSnake)(e)}},{key:"convertDataToFrontendFormat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(m.toCamel)(e);return t?t.fromObject(n):n}},{key:"removeTrailingSlash",value:function(e){return e.endsWith("/")?e.slice(0,-1):e}}]),e}(),g=n(66),S=n(65),N=n(72),T=n(174),B=n.n(T),C=n(13),E=n.n(C);function U(e){return function(t){return B()(t,e)}}function A(e,t){return this.constructor.update(this,Object(N.a)({},e,{$set:t}))}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(C.struct)(e,{name:t,defaultProps:n});return r.fromObject=U(r),r.prototype.set=A,r}var F=Object(C.irreducible)("Null",(function(e){return null===e})),R=Object(C.refinement)(E.a.Number,(function(e){return e>=0}),"PositiveNumber"),I=Object(C.refinement)(E.a.Number,(function(e){return e>=1}),"ID"),M={ALLOW:"allow",BLOCK:"block",TO_BE_REQUESTED:"to be requested"},q="word",G="picture",_=function(e){Object(g.a)(n,e);var t=Object(S.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(P({id:I,vkId:I,firstName:E.a.String,lastName:E.a.String,photoUrl:E.a.String,score:R,monthlyScore:R,foreverRank:R,monthlyRank:R,notificationsStatus:E.a.enums.of(Object.values(M),"notificationsStatus")},"User")),Q=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"waitForTimeout",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearchParam",value:function(e){return new URLSearchParams(window.location.search).get(e)}}]),e}();Q.isProductionMode=!0;var z=n(29),L=function(e){return Object(z.a)({AUTOMATIC_OPERATIONS:["*"]},e)},D="70656700",W=L({init:function(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!function(e,t,n,r,a,c,i){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,c=t.createElement(n),i=t.getElementsByTagName(n)[0],c.async=1,c.src="https://mc.yandex.ru/metrika/tag.js",i.parentNode.insertBefore(c,i)}(window,document,"script");try{ym(D,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){console.log("Seems like Yandex metrika is blocked"),console.warn(t)}case 3:case"end":return e.stop()}}),e)})))()},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{window.ym(D,"userParams",{UserID:e,vkId:t})}catch(r){console.log("Seems like Yandex metrika is blocked"),console.warn(r)}case 1:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return new Promise((function(n){try{window.ym(D,"reachGoal",e,t,(function(){return n()}))}catch(r){console.log("Seems like Yandex metrika is blocked"),console.warn(r)}}))}}),H=n(87),V=null;function K(){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==V){e.next=2;break}throw new Error("Tracker was not initialized");case 2:return e.next=4,V;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=L({init:function(){return V=new Promise((function(e){H.a.init("GPS_dg48IHXOj1ZkH2CZ0xTEHzFkQme7wTxDvieVRW0",{autocapture:!1,loaded:function(){return e()}})})),Object(v.timeout)(V,1e4)},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K();case 2:H.a.identify(String(e)),H.a.people.set({vkId:t});case 4:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K();case 2:H.a.capture(e,t);case 3:case"end":return n.stop()}}),n)})))()}}),Z=L({init:function(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Init tracker");case 1:case"end":return e.stop()}}),e)})))()},identify:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("linked session with userId ".concat(e,", vkId ").concat(t));case 1:case"end":return n.stop()}}),n)})))()},reachGoal:function(e,t){return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("Reach goal ".concat(e," with params"),t);case 1:case"end":return n.stop()}}),n)})))()}}),X={AUTOMATIC_OPERATIONS:["init"],init:function(){var e=document.createElement("script");e.type="application/javascript",e.async=!0,e.src="https://vk.com/js/api/openapi.js?168",e.onload=function(){window.VK.Retargeting.Init("VK-RTRG-767184-cuU03"),window.VK.Retargeting.Hit()},document.head.appendChild(e)},reachGoal:function(e){Q.isProductionMode&&window.VK.Goal(e)}},$=Q.isProductionMode?[W,Y,X]:[Z];function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];$.forEach((function(t){("*"===t.AUTOMATIC_OPERATIONS[0]||t.AUTOMATIC_OPERATIONS.includes(e))&&t[e].apply(t,n)}))}var te=function(e,t){ee("identify",e,t)},ne=function(){ee("init")},re=function(e,t){ee("reachGoal",e,t)},ae=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"fetchUserData",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.get("user",{Model:_}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"allowNotifications",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re("allow-notifications"),e.abrupt("return",y.patch("user",{notificationsStatus:M.ALLOW},{Model:_}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"blockNotifications",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re("block-notifications"),e.abrupt("return",y.patch("user",{notificationsStatus:M.BLOCK},{Model:_}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"requestNotifications",value:function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.areNotificationsEnabledOnVkSide){t.next=2;break}return t.abrupt("return",e.allowNotifications());case 2:return t.prev=2,t.next=5,s.a.send("VKWebAppAllowNotifications");case 5:if(n=t.sent,!n.result){t.next=9;break}return t.abrupt("return",e.allowNotifications());case 9:t.next=16;break;case 11:if(t.prev=11,t.t0=t.catch(2),"client_error"!==t.t0.error_type||!t.t0.error_data||4!==t.t0.error_data.error_code||"User denied"!==t.t0.error_data.error_reason){t.next=15;break}return t.abrupt("return",e.blockNotifications());case 15:throw t.t0;case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}()}]),e}();ae.areNotificationsEnabledOnVkSide=Boolean(parseInt(Q.getSearchParam("vk_are_notifications_enabled"),10));n(351);var ce=n(380),ie=(n(352),n(8)),oe=function(e){Object(g.a)(n,e);var t=Object(S.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(P({id:I,question:E.a.String,answerWords:E.a.list(E.a.String),correctAnswer:E.a.union([F,E.a.String]),selectedAnswer:E.a.union([F,E.a.String]),isCorrect:E.a.Boolean},"Question")),se=E.a.union([oe,E.a.Number]);se.dispatch=function(e){return"number"===typeof e?E.a.Number:oe};var ue=function(e){Object(g.a)(n,e);var t=Object(S.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(P({id:I,questions:E.a.list(se),points:E.a.Number},"Game")),le=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"startSinglePlayerGame",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("game_definition",{type:t});case 2:return n=e.sent,e.abrupt("return",y.post("game",{gameDefinition:n.id},{expand:"questions",Model:ue}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"submitQuestion",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.patch("question/".concat(t.id),{selectedAnswer:t.selectedAnswer},{Model:oe}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBattle",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.get("game/".concat(t),{expand:"questions",Model:ue}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),de=n(48),fe=n.n(de),je=n(77),be=n.n(je),pe=n(73),he=n.n(pe),Oe=n(99),xe=n.n(Oe),ve=n(178),me=n.n(ve),ke=n(177),we=n.n(ke),ye=n(176),ge=n.n(ye);var Se=function(){return Object(ie.x)()===ie.k?Object(r.jsx)(ge.a,{}):Object(r.jsx)(we.a,{})};function Ne(e){var t=e.panelHeaderProps,n=e.onBackButtonClick,a=e.text,c=e.showBackButton,i=Object(z.a)({},t);return i.left=c?Object(r.jsx)(ie.o,{onClick:n,children:Object(r.jsx)(Se,{})}):void 0,Object(r.jsx)(ie.n,Object(z.a)(Object(z.a)({},i),{},{children:a}))}Ne.defaultProps={panelHeaderProps:{},showBackButton:!0,onBackButtonClick:function(){}};var Te=n(23),Be=n.n(Te);function Ce(e){var t=e.delay,n=e.render,r=Object(a.useState)(!1),c=Object(f.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){o(!0)}),t);return function(){clearTimeout(e)}}),[t]),i?n():null}Ce.propTypes={delay:Be.a.number,render:Be.a.func},Ce.defaultProps={delay:200,render:function(){return Object(r.jsx)(ie.p,{size:"large"})}};var Ee=Ce,Ue=function(e){var t=e.onStartBattle,n=e.user,c=e.onUpdateUser,i=Object(a.useState)(!1),o=Object(f.a)(i,2),s=o[0],u=o[1],j=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.checked,u(!0),e.prev=2,!n){e.next=9;break}return e.next=6,ae.requestNotifications();case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,ae.blockNotifications();case 11:r=e.sent;case 12:c(r);case 13:return e.prev=13,u(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,,13,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{text:"English Clash",showBackButton:!1}),n&&Object(r.jsx)(be.a,{children:Object(r.jsx)(he.a,{before:n.photoUrl?Object(r.jsx)(me.a,{src:n.photoUrl}):null,description:Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(r.jsxs)("span",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u043a\u043e\u0432 - ",n.score]})," ",Object(r.jsxs)("span",{children:["\u041c\u0435\u0441\u0442\u043e \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435: ",n.foreverRank]})]}),multiline:!0,children:"".concat(n.firstName," ").concat(n.lastName)})}),Object(r.jsx)(be.a,{children:Object(r.jsx)(xe.a,{children:Object(r.jsx)(fe.a,{size:"xl",onClick:t,disabled:s,children:"\u041d\u0430\u0447\u0430\u0442\u044c!"})})}),n&&Object(r.jsx)(be.a,{children:Object(r.jsx)(he.a,{multiline:!0,indicator:Object(r.jsx)(ie.r,{checked:n.notificationsStatus===M.ALLOW,onChange:j,disabled:s}),children:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445"})}),s&&Object(r.jsx)(Ee,{})]})};Ue.defaultProps={user:null};var Ae,Pe=Ue,Fe=(n(369),n(179)),Re=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"createFullPictureUrl",value:function(t){var n=e.removePrecedingSlash(t);return y.createFullUrl(n)}},{key:"removePrecedingSlash",value:function(e){return e.startsWith("/")?e.slice(1):e}}]),e}(),Ie=(Ae={},Object(N.a)(Ae,q,(function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:["\u0421\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c: ",e]}),Object(r.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439:"})]})})),Object(N.a)(Ae,G,(function(e){return Object(r.jsxs)("div",{className:"picture-question",children:[Object(r.jsx)("img",{src:Re.createFullPictureUrl(e),alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c"}),Object(r.jsx)("span",{children:"\u042d\u0442\u043e -"})]})})),Ae);var Me=function(e){var t=e.question,n=e.gameType,a=e.onSelectAnswer,c=t.answerWords,i=t.selectedAnswer,o=t.isCorrect,s=t.correctAnswer,u=t.question,l=Ie[n];return Object(r.jsxs)(xe.a,{children:[Object(r.jsx)(ie.i,{children:l(u)}),c.map((function(e){var t=e===s,n=!o&&e===i,c=Object(Fe.a)("answer-button",{correct:t,failure:n});return Object(r.jsx)(fe.a,{size:"xl",mode:"primary",stretched:!0,className:c,onClick:function(){return!i&&a(e)},children:e},e)}))]})},qe=n(131),Ge="setBattle",_e="updateQuestion",Qe="goToNextQuestion",ze={battle:null,activeQuestion:null,hasNextQuestion:!1};function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:var n=t.payload,r=n.questions;return Object(z.a)(Object(z.a)({},e),{},{battle:n,activeQuestion:r[0],hasNextQuestion:r.length>1});case _e:var a=t.payload,c=e.battle.questions,i=c.findIndex((function(e){return e.id===a.id})),o=[].concat(Object(qe.a)(c.slice(0,i)),[a],Object(qe.a)(c.slice(i+1)));return Object(z.a)(Object(z.a)({},e),{},{battle:Object(z.a)(Object(z.a)({},e.battle),{},{questions:o}),activeQuestion:a});case Qe:var s=e.battle.questions,u=s.findIndex((function(t){return t.id===e.activeQuestion.id}));if(u===s.length-1)throw new Error("\u0412\u044b \u0443\u0436\u0435 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435");var l=u+1;return Object(z.a)(Object(z.a)({},e),{},{activeQuestion:s[l],hasNextQuestion:l<s.length-1});default:return e}}var De=function(e){var t=e.onGoBack,n=e.onFinishGame,c=e.gameType,i=void 0===c?null:c,o=Object(a.useState)(!1),s=Object(f.a)(o,2),u=s[0],j=s[1],b=Object(a.useReducer)(Le,ze),p=Object(f.a)(b,2),h=p[0],O=p[1],x=h.battle,v=h.activeQuestion,m=h.hasNextQuestion;Object(a.useEffect)((function(){i&&function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,le.startSinglePlayerGame(i);case 4:t=e.sent,O({type:Ge,payload:t});case 6:return e.prev=6,j(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var k=function(){var e=Object(d.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=2;break}return e.abrupt("return");case 2:return r=v.set("selectedAnswer",t),j(!0),e.prev=4,e.next=7,le.submitQuestion(r);case 7:a=e.sent,O({type:_e,payload:a});case 9:return e.prev=9,j(!1),e.finish(9);case 12:return e.next=14,Q.waitForTimeout(1e3);case 14:m?O({type:Qe}):n(x);case 15:case"end":return e.stop()}}),e,null,[[4,,9,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{onBackButtonClick:t,text:"\u0418\u0433\u0440\u0430"}),v&&Object(r.jsx)(Me,{question:v,onSelectAnswer:k,gameType:i}),u&&Object(r.jsx)(Ee,{})]})},We=n(101),He=n.n(We),Ve=n(182),Ke=n.n(Ve),Je=(n(370),n(180)),Ye=n.n(Je),Ze=n(181),Xe=n.n(Ze),$e=n(384);function et(e){var t=e.user,n=e.onGoBack,c=e.battle,i=e.onRetry,o=e.onUpdateUser,s=c.questions,u=c.points,j=s.filter((function(e){return e.isCorrect})).length,b=s.length-j,p=Object(a.useState)(!1),h=Object(f.a)(p,2),O=h[0],x=h[1],v=Object(a.useState)(!1),m=Object(f.a)(v,2),k=m[0],w=m[1],y=t.notificationsStatus===M.TO_BE_REQUESTED,g=Object(r.jsxs)("div",{className:"action-buttons-wrapper",children:[Object(r.jsx)(fe.a,{onClick:n,size:"l",before:Object(r.jsx)(Ye.a,{}),children:"\u0414\u043e\u043c\u043e\u0439"}),Object(r.jsx)(fe.a,{onClick:i,size:"l",before:Object(r.jsx)(Xe.a,{}),children:"\u0415\u0449\u0435 \u0440\u0430\u0437"})]});function S(){return(S=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.prev=3,e.next=6,ae.requestNotifications();case 6:t=e.sent,o(t),t.notificationsStatus===M.BLOCK&&x(!0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[3,,9,12]])})))).apply(this,arguments)}function N(){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=2;break}return e.abrupt("return");case 2:return w(!0),e.prev=3,e.t0=o,e.next=7,ae.blockNotifications();case 7:e.t1=e.sent,(0,e.t0)(e.t1),x(!0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[3,,10,13]])})))).apply(this,arguments)}var B=Object(r.jsx)(ie.d,{style:{marginTop:"10px"},children:Object(r.jsx)(ie.c,{size:"l",style:{padding:"10px"},children:Object(r.jsxs)("div",{className:"notification-request-content",children:[Object(r.jsx)("span",{className:"notification-request-header",children:"\u0423\u0437\u043d\u0430\u0439 \u043f\u0435\u0440\u0432\u044b\u043c \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445 - \u043f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f!"}),Object(r.jsxs)("div",{className:"notification-buttons-wrapper",children:[Object(r.jsx)(fe.a,{size:"m",mode:"commerce",className:"notification-button",onClick:function(){return S.apply(this,arguments)},disabled:k,children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}),Object(r.jsx)(fe.a,{size:"m",mode:"secondary",className:"notification-button",onClick:N,disabled:k,children:"\u041d\u0435 \u0441\u0435\u0439\u0447\u0430\u0441"})]}),Object(r.jsx)("span",{className:"notification-request-close",children:Object(r.jsx)($e.a,{onClick:N})}),Object(r.jsx)("span",{className:"notification-request-subtext",children:"\u0412\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435"})]})})});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{text:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",onBackButtonClick:n}),Object(r.jsxs)(be.a,{header:Object(r.jsx)(Ke.a,{mode:"secondary",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),children:[Object(r.jsx)(he.a,{indicator:Object(r.jsx)(He.a,{mode:"primary",children:j}),children:"\u0412\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(he.a,{indicator:Object(r.jsx)(He.a,{mode:"primary",children:b}),children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(he.a,{indicator:Object(r.jsx)(He.a,{mode:"primary",children:u}),children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u043e\u0447\u043a\u043e\u0432:"})]}),!y&&g,y&&B,O&&Object(r.jsx)(ie.f,{className:"subscribe-later",children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043c\u043e\u0436\u043d\u043e \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435"}),k&&Object(r.jsx)(Ee,{})]})}et.defaultProps={user:null,battle:null};var tt=et,nt=n(386),rt=n(387),at=function(e){Object(g.a)(n,e);var t=Object(S.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return n}(P({id:I,firstName:E.a.String,lastName:E.a.String,photoUrl:E.a.String,score:R},"ScoreboardUser"));n(372);var ct=function(e){var t=e.rank,n=e.score,a=e.photoUrl,c=e.firstName,i=e.lastName;return Object(r.jsx)(ie.q,{before:Object(r.jsx)(ie.e,{children:t}),after:n,children:Object(r.jsxs)("div",{className:"scoreboard-item",children:[Object(r.jsx)(ie.a,{size:40,src:a}),Object(r.jsxs)("div",{className:"scoreboard-item-name",children:[c," ",i]})]})})},it="forever",ot="monthly";var st=function(e){var t=e.user,n=void 0===t?null:t,c=Object(a.useState)([]),i=Object(f.a)(c,2),o=i[0],s=i[1],u=Object(a.useState)(!1),j=Object(f.a)(u,2),b=j[0],p=j[1],h=Object(a.useState)(it),O=Object(f.a)(h,2),x=O[0],v=O[1],m=Object(a.useState)(!1),k=Object(f.a)(m,2),w=k[0],g=k[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s([]),p(!0),e.next=4,y.get("".concat(x,"_scoreboard"));case 4:t=e.sent,r=at.fromObject(Object(z.a)({},n)),g(Boolean(t.find((function(e){return e.id===r.id})))),s(t),p(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",showBackButton:!1}),Object(r.jsx)(ie.h,{vertical:"top",children:Object(r.jsxs)(ie.u,{children:[Object(r.jsx)(ie.v,{selected:x===it,onClick:function(){return v(it)},children:"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f"}),Object(r.jsx)(ie.v,{selected:x===ot,onClick:function(){return v(ot)},children:"\u0417\u0430 \u043c\u0435\u0441\u044f\u0446"})]})}),Object(r.jsx)(ie.f,{children:Object(r.jsxs)(ie.i,{style:{paddingTop:"20px"},children:[!b&&Object(r.jsxs)(ie.l,{children:[o.map((function(e,t){var n=e.id,a=e.firstName,c=e.lastName,i=e.photoUrl,o=e.score;return Object(r.jsx)(ct,{rank:t+1,score:o,photoUrl:i,firstName:a,lastName:c},n)})),!w&&Object(r.jsx)(ct,{rank:x===it?n.foreverRank:n.monthlyRank,score:x===it?n.score:n.monthlyScore,photoUrl:n.photoUrl,firstName:n.firstName,lastName:n.lastName})]}),b&&Object(r.jsx)(Ee,{})]})})]})};n(373);var ut=function(e){var t=e.onGoBack,n=e.onChoose;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ne,{text:"\u0422\u0438\u043f \u0438\u0433\u0440\u044b",onBackButtonClick:t}),Object(r.jsxs)(ie.f,{children:[Object(r.jsx)(ie.j,{mode:"primary",children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0438\u043f \u0438\u0433\u0440\u044b:"}),Object(r.jsxs)("div",{className:"choose-game-type-body",children:[Object(r.jsx)(ie.b,{size:"l",onClick:function(){return n(G)},children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(r.jsx)(ie.b,{size:"l",onClick:function(){return n(q)},children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"})]})]})]})},lt=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(Object(r.jsx)(b.a,{})),o=Object(f.a)(i,2),s=o[0],u=o[1],j=Object(a.useState)("game"),p=Object(f.a)(j,2),O=p[0],x=p[1],v=Object(a.useState)("home"),m=Object(f.a)(v,2),k=m[0],w=m[1],y=Object(a.useState)(null),g=Object(f.a)(y,2),S=g[0],N=g[1],T=Object(a.useState)(null),B=Object(f.a)(T,2),C=B[0],E=B[1];function U(e){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.fetchUserData();case 3:if(n=e.sent,c(n),!t){e.next=12;break}if(n.notificationsStatus!==M.ALLOW||ae.areNotificationsEnabledOnVkSide){e.next=12;break}return e.t0=c,e.next=10,ae.blockNotifications();case 10:e.t1=e.sent,(0,e.t0)(e.t1);case 12:te(n.id,n.vkId);case 13:return e.prev=13,u(null),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,,13,16]])})))).apply(this,arguments)}Object(a.useEffect)((function(){Q.isProductionMode&&ce.a({dsn:"https://ae49049c58d94887bed337d523675ca6@o158161.ingest.sentry.io/5554359",beforeSend:function(e,t){if(e.exception){var n=t&&t.originalException&&t.originalException instanceof Error&&t.originalException.message?t.originalException.message:"";u(Object(r.jsxs)(h.a,{actions:[{mode:"default",title:"\u041e\u041a",autoclose:!0}],onClose:function(){return u(null)},children:[Object(r.jsx)("h2",{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 =("}),n&&Object(r.jsx)("p",{className:"error-message",children:n}),Object(r.jsx)("p",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437"})]}))}return e}}),ne()}),[]),Object(a.useEffect)((function(){U(!0)}),[]);var P=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le.getBattle(t.id);case 2:n=e.sent,N(n),w("results"),re("finish-game"),X.reachGoal("conversion"),U(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return w("home")},R=function(){w("choose-game-type")},I=function(e){e!==C&&E(e),w("battle"),re("start-game",{type:e})};return Object(r.jsxs)(ie.g,{activeStory:O,tabbar:Object(r.jsxs)(ie.s,{children:[Object(r.jsx)(ie.t,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",selected:"game"===O,onClick:function(){x("game"),w("home")},children:Object(r.jsx)(nt.a,{})}),Object(r.jsx)(ie.t,{text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",selected:"scoreboard"===O,onClick:function(){x("scoreboard"),w("scoreboard-home")},children:Object(r.jsx)(rt.a,{})})]}),children:[Object(r.jsxs)(ie.w,{id:"game",activePanel:k,popout:s,children:[Object(r.jsx)(ie.m,{id:"home",children:Object(r.jsx)(Pe,{user:n,onStartBattle:R,onUpdateUser:function(e){return c(e)}})}),Object(r.jsx)(ie.m,{id:"choose-game-type",children:Object(r.jsx)(ut,{onGoBack:F,onChoose:I})}),Object(r.jsx)(ie.m,{id:"battle",children:Object(r.jsx)(De,{onGoBack:R,onFinishGame:P,gameType:C})}),Object(r.jsx)(ie.m,{id:"results",children:Object(r.jsx)(tt,{user:n,onRetry:function(){return I(C)},onGoBack:F,battle:S,onUpdateUser:function(e){return c(e)}})})]}),Object(r.jsx)(ie.w,{id:"scoreboard",activePanel:k,popout:s,children:Object(r.jsx)(ie.m,{id:"scoreboard-home",children:Object(r.jsx)(st,{user:n})})})]})},dt=n(388);function ft(e){var t=e.children;return Q.isProductionMode?Object(r.jsx)(dt.a,{fallback:function(e){var t=e.error,n=e.componentStack,a=e.resetError;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438:"}),Object(r.jsx)("p",{children:t.message}),Object(r.jsx)("p",{children:n}),Object(r.jsx)(fe.a,{onClick:a,children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},children:t}):t}s.a.send("VKWebAppInit"),s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=r.scheme||"client_light",document.body.attributes.setNamedItem(a)}})),Object(i.render)(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ft,{children:Object(r.jsx)(lt,{})})}),document.getElementById("root")),Q.isProductionMode||Promise.all([n.e(3),n.e(4)]).then(n.bind(null,392))}},[[378,1,2]]]);
//# sourceMappingURL=main.3910fd88.chunk.js.map