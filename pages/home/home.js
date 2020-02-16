Page({
  data:{
    name:"Codezml",
    age:18,
    students:[
      { id: 1, name: '张三', age: 18},
      { id: 2, name: '王五', age: 19 },
      { id: 3, name: '老刘', age: 20 },
      { id: 4, name: '小七', age: 21 },
      { id: 5, name: '大巴', age: 22 }
    ],
    count:0
  },
  handleBtnClick(){
    // console.log("按钮发生了点击")
    // this.setDate()
    this.setData({
      count:this.data.count+1
    })
  },
  handleSubtraction(){
    this.setData({
      count:this.data.count-1
    })
  }
})