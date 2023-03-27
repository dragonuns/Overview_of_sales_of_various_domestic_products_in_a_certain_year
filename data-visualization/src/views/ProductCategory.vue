
<template>
  <div>
        <h2>产品类别</h2>
        <div class="chart" id="myEcharts">
        </div>
    </div>
  </template>

<script>
import { theme02 } from '@/assets/theme02'

import { inject, onMounted, reactive } from 'vue'
// import { fresh } from '@/assets/theme'
export default {
  setup () {
    const $echarts = inject('echarts')
    const $http = inject('axios')

    let data = reactive({})

    async function getDate () {
      data = await $http({ url: '/four/data' })
      console.log(data)
    }
    onMounted(
      () => {
        getDate().then(() => {
          const myChart = $echarts.init(document.getElementById('myEcharts'), theme02)
          myChart.setOption({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              top: 'bottom',
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
            xAxis: {
              data: data.data.chartFour.chartData.day,
              type: 'category',
              axisLabel: {
                fontSize: 16,
                color: '#333'
              }
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  fontSize: 16,
                  color: '#333'
                }
              }
            ],
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
                type: 'bar',
                data: data.data.chartFour.chartData.num.Chemicals,
                areaStyle: {
                  opacity: 0.8,
                  color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(128, 255, 165)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(1, 191, 236)'
                    }
                  ])
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
                type: 'bar',
                data: data.data.chartFour.chartData.num.gear,
                areaStyle: {
                  opacity: 0.8,
                  color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(0, 221, 255)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(77, 119, 255)'
                    }
                  ])
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
                type: 'bar',
                data: data.data.chartFour.chartData.num.Clothes,
                areaStyle: {
                  opacity: 0.8,
                  color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(55, 162, 255)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(116, 21, 219)'
                    }
                  ])
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
                type: 'bar',
                data: data.data.chartFour.chartData.num.Electrical,
                areaStyle: {
                  opacity: 0.8,
                  color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(255, 0, 135)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(135, 0, 157)'
                    }
                  ])
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
                type: 'bar',
                data: data.data.chartFour.chartData.num.digit,
                areaStyle: {
                  opacity: 0.8,
                  color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: 'rgb(255, 191, 0)'
                    },
                    {
                      offset: 1,
                      color: 'rgb(224, 62, 76)'
                    }
                  ])
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
        return {
          getDate, data
        }
      })
  }
}
</script>

  <style lang="less" scoped>
  .chart{
  height: 500px;
width:100%;
// border: 1px solid red
}
  </style>
