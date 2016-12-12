var config = require("../../utils/config");
var util = require("../../utils/util.js");
var db = require("../../utils/db.js");

Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 100
  },
  onLoad: function (options) {
    this.getShowImg()
    this.getLastNews()
  },
  //请求展示的图片
  getShowImg: function (options) {
    let that = this
    options = {
      url: config.clubApi.get,
      data: {
        appkey: config.appKey,
        key: "show",
        type: "picture"
      }
    }
    util.request(options, function (res) {
      let showPictures = res.data.result.value
      
      that.setData({ showPictures: showPictures })
    })
  },
  //请求最新新闻
  getLastNews: function (options) {
    let that = this
    options = {
      url: config.clubApi.get,
      data: {
        appkey: config.appKey,
        key: "lastnews",
        type: "article"
      }
    }
    util.request(options, function (res) {
      let lastnews = res.data.result.value
      that.setData({ lastnews: lastnews })
    })
  }
})