import "vue-tsx-support/enable-check"
import * as vca from 'vue-tsx-support/lib/vca'
import { themeContainer } from '../composables/useTheme'
import { computed, provide, ref } from '@vue/composition-api'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)


const ThemeSymbol = Symbol('theme')

export default vca.component({
    name: 'NjThemeProvider',
    setup (p, ctx) {

      console.log('setup ok')
        // const themeRef = ref('dark')
        // const { theme } = themeContainer.provide({
        //     initialState: { theme: 'light' }
        //   })

        const themeComp = computed(() => {
          console.log('themecomp')
          return theme
        })

        provide(ThemeSymbol, 'dark')

        //const themeClass = computed(() => `theme-${theme.value}`);
        const themeClass = computed(() => `theme-dark`);
        
        // const style = computed(()=> {
        //     return theme.value === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        // })
      return () => {
        return (
          <div class={themeClass.value}>{ctx.slots.default()}</div>
        )
      }
    }
  })