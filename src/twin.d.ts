// twin.d.ts
import 'twin.macro'
import { styledComponent } from '@egoist/vue-emotion'

declare module 'twin.macro' {
  const styled: typeof styledComponent
}