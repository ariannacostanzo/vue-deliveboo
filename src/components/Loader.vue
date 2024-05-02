<template>
    <div v-if="isLoading" class="loading">
        <div class="loader "></div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: true
        },

    }
};
</script>

<style scoped>
.loader {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 90px;
    background: url(../assets/pizza-loader.gif) no-repeat center;
    background-size:cover;
    z-index: 100;

}
</style>