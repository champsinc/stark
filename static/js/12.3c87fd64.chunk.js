(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(770),c=function(e){var t=e.title,a=e.children,l=e.styleName,c=e.cover,o=e.extra,m=e.actions;return r.a.createElement(n.a,{title:t,actions:m,cover:c,className:"gx-card-widget ".concat(l),extra:o},a)};t.a=c,c.defaultProps={styleName:""}},773:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(766),c=a(768),o=a(332),m=[{title:"Problem Identified",dataIndex:"image",render:function(e,t){return r.a.createElement("div",{className:"gx-flex-row gx-align-items-center"},r.a.createElement("p",{className:"gx-mb-0"},t.name))}},{title:"When?",dataIndex:"transfer",render:function(e,t){return r.a.createElement("span",{className:"gx-text-grey"},t.transfer)}},{title:"Status",dataIndex:"status",render:function(e,t){return r.a.createElement("span",{className:"gx-text-primary gx-pointer"},r.a.createElement(n.a,{count:e,style:{backgroundColor:t.color,color:"#fff"}}))}}],s=function(e){return r.a.createElement(o.a,{title:r.a.createElement("h2",{className:"h4 gx-text-capitalize gx-mb-0"},"Problems Identified"),extra:r.a.createElement("p",{className:"gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block"},r.a.createElement("i",{className:"icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"})," Add A Problem")},r.a.createElement("div",{className:"gx-table-responsive"},r.a.createElement(c.a,{className:"gx-table-no-bordered",columns:m,dataSource:e.data,pagination:!1,size:"small"})),r.a.createElement("p",{className:"gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3"},r.a.createElement("i",{className:"icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"})," Add A Problem"))},i=a(765),x=a(502),g=a(507),d=function(e){return r.a.createElement(o.a,{styleName:"gx-card-full"},r.a.createElement("div",{className:"gx-d-flex gx-px-4 gx-pt-4 gx-pb-2"},r.a.createElement("h2",{className:"h4 gx-text-capitalize gx-mb-0"},e.cardTitle),r.a.createElement("p",{className:"gx-ml-auto gx-text-primary"}," Label Wise Distribution ",r.a.createElement("i",{className:"icon icon-line-chart gx-fs-sm"}))),r.a.createElement(x.a,null,r.a.createElement(g.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement("div",{className:"gx-actchart gx-pb-5 gx-pl-4"},r.a.createElement("h2",{className:"gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-black"},e.totalCount),r.a.createElement("p",{className:"gx-mb-0"},e.cardSubTitle))),r.a.createElement(g.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(i.c,{width:"100%",height:80},r.a.createElement(i.b,{data:e.collectedData,margin:{top:0,right:0,left:0,bottom:0}},r.a.createElement(i.e,{dataKey:"Label"}),r.a.createElement(i.f,null),r.a.createElement(i.d,null),r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:e.colorId,x1:"0",y1:"0",x2:"1",y2:"0"},r.a.createElement("stop",{offset:"5%",stopColor:e.color1,stopOpacity:.9}),r.a.createElement("stop",{offset:"95%",stopColor:e.color2,stopOpacity:.9}))),r.a.createElement(i.a,{dataKey:"Counter",strokeWidth:0,fill:"url(#"+e.colorId+")",fillOpacity:1}))))))},u=function(e){var t=e.icon,a=e.title,l=e.subTitle,n=e.color,c=e.colorTitle,m=e.colorSubTitle;return r.a.createElement(o.a,{styleName:"gx-card-full gx-py-4 gx-px-2 gx-bg-".concat(n)},r.a.createElement("div",{className:"gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-sm-4"},r.a.createElement("span",{className:"gx-size-80 gx-border gx-border-".concat(c," gx-text-").concat(c," gx-flex-row gx-justify-content-center gx-align-items-center gx-rounded-circle")},r.a.createElement("i",{className:"icon icon-".concat(t," gx-fs-xlxl")}))),r.a.createElement("div",{className:"gx-text-center"},r.a.createElement("h2",{className:"gx-fs-xxxl gx-font-weight-medium gx-text-".concat(c)},a),r.a.createElement("p",{className:"gx-mb-0 gx-mb-sm-3 gx-text-".concat(m)},l)))},E=a(16),b=a(3),p=Object(E.b)(function(e){return{themeType:e.settings.themeType}},null)(function(e){var t=e.icon,a=e.title,l=e.subTitle,n=e.iconColor,c=e.cardColor;return e.themeType===b.t&&(n="white"),r.a.createElement(o.a,{styleName:"gx-card-full gx-p-3 gx-bg-".concat(c," gx-text-white")},r.a.createElement("div",{className:"gx-media gx-align-items-center gx-flex-nowrap"},r.a.createElement("div",{className:"gx-mr-lg-4 gx-mr-3"},r.a.createElement("i",{className:"icon icon-".concat(t," gx-fs-xlxl gx-text-").concat(n," gx-d-flex"),style:{fontSize:45}})),r.a.createElement("div",{className:"gx-media-body"},r.a.createElement("h1",{className:"gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-white"},a),r.a.createElement("p",{className:"gx-text-white gx-mb-0"},l))))}),f=a(313),h=a(770),y=a(94),N=a(18),C=[{key:"1",name:"Potholes (P)",transfer:"2 hrs. ago",status:"Completed",color:"green"},{key:"2",name:"Manholes (M)",transfer:"17 days ago",status:"In Progress",color:"orange"},{key:"3",name:"Road Markings (R)",transfer:"1 month ago",status:"In Progress",color:"orange"},{key:"4",name:"Large Objects (L)",transfer:"1 month ago",status:"Not Started",color:"red"}],w=[{Label:"P",Counter:1e3},{Label:"M",Counter:9e3},{Label:"R",Counter:2900}],T=[{Label:"P",Counter:800},{Label:"M",Counter:7410},{Label:"R",Counter:2e3}];t.default=function(){return r.a.createElement(f.a,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{sm:12,xs:24},r.a.createElement(s,{data:C}),r.a.createElement(x.a,null,r.a.createElement(g.a,{sm:12,xs:24},r.a.createElement(u,{icon:"components",title:"DarkFlow",subTitle:"Source: @thtrieu on GitHub",color:"orange",colorTitle:"geekblue",colorSubTitle:"geekblue"})),r.a.createElement(g.a,{sm:12,xs:24},r.a.createElement(u,{icon:"culture-calendar",title:"TensorFlow",subTitle:"Source: @tensorflow on GitHub",color:"geekblue",colorTitle:"pink",colorSubTitle:"pink"}))),r.a.createElement(h.a,{title:"Deployment"},r.a.createElement(x.a,null,r.a.createElement(g.a,{sm:8,xs:24},r.a.createElement(y.a,{block:!0,type:"primary",shape:"round"}," ",r.a.createElement(N.a,{type:"link"}),"URL")),r.a.createElement(g.a,{sm:8,xs:24},r.a.createElement(y.a,{block:!0,type:"primary",shape:"round"}," ",r.a.createElement(N.a,{type:"database",theme:"filled"}),"Database")),r.a.createElement(g.a,{sm:8,xs:24},r.a.createElement(y.a,{block:!0,type:"primary",shape:"round"}," ",r.a.createElement(N.a,{type:"api",theme:"filled"}),"API"))))),r.a.createElement(g.a,{sm:12,xs:24},r.a.createElement(d,{collectedData:w,totalCount:12900,cardTitle:"Data Collection",cardSubTitle:"Total Image Count",colorId:"color1",color1:"#845EC2",color2:"#FF55AA"}),r.a.createElement(d,{collectedData:T,totalCount:10210,cardTitle:"Pre Processed Data",cardSubTitle:"After Pre-Processing Count",colorId:"color2",color1:"#001A7C",color2:"#B0ADE4"}),r.a.createElement(o.a,{title:r.a.createElement("h2",{className:"h4 gx-text-capitalize gx-mb-0"},"Training")},r.a.createElement(p,{title:"3",subTitle:"Model Iterations",icon:"visits",iconColor:"white",cardColor:"cyan"}),r.a.createElement(p,{title:"1995",subTitle:"Check Points Created",icon:"modal",iconColor:"white",cardColor:"red"})))))}}}]);
//# sourceMappingURL=12.3c87fd64.chunk.js.map