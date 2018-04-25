//登录接口
var express = require('express');
var router = express.Router();
var crmUsers = require('../config/modules/crmUsers')
var validator = require('validator')
var md5 = require('blueimp-md5')


router.post('/login',(req,res)=>{
    let {pwd,user} = req.body
    if(!user||validator.isEmpty(user.trim())){
        res.json({
            data: '用户名不合法',
            code: 400,
            msg: '用户名不合法',
            ret: false
        })
        return
    }
    if(!pwd||validator.isEmpty(pwd.trim())){
        res.json({
            data: '密码不合法',
            code: 400,
            msg: '密码不合法',
            ret: false
        })
        return
    }else{
        //登录验证
        crmUsers.findOne({user},(err,data)=>{
            if(err){
                res.json({
                    data: err,
                    code: 500,
                    msg: '登陆失败',
                    ret: false
                })
                return
            }
            if(data==null){
                res.json({
                    data: "用户名不存在",
                    code: 400,
                    msg: '用户名不存在',
                    ret: false
                })
                return
            }
            if(md5(pwd)==data.pwd){
                req.session.user =data
                res.json({
                    data: "登陆成功",
                    code: 200,
                    msg: '登陆成功',
                    ret: true,
                })
                return
            }
            else{
                res.json({
                    data: "用户名与密码不匹配",
                    code: 400,
                    msg: '用户名与密码不匹配',
                    ret: false
                })
                return
            }
        })
    }
})

module.exports = router;
