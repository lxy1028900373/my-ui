// components/list/button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    size:{//按钮尺寸 l m s
      type: String,
      value: 'm'
    },
    type:{//按钮类型 orange purple
      type: String,
      value: 'm'
    },
    color:{//按钮颜色
      type: String,
      value: ''
    },
    block:{//是否为块级元素
      type: Boolean,
      value: false
    },
    square:{//是否为方形按钮,默认圆形
      type: Boolean,
      value: false
    },
    disabled:{//是否禁用按钮
      type: Boolean,
      value: false
    },
    title:{//按钮名称
      type: String,
      value: ''
    },
    style:{//自定义样式
      type: String,
      value: ''
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
    handleBtnClick(){
      console.log('btn click')
      this.triggerEvent('click', false)
    }
  }
})
