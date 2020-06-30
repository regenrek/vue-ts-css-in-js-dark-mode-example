import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';
import { VueEmotion } from '@egoist/vue-emotion';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueEmotion)

new Vue({
  render: h => h(App),
}).$mount('#app')
