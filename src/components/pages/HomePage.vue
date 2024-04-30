<script>
import AppSearch from '../AppSearch.vue';
import AppMain from '../AppMain.vue';
import Loader from '../Loader.vue';

export default {
    name: 'HomePage',
    components: { AppSearch, AppMain },
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
    <AppSearch />
    <AppMain />


</template>

<!-- <style lang='scss'>
@import './assets/scss/app.scss';
</style> -->