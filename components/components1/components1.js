// components/components1/components1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
    age:Number,
    mattor:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"Hello Component"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendPage(){
      //触发自定义 myevent 事件，传值
      this.triggerEvent("myevent",{name:"魏无羡",age:"22"})
    }
    
  }
})
