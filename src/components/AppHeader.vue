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
    },
    mounted() {
        const savedStore = localStorage.getItem('store');
        if (savedStore) {
            try {
                // Parse the saved store object from local storage
                const parsedStore = JSON.parse(savedStore);
                // Update each property of the reactive store with the parsed values
                Object.assign(store, parsedStore);
            } catch (error) {
                console.error('Error parsing store data from local storage:', error);
            }
        }
    },
    watch: {
        store: {
            handler(newStore) {
                localStorage.setItem('store', JSON.stringify(newStore));
            },
            deep: true
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

                    <span class="cart-counter">{{ store.orderSuccesfull ? 0 : dynamicQuantity }}</span>
            </RouterLink>
        </nav>
    </header>
</template>

<style lang='scss' scoped></style>