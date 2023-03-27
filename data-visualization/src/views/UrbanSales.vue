<template>
<h2>城市销量</h2>
  <div class="map" id="map">

  </div>
</template>

<script>
import axios from 'axios'
import { inject, onMounted, reactive } from 'vue'
export default {

  setup () {
    const $echarts = inject('echarts')
    let mapData = reactive({})
    async function getData () {
      mapData = await axios.get('http://localhost:8083/map/china-cities.json')
    }
    onMounted(

      getData().then(() => {
        const myCharts = $echarts.init(document.querySelector('#map'))

        $echarts.registerMap('china', mapData.data)

        myCharts.setOption({
          geo: {
            map: 'china',
            itemStyle: {
              areaColor: '#0099ff',
              borderColor: '#00ffff',
              shadowColor: ' rgba( 230,130,70,0.5)',
              shadowBlur: 30,
              emphasia: {
                focus: 'self'
              }
            }
          },
          tooltip: {
            trigger: 'item'
          },

          visualMap: {
            min: 100,
            max: 5000,
            left: '20%',
            itemWidth: 40,
            itemHeight: 200,
            inRange: {
              color: [
                '#5ffbf1',
                '#46eefa',
                '#41dfff',
                '#52cffe',
                '#69bff8',
                '#79b3f4',
                '#8aa7ec',
                '#9a9ae1',
                '#aa8fd8',
                '#ba83ca',
                '#c777b9',
                '#d16ba5'
              ]
            },
            text: ['High', 'Low'],
            calculable: true,
            textStyle: {
              color: '#333'
            }
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              data: [
                { name: '北京', value: [116.46, 39.92, 4367] },
                { name: '上海', value: [121.48, 31.22, 8675] },
                { name: '深圳', value: [114.07, 22.62, 2461] },
                { name: '广州', value: [113.23, 23.16, 187] },
                { name: '西安', value: [108.45, 34, 3421] }
              ],
              itemStyle: {
                color: '#ff9a9e'
              }
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              tippleEffect: {
                number: 2,
                scale: 4
              },
              data: [
                { name: '北京', value: [116.46, 39.92, 4367] },
                { name: '上海', value: [121.48, 31.22, 8675] },
                { name: '深圳', value: [114.07, 22.62, 2461] },
                { name: '广州', value: [113.23, 23.16, 187] },
                { name: '西安', value: [108.45, 34, 3421] }
              ],
              itemStyle: {
                color: '#ff9a9e'
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              }
            }
          ]
        })
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      })
    )
    return {
      mapData,
      getData
    }
  }
}
</script>

<style lang="less" scoped>
.map {
  width: 100%;
  height: 500px;
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
