import { createRouter, createWebHistory } from "vue-router";
import CategoryListing from "./pages/category-listing.vue";

const routes = [
  { path: "/", name: "category-page", component: CategoryListing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
