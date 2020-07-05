import * as vca from 'vue-tsx-support/lib/vca'
import tw from '../../packages/twinmac/macro.js'
import { styled } from '@egoist/vue-emotion'
import { themeContainer } from '../composables/useTheme'

const NjButton = styled('button')([
  tw`bg-yellow-500 border-yellow-200`
])

export default vca.component({
  name: 'NjButton',
  setup (p, ctx) {
    /**
     * Inject tw theme config locally
     */
    const { tw } = themeContainer.useContainer()

    return () => {
      const theme = tw.value;

      return (
        <NjButton theme={theme}>{ctx.slots.default()}</NjButton>
      )
    }
  }
})