// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    wx.chooseImage({
      success:(res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imagePath : path
        })
      },
    })
  },
  handImageLoad(){
    console.log(1)
  }
})