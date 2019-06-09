// pages/gouwuche/gouwuche.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      carts:[],
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
    this.setData({
      carts:[
        {id:1,title:'新鲜荠荠菜 500g',image:'../../img/s5.png',num:4,price:2.5,selected:true},
        { id: 2, title: '东北大米 500KG', image: '../../img/s6.png', num: 1, price: 1.2, selected: true },
      ]
    })
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
  selectList:function(e){
    // 这个是给图标写的事件
    // 1.查看传入的参的值
    console.log(e);
    // 2.想办法获取到数组里面的每一个对象中的selected,因为在wxml中是通过wx:if与wx:else来实现图标的开关,在这里,,将在第一次使用到在wxml里面传入的data-index的值
    // 3.先获取数组中的索引
    let index = e.currentTarget.dataset.index;
    // 获取索引成功后,就可以找到数组中的相应对象位置
    // 4.获取carts数组
    let gozu=this.data.carts;
    // 5.在对象中找selected,在这里也相当于遍历了整个数组
    let selected=gozu[index].selected;
    // 6.我需要的功能是,点击图标时,绿图标有,圆圈图标就没有;那么他的点击事件就是
    // 在点击的时候,(数组里对象)的selected的值就变化
    gozu[index].selected=!selected;
    // 7.将变化的数据传入到carts数组里面对carts进行修改,,当然,这个过程是在点击事件执行这个函数之后再进行修改的
    this.setData({
      carts:gozu
    })
  },
  // 点击加加事件
  jia:function(e){
    let index=e.currentTarget.dataset.index;
    let jiazu=this.data.carts;
    let num=jiazu[index].num;
    num++;
    jiazu[index].num=num;
    this.setData({
      carts:jiazu
    })
  },
  // 点击减减事件
  jian:function(e){
    let index=e.currentTarget.dataset.index;
    let jianzu=this.data.carts;
    let num=jianzu[index].num;
    num--;
    if(num<=0){
      num=0
    }
    jianzu[index].num=num;
    this.setData({
      carts:jianzu
    })
  },
  // 点击删除事件
  dellist:function(e){
    let index=e.currentTarget.dataset.index;
    let delzu=this.data.carts;
   delzu.splice(index,1);
    this.setData({
      carts:delzu
    })
  }
})