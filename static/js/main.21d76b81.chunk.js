(this["webpackJsonpdemo-dnd"]=this["webpackJsonpdemo-dnd"]||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(1),o=n.n(c),i=(n(12),n(5)),l=n(2),m=(n(13),[{id:"tomi",name:"Tomi",thumb:"/images/tomi.png"},{id:"renan",name:"Renan",thumb:"/images/renan.png"},{id:"michelly",name:"Michelly",thumb:"/images/michelly.png"}]);var s=function(){var e=Object(t.useState)(m),a=Object(i.a)(e,2),n=a[0],c=a[1],o=['<img src="/images/michelly.png" alt="Michelly Thumb">','<img src="/images/renan.png" alt="Renan Thumb">','<img src="/images/tomi.png" alt="Tomi Thumb">'];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"teste de drag & drop"),r.a.createElement(l.a,{onDragEnd:function(e){if(e.destination){var a=Array.from(n),t=a.splice(e.source.index,1),r=Object(i.a)(t,1)[0];a.splice(e.destination.index,0,r),c(a),console.log(a)}}},r.a.createElement(l.c,{droppableId:"characters"},(function(e){return r.a.createElement("ul",Object.assign({id:"w",className:"characters"},e.droppableProps,{ref:e.innerRef}),n.map((function(e,a){var n=e.id,t=e.name,c=e.thumb;return r.a.createElement(l.b,{key:n,draggableId:n,index:a},(function(e){return r.a.createElement("li",Object.assign({id:"char",ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement("div",{className:"characters-thumb"},r.a.createElement("img",{src:c,alt:"".concat(t," Thumb")})),r.a.createElement("p",null,t))}))})),e.placeholder)}))),r.a.createElement("button",{className:"but",onClick:function(){var e=document.querySelectorAll(".characters-thumb"),a=new Array;e.forEach((function(e){a.push(e.innerHTML)})),JSON.stringify(o)===JSON.stringify(a)?alert("Acertou!!!!!!!!"):alert("Errrrrooooouuuuuu!!!!!!!!!"),console.log(a),console.log(o)}},"Finalizar")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.21d76b81.chunk.js.map