import * as vca from 'vue-tsx-support/lib/vca'
import tw from '../../packages/twinmac/macro.js'
import { css } from 'emotion'
import { styled } from '@egoist/vue-emotion'
import { themeContainer } from '../composables/useTheme'

const baseStyle = tw`border-yellow-200 px-4 py-2`;

export default vca.component({
  name: 'NjButton',
  props: {
    variant: String,
  },
  setup (p, ctx) {
    /**
     * Inject tw theme config locally
     */
    const { tw } = themeContainer.useContainer()

    return () => {
      const theme = tw.value;
      const variant="dark"

      const classes = [
        baseStyle,
        variant === 'dark' && `
          background-color: red
        `
      ]

      return (
        <button class={css(classes)}>{ctx.slots.default()}</button>
      )
    }
  }
})