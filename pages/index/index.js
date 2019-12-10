//index.js
const app = getApp()

Page({
  data: {
    list: ''
  },
  // houduanRequest: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'http://localhost:8080/getUser',//自己请求的服务器的地址
  //     method: 'post',
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success: function (req) {
  //       var list = req.data;
  //       if (list == null) {
  //         wx.showToast({
  //           title: 'ErrorMessage',
  //           icon: 'false',   //图标
  //           duration: 1500  //提示的延迟的时间
  //         })
  //       } else {
  //         that.setData({
  //           list: list
  //         })
  //       }
  //     }
  //   })
  // },

  onLoad: function () {

  },

})
