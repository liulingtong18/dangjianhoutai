webpackJsonp([10],{"+tFH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),i=a("tyP1"),o=a("spLH"),r={name:"list",components:{editor:i.a,pagination:o.a},data:function(){return{tableData:[],dialogTableVisible:!1,formData:{title:"",content:"",contentText:""},id:"",status1:1,status2:2,params:{pageSize:5,page:1}}},methods:{getText:function(t){this.formData.contentText=t},getdata:function(){var t=this;this.$axios.post("getDiscuss",this.params).then(function(e){t.tableData=e.data})},handle:function(t){var e=this;this.$axios.post("getDiscuss",{id:t}).then(function(a){e.formData=a.data[0],e.id=t})},change:function(){var t=this,e=n()({},this.formData,{id:this.id});this.$axios.post("updateDiscuss",e).then(function(e){200==e.code&&(t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.$router.go(0)},1e3))})},start:function(t){var e=this,a={status:this.status1,id:t};this.$axios.post("updateStatus",a).then(function(t){200==t.code&&(e.$message({type:"success",message:"开启成功!"}),setTimeout(function(){e.$router.go(0)},1e3))})},end:function(t){var e=this,a={status:this.status2,id:t};this.$axios.post("updateStatus",a).then(function(t){200==t.code&&(e.$message({type:"success",message:"结束成功!"}),setTimeout(function(){e.$router.go(0)},1e3))})},pageSizeChange:function(t){this.params.pageSize=t,this.getdata()},currentPageChange:function(t){this.params.page=t,this.getdata()}},created:function(){this.getdata()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.tableData,"empty-text":"-"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("进行中")]):t._e(),t._v(" "),0==e.row.status?a("el-tag",{attrs:{type:"info"}},[t._v("未开启")]):t._e(),t._v(" "),2==e.row.status?a("el-tag",{attrs:{type:"danger"}},[t._v("已结束")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createdAt))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status||0==e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handle(e.row._id),t.dialogTableVisible=!0}}},[t._v("修改")]):t._e(),t._v(" "),0==e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.start(e.row._id)}}},[t._v("开启")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.end(e.row._id)}}},[t._v("结束")]):t._e()]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"修改",visible:t.dialogTableVisible,width:"80%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容"}},[a("editor",{on:{getText:t.getText},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:t.change}},[t._v("保存")])],1)],1)],1),t._v(" "),a("pagination",{on:{pageSizeChange:t.pageSizeChange,currentPageChange:t.currentPageChange}})],1)},staticRenderFns:[]};var l=a("VU/8")(r,u,!1,function(t){a("bEzZ")},"data-v-a9666010",null);e.default=l.exports},bEzZ:function(t,e){}});
//# sourceMappingURL=10.39f5f3b5ef4e17282aa9.js.map