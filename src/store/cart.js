import { defineStore } from "pinia";
export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItem: [],
    searchResults: [],
  }),
  actions: {
    addItem(item) {
      let exitis = false;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == item.id) {
          this.cartItem[i].quntity += item.quntity;
          exitis = true;
          break;
        }
      }
      if (!exitis) {
        this.cartItem.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cart-Item", JSON.stringify(this.cartItem));
    },
    getCartItem() {
      if (localStorage.getItem("cart-item")) {
        this.cartItem = JSON.parse(localStorage.getItem("cart-item"));
      }
    },
    searchItem(query) {
      if (!query) {
        this.searchResults = [...this.cartItem];
      } else {
        this.searchResults = this.cartItem.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
      }
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id == id) {
          this.cartItem.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart-Item", JSON.stringify(this.cartItem));
    },
    setItemLocalStorge() {
      localStorage.setItem("cart-Item", JSON.stringify(this.cartItem));
    },
  },
});
