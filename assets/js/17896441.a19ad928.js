"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{6487:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7462),r=a(7294),l=a(8425),i=a(8596),c=a(5281),s={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},o=a(6010),m=a(9960),d=a(4996),u=a(5999);function v(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function p(e){var t=e.children,a=e.href,n="breadcrumbs__link";return e.isLast?r.createElement("span",{className:n,itemProp:"name"},t):a?r.createElement(m.Z,{className:n,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:n},t)}function f(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return r.createElement("li",(0,n.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function h(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(m.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",s.breadcrumbsItemLink),href:e},r.createElement(v,{className:s.breadcrumbHomeIcon})))}function b(){var e=(0,l.s1)(),t=(0,i.Ns)();return e?r.createElement("nav",{className:(0,o.Z)(c.k.docs.docBreadcrumbs,s.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(h,null),e.map((function(t,a){var n=a===e.length-1;return r.createElement(f,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(p,{href:t.href,isLast:n},t.label))})))):null}},3708:function(e,t,a){a.r(t),a.d(t,{default:function(){return xe}});var n=a(7294),r=a(6010),l=a(5214),i=a(4474),c=a(7597),s=a(5999),o=a(5281);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function d(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:o.k.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(d,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(7462),p=a(3366),f="iconEdit_dcUD",h=["className"];function b(e){var t=e.className,a=(0,p.Z)(e,h);return n.createElement("svg",(0,v.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(f,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function E(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},n.createElement(b,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var g=a(9960),N="tag_hD8n",Z="tagRegular_D6E_",L="tagWithCount_i0QQ";function _(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(g.Z,{href:t,className:(0,r.Z)(N,l?L:Z)},a,l&&n.createElement("span",null,l))}var k="tags_XVD_",y="tag_JSN8";function C(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(k,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:y},n.createElement(_,{label:t,permalink:a}))}))))}var T="lastUpdated_foO9";function x(e){return n.createElement("div",{className:(0,r.Z)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C,e)))}function H(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(o.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(E,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",T)},(a||l)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function U(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,s=t.tags,m=s.length>0,d=!!(a||l||c);return m||d?n.createElement("footer",{className:(0,r.Z)(o.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(x,{tags:s}),d&&n.createElement(H,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}function A(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(A,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}var w=n.memo(A),M=a(6668),B=["parentIndex"];function I(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,p.Z)(e,B);a>=0?t[a].children.push(r):n.push(r)})),n}function S(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=S({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function O(e){var t=e.getBoundingClientRect();return t.top===t.bottom?O(e.parentNode):t}function D(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return O(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(O(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function V(){var e=(0,n.useRef)(0),t=(0,M.L)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function R(e){var t=(0,n.useRef)(void 0),a=V();(0,n.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=D(c,{anchorTopOffset:a.current}),o=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}var z=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function P(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,o=e.minHeadingLevel,m=e.maxHeadingLevel,d=(0,p.Z)(e,z),u=(0,M.L)(),f=null!=o?o:u.tableOfContents.minHeadingLevel,h=null!=m?m:u.tableOfContents.maxHeadingLevel,b=function(e){var t=e.toc,a=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,n.useMemo)((function(){return S({toc:I(t),minHeadingLevel:a,maxHeadingLevel:r})}),[t,a,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return R((0,n.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:f,maxHeadingLevel:h}}),[i,s,f,h])),n.createElement(w,(0,v.Z)({toc:b,className:r,linkClassName:i},d))}var F="tableOfContents_cNA8",j=["className"];function q(e){var t=e.className,a=(0,p.Z)(e,j);return n.createElement("div",{className:(0,r.Z)(F,"thin-scrollbar",t)},n.createElement(P,(0,v.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var X=a(6043),J="tocCollapsible_bZGK",Q="tocCollapsibleContent_NNA8",W="tocCollapsibleExpanded_IqtF",G="tocCollapsibleButton_l22C",K="tocCollapsibleButtonExpanded_KeTX",Y=["collapsed"];function $(e){var t=e.collapsed,a=(0,p.Z)(e,Y);return n.createElement("button",(0,v.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",G,!t&&K,a.className)}),n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function ee(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,X.u)({initialState:!0}),s=c.collapsed,o=c.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(J,!s&&W,a)},n.createElement($,{collapsed:s,onClick:o}),n.createElement(X.z,{lazy:!0,className:Q,collapsed:s},n.createElement(P,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var te=a(9649),ae="docItemContainer_vinB",ne="docItemCol_DM6M",re="tocMobile_TmEX",le=a(1944),ie=a(7524),ce=a(6487),se=a(3905),oe=a(5742),me=["mdxType","originalType"];var de=a(5710);var ue=a(2389),ve="details_lb9f",pe="isBrowser_bmU9",fe="collapsibleContent_i85q",he=["summary","children"];function be(e){return!!e&&("SUMMARY"===e.tagName||be(e.parentElement))}function Ee(e,t){return!!e&&(e===t||Ee(e.parentElement,t))}function ge(e){var t=e.summary,a=e.children,l=(0,p.Z)(e,he),i=(0,ue.Z)(),c=(0,n.useRef)(null),s=(0,X.u)({initialState:!l.open}),o=s.collapsed,m=s.setCollapsed,d=(0,n.useState)(l.open),u=d[0],v=d[1];return n.createElement("details",Object.assign({},l,{ref:c,open:u,"data-collapsed":o,className:(0,r.Z)(ve,i&&pe,l.className),onMouseDown:function(e){be(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;be(t)&&Ee(t,c.current)&&(e.preventDefault(),o?(m(!1),v(!0)):m(!0))}}),t||n.createElement("summary",null,"Details"),n.createElement(X.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),v(!e)}},n.createElement("div",{className:fe},a)))}var Ne="details_BAp3";function Ze(e){var t=Object.assign({},e);return n.createElement(ge,(0,v.Z)({},t,{className:(0,r.Z)("alert alert--info",Ne,t.className)}))}function Le(e){return n.createElement(te.Z,e)}var _e="img_E7b_";var ke={head:function(e){var t=n.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,p.Z)(r,me));return n.createElement(e.props.originalType,l)}return e}(e)}));return n.createElement(oe.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(e.props.mdxType)}))?n.createElement("code",e):n.createElement(de.Z,e)},a:function(e){return n.createElement(g.Z,e)},pre:function(e){var t;return n.createElement(de.Z,(0,n.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=n.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=n.createElement(n.Fragment,null,t.filter((function(e){return e!==a})));return n.createElement(Ze,(0,v.Z)({},e,{summary:a}),r)},ul:function(e){return n.createElement("ul",(0,v.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return n.createElement("img",(0,v.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,_e))}));var t},h1:function(e){return n.createElement(Le,(0,v.Z)({as:"h1"},e))},h2:function(e){return n.createElement(Le,(0,v.Z)({as:"h2"},e))},h3:function(e){return n.createElement(Le,(0,v.Z)({as:"h3"},e))},h4:function(e){return n.createElement(Le,(0,v.Z)({as:"h4"},e))},h5:function(e){return n.createElement(Le,(0,v.Z)({as:"h5"},e))},h6:function(e){return n.createElement(Le,(0,v.Z)({as:"h6"},e))}};function ye(e){var t=e.children;return n.createElement(se.Zo,{components:ke},t)}function Ce(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,i=a.assets,c=l.keywords,s=r.description,o=r.title,m=null!=(t=i.image)?t:l.image;return n.createElement(le.d,{title:o,description:s,keywords:c,image:m})}function Te(e){var t=e.content,a=t.metadata,s=t.frontMatter,m=s.hide_title,d=s.hide_table_of_contents,u=s.toc_min_heading_level,v=s.toc_max_heading_level,p=a.title,f=!m&&void 0===t.contentTitle,h=(0,ie.i)(),b=!d&&t.toc&&t.toc.length>0,E=b&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!d&&ne)},n.createElement(i.Z,null),n.createElement("div",{className:ae},n.createElement("article",null,n.createElement(ce.Z,null),n.createElement(c.Z,null),b&&n.createElement(ee,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,r.Z)(o.k.docs.docTocMobile,re)}),n.createElement("div",{className:(0,r.Z)(o.k.docs.docMarkdown,"markdown")},f&&n.createElement("header",null,n.createElement(te.Z,{as:"h1"},p)),n.createElement(ye,null,n.createElement(t,null))),n.createElement(U,e)),n.createElement(l.Z,{previous:a.previous,next:a.next}))),E&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:o.k.docs.docTocDesktop})))}function xe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(le.FG,{className:t},n.createElement(Ce,e),n.createElement(Te,e))}},5214:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7462),r=a(7294),l=a(5999),i=a(6010),c=a(9960);function s(e){var t=e.permalink,a=e.title,n=e.subLabel,l=e.isNext;return r.createElement(c.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(s,(0,n.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(s,(0,n.Z)({},a,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},7597:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5999),l=a(4477),i=a(5281),c=a(6010);function s(e){var t=e.className,a=(0,l.E)();return a.badge?n.createElement("span",{className:(0,c.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},4474:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7294),r=a(2263),l=a(9960),i=a(5999),c=a(5551),s=a(373),o=a(5281),m=a(4477),d=a(6010);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,a=e.className,l=e.versionMetadata,i=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,s.J)(m).savePreferredVersionName,f=(0,c.Jo)(m),h=f.latestDocSuggestion,b=f.latestVersionSuggestion,E=null!=h?h:(t=b).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:b.label,to:E.path,onClick:function(){return u(b.name)}})))}function h(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(f,{className:t,versionMetadata:a}):null}},9649:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),c=a(5999),s=a(6668),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"];function u(e){var t=e.as,a=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},u,{className:(0,i.Z)("anchor",v?m:o),id:a}),u.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},u,{id:void 0}))}}}]);