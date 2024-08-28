import Vue from "vue";
import VueRouter from "vue-router";
import CartList from "@/views/CartList.vue";
import ProductList from "@/views/ProductList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product-list",
    component: ProductList,
  },
  {
    path: "/cart",
    name: "cart-list",
    component: CartList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
