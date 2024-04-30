<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppSearch, AppMain, AppFooter }

}
</script>

<template>

  <AppHeader />
  <Jumbotron />
  <AppSearch />
  <RouterView />
  <AppMain />
  <AppFooter />

</template>

<style lang='scss'>
@import './assets/scss/app.scss'
</style>