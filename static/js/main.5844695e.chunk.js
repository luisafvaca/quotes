(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),u=n(10),s=n(3),i=n(22),l=n(23),p=n(25),d=n(6),m="QUOTES_RESQUEST_SUCCES",v="QUOTES_RESQUEST_FAILURE",b="QUOTES_RESQUEST_START_REQUEST",E="QUOTE_SAVING",h="IS_COUNTER",f=function(){return{type:b}},O=function(e){return{type:m,data:e}},Q=function(e){return{type:v,data:e}};var j={savedQuotes:[],quote:{},counter:0,quoteError:"",onRequest:!1};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)({},e,{quote:t.data,onRequest:!1});case E:return Object(d.a)({},e,{savedQuotes:Object(p.a)(e.savedQuotes).concat([t.data])});case h:return Object.assign({},e,{counter:e.counter+1});case v:return Object(d.a)({},e,{quoteError:"At moment is not possible get info"});case b:return Object(d.a)({},e,{onRequest:!0});default:return e}},S=Object(s.combineReducers)({quotes:q}),k=(n(35),n(7)),y=n(8),g=n(11),w=n(9),R=n(12),T=n(2),U=n(24),C=n(4),N=n(5),_=(n(37),function(e){function t(){return Object(k.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(y.a)(t,[{key:"createQuotes",value:function(e){return Object(U.a)(function(e,t){return o.a.createElement("div",{className:"card",key:t},o.a.createElement(C.a,{icon:N.a,className:"bookmark"}),o.a.createElement("p",null,'"',e.quote,'"'),o.a.createElement("h3",null,e.author))},e)}},{key:"render",value:function(){var e=this.createQuotes(this.props.allQuotes);return o.a.createElement("div",{className:"cards-wrapper"},e)}}]),t}(a.Component)),G=(n(39),function(e){function t(e){var n;return Object(k.a)(this,t),(n=Object(g.a)(this,Object(w.a)(t).call(this,e))).state={saved:[]},n.onGetQuote=n.onGetQuote.bind(Object(T.a)(Object(T.a)(n))),n.avalibleQuote=n.avalibleQuote.bind(Object(T.a)(Object(T.a)(n))),n.onSaveQuote=n.onSaveQuote.bind(Object(T.a)(Object(T.a)(n))),n.counter=n.counter.bind(Object(T.a)(Object(T.a)(n))),n}return Object(R.a)(t,e),Object(y.a)(t,[{key:"componentWillMount",value:function(){this.props.getQuote()}},{key:"onGetQuote",value:function(e){e.preventDefault(),e.isPropagationStopped(),this.props.getQuote()}},{key:"onSaveQuote",value:function(e,t){e.preventDefault(),e.isPropagationStopped(),this.props.quoteSaving(t)}},{key:"avalibleQuote",value:function(e,t){return console.log(t,"onRequest",e),t?o.a.createElement("div",{className:"quote-zone"},o.a.createElement(C.a,{icon:N.d})):!1===t&&e?o.a.createElement("div",{className:"quote-zone"},o.a.createElement("p",null,e.quote),o.a.createElement("h3",null,e.author)):void 0}},{key:"counter",value:function(){console.log(this.props),this.props.counterFromMap()}},{key:"render",value:function(){var e=this,t=this.props.quotes,n=this.props.onRequest,a=this.props.savedQuotes,r=this.avalibleQuote(t,n);return o.a.createElement("section",{className:"app-wrapper"},o.a.createElement("header",{className:"app-header"},o.a.createElement("label",null,"Get Quote"),r,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("button",{onClick:this.onGetQuote},o.a.createElement(C.a,{icon:N.b})),o.a.createElement("button",{onClick:function(n){return e.onSaveQuote(n,t)}},o.a.createElement(C.a,{icon:N.c}))))),o.a.createElement("div",{class:"seperator-wrapper"},o.a.createElement("div",{class:"seperator gradient"})),o.a.createElement("main",null,o.a.createElement("button",{onClick:this.counter},"Counter"),o.a.createElement(_,{allQuotes:a})))}}]),t}(a.Component)),A=Object(u.b)(function(e){return{quotes:e.quotes.quote,savedQuotes:e.quotes.savedQuotes,onRequest:e.quotes.onRequest}},function(e){return{dispatch:e,getQuote:function(){return e(function(e){e(f()),fetch("https://talaikis.com/api/quotes/random/").then(function(e){return e.json()}).then(function(t){e(O(t))}).catch(function(t){e(Q(t))})})},quoteSaving:function(t){return e({type:E,data:t})},counterFromMap:function(){return e({type:h})}}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=document.getElementById("root"),M=Object(s.createStore)(S,Object(l.composeWithDevTools)(Object(s.applyMiddleware)(i.a)));c.a.render(o.a.createElement(u.a,{store:M},o.a.createElement(A,null)),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.5844695e.chunk.js.map