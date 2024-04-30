<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppFooter from './components/AppFooter.vue';
import HomePage from './components/pages/HomePage.vue';


export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppFooter, HomePage }
};

</script>

<template>


  <AppHeader />
  <!-- <Jumbotron /> -->
  <!-- <HomePage /> -->
  <RouterView />
  <AppFooter />

</template>

<style lang='scss'>
@import './assets/scss/app.scss';
</style>