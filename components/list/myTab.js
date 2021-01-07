// components/list/myTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String
    },
    list:{
      type: Array
    },
    active:{
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    translateNum: 0
  },
  observers:{
    'list':function(list){
      let _ = this;
      let val={
        index: _.properties.active
      }
      _.tabChange(val)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e){
      let _ = this;
      let target= e.index >=0 ? e : e.currentTarget.dataset;
      let width= wx.getSystemInfoSync().windowWidth;
      
      if(_.properties.list.length <= 6){
        _.setData({
          translateNum: parseInt(width/_.properties.list.length*(target.index+1) - width/_.properties.list.length/2 )
        })
      }else{
        _.setData({
          translateNum: parseInt(width/5*(target.index+1) - width/5/2 )
        })
      }
      
      if(e.currentTarget){
        _.triggerEvent('change', target.index)
      }
    }
  }
})
