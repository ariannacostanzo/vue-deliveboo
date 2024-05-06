import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "https://js.braintreegateway.com/web/dropin/1.24.0/js/dropin.min.js"
import App from './App.vue'
import { router } from "./router/index.js";


const app = createApp(App);
app.use(router);
app.mount("#app");
