(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(12),n(4)),u=n(1);var i=function(e){var t=e.value,n=e.onClick,a=t?"squares ".concat(t):"squares";return r.a.createElement("button",{className:a,onClick:n},t)},s=function(e){var t=e.squares,n=e.onClick;return r.a.createElement("div",{className:"board"},t.map((function(e,t){return r.a.createElement(i,{key:t,value:e,onClick:function(){return n(t)}})})))},m=function(){var e=Object(a.useState)([Array(9).fill(null)]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),i=Object(u.a)(l,2),m=i[0],f=i[1],v=Object(a.useState)(!0),E=Object(u.a)(v,2),d=E[0],b=E[1],h=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(u.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}(n[m]),k=d?"X":"O";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h1",null,"Tic Tac Toe")),r.a.createElement(s,{squares:n[m],onClick:function(e){var t=n.slice(0,m+1),a=t[m],r=Object(o.a)(a);h||r[e]||(r[e]=k,c([].concat(Object(o.a)(t),[r])),f(t.length),b(!d))}}),r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",null,r.a.createElement("h3",null,"History"),n.map((function(e,t){if(t>0&&t<=5){var n=t?"Go to move #".concat(t):"Go to Start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return f(e=t),void b(e%2===0);var e}},n))}h&&(alert("Congratulations.. ! ".concat(h," won the Game !")),window.location.reload())}))),r.a.createElement("h3",null,h?function(){alert("Congratulations.. ! ".concat(h," won the Game !")),window.location.reload()}:null),r.a.createElement("h3",null,h?"Winner: "+h:"Next Player: "+k),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return window.location.reload()}},"Clear Game"))))};l.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.67aafe51.chunk.js.map