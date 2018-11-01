// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import axios from 'axios';
import qs from 'qs';
import Distpicker from 'v-distpicker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
Vue.use(Vuex)
Vue.component('v-distpicker', Distpicker);
Vue.config.productionTip = false;
Vue.use(VueLazyload);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  qs,
  components: { App },
  template: '<App/>'
});
