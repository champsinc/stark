(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{323:function(t,e,a){"use strict";a.d(e,"e",function(){return n}),a.d(e,"f",function(){return r}),a.d(e,"g",function(){return i}),a.d(e,"m",function(){return o}),a.d(e,"w",function(){return c}),a.d(e,"h",function(){return s}),a.d(e,"i",function(){return p}),a.d(e,"n",function(){return l}),a.d(e,"k",function(){return g}),a.d(e,"t",function(){return u}),a.d(e,"b",function(){return d}),a.d(e,"r",function(){return h}),a.d(e,"c",function(){return m}),a.d(e,"d",function(){return _}),a.d(e,"u",function(){return f}),a.d(e,"s",function(){return w}),a.d(e,"p",function(){return v}),a.d(e,"q",function(){return b}),a.d(e,"l",function(){return I}),a.d(e,"v",function(){return k}),a.d(e,"o",function(){return j}),a.d(e,"a",function(){return S}),a.d(e,"j",function(){return y});var n="https://wegmaniac.ga/global_scripts/new_project.php",r="https://wegmaniac.ga/global_scripts/file_upload.php",i="https://wegmaniac.ga/global_scripts/media_gallery_links.php",o="https://wegmaniac.ga/global_scripts/all_projects_data.php",c="https://wegmaniac.ga/global_scripts/check_projectid.php",s="https://wegmaniac.ga/global_scripts/remove_media_file.php",p="https://wegmaniac.ga/global_scripts/delete_project.php",l="https://wegmaniac.ga/global_scripts/dashboard_stats.php",g="https://wegmaniac.ga/training_scripts/init_darkflow.php",u="https://wegmaniac.ga/training_scripts/darkflow_parameters.php",d="https://wegmaniac.ga/training_scripts/begin_training.php",h="https://wegmaniac.ga/training_scripts/stop_training.php",m="https://wegmaniac.ga/training_scripts/check_training.php",_="https://wegmaniac.ga/training_scripts/continue_training.php",f="https://wegmaniac.ga/training_scripts/training_summary.php",w="https://wegmaniac.ga/training_scripts/get_logs.php",v="https://wegmaniac.ga/training_scripts/reset_training.php",b="https://wegmaniac.ga/global_scripts/new_user.php",I="https://wegmaniac.ga/global_scripts/validate_user.php",k="https://wegmaniac.ga/global_scripts/check_unique.php",j="https://wegmaniac.ga/global_scripts/project_grid.php",S="https://wegmaniac.ga/global_scripts/add_problems.php",y="https://wegmaniac.ga/global_scripts/get_problems.php"},372:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(18);e.a=function(t){return r.a.createElement("div",{style:{fontSize:"75px",display:t.styleProp,marginLeft:"48%",marginTop:"5%",marginBottom:"5%"}},r.a.createElement(i.a,{type:"sync",spin:!0}))}},762:function(t,e,a){"use strict";a.r(e);var n=a(11),r=a(12),i=a(14),o=a(13),c=a(116),s=a(15),p=a(0),l=a.n(p),g=a(318),u=a(330),d=a.n(u),h=a(323),m=a(372),_=function(t){function e(t){var a;Object(n.a)(this,e),(a=Object(i.a)(this,Object(o.a)(e).call(this,t))).state={uniqueId:t.match.params.projectId,destination:t.match.params.destination,loginId:t.match.params.loginId,redirectTo:""};var r=Object(c.a)(a);return a.validate_user_login_id(r),a}return Object(s.a)(e,t),Object(r.a)(e,[{key:"validate_user_login_id",value:function(t){d.a.post(h.v,{uniqueId:t.state.loginId}).then(function(e){console.log(e),200===e.status&&("Valid"===e.data?(console.log(t.state),"::"===t.state.uniqueId?(localStorage.setItem("clear","ok"),t.setState({redirectTo:l.a.createElement(g.a,{to:{pathname:"/stark/"+localStorage.getItem("redirectTo"),state:{validated:!0}}})})):t.validate_project_id(t)):"Invalid"!==e.data&&"Credentials not received"!==e.data||(localStorage.removeItem("clear"),localStorage.removeItem("starkLoginId"),localStorage.removeItem("redirectTo"),t.setState({redirectTo:l.a.createElement(g.a,{to:{pathname:"/stark/login",state:{validated:!1}}})})))}).catch(function(t){return console.log(t),localStorage.removeItem("clear"),localStorage.removeItem("starkLoginId"),localStorage.removeItem("redirectTo"),window.location.href="/stark/login"})}},{key:"validate_project_id",value:function(t){d.a.post(h.w,{projectId:t.state.uniqueId,userId:t.state.loginId}).then(function(e){if(console.log(e),"Valid"!==e.data)return console.log("4041"),localStorage.removeItem("clear"),window.location.href="https://champsinc.github.io/404";localStorage.setItem("clear","ok"),t.setState({redirectTo:l.a.createElement(g.a,{to:{pathname:"/stark/"+t.state.destination+"/"+t.state.uniqueId,state:{validated:!0}}})})}).catch(function(t){return console.log("4042"),localStorage.removeItem("clear"),window.location.href="https://champsinc.github.io/404"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{styleProp:"block"}),this.state.redirectTo)}}]),e}(l.a.Component);e.default=_}}]);
//# sourceMappingURL=17.cc8f71c1.chunk.js.map