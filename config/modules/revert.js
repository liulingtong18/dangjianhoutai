var mongoose = require('mongoose')

var revertsSchema = new mongoose.Schema({
    user_id:{
        type: String
    },
    username:{
        type: String
    },
    header:{
        type: String
    },
    comment:{
        type: String
    },
    type:{
        type: Number,
        default: 2
    },
    forumId:{
        type: String //评论的那一条的id
    }
},{versionKey: false,timestamps: {createAt: "createTime",updateAt: "updateTime"}})
//去掉自动加入的-v：0u
module.exports = mongoose.model("reverts",revertsSchema,"reverts")