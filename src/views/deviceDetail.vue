<template>
  <div id="app">
      <div class="top">
          <div class="DeviceTitle">智能井盖中控</div>
          <div class="leftNav clearf">
              <div class="id fl leftNavList">
                  <div>设备ID</div>
                  <div>cc108060</div>
                </div>
              <div class="name fl leftNavList">
                  <div>设备名称</div>
                  <div>井盖测试</div>
              </div>
              <div class="statu fl leftNavList">
                  <div>设备状态</div>
                  <div>在线</div>
              </div>
          </div>
          <div class="rightNav clearf">
              <div class="id fl rightNavList">
                  <div>井盖模式</div>
                  <div>智能井盖</div>
              </div>
              <div class="name fl rightNavList">
                  <div>井盖模式</div>
                  <div>航天城井盖</div>
              </div>
              <div class="statu fl rightNavList">
                  <div>井盖模式</div>
                  <div>井下中继</div>
              </div>
          </div>
      </div>
      <div class="map" id="map">
          <img src="../assets/img/map.png" alt="" class="mapImg">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.initMap()
  },
  methods: {
    // 地图初始化
    initMap () {
      var center = new window.TMap.LatLng(39.984104, 116.307503)
      var map = new window.TMap.Map(document.getElementById('map'), {
        center: center,
        zoom: 17,
        mapStyleId: 'style1',
        viewMode: '3D',
        pitch: 35,
        baseMap: {
          type: 'vector',
          features: ['building3d', 'base', 'label']
        }
      })
      var marker = new window.TMap.MultiMarker({
        id: 'marker-layer',
        map: map,
        styles: {
          marker: new window.TMap.MarkerStyle({
            width: 25,
            height: 35,
            anchor: { x: 16, y: 32 },
            src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png'
          })
        },
        geometries: [{
          id: 'demo',
          styleId: 'marker',
          position: new window.TMap.LatLng(39.984104, 116.307503),
          properties: {
            title: 'marker'
          }
        }]
      })
      console.log(marker)
      var b = document.querySelector('canvas+div:last-child')
      var a = document.querySelector('canvas+div:last-child')
      b.style.display = 'none'
      a.style.display = 'none'
    }
  }
}
</script>
<style>
.top{
    position: relative;
    height: 130px;
    width: 100%;
    background: url('../assets/img/top.png') no-repeat 0 10px;
    background-size: 100% 50px;
    overflow: hidden;
}
.top .DeviceTitle{
    font-size: 30px;
    margin: 10px auto;
    color: #84CDEE;
    width: 300px;
    height: 50px;
    letter-spacing: 20px;
    text-align: center;
}
.top .leftNav{
    position: absolute;
    top: 45px;
    left: 65px;
}

.top .leftNav .leftNavList{
    background: url('../assets/img/minwell.png') no-repeat 15px 8px;
    background-size: 30px 30px;
    text-align: right;
    width: 120px;
    height: 50px;
    font-size: 15px;
    line-height: 25px;
    color: #B9C0C2;
    margin: 0 10px;
    padding-right: 25px;
    position: relative;
    border: 1px solid #114765;
    background-color: #0F3852;
}

.top .rightNav{
    position: absolute;
    top: 45px;
    right: 65px;
}

.top .rightNav .rightNavList{
    background: url('../assets/img/minwell.png') no-repeat 15px 8px;
    background-size: 30px 30px;
    text-align: right;
    width: 130px;
    height: 50px;
    font-size: 15px;
    line-height: 25px;
    color: #B9C0C2;
    margin: 0 10px;
    padding-right: 15px;
    position: relative;
    border: 1px solid #114765;
    cursor: pointer;
    background-color: #0F3852;
}

.map{
    width: 90%;
    height: 420px;
    margin: 0 auto;
    position: relative;
}
.map .mapImg{
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
