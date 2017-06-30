// import Vue from 'vue'
// import App from './App'

// // Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
import score from './components/score'
export default score;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-score', VueScore);
}
