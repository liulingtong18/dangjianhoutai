webpackJsonp([9],{W2Q3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"login",data:function(){return{formData:{user:"admin",pwd:"11111"}}},methods:{submit:function(){var t=this;this.$axios.post("login",this.formData).then(function(e){200==e.code?(t.$message({type:"success",message:"登录成功!"}),setTimeout(function(){t.$router.push("/header")},500)):t.$message({type:"warning",message:e.msg})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("el-form",{ref:"form",staticClass:"login",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{staticClass:"userName",attrs:{label:"账号"}},[a("el-input",{model:{value:t.formData.user,callback:function(e){t.$set(t.formData,"user",e)},expression:"formData.user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.formData.pwd,callback:function(e){t.$set(t.formData,"pwd",e)},expression:"formData.pwd"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(s,r,!1,function(t){a("laX8"),a("baNu")},"data-v-5378e30a",null);e.default=n.exports},baNu:function(t,e){},laX8:function(t,e){}});
//# sourceMappingURL=9.926c9d9ff84241b24e5f.js.map