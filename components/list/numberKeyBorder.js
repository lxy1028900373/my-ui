// components/list/numberKeyBorder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    is_show: false,
    keyList:[
      "1","2","3","4","5","6","7","8","9","keyborder","0","delete"
    ]
  },
  observers:{
    'status': function(status){
      let _ = this;
      _.setData({
        is_show: status
      })
      console.log('监听数字键盘')
      console.log(_.is_show, _.properties.status)
    }
  },
  created(){
    let _ = this;
    _.inputValue= '';
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hide(){
      console.log('hide------')
      let _ = this;
      _.setData({
        is_show: false
      })
    },
    onChange(e){
      let _ = this;
      console.log('change---------')
      console.log(e)
      let value= e.currentTarget.dataset.item;
      let val={
        value: value,
        type: ''
      }
      switch (value) {
        case 'keyborder':
          console.log('收起键盘')
          _.hide();
          val.type= 'keyborder';
          break;
        case 'delete':
          // if(_.inputValue&&_.inputValue.length > 0){
          //   _.inputValue= _.inputValue.substr(0, _.inputValue.length-1)
          // }
          // console.log('inputValue='+_.inputValue);
          console.log('删除')
          val.type= 'delete';
          break;
        default:
          // console.log('数字'+value)
          // _.inputValue= _.inputValue.concat(value);
          // console.log('inputValue='+_.inputValue);
          val.type= 'change';
          break;
      }
      _.triggerEvent('change', val)
    }
  }
})
