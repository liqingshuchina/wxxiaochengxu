// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{
      id:1,
      title:"新鲜梨花带雨",
      image:'../../img/goods1.png',
      price:15,
      stock:'有货',
      detail:'这里是梨花带雨详情..',
      parameter:'125g/个',
      service:'不支持退货'
    },
    show:false,
    num:1,
    totalNum:0,
    hasCarts:false,
    scaleCart:false,
    curIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addCount:function(){
    let num=this.data.num;
    num++;
    this.setData({
      num:num
    })
  },
  addToCart:function(){
    let _this=this;
    let num=this.data.num;
    let total=this.data.totalNum;
   // show:true,使用to_cart_icon这个标签,调用cart1这个小购物车飞出去的动画动作
    _this.setData({
      show:true
    })
    //整个计时器自上而下的执行,先关闭cart1的动画,打开cart2的动画,
    //在执行里面一层定时器,关闭cart2的动画,进行计算num传入的值
    //相当于这个定时器要在300ms之内执行完整个过程
    setTimeout(function(){
      _this.setData({
        show:false,
        scaleCart:true,//最外层定时器,关闭cart1的动画,打开cart2的动画
      })
      setTimeout(function(){
        //里面一层定时器,关闭cart2的动画,进行计算num传入的值
        _this.setData({
          scaleCart:false,
          hasCarts:true,
          totalNum:num+total,
        })
      },200)
    },300)
    
  },
  tabqiehuan:function(e){
    //参数e里面的index是一个字符串,直接调用不能出现效果,需要转换为数据类型
    console.log(e);
    //parseInt() 函数可解析一个字符串，并返回一个整数。
    let idx=parseInt(e.currentTarget.dataset.index);
    //再讲这里的idx的值传到curIndex里面去从而进行tab切换
    this.setData({
      curIndex:idx
    })
  },
  lookImg: function (e) {
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.dataset.sd, // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.sd] // 需要预览的图片http链接列表
    })
  }
})