// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handerItemClick(event){
      // console.log(1)
      const index = event.currentTarget.dataset.index
      // console.log(index)
      this.setData({
        currentIndex:index
      })

      this.triggerEvent(itemclick,{index,title:this.properties.titles[index]},{})
    }
  }
})
