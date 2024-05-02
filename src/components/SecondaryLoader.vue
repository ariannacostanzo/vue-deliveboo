<template>
    <div v-if="isLoading" class="loading">
        <div class="loader-secondary"></div>
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
.loader-secondary {
    height: 100vh;
    width: 100%;
    position: fixed;
    background: #fff url(../assets/loader-point.gif) no-repeat center;

    z-index: 100;

}
</style>