// components/swiper/banner.js
let app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{//列表
      type: Array
    },
    indicators:{//是否显示指示器
      type: Boolean,
      value: false
    },
    loop:{//是否开启循环播放
      type: Boolean,
      value: true
    },
    duration:{//动画时长，单位为 ms
      type: String,
      value: 1000
    },
    interval:{//自动轮播间隔，单位为 ms
      type: String,
      value: 3000
    },
    bannerMargin:{//banner间距
      type: String,
      value: 0
    },
    animation:{//是否显示动画效果
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bannerSlideIndex: 0, //顶部banner索引
    // bannerAutoplay: true,
    // bannerInterval: 3000,
    // bannerDuration: 1000,
    screenWidth:0,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //banner切换事件
    intervalChange(e) {
      this.setData({
        bannerSlideIndex: e.detail.current
      })
    },
    // 点击banner
    handleBannerTap(e){
      let _ = this;
      console.log(e)
    },
  }
})
