(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{325:function(t,n,a){"use strict";a.d(n,"d",function(){return i}),a.d(n,"e",function(){return e}),a.d(n,"f",function(){return r}),a.d(n,"k",function(){return s}),a.d(n,"s",function(){return c}),a.d(n,"g",function(){return p}),a.d(n,"h",function(){return o}),a.d(n,"l",function(){return g}),a.d(n,"i",function(){return u}),a.d(n,"q",function(){return l}),a.d(n,"a",function(){return h}),a.d(n,"o",function(){return d}),a.d(n,"b",function(){return m}),a.d(n,"c",function(){return _}),a.d(n,"r",function(){return f}),a.d(n,"p",function(){return w}),a.d(n,"m",function(){return b}),a.d(n,"n",function(){return k}),a.d(n,"j",function(){return j});var i="https://wegmaniac.ga/global_scripts/new_project.php",e="https://wegmaniac.ga/global_scripts/file_upload.php",r="https://wegmaniac.ga/global_scripts/media_gallery_links.php",s="https://wegmaniac.ga/global_scripts/all_projects_data.php",c="https://wegmaniac.ga/global_scripts/check_projectid.php",p="https://wegmaniac.ga/global_scripts/remove_media_file.php",o="https://wegmaniac.ga/global_scripts/delete_project.php",g="https://wegmaniac.ga/global_scripts/dashboard_stats.php",u="https://wegmaniac.ga/training_scripts/init_darkflow.php",l="https://wegmaniac.ga/training_scripts/darkflow_parameters.php",h="https://wegmaniac.ga/training_scripts/begin_training.php",d="https://wegmaniac.ga/training_scripts/stop_training.php",m="https://wegmaniac.ga/training_scripts/check_training.php",_="https://wegmaniac.ga/training_scripts/continue_training.php",f="https://wegmaniac.ga/training_scripts/training_summary.php",w="https://wegmaniac.ga/training_scripts/get_logs.php",b="https://wegmaniac.ga/training_scripts/reset_training.php",k="https://wegmaniac.ga/global_scripts/new_user.php",j="https://wegmaniac.ga/global_scripts/new_user.php"},467:function(t,n,a){"use strict";var i=a(0),e=a.n(i),r=a(18);n.a=function(t){return e.a.createElement("div",{style:{fontSize:"75px",display:t.styleProp,marginLeft:"48%",marginTop:"5%",marginBottom:"5%"}},e.a.createElement(r.a,{type:"sync",spin:!0}))}},759:function(t,n,a){"use strict";a.r(n);var i=a(11),e=a(12),r=a(15),s=a(13),c=a(116),p=a(14),o=a(0),g=a.n(o),u=a(317),l=a(336),h=a.n(l),d=a(325),m=a(467),_=function(t){function n(t){var a;Object(i.a)(this,n),(a=Object(r.a)(this,Object(s.a)(n).call(this,t))).state={uniqueId:t.match.params.id,destination:t.match.params.destination,redirectTo:""};var e=Object(c.a)(a);return h.a.get(d.s+"?id="+e.state.uniqueId,{data:"data"}).then(function(t){console.log(t),200===t.status&&(console.log(t+"Validation Check!"),e.setState({redirectTo:g.a.createElement(u.a,{to:{pathname:"/stark/"+e.state.destination+"/"+e.state.uniqueId,state:{validated:!0}}})}))}).catch(function(t){return console.log(t),window.location.href="https://champsinc.github.io/404"}),a}return Object(p.a)(n,t),Object(e.a)(n,[{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement(m.a,{styleProp:"block"}),this.state.redirectTo)}}]),n}(g.a.Component);n.default=_}}]);
//# sourceMappingURL=14.e3df8248.chunk.js.map