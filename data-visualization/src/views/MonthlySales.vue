<template>
  <div>
      <h2>库存统计</h2>
      <div class="chart" id="myEcharts">

      </div>
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

    async function getDate () {
      data = await $http({ url: '/two/data' })
      console.log(data)
    }

    onMounted(() => {
      getDate().then(() => {
        const myChart = $echarts.init(document.getElementById('myEcharts'), theme02)
        myChart.setOption({

          grid: {
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              // boundaryGap: false,
              data: data.data.chartTwo.chartData.day,
              axisLabel: { // x轴文字的配置
                show: true,
                axisLabel: {
                  fontSize: 20,
                  color: '#333'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: { // x轴文字的配置
                show: true,
                axisLabel: {
                  fontSize: 20,
                  color: '#333'
                }
              }
            }
          ],

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            width: 600,
            itemGap: 20,
            itemWidth: 40,
            top: 'bottom',
            textStyle: {
              fontSize: 20
            },
            data: ['服装', '日化', '数码', '电器', '家居']
          },
          toolbox: {
            // top: 1,
            right: 10,
            feature: {
              magicType: {
                type: ['line', 'bar', 'stack']
              }
            }
          },

          series: [

            {
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              name: '日化',
              stack: 'Total',
              smooth: true,
              type: 'line',
              data: data.data.chartTwo.chartData.num.Chemicals,
              areaStyle: {
                opacity: 0.8
                // color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: 'rgb(128, 255, 165)'
                //   },
                //   {
                //     offset: 1,
                //     color: 'rgb(1, 191, 236)'
                //   }
                // ])
              },
              emphasis: {
                focus: 'series'
              }
            },
            {
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              name: '家居',
              stack: 'Total',
              smooth: true,
              type: 'line',
              data: data.data.chartTwo.chartData.num.gear,
              areaStyle: {
                opacity: 0.8
                // color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: 'rgb(0, 221, 255)'
                //   },
                //   {
                //     offset: 1,
                //     color: 'rgb(77, 119, 255)'
                //   }
                // ])
              },
              emphasis: {
                focus: 'series'
              }
            },
            {
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              name: '服装',
              stack: 'Total',
              smooth: true,
              type: 'line',
              data: data.data.chartTwo.chartData.num.Clothes,
              areaStyle: {
                opacity: 0.8
                // color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: 'rgb(55, 162, 255)'
                //   },
                //   {
                //     offset: 1,
                //     color: 'rgb(116, 21, 219)'
                //   }
                // ])
              },
              emphasis: {
                focus: 'series'
              }
            },
            {
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              name: '电器',
              stack: 'Total',
              smooth: true,
              type: 'line',
              data: data.data.chartTwo.chartData.num.Electrical,
              areaStyle: {
                opacity: 0.8
                // color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: 'rgb(255, 0, 135)'
                //   },
                //   {
                //     offset: 1,
                //     color: 'rgb(135, 0, 157)'
                //   }
                // ])
              },
              emphasis: {
                focus: 'series'
              }
            },
            {
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              name: '数码',
              stack: 'Total',
              smooth: true,
              type: 'line',
              data: data.data.chartTwo.chartData.num.digit,
              areaStyle: {
                opacity: 0.8
                // color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: 'rgb(255, 191, 0)'
                //   },
                //   {
                //     offset: 1,
                //     color: 'rgb(224, 62, 76)'
                //   }
                // ])
              },
              emphasis: {
                focus: 'series'
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
      getDate, data
    }
  }
}
</script>

<style>
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
.chart{
  height: 500px;
width:100%;

}
</style>
