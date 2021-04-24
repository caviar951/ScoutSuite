(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6,42,83,100],{523:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(0),c(669));t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.c,{label:"ID",valuePath:"id"}),Object(n.jsx)(r.c,{label:"ARN",valuePath:"arn"}),Object(n.jsx)(r.c,{label:"Region",valuePath:"region"}),Object(n.jsx)(r.c,{label:"VPC",valuePath:"vpc"}),Object(n.jsx)(r.c,{label:"Description",valuePath:"description"})]})}},524:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),a=c(0),s=c(13),i=c.n(s),o=c(666),u=c(669),l=c(81),j=c(676);c(685);t.default=function(){var e=Object(a.useContext)(o.a),t=Object(a.useContext)(o.b),c=i()(e.item,t),s="default"===i()(e.item,"name"),b=function(e,t,c){return Object(n.jsxs)("li",{children:["".concat(e,":"),Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(u.c,{value:e,errorPath:"".concat(c,".cidrs.").concat(t,".CIDR"),renderValue:function(e){return e.CIDRName?"".concat(e.CIDR," (").concat(e.CIDRName,")"):e.CIDR}})},t)}))})]})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:"rules-list",children:Object.entries(c.protocols).map((function(e,t){var c=Object(r.a)(e,2),a=c[0],s=c[1].ports;return Object(n.jsxs)("div",{children:[Object(n.jsx)("li",{children:a}),Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:["Ports:",Object(n.jsx)("ul",{children:Object.entries(s).map((function(e,t){var c,s,i=Object(r.a)(e,2),o=i[0],j=i[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.c,{value:o,errorPath:"protocols.".concat(a,".ports.").concat(o)})}),Object(n.jsxs)("ul",{children:[j.cidrs&&b("IP adresses",j.cidrs,"protocols.".concat(a,".ports.").concat(o)),j.Ipv6Ranges&&b("IPv6 addresses",j.Ipv6Ranges,"protocols.".concat(a,".ports.").concat(o)),j.security_groups&&(c=j.security_groups,s="protocols.".concat(a,".ports.").concat(o),Object(n.jsxs)("li",{children:["EC2 security groups:",Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(u.c,{value:e,errorPath:"".concat(s,".cidrs.security_groups.").concat(t),renderValue:function(e){return e.GroupName?Object(n.jsxs)("span",{children:["".concat(e.GroupName," ("),Object(n.jsx)(l.a,{service:"ec2",resource:"security_groups",id:e.GroupId,name:e.GroupId}),")"]}):"".concat(e.GroupId," (AWS Account ID: ").concat(e.UserId,")")}})},t)}))})]}))]})]},t)}))})]})})]},t)}))}),s&&Object(n.jsx)(u.c,{errorPath:"default_with_rules",renderValue:function(){return Object(n.jsx)(j.a,{className:"rules-list__warning-message",message:"Default security groups should have no rules."})}})]})}},525:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),a=c(0),s=c(151),i=c.n(s),o=c(13),u=c.n(o),l=c(10),j=c.n(l),b=c(666),d=c(80),O=c(676);c(686);t.default=function(){var e=Object(a.useContext)(b.a),t=Object(a.useContext)(b.b),c=u()(e.item,t),s=function e(t,c,a){return j()(t)?Object(d.l)(t,"",Object(d.n)(c,a)):Object.entries(t).map((function(t,s){var i=Object(r.a)(t,2),o=i[0],u=i[1];return Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(d.i)(o),e(u,c,a)]})},s)}))};return Object(n.jsxs)("div",{className:"security-group-usage",children:[c&&Object(n.jsx)("ul",{children:Object.entries(c).map((function(e){var t=Object(r.a)(e,2),c=t[0],a=t[1].resource_type;return Object.entries(a).map((function(e,t){var a=Object(r.a)(e,2),i=a[0],o=a[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("h5",{className:"resource-title",children:"".concat(Object(d.i)(c)," ").concat(Object(d.i)(i))})}),s(o,c,i)]},t)}))}))}),!c&&Object(n.jsx)(O.a,{message:"This security group is not in use.",icon:Object(n.jsx)(i.a,{fontSize:"inherit"})})]})}},559:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(0),c(13)),a=c.n(r),s=c(39),i=c.n(s),o=c(22),u=c(681),l=c(25),j=c(669),b=(c(80),c(674)),d=c(672),O=c(523),f=c(524),h=c(525);t.default=function(e){var t=e.data,c=a()(t,["item","path"],""),r=Object(u.a)(c),s=Object(u.b)(c),p=Object(o.a)(Object(l.g)("services.ec2.regions.".concat(r,".vpcs.").concat(s,".name"))),x=p.data,v=p.loading;return!t||v?null:(i()(x)||(t.item.vpc="".concat(x," (").concat(s,")"),t.item.region=r),Object(n.jsxs)(j.a,{data:t,children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(O.default,{})}),Object(n.jsxs)(b.b,{children:[Object(n.jsx)(b.a,{title:"Egress Rules",children:Object(n.jsx)(j.b,{path:"rules.egress",children:Object(n.jsx)(f.default,{})})}),Object(n.jsx)(b.a,{title:"Ingress Rules",children:Object(n.jsx)(j.b,{path:"rules.ingress",children:Object(n.jsx)(f.default,{})})}),Object(n.jsx)(b.a,{title:"Usage",children:Object(n.jsx)(j.b,{path:"used_by",children:Object(n.jsx)(h.default,{})})})]})]}))}},666:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return o}));var n=c(0),r=c.n(n),a={path_to_issue:[],item:{}},s=r.a.createContext(a),i=r.a.createContext(""),o=r.a.createContext((function(){}))},667:function(e,t,c){"use strict";var n=c(1),r=c(0),a=c(666),s=c(80);t.a=function(e){var t=e.path,c=e.children,i=Object(r.useContext)(a.b);return Object(n.jsx)(a.b.Provider,{value:Object(s.a)(i,t),children:c})}},668:function(e,t,c){"use strict";var n=c(11),r=c(1),a=c(0),s=c(663),i=c(7),o=c.n(i),u=c(13),l=c.n(u),j=c(10),b=c.n(j),d=c(666),O=c(80),f=c(88),h=(c(670),c(659)),p=c(201),x=c.n(p),v=c(671),m=c.n(v),g=c(202),P=c(140),C=function(e){var t=e.service,c=e.finding,n=e.path,i=Object(a.useContext)(P.a),o=i.exceptions,u=i.addException,j=i.removeException,b=Object(g.b)().enqueueSnackbar,d=l()(o,[t,c],[]).includes(n);return Object(r.jsx)(s.a,{title:d?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{size:"small",className:"exception-btn",onClick:d?function(){j(t,c,n),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,c,n),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:d?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},I=c(29),N=function(e){var t,c=e.label,i=e.separator,u=e.valuePath,j=e.errorPath,h=e.className,p=e.inline,x=e.tooltip,v=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(I.g)(),N=Object(a.useContext)(d.a),_=Object(a.useContext)(d.b),R=Object(a.useContext)(d.c),y=Object(O.a)(g||_,u),D=m(e.value||l()(N.item,y,e.value));("boolean"===typeof D&&(D=String(D)),j)?t=(b()(j)?j:[j]).map((function(e){return Object(O.a)(g||_,e)})):t=[y];var w=t.some((function(e){return N.path_to_issues.includes(e)})),A=N.level;if(Object(a.useEffect)((function(){w&&R(A)}),[A]),void 0===D||null===D)return null;var E=Object(r.jsx)(C,{service:P.service,finding:P.finding,path:"".concat(N.path,".").concat(t[0])}),S=Object(r.jsxs)("span",{className:o()(w&&o()("issue",A)),children:[D,w&&E]});return Object(r.jsx)(f.a,{className:o()(h,"partial-value",{inline:p}),label:c,separator:i,value:x?Object(r.jsx)(s.a,Object(n.a)(Object(n.a)({title:D},v),{},{children:S})):S})};N.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=N},669:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return s.a})),c.d(t,"c",(function(){return i.a}));var n=c(1),r=(c(0),c(666)),a=(c(80),function(e){var t=e.data,c=e.children;return console.info("PARTIAL DATA",t),Object(n.jsx)(r.a.Provider,{value:t,children:c})}),s=c(667),i=c(668)},670:function(e,t,c){},671:function(e,t,c){"use strict";var n=c(35),r=c(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(c(0)),s=(0,n(c(38)).default)(a.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=s},672:function(e,t,c){"use strict";var n=c(1);c(0),c(673);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},673:function(e,t,c){},674:function(e,t,c){"use strict";c.d(t,"a",(function(){return j})),c.d(t,"b",(function(){return o.b}));var n=c(1),r=c(17),a=c(0),s=c(7),i=c.n(s),o=c(114),u=c(666),l=c(58),j=(c(675),function(e){var t=e.title,c=e.isSelected,s=e.disabled,j=e.onClick,b=e.children,d=Object(a.useState)(""),O=Object(r.a)(d,2),f=O[0],h=O[1],p=f?Object(n.jsxs)(n.Fragment,{children:[t,l.a[f].icon]}):t;return Object(n.jsx)(u.c.Provider,{value:h,children:Object(n.jsx)(o.a,{title:p,className:i()("partial-tab-pane",f),isSelected:c,disabled:s,onClick:j,children:b})})})},675:function(e,t,c){},676:function(e,t,c){"use strict";var n=c(1),r=(c(0),c(7)),a=c.n(r),s=c(115),i=c.n(s),o=(c(677),{icon:Object(n.jsx)(i.a,{fontSize:"inherit"})}),u=function(e){var t=e.message,c=e.icon,r=e.className;return Object(n.jsxs)("div",{className:a()("warning-message",r),children:[c,t]})};u.defaultProps=o,t.a=u},677:function(e,t,c){},681:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return s}));var n=c(13),r=c.n(n),a=function(e){return r()(e.match(/regions\.([^.]*)/),1)},s=function(e){return r()(e.match(/vpcs\.([^.]*)/),1)}},685:function(e,t,c){},686:function(e,t,c){}}]);
//# sourceMappingURL=6.1178c1a1.chunk.js.map