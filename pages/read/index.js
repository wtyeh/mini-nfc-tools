Page({
  //登录按钮
  onLogin: function (e) {
    console.log(e)
    var detail = e.detail
    if (detail.errMsg == "getPhoneNumber:ok") {
      console.log("用户同意授权")
      var code = detail.code
      console.log("code", code)
      wx.switchTab({
        url: '../read-tag/index'
      })
    }
  }
})
