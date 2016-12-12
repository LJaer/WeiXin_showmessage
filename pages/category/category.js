// pages/category/category.js
Page({
  data:{},
  onLoad:function(options){
    let that = this
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        appkey: '9emcn7gs9wx8c5i200yzdqlad3tb1d2m',
        key: "allcategory",
        type: "category"
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
         'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        // success
        let categorys = res.data.result.value
        that.setData({categorys:categorys})
      }
    })    
  }
})