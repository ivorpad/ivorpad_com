(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return d});n(53);var a=n(0),r=n.n(a),o=n(154),i=n(146),c=n(147),l=n(262),m=n.n(l),s=n(148),u=i.c.div.withConfig({displayName:"writing__WritingWrapper",componentId:"sc-1e3hbzx-0"})(["width:80%;margin:0 auto;.post__item{margin-bottom:3rem;background:white;border-radius:5px;padding:3rem;box-shadow:0px 3px 0px 0px rgba(0,0,0,0.1);font-size:1.8rem;display:flex;justify-content:space-between;align-items:center;}.post__date{color:grey;font-size:1.2rem;font-family:",";}.post__link{border:none;font-weight:bold;color:",";font-family:",";}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.fontSerif});t.default=function(e){var t=e.data.allContentfulPost.edges;return r.a.createElement(i.a,{theme:c.b},r.a.createElement(o.a,null,r.a.createElement(u,{className:"content post"},t.map(function(e,t){var n=e.node;return r.a.createElement("div",{key:n.id,className:"post__item"},r.a.createElement(s.Link,{className:"post__link",to:"/writing/"+n.slug},n.title.title),r.a.createElement("span",{className:"post__date"}," ",m()(n.createdAt).format("MMM DD, YYYY")," "))}))))};var d="514796302"},147:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s});var a=n(151),r=n.n(a),o=(n(76),n(51),n(158),n(50),n(146));function i(){var e=r()(["\n    width: 80%;\n  "]);return i=function(){return e},e}var c={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},l={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif"}},m=Object.keys(c).reduce(function(e,t){return e[t]=function(){return Object(o.b)(["@media (max-width:","em){",";}"],c[t]/16,o.b.apply(void 0,arguments))},e},{}),s=o.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:60%;"," margin:0 auto;"],m.large(i()))},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var m=n(26);n.d(t,"waitForRouteChange",function(){return m.c});var s=n(150),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},153:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),l=n(1),m=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(151),i=n.n(o),c=n(152),l=n(0),m=n.n(l),s=n(157),u=n.n(s),d=n(148),f=n(147),p=n(146),b=n(149),h=p.c.div.withConfig({displayName:"header__TopbarContainer",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;align-items:center;"]),g=p.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-1"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),y=p.c.h1.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-2"})(["color:#3d3d3d;font-size:1.8rem;margin:0;"]),v=Object(p.c)(d.Link).withConfig({displayName:"header__LogoLink",componentId:"sc-31ozxh-3"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),w=p.c.div.withConfig({displayName:"header__Menu",componentId:"sc-31ozxh-4"})(["a{font-family:",";color:",";text-decoration:none;margin-left:25px;text-transform:uppercase;font-size:1.2rem;&:hover,&.active{color:",";border-bottom:2px solid ",";}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(b.a)(.3,"#3d5afe")),x=function(e){return e.isPartiallyCurrent?{className:"active"}:null},E=function(e){var t=e.siteTitle;e.theme;return m.a.createElement(g,null,m.a.createElement(f.a,null,m.a.createElement(h,null,m.a.createElement(y,null,m.a.createElement(v,{to:"/"},t)),m.a.createElement(w,{className:"menu__main"},m.a.createElement(d.Link,{to:"/",activeClassName:"active"},"Home"),m.a.createElement(d.Link,{to:"/work",getProps:x,component:"work",activeClassName:"active"},"Work"),m.a.createElement(d.Link,{to:"/writing",getProps:x,component:"writing",activeClassName:"active"},"Writing"),m.a.createElement(d.Link,{to:"/about",getProps:x,component:"about",activeClassName:"active"},"About"),m.a.createElement(d.Link,{to:"/gear",component:"gear",activeClassName:"active"},"Gear"),m.a.createElement(d.Link,{to:"/contact",component:"contact",activeClassName:"active"},"Contact")))))},_=p.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(b.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(b.a)(.2,e.theme.main.black)},function(e){return Object(b.a)(.3,e.theme.main.blue)},function(e){return Object(b.a)(.15,e.theme.main.blue)},function(e){return Object(b.a)(.1,e.theme.main.blue)}),k=function(){return m.a.createElement(l.Fragment,null,m.a.createElement(_,null,m.a.createElement("div",{className:"footer__left"},m.a.createElement("p",null,"© 2018 Ivor Padilla")),m.a.createElement("div",{className:"footer__right"},m.a.createElement("p",null,"Built with ",m.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))};function C(){var e=i()(["\n  :root {\n    font-size: 62.5%;\n  }\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: color .15s linear;\n  }\n  .content {\n    p {\n      font-family: ",";\n      font-size: 1.6rem;\n      font-weight: 300;\n    }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return C=function(){return e},e}Object(p.d)(C(),f.b.main.black,f.b.main.blue,f.b.main.fontSerif,Object(b.a)(.3,f.b.main.blue),Object(b.a)(.15,f.b.main.blue),Object(b.a)(.1,f.b.main.blue));var N=p.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(d.StaticQuery,{query:"1044757290",render:function(t){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),m.a.createElement(N,null,m.a.createElement(p.a,{theme:f.b},m.a.createElement(E,{siteTitle:t.site.siteMetadata.title})),m.a.createElement(p.a,{theme:f.b},m.a.createElement(f.a,{className:"main"},e)),m.a.createElement(p.a,{theme:f.b},m.a.createElement(f.a,{className:"footer"},m.a.createElement(k,null)))))},data:c})},t}(m.a.Component);t.a=j}}]);