<!--
航天城甲烷气体值
-->
<template>
  <div class="com-container">
      <div class="com-chart" ref="power_ref" id="methane">
      </div>
  </div>
</template>

<script>

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
      var power = document.querySelector('#methane')
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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        grid: {
          x: 50,
          y: 10,
          x2: 20,
          y2: 60
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      this.chartInstance.setOption(option)
    }
  }
}

</script>

<style scoped>
</style>
