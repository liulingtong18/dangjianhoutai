//审核接口
var express = require('express');
var router = express.Router();
let audits = require('../config/modules/audit');

/* GET home page. */
router.post('/get', function(req, res, next) {
    let {id, page = 1,pageSize=10,kind} = req.body;
    let params = {kind};
    if(!id){  //没有传id
        params.kind = kind
    }else{
        params._id = id
        params.kind = kind
    }

    audits.find(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
        if(err){
            res.json({
                data: err,
                code: 500,
                msg: '查询失败',
                ret: false
            });
            return
        }
        res.json({
            data: data,
            code: 200,
            msg: 'success',
            ret: true
        })
    })
});
router.post('/update',(req,res)=>{
    let {id,type,reason} = req.body;
    audits.update({_id: id},{$set:{type,reason,isRead:1,updateTime:  new Date()}},(err,data)=>{
        if(err){
            res.json({
                data: err,
                code: 500,
                msg: '修改失败',
                ret: false
            })
            return
        }
        if(data.n == 0){
            //数据库查找不到指定ID
            res.json({
                data: '无效的id',
                code: 400,
                msg: '无效的id',
                ret: false
            })
        }else{
            res.json({
                data: 'success',
                code: 200,
                msg: 'success',
                ret: true
            })
        }
    })
});
module.exports = router;
