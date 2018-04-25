var mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({
    address:{
        type: String//地址
    },
    username:{
        type: String //用户姓名
    },
    birthday:{
        type: String//生日
    },
    education:{
        type: String //最高学历

    },
    hometown:{
        type: String //家庭住址

    },
    header:{
        type: String ,
        default: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1523971292&di=81e0cca9f821edf354dd159701b0ba04&src=http://imgsrc.baidu.com/imgad/pic/item/c8ea15ce36d3d5390989ab0a3087e950342ab047.jpg'//头像
    },
    sex:{
      type: Number, //性别
      defaule: 1
    },
    age:{
        type: String  //年龄
    },
    pwd:{
        type: String  //密码
    },
    qqNum: {
        type: Number
    },
    wxNum: {
        type: String
    },
    idCard:{
        type: Number//账号
    },
    branchId:{
        type: String   //用户分类id
    },
    branchName:{
        type: String    //用户分类名称
    },
    partyStatus:{    //当前身份对应的数值
        type: Number,
        default: 0
    },
    partyIdentity:{    //当前身份
        type: String,
        default: "积极分子"
    },
    score:{
        type: Number,  //积分数
        default: 0
    },
    nation:{
        type: String //民族
    },
    jobRank:{
        type: String
    },
    salary:{
        type: String
    },
    createTime:{
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    }
},{versionKey: false})
//去掉自动加入的-v：0
module.exports = mongoose.model("users",usersSchema,"users")