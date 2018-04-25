var mongoose = require('mongoose')

var crmUsersSchema = new mongoose.Schema({
    user:{
       type: String,
        require: true
    },
    pwd:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
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
module.exports = mongoose.model("crmUsers",crmUsersSchema,"crmUsers")