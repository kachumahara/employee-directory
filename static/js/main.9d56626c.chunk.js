(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,a,t){e.exports=t(45)},3:function(e,a,t){},4:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),o=t.n(r),c=t(14),m=t(15),s=t(16),u=t(19),i=t(20),d=t(17),p=t.n(d);t(3);var h=function(){return l.a.createElement("div",{className:"header w-100 text-center"},l.a.createElement("h3",null,"Employee Directory"))},E=(t(4),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation","data-target":"#navbarNav"},l.a.createElement("span",{className:"navbar-toggler-icon"}),">"),l.a.createElement("div",{className:"collapse navbar-collapse row"},l.a.createElement("div",{className:"search-area col-4"})))});var f=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.photo,alt:e.name})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.dob))},v=t(18),b=t.n(v),g=function(){return b.a.get("https://randomuser.me/api/?results=400")},N=(t(44),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={results:[],search:""},e.onSortUp=function(){var a=e.state.results.sort((function(e,a){return e.fullname.localeCompare(a.fullname)}));e.setState({results:a})},e.onSortDown=function(){var a=e.state.results.sort((function(e,a){return a.fullname.localeCompare(e.fullename)}));e.setState({results:a})},e.handleInputChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(c.a)({},n,l.toLowerCase()))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then((function(a){var t=a.data.results.map((function(e){return console.log(e),{fullname:"".concat(e.name.first," ").concat(e.name.last),image:e.picture.medium,email:e.email,phone:e.phone,dob:p()(e.dob.date).format("MM/DD/YYYY"),id:e.registered.date}})).sort((function(e,a){return e.fullname.localeCompare(a.fullname)}));e.setState({results:t})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement(h,null)),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"search",className:"form-control",placeholder:"Search By Name",onChange:this.handleInputChange,value:this.state.search})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col",size:"md-3"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Photo"),l.a.createElement("th",null,"Name",l.a.createElement("button",{onClick:this.onSortUp},l.a.createElement("span",{role:"img","aria-label":"UpArrow",idName:"upBtn"},"\u2b06\ufe0f")),l.a.createElement("button",{onClick:this.onSortDown},l.a.createElement("span",{role:"img","aria-label":"DownArrow",idName:"downBtn"},"\u2b07\ufe0f"))),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"DOB"))),l.a.createElement("tbody",null,this.state.results.filter((function(a){return a.fullname.toLowerCase().includes(e.state.search)})).map((function(e){return l.a.createElement(f,{photo:e.image,name:e.fullname,email:e.email,phone:e.phone,dob:e.dob,id:e.id,key:e.id})})))))))}}]),t}(l.a.Component));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9d56626c.chunk.js.map