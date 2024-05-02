import {reactive } from 'vue';

export const store = reactive({
    cart : [],
    totalQuantity: 0,
    totalPrice: 0,
    currentRestaurantId: null
})