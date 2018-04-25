const {Router} = require('express');
const router = Router();
const PS = require('../config/modules/personSummary')

router.post('/get',(req,res)=>{  //获取个人总结
    let {discussId,branchId,page=1,pageSize=10,id} = req.body;
    let params = branchId ? {discussId,branchId} : {discussId};
    if(id){
        PS.findOne({_id: id}).then(data=>{
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        })
    }else{
        PS.find(params).sort({_id:-1}).limit(pageSize).skip((page-1)*pageSize).then(data=>{
            res.json({
                data,
                code: 200,
                msg: 'success'
            })
        })
    }
})
router.post("/update", (req, res, next) => { //管理员审核
    let {id,status} = req.body;

    PS.update({_id: id},{$set:{status:status}}).then(data => {
        res.json({
            data: "success",
            code: 200,
            msg: "success"
        })
    })
})


module.exports = router