import * as vca from 'vue-tsx-support/lib/vca'
import tw from 'twin.macro'
import { css } from 'emotion'
import { modifiers } from "vue-tsx-support";
import { themeContainer } from '@/composables/useTheme'
import p from "vue-strict-prop";
import color from 'color';

const getTextColor = (background: string, tw: any) => {
  console.log("FFFF", background, tw)
  return color(background).isDark() ? "white" : tw.text.default
};

const styles = {
  base: tw`border bg-sun px-4 py-2 outline-none focus:outline-none`,
  dark: tw`border-white bg-sun text-white`,
  light: tw`border-black bg-sun text-black`
}

const defaultThemeVariants = (variant?: string, isDark?: boolean, tw?: any): string => {

  console.log('switch button', variant, isDark)
  
  //if(variant === (undefined || 'none'))
    if(isDark) {
      console.log("isDark", isDark)
      return css(styles.dark)
    }

    console.log("XXX",getTextColor(tw.colors.primary, tw))

  // text-on-background 
  // const x = tw`bg-background`

  return css({

    color: getTextColor(tw.colors.primary, tw)
  })
}

const getThemeVariants = (
  variant?: string,
  isDark?: boolean,
  tw?: object
): string => {
  switch (variant) {
    case "default":
      return defaultThemeVariants(variant, isDark, tw);
    // case "ghost":
    //   return ghostThemeVariant(theme, intent, hover, active);
    // case "outline":
    //   return outlineThemeVariant(theme, intent, hover, active);
  }
  return "error"
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
    const { themeVariant, isDarkTheme, tw } = themeContainer.useContainer()

    console.log(tw)

    return () => {
      const classes = [
        css(styles.base),
        getThemeVariants(themeVariant.value, isDarkTheme.value, tw)
      ]

      return (
        <button onClick={modifiers.stop(p.action)} class={classes}>{ctx.slots.default()}</button>
      )
    }
  }
})