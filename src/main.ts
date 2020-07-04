import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import { VueEmotion } from '@egoist/vue-emotion';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueEmotion)

/**
 * If we don't want to rely on ThemeProvider
 * or avoiding vue components we can provide
 * the Theme Settings globally
 */
// new Vue({
//   provide: function() {
//     return {
//       theme: 'dark'
//     }
//   },
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  render: h => h(App),
}).$mount('#app')
