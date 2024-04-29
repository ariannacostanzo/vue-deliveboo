<template>
    <div v-if="isLoading" class="loading">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: true
        }
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
    z-index: 100;

}
</style>