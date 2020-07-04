<template>
  <div id="app">
    <nj-theme-provider>
      <NjButton>AAAAAAAAA</NjButton>
    </nj-theme-provider>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NjButton from './components/NjButton';
import Theme from './components/Theme.vue';
import NjThemeProvider from './components/NjThemeProvider'
import 'tailwindcss/dist/base.min.css'

export default Vue.extend({
  name: 'App',
  components: {
    NjButton,
    NjThemeProvider,
    // Theme
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
