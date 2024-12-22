import { defineStore } from "pinia";
import axios from "axios";

export const productsModules = defineStore("productsModules", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    Perfume: [],
    beauty: [],
    groceries: [],
    categoryProducts: [],
    singleProducts: "",
    categoryApiCal: [],
    categories: [
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Mobile-accessories",
        route: "mobile-accessories",
      },
      {
        title: "Smartphones",
        route: "smartphones",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.Perfume = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.beauty = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}?limit=20`
        );
        this.categoryProducts = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to load products for this category.");
      }
    },
    async getSignleProducts(productId) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        this.singleProducts = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to load products for this category.");
      }
    },
  },
});
