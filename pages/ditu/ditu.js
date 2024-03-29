Page({
  data: {
    markers: [{
      // iconPath: "../../img/icon3.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      // iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad:function(){
    let _this=this;
    wx.getLocation({
      type:'wgs84',
      success:function(res){
        console.log('纬度' + res.latitude);
        console.log('经度'+res.longitude);
        _this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
        })
      }
    })
  }
})