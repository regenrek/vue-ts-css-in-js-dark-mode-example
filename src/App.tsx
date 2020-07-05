import tw from '../packages/twinmac/macro.js'
import * as vca from "vue-tsx-support/lib/vca";
// import NjButton from './components/NjButton';
import NjThemeProvider from './components/NjThemeProvider'
import 'tailwindcss/dist/base.min.css'
import { css } from 'emotion'

const styles = {
  app: css`${tw`flex items-center justify-center bg-black min-h-screen`}`
}


export default vca.component({
  name: 'App',
  components: {
    NjThemeProvider
  },
  setup() {
    return () => {
      const themes = ['light', 'dark', 'yolo']

      console.log(styles.app)

      return (
        <div id="app" staticClass={styles.app}>
          <NjThemeProvider>
            <ul class="flex">
              {themes.map(theme => (
                <li>
                  {/* <NjButton>{theme}</NjButton> */}
              </li>
              ))}
            </ul>
          </NjThemeProvider>
          </div>
        )
    }
  }
});

