webpackJsonp([1],{"8uhN":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),i=a.n(o),s={name:"add",components:{editor:a("tyP1").a},data:function(){return{formData:{title:"",pic:"",priority:"",url:"",status:"",_id:""},token:""}},methods:{upload:function(t){this.formData.pic="http://image.yaojunrong.com/"+t.key},getToken:function(){var t=this;this.$axios.qiniuGet().then(function(e){t.token=e.data})},submit:function(){var t=this;this.$axios.post("addslideShows",this.formData).then(function(e){200==e.code?(t.$message({message:"图片添加成功",type:"success"}),setTimeout(function(){t.$router.push("/crmslideShows")},1e3)):t.$message({message:e.msg,type:"warning"})})},getdata:function(){var t=this;this.$axios.post("getslideShows",{id:this.$route.query.id}).then(function(e){t.formData=e.data[0]})},change:function(){var t=this,e=i()({},this.formData,{id:this.$route.query.id});this.$axios.post("updateslideShows",e).then(function(e){200==e.code&&(t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.$router.push("/crmslideShows")},1e3))})}},created:function(){var t=this;this.$nextTick(function(){"轮播图编辑"==t.$route.name&&t.getdata(),t.getToken()})},watch:{$route:function(t,e,a){this.formData={title:"",author:"",img:"",content:"",contentText:""}}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"跳转链接"}},["轮播图添加"==t.$route.name?a("el-input",{model:{value:t.formData._id,callback:function(e){t.$set(t.formData,"_id",e)},expression:"formData._id"}}):t._e(),t._v(" "),"轮播图编辑"==t.$route.name?a("el-input",{model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}):t._e(),t._v(" "),a("p",{staticStyle:{color:"#ff6700","font-size":"12px"}},[t._v("可填写页面地址，也可填写页面id(新闻列表里)")])],1),t._v(" "),a("el-form-item",{attrs:{label:"优先级"}},[a("el-input-number",{attrs:{size:"small",min:1,max:10,label:"优先级"},model:{value:t.formData.priority,callback:function(e){t.$set(t.formData,"priority",e)},expression:"formData.priority"}}),t._v(" "),a("p",{staticStyle:{color:"#ff6700","font-size":"12px"}},[t._v("值越大，图片显示越靠前")])],1),t._v(" "),"轮播图编辑"==t.$route.name?a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"0"},model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"上传图片"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":t.upload,data:{token:t.token}}},[t.formData.pic?a("img",{staticClass:"avatar",attrs:{src:t.formData.pic}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",["轮播图添加"==t.$route.name?a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.submit}},[t._v("保存")]):t._e(),t._v(" "),"轮播图编辑"==t.$route.name?a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.change}},[t._v("修改并保存")]):t._e()],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,n,!1,function(t){a("hmMP"),a("wRnO")},"data-v-bc4538fc",null);e.default=r.exports},hmMP:function(t,e){},wRnO:function(t,e){}});
//# sourceMappingURL=1.1cdb5dc3765a639b73a9.js.map