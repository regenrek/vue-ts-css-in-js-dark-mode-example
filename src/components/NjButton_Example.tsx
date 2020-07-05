// import p from 'vue-strict-prop'
import * as vca from 'vue-tsx-support/lib/vca'
import tw from '../../packages/twinmac/macro.js'
import { css } from 'emotion'
import { styled } from '@egoist/vue-emotion'
import { themeContainer } from '../composables/useTheme'


const NjButton = styled('button')`
  color: ${props => console.log(props)}};
  margin-bottom: 1rem;
  border: 1px solid #333;
  display: block;
`

// this doesn't work
// const NjButton2 = styled('button')([
//   tw`bg-red-500 border-yellow-200`,
//   ({ theme }) =>
//     `
//       color: ${theme.colors.primary};
//     `
// ])

const NjButton3 = styled('button')([
  tw`bg-red-500 border-yellow-200`,
  `
    color: ${props => props.theme.colors.primary};
    display: block;
  `
])

const style = {
  button: css`
    background-color: #ff0000;
    color: white;
  `,
}

export default vca.component({
  name: 'NjButtonExample',
  setup (p, ctx) {
    /**
     * Inject tw theme config locally
     */
    const { tw } = themeContainer.useContainer()

    return () => {
      return (
        <div>
          <NjButton theme={tw.value}>{ctx.slots.default()}</NjButton>
          {/* <NjButton2>{ctx.slots.default()}</NjButton2> */}
          <NjButton3>{ctx.slots.default()}</NjButton3>
          <NjButton3 class={style.button}>{ctx.slots.default()}</NjButton3>
        </div>
      )
    }
  }
})