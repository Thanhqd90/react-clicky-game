(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(75)},29:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(16),r=n.n(a),i=(n(29),n(23)),s=n(9),l=n(10),u=n(12),h=n(11),d=n(13),m=n(5),g=n(3),f=n(22),v=(n(71),function(e){return c.a.createElement(m.Col,{s:6,m:4,l:3},c.a.createElement(m.CardPanel,{onClick:function(){return e.clickHandler(e.icon.iconName)},className:"hoverable black lighten-4 white-text center"+(!1===e.correct?" shake":"")},c.a.createElement(f.a,{icon:e.icon})))}),w=(n(73),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"renderMessage",value:function(e,t){var n,o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a?o="":void 0===e?(n="Click an image to begin",o=""):(n=t?"You win the game!!!":e?"You guessed correctly!":"You guessed incorrectly",o=e?"correct":"incorrect"),window.clearTimeout(this.timeout),!a&void 0!==e&&(this.timeout=window.setTimeout(this.renderMessage,t?3e3:1e3,t?void 0:e,!1,!0)),c.a.createElement("li",{key:Math.random(),className:o},n)}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",null,c.a.createElement("ul",{className:"center navList"},c.a.createElement("li",{className:"logo"},"Memory Click"),this.renderMessage(this.props.correct,this.props.gameWon),c.a.createElement("li",null,"Score: ",this.props.score," | High Score: ",this.props.highScore))))}}]),t}(o.Component)),k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={icons:[g.f,g.b,g.i,g.c,g.d,g.a,g.e,g.h,g.g,g.j,g.k,g.l].sort(n.randomize),clicked:[],score:0,highScore:0,correct:void 0,gameWon:!1},n.randomize=function(e,t){return Math.random()>.5?-1:1},n.clickHandler=function(e){if(-1===n.state.clicked.indexOf(e)){var t=n.state.clicked.length+1,o=t===n.state.icons.length?[]:[].concat(Object(i.a)(n.state.clicked),[e]);n.setState({icons:n.state.icons.sort(n.randomize),clicked:o,score:t,highScore:Math.max(n.state.highScore,t),correct:!0,gameWon:t===n.state.icons.length})}else n.setState({icons:n.state.icons.sort(n.randomize),clicked:[],score:0,correct:!1,gameWon:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement(m.Row,null,c.a.createElement(w,{correct:this.state.correct,gameWon:this.state.gameWon,score:this.state.score,highScore:this.state.highScore}),c.a.createElement(m.Col,{s:12},c.a.createElement(m.CardPanel,{className:"center"},c.a.createElement("h5",null,"Click on an image to earn points, but don't click on the same one twice"))))),c.a.createElement("div",{className:"container"},c.a.createElement(m.Row,null,this.state.icons.map(function(t){return c.a.createElement(v,{correct:e.state.correct,key:t.iconName,icon:t,clickHandler:e.clickHandler})}))))}}]),t}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(c.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-clicky-game","/service-worker.js");p?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):E(e)})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.b70fcf6d.chunk.js.map