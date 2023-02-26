"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[458],{1510:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(1087),a=n(7689),u="MovieList_link__+cn-g",s="MovieList_list__yjDCC",c="MovieList_item__tDivI",i=n(184),o=function(e){var t=e.results,n=(0,a.TH)(),o=t.map((function(e){var t=e.id,a=e.title;return(0,i.jsx)(r.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:(0,i.jsx)("li",{className:c,children:(0,i.jsx)("p",{children:a})})},t)}));return(0,i.jsx)("ul",{className:s,children:o})},f=o;o.defaultProps={results:[]}},3458:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(5861),a=n(3433),u=n(9439),s=n(7757),c=n.n(s),i=n(4942),o=n(1413),f=n(2791),l="Seachbar_searchbar__N0PA3",p="Seachbar_form__3xclA",v="Seachbar_button__K6JiL",m="Seachbar_label__yUIQ9",h="Seachbar_input__BFkOO",d=n(8494),b={search:""},_=n(184),g=function(e){var t=e.onSubmit,n=(0,f.useState)((0,o.Z)({},b)),r=(0,u.Z)(n,2),a=r[0],s=r[1],c=a.query;return(0,_.jsx)("header",{className:l,children:(0,_.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault(),t(a.search),s((0,o.Z)({},b))},children:[(0,_.jsxs)("button",{type:"submit",className:v,children:[(0,_.jsx)("span",{className:m,children:"Search"}),(0,_.jsx)(d.Yfv,{})]}),(0,_.jsx)("input",{name:"search",value:c,className:h,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){var t=e.target,n=t.name,r=t.value;s((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,i.Z)({},n,r))}))}})]})})},x=n(1087),y=n(1887),Z=n(1686),w=n(6324),k=n(1510),j="Movies_pagination__BVHIu",N=n(6048),S=n.n(N),C=function(){var e=(0,x.lr)(),t=(0,u.Z)(e,2),n=t[0],s=t[1],i=(0,f.useMemo)((function(){return Object.fromEntries((0,a.Z)(n))}),[n]),o=i.query,l=i.page,p=Number(l)?Number(l):1,v=(0,f.useState)(0),m=(0,u.Z)(v,2),h=m[0],d=m[1],b=(0,f.useState)([]),N=(0,u.Z)(b,2),C=N[0],L=N[1],q=(0,f.useState)(""),M=(0,u.Z)(q,2),P=M[0],B=M[1],D=(0,f.useState)(!1),O=(0,u.Z)(D,2),E=O[0],I=O[1],U=(0,f.useState)(null),A=(0,u.Z)(U,2),F=A[0],H=A[1];(0,f.useEffect)((function(){if(o)try{I(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.vw)(t,o);case 2:n=e.sent,r=n.results,a=n.total_pages,r.length?(d(a),L(r)):(Z.Notify.failure("No found"),d(0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(p,o)}catch(t){H(t.message)}finally{I(!1)}}),[o,p,l]);var R=(0,f.useCallback)((function(e){e!==P?(s({query:e,page:1}),L([]),B(e)):Z.Notify.warning("you have already entered this query!")}),[s,P]);return(0,_.jsxs)("main",{style:{paddingBottom:20},children:[(0,_.jsx)(g,{onSubmit:R}),(0,_.jsx)(k.Z,{results:C}),F&&(0,_.jsxs)("p",{children:["Error",F.message]}),h>1&&(0,_.jsx)(S(),{className:j,breakLabel:"...",nextLabel:">",onPageChange:function(e){s({query:o,page:e.selected+1})},pageRangeDisplayed:3,pageCount:h,previousLabel:"<",renderOnZeroPageCount:null,disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:p-1}),E&&(0,_.jsx)(w.Z,{})]})}},1887:function(e,t,n){n.d(t,{Bt:function(){return l},Mc:function(){return f},Tg:function(){return c},d5:function(){return i},vw:function(){return o}});var r=n(5861),a=n(7757),u=n.n(a),s=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ac91775ba29254b7e75060011bf34a90"}}),c=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,s.get("/trending/".concat("movie","/").concat("week","?page=").concat(t));case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?page=".concat(t,"&query=").concat(n));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=458.75a49203.chunk.js.map