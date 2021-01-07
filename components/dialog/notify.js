// components/wux-dialog/notify.js
// components/wux-dialog/action.js
const defaults = {
  title: '',      //顶部标题
  titleStyle: '', //标题样式
  theme: '',      //主题主题色
  themeStyle:'',  //自定义主题色
  time: 3000,     //展示时长(ms)，值为 0 时，notify 不会消失
};
Component({
  data: defaults,
  methods: {
    /**
     * 隐藏
     */
    hide(cb) {
      this.setData({ in: false })
      if (typeof cb === 'function') {
          cb()
      }
    },
    /**
     * 显示
     */
    show(opts = {}) {
      let _ = this;
        const options = Object.assign({}, defaults, opts)
        console.log('in:'+this.data.in)
        // 任务执行中时return
        if(this.data.in) return;
        this.setData({ 
          in: true, ...options 
        },()=>{
          // 默认3s后隐藏
          if(options.time > 0){
            setTimeout(() => {
              this.setData({
                in: false
              })
            }, options.time);
          }
          console.log(options)
          
        })
        return this.hide.bind(this)
    },
    open(opts = {}) {
      return this.show(opts)
    }
  }
})