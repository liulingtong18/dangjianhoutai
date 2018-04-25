const {Router} = require("express");
const router = Router();

// router.use("/", require("./client"));


var session = require('express-session')
router.use(session({
    secret: 'llt',  //加严加密
    resave: false,  //是否重新保存session
    saveUninitialized: false,  //是否保存未被初始化的session
    cookie: { secure: false }   //是否是安全的cookie，安全就是HTTPS
}))
router.use("/login", require("./login"));


router.use((req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.json({
            data: '用户未登录',
            msg: '用户未登录',
            code: 400,
            ret: false
        })
        return
    }
})

router.use("/uploadToken", require("../uiti/qiniu"));
router.use("/crmcategory", require("./Category"));
router.use("/crmnews", require("./crmnews"));
router.use("/crmslideShows", require("./crmslideShows"));
router.use("/crmusers", require("./crmusers"));
router.use("/crmuserscategory", require("./userCategory"));
router.use("/crmaudits", require("./audit"));
router.use("/crminvits", require("./crminvit"));
router.use("/crmdiscuss", require("./discuss"));
router.use("/users", require("./users"));
router.use("/out", require("./out"));
router.use("/changePwd", require("./changePwd"));
router.use("/discuss", require("./discuss"));
router.use("/summary", require("./personalSummary"));

module.exports = router;