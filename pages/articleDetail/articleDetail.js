var WxParse = require('../../wxParse/wxParse.js');
var db = require("../../utils/db.js");

Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var articleId = options.articleId;
    this.getArticleHtml(articleId);
  },
  getArticleHtml: function (options) {
    var that = this;
    db.getArticleHtml(options, (res, err) => {
      let article;
      if (res.data.result != undefined) {
        article = res.data.result.value;
        WxParse.wxParse('article', 'html', article, that, 5);
      } else {
        wx.showToast({
          title: '跳转失败',
          duration: 1000
        })
        wx.navigateBack({
          delta: 1, // 回退前 delta(默认为1) 页面
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      }
    })
  }
})