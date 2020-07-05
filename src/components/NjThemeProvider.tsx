import * as vca from 'vue-tsx-support/lib/vca'
import { themeContainer } from '@/composables/useTheme'
import {css} from 'emotion'
import tw from 'twin.macro'

const styles = {
  dark: css`${tw`bg-black text-white`}`,
  light: css`${tw`bg-white text-black`}`
}

export default vca.component({
    name: 'NjThemeProvider',
    setup (p, ctx) {
      // const style = computed(()=> {
      //     return theme.value === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      // })
      const { themeVariant, isDarkTheme } = themeContainer.useContainer()

      return () => {
        return (
          <div class={[`theme-${themeVariant.value}`, isDarkTheme.value && styles.dark || styles.light ]}>{ctx.slots.default()}</div>
        )
      }
    }
  })