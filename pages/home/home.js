// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },//按钮获取授权
  handleGetUserInfo(event){
    console.log(event)
  },
  // -------------------------1、监听页面的生命周期-----------
  //页面被加载出来时，回调函数
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
      }
    })
  },//页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },//页面显示出来时
  onShow(){
    console.log('onShow')
  },//当页面隐藏起来时
  onHide(){
    console.log('onHide')
  },//页面发生跳转，新页面销毁，返回首页时执行回调函数
  onUnload(){
    console.log('onUnload')
  }

  
})