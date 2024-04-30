//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import RestaurantDetailPage from '../components/pages/RestaurantDetailPage.vue';

//definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurants/:id', component: RestaurantDetailPage, name: 'restaurant-detail' },
    ]
});

//lo esporto
export { router }