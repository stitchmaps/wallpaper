var e = null;

Page({
  data: {
    allResList: ["https://images.unsplash.com/photo-1609611337748-ff7063295e4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1609623096082-ed982304b689?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80", "https://images.unsplash.com/photo-1609599161280-580610c0bb4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80","https://images.unsplash.com/photo-1609645778471-613f21fcf3df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"],
    currentImgIndex: 0,
    icon: ["../../image/YSG-x-logo.png"],
    addPersonNum: 0
  },
  onLoad: function () {
    this.setData({
      addPersonNum: parseInt(200 * Math.random() + 400)
    })/* , wx.createRewardedVideoAd && ((e = wx.createRewardedVideoAd({
      adUnitId: "adunit-9e9b61bbf0da8932"
    })).onLoad(function () { }), e.onError(function (e) { }), e.onClose(function (e) {
      e && e.isEnded ? wx.setClipboardData({
        data: "1178539345",
        success: function () {
          wx.showToast({
            title: "已复制快去添加"
          });
        }
      }) : wx.showToast({
        title: "你要看完才行哦",
        icon: "none"
      });
    })); */
  },
  swiperChange: function (e) {
    var a = e.detail.current;
    this.setData({
      currentImgIndex: a
    });
  },
  previewImg: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: [e.currentTarget.dataset.src]
    });
  },

  //广告
/*   addGroup: function () {
    e && e.show().catch(function () {
      e.load().then(function () {
        return e.show();
      }).catch(function (e) {
        console.log("激励视频 广告显示失败");
      });
    });
  }, */
  onShareAppMessage: function () {
    return {
      title: "仪式感壁纸",
      path: "pages/index/index"
    };
  }
});