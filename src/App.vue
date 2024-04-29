<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Loader from './Loader.vue';

export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppSearch, AppMain, AppFooter, Loader },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

};

</script>

<template>
  <div>
    <Loader :isLoading="isLoading" />
  </div>

  <div>
    <AppHeader />
    <Jumbotron />
    <AppSearch />
    <AppMain />
    <AppFooter />
  </div>

</template>

<style lang='scss'>
@import './assets/scss/app.scss';
</style>