// pages/login/login.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation:null,
    color: 0,
    type: 'password',
    boxUrl: false,
    // 0登录，1为注册
    choice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({ duration: 200})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击登录按钮动画
   */
  loginBtnAn:function() {
    this.animation.translate(0).step()
    this.setData({ animation: this.animation.export(), color: 0 })
  },
  /**
   * 点击注册按钮动画
   */
  registerBtnAn:function() {
    this.animation.translate(78).step()
    this.setData({ animation: this.animation.export(), color: 1})
  },
  /**
   * 显示密码
   */
  showPassword:function() {
    this.setData({ type: this.data.type == 'text' ? 'password' : 'text'})
  },
  /**
   *获取验证码
   */
  getYzm:function() {

  },
  /**
   * 勾选单选
   */
  checkBox:function(){
    this.setData({ boxUrl: this.data.boxUrl == false ? true : false })
  }

})