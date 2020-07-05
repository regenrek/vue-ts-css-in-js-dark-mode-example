import Vue from 'vue'
import * as vca from "vue-tsx-support/lib/vca";
import AppPage from './App'
import VueCompositionApi, { createElement } from '@vue/composition-api';
import { VueEmotion } from '@egoist/vue-emotion';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueEmotion)

/**
 * If we don't want to rely on ThemeProvider
 * or avoiding vue components we can provide
 * the Theme Settings globally. Note: For this you will need
 * to use official @egoist/vue-emotion since I disabled autom injection
 * in my vue-emotion fork
 */
// new Vue({
//   provide: function() {
//     return {
//       theme: 'dark'
//     }
//   },
//   render: h => h(App),
// }).$mount('#app')


const App = vca.component({
  name: "App",
  setup() {
    return () => {
      return createElement(
        AppPage
      )
    }
  }
});



new Vue({
  render: h => h(App),
}).$mount('#app')
