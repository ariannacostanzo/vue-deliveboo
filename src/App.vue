<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppMain, AppFooter }

}
</script>

<template>

  <AppHeader />
  <Jumbotron />
  <AppMain />
  <AppFooter />

</template>

<style lang='scss'>
@import './assets/scss/app.scss'
</style>