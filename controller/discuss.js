var express = require('express');
var router = express.Router();
var discuss = require('../config/modules/discuss')



/* GET home page. */
router.post('/add',(req,res)=>{
    let {title,content,contentText} = req.body
    discuss.create({title,content,contentText}).then(data=>{
        res.json({
            data: 'success',
            code: 200,
            msg: 'success'
        })
    }).catch(err=>{
        next(new Error(err))
    })
})

//获取民主评议列表
router.post('/get', function(req, res, next) {
    let {id, page = 1,pageSize=10,status} = req.body;
    let params = {};
    if(!id&&!status){  //没有传id
       params = {};
        discuss.find(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
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
    }else if(!id&&status){
        params.status = status
        discuss.findOne(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
            if(err){
                res.json({
                    data: err,
                    code: 500,
                    msg: '查询失败',
                    ret: false
                });
                return
            }
            console.log(data)
            if(data==null){
                res.json({
                    data: "没有开启的民主评议",
                    code: 400,
                    msg: '没有开启的民主评议',
                    ret: false
                })
            }else{
                res.json({
                    data: data,
                    code: 200,
                    msg: 'success',
                    ret: true
                })

            }

        })

    }else if(id&&!status){
        params._id = id
        discuss.find(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
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


    }else {
        params._id = id
        params.status = status
        discuss.findOne(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
            if(err){
                res.json({
                    data: err,
                    code: 500,
                    msg: '查询失败',
                    ret: false
                });
                return
            }
            if(data==null){
                res.json({
                    data: "没有开启的民主评议",
                    code: 400,
                    msg: '没有开启的民主评议',
                    ret: false
                })
            }else{
                res.json({
                    data: data,
                    code: 200,
                    msg: 'success',
                    ret: true
                })

            }

        })

    }
});
//修改民主评议状态
router.post('/updateStatus',(req,res)=>{
    let {id,status} = req.body
    if(status==1){
        discuss.findOne({status}).then(data=>{
            if(data==null){
                discuss.update({_id:id},{$set:{status}}).then(data=>{
                    res.json({
                        data: "success",
                        code: 200,
                        msg: "success"
                    })
                }).catch(err=>{
                    next(new Error(err))
                })
            }else{
                res.json({
                    data: '已经有一个开启的民主评议了',
                    code: 400,
                    msg: '已经有一个开启的民主评议了'
                })
            }
        })
    }else if(status&&status==2){
        discuss.update({_id:id},{$set:{status}}).then(data=>{
            res.json({
                data: "民主评议结束成功",
                code: 200,
                msg: "民主评议结束成功"
            })
        }).catch(err=>{
            next(new Error(err))
        })
    }

})
router.post('/update',(req,res)=>{
    let{id,title,content,contentText} = req.body
    discuss.update({_id:id},{$set:{title,content,contentText}}).then(data=>{
        res.json({
            data: 'success',
            code: 200,
            msg: 'success'
        })
    }).catch(err=>{
        next(new Error(err))
    })
})
module.exports = router;
