<template>
    <div v-if="isLoading" class="loading">
        <div class="loader"></div>
    </div>
    <div v-else>
        <AppHeader />
        <Jumbotron />
        <AppSearch />
        <AppMain />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Jumbotron from './components/Jumbotron.vue';
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
    data() {
        return {
            isLoading: true
        };
    },
    components: { AppHeader, Jumbotron, AppSearch, AppMain, AppFooter },

    created() {

        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }
};
</script>

<style>
.loader {
    height: 100vh;
    width: 100%;
    position: fixed;
    background: url(./assets/pizza-loader.gif) no-repeat center;
    background-size: 100%;

}
</style>