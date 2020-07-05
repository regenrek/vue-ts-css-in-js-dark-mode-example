import tw from '../packages/twinmac/macro.js'
import * as vca from "vue-tsx-support/lib/vca";
import NjButton from './components/NjButton';
import NjThemeProvider from './components/NjThemeProvider'
import 'tailwindcss/dist/base.min.css'
import { css } from 'emotion'



const styles = {
  app: css`${tw`flex items-center justify-center bg-black min-h-screen`}`,
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
      const themes = ['light', 'dark', 'yolo']

      console.log(styles.app)

      return (
        <NjThemeProvider>
          <div id="app" staticClass={styles.app}>
              <ul staticClass={styles.list}>
                {themes.map(theme => (
                  <li staticClass={styles.listItem}>
                    <NjButton variant={theme}>{theme}</NjButton>
                </li>
                ))}
              </ul>
            </div>
          </NjThemeProvider>
        )
    }
  }
});
