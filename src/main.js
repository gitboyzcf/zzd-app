import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import {Toast} from 'vant'
import './Global.less'
import './assets/css/common.css'
import 'vant/lib/index.css'

import axios from 'axios'
// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts

import F2 from '@antv/f2'
Vue.prototype.$F2 = F2
Vue.prototype.$axios = axios
Vue.prototype.$toast = Toast
Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Date.prototype.format = function(fmt) {
  const item = {
    'M+': this.getMonth() + 1, //月份
    'D+': this.getDate(), //日
    'H+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (const key in item)
    if (new RegExp('(' + key + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? item[key] : ('00' + item[key]).substr(('' + item[key]).length));
  return fmt;
};
