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
            <RouterLink class="cart-icon" :to="{ name: 'cart' }">
                    <i class="fa-solid fa-cart-shopping"></i>

                    <!-- implementare counter -->
                    <span class="cart-counter">0</span>
            </RouterLink>
        </nav>
    </header>
</template>

<style lang='scss' scoped></style>