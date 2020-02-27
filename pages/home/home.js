// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '点击成功',
      duration:500,
      icon:""
    })
  },
  handleShowModel(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel:false,//将取消按钮取消
      // cancelText:'退出',//将取消按钮改成退出
      success:function(res){
        console.log(res)
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载',
      mask:true//添加蒙版
    })

    setTimeout(()=>{
      wx.hideLoading()
    },2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['123123123','12ggg'],
      success:function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(option){
    return {
      title:'你好张三',
      path:'/pages/about/about',
      imageUrl:''
    }
  }
})