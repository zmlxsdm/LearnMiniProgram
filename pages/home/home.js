// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleIncrement(){
    // console.log('111111111')
    this.setData({
      counter:this.data.counter+1
    })
  }
})