(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},37:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),i=(t(28),t(30),t(6)),o=t(7),s=t(9),u=t(8),m=t(10),b=t(2),h=t(42),p=t(44),d=t(43),E=t(41),g=t(15),k="HOME",v=function(){return{type:k}},f="PROJECTS",j=function(){return{type:f}},y="ABOUT",O=function(){return{type:y}},N="BURGER",w=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).homeClick=t.homeClick.bind(Object(b.a)(Object(b.a)(t))),t.projectClick=t.projectClick.bind(Object(b.a)(Object(b.a)(t))),t.aboutClick=t.aboutClick.bind(Object(b.a)(Object(b.a)(t))),t.burgerClick=t.burgerClick.bind(Object(b.a)(Object(b.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"homeClick",value:function(){this.props.onNavClick(v)}},{key:"projectClick",value:function(){this.props.onNavClick(j)}},{key:"aboutClick",value:function(){this.props.onNavClick(O)}},{key:"burgerClick",value:function(){this.props.onBurgerClick(!this.props.burger)}},{key:"render",value:function(){var e,a,t,n,l;switch(this.props.active){case k:e="navbar-item is-active",a="navbar-item",t="navbar-item";break;case f:e="navbar-item",a="navbar-item is-active",t="navbar-item";break;case y:e="navbar-item",a="navbar-item",t="navbar-item is-active";break;default:e="navbar-item is-active",a="navbar-item",t="navbar-item"}switch(this.props.burger){case!0:n="navbar-burger burger is-active",l="navbar-menu is-active";break;case!1:n="navbar-burger burger",l="navbar-menu";break;default:n="navbar-burger burger",l="navbar-menu"}return r.a.createElement("div",{className:"hero-head"},r.a.createElement("header",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{onClick:this.burgerClick,className:n,"data-target":"navbarMenuHeroC"},r.a.createElement("span",{"aria-hidden":!this.props.burger}),r.a.createElement("span",{"aria-hidden":!this.props.burger}),r.a.createElement("span",{"aria-hidden":!this.props.burger}))),r.a.createElement("div",{id:"navbarMenuHeroC",className:l},r.a.createElement("div",{className:"navbar-end"},r.a.createElement(h.a,{to:"/"},r.a.createElement("a",{href:"/",onClick:this.homeClick,className:e},"Home")),r.a.createElement(h.a,{to:"/projects"},r.a.createElement("a",{href:"/projects",onClick:this.projectClick,className:a},"Projects")),r.a.createElement(h.a,{to:"/about"},r.a.createElement("a",{href:"/about",onClick:this.aboutClick,className:t},"About me")))))))}}]),a}(n.Component),C=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-foot"},r.a.createElement("nav",{className:"tabs is-boxed is-fullwidth"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/KKJZ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),"Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:kyle_stockmann@yahoo.com?Subject=Hello",target:"_top"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-yahoo"})),"Email")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/kyle-stockmann-694a94166/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-linkedin"})),"Linkedin")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-angellist"})),"Angel List"))))))}}]),a}(n.Component),_=(t(37),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.props.landing(v)}},{key:"render",value:function(){return r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h1",{className:"title"},"Hey, I'm Kyle Stockmann"),r.a.createElement("img",{className:"profileIcon",src:"https://preview.ibb.co/cyTdoV/me.jpg",alt:"pic of Kyle Stockmann",border:"0"}),r.a.createElement("h2",{className:"subtitle"},"Fullstack Developer/ Professional Shyguy"),r.a.createElement("h2",{className:"subtitle"},"Currently looking to build my coding knowledge.")))}}]),a}(n.Component)),B=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.props.projects(j)}},{key:"render",value:function(){return r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h1",{className:"title"},"My Projects"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"subtitle"},"League of Legends Recent players"),r.a.createElement("p",null,"Built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Html"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery")),r.a.createElement("a",{href:"https://ibb.co/iXznFA",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://preview.ibb.co/d8uMaA/LOL.jpg",alt:"league",border:"0"})),r.a.createElement("a",{className:"button is-dark",href:"https://github.com/KKJZ/League-Recent-Players",target:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"subtitle"},"Bartenders Blackbook"),r.a.createElement("p",null,"Built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"JWT(json web token)")),r.a.createElement("a",{href:"https://ibb.co/gYPyNq",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://preview.ibb.co/f1oQ2q/drink.jpg",alt:"drink",border:"0"})),r.a.createElement("a",{className:"button is-dark",href:"https://github.com/KKJZ/Bartenders_Blackbooks",target:"_blank",rel:"noopener noreferrer"},"GitHub Repo")),r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"subtitle"},"Personal Publication"),r.a.createElement("p",null,"Built with:"),r.a.createElement("ul",null,r.a.createElement("li",null,"React"),r.a.createElement("li",null,"React-Router"),r.a.createElement("li",null,"Redux"),r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"JWT(json web token)")),r.a.createElement("a",{href:"https://ibb.co/fwzvHf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://preview.ibb.co/dGfPA0/NewEntry.jpg",alt:"NewEntry",border:"0"})),r.a.createElement("a",{className:"button is-dark",href:"https://github.com/KKJZ/Journal_React",target:"_blank",rel:"noopener noreferrer"},"React Repo")," ",r.a.createElement("br",null),r.a.createElement("a",{className:"express button is-dark",href:"https://github.com/KKJZ/Journal_Backend",target:"_blank",rel:"noopener noreferrer"},"Express.js Repo")))))}}]),a}(n.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"componentWillMount",value:function(){this.props.about(O)}},{key:"render",value:function(){return r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement("h1",{className:"title"},"About me:"),r.a.createElement("h2",{className:"subtitle"},"Born and raised in the Pacific Northwest; I have always enjoyed, biking, hiking, and longboarding but my real passion has always been computers.",r.a.createElement("br",null),"From the first time I played on a computer I just had a drive to learn more about them.",r.a.createElement("br",null),"This couriousity bloomed when I hit high school and start taking programming classes, as well as working with the IT department to keep the school computers maintained. From there I began learning as much as I could about writing code, going as far as reading up on w3schools.com to learn the basics of HTML, CSS, and Javascript. As well as on graduation from high school building my own computer with my graduation money.",r.a.createElement("br",null),"After high school I took a few years off and started working in the food industry.  Now that I have savings and time I decieded to not go the traditional college route and looked into coding bootcamps. I ended up at Thinkful because they were one of the only bootcamps that would work around my work schedule. Thanks to Thinkful, not only do I get to expand my knowledge, but I finally get to turn my passion for computers into a career.")))}}]),a}(n.Component),R=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleNavClick=t.handleNavClick.bind(Object(b.a)(Object(b.a)(t))),t.handleBurgerClick=t.handleBurgerClick.bind(Object(b.a)(Object(b.a)(t))),t.about=t.about.bind(Object(b.a)(Object(b.a)(t))),t.projects=t.projects.bind(Object(b.a)(Object(b.a)(t))),t.landing=t.landing.bind(Object(b.a)(Object(b.a)(t))),t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"handleNavClick",value:function(e){this.props.dispatch(e())}},{key:"handleBurgerClick",value:function(e){this.props.dispatch({type:N,burger:e})}},{key:"about",value:function(e){this.props.dispatch(e())}},{key:"projects",value:function(e){this.props.dispatch(e())}},{key:"landing",value:function(e){this.props.dispatch(e())}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"hero is-success is-fullheight"},r.a.createElement(w,{active:this.props.active,burger:this.props.burger,onBurgerClick:this.handleBurgerClick,onNavClick:this.handleNavClick}),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/about",render:function(a){return r.a.createElement(I,Object.assign({},a,{about:e.about}))}}),r.a.createElement(d.a,{exact:!0,path:"/projects",render:function(a){return r.a.createElement(B,Object.assign({},a,{projects:e.projects}))}}),r.a.createElement(d.a,{path:"/",render:function(a){return r.a.createElement(_,Object.assign({},a,{landing:e.landing}))}}),r.a.createElement(E.a,{to:"/",from:"*"}))),r.a.createElement(C,null))}}]),a}(n.Component),T=Object(g.b)(function(e){return{active:e.navbar.active,burger:e.navbar.burger}})(R),J=t(12),S={active:k,burger:!1};var x=Object(J.c)(Object(J.b)({navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k:return Object.assign({},e,{active:k});case f:return Object.assign({},e,{active:f});case y:return Object.assign({},e,{active:y});case N:return Object.assign({},e,{burger:a.burger});default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g.a,{store:x},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.f8fcbb76.chunk.js.map