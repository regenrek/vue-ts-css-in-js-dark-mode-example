import * as vca from 'vue-tsx-support/lib/vca'
import tw from 'twin.macro'
import { css } from 'emotion'
import { ofType, modifiers } from "vue-tsx-support";
import { themeContainer } from '@/composables/useTheme'
import Vue from "vue";
import p from "vue-strict-prop";

export const BaseButton = ofType<
  {
    href?: string;
    type?: string;
    disabled?: boolean;
  },
  {
    onClick: MouseEvent;
  }
>().convert(Vue.component("BaseButton"));

const styles = {
  base: tw`border-yellow-200 px-4 py-2`,
  dark: tw`bg-black text-white`,
  light: tw`bg-white text-black`
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