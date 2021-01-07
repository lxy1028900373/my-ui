const app = getApp()

Page({
  data: {
    basisList:[
      {title: 'Button按钮', type: 'button'},
      {title: 'Style内置样式', type: 'style'}
    ],//基础组件列表
    formList:[
      {title: '数字键盘', type: 'numberKey'},
      {title: '密码输入框', type: 'password'},
    ],//表单组件
    feedbackList:[
      {title: '动作面板', type: 'action'},
      {title: '弹出框', type: 'dialog'},
      {title: '消息通知', type: 'notify'},
      {title: '遮罩层', type: 'overlay'}
    ],//反馈组件
    revealList:[
      {title: '环形进度条', type: 'circle'},
      {title: '折叠面板', type: 'collapse'},
      {title: '倒计时', type: 'countDown'},
      {title: '分割线', type: 'divider'},
      {title: '空状态', type: 'empty'},
      {title: '图片预览', type: 'imagePreview'},
      {title: '轮播', type: 'swiper'},
    ],//展示组件
    navigateList:[
      {title: '宫格', type: 'grid'},
      {title: 'Tab标签页', type: 'tab'},
      {title: '侧边导航', type: 'sidebar'},
    ],//导航组件
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  clickItem(e){
    console.log('父组件接收')
    console.log(e)
    wx.navigateTo({
      url: '/pages/index/detail?type='+e.detail.type
    })
  }
})
