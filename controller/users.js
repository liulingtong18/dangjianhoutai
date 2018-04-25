//后台登录接口

var express = require('express');
var router = express.Router();
var crmUsers = require('../config/modules/crmUsers')
var validator = require('validator')
var md5 = require('blueimp-md5')



/* GET home page. */


//注册接口
router.post('/reg', (req,res)=> {
    let {user,pwd,username} = req.body
    if(!user || validator.isEmpty(user.trim())){
        res.json({
            data: '用户名不合法',
            code: 400,
            msg: '用户名不合法'
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
        crmUsers.findOne({user},(err,data)=>{
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
                crmUsers.create({user,pwd,username},(err,data)=>{
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


module.exports = router;
