(this["webpackJsonpreact-food-recipe"]=this["webpackJsonpreact-food-recipe"]||[]).push([[0],{16:function(e,a,t){e.exports=t(41)},21:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),o=t.n(r),i=(t(21),t(2)),s=t.n(i),l=t(14),u=t(3),m=(t(23),function(e){var a=e.search,t=e.onInputChange,n=e.onSearchClick;return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-1"},c.a.createElement("span",{class:"material-icons brand-icon"}," fastfood "),"Food Recipe"),c.a.createElement("div",{class:"input-group w-50 mx-auto"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search your recipe... ",value:a,onChange:t}),c.a.createElement("div",{class:"input-group-append"},c.a.createElement("button",{className:"btn btn-dark",id:"search-btn",onClick:n}," Search Recipe "))))}),p=function(e){var a=e.name,t=e.image,n=e.ingredientLines;return c.a.createElement("div",{className:"card py-2 text-center"},c.a.createElement("img",{src:t,className:"img-fluid w-50 mx-auto rounded-circle"}),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",null,a)),c.a.createElement("ul",{className:"list-group list-group-flush"},n.map((function(e){return c.a.createElement("li",{className:"list-group-item"},e)}))))},d=function(e){var a=e.recipes;return c.a.createElement("div",{className:"card-columns"},a.map((function(e){return c.a.createElement(p,{name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines})})))},f=t(15),h=t.n(f);var g=function(){var e=Object(n.useState)("orange"),a=Object(u.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),p=i[0],f=i[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){var e=Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("73c0e5c1","&app_key=").concat("0a969928d19a0818a506c3e736cfca6a\t"));case 2:a=e.sent,console.log(a),f(a.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(m,{search:t,onInputChange:function(e){r(e.target.value)},onSearchClick:function(){g()}}),c.a.createElement("div",{className:"container"},c.a.createElement(d,{recipes:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac57c680.chunk.js.map