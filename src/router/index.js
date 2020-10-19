import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化的文件
import centerRouter from './routes/center.js';
import cinemaRouter from './routes/cinema.js';
import filmRouter from './routes/film.js';
import detailRouter from './routes/detail.js';
import cityRouter from './routes/city.js';
import authRouter from "./routes/auth";


const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  authRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 前缀
  // base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let arr = [
      // 需要登录才能访问的集合，以“/cinema为例”
      "/cinema",
  ];
  if (!arr.includes(to.path)) {
      next();
  } else {
      if (localStorage.getItem("_token")) {
          next();
      } else {
          next({ path: "/login", query: { refer: to.fullPath } });
      }
  }
});

export default router
