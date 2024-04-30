<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar container-sm">
            <RouterLink class="navbar-brand" :to="{name: 'home-page'}">
                <img src="../assets/logo-deliveboo.png" alt="LOGO">
            </RouterLink>
            <div class="cart-icon">
                <i class="fas fa-shopping-cart"></i>

                <!-- implementare counter -->
                <span class="cart-counter">0</span>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped></style>