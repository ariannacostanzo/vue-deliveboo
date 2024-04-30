//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import RestaurantDetailPage from '../components/pages/RestaurantDetailPage.vue';
import HomePage from "../components/pages/HomePage.vue";

//definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/', component: HomePage, name: 'home-page' },
        { path: '/restaurants/:id', component: RestaurantDetailPage, name: 'restaurant-detail' },
    ]
});

//lo esporto
export { router }