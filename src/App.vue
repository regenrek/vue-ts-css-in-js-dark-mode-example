<template>
  <div id="app">
    <nj-theme-provider>
      <NjButton>Click me!</NjButton>
    </nj-theme-provider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NjButton from './components/NjButton';
import NjThemeProvider from './components/NjThemeProvider'
import 'tailwindcss/dist/base.min.css'

export default Vue.extend({
  name: 'App',
  components: {
    NjButton,
    NjThemeProvider
  }
});
</script>