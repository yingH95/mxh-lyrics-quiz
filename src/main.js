import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom-css.css'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-150354610-3',
  autoTracking: {
    screenview: true
  },
  trackEvent: true
});

new Vue({
  render: h => h(App),
}).$mount('#app');
