(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(151),c=n.n(l),u=n(149),m=n(154),d=n(145),s=n(147),p=n(155),f=n.n(p);function h(){var e=c()(["\n  width: 80%;\n"]);return h=function(){return e},e}var g,b,v=d.c.div.withConfig({displayName:"work-detail__WorkWrapper",componentId:"sc-1ld0fvz-0"})([""," width:100%;margin:0 auto;background:white;border-radius:5px;padding:3rem;box-shadow:0px 3px 0px 0px rgba(0,0,0,0.1);"],s.b.medium(h()));Promise.all([n.e(12),n.e(10)]).then(n.bind(null,301)).then(function(e){g=e.default});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.contentfulWork,t=e.body,n=e.title,a=!1;return b||"undefined"==typeof window||(b=window.innerWidth),this.props.isModal&&b>750&&(a=!0),a&&g?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.PageRenderer,{location:{pathname:"/work"}}),o.a.createElement(f.a,{title:"Ivor | "+n.title}),o.a.createElement(g,{isOpen:!0,location:this.props.location},o.a.createElement("div",{className:"content"},o.a.createElement("h2",null,n.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.childMarkdownRemark.html}})))):o.a.createElement(m.a,null,o.a.createElement(v,{className:"content"},o.a.createElement(f.a,{title:"Ivor | "+n.title}),o.a.createElement("h2",null,n.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.childMarkdownRemark.html}})))},t}(i.Component);n.d(t,"default",function(){return x}),n.d(t,"query",function(){return w});var x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=!1;return"undefined"!=typeof window&&window.___IVORPAD_INITIAL_RENDER_COMPLETE&&(e=!0),o.a.createElement(y,{data:this.props.data,location:this.props.location,isModal:e})},t}(i.Component),w="3303473553"},147:function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return p});n(159);var a=n(151),r=n.n(a),i=(n(75),n(49),n(162),n(48),n(145));function o(){var e=r()(["\n    width: 60%;\n  "]);return o=function(){return e},e}function l(){var e=r()(["\n    width: 60%;  \n  "]);return l=function(){return e},e}function c(){var e=r()(["\n    width: 60%;\n  "]);return c=function(){return e},e}function u(){var e=r()(["\n    width: 80%;\n  "]);return u=function(){return e},e}var m={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},d={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif"}},s=Object.keys(m).reduce(function(e,t){return e[t]=function(){return Object(i.b)(["@media (min-width:","em){",";}"],m[t]/16,i.b.apply(void 0,arguments))},e},{}),p=i.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:90%;position:relative;"," "," ","  ","  margin:0 auto;"],s.small(u()),s.medium(c()),s.large(l()),s.extraLarge(o()))},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(146),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(150),m=n.n(u);n.d(t,"PageRenderer",function(){return m.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(50),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(152),o=n(0),l=n.n(o),c=n(155),u=n.n(c),m=n(149),d=n(147),s=n(145),p=n(158),f=n(160),h=n(161),g=n(148);p.b.add(f.a);var b=s.c.h1.withConfig({displayName:"Menu__Logo",componentId:"gml39b-0"})(["color:#3d3d3d;font-size:1.8rem;margin:0;align-self:flex-start;"]),v=Object(s.c)(m.Link).withConfig({displayName:"Menu__LogoLink",componentId:"gml39b-1"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),y=s.c.div.withConfig({displayName:"Menu__NavBar",componentId:"gml39b-2"})(["flex:1;display:flex;flex-direction:column;@media (min-width:768px){flex-direction:row;justify-content:space-between;.navbar__navigation{align-self:center;line-height:1.2;display:block;.navbar__menu{display:flex;flex-direction:row;margin-top:0px;margin-bottom:0;padding-left:0px;li{margin-left:2.5rem;a{border-bottom:2px solid white;padding:0px;font-size:1.2rem;&.active{color:",";border-bottom:2px solid ",";}&:hover{color:",";border-bottom:2px solid ",";}}}}}.navbar__toggle{display:none;}.navbar__brand{padding:0;align-self:center;}}"],function(e){return e.theme.main.blue},function(e){return Object(g.a)(.3,e.theme.main.blue)},function(e){return e.theme.main.blue},function(e){return Object(g.a)(.3,e.theme.main.blue)}),x=s.c.nav.withConfig({displayName:"Menu__Navigation",componentId:"gml39b-3"})(["display:block;.navbar__toggle{align-self:flex-end;color:grey;position:absolute;top:0;right:0;line-height:0;padding:10px;border:1px solid #ccc;border-radius:3px;margin-top:-10px;}.navbar__menu{font-family:",";display:none;list-style:none;padding-left:15px;margin-top:0px;margin-bottom:0;li{margin-bottom:0;padding-bottom:0;a{text-decoration:none;display:block;margin-bottom:0;padding:10px 0;color:",";text-transform:uppercase;font-size:1.4rem;&:hover{color:",";}&:active{color:black;}}}}@media (max-width:767px){.navbar__menu{&.is-expanded{display:block;margin-left:0;margin-top:3rem;padding-left:0;li{&:not(:last-child) a{border-bottom:1px solid ",";}}}}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(g.a)(.43,"grey")),w=function(e){return e.isPartiallyCurrent?{className:"active"}:null},E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isExpanded:!1},t.handleMenuOpen=function(e){e.preventDefault();document.querySelector(".navbar__menu");var n=t.toggleButton,a="true"===n.getAttribute("aria-expanded");n.setAttribute("aria-expanded",!a),t.setState({isExpanded:!t.state.isExpanded})},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(o.Fragment,null,l.a.createElement(y,null,l.a.createElement(b,{className:"navbar__brand"},l.a.createElement(v,{to:"/","aria-label":"Logo of ivorpad.com"},this.props.siteTitle)),l.a.createElement(x,{className:"navbar__navigation",role:"navigation"},l.a.createElement("a",{role:"button",className:"navbar__toggle","aria-expanded":"false","aria-controls":"menu","aria-label":"Toggle navigation",onClick:this.handleMenuOpen,href:"#menu",ref:function(t){return e.toggleButton=t}},l.a.createElement(h.a,{icon:"bars"})),l.a.createElement("ul",{id:"menu",className:"navbar__menu "+(this.state.isExpanded?"is-expanded":"")},l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/",activeClassName:"active",role:"menuitem"},"Home")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/work",getProps:w,component:"work",activeClassName:"active",role:"menuitem"},"Work")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/writing",getProps:w,component:"writing",activeClassName:"active",role:"menuitem"},"Writing")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/about",getProps:w,component:"about",activeClassName:"active",role:"menuitem"},"About")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/gear",component:"gear",activeClassName:"active",role:"menuitem"},"Gear")),l.a.createElement("li",null,l.a.createElement(m.Link,{to:"/contact",component:"contact",activeClassName:"active",role:"menuitem"},"Contact"))))))},t}(o.Component),_=s.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-0"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),k=function(e){var t=e.siteTitle;e.theme;return l.a.createElement(_,null,l.a.createElement(d.a,null,l.a.createElement(E,{siteTitle:t})))},N=s.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(g.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(g.a)(.2,e.theme.main.black)},function(e){return Object(g.a)(.3,e.theme.main.blue)},function(e){return Object(g.a)(.15,e.theme.main.blue)},function(e){return Object(g.a)(.1,e.theme.main.blue)}),C=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(N,null,l.a.createElement("div",{className:"footer__left"},l.a.createElement("p",null,"© 2018 Ivor Padilla")),l.a.createElement("div",{className:"footer__right"},l.a.createElement("p",null,"Built with ",l.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))},j=n(151),S=n.n(j);function O(){var e=S()(["\n        font-weight: 300;\n      "]);return O=function(){return e},e}function I(){var e=S()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  h1 { font-size: 3.6rem; line-height: 1.5; }\n  h2 { font-size: 30rem; line-height: 1.5; }\n  h3 { font-size: 2.4rem; line-height: 1.5; }\n  h4 { font-size: 2.0rem; line-height: 1.5; }\n  h5 { font-size: 1.6rem; }\n  h6 { font-size: 1.4rem; }\n\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n    line-height: 1.8;\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all .15s linear, border .15s ease-in-out;\n  }\n  code {\n    font-size: 1.4rem\n  }\n  .content {\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 400;\n    }\n    p {\n      font-family: ",";\n      font-weight: ",";\n      ","\n      line-height: 1.8;\n    }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return I=function(){return e},e}Object(s.d)(I(),d.c.main.black,d.c.main.blue,d.c.main.fontSansSerif,function(){var e=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];if("undefined"!=typeof navigator){if(navigator.platform)for(;e.length;)if(navigator.platform===e.pop())return!0;return!1}}()?500:300,d.b.medium(O()),Object(g.a)(.3,d.c.main.blue),Object(g.a)(.15,d.c.main.blue),Object(g.a)(.1,d.c.main.blue));var P=s.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(m.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{title:""+t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(P,null,l.a.createElement(s.a,{theme:d.c},l.a.createElement(k,{siteTitle:t.site.siteMetadata.title})),l.a.createElement(s.a,{theme:d.c},l.a.createElement(d.a,{className:"main"},e)),l.a.createElement(s.a,{theme:d.c},l.a.createElement(d.a,{className:"footer"},l.a.createElement(C,null)))))},data:i})},t}(l.a.Component);t.a=L}}]);