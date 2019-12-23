import Vue from 'vue'
// import VConsole from 'vconsole'

import App from './App.vue'
import router from './router';

// if (!window.location.href.includes('xiexin.xin') || window.location.href.includes('debug=1')) {
//   new VConsole();
//   window.onerror = (message) => {
//     alert(message)
//   }
// }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')