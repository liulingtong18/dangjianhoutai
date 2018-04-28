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
    }
},{versionKey: false,timestamps: {createAt: "createTime",updateAt: "updateTime"}})
//去掉自动加入的-v：0
module.exports = mongoose.model("crmUsers",crmUsersSchema,"crmUsers")