
          window.__NEXT_REGISTER_PAGE('/docs', function() {
            var comp = module.exports=webpackJsonp([6],{276:function(a,b,c){a.exports=c(277)},277:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(21),f=d(e),g=c(0),h=d(g),i=c(24),j=d(i),k=c(94),l=d(k),m=c(95),n=d(m),o=c(69),p=c(108),q=d(p),r=c(463),s=d(r),t=c(110),u=d(t),v=c(174),w=d(v),x=c(111),y=d(x);"undefined"!=typeof window&&(0,i.hydrate)(window.__NEXT_DATA__.ids);var z=(0,o.withPostsFilterBy)((0,o.inCategory)("docs",{includeSubCategories:!0})),A=(0,n.default)(z(function(a){var b=a.post,c=a.posts;c.sort(function(c,a){return c.data.order-a.data.order});var d=b||c[0];return(0,i.injectGlobal)("html,body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Lucida Grande\",sans-serif;font-weight:100;}a{color:#666;font-weight:200;text-decoration-color:#ddd;}"),h.default.createElement(B,null,h.default.createElement(l.default,null,h.default.createElement("title",null,"NextEPC | Docs | ",d.data.title),h.default.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css"})),h.default.createElement(q.default,{showHome:!0,title:"documentation",styles:{width:"100vw"}}),h.default.createElement(C,null,h.default.createElement(D,null,h.default.createElement(s.default,{docs:c,post:d})),h.default.createElement(E,null,h.default.createElement(G,null,d.data.category),h.default.createElement(F,null,d.data.title),h.default.createElement(m.Content,(0,f.default)({},d,{renderers:{h2:J,code:w.default,p:H,pre:I,ul:K}})))),h.default.createElement(u.default,null))}));b.default=(0,y.default)(A);var B=(0,j.default)("main")("display:flex;flex-direction:column;color:#666;"),C=(0,j.default)("section")("background:#f9f9f9;min-height:100vh;display:flex;flex-direction:row;"),D=(0,j.default)("side")("flex:1;border-right:1px solid #eee;"),E=(0,j.default)("article")("flex:4;width:1px;// freaking width to get the Article to not expand  \n  padding:60px 0 0 60px;"),F=(0,j.default)("h1")("font-size:4em;font-weight:100;margin-top:-15px;padding-bottom:15px;border-bottom:3px solid #f63;"),G=(0,j.default)("h2")("font-size:.8em;font-weight:100;letter-spacing:.2em;color:#666;text-transform:uppercase;"),H=(0,j.default)("p")("font-size:1.3em;font-weight:300;color:#444;letter-spacing:-0.05px;line-height:1.5em;max-width:750px;margin:0;strong,b{font-weight:600;}& code{font-size:1em;display:inline-block;padding:0 5px;background-color:#eee;vertical-align:bottom;}"),I=(0,j.default)("pre")("margin:50px 0;font-size:1.2em;padding:5px 20px;background:#f2f2f2;& .hljs{background:#f2f2f2;}"),J=(0,j.default)("div")("font-size:1.8em;line-height:2em;font-weight:600;color:#000;margin:60px 0 0 -2px;> em{font-weight:200;letter-spacing:-0.8px;padding:0 4px;}"),K=(0,j.default)("ul")("&,& li > p{font-size:1.1em;line-height:1.5em;}& code,& p code{font-size:1em;display:inline-block;padding:0 5px;background-color:#eee;}")},463:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(24),h=d(g),i=c(69);b.default=function(a){var b=a.docs,c=a.post,d=b.filter((0,i.inCategory)("docs/nextepc")),e=b.filter((0,i.inCategory)("docs/package")),g=b.filter((0,i.inCategory)("docs/build")),h=b.filter((0,i.inCategory)("docs/tutorial"));return f.default.createElement(j,null,d.length&&f.default.createElement(k,null,"NextEPC"),d.map(function(a,b){var d=a.data,e=c.data.url===d.url;return f.default.createElement(l,{key:"doc-nav-"+b,className:e&&"active",href:d.url},d.title)}),e.length&&f.default.createElement(k,null,"Package"),e.map(function(a,b){var d=a.data,e=c.data.url===d.url;return f.default.createElement(l,{key:"doc-nav-"+b,className:e&&"active",href:d.url},d.title)}),g.length&&f.default.createElement(k,null,"Build"),g.map(function(a,b){var d=a.data,e=c.data.url===d.url;return f.default.createElement(l,{key:"doc-nav-"+b,className:e&&"active",href:d.url},d.title)}),h.length&&f.default.createElement(k,null,"Tutorial"),h.map(function(a,b){var d=a.data,e=c.data.url===d.url;return f.default.createElement(l,{key:"doc-nav-"+b,className:e&&"active",href:d.url},d.title)}))};var j=(0,h.default)("nav")("display:flex;flex-direction:column;align-install:center;align-items:stretch;"),k=(0,h.default)("div")("padding:7px 15px;border-left:5px solid transparent;flex:1;font-size:.8em;font-weight:600;color:#212121;background:#eee;text-transform:uppercase;"),l=(0,h.default)("a")("padding:10px 20px;text-decoration:none;color:#999;border-left:5px solid transparent;flex:1;&:hover{color:#212121;background-color:#f4f4f4;border-left:5px solid #ccc;}&.active,&.active:hover{color:#212121;background-color:#e4e4e4;border-left:5px solid #f63;}")}},[276]);
            return { page: comp.default }
          })
        