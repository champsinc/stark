(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{630:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(623),c=t(624),s=t(627),i=t(87),o=t(19),d=t(11),p=t(12),m=t(14),u=t(13),g=t(15),h=t(314),b=t(625);function E(e){var a="image/jpeg"===e.type||"image/png"===e.type;a||h.a.error("You can only upload JPG/PNG file!");var t=e.size/1024/1024<2;return t||h.a.error("Image must smaller than 2MB!"),a&&t}var f=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={loading:!1},t.handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&function(e,a){var t=new FileReader;t.addEventListener("load",function(){return a(t.result)}),t.readAsDataURL(e)}(e.file.originFileObj,function(e){return t.setState({imageUrl:e,loading:!1})}):t.setState({loading:!0})},t}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement(o.a,{type:this.state.loading?"loading":"plus"}),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),a=this.state.imageUrl;return l.a.createElement(c.a,{className:"gx-card",title:""},l.a.createElement(b.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"//jsonplaceholder.typicode.com/posts/",beforeUpload:E,onChange:this.handleChange},a?l.a.createElement("img",{src:a,alt:""}):e))}}]),a}(l.a.Component),v=t(311),j=r.a.Item,y={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18},md:{span:16},lg:{span:12}}};a.default=function(e){return l.a.createElement(c.a,{className:"gx-card",title:"Create New Project"},l.a.createElement(r.a,null,l.a.createElement(j,Object.assign({},y,{label:"Project Name",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(s.a,{placeholder:"Enter a name for your project",id:"project"})),l.a.createElement(j,Object.assign({},y,{label:"Client Name",hasFeedback:!0,validateStatus:"success"}),l.a.createElement(s.a,{placeholder:"Enter a client's name",id:"client"})),l.a.createElement(j,Object.assign({},y,{label:"Avatar",hasFeedback:!0}),l.a.createElement(f,null))),l.a.createElement(v.a,{to:"/stark/uploads"},l.a.createElement(i.a,{block:!0,type:"primary",shape:"round"}," ",l.a.createElement(o.a,{type:"right-circle",theme:"filled"}),"Create Now!")))}}}]);
//# sourceMappingURL=11.3fc1257c.chunk.js.map