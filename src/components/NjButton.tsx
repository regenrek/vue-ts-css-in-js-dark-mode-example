import * as vca from 'vue-tsx-support/lib/vca'
import tw from 'twin.macro'
import { css } from 'emotion'
import { modifiers } from "vue-tsx-support";
import { themeContainer } from '@/composables/useTheme'
import p from "vue-strict-prop";

const styles = {
  base: tw`border px-4 py-2 outline-none focus:outline-none`,
  dark: tw`border-white text-white`,
  light: tw`border-black text-black`
}

export default vca.component({
  name: 'NjButton',
  props: {
    variant: String,
    action: p.ofFunction<() => void>().required
  },
  setup (p, ctx) {
    /**
     * Inject tw theme config locally
     */
    const { themeVariant } = themeContainer.useContainer()

    return () => {
      const classes = [
        styles.base,
        themeVariant.value === 'light' && styles.light,
        themeVariant.value === 'dark' && styles.dark
      ]

      return (
        <button onClick={modifiers.stop(p.action)} class={css(classes)}>{ctx.slots.default()}</button>
      )
    }
  }
})