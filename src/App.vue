<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppFooter from './components/AppFooter.vue';
import HomePage from './components/pages/HomePage.vue';
import Loader from './components/Loader.vue'
import {store} from './store.js';


export default {
  name: 'App',
  components: { AppHeader, Jumbotron, AppFooter, HomePage, Loader },
  data() {
    return {
      isLoading: true,
      store
    };
  },
  
  //store in localStorage
  mounted() {
    const savedStore = localStorage.getItem('store');
    if (savedStore) {
      try {
        // Parse the saved store object from local storage
        const parsedStore = JSON.parse(savedStore);
        // Update each property of the reactive store with the parsed values
        Object.assign(store, parsedStore);
      } catch (error) {
        console.error('Error parsing store data from local storage:', error);
      }
    }
  },
  watch: {
    store: {
      handler(newStore) {
        localStorage.setItem('store', JSON.stringify(newStore));
      },
      deep: true
    }
  }
}


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