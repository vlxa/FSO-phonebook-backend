(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),o=n.n(a),u=n(19),i=n(3),s=n(0),f=function(e){var t=e.name,n=e.number,c=e.removeEntry,r=" ".concat(t," ").concat(n);return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:c,children:"delete"}),r]})},d=function(e){var t=e.addNewEntry,n=e.handleNameChange,c=e.handleNumberChange,r=e.newName,a=e.newNumber;return Object(s.jsxs)("form",{onSubmit:t,children:[Object(s.jsxs)("div",{children:["name:",Object(s.jsx)("input",{placeholder:"Enter name",value:r,onChange:n})]}),Object(s.jsxs)("div",{children:["number:",Object(s.jsx)("input",{placeholder:"Enter number",value:a,onChange:c})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){var t=e.filter,n=e.handleFilterChange;return Object(s.jsx)("div",{children:Object(s.jsx)("input",{placeholder:"Type to filter by name",onChange:n,value:t})})},l=(n(25),function(e){var t=e.message,n="notification";return n+="success"===t.state?" success":" error",Object(s.jsx)("div",{className:n,style:{opacity:t.content?1:0},children:t.content})}),j=n(5),m=n.n(j),h="/api/persons",v={getAll:function(){return m.a.get(h).then((function(e){return e.data}))},create:function(e){return m.a.post(h,e).then((function(e){return e.data}))},remove:function(e){return m.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},update:function(e,t){return m.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))}},O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),j=o[0],m=o[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),p=O[0],x=O[1],g=Object(c.useState)(""),w=Object(i.a)(g,2),y=w[0],C=w[1],N=Object(c.useState)(n),E=Object(i.a)(N,2),k=E[0],S=E[1],T=Object(c.useState)({content:"",state:"info"}),D=Object(i.a)(T,2),A=D[0],F=D[1];Object(c.useEffect)((function(){document.title="Phonebook"}),[]),Object(c.useEffect)((function(){v.getAll().then((function(e){return r(e)}))}),[]);Object(c.useEffect)((function(){if(S(n),""!==y){var e=n.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));S(e)}}),[y,n]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(d,{handleNameChange:function(e){e.preventDefault(),m(e.target.value)},handleNumberChange:function(e){e.preventDefault(),x(e.target.value)},addNewEntry:function(e){e.preventDefault();var t=n.filter((function(e){return e.name===j}));if(1===t.length){if(window.confirm("".concat(j," is allready in the phonebook, update number?"))){var c={name:j,number:p};v.update(t[0].id,c).then((function(e){r(n.map((function(t){return t.id===e.id?e:t})));var t={content:'Updated "'.concat(e.name,'"'),state:"success"};F(t),setTimeout((function(){F({content:"",state:"info"})}),3e3)})).catch((function(e){var t={content:'"'.concat(j,'" no longer present on the server'),state:"error"};F(t),setTimeout((function(){F({content:"",state:"info"})}),3e3)}))}}else if(""===p||""===j)window.alert("Field can't be empty");else{var a={name:j,number:p};v.create(a).then((function(e){r([].concat(Object(u.a)(n),[e]));var t={content:'Added "'.concat(e.name,'"'),state:"success"};F(t),m(""),x(""),setTimeout((function(){F({content:"",state:"info"})}),3e3)})).catch((function(e){var t={content:e.response.data.error,state:"error"};F(t),setTimeout((function(){F({content:"",state:"info"})}),3e3)}))}},newName:j,newNumber:p}),Object(s.jsx)(l,{message:A}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(b,{filter:y,handleFilterChange:function(e){e.preventDefault(),C(e.target.value)}}),k.map((function(e){return Object(s.jsx)(f,{name:e.name,number:e.number,removeEntry:function(){return function(e){var t=n.filter((function(t){return t.id===e}))[0].name;window.confirm("Remove ".concat(t," from phonebook?"))&&v.remove(e).then((function(c){r(n.filter((function(t){return t.id!==e})));var a={content:'Removed "'.concat(t,'"'),state:"success"};F(a),setTimeout((function(){F({content:"",state:"info"})}),3e3)}))}(e.id)}},e.id)}))]})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ccd0d941.chunk.js.map