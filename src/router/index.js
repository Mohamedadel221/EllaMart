import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsCategory from "@/views/ProductsCategory.vue";
import ProductsDetails from "@/views/ProductsDetails.vue";
import LogIn from "@/components/signup-signin/LogIn.vue";
import CartPage from "@/views/CartPage.vue";
import CheckOut from "@/views/CheckOut.vue";
import ErrorPage from "@/views/ErrorPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/products/:catego/",
    name: "products_categ",
    component: ProductsCategory,
    meta: {
      title: "Products",
    },
  },
  {
    path: "/products/products-details/:productId",
    name: "products_details",
    component: ProductsDetails,
    meta: {
      title: "Products Details",
    },
  },
  {
    path: "/cartpage",
    name: "cart-page",
    component: CartPage,
    meta: {
      title: "Cart Page",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/checkout",
    name: "check-out",
    component: CheckOut,
    meta: {
      title: "CheckOut Page",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "error-page",
    component: ErrorPage,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
