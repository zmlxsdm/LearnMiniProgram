// pages/home/home.js

import request from '../../servce/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //原生
      // wx.request({
      //   url: 'http://123.207.32.32:8000/recommend',
      //   success:function(res){
      //       console.log(res)
      //   }
      // }),
      // wx.request({
      //   url: 'http://httpbin.org/post',
      //   method:'post',
      //   data:{
      //     name:'zml',
      //     age:18
      //   },
      //   success:function(res){
      //     console.log(res)
      //   }
      // })

      request({
        url:'http://123.207.32.32:8000/recommend'
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
})