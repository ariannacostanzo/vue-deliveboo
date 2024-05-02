<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppFooter from './components/AppFooter.vue';
import HomePage from './components/pages/HomePage.vue';
import Loader from './components/Loader.vue'


export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppFooter, HomePage, Loader },
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
    <AppHeader />
    <!-- <Loader :isLoading="isLoading" />-->
    <!-- <Jumbotron /> -->
    <!-- <HomePage /> -->
    <RouterView />
    <AppFooter />
  </div>

</template>

<style lang='scss'>
@import './assets/scss/app.scss';
</style>