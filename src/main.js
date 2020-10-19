import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false


// 使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    loading: "https://2url.cc/1OwrB"
});

// 定义事件总线 (后续要使用的)
Vue.prototype.eventBus = new Vue();

// 挂载Store对象到vue实例
import store from '@/store/vuex.js'

// 同步localStorage数据到Vuex
let _token = localStorage.getItem('_token');
if(_token){
  store.commit('updateToken',_token);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')