(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),c=n.n(o),r=(n(16),n(17),n(1)),i=n(2),s=n(3),d=n(5),u=n(4),m=n(6),f=n(9),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:""},n.handleSubmit=function(e){e.preventDefault(),(0,n.props.onSubmit)(n.state.title),n.setState({title:""})},n.handleChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(f.a)({},a,l))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"new-todo",htmlFor:"new-todo-title"},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChange,value:this.state.title,name:"title",type:"text"})),l.a.createElement("button",{type:"submit"},"submit"))}}]),t}(l.a.Component),h=function(e){var t=e.item,n=e.toggle,a=e.deleteTodo,o=t.id,c=t.title,r=t.completed;return l.a.createElement("li",{className:"todo"},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:o,onChange:function(){return n(o)},checked:r}),l.a.createElement("label",{htmlFor:"todo-2"},c),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(o)}}),l.a.createElement("p",null,r)))};h.defaultProps={toggle:null};var b=h,E=function(e){var t=e.handleFilterBy;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return t("Active")},href:"#/",className:"selected"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",onClick:function(){return t("All")}},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",onClick:function(){return t("Completed")}},"Completed")))},g=function(e,t){if("All"===t)return console.log(t),e;var n={Active:function(e){return!e.completed},Completed:function(e){return e.completed}}[t];return e.filter(n)},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],sortField:"",todosVisible:[],isCompletedHide:0},n.addTodo=function(e){n.setState(function(t){return{todos:[].concat(Object(r.a)(t.todos),[{title:e,id:Date.now(),completed:!1}]),todosVisible:[].concat(Object(r.a)(t.todos),[{title:e,id:Date.now(),completed:!1}]),completed:t.completed}})},n.handleFilterBy=function(e){n.setState(function(t){return{todosVisible:g(t.todos,e),sortField:e}})},n.handleToggle=function(e){n.setState(function(t){var n=t.todosVisible.find(function(t){return t.id===e});return n.completed=!n.completed,n.completed?{isCompletedHide:1}:{todosVisible:t.todosVisible}})},n.handleChackAll=function(e){var t=e.target.checked;n.setState(function(e){var n=Object(r.a)(e.todos);return n.forEach(function(e){return e.completed=t}),{todos:n}})},n.deleteTodo=function(e){var t=n.state.todos,a=t.findIndex(function(t){return t.id===e});t.splice(a,1),n.setState(function(e){return{todosVisible:Object(r.a)(t)}})},n.destroyAllComplete=function(){var e=n.state.todos.filter(function(e){return!e.completed});n.setState(function(t){return{todos:e}}),n.setState(function(e){return{todosVisible:g(e.todos,n.state.sortField)}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todosVisible;return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(p,{onSubmit:this.addTodo})),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{type:"checkbox",className:"toggle-all",id:"toggle-all",checked:!t.some(function(e){return!e.completed}),onChange:this.handleChackAll}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},t.map(function(t){return l.a.createElement(b,{key:t.id,item:t,toggle:e.handleToggle,deleteTodo:e.deleteTodo})}))),l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length,"\n            items left")),l.a.createElement("ul",{className:"filters"},l.a.createElement(E,{handleFilterBy:this.handleFilterBy})),l.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:this.destroyAllComplete},this.state.isCompletedHide>0&&"Clear completed")))}}]),t}(l.a.Component);c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.bdc3b880.chunk.js.map