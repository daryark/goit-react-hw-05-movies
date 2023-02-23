"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[824],{494:function(t,e,n){n.d(e,{M:function(){return c}});n(791);var r=n(689),a=n(87),u=n(184);function c(t){var e=t.films,n=(0,r.TH)();return console.log("location",n),(0,u.jsx)("ul",{children:Boolean(e)&&e.map((function(t){var e=t.title,r=t.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(r),children:e})},r)}))})}},824:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(494),o=n(966),s=n(791),f=n(184);function p(t){var e=t.submit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),u=r[0],c=r[1];return(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u&&(e(u.trim().toLowerCase()),c(""))},children:[(0,f.jsx)("input",{onChange:function(t){c(t.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:u}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})}var l=n(87),v=n(628);function h(t){t.results;var e=(0,s.useState)([]),n=(0,a.Z)(e,2),u=n[0],h=n[1],m=(0,s.useState)(null),d=(0,a.Z)(m,2),x=d[0],w=d[1],g=(0,s.useState)(!1),b=(0,a.Z)(g,2),Z=b[0],y=b[1],_=(0,l.lr)(),k=(0,a.Z)(_,2),j=k[0],S=k[1],C=j.get("q");(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,(0,v.Up)(C);case 4:e=t.sent,h(e),w(null),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w(t.t0.message);case 12:return t.prev=12,y(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}C&&function(){t.apply(this,arguments)}()}),[C]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{submit:function(t){S({q:t}),h([])}}),(0,f.jsx)(i.M,{films:u}),null!==x&&(0,f.jsx)("p",{children:x}),Z&&(0,f.jsx)(o.Z,{})]})}},628:function(t,e,n){n.d(e,{Bt:function(){return p},Up:function(){return o},Y5:function(){return s},fC:function(){return i},y:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"0df85a9f4a0e6a141a9b6b1b0b1aadce"};var i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",l(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",l(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",v(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",h(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",m(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){return t.results.map((function(t){return{id:t.id,title:t.title}}))},v=function(t){var e=t.title,n=t.release_date,r=t.overview,a=t.poster_path,u=t.genres,c=t.popularity;return{title:e,release_date:new Date(n).getFullYear(),overview:r,poster_path:a&&"https://image.tmdb.org/t/p/w300"+a,genres:u.map((function(t){return{name:t.name}})),popularity:c}},h=function(t){return t.cast.map((function(t){var e=t.character,n=t.profile_path;return{character:e,profile_path:n&&"https://image.tmdb.org/t/p/w200"+n,name:t.name}}))},m=function(t){return t.results.map((function(t){return{author:t.author,content:t.content,id:t.id}}))}}}]);
//# sourceMappingURL=824.e6a6cd10.chunk.js.map