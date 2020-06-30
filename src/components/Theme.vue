<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

export default {
  name: 'theme-provider',
  provide: function() {
    return {
      theme: this.theme
    }
  },
  computed: {
    theme: () => theme
  },
  render() {
    return this.$scopedSlots.default()
  }
}
</script>
