import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./view/Home.vue";
import ProductDetails from "./view/ProductDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detalhes/:id", component: ProductDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
