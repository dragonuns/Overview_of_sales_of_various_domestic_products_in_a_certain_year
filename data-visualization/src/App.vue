<template>
  <nav>
    <router-link to="/inventorystatistics"> 库存统计 </router-link> |
    <router-link to="/productcategory">产品类别</router-link> |
    <router-link to="/totalsales">销售总量</router-link> |
    <router-link to="/monthlysales">产品月销</router-link>
    <!-- <router-link to="/urbansales">城市销售量</router-link> | -->
  </nav>
  <router-view/>
</template>
<script>
import { provide } from 'vue'

import axios from 'axios'
import * as echarts from 'echarts'

// 设置基准路径
axios.defaults.baseURL = 'http://localhost:8082/'
export default {
  setup () {
    // provider("名字随便起","传递的内容")
    provide('echarts', echarts)
    provide('axios', axios)
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
