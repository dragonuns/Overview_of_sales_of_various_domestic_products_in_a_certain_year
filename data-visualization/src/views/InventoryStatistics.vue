<template>
 <div>
      <h2>库存统计</h2>
      <div class="chart" id="myEcharts">
      </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from 'vue'
// import { fresh } from '@/assets/theme'
import { theme02 } from '@/assets/theme02'

export default {
  setup () {
    const $echarts = inject('echarts')
    const $http = inject('axios')

    let data = reactive({})

    async function getState () {
      data = await $http({ url: '/three/data' })
    }

    onMounted(() => {
      getState().then(() => {
        const myChart = $echarts.init(document.getElementById('myEcharts'), theme02)
        myChart.setOption({
          legend: {
            width: 600,
            itemGap: 20,
            itemWidth: 40,
            textStyle: {
              color: '#333'
            },
            orient: 'vertical',
            left: '28%',
            bottom: '14%'
          },
          label: {
            fontSize: 20
          },

          tooltip: {
            show: true

          },
          series: [
            {

              type: 'pie',
              data: data.data.chartThree.chartData,
              radius: [20, 200],
              center: ['50%', '45%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 20
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
      getState, data
    }
  }
  // data () {
  //   return {
  //     eData: {}
  //   }
  // },
  // methods: {
  //   async linkData () {
  //     const echartsData = await axios({ url: '/one' })
  //     this.eData = echartsData.data
  //   }
  // },
  // mounted () {
  //   const myEcharts = echarts.init(this.$refs.divRef, fresh)
  //   myEcharts.showLoading()
  //   this.linkData().then(() => {
  //     myEcharts.hideLoading()
  //     myEcharts.setOption({
  //       title: {
  //         text: '饼状图',
  //         subtext: '副标题',
  //         left: 'center'
  //       },
  //       tooltip: {
  //         trigger: 'item'
  //       },
  //       legend: {
  //         orient: 'vertical',
  //         left: 'left'
  //       },
  //       series: [
  //         {
  //           name: 'Access From',
  //           type: 'pie',
  //           radius: ['50%', '70%'],
  //           label: {
  //             show: true,
  //             position: 'inside'
  //           },
  //           roseType: 'area',
  //           data: this.eData,
  //           emphasis: {
  //             itemStyle: {
  //               shadowBlur: 10,
  //               shadowOffsetX: 0,
  //               shadowColor: 'rgba(0, 0, 0, 0.5)'
  //             }
  //           }
  //         }
  //       ]

  //     })
  //   })
  //   window.addEventListener('resize', () => {
  //     myEcharts.resize()
  //   })
  // }
}
</script>

<style lang='less' scoped>
.chart{
  height: 500px;
width:100%;
// border: 1px solid red
}
h2{
  display: block;
    font-size: 1.875rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    // height: 30px;
    color: black;
}
</style>
