import * as vca from 'vue-tsx-support/lib/vca'
import { themeContainer } from '@/composables/useTheme'
import {css} from 'emotion'
import { injectGlobal } from 'emotion'
import tw from 'twin.macro'

injectGlobal`
  .theme-dark:before {
    opacity: 1 !important;
  }
`
export const anim = css`
  ${tw`bg-gradient-b-light-gradient text-white`}
  background-size: 100%;
  position: relative;
  z-index: 100;
  &:before {
    ${tw`bg-gradient-b-dark-gradient text-white`}
    content: '';    
    display: block;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.45s;
  }
`

export default vca.component({
    name: 'NjThemeProvider',
    setup (p, ctx) {
      const { themeVariant } = themeContainer.useContainer()

      return () => {
        return (
          <div
          class={[
            anim,
            `theme-${themeVariant.value}`,
            ]}>{ctx.slots.default()}</div>
        )
      }
    }
  })