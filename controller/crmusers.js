let express = require('express');
let router = express.Router();
let users = require('../config/modules/users');

var validator = require('validator')
var md5 = require('blueimp-md5')
router.post('/reg', (req,res)=> {
    let {idCard,pwd,username,branchName,branchId} = req.body

    if(!idCard || validator.isEmpty(idCard.trim())){
        res.json({
            data: '用户名不合法',
            code: 400,
            msg: '用户名不合法',
            ret: false
        })
        return
    }
    else if(!pwd||validator.isEmpty(pwd.trim())){
        res.json({
            data: '密码不合法',
            code: 400,
            msg: "密码不合法",
            ret: false
        })
    } else{
        users.findOne({idCard},(err,data)=>{
            if(err){
                res.json({
                    data: err,
                    code: 500,
                    msg: "false",
                    ret: false
                })
                return
            }
            //看一下返回的值是什么
            if(data!=null){
                res.json({
                    data:'用户名已经被注册',
                    code: 400,
                    msg: '用户名已经被注册',
                    ret:false
                })
            }
            else {
                //可以注册的部分
                pwd = md5(pwd)
                users.create({idCard,pwd,username,branchId,branchName},(err,data)=>{
                    if (err){
                        res.json({
                            data: err,
                            code: 500,
                            msg: 'false',
                            ret: false
                        })
                        return
                    }
                    res.json({
                        data: '注册成功',
                        code: 200,
                        msg: "success",
                        ret: true
                    })
                })
            }
        })
    }
});
router.post("/get", (req, res) => {
    let {id, page = 1,pageSize=10} = req.body;
    let params = {};
    if(!id){  //没有传id
        params = {}
    }else{
        params._id = id
    }
    users.find(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
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
// router.post('/update',(req,res)=>{
//     let {id,idCard,username,pwd,author,title} = req.body;
//     users.update({_id: id},{$set:{contentText,content,img,author,title,updateTime:  new Date()}},(err,data)=>{
//         if(err){
//             res.json({
//                 data: err,
//                 code: 500,
//                 msg: '修改失败',
//                 ret: false
//             })
//             return
//         }
//         if(data.n == 0){
//             //数据库查找不到指定ID
//             res.json({
//                 data: '无效的id',
//                 code: 400,
//                 msg: '无效的id',
//                 ret: false
//             })
//         }else{
//             res.json({
//                 data: 'success',
//                 code: 200,
//                 msg: 'success',
//                 ret: true
//             })
//         }
//     })
// });
router.post('/del',(req,res)=>{
    let {id} = req.body;
    users.remove({_id: id},(err,data)=>{
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
        res.json({
            data: "success",
            code: 200,
            msg: "success",
            ret: true
        })
    })
});

module.exports = router;