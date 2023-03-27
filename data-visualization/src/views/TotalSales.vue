<template>
  <div>
    <h2>销售总量</h2>
    <div class="chart" id="oneChart"></div>
  </div>
</template>

<script>
import { theme02 } from '@/assets/theme02'
import { inject, onMounted, reactive } from 'vue'
export default {
  setup () {
    const $echarts = inject('echarts')
    const $http = inject('axios')

    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])
    function setData () {
      xdata = data.data.chartData.chartData.map((v) => v.title)
      ydata = data.data.chartData.chartData.map((v) => v.num)
      console.log('xdata', xdata)
      console.log('ydata', ydata)
    }

    async function getState () {
      data = await $http({ url: '/one/data' })
      //  console.log(oneData.data.chartData.chartData)
    }

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('oneChart'), theme02)
      // 调用请求
      getState().then(() => {
        setData()

        myChart.setOption({

          grid: {
            top: '10%',
            left: '26%',
            right: '20%',
            bottom: '3%',
            containLabel: true

          },
          toolbox: {
            top: 1,
            right: 10,
            feature: {
              magicType: {
                type: ['line', 'bar']
              }
            }
          },
          xAxis: {
            type: 'value',

            axisLabel: {
              fontSize: 16,
              color: '#333'
            }
          },
          yAxis: {
            type: 'category',
            data: xdata,

            axisLabel: {
              fontSize: 16
            }
          },
          series: [
            {
              data: ydata,
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: '#d4fc79'
                    },
                    {
                      offset: 1,
                      color: '#a1c4fd'
                    }
                  ])
                }
              }
            }
          ]
        })
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      })
    })
    return {
      getState,
      data,
      xdata,
      ydata,
      setData
    }
  }
}
</script>

<style scoped>
.chart {
  height: 500px;
width:100%;
}
h2 {
  display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>
