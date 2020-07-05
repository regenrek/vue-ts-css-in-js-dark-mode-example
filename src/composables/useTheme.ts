// import resolveConfig from 'tailwindcss/resolveConfig'
import { reactive, toRefs, computed, watch } from '@vue/composition-api'
import { createContainer } from 'vue-unstated'
import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const twConfig = resolveConfig(tailwindConfig)

const useTheme = (initialState = { themeVariant: 'light' }) => {
  const state = reactive(initialState)

  const switchThemeVariant = (variant) => {
    state.themeVariant = variant
  }

  const toggleDarkLightMode = () => {
    state.themeVariant = state.themeVariant === 'light' ? 'dark' : 'light'
  }

  const isDarkTheme = computed(() => state.themeVariant === 'dark')

  const tw = twConfig.theme
  const themeVariants = computed(() => twConfig.theme.themeVariants)

  watch(isDarkTheme, () => console.log(state.themeVariant))

  return { 
    ...toRefs(state),
    switchThemeVariant,
    toggleDarkLightMode, 
    tw,
    themeVariants,
    isDarkTheme
  }
}

export const themeContainer = createContainer(useTheme)
