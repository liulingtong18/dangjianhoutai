webpackJsonp([3],{"2UWW":function(t,e){},R6ht:function(t,e){},ePH7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),n=a.n(o),s={name:"add",components:{editor:a("tyP1").a},data:function(){return{formData:{title:"",author:"",img:"",type:"",content:"",contentText:""},token:"",value:"",options:[]}},methods:{upload:function(t){this.formData.img="http://image.yaojunrong.com/"+t.key},getText:function(t){this.formData.contentText=t},getToken:function(){var t=this;this.$axios.qiniuGet().then(function(e){t.token=e.data})},getcategory:function(){var t=this;this.$axios.post("getcategory").then(function(e){t.options=e.data})},submit:function(){var t=this;this.$axios.post("addNews",this.formData).then(function(e){200==e.code?(t.$message({type:"success",message:"提交成功!"}),setTimeout(function(){t.$router.push("/crmnews")},1e3)):t.$message({type:"warning",message:e.msg})})},getdata:function(){var t=this;this.$axios.post("getNews",{id:this.$route.query.id}).then(function(e){t.formData=e.data[0]})},change:function(){var t=this,e=n()({},this.formData,{id:this.$route.query.id});this.$axios.post("updateNews",e).then(function(e){200==e.code&&(t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.$router.push("/crmnews")},1e3))})}},created:function(){var t=this;this.$nextTick(function(){"新闻编辑"==t.$route.name&&t.getdata(),t.getToken(),t.getcategory()})},watch:{$route:function(t,e,a){this.formData={title:"",author:"",img:"",content:"",contentText:""}}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"作者"}},[a("el-input",{model:{value:t.formData.author,callback:function(e){t.$set(t.formData,"author",e)},expression:"formData.author"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新闻分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"图片上传"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":t.upload,data:{token:t.token}}},[t.formData.img?a("img",{staticClass:"avatar",attrs:{src:t.formData.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",[a("editor",{on:{getText:t.getText},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),t._v(" "),a("el-form-item",["新闻添加"==t.$route.name?a("el-button",{attrs:{type:"success"},on:{click:t.submit}},[t._v("保存")]):t._e(),t._v(" "),"新闻编辑"==t.$route.name?a("el-button",{attrs:{type:"success"},on:{click:t.change}},[t._v("修改并保存")]):t._e()],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(s,i,!1,function(t){a("2UWW"),a("R6ht")},"data-v-a078a736",null);e.default=r.exports}});
//# sourceMappingURL=3.6d30ca305fbadf0514a6.js.map