"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[3085],{79717:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var l=n(67294),t=n(86010),i=n(90646),c=n(3905),s=n(67654),r=n(73010),m=n(22),o="mdxPageWrapper_zHyg";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,N=n.hide_table_of_contents,g=d.permalink;return l.createElement(i.Z,{title:v,description:u,permalink:g,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.Z)("row",o)},l.createElement("div",{className:(0,t.Z)("col",!N&&"col--8")},l.createElement(c.Zo,{components:s.Z},l.createElement(a,null))),!N&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},73010:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(83117),t=n(80102),i=n(67294),c=n(86010),s=n(14569),r="tableOfContents_cNA8",m=["className"];var o=function(e){var a=e.className,n=(0,t.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:function(e,a,n){n.d(a,{Z:function(){return m}});var l=n(83117),t=n(80102),i=n(67294),c=n(22),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,t.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,p=null!=N?N:_.tableOfContents.maxHeadingLevel,C=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:p}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:k,maxHeadingLevel:p}}),[d,u,k,p]);return(0,c.Si)(h),i.createElement(r,(0,l.Z)({toc:C,className:m,linkClassName:d},g))}}}]);