const TOKEN = 'token'
App({
  globalData:{
    token:''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1、先从缓冲中取出token
      const token = wx.getStorageSync(TOKEN)
      if(token && token.length !== 0){
        this.check_token(token)
      }else{
          this.login()
      }

    //登录操作
    
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:res=>{
        // console.log(res)
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          console.log('有效')
          this.login()
        }
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  login(){
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        // console.log(res)
        // 1、获取code
        const code = res.code
        // 2、将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            const token = res.data.token
            this.globalData.token = token
            //将token保存到本地缓存
            wx.setStorageSync(TOKEN, token)
          }
        })

      }
    })
  }

})
