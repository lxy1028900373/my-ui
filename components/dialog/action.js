// components/wux-dialog/action.js
const defaults = {
  title: '',      //顶部标题
  titleStyle: '', //标题样式
  actions: [],    //选项列表
  cancelAction: 0,//取消按钮选项
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
    /**
     * 按钮点击事件
     * 按钮传值 show 为 1 时，当前弹窗不关闭，将呼起第二个弹窗，二层弹窗的按钮事件都要加上$wuxDialog().hide()
     */
    actionsTapped(e) {
      const { index } = e.currentTarget.dataset;
      wx.showToast({
        icon: 'none',
        title: `选择了${this.data.actions[index].name}`
      })
      this.hide()
    },
    open(opts = {}) {
      return this.show(opts)
    }
  }
})
