(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t);n(53);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(154),l=n(148),m=n(146),u=n(147),s=n(149),d=n(209),f=n(210),p=n.n(f),h=n(189),b=n(259),g=n(260),v=n(261);h.b.add(g.a,v.a);var y=function(e){var t=e.post;return i.a.createElement("div",{className:"card__icons"},t.gitRepoUrl?i.a.createElement("a",{href:""+t.gitRepoUrl,"data-tip":t.isInPrivateRepo?"Private Repository":""},i.a.createElement(b.a,{icon:["fab","github"]}),t.isInPrivateRepo?i.a.createElement(p.a,{className:"tooltip",target:"_blank",rel:"noopener noreferrer"}):null):null,t.externalLink?i.a.createElement("a",{href:""+t.externalLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(b.a,{icon:"external-link-alt"})):null)};n.d(t,"default",function(){return _}),n.d(t,"query",function(){return x});var E=m.c.div.withConfig({displayName:"work__Card",componentId:"sc-1p9ixhj-0"})(["background:white;border-radius:5px;padding:3rem;text-decoration:none;color:",";box-shadow:0px 2px 0px 0px rgba(0,0,0,0.1);&.card__item{a{color:",";&:hover{color:",";}}.card__meta{display:flex;justify-content:space-between;a{border:none;}.card__title{font-size:1.8rem;margin-bottom:1.5rem;}.card__icons{a{color:grey;&:hover{color:",";}}svg{margin-left:1.2rem;}}}}.card__content p{font-size:1.4rem;color:",";line-height:2.5rem;}.card__tag{color:grey;font-family:",";font-size:1rem;margin-right:1.5rem;}.tooltip{font-family:",";font-size:1rem;}"],function(e){return e.theme.main.black},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(s.a)(.15,"grey"),function(e){return Object(s.a)(.1,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.fontSerif}),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={data:t.data.allContentfulWork.edges},n}return r()(t,e),t.prototype.render=function(){return i.a.createElement(m.a,{theme:u.b},i.a.createElement(c.a,null,i.a.createElement("div",{className:"card content grid"},this.state.data.map(function(e){var t=e.node;return i.a.createElement(E,{key:t.id,className:"card__item"},i.a.createElement("div",{className:"card__meta"},i.a.createElement(l.Link,{to:"/work/"+t.slug,state:{isInModal:!0}},i.a.createElement("h3",{className:"card__title"},t.title.title)),null!==t.externalLink&&null!==t.gitRepoUrl?i.a.createElement(y,{post:t}):null),i.a.createElement("div",{className:"card__content"},i.a.createElement("p",null,Object(d.truncate)(t.body.body,{length:100,omission:" [...]"}))),t.tags&&t.tags.map(function(e,t){return i.a.createElement("span",{key:t,className:"card__tag"},"#",e)}))}))))},t}(o.Component),x="518235984"},147:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return u});var a=n(151),r=n.n(a),o=(n(76),n(51),n(158),n(50),n(146));function i(){var e=r()(["\n    width: 80%;\n  "]);return i=function(){return e},e}var c={extraLarge:1800,large:1440,desktop:992,medium:768,small:576},l={main:{black:"#3d3d3d",blue:"#3d5afe",grey:"#828282",fontSerif:"'Merriweather', serif",fontSansSerif:"'Montserrat', sans-serif"}},m=Object.keys(c).reduce(function(e,t){return e[t]=function(){return Object(o.b)(["@media (max-width:","em){",";}"],c[t]/16,o.b.apply(void 0,arguments))},e},{}),u=o.c.div.withConfig({displayName:"styles__Container",componentId:"k3zxph-0"})(["width:60%;"," margin:0 auto;"],m.large(i()))},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var m=n(26);n.d(t,"waitForRouteChange",function(){return m.c});var u=n(150),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivor"}}}}},153:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),l=n(1),m=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(151),i=n.n(o),c=n(152),l=n(0),m=n.n(l),u=n(157),s=n.n(u),d=n(148),f=n(147),p=n(146),h=n(149),b=p.c.div.withConfig({displayName:"header__TopbarContainer",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:space-between;align-items:center;"]),g=p.c.div.withConfig({displayName:"header__Topbar",componentId:"sc-31ozxh-1"})(["width:100%;background:white;padding-top:1.5em;padding-bottom:1.5em;border-bottom:1px solid #e8e8e8;-webkit-font-smoothing:subpixel-antialiased;"]),v=p.c.h1.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-2"})(["color:#3d3d3d;font-size:1.8rem;margin:0;"]),y=Object(p.c)(d.Link).withConfig({displayName:"header__LogoLink",componentId:"sc-31ozxh-3"})(["color:#3d3d3d;font-weight:bold;font-family:Merriweather,serif;text-decoration:none;&:hover{color:#3d5afe;}"]),E=p.c.div.withConfig({displayName:"header__Menu",componentId:"sc-31ozxh-4"})(["a{font-family:",";color:",";text-decoration:none;margin-left:25px;text-transform:uppercase;font-size:1.2rem;&:hover,&.active{color:",";border-bottom:2px solid ",";}}"],function(e){return e.theme.main.fontSansSerif},function(e){return e.theme.main.black},function(e){return e.theme.main.blue},Object(h.a)(.3,"#3d5afe")),_=function(e){return e.isPartiallyCurrent?{className:"active"}:null},x=function(e){var t=e.siteTitle;e.theme;return m.a.createElement(g,null,m.a.createElement(f.a,null,m.a.createElement(b,null,m.a.createElement(v,null,m.a.createElement(y,{to:"/"},t)),m.a.createElement(E,{className:"menu__main"},m.a.createElement(d.Link,{to:"/",activeClassName:"active"},"Home"),m.a.createElement(d.Link,{to:"/work",getProps:_,component:"work",activeClassName:"active"},"Work"),m.a.createElement(d.Link,{to:"/writing",getProps:_,component:"writing",activeClassName:"active"},"Writing"),m.a.createElement(d.Link,{to:"/about",getProps:_,component:"about",activeClassName:"active"},"About"),m.a.createElement(d.Link,{to:"/gear",component:"gear",activeClassName:"active"},"Gear"),m.a.createElement(d.Link,{to:"/contact",component:"contact",activeClassName:"active"},"Contact")))))},w=p.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1xqajj9-0"})(["border-top:1px solid ",";padding-top:2rem;font-family:",";font-size:1.1rem;text-transform:uppercase;display:flex;justify-content:space-between;color:",";a{border-bottom:2px solid ",";&:hover{border-bottom-color:",";color:",";}}"],function(e){return Object(h.a)(.66,e.theme.main.black)},function(e){return e.theme.main.fontSansSerif},function(e){return Object(h.a)(.2,e.theme.main.black)},function(e){return Object(h.a)(.3,e.theme.main.blue)},function(e){return Object(h.a)(.15,e.theme.main.blue)},function(e){return Object(h.a)(.1,e.theme.main.blue)}),k=function(){return m.a.createElement(l.Fragment,null,m.a.createElement(w,null,m.a.createElement("div",{className:"footer__left"},m.a.createElement("p",null,"© 2018 Ivor Padilla")),m.a.createElement("div",{className:"footer__right"},m.a.createElement("p",null,"Built with ",m.a.createElement("a",{href:"https://gatsbyjs.org"},"GatsbyJS")))))};function N(){var e=i()(["\n  :root {\n    font-size: 62.5%;\n  }\n  body {\n    font-size: 1.6rem;\n    background: #F3F4F8;\n    color: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: color .15s linear;\n  }\n  .content {\n    p {\n      font-family: ",";\n      font-size: 1.6rem;\n      font-weight: 300;\n    }\n    a {\n      border-bottom: 2px solid ",";\n      &:hover {\n        border-bottom-color: ",";\n        color: ","\n      }\n    }\n  }\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 2em;\n    grid-gap: 2em; /* firefox */\n  }\n"]);return N=function(){return e},e}Object(p.d)(N(),f.b.main.black,f.b.main.blue,f.b.main.fontSerif,Object(h.a)(.3,f.b.main.blue),Object(h.a)(.15,f.b.main.blue),Object(h.a)(.1,f.b.main.blue));var C=p.c.div.withConfig({displayName:"layout__HomepageWrapper",componentId:"ii2kc2-0"})(["height:100vh;display:flex;flex-direction:column;.main{flex:1;margin-top:3rem;margin-bottom:5rem;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(d.StaticQuery,{query:"1044757290",render:function(t){return m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),m.a.createElement(C,null,m.a.createElement(p.a,{theme:f.b},m.a.createElement(x,{siteTitle:t.site.siteMetadata.title})),m.a.createElement(p.a,{theme:f.b},m.a.createElement(f.a,{className:"main"},e)),m.a.createElement(p.a,{theme:f.b},m.a.createElement(f.a,{className:"footer"},m.a.createElement(k,null)))))},data:c})},t}(m.a.Component);t.a=j},221:function(e,t){},223:function(e,t){},232:function(e,t){}}]);