(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);a(54);var n=a(0),A=a.n(n),r=a(154),i=a(145),o=a.n(i),c=function(e){var t=e.post;return A.a.createElement("article",null,A.a.createElement("h3",null,A.a.createElement(o.a,{to:t.fields.slug},t.frontmatter.title)),A.a.createElement("span",null,t.frontmatter.date),A.a.createElement("p",null,t.excerpt))};a.d(t,"query",function(){return l});t.default=function(e){var t=e.data,a=e.location,n=t.md.edges;return A.a.createElement(r.a,{location:a},A.a.createElement("h2",null,"Posts"),n.map(function(e){var t=e.node;return A.a.createElement(c,{key:t.id,post:t})}))};var l="1312276601"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(145),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var u=a(147),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var m=A.a.createContext({}),p=function(e){return A.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Drew Gatsby Testing"}}}}},149:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),A=a.n(n),r=a(4),i=a.n(r),o=a(52),c=a(1),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return A.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},150:function(e){e.exports={data:{background:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAH/xAAXAQEAAwAAAAAAAAAAAAAAAAACAQME/9oADAMBAAIQAxAAAAGm7usDAmJlcaDiFEf/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERMy/9oACAEBAAEFAlOlRsNTE1KWhUmdMlZxXJx/f//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AU8LT//EABcRAQEBAQAAAAAAAAAAAAAAAAEAERL/2gAIAQIBAT8Bxbpib//EAB4QAAICAAcAAAAAAAAAAAAAAAABESECEBIxYXGB/9oACAEBAAY/Ako9NMXyUTsUyxZYuz//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhQVExcbH/2gAIAQEAAT8hLAWrgypVL4izFOu5eBAPIY4c7MTMlL9RCm7+wVOynij/2gAMAwEAAgADAAAAEGgYQP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8Q0S2JZ7f/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAgEBPxCCpHEyjTP/xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFxofD/2gAIAQEAAT8QMIFoA6z2AqawCHzkU6NrSqjM7583fPkZlQn8vsdRLTUPrpe4VBwMwgAYXJ//2Q==",aspectRatio:1,src:"/static/logo-9c3788eb3981147d449a0df71666fac2-4e8db.jpg",srcSet:"/static/logo-9c3788eb3981147d449a0df71666fac2-7cc04.jpg 310w,\n/static/logo-9c3788eb3981147d449a0df71666fac2-69042.jpg 620w,\n/static/logo-9c3788eb3981147d449a0df71666fac2-4e8db.jpg 1240w,\n/static/logo-9c3788eb3981147d449a0df71666fac2-50ab1.jpg 1860w,\n/static/logo-9c3788eb3981147d449a0df71666fac2-5e51b.jpg 2480w,\n/static/logo-9c3788eb3981147d449a0df71666fac2-d30e3.jpg 3546w",sizes:"(max-width: 1240px) 100vw, 1240px"}}}}},151:function(e,t,a){e.exports=a.p+"static/logo-9c3788eb3981147d449a0df71666fac2.jpg"},152:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(148),A=a(0),r=a.n(A),i=a(4),o=a.n(i),c=a(155),l=a.n(c),u=a(146),s=a(8),d=a.n(s),m=a(150),p=a(156),g=a(151),f=a.n(g),E=a(157),h=a.n(E),y=a(158),x=a.n(y),w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),A=0;A<a;A++)n[A]=arguments[A];return(t=e.call.apply(e,[this].concat(n))||this).state={in:!1},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({in:!0})},a.render=function(){var e=this.props,t=e.siteTitle,a=e.location;return r.a.createElement(x.a,{in:this.state.in,timeout:0},function(e){return r.a.createElement(v,{isHome:"/"===a.pathname,className:e},r.a.createElement(j,null,r.a.createElement("h1",{style:{margin:0}},r.a.createElement("img",{src:f.a,alt:"my face"}),r.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.a.createElement(Q,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.Link,{to:"/about"},"About"))))),r.a.createElement(u.StaticQuery,{query:B,render:function(e){var t=e.background.fluid;return r.a.createElement(h.a,{style:b.image,fluid:t})},data:m}))})},t}(A.Component),b={image:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.3}},v=p.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["margin-bottom:1.45rem;overflow:hidden;position:relative;background:green;transition:height 300ms cubic-bezier(0.86,0,0.07,1);&.entering{height:",";}&.entered{height:",";}h1{display:flex;align-items:center;img{height:50px;margin:0;border-radius:50%;margin-right:10px;}}nav{}"],function(e){return e.isHome?"20vh":"70vh"},function(e){return e.isHome?"70vh":"20vh"}),B="1793957589",j=p.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-1"})(["margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;"]),Q=p.a.nav.withConfig({displayName:"header__MainNav",componentId:"sc-31ozxh-2"})(["ul{list-style:none;display:flex;margin:0;li{margin:0;margin-left:10px;a{text-decoration:none;color:#fff;&:hover{border-bottom:3px solid green;}}}}"]),R=w,Y=(a(152),function(e){var t=e.children,a=e.location;return r.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(R,{siteTitle:e.site.siteMetadata.title,location:a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});Y.propTypes={children:o.a.node.isRequired,location:o.a.object.isRequired};t.a=Y}}]);
//# sourceMappingURL=component---src-pages-index-js-31cea1a32dfcb8966855.js.map