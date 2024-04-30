//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import RestaurantDetailPage from '../components/pages/RestaurantDetailPage.vue';
import HomePage from "../components/pages/HomePage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";

//definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/', component: HomePage, name: 'home-page' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/restaurants/:id', component: RestaurantDetailPage, name: 'restaurant-detail' },
        { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'not-found' },
    ]
});

//lo esporto
export { router }