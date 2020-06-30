// twin.d.ts
import 'twin.macro'
// import styledComponent from '@emotion/styled'
// import { css as cssProperty } from '@emotion/core'
import { styledComponent } from '@egoist/vue-emotion'

declare module 'twin.macro' {
  // const css: typeof cssProperty
  const styled: typeof styledComponent
}