import Vue from 'vue'
import * as vca from "vue-tsx-support/lib/vca";
import AppPage from './App'
import VueCompositionApi, { createElement } from '@vue/composition-api';
import { VueEmotion } from '@egoist/vue-emotion';
import { themeContainer } from '@/composables/useTheme'
import {InlineSvgPlugin} from 'vue-inline-svg';
import WebFont from 'webfontloader';

Vue.config.productionTip = false
Vue.use(VueCompositionApi);
Vue.use(VueEmotion)
Vue.use(InlineSvgPlugin);

const App = vca.component({
  name: "App",
  setup() {
    // @TODO: read preferred theme from system or existing cookie
    const themeVariant = 'light'
    themeContainer.provide({
      initialState: { themeVariant: themeVariant }
    })

    return () => {
      return createElement(
        AppPage
      )
    }
  }
});

WebFont.load({ google: { families: ["VT323"] } });

new Vue({
  render: h => h(App),
}).$mount('#app')
