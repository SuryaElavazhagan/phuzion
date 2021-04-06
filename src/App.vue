<template>
  <div id="app">
    <nav-bar />
    <router-view />
    <pn-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    NavBar,
    'pn-footer': Footer
  }
};
</script>

<style lang="scss">
</style>
