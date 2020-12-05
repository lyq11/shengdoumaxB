<template>
<!-- 智能井盖（航天城） 类型等于3 -->
  <div id="app">
      <div class="top">
          <div class="DeviceTitle">智能井盖航天城</div>
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
      <div class="bottom clearf">
        <div class="botList fl">
          <div class="listTop clearf">
            <div class="lTitle fl">|||</div>
            <div class="title fl">设备电量</div>
            <div class="rTitle fr">|||</div>
          </div>
          <div class="echartsA detail">
            <device-power></device-power>
          </div>
        </div>
        <div class="botList fl">
          <div class="listTop clearf">
            <div class="lTitle fl">|||</div>
            <div class="title fl">设备信号</div>
            <div class="rTitle fr">|||</div>
          </div>
          <div class="echartsB detail">
            <device-signal></device-signal>
          </div>
        </div>
        <div class="botList fl">
          <div class="listTop clearf">
            <div class="lTitle fl">|||</div>
            <div class="title fl">甲烷气体</div>
            <div class="rTitle fr">|||</div>
          </div>
          <div class="echartsC detail">
           <device-methane></device-methane>
          </div>
        </div>
        <div class="botList fl">
          <div class="listTop clearf">
            <div class="lTitle fl">|||</div>
            <div class="title fl">水位状态</div>
            <div class="rTitle fr">|||</div>
          </div>
          <div class="echartsC detail">
           <device-water></device-water>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import devicePower from '@/components/devicePowerB'
import deviceSignal from '@/components/deviceSignalB'
import deviceMethane from '@/components/deviceMethaneB'
import deviceWater from '@/components/deviceWaterB'
export default {
  data () {
    return {
      isopen: '打开',
      islock: '关锁'
    }
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
  },
  components: {
    devicePower: devicePower,
    deviceSignal: deviceSignal,
    deviceMethane: deviceMethane,
    deviceWater: deviceWater
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
    letter-spacing: 10px;
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

.bottom{
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
}
.botList{
  text-align: center;
  width: 25%;
  height: 50px;
  box-sizing: border-box;
}
.botList .listTop{
  background-color: #0e1a28;
  text-align: center;
  height: 30px;
  line-height: 30px;
  border: 1px solid #14293b;
}
.lTitle{
  padding-left:10px;
  color: #32698d;
  letter-spacing: 1px;
  font-weight: bold;
}
.rTitle{
  padding-right:10px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #32698d;
}
.botList .listTop .title{
  color: #96874d;
  font-size: 20px;
  margin-left: 90px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}
.detail{
  margin-top: 10px;
  height: 200px;
  border: 1px solid #14293b;
}
.botList .echartsA{
  padding-left: 60px;
}
.botList .echartsC .isOpen{
  color: #fff;
}
.isOpenImg{
  width: 100px;
  height: 80px;
  margin-top: 30px;
}
</style>
