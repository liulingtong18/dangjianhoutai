webpackJsonp([19],{"4F28":function(t,e){},"uT3/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s={name:"list",data:function(){return{tableData:[],dialogTableVisible:!1,formData:{img:[],type:"",reason:""},id:"",pageSize:5,page:1}},methods:{getdata:function(){var t=this,e={page:this.page,pageSize:this.pageSize,kind:1};this.$axios.post("getaudits",e,{withCredentials:!0}).then(function(e){t.tableData=e.data})},handle:function(t){var e=this;this.$axios.post("getaudits",{id:t,kind:1}).then(function(a){e.formData=a.data[0],e.id=t})},change:function(){var t=this,e=n()({},this.formData,{id:this.id,kind:2});this.$axios.post("updateaudits",e).then(function(e){200==e.code&&(t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.$router.go(0)},1e3))})},handleSizeChange:function(t){this.pageSize=t,this.getdata()},handleCurrentChange:function(t){this.page=t,this.getdata()}},created:function(){this.getdata()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"username"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.username))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.type?a("el-tag",{attrs:{type:"success"}},[t._v("通过")]):t._e(),t._v(" "),0==e.row.type?a("el-tag",{attrs:{type:"info"}},[t._v("审核中")]):t._e(),t._v(" "),2==e.row.type?a("el-tag",{attrs:{type:"danger"}},[t._v("未通过")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"理由"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.reason))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handle(e.row._id),t.dialogTableVisible=!0}}},[t._v("操作")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"审核",visible:t.dialogTableVisible,width:"80%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"100px"}},[a("el-form-item",t._l(t.formData.img,function(t){return a("div",{staticStyle:{"margin-right":"100px"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticClass:"avatar",attrs:{src:t}})])])})),t._v(" "),a("el-form-item",{staticClass:"footer"},[a("div",{staticStyle:{margin:"0 auto",width:"500px"}},[a("el-radio-group",{staticClass:"left group",model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("el-radio",{attrs:{label:"1"}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("不通过")])],1),t._v(" "),a("el-input",{staticClass:"left reason",attrs:{placeholder:"请输入理由"},model:{value:t.formData.reason,callback:function(e){t.$set(t.formData,"reason",e)},expression:"formData.reason"}}),t._v(" "),a("el-button",{staticClass:"left",attrs:{type:"primary"},on:{click:function(e){t.change()}}},[t._v("提交")]),t._v(" "),a("div",{staticStyle:{clear:"both"}})],1),t._v(" "),a("div",{staticStyle:{clear:"both"}})])],1)],1),t._v(" "),a("el-pagination",{staticClass:"bottom",attrs:{background:"","page-sizes":[5,10,15,20],"page-size":5,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(t){a("4F28")},"data-v-0929bf4b",null);e.default=o.exports}});
//# sourceMappingURL=19.dda3b3a45a654a321818.js.map