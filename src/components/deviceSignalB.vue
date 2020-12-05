<!--
航天城的信号值
-->
<template>
  <div class="com-container">
      <div class="com-chart" ref="signal_ref" id="signal">
      </div>
  </div>
</template>

<script>
var dataAxis = ['信号值']
var data = [25]
var yMax = 100
var dataShadow = []
for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax)
}
export default {
  data () {
    return {
      chartInstance: null,
      devicePow: 53
    }
  },
  mounted () {
    this.initChart()
    this.getData()
  },
  methods: {
  // 初始化echartInstance对象
    initChart () {
      var signal = document.querySelector('#signal')
      signal.style.height = '200px'
      this.chartInstance = this.$echarts.init(this.$refs.signal_ref)
    },
    // 获取数据
    getData () {
      this.updateChart()
    },
    // 更新图表
    updateChart () {
      const option = {
        title: {
        },
        grid: {
          x: 50,
          y: 10,
          x2: 20,
          y2: 40
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              color: 'rgba(0,0,0,0.05)'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
          },
          {
            type: 'bar',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' }
                ]
              )
            },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' }
                  ]
                )
              }
            },
            data: data
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}

</script>

<style scoped>
</style>
