webpackJsonp([1],{c80D:function(t,e){},cyji:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),o=a.n(s),n={name:"add",components:{},data:function(){return{formData:{label:"",value:""},token:""}},methods:{submit:function(){var t=this;this.$axios.post("adduserscate",this.formData).then(function(e){200==e.code?t.$message({type:"success",message:"提交成功!"}):t.$message({type:"warning",message:e.msg}),setTimeout(function(){t.$router.push("/crmusercategory")},1e3)})},getdata:function(){var t=this;this.$axios.post("getuserscate",{id:this.$route.query.id}).then(function(e){t.formData=e.data[0]})},change:function(){var t=this,e=o()({},this.formData,{id:this.$route.query.id});this.$axios.post("updateuserscate",e).then(function(e){200==e.code&&(t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.$router.push("/crmusercategory")},1e3))})}},created:function(){var t=this;this.$nextTick(function(){"用户分类编辑"==t.$route.name&&t.getdata()})},watch:{$route:function(t,e,a){this.formData={title:"",author:"",img:"",content:"",contentText:""}}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类标题"}},[a("el-input",{model:{value:t.formData.label,callback:function(e){t.$set(t.formData,"label",e)},expression:"formData.label"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-input",{model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",e)},expression:"formData.value"}})],1),t._v(" "),a("el-form-item",["用户分类添加"==t.$route.name?a("el-button",{attrs:{type:"success"},on:{click:t.submit}},[t._v("保存")]):t._e(),t._v(" "),"用户分类编辑"==t.$route.name?a("el-button",{attrs:{type:"success"},on:{click:t.change}},[t._v("修改并保存")]):t._e()],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(t){a("hPA8"),a("c80D")},"data-v-b20ea794",null);e.default=i.exports},hPA8:function(t,e){}});
//# sourceMappingURL=1.b78e746b8eeac815eaee.js.map