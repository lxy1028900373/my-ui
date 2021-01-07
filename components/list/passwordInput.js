// components/list/upload.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    length:{
      type: [Number, String],
      default: 6
    },
    value:{
      type: String
    },
    isPassword:{  //是否密文显示 true:密文 false:明文
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[],
    isFocus: false,    //聚焦
    disabled:true,
  },
  observers:{
    'value': function(value){
      let _ = this,
          list= [];
      for (let i = 0; i < _.properties.length; i++) {
        let _chart= value[i];
        list.push(_chart)
      }
      _.setData({
        list: list
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 聚焦
    bindFocus(e) {
      let _ = this;
      let _inputValue = e.detail.value;
      let _length = _inputValue.length;
      if(_length == 6){
        _.setData({
          disabled: false,
        })
      }else{
        _.setData({
          disabled: true,
        })
      }
      _.triggerEvent('focus', _inputValue)
    },
    // 输入密码
    changePassword() {
      console.log('tap')
      let _ = this;
      _.setData({
        isFocus: true
      })
    },
  }
})
