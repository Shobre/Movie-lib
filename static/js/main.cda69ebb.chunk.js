(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),l=n.n(i),c=(n(15),n(4)),s=n(5),r=n(8),m=n(6),u=n(9),h=n(1),v=n(7),d=n.n(v),p=(n(17),"ee7eedf5"),f="http://www.omdbapi.com/?",b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).getMovie=function(){fetch(f+"t=".concat(n.state.movie,"&plot=full&apikey=").concat(p)).then(function(e){return e.json()}).then(function(e){console.log(e);var t=n.state.movies;t.push(e),n.setState({movies:t,movieInfo:e}),console.log(n.state.movies)})},n.state={movie:"",movies:[],movieInfo:""},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n.getByTitle=f+"t=".concat(n.state.movie,"&plot=full&apikey=").concat(p),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({movie:e.target.value})}},{key:"handleSubmit",value:function(e){this.getMovie(),console.log(this.state.movie),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"})),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Search title:",o.a.createElement("input",{type:"text",value:this.state.movie,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("h1",null,this.state.movieInfo.Title),o.a.createElement("p",null,this.state.movieInfo.Plot))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.cda69ebb.chunk.js.map