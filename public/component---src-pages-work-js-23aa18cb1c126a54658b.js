(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);n(53);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(156),c=n(151),m=n(147),u=n(149),s=n(150),d=n(224),f=n.n(d),p=n(247),g=n.n(p),h=n(160),b=n(163),v=n(162),y=n(296);h.b.add(v.b,y.a);var x=function(e){var t=e.post;return o.a.createElement("div",{className:"card__icons"},t.gitRepoUrl?o.a.createElement("a",{href:""+t.gitRepoUrl,"data-tip":t.isInPrivateRepo?"Private Repository":"",title:"Github"},o.a.createElement(b.a,{icon:["fab","github"]}),t.isInPrivateRepo?o.a.createElement(g.a,{className:"tooltip"}):null):null,t.externalLink?o.a.createElement("a",{href:""+t.externalLink,target:"_blank",rel:"noopener noreferrer",title:"Go to external link"},o.a.createElement(b.a,{icon:"external-link-alt"})):null)},_=n(157),E=n.n(_);n.d(t,"default",function(){return k}),n.d(t,"query",function(){return N});var w=m.c.div.withConfig({displayName:"work__Card",componentId:"sc-1p9ixhj-0"})(["background:white;border-radius:5px;padding:3rem;text-decoration:none;color:",";box-shadow:0px 2px 0px 0px rgba(0,0,0,0.1);&.card__item{a{color:",";&:hover{color:",";}}.card__meta{display:flex;justify-content:space-between;a{border:none;}.card__title{font-weight:bold;font-size:1.8rem;margin-bottom:1rem;}.card__icons{display:flex;a{color:grey;&:hover{color:",";}}svg{margin-left:1.2rem;}}}}.card__content p{font-size:1.6rem;color:",";}.card__tag{color:grey;font-family:",";font-size:1rem;margin-right:1.5rem;}.tooltip{font-family:",";font-size:1rem;}"],function(e){return e.theme.main.black},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(s.a)(.15,"grey"),function(e){return Object(s.a)(.1,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.fontSerif}),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:t.data.allContentfulWork.edges},n}return r()(t,e),t.prototype.render=function(){return o.a.createElement(m.a,{theme:u.c},o.a.createElement(l.a,null,o.a.createElement(E.a,{title:this.props.data.site.siteMetadata.title+" | Work"}),o.a.createElement("div",{className:"card content grid"},this.state.data.map(function(e){var t=e.node;return o.a.createElement(w,{key:t.id,className:"card__item"},o.a.createElement("div",{className:"card__meta"},o.a.createElement(c.Link,{to:"/work/"+t.slug,state:{isInModal:!0}},o.a.createElement("h3",{className:"card__title"},t.title.title)),null!==t.externalLink&&null!==t.gitRepoUrl?o.a.createElement(x,{post:t}):null),o.a.createElement("div",{className:"card__content"},o.a.createElement("p",null,f()(t.body.body,{length:100,omission:" [...]"}))),t.tags&&t.tags.map(function(e,t){return o.a.createElement("span",{key:t,className:"card__tag"},"#",e)}))}))))},t}(i.Component),N="1930624701"},149:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return f});n(161);var a=n(153),r=n.n(a),i=(n(76),n(51),n(164),n(50),n(147));function o(){var e=r()(["\n    width: 60%;\n  "]);return o=function(){return e},e}function l(){var e=r()(["\n    width: 60%;  \n  "]);return l=function(){return e},e}function c(){var e=r()(["\n    width: 60%;\n  "]);return c=function(){return e},e}function m(){var e=r()(["\n    width: 80%;\n  "]);return m=function(){return e},e}var u={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},s={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif"}},d=Object.keys(u).reduce(function(e,t){return e[t]=function(){return Object(i.b)(["@media (min-width:","em){",";}"],u[t]/16,i.b.apply(void 0,arguments))},e},{}),f=i.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:90%;position:relative;"," "," ","  ","  margin:0 auto;"],d.small(m()),d.medium(c()),d.large(l()),d.extraLarge(o()))},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var m=n(26);n.d(t,"waitForRouteChange",function(){return m.c});var u=n(152),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},155:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),c=n(1),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(154),o=n(0),l=n.n(o),c=n(157),m=n.n(c),u=n(151),s=n(149),d=n(147),f=n(160),p=n(162),g=n(163),h=n(150);f.b.add(p.a);var b=d.c.h1.withConfig({displayName:"Menu__Logo",componentId:"gml39b-0"})(["color:#3d3d3d;font-size:1.8rem;margin:0;align-self:flex-start;"]),v=Object(d.c)(u.Link).withConfig({displayName:"Menu__LogoLink",componentId:"gml39b-1"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),y=d.c.div.withConfig({displayName:"Menu__NavBar",componentId:"gml39b-2"})(["flex:1;display:flex;flex-direction:column;@media (min-width:768px){flex-direction:row;justify-content:space-between;.navbar__navigation{align-self:center;line-height:1.2;display:block;.navbar__menu{display:flex;flex-direction:row;margin-top:0px;margin-bottom:0;padding-left:0px;li{margin-left:2.5rem;a{border-bottom:2px solid white;padding:0px;font-size:1.2rem;&.active{color:",";border-bottom:2px solid ",";}&:hover{color:",";border-bottom:2px solid ",";}}}}}.navbar__toggle{display:none;}.navbar__brand{padding:0;align-self:center;}}"],function(e){return e.theme.main.blue},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return e.theme.main.blue},function(e){return Object(h.a)(.3,e.theme.main.blue)}),x=d.c.nav.withConfig({displayName:"Menu__Navigation",componentId:"gml39b-3"})(["display:block;.navbar__toggle{align-self:flex-end;color:grey;position:absolute;top:0;right:0;line-height:0;padding:10px;border:1px solid #ccc;border-radius:3px;margin-top:-10px;}.navbar__menu{font-family:",";display:none;list-style:none;padding-left:15px;margin-top:0px;margin-bottom:0;li{margin-bottom:0;padding-bottom:0;a{text-decoration:none;display:block;margin-bottom:0;padding:10px 0;color:",";text-transform:uppercase;font-size:1.4rem;&:hover{color:",";}&:active{color:black;}}}}@media (max-width:767px){.navbar__menu{&.is-expanded{display:block;margin-left:0;margin-top:3rem;padding-left:0;li{&:not(:last-child) a{border-bottom:1px solid ",";}}}}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(h.a)(.43,"grey")),_=function(e){return e.isPartiallyCurrent?{className:"active"}:null},E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isExpanded:!1},t.handleMenuOpen=function(e){e.preventDefault();document.querySelector(".navbar__menu");var n=t.toggleButton,a="true"===n.getAttribute("aria-expanded");n.setAttribute("aria-expanded",!a),t.setState({isExpanded:!t.state.isExpanded})},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(o.Fragment,null,l.a.createElement(y,null,l.a.createElement(b,{className:"navbar__brand"},l.a.createElement(v,{to:"/","aria-label":"Logo of ivorpad.com"},this.props.siteTitle)),l.a.createElement(x,{className:"navbar__navigation",role:"navigation"},l.a.createElement("a",{role:"button",className:"navbar__toggle","aria-expanded":"false","aria-controls":"menu","aria-label":"Toggle navigation",onClick:this.handleMenuOpen,href:"#menu",ref:function(t){return e.toggleButton=t}},l.a.createElement(g.a,{icon:"bars"})),l.a.createElement("ul",{id:"menu",className:"navbar__menu "+(this.state.isExpanded?"is-expanded":"")},l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/",activeClassName:"active",role:"menuitem"},"Home")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/work",getProps:_,component:"work",activeClassName:"active",role:"menuitem"},"Work")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/writing",getProps:_,component:"writing",activeClassName:"active",role:"menuitem"},"Writing")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/about",getProps:_,component:"about",activeClassName:"active",role:"menuitem"},"About")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/gear",component:"gear",activeClassName:"active",role:"menuitem"},"Gear")),l.a.createElement("li",null,l.a.createElement(u.Link,{to:"/contact",component:"contact",activeClassName:"active",role:"menuitem"},"Contact"))))))},t}(o.Component),w=d.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-0"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),k=function(e){var t=e.siteTitle;e.theme;return l.a.createElement(w,null,l.a.createElement(s.a,null,l.a.createElement(E,{siteTitle:t})))},N=d.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(h.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(h.a)(.2,e.theme.main.black)},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return Object(h.a)(.15,e.theme.main.blue)},function(e){return Object(h.a)(.1,e.theme.main.blue)}),j=function(){return l.a.createElement(o.Fragment,null,l.a.createElement(N,null,l.a.createElement("div",{className:"footer__left"},l.a.createElement("p",null,"© 2018 Ivor Padilla")),l.a.createElement("div",{className:"footer__right"},l.a.createElement("p",null,"Built with ",l.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))},C=n(153),S=n.n(C),O=n(165);function z(){var e=S()(["\n        font-weight: 300;\n      "]);return z=function(){return e},e}function L(){var e=S()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  h1 { font-size: 3.6rem; line-height: 1.5; }\n  h2 { font-size: 30rem; line-height: 1.5; }\n  h3 { font-size: 2.4rem; line-height: 1.5; }\n  h4 { font-size: 2.0rem; line-height: 1.5; }\n  h5 { font-size: 1.6rem; }\n  h6 { font-size: 1.4rem; }\n\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n    line-height: 1.8;\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all .15s linear, border .15s ease-in-out;\n  }\n  code {\n    font-size: 1.4rem\n  }\n  .content {\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 400;\n    }\n    p {\n      font-family: ",";\n      font-weight: ",";\n      ","\n      line-height: 1.8;\n    }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return L=function(){return e},e}Object(O.injectGlobal)(L(),s.c.main.black,s.c.main.blue,s.c.main.fontSansSerif,function(){var e=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];if("undefined"!=typeof navigator){if(navigator.platform)for(;e.length;)if(navigator.platform===e.pop())return!0;return!1}}()?500:300,s.b.medium(z()),Object(h.a)(.3,s.c.main.blue),Object(h.a)(.15,s.c.main.blue),Object(h.a)(.1,s.c.main.blue));var P=d.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement(u.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:""+t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),l.a.createElement(P,null,l.a.createElement(d.a,{theme:s.c},l.a.createElement(k,{siteTitle:t.site.siteMetadata.title})),l.a.createElement(d.a,{theme:s.c},l.a.createElement(s.a,{className:"main"},e)),l.a.createElement(d.a,{theme:s.c},l.a.createElement(s.a,{className:"footer"},l.a.createElement(j,null)))))},data:i})},t}(l.a.Component);t.a=I},258:function(e,t){},260:function(e,t){},269:function(e,t){}}]);