(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(154);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,n,t){"use strict";t.d(n,"c",function(){return d}),t.d(n,"b",function(){return s}),t.d(n,"a",function(){return f});t(159);var a=t(151),r=t.n(a),i=(t(75),t(49),t(162),t(48),t(145));function o(){var e=r()(["\n    width: 60%;\n  "]);return o=function(){return e},e}function l(){var e=r()(["\n    width: 60%;  \n  "]);return l=function(){return e},e}function c(){var e=r()(["\n    width: 60%;\n  "]);return c=function(){return e},e}function m(){var e=r()(["\n    width: 80%;\n  "]);return m=function(){return e},e}var u={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},d={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif",fontSerifCode:"'Fira Mono', monospace"}},s=Object.keys(u).reduce(function(e,n){return e[n]=function(){return Object(i.b)(["@media (min-width:","em){",";}"],u[n]/16,i.b.apply(void 0,arguments))},e},{}),f=i.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:90%;position:relative;"," "," ","  ","  margin:0 auto;"],s.small(m()),s.medium(c()),s.large(l()),s.extraLarge(o()))},149:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return s}),t.d(n,"StaticQuery",function(){return f});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(146),c=t.n(l);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var m=t(150),u=t.n(m);t.d(n,"PageRenderer",function(){return u.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var s=r.a.createContext({}),f=function(e){return r.a.createElement(s.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,n,t){var a;e.exports=(a=t(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},153:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(50),c=t(2),m=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=m},154:function(e,n,t){"use strict";var a=t(7),r=t.n(a),i=t(152),o=t(0),l=t.n(o),c=t(155),m=t.n(c),u=t(149),d=t(147),s=t(145),f=t(158),p=t(160),g=t(161),h=t(148);f.b.add(p.a);var b=s.c.h1.withConfig({displayName:"Menu__Logo",componentId:"gml39b-0"})(["color:#3d3d3d;font-size:1.8rem;margin:0;align-self:flex-start;"]),v=Object(s.c)(u.Link).withConfig({displayName:"Menu__LogoLink",componentId:"gml39b-1"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),y=s.c.div.withConfig({displayName:"Menu__NavBar",componentId:"gml39b-2"})(["flex:1;display:flex;flex-direction:column;@media (min-width:768px){flex-direction:row;justify-content:space-between;.navbar__navigation{align-self:center;line-height:1.2;display:block;.navbar__menu{display:flex;flex-direction:row;margin-top:0px;margin-bottom:0;padding-left:0px;li{margin-left:2.5rem;a{border-bottom:2px solid white;padding:0px;font-size:1.2rem;&.active{color:",";border-bottom:2px solid ",";}&:hover{color:",";border-bottom:2px solid ",";}}}}}.navbar__toggle{display:none;}.navbar__brand{padding:0;align-self:center;}}"],function(e){return e.theme.main.blue},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return e.theme.main.blue},function(e){return Object(h.a)(.3,e.theme.main.blue)}),x=s.c.nav.withConfig({displayName:"Menu__Navigation",componentId:"gml39b-3"})(["display:block;.navbar__toggle{align-self:flex-end;color:grey;position:absolute;top:0;right:0;line-height:0;padding:10px;border:1px solid #ccc;border-radius:3px;margin-top:-10px;}.navbar__menu{font-family:",";display:none;list-style:none;padding-left:15px;margin-top:0px;margin-bottom:0;li{margin-bottom:0;padding-bottom:0;a{text-decoration:none;display:block;margin-bottom:0;padding:10px 0;color:",";text-transform:uppercase;font-size:1.4rem;font-weight:500;&:hover{color:",";}&:active{color:black;}}}}@media (max-width:767px){.navbar__menu{&.is-expanded{display:block;margin-left:0;margin-top:3rem;padding-left:0;li{&:not(:last-child) a{border-bottom:1px solid ",";}}}}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(h.a)(.43,"grey")),w=function(e){return e.isPartiallyCurrent?{className:"active"}:null},E=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).state={isExpanded:!1},n.handleMenuOpen=function(e){e.preventDefault();document.querySelector(".navbar__menu");var t=n.toggleButton,a="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!a),n.setState({isExpanded:!n.state.isExpanded})},n}return r()(n,e),n.prototype.render=function(){var e=this;return l.a.createElement(o.Fragment,null,l.a.createElement(y,null,l.a.createElement(b,{className:"navbar__brand"},l.a.createElement(v,{to:"/","aria-label":"Logo of ivorpad.com"},this.props.siteTitle)),l.a.createElement(x,{className:"navbar__navigation",role:"navigation"},l.a.createElement("a",{role:"button",className:"navbar__toggle","aria-expanded":"false","aria-controls":"menu","aria-label":"Toggle navigation",onClick:this.handleMenuOpen,href:"#menu",ref:function(n){return e.toggleButton=n}},l.a.createElement(g.a,{icon:"bars"})),l.a.createElement("ul",{id:"menu",className:"navbar__menu "+(this.state.isExpanded?"is-expanded":"")},l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/",activeClassName:"active",role:"menuitem"},"Home")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/work",getProps:w,component:"work",activeClassName:"active",role:"menuitem"},"Work")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/writing",getProps:w,component:"writing",activeClassName:"active",role:"menuitem"},"Writing")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/about",getProps:w,component:"about",activeClassName:"active",role:"menuitem"},"About")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/tools",component:"tools",activeClassName:"active",role:"menuitem"},"Tools")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/contact",component:"contact",activeClassName:"active",role:"menuitem"},"Contact"))))))},n}(o.Component),_=s.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-0"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),k=function(e){var n=e.siteTitle;e.theme;return l.a.createElement(_,null,l.a.createElement(d.a,null,l.a.createElement(E,{siteTitle:n})))},N=s.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(h.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(h.a)(.2,e.theme.main.black)},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return Object(h.a)(.15,e.theme.main.blue)},function(e){return Object(h.a)(.1,e.theme.main.blue)}),C=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(N,null,l.a.createElement("div",{className:"footer__left"},l.a.createElement("p",null,"© 2018 Ivor Padilla")),l.a.createElement("div",{className:"footer__right"},l.a.createElement("p",null,"Built with ",l.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))},j=t(151),S=t.n(j);function O(){var e=S()(["\n      font-weight: 300;\n    "]);return O=function(){return e},e}function z(){var e=S()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n    line-height: 1.8;\n  }\n\n  p {\n    font-family: ",";\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all .15s linear, border .15s ease-in-out;\n  }\n  .gatsby-highlight code {\n    font-size: 1.4rem;\n    font-family: ",";\n  }\n  code {\n    font-size: 1.6rem;\n    color: ",";\n    background-color: rgba(27,31,35,0.05);\n    border-radius: 3px;\n    padding: 1px 5px;\n    font-family: ",";\n    font-size: 85%;\n\n  }\n  p, li, a, blockquote  {\n    font-weight: ",";\n    ","\n    line-height: 1.8;\n  }\n  .content {\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 400;\n      line-height: 1.5;\n    }\n    h1 { font-size: 3.6rem;  }\n    h2 { font-size: 3rem; }\n    h3 { font-size: 2.4rem; }\n    h4 { font-size: 2.0rem; }\n    h5 { font-size: 1.6rem; }\n    h6 { font-size: 1.4rem; }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return z=function(){return e},e}Object(s.d)(z(),d.c.main.black,d.c.main.fontSansSerif,d.c.main.blue,d.c.main.fontSerifCode,d.c.main.black,d.c.main.fontSerifCode,function(){var e=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];if("undefined"!=typeof navigator){if(navigator.platform)for(;e.length;)if(navigator.platform===e.pop())return!0;return!1}}()?500:300,d.b.medium(O()),Object(h.a)(.3,d.c.main.blue),Object(h.a)(.15,d.c.main.blue),Object(h.a)(.1,d.c.main.blue));var P=s.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),L=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props.children;return l.a.createElement(u.StaticQuery,{query:"1044757290",render:function(n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:""+n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(P,null,l.a.createElement(s.a,{theme:d.c},l.a.createElement(k,{siteTitle:n.site.siteMetadata.title})),l.a.createElement(s.a,{theme:d.c},l.a.createElement(d.a,{className:"main"},e)),l.a.createElement(s.a,{theme:d.c},l.a.createElement(d.a,{className:"footer"},l.a.createElement(C,null)))))},data:i})},n}(l.a.Component);n.a=L}}]);