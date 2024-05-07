//web routes
import { createRouter, createWebHistory } from "vue-router";
//importo le pagine che mi servono
import RestaurantDetailPage from '../components/pages/RestaurantDetailPage.vue';
import HomePage from "../components/pages/HomePage.vue";
import ContactUsPage from "../components/pages/ContactUsPage.vue";
import NotFoundPage from "../components/pages/NotFoundPage.vue";
import CartPage from "../components/pages/CartPage.vue";
import OverviewPage from "../components/pages/OverviewPage.vue";

//definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "home-page" },
    { path: "/cart", component: CartPage, name: "cart" },
    { path: "/contact-us", component: ContactUsPage, name: "contact-us" },
    { path: "/overview", component: OverviewPage, name: "overview" },
    { path: "/restaurants/:id", component: RestaurantDetailPage, name: "restaurant-detail"},
    { path: "/:pathMatch(.*)*", redirect: { name: "home-page" } },
  ],
  scrollBehavior(to, from) {
    return {top: 0}
  }
});

//lo esporto
export { router }