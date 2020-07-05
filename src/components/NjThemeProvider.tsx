import * as vca from 'vue-tsx-support/lib/vca'
import { themeContainer } from '../composables/useTheme'
// import { computed } from '@vue/composition-api'

export default vca.component({
    name: 'NjThemeProvider',
    setup (p, ctx) {

      const themeVariant = 'light'
    
      themeContainer.provide({
          initialState: { theme: themeVariant }
      })

      // const style = computed(()=> {
      //     return theme.value === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      // })

      return () => {
        return (
          <div class={`theme-${themeVariant}`}>{ctx.slots.default()}</div>
        )
      }
    }
  })