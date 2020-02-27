// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  options: {
    multipleSlots: true
  },//监听页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来时')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    }
  }

})
