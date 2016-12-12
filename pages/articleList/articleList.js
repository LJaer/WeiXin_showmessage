var config = require("../../utils/config");
var util = require("../../utils/util.js");
var db = require("../../utils/db.js");

Page({
  data: {},
  onLoad: function (options) {
    //页面初始化 options为页面跳转所带来的参数
    var category = options.category
    this.getArticleListByCategoryId(category)
  },
  //根据分类id获取分类所有文章信息
  getArticleListByCategoryId:function(category){
    let that = this;
    db.getArticleListByCategoryId(category,(res,err)=>{
      let articleMsgs = res.data.result
      that.setData({articleMsgs:articleMsgs})
    })

  }
})