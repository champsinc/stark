(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{323:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"g",function(){return o}),n.d(t,"n",function(){return i}),n.d(t,"y",function(){return c}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"o",function(){return p}),n.d(t,"l",function(){return u}),n.d(t,"v",function(){return m}),n.d(t,"b",function(){return f}),n.d(t,"t",function(){return d}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return h}),n.d(t,"w",function(){return b}),n.d(t,"u",function(){return y}),n.d(t,"r",function(){return _}),n.d(t,"s",function(){return v}),n.d(t,"m",function(){return w}),n.d(t,"j",function(){return E}),n.d(t,"q",function(){return O}),n.d(t,"x",function(){return j}),n.d(t,"p",function(){return k}),n.d(t,"a",function(){return I}),n.d(t,"k",function(){return S});var r="https://wegmaniac.ga/global_scripts/new_project.php",a="https://wegmaniac.ga/global_scripts/file_upload.php",o="https://wegmaniac.ga/global_scripts/media_gallery_links.php",i="https://wegmaniac.ga/global_scripts/all_projects_data.php",c="https://wegmaniac.ga/global_scripts/check_projectid.php",l="https://wegmaniac.ga/global_scripts/remove_media_file.php",s="https://wegmaniac.ga/global_scripts/delete_project.php",p="https://wegmaniac.ga/global_scripts/dashboard_stats.php",u="https://wegmaniac.ga/training_scripts/init_darkflow.php",m="https://wegmaniac.ga/training_scripts/darkflow_parameters.php",f="https://wegmaniac.ga/training_scripts/begin_training.php",d="https://wegmaniac.ga/training_scripts/stop_training.php",g="https://wegmaniac.ga/training_scripts/check_training.php",h="https://wegmaniac.ga/training_scripts/continue_training.php",b="https://wegmaniac.ga/training_scripts/training_summary.php",y="https://wegmaniac.ga/training_scripts/get_logs.php",_="https://wegmaniac.ga/training_scripts/reset_training.php",v="https://wegmaniac.ga/global_scripts/new_user.php",w="https://wegmaniac.ga/global_scripts/validate_user.php",E="https://wegmaniac.ga/global_scripts/forgot_password",O="https://wegmaniac.ga/global_scripts/reset_password",j="https://wegmaniac.ga/global_scripts/check_unique.php",k="https://wegmaniac.ga/global_scripts/project_grid.php",I="https://wegmaniac.ga/global_scripts/add_problems.php",S="https://wegmaniac.ga/global_scripts/get_problems.php"},376:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(18);t.a=function(e){return a.a.createElement("div",{style:{fontSize:"75px",display:e.styleProp,marginLeft:"48%",marginTop:"5%",marginBottom:"5%"}},a.a.createElement(o.a,{type:"sync",spin:!0}))}},377:function(e,t,n){"use strict";var r=n(0),a=n(1),o=n(5),i=n.n(o),c=n(68),l=n(18),s=n(17);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,d(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,a=t.getPrefixCls,o=e.props,i=o.prefixCls,c=o.separator,l=o.children,s=(o.overlay,h(o,["prefixCls","separator","children","overlay"])),p=a("breadcrumb",i);return n="href"in e.props?r.createElement("a",u({className:"".concat(p,"-link")},s),l):r.createElement("span",u({className:"".concat(p,"-link")},s),l),n=e.renderBreadcrumbNode(n,p),l?r.createElement("span",null,n,r.createElement("span",{className:"".concat(p,"-separator")},c)):null},e.renderBreadcrumbNode=function(t,n){var a=e.props.overlay;return a?r.createElement(c.a,{overlay:a,placement:"bottomCenter"},r.createElement("a",{className:"".concat(n,"-overlay-link")},t,r.createElement(l.a,{type:"down"}))):t},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement(s.a,null,this.renderBreadcrumbItem)}}])&&m(n.prototype,a),o&&m(n,o),t}();b.__ANT_BREADCRUMB_ITEM=!0,b.defaultProps={separator:"/"},b.propTypes={prefixCls:a.string,separator:a.oneOfType([a.string,a.element]),href:a.string};var y=n(308),_=n(23);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n,a){var o=n.indexOf(e)===n.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(e,n){return t[n]||e})}(e,t);return o?r.createElement("span",null,i):r.createElement("a",{href:"#/".concat(a.join("/"))},i)}var I=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=E(this,O(t).apply(this,arguments))).genForRoutes=function(e){var t=e.routes,n=void 0===t?[]:t,a=e.params,o=void 0===a?{}:a,i=e.separator,c=e.itemRender,l=void 0===c?k:c,s=[];return n.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");Object.keys(o).forEach(function(e){t=t.replace(":".concat(e),o[e])}),t&&s.push(t);var a=null;return e.children&&e.children.length&&(a=r.createElement(y.b,null,e.children.map(function(e){return r.createElement(y.b.Item,{key:e.breadcrumbName||e.path},l(e,o,n,s))}))),r.createElement(b,{overlay:a,separator:i,key:e.breadcrumbName||t},l(e,o,n,s))})},e.renderBreadcrumb=function(t){var n,a=t.getPrefixCls,o=e.props,c=o.prefixCls,l=o.separator,s=o.style,p=o.className,u=o.routes,m=o.children,f=a("breadcrumb",c);return u&&u.length>0?n=e.genForRoutes(e.props):m&&(n=r.Children.map(m,function(e,t){return e?(Object(_.a)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb","Only accepts Breadcrumb.Item as it's children"),Object(r.cloneElement)(e,{separator:l,key:t})):e})),r.createElement("div",{className:i()(p,f),style:s},n)},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props;Object(_.a)(!("linkRender"in e||"nameRender"in e),"Breadcrumb","`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderBreadcrumb)}}])&&w(n.prototype,a),o&&w(n,o),t}();I.defaultProps={separator:"/"},I.propTypes={prefixCls:a.string,separator:a.node,routes:a.array,params:a.object},I.Item=b;t.a=I},774:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(12),o=n(14),i=n(13),c=n(15),l=n(0),s=n.n(l),p=n(116),u=n(549),m=n(771),f=n(18),d=n(544),g=n(327),h=n.n(g),b=n(323),y=n(376),_=function(e){function t(e){var n;Object(r.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={uniqueId:e.uniqueId,loadingDisplay:"block"};var a=Object(p.a)(n);a.setState({images:[]});var c=[];return h.a.get(b.g+"?project_id="+a.state.uniqueId,{data:"data"}).then(function(e){if(console.log(e),200===e.status){console.log(e);var t=e.data;c=t.map(function(e){return s.a.createElement(u.a,{sm:6},s.a.createElement(m.a,{style:{backgroundColor:"#11111122"},className:"gx-card",title:e.caption},s.a.createElement("img",{style:{maxHeight:"200px",borderRadius:"5px",border:"1px solid black"},src:e.src,alt:e.caption}),s.a.createElement(f.a,{onClick:function(){return a.deleteImage(e.src,a)},style:{marginTop:"10px",float:"right",fontSize:"18px",color:"#111"},type:"delete",theme:"filled"})))}),t.length>0?a.setState({images:c,loadingDisplay:"none"}):a.setState({images:[s.a.createElement(u.a,{sm:24},s.a.createElement("h1",null,s.a.createElement("center",null,"Nothing to display, Try adding some file(s).")))],loadingDisplay:"none"})}}).catch(function(e){console.log(e)}),n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"deleteImage",value:function(e,t){h.a.get(b.h+"?projectId="+t.state.uniqueId+"&src="+e,{data:"data"}).then(function(e){200===e.status&&window.location.reload()})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement(y.a,{styleProp:this.state.loadingDisplay}),s.a.createElement(d.a,null,this.state.images))}}]),t}(s.a.Component),v=n(377),w=n(94),E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(e){return s.a.createElement("div",null,s.a.createElement("a",{rel:"noopener noreferrer",href:"https://champsinc.github.io/annotations/?**"+this.props.uniqueId,target:"_blank"},s.a.createElement(w.a,{block:!0,type:"primary",shape:"round"}," ",s.a.createElement(f.a,{type:"right-circle",theme:"filled"}),"Go to Annotations Section!")))}}]),t}(l.Component),O=n(311),j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).checkValidation("mediaView"),n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"checkValidation",value:function(e){return localStorage.getItem("starkLoginId")&&localStorage.getItem("clear")?"ok"!==localStorage.getItem("clear")?(localStorage.setItem("redirectTo",e),localStorage.setItem("projectId",this.props.match.params.id),window.location.href="/stark/login"):void localStorage.removeItem("clear"):(localStorage.setItem("redirectTo",e),localStorage.setItem("projectId",this.props.match.params.id),window.location.href="/stark/login")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v.a,null,s.a.createElement(v.a.Item,null,"Home"),s.a.createElement(v.a.Item,null,s.a.createElement("span",{className:"gx-link"},"Collection Preview"))),s.a.createElement("br",null),s.a.createElement(d.a,null,s.a.createElement(u.a,{sm:10}),s.a.createElement(u.a,{sm:8},s.a.createElement(E,{uniqueId:this.props.match.params.id})),s.a.createElement(u.a,{sm:6},s.a.createElement(O.a,{to:"/stark/uploads/"+this.props.match.params.id},s.a.createElement(w.a,{block:!0,shape:"round",type:"primary"},s.a.createElement(f.a,{type:"file-add",theme:"filled"})," Add more data")))),s.a.createElement("br",null),s.a.createElement(d.a,null,s.a.createElement(u.a,{xl:24,lg:24,md:24,sm:12,xs:24},s.a.createElement(_,{uniqueId:this.props.match.params.id}))))}}]),t}(s.a.Component);t.default=j}}]);
//# sourceMappingURL=16.e452b270.chunk.js.map