// components/list/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      let _ = this;
      _.setData({
        activeIndex: e.currentTarget.dataset.index
      })
      _.triggerEvent('click', e.currentTarget.dataset.index)
    }
  }
})
