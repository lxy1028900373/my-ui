// components/list/collapse.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{//列表
      type: Array,
      value: []
    },
    accordion:{//是否手风琴
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换面板状态
    changeCollapse(e){
      let _ = this;
      console.log(e)
      console.log(_.data.accordion)
      console.log(_.properties.accordion)
      if(_.data.accordion){
        _.setData({
          activeIndex: e.currentTarget.dataset.index
        })
      }else{
        this.triggerEvent('click', e.currentTarget.dataset.index)
      }
      
    }
  }
})
