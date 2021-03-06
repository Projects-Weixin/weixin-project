// pages/navtab/navtab.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: app.globalData.screen.width,
    height: app.globalData.screen.height,
    navTabs: ['课堂学习', '课堂日志'],
    log_navTabs: ["全部", "资料", "测试", '投票'],
    activeIndex: 0,
    log_activeIndex: 0,
    sliderOffset: 0,
  },
  navtabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  log_navtabClick: function(e) {
    this.setData({
      log_activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderOffset: res.windowWidth / (that.data.navTabs.length + 1) * that.data.log_activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})