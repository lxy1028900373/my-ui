// pages/index/detail.js
import { 
  $wuxDialog, 
  $actionDialog,
  $notifyDialog,
  $overlay,
} from '../../components/index';
Page({
  data: {
    collapse: false,
    time: "86480000",
    showTab: false,
    tabbarType: '',
    tabIndex: 0,
    tabIndex2: 0,
    showKeyborder: true,
    tabList:[
      {title: '标签1'},
      {title: '标签2'},
      {title: '标签3'},
      {title: '标签4'}
    ],
    tabList2:[
      {title: '标签1', image:'../../src/images/tab_icon_1.jpg'},
      {title: '标签2', image:'../../src/images/tab_icon_2.jpg'},
      {title: '标签3', image:'../../src/images/tab_icon_1.jpg'},
      {title: '标签4', image:'../../src/images/tab_icon_2.jpg'}
    ],
    gridList:[
      {title: '标题', url:'https://oss.icebear.me/static/fenxiao/task/task_unpass.png'},
      {title: '标题', url:'https://oss.icebear.me/static/fenxiao/task/task_unpass.png'},
      {title: '标题', url:'https://oss.icebear.me/static/fenxiao/task/task_unpass.png'},
      {title: '标题', url:'https://oss.icebear.me/static/fenxiao/task/task_unpass.png'},
      {title: '标题', url:'https://oss.icebear.me/static/fenxiao/task/task_unpass.png'}
    ],
    sideList:[
      {title: '标题1'},
      {title: '标题2'}
    ],//侧边导航
    sideList2:[
      {title: '标题1', dot: true, badge: ''},
      {title: '标题2', badge: '99+'}
    ],//侧边导航-徽标
    sideList3:[
      {title: '标题1'},
      {title: '这是一个长标题', disabled: true}
    ],//侧边导航-禁用
    collapseList:[
      {title: '标题1', content:'内容1'},
      {title: '标题2', content:'内容2'},
      {title: '标题3', content:'内容3'}
    ],
    banners:[
      {image: "../../src/images/banner1.jpg"},
      {image: "../../src/images/banner2.jpg"},
      {image: "../../src/images/banner3.jpg"},
    ],//轮播
    passWord:"",  //密码
    passStatus: false,  //密码输入聚焦
    showSkeleton: true,
    loading: true,  //加载状态
  },
  onLoad: function (options) {
    console.log('detail-----')
    console.log(options)
    let _ = this;
    _.setData({
      type: options.type || ''
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  // 监听按钮点击事件
  handleBtnClick(){
    $notifyDialog().open({
      title: '监听到按钮点击事件'
    })
  },
  // 显示遮罩层
  showOverlay(){
    let _ = this;
    $overlay().open({
      show: true
    })
  },
  showDialog(){
    let _ = this;
    $wuxDialog().open({
      title: '标题',
      content: '这是一段副文本',
      closeBtn:{
        status: true,
        onTap(){
          console.log('关闭')
        }
      }
    })
  },
  showBtnDialog(){
    $wuxDialog().open({
      title: '标题',
      content: '这是一段副文本',
      buttons:[
        {
          text: '按钮标题',
          show: !0,  //当前按钮将呼起第二个弹窗时使用
          onTap(){
            console.log('按钮点击回调处理')
          }
        }
      ],
      closeBtn:{
        status: true,
        onTap(){
          console.log('关闭')
        }
      }
    })
  },
  showConfirmDialog(){
    $wuxDialog().confirm({
      title: '标题',
      content: '这是一段副文本',
      contentStyle: 'padding-bottom: 40rpx',
      displayConfirm: 1,
      onConfirm(e) {
        console.log('确定回调处理')
      },
      onCancel(e) {
        console.log('取消回调处理')
      },
    })
  },
  showActionDialog(){
    $actionDialog().open({
      title: '标题',
      actions:[{name: '选项一'},{name: '选项二'},{name: '选项三'}]
    })
  },
  showActionCancleDialog(){
    $actionDialog().open({
      title: '标题',
      actions:[{name: '选项一'},{name: '选项二'},{name: '选项三'}],
      cancelAction:1
    })
  },
  showNotifyDialog(){
    $notifyDialog().open({
      title: '通知内容'
    })
  },
  showNotifySussessDialog(){
    $notifyDialog().open({
      title: '通知内容',
      theme: 'success'
    })
  },
  showNotifyDangerDialog(){
    $notifyDialog().open({
      title: '通知内容',
      theme: 'danger'
    })
  },
  showNotifyCustomizeDialog(){
    $notifyDialog().open({
      title: '通知内容',
      time: 0
    })
  },
  showNotifyThemeDialog(){
    $notifyDialog().open({
      title: '通知内容',
      themeStyle: 'background: rgb(255, 225, 225);'
    })
  },
  // 切换数字输入框状态
  toggleKeyBorder(){
    let _ = this;
    _.setData({
      showKeyborder: !_.data.showKeyborder
    })
  },
  // 数字键盘输入监听
  changeNumberKey(e){
    let _ = this;
    console.log('密码输入监听')
    console.log(e)
    _.setData({
      passStatus: true
    })
  },
  // 输入密码
  handlePasswordFocus(e){
    let _ = this;
    console.log(e)
    _.setData({
      passWord: e.detail
    })
  },
  // 切换面板状态
  changeCollapse(e){
    let _ = this;
    let _list= _.data.collapseList;
    _list[e.detail].active= true;
    _.setData({
      collapseList: _list
    })
  },
  // 图片预览
  showImagePreview(){
    wx.previewImage({
      current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
      urls: [ // 所有图片的URL列表，数组格式
        'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
        'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
      ],
      success: function(res) {
        console.log(res)
      }
    })
  },
  // 切换tab
  handleTabChange(e){
    let _ = this;
    _.setData({
      tabIndex: e.currentTarget.dataset.type == 'tab1' ? e.detail : _.data.tabIndex,
      tabIndex2: e.currentTarget.dataset.type == 'tab2' ? e.detail : _.data.tabIndex2
    })
  },
  // 侧边导航点击事件监听
  handleSidebar(e){
    let _ = this;
    console.log(e)
    $notifyDialog().open({
      title: `当前切换到了 标签${e.detail+1}`
    })
  },
  onShareAppMessage: function () {

  }
})