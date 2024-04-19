<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="">
        <nav class="navbar container-sm">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo-deliveboo.png" alt="LOGO">
            </a>
            <div class="cart-icon">
                <i class="fas fa-shopping-cart"></i>

                <!-- implementare counter -->
                <span class="cart-counter">0</span>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped></style>