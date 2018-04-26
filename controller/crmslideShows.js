let express = require('express');
let router = express.Router();
let slideShows = require('../config/modules/slideShows');
router.post('/add',(req,res)=>{
    let {pic,title,_id,priority} = req.body;
    slideShows.create({pic,title,url:_id,priority},(err,data)=>{
      if(err){
          res.json({
              data: err,
              code: 500,
              msg: '数据插入失败',
              ret: false
          });
          return
      }
      console.log(data)
      res.json({
          data: "success",
          code: 200,
          msg: 'success',
          ret: true
      })
    })
});
router.post("/get", (req, res) => {
    let {id, page=1,pageSize = 10} = req.body;
    let params = {};
    if(!id){  //没有传id
        params = {}
    }else{
        params._id = id
    }
    slideShows.find(params).sort({_id:-1}).skip((page-1)*pageSize).limit(pageSize).exec((err,data)=>{//exec检索字符串是否存在
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
    let {id,pic,priority,status,title,url} = req.body;
    slideShows.update({_id: id},{$set:{pic,priority,status,title,url,updateTime:  new Date()}},(err,data)=>{
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
    slideShows.remove({_id: id},(err,data)=>{
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