// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是默认标题',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses:['titleclass']
})
