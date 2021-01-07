// components/wux-dialog/index.js
const defaults = {
  title: '',      //标题
  titleStyle: '', //标题样式
  content: '',    //副文本
  contentStyle: '',//副文本样式
  buttons: [],    //按钮
  closeBtn:{
    status:false,
    onTap:{}
  },              //关闭按钮的其他事件
  closeButtonOutside: 1,  //是否置于外层
  closeBtnStyle: '',       //关闭按钮样式
  displayCloseButton:true, //是否显示关闭按钮
  displayConfirm: 0,       //是否对话弹窗
  onConfirm:{},
  onCancel:{}
};
const defaultOptions = {
  onConfirm() {},
  confirmText: '确定',
  onCancel() {},
  cancelText: '取消'
}
Component({
  data: defaults,
  methods: {
    /**
     * 隐藏
     */
    hide(cb) {
      console.log('hide---------')
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
      console.log('show------')
      console.log(opts)
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
        console.log(opts)
        return this.hide.bind(this)
    },
    /**
     * 按钮点击事件
     * 按钮传值 show 为 1 时，当前弹窗不关闭，将呼起第二个弹窗，二层弹窗的按钮事件都要加上$wuxDialog().hide()
     */
    buttonTapped(e) {
        console.log(e)
        const { index } = e.currentTarget.dataset
        const button = this.data.buttons[index]
        if (!e.currentTarget.dataset.show) {
            this.hide(() => typeof button.onTap === 'function' && button.onTap(e))
        }else{
            typeof button.onTap === 'function' && button.onTap(e)
        }
    },
    open(opts = {}) {
      console.log('open-----------')
      console.log(opts)
      return this.show(opts)
    },
    // 确定弹窗
    confirm(opts = {}) {
      console.log('confirm------')
      console.log(opts)
      return this.open(Object.assign({
          buttons: [
            {
              text: opts.cancelText || defaultOptions.cancelText,
              onTap(e) {
                typeof opts.onCancel === 'function' && opts.onCancel(e)
              },
            },
            {
              text: opts.confirmText || defaultOptions.confirmText,
              onTap(e) {
                  typeof opts.onConfirm === 'function' && opts.onConfirm(e)
              },
            },
          ],
      }, opts))
    }
  },
})
