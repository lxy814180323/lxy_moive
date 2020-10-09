import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化的文件
import centerRouter from './routes/center.js'
import cinemaRouter from './routes/cinema.js'
import filmRouter from './routes/film.js'


const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
  // base: process.env.BASE_URL,
  routes
})

export default router
