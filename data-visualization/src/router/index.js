import { createRouter, createWebHashHistory } from 'vue-router'
import InventoryStatistics from '../views/InventoryStatistics.vue'
import ProductCategory from '../views/ProductCategory.vue'
import TotalSales from '../views/TotalSales.vue'
import MonthlySales from '../views/MonthlySales.vue'
// import UrbanSales from '../views/UrbanSales.vue'

const routes = [
  {
    path: '/',
    component: InventoryStatistics
  },
  {
    path: '/inventorystatistics',
    component: InventoryStatistics
  },
  {
    path: '/productcategory',
    component: ProductCategory

  }, {
    path: '/totalsales',
    component: TotalSales
  },
  {
    path: '/monthlysales',
    component: MonthlySales
  }
  // {
  //   path: '/urbansales',
  //   component: UrbanSales
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
