(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{41:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(16),o=e.n(r),a=e(7),i=e(4),u=e(2),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(c.jsxs)("li",{children:[n.content,Object(c.jsx)("button",{onClick:e,children:r})]})},j=e(3),f=e.n(j),d="/api/notes",l=function(){var t=f.a.get(d),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},b=function(t){return f.a.post(d,t).then((function(t){return t.data}))},p=function(t,n){return f.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(u.useState)([]),n=Object(i.a)(t,2),e=n[0],r=n[1],o=Object(u.useState)(""),j=Object(i.a)(o,2),f=j[0],d=j[1],h=Object(u.useState)(!1),m=Object(i.a)(h,2),O=m[0],v=m[1];Object(u.useEffect)((function(){l().then((function(t){r(t)}))}),[]);var x=O?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return v(!O)},children:["show ",O?"important":"all"]})}),Object(c.jsx)("ul",{children:x.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});p(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){alert("the note '".concat(n.content,"' was already deleted from server")),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5};b(n).then((function(t){r(e.concat(t)),d("")}))},children:[Object(c.jsx)("input",{value:f,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]})]})};o.a.render(Object(c.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.421cca82.chunk.js.map