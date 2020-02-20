// pages/mess/mess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newDate:new Date().toLocaleString()
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        newDate: new Date().toLocaleString()
      })
    },1000)
  }

  
})