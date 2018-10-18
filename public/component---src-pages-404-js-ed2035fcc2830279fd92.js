(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(154);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return m});var a=n(151),r=n.n(a),o=(n(76),n(51),n(158),n(50),n(146));function i(){var e=r()(["\n    width: 80%;\n  "]);return i=function(){return e},e}var c={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},l={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif"}},u=Object.keys(c).reduce(function(e,t){return e[t]=function(){return Object(o.b)(["@media (max-width:","em){",";}"],c[t]/16,o.b.apply(void 0,arguments))},e},{}),m=o.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:60%;"," margin:0 auto;"],u.large(i()))},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(26);n.d(t,"waitForRouteChange",function(){return u.c});var m=n(150),s=n.n(m);n.d(t,"PageRenderer",function(){return s.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},153:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(151),i=n.n(o),c=n(152),l=n(0),u=n.n(l),m=n(157),s=n.n(m),d=n(148),f=n(147),p=n(146),h=n(149),b=p.c.div.withConfig({displayName:"header__TopbarContainer",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;align-items:center;"]),g=p.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-1"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),v=p.c.h1.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-2"})(["color:#3d3d3d;font-size:1.8rem;margin:0;"]),y=Object(p.c)(d.Link).withConfig({displayName:"header__LogoLink",componentId:"sc-31ozxh-3"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),w=p.c.div.withConfig({displayName:"header__Menu",componentId:"sc-31ozxh-4"})(["a{font-family:",";color:",";text-decoration:none;margin-left:25px;text-transform:uppercase;font-size:1.2rem;&:hover,&.active{color:",";border-bottom:2px solid ",";}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(h.a)(.3,"#3d5afe")),x=function(e){return e.isPartiallyCurrent?{className:"active"}:null},E=function(e){var t=e.siteTitle;e.theme;return u.a.createElement(g,null,u.a.createElement(f.a,null,u.a.createElement(b,null,u.a.createElement(v,null,u.a.createElement(y,{to:"/"},t)),u.a.createElement(w,{className:"menu__main"},u.a.createElement(d.Link,{to:"/",activeClassName:"active"},"Home"),u.a.createElement(d.Link,{to:"/work",getProps:x,component:"work",activeClassName:"active"},"Work"),u.a.createElement(d.Link,{to:"/writing",getProps:x,component:"writing",activeClassName:"active"},"Writing"),u.a.createElement(d.Link,{to:"/about",getProps:x,component:"about",activeClassName:"active"},"About"),u.a.createElement(d.Link,{to:"/gear",component:"gear",activeClassName:"active"},"Gear"),u.a.createElement(d.Link,{to:"/contact",component:"contact",activeClassName:"active"},"Contact")))))},k=p.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(h.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(h.a)(.2,e.theme.main.black)},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return Object(h.a)(.15,e.theme.main.blue)},function(e){return Object(h.a)(.1,e.theme.main.blue)}),C=function(){return u.a.createElement(l.Fragment,null,u.a.createElement(k,null,u.a.createElement("div",{className:"footer__left"},u.a.createElement("p",null,"© 2018 Ivor Padilla")),u.a.createElement("div",{className:"footer__right"},u.a.createElement("p",null,"Built with ",u.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))};function j(){var e=i()(["\n  :root {\n    font-size: 62.5%;\n  }\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: color .15s linear;\n  }\n  .content {\n    p {\n      font-family: ",";\n      font-size: 1.6rem;\n      font-weight: 300;\n    }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return j=function(){return e},e}Object(p.d)(j(),f.b.main.black,f.b.main.blue,f.b.main.fontSerif,Object(h.a)(.3,f.b.main.blue),Object(h.a)(.15,f.b.main.blue),Object(h.a)(.1,f.b.main.blue));var N=p.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return u.a.createElement(d.StaticQuery,{query:"1044757290",render:function(t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),u.a.createElement(N,null,u.a.createElement(p.a,{theme:f.b},u.a.createElement(E,{siteTitle:t.site.siteMetadata.title})),u.a.createElement(p.a,{theme:f.b},u.a.createElement(f.a,{className:"main"},e)),u.a.createElement(p.a,{theme:f.b},u.a.createElement(f.a,{className:"footer"},u.a.createElement(C,null)))))},data:c})},t}(u.a.Component);t.a=_}}]);