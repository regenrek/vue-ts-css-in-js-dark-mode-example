import tw from 'twin.macro'
import * as vca from "vue-tsx-support/lib/vca";
import NjButton from './components/NjButton';
import NjThemeProvider from './components/NjThemeProvider'
import { themeContainer } from './composables/useTheme'
import 'tailwindcss/dist/base.min.css'
import { css } from 'emotion';

const styles = {
  app: css`${tw`flex items-center justify-center min-h-screen`}`,
  list: css`${tw`flex`}`,
  listItem: css`${tw`mx-2`}`
}

export default vca.component({
  name: 'App',
  components: {
    NjThemeProvider,
    NjButton
  },
  setup() {
    return () => {
      const {themeVariants, switchThemeVariant} = themeContainer.useContainer()

      return (
        <NjThemeProvider>
          <div id="app" staticClass={styles.app}>
              <ul staticClass={styles.list}>
                {themeVariants.value.map(theme => (
                  <li staticClass={styles.listItem}>
                    <NjButton action={() => switchThemeVariant(theme)} variant={theme}>
                      <inline-svg src={require('./assets/moon.svg')}/>
                      </NjButton>
                </li>
                ))}
              </ul>
            </div>
          </NjThemeProvider>
        )
    }
  }
});
