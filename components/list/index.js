// components/list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{//主标题
      type: String,
      value: ''
    },
    list:{//列表
      type: Array,
      value: []
    }
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
    //点击子列表
    clickItem(e){
      console.log(e)
      this.triggerEvent('click', e.currentTarget.dataset)
    }
  }
})
