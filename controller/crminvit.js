//帖子
var express = require('express');
var router = express.Router();
let invits = require('../config/modules/invitation');
let revert = require('../config/modules/revert');

/* GET home page. */
router.post('/get', function(req, res, next) {
    let {page = 1,pageSize=10} = req.body;
    invits.find().sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
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
router.post('/del',(req,res)=>{
    let {id} = req.body;
    invits.remove({_id: id},(err,data)=>{
        if(err){
            res.json({
                data: err,
                code: 500,
                msg: "false",
                ret: false
            })
            return
        }
        //没有找到可删除的数据
        if(data.n == 0){
            res.json({
                data: '无效的id',
                code: 400,
                msg:  '无效的id',
                ret: false
            });
            return
        }
        revert.remove({forumId:id},(err,data)=>{
            console.log(data)
        })
        res.json({
            data: "success",
            code: 200,
            msg: "success",
            ret: true
        })

    })
});

module.exports = router;
