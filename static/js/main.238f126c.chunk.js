(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(37)},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),i=(n(22),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),p=(n(24),n(39)),m=n(41),f=n(40),d=n(10),b=(n(26),function(e){var t=e.text,n=e.onClick,a=e.disabled;return o.a.createElement("div",{disabled:a,onClick:n,className:"Button"},t)}),g=function(e){var t=e.text,n=e.onClick,a=e.disabled,c=e.toggle;return o.a.createElement("div",{disabled:a,onClick:n,className:c},t)},v=(n(28),function(e){var t=e.text,n=e.onChange,a=e.disabled;return o.a.createElement("input",{onChange:n,disabled:a,className:"Input"},t)}),E=(n(30),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Results"}," ",this.props.children," ")}}]),t}(a.Component)),j=(n(32),function(e){var t=e.Key,n=e.Title,a=e.Url,c=e.Id,r=e.Type,i=e.onClick;return o.a.createElement("div",{key:t,className:"Thumbnail",type:r,onClick:i},o.a.createElement("h1",null,n),o.a.createElement("img",{src:a,alt:""}),o.a.createElement("p",null,c))}),S=n(38),O="http://www.omdbapi.com/?apikey=ee7eedf5&",y=function(e){return fetch(O+"type=movie&s=".concat(e)).then(function(e){return e.json()}).then(function(e){return console.log(e.Search),e.Search}).catch(function(e){return console.log(e),null})},k=function(e){return fetch(O+"type=series&s=".concat(e)).then(function(e){return e.json()}).then(function(e){return console.log(e.Search),e.Search}).catch(function(e){return console.log(e),null})},C=function(e){return fetch(O+"type=movie&i=".concat(e,"&plot=full")).then(function(e){return e.json()}).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e),null})},I=function(e){return fetch(O+"type=series&i=".concat(e,"&plot=full")).then(function(e){return e.json()}).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e),null})},w=function(e,t){return fetch(O+"type=series&i=".concat(e,"&Season=").concat(t,"&plot=full")).then(function(e){return e.json()}).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e),null})},T=function(e){return fetch(O+"type=episode&i=".concat(e,"&plot=full")).then(function(e){return e.json()}).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e),null})},N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getMovies=function(){y(n.state.input).then(function(e){n.setState({movieInfo:e})})},n.getSeries=function(){k(n.state.input).then(function(e){n.setState({movieInfo:e})})},n.addResults=function(){var e=[];try{e=n.state.movieInfo.map(function(e,t){return o.a.createElement(S.a,{key:t,to:e.Type+"/"+e.imdbID},o.a.createElement(j,{Title:e.Title,Url:e.Poster,Id:e.imdbID,Type:e.Type}))})}catch(t){return console.log(t),o.a.createElement("h1",null,"No results...")}return e},n.state={input:"",toggle:!0,movieInfo:[]},n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(Object(d.a)(n))),n.Toggle=n.Toggle.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleSubmit",value:function(e){this.state.toggle?this.getMovies():this.getSeries(),e.preventDefault()}},{key:"Toggle",value:function(){this.setState(function(e){return{toggle:!e.toggle}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{text:this.state.toggle?"Movies":"Series",onClick:this.Toggle,toggle:this.state.toggle?"Movies":"Series"}),o.a.createElement(v,{onChange:this.handleChange}),o.a.createElement(b,{text:"Search",onClick:this.handleSubmit}),o.a.createElement(E,null,this.addResults()))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){C(n.props.match.params.id).then(function(e){n.setState({movieInfo:e})})},n.state={movieInfo:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.movieInfo;return o.a.createElement("div",null,o.a.createElement(S.a,{style:{alignSelf:"left",position:"relative",left:"-500px"},to:"/"},"<<< BACK <<<"),o.a.createElement("h1",null,e.Title),o.a.createElement("img",{src:e.Poster,alt:""}),o.a.createElement("p",null,e.Plot))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).createEpisodeList=function(){var e=[];try{e=n.props.episodes.map(function(e,t){return o.a.createElement(S.a,{key:t,to:"/Series/"+n.props.id+"/Season="+n.props.i+"/Episode="+t+"/"+e.imdbID},o.a.createElement("div",{className:""},o.a.createElement("h1",null,e.Title)))})}catch(t){return console.log(t),o.a.createElement("div",null,"No episodes...")}return e},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.createEpisodeList())}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){I(n.props.match.params.id).then(function(e){n.setState({seriesInfo:e})}),w(n.props.match.params.id,n.state.selectedSeason).then(function(e){n.setState({seasonInfo:e,episodes:e.Episodes})})},n.createSeasonLink=function(){for(var e=[],t=0;t<n.state.seriesInfo.totalSeasons;t++)e.push(o.a.createElement("button",{key:t,value:t+1,onClick:n.selectSeason,style:{margin:10}},t+1));return e},n.showSeason=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Season ",n.state.selectedSeason),o.a.createElement(A,{id:n.props.match.params.id,i:n.state.selectedSeason,episodes:n.state.episodes}))},n.state={seriesInfo:[],selectedSeason:1,seasonInfo:[],episodes:[]},n.selectSeason=n.selectSeason.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"selectSeason",value:function(e){var t=this;w(this.props.match.params.id,e.target.value).then(function(e){t.setState({episodes:e.Episodes})}),this.setState({selectedSeason:e.target.value})}},{key:"render",value:function(){var e=this.state.seriesInfo;return o.a.createElement("div",null,o.a.createElement(S.a,{style:{alignSelf:"left",position:"relative",left:"-500px"},to:"/"},"<<< BACK <<<"),o.a.createElement("h1",null,e.Title),o.a.createElement("img",{src:e.Poster,alt:""}),o.a.createElement("p",null,e.Plot),this.createSeasonLink(),o.a.createElement(E,null,this.showSeason()))}}]),t}(a.Component),L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){T(n.props.match.params.id).then(function(e){n.setState({episodeInfo:e})})},n.state={episodeInfo:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.episodeInfo;return o.a.createElement("div",null,o.a.createElement(S.a,{style:{alignSelf:"left",position:"relative",left:"-500px"},to:"/Series/"+this.props.match.params.id},"<<< BACK <<<"),o.a.createElement("h1",null,e.Title),o.a.createElement("img",{src:e.Poster,alt:""}),o.a.createElement("p",null,e.Plot))}}]),t}(a.Component),R=function(){return o.a.createElement("main",null,o.a.createElement(p.a,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:N}),o.a.createElement(f.a,{exact:!0,path:"/Movie/:id",component:x}),o.a.createElement(f.a,{exact:!0,path:"/Series/:id",component:B}),o.a.createElement(f.a,{exact:!0,path:"/Series/:id/Season=:i/Episode=:e/:eid",component:L}))))},Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:"https://png2.kisspng.com/sh/b3314051ab1bb7f1a65431e1929d9b92/L0KzQYm3UsA2N6ltj5H0aYP2gLBuTgBqa6RmiuY2cHjyhLE0kCR2bJp0ReV5YYLufLa0lQJidqR1eeRuboSwcrLqiBdzd6ZzfJ8AYUe7SYGAgsc1bJY3TpCBNEO0QYO3UcE2OWg9TaICNEe3R4mATwBvbz==/kisspng-picsart-photo-studio-sparkle-transparent-background-5a78907b74de26.6431120115178507474787.png",className:"App-logo",alt:""})),o.a.createElement(R,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.238f126c.chunk.js.map