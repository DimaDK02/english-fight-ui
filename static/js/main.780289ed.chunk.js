(this["webpackJsonpenglish-fight-ui"]=this["webpackJsonpenglish-fight-ui"]||[]).push([[0],{387:function(e,t,n){},388:function(e,t,n){},389:function(e,t,n){},390:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);n(260),n(286),n(288),n(289),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328);var r=n(2),a=n(1),c=n.n(a),o=n(169),i=n(46),s=n.n(i),u=n(9),l=n.n(u),d=n(18),p=n(53),f=n(183),j=n.n(f),b=n(180),h=n.n(b),v=n(182),O=n.n(v),m=(n(338),n(72)),x=n.n(m),k=n(57),w=n.n(k),y=n(83),g=n.n(y),B=n(75),S=n.n(B),T=n(97),N=n.n(T),A=n(172),E=n.n(A),P=n(23),C=n(64),M=n(171),Q=n.n(M),U=n(170),F=n.n(U);var q=function(){return Object(C.e)()===C.a?Object(r.jsx)(F.a,{}):Object(r.jsx)(Q.a,{})};function G(e){var t=e.panelHeaderProps,n=e.onBackButtonClick,a=e.text,c=e.showBackButton,o=Object(P.a)({},t);return o.left=c?Object(r.jsx)(C.c,{onClick:n,children:Object(r.jsx)(q,{})}):void 0,Object(r.jsx)(C.b,Object(P.a)(Object(P.a)({},o),{},{children:a}))}G.defaultProps={panelHeaderProps:{},showBackButton:!0,onBackButtonClick:function(){}};var I=function(e){var t=e.id,n=e.onStartBattle,a=e.fetchedUser;return Object(r.jsxs)(x.a,{id:t,children:[Object(r.jsx)(G,{text:"Language fight",showBackButton:!1}),a&&Object(r.jsx)(g.a,{children:Object(r.jsx)(S.a,{before:a.photoUrl?Object(r.jsx)(E.a,{src:a.photoUrl}):null,description:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u043a\u043e\u0432 - ".concat(a.score),children:"".concat(a.firstName," ").concat(a.lastName)})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(N.a,{children:Object(r.jsx)(w.a,{size:"xl",onClick:n,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0431\u043e\u0439!"})})})]})};I.defaultProps={fetchedUser:null};var D=I,z=n(34),W=n(63),H=n(173),R=n(127),_=n(174),J=n.n(_),K=function(){function e(){Object(z.a)(this,e)}return Object(W.a)(e,null,[{key:"post",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,o,i,s,u,d,p=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:{},c=a.sendToken,o=void 0===c||c,i=a.expand,s=void 0===i?"":i,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:o,method:"POST",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,o,i,s,u,d,p=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:{},c=a.sendToken,o=void 0===c||c,i=a.expand,s=void 0===i?"":i,u=a.Model,d=void 0===u?null:u,t.abrupt("return",e.send(n,{data:e.convertDataToBackendFormat(r),sendToken:o,method:"PATCH",expand:s,Model:d}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c,o,i,s=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},a=r.expand,c=void 0===a?"":a,o=r.Model,i=void 0===o?null:o,t.abrupt("return",e.send(n,{sendToken:!0,method:"GET",expand:c,Model:i}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"send",value:function(){var t=Object(d.a)(l.a.mark((function t(n,r){var a,c,o,i,s,u,d,p,f,j;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.data,c=r.sendToken,o=r.method,i=r.expand,s=r.Model,u=void 0===s?null:s,d=new URLSearchParams,i&&(p=J()(i).join(","),d.append("expand",p)),f={headers:e.createHeaders({sendToken:c})},"GET"!==o&&(f.mode="cors",f.body=JSON.stringify(a)),f.method=o,t.next=8,Object(H.timeout)(fetch(e.createFullUrl(n,d),f),1e4);case 8:return j=t.sent,t.abrupt("return",e.processResponse(j,u));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createHeaders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sendToken,r={Accept:"application/json","Content-Type":"application/json"};return n&&(r.Authorization=e.getAuthorizationHeader()),r}},{key:"getAuthorizationHeader",value:function(){var e=window.location.search.slice(1);return"QueryString ".concat(e)}},{key:"createFullUrl",value:function(t,n){var r=e.removeTrailingSlash("http://127.0.0.1:8000/api"),a="".concat(r,"/").concat(t);return n&&String(n)&&(a+="?".concat(String(n))),a}},{key:"processResponse",value:function(){var t=Object(d.a)(l.a.mark((function t(n){var r,a,c=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=c.length>1&&void 0!==c[1]?c[1]:null,!(n.status>=500&&n.status<600)){t.next=3;break}throw new Error("\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 3:return t.prev=3,t.next=6,n.json();case 6:a=t.sent,t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(3),new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");case 12:if(n.ok){t.next=16;break}if(!a.detail){t.next=15;break}throw new Error(a.detail);case 15:throw new Error("\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f");case 16:return t.abrupt("return",e.convertDataToFrontendFormat(a,r));case 17:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"convertDataToBackendFormat",value:function(e){return Object(R.toSnake)(e)}},{key:"convertDataToFrontendFormat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(R.toCamel)(e);return t?t.fromObject(n):n}},{key:"removeTrailingSlash",value:function(e){return e.endsWith("/")?e.slice(0,-1):e}}]),e}(),L=n(74),V=n(73),$=n(96),X=n(175),Y=n.n(X),Z=n(12),ee=n.n(Z);function te(e){return function(t){return Y()(t,e)}}function ne(e,t){return this.constructor.update(this,Object($.a)({},e,{$set:t}))}function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object(Z.struct)(e,{strict:!0,name:t,defaultProps:n});return r.fromObject=te(r),r.prototype.set=ne,r}var ae=Object(Z.irreducible)("Null",(function(e){return null===e})),ce=Object(Z.refinement)(ee.a.Number,(function(e){return e>=0}),"PositiveNumber"),oe=Object(Z.refinement)(ee.a.Number,(function(e){return e>=1}),"ID"),ie=function(e){Object(L.a)(n,e);var t=Object(V.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return n}(re({id:oe,vkId:oe,firstName:ee.a.String,lastName:ee.a.String,photoUrl:ee.a.String,score:ce},"User")),se=function(){function e(){Object(z.a)(this,e)}return Object(W.a)(e,null,[{key:"fetchUserData",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[s.a.send("VKWebAppGetUserInfo"),K.get("user")],e.next=3,Promise.all(t);case 3:return n=e.sent,r=Object(p.a)(n,2),a=r[0],c=r[1],e.abrupt("return",ie.fromObject({id:c.id,vkId:c.vkId,firstName:a.first_name,lastName:a.last_name,photoUrl:a.photo_200,score:c.score}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ue=function(e){Object(L.a)(n,e);var t=Object(V.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return n}(re({id:oe,questionWord:ee.a.String,answerWords:ee.a.list(ee.a.String),correctAnswer:ee.a.union([ae,ee.a.String]),selectedAnswer:ee.a.union([ae,ee.a.String]),isCorrect:ee.a.Boolean},"Question")),le=ee.a.union([ue,ee.a.Number]);le.dispatch=function(e){return"number"===typeof e?ee.a.Number:ue};var de=function(e){Object(L.a)(n,e);var t=Object(V.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return n}(re({id:oe,questions:ee.a.list(le),points:ee.a.Number},"Game")),pe=function(){function e(){Object(z.a)(this,e)}return Object(W.a)(e,null,[{key:"startBattle",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K.post("game",{},{expand:"questions",Model:de}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"submitQuestion",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K.patch("question/".concat(t.id),{selectedAnswer:t.selectedAnswer},{Model:ue}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBattle",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K.get("game/".concat(t),{expand:"questions",Model:de}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),fe=(n(387),n(176));function je(e){var t=e.questionWord,n=e.answerWords,a=e.selectedAnswer,c=e.isCorrect,o=e.correctAnswer,i=e.onSelectAnswer;return Object(r.jsxs)(N.a,{children:[Object(r.jsxs)("p",{children:["\u0421\u043b\u043e\u0432\u043e \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c: ",t]}),Object(r.jsx)("p",{children:" \u0412\u044b\u0431\u0435\u0440\u0438 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439:"}),n.map((function(e){var t=e===o,n=!c&&e===a,s=Object(fe.a)("answer-button",{correct:t,failure:n});return Object(r.jsx)(w.a,{size:"xl",mode:"primary",stretched:!0,className:s,onClick:function(){return!a&&i(e)},children:e},e)}))]})}je.defaultProps={correctAnswer:null,selectedAnswer:null,isCorrect:!1};var be=je,he=function(){function e(){Object(z.a)(this,e)}return Object(W.a)(e,null,[{key:"waitForTimeout",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"initMetrika",value:function(){var e,t,n,r,a;e=window,t=document,n="script",e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,r=t.createElement(n),a=t.getElementsByTagName(n)[0],r.async=1,r.src="https://mc.yandex.ru/metrika/tag.js",a.parentNode.insertBefore(r,a),ym(70656700,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}}]),e}();he.isProductionMode=!0;var ve=n(129),Oe="setBattle",me="updateQuestion",xe="goToNextQuestion",ke={battle:null,activeQuestion:null,hasNextQuestion:!1};function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:var n=t.payload,r=n.questions;return Object(P.a)(Object(P.a)({},e),{},{battle:n,activeQuestion:r[0],hasNextQuestion:r.length>1});case me:var a=t.payload,c=e.battle.questions,o=c.findIndex((function(e){return e.id===a.id})),i=[].concat(Object(ve.a)(c.slice(0,o)),[a],Object(ve.a)(c.slice(o+1)));return Object(P.a)(Object(P.a)({},e),{},{battle:Object(P.a)(Object(P.a)({},e.battle),{},{questions:i}),activeQuestion:a});case xe:var s=e.battle.questions,u=s.findIndex((function(t){return t.id===e.activeQuestion.id}));if(u===s.length-1)throw new Error("\u0412\u044b \u0443\u0436\u0435 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435");var l=u+1;return Object(P.a)(Object(P.a)({},e),{},{activeQuestion:s[l],hasNextQuestion:l<s.length-1});default:return e}}var ye=function(e){var t=e.id,n=e.onGoBack,c=e.onFinishGame,o=Object(a.useState)(!1),i=Object(p.a)(o,2),s=i[0],u=i[1],f=Object(a.useReducer)(we,ke),j=Object(p.a)(f,2),b=j[0],h=j[1],v=b.battle,O=b.activeQuestion,m=b.hasNextQuestion;Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,pe.startBattle();case 4:t=e.sent,h({type:Oe,payload:t});case 6:return e.prev=6,u(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.set("selectedAnswer",t),u(!0),e.prev=2,e.next=5,pe.submitQuestion(n);case 5:r=e.sent,h({type:me,payload:r});case 7:return e.prev=7,u(!1),e.finish(7);case 10:return e.next=12,he.waitForTimeout(2e3);case 12:m?h({type:xe}):c(v);case 13:case"end":return e.stop()}}),e,null,[[2,,7,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(x.a,{id:t,children:[Object(r.jsx)(G,{onBackButtonClick:n,text:"\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),O&&Object(r.jsx)(be,Object(P.a)(Object(P.a)({},O),{},{onSelectAnswer:k})),s&&Object(r.jsx)(C.d,{size:"large"})]})};ye.defaultProps={user:null};var ge=ye,Be=(n(388),n(99)),Se=n.n(Be),Te=n(177),Ne=n.n(Te),Ae=(n(389),n(178)),Ee=n.n(Ae),Pe=n(179),Ce=n.n(Pe);function Me(e){var t=e.id,n=e.onGoBack,a=e.battle,c=e.onRetry,o=a.questions,i=a.points,s=o.filter((function(e){return e.isCorrect})).length,u=o.length-s;return Object(r.jsxs)(x.a,{id:t,children:[Object(r.jsx)(G,{text:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u044f",onBackButtonClick:n}),Object(r.jsxs)(g.a,{header:Object(r.jsx)(Ne.a,{mode:"secondary",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),children:[Object(r.jsx)(S.a,{indicator:Object(r.jsx)(Se.a,{mode:"primary",children:s}),children:"\u0412\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(S.a,{indicator:Object(r.jsx)(Se.a,{mode:"primary",children:u}),children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432:"}),Object(r.jsx)(S.a,{indicator:Object(r.jsx)(Se.a,{mode:"primary",children:i}),children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u043e\u0447\u043a\u043e\u0432:"})]}),Object(r.jsxs)("div",{className:"home-button-wrapper",children:[Object(r.jsx)(w.a,{onClick:n,size:"l",before:Object(r.jsx)(Ee.a,{}),children:"\u0414\u043e\u043c\u043e\u0439"}),Object(r.jsx)(w.a,{onClick:c,size:"l",before:Object(r.jsx)(Ce.a,{}),children:"\u0415\u0449\u0435 \u0440\u0430\u0437"})]})]})}Me.defaultProps={battle:null};var Qe=Me,Ue=n(399),Fe=(n(390),function(){var e=Object(a.useState)("home"),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(p.a)(o,2),u=i[0],f=i[1],b=Object(a.useState)(Object(r.jsx)(h.a,{})),v=Object(p.a)(b,2),m=v[0],x=v[1],k=Object(a.useState)(null),w=Object(p.a)(k,2),y=w[0],g=w[1];Object(a.useEffect)((function(){s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(a)}}))}),[]),Object(a.useEffect)((function(){he.isProductionMode&&(Ue.a({dsn:"https://ae49049c58d94887bed337d523675ca6@o158161.ingest.sentry.io/5554359",beforeSend:function(e,t){if(e.exception){var n=t&&t.originalException&&t.originalException instanceof Error&&t.originalException.message?t.originalException.message:"";x(Object(r.jsxs)(O.a,{actions:[{mode:"default",title:"\u041e\u041a",autoclose:!0}],onClose:function(){return x(null)},children:[Object(r.jsx)("h2",{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 =("}),n&&Object(r.jsx)("p",{className:"error-message",children:n}),Object(r.jsx)("p",{children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0435 \u0440\u0430\u0437"})]}))}return e}}),he.initMetrika())}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.fetchUserData();case 3:t=e.sent,f(t);case 5:return e.prev=5,x(null),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]);var B=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.getBattle(t.id);case 2:n=e.sent,g(n),c("results");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){return c("home")},T=function(){return c("battle")};return Object(r.jsxs)(j.a,{activePanel:n,popout:m,children:[Object(r.jsx)(D,{id:"home",fetchedUser:u,onStartBattle:T}),Object(r.jsx)(ge,{id:"battle",onGoBack:S,user:u,onFinishGame:B}),Object(r.jsx)(Qe,{id:"results",onGoBack:S,onRetry:T,battle:y})]})}),qe=n(404);function Ge(e){var t=e.children;return he.isProductionMode?Object(r.jsx)(qe.a,{fallback:function(e){var t=e.error,n=e.componentStack,a=e.resetError;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438:"}),Object(r.jsx)("p",{children:t.message}),Object(r.jsx)("p",{children:n}),Object(r.jsx)(w.a,{onClick:a,children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})]})},children:t}):t}s.a.send("VKWebAppInit"),Object(o.render)(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ge,{children:Object(r.jsx)(Fe,{})})}),document.getElementById("root")),he.isProductionMode||Promise.all([n.e(3),n.e(4)]).then(n.bind(null,408))}},[[397,1,2]]]);
//# sourceMappingURL=main.780289ed.chunk.js.map