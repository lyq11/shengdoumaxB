<!--
航天城井盖的仪表盘
-->
<template>
  <div class="com-container">
      <div class="com-chart" ref="power_ref" id="power">
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      chartInstance: null
    //   devicePow: 88
    }
  },
  mounted () {
    this.initChart()
    this.getData()
  },
  methods: {
  // 初始化echartInstance对象
    initChart () {
      var power = document.querySelector('#power')
      power.style.height = '200px'
      this.chartInstance = this.$echarts.init(this.$refs.power_ref)
    },
    // 获取数据
    getData () {
      this.updateChart()
    },
    // 更新图表
    updateChart () {
      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
          }
        },
        series: [
          {
            name: '电量',
            type: 'gauge',
            radius: '90%',
            detail: {
              formatter: '{value}%',
              color: '#fff'
            },
            data: [{ value: 88, name: '电量' }],
            // 轴线
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [1, new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: '#2D81D1'
                    },
                    {
                      offset: 1,
                      color: '#14F1D6'
                    }
                  ])]
                ],
                width: '15',
                shadowColor: '#2A91D2',
                shadowBlur: 12
              }
            },
            // 刻度标签
            axisLabel: {
              show: false,
              distance: 0,
              color: '#3F54D3',
              fontSize: 18
            },
            // 分割线
            splitLine: {
              show: false
            },
            // 刻度
            axisTick: {
              show: false
            },
            // 标题
            title: {
              show: true,
              color: '#B3E9CD',
              fontStyle: 'oblique',
              fontSize: 25
            },
            // 响应和触发鼠标事件
            silent: false
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
