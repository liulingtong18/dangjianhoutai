//个人总结
const mongoose = require("mongoose");

const personSummaries = new mongoose.Schema({
    pic: {
        type: Array,
        require: true
    },
    status: {
        type: Number,     //0代表未审核刚添加 1代表审核通过 2代表审核不通过
        default: 0
    },
    userId: {
        type: String,   //用户id
        index: true
    },
    discussId: {    //民主评议的id
        type: String,
        index: true
    },
    branchId: {
        type: String,  //用户分类id
        index: true
    },
    common: [{
        userId: {   //评论人
            type: String
        },
        content: {  //评论内容 0优1良2中3差
            type: Number,
            default: 0
        }
    }]
}, {versionKey: false, timestamps: {createAt: "createTime",updateAt: "updateTime"}})

module.exports = mongoose.model("personSummaries", personSummaries)