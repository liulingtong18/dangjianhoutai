webpackJsonp([6],{"3VBj":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"add",components:{},data:function(){return{formData:{username:"",idCard:"",pwd:"",branchName:"",branchId:""},options:[]}},methods:{getcategory:function(){var e=this;this.$axios.post("getuserscate").then(function(t){e.options=t.data})},submit:function(){var e=this;this.options.forEach(function(t){t._id==e.formData.branchId&&(e.formData.branchName=t.label)}),this.$axios.post("addusers",this.formData).then(function(t){200==t.code?e.$message({type:"success",message:"提交成功!"}):e.$message({type:"warning",message:t.msg}),setTimeout(function(){e.$router.push("/crmusers")},1e3)})}},created:function(){var e=this;this.$nextTick(function(){e.getcategory()})}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.formData.idCard,callback:function(t){e.$set(e.formData,"idCard",t)},expression:"formData.idCard"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.formData.pwd,callback:function(t){e.$set(e.formData,"pwd",t)},expression:"formData.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户分类"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.branchId,callback:function(t){e.$set(e.formData,"branchId",t)},expression:"formData.branchId"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e._id}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:e.submit}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(r,o,!1,function(e){a("qEj8"),a("ZUXJ")},"data-v-f3575dc4",null);t.default=n.exports},ZUXJ:function(e,t){},qEj8:function(e,t){}});
//# sourceMappingURL=6.79edbb2e62daa52a5a6e.js.map