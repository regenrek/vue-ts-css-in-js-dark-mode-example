import "vue-tsx-support/enable-check"
import * as vca from 'vue-tsx-support/lib/vca'
import { themeContainer } from '../composables/useTheme'
import { computed } from '@vue/composition-api'
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from './../../tailwind.config.js'

// const twConfig = resolveConfig(tailwindConfig)

export default vca.component({
    name: 'NjThemeProvider',
    setup (p, ctx) {
      
      const { theme } = themeContainer.provide({
          initialState: { theme: 'light' }
        })

      const style = computed(()=> {
          return theme.value === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      })

      return () => {
        return (
          <div class={style}>{ctx.slots.default()}</div>
        )
      }
    }
  })