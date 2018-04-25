const {Router} = require('express')
const router = Router()
const category = require("../config/modules/category")


router.post('/add',(req,res,next)=>{
    const {label,value} = req.body
    category.create({label,value}).then(data=>{
        res.json({
            data:"分类插入成功",
            code: 200,
            msg: "success"
        })
    }).catch(err =>{
        const error = new Error(err)
        next(err)
    })
})

router.post('/get',(req,res)=>{
    var {page=1,pageSize = 10} = req.body
    page = parseInt(page)  //解析字符串返回数值
    pageSize = parseInt(pageSize)
    category.find().limit(pageSize).skip((page-1)*pageSize).then(data=>{
        res.json({
            data:data,
            code: 200,
            msg: "success"
        })
    })
})
router.post('/update',(req,res)=>{
    let {id,label,value} = req.body;
    category.update({_id: id},{$set:{label,value,updateTime:  new Date()}},(err,data)=>{
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
router.post('/del',(req,res)=>{
    let {id} = req.body;
    category.remove({_id: id},(err,data)=>{
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

module.exports = router