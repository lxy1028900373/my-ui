// components/dialog/popup.js
const defaults = {
  in: false
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
     * 隐藏并执行关闭按钮其他事件
     */
    closeBtnOnTap(){
        const closeBtn = this.data.closeBtn
        this.hide(() => typeof closeBtn.onTap === 'function' && closeBtn.onTap())
    },
    /**
     * 显示
     */
    show(opts = {}) {
      let _ = this;
        const options = Object.assign({}, defaults, opts)
        this.setData({ in: true, ...options })
        return this.hide.bind(this)
    },
    open(opts = {}) {
      return this.show(opts)
    }
  }
})
