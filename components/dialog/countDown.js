// components/dialog/countDown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time:{
      type: Number
    },
    format:{
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    clock: '00:00:00'
  },
  ready: function() {
    this.data.countTime = this.properties.time;
    this.data.clock = this.properties.time;
    this.countdown();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    countdown() {
      let that = this;
      if (that.data.countTime <= 0) {
          that.setData({
              clock: "00:00:00",
              clockstatus: false
          });
          return;
      }
      setTimeout(function() {
          that.data.countTime -= 1000;
          that.setData({
              clock: that.date_format(that.data.countTime)
          });
          that.countdown();
      }, 1000)
    },
    date_format(micro_second) {
      let _ = this;
      let second= micro_second/1000;
      var day = this.fill_zero_prefix(Math.floor(second / 3600 / 24));
      var hr = this.fill_zero_prefix(Math.floor((micro_second % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      var min = this.fill_zero_prefix(Math.floor((micro_second % (1000 * 60 * 60)) / (1000 * 60)));
      var sec = this.fill_zero_prefix(second % 60);
      // console.log(`${day}:${hr}:${min}:${sec}`)
      if(_.data.format == 'HH:mm:ss'){
        if(day > 0){
          return `${day*60}:${min}:${sec}`
        }else{
          return `${hr}:${min}:${sec}`;
        }
      }else{
        if(day > 0){
          return `${day}天${hr}小时${min}分钟${sec}秒`
        }else{
          return `${hr}小时${min}分钟${sec}秒`;
        }
      }
    },
    // 不足10补0
    fill_zero_prefix(num) {
      return num < 10 ? "0" + num : num
    }
  }
})
