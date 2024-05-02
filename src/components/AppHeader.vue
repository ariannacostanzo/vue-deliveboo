<script>
import { RouterLink } from 'vue-router';
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    computed: {
        dynamicQuantity() {
            let item_quantity = 0
            store.cart.forEach(item => {
                item_quantity += item.quantity;
            })

            store.totalQuantity = item_quantity;
            return store.totalQuantity

            //se cambio ristorante si deve azzerare 
        }
    }
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

                    <span class="cart-counter">{{ dynamicQuantity }}</span>
            </RouterLink>
        </nav>
    </header>
</template>

<style lang='scss' scoped></style>