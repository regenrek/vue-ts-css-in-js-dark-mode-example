// import resolveConfig from 'tailwindcss/resolveConfig'
import { reactive, toRefs, computed } from '@vue/composition-api'
import { createContainer } from 'vue-unstated'
import tailwindConfig from '../../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const twConfig = resolveConfig(tailwindConfig)

const useTheme = (initialState = { theme: 'light' }) => {
  const state = reactive(initialState)

  const switchTheme = () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  }

  const tw = computed(() => twConfig.theme)

  // const currentTheme = computed(() => {
  //     return theme
  // })

  return { ...toRefs(state), switchTheme, tw }
}

export const themeContainer = createContainer(useTheme)
