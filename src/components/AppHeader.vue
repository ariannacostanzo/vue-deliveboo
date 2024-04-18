<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="container-sm">
        <nav class="navbar">
            <a class="navbar-brand" href="#">
                <img src="" alt="LOGO" width="100" height="auto">
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