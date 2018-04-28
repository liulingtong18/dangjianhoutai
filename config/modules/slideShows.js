var mongoose = require('mongoose')

var slideShowsSchema = new mongoose.Schema({
    pic:{
        type: String
    },
    title: {
        type: String
    },
    url:{
        type: String  //跳转新闻的地址id
    },
    priority:{
        type: Number //轮播图的优先级
    },
    status:{
        type: Number, //判断轮播图是否禁用
        default: 0
    }
},{versionKey: false,timestamps: {createAt: "createTime",updateAt: "updateTime"}})
//去掉自动加入的-v：0
module.exports = mongoose.model("slideShows",slideShowsSchema,"slideShows")