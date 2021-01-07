// components/dialog/overlay.js
// components/wux-dialog/index.js
const defaults = {
  show: false,  //显示状态
};
Component({
  data: defaults,
  methods: {
    /**
     * 隐藏
     */
    hide(cb) {
      this.setData({ 
        in: false,
        fadeType: 'fade-leave-active'
      })
      setTimeout(() => {
        this.setData({ 
          fadeType: ''
        })
      }, 3000);
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
        this.setData({ 
          in: true, 
          ...options ,
          fadeType: 'fade-enter-active'
        })
        setTimeout(() => {
          _.setData({
            fadeType: ''
          })
        }, 3000);
        return this.hide.bind(this)
    },
    open(opts = {}) {
      return this.show(opts)
    },
  },
})