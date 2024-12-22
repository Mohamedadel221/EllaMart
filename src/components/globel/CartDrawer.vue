<template>
  <div class="drawer">
    <v-navigation-drawer
      location="right"
      temporary
      v-model="drawer"
      width="350"
      class="pr-1"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="px-2 d-flex justify-space-between align-center text-capitalize"
          >shopping cart
          <v-icon @click="drawer = false" color="red" style="cursor: pointer"
            >mdi-close</v-icon
          ></v-card-title
        >
        <div
          class="bar-parent px-2 mt-6 position-relative"
          v-if="cartItem.length"
        >
          <v-icon
            :color="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? 'red'
                : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            "
            :style="`
              position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;
            `"
            >mdi-truck</v-icon
          >
          <v-progress-linear
            :color="
              parseInt((calcTotalPrice / 10000) * 100) < 50
                ? 'red'
                : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                  parseInt((calcTotalPrice / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            "
            class="mr-2"
            :model-value="
              parseInt((calcTotalPrice / 10000) * 100) <= 100
                ? parseInt((calcTotalPrice / 10000) * 100)
                : 100
            "
            height="10"
            striped
          ></v-progress-linear>
        </div>
        <v-card-text class="px-0 mx-3 text-capitalize" v-if="!cartItem.length"
          >free shipping for all orders over $10000</v-card-text
        >
        <v-card-text class="px-0 fw-bold py-0 mx-3 mt-3 text-capitalize"
          >( items {{ cartItem.length }} )</v-card-text
        >

        <v-card-text
          class="px-0 mx-3 text-capitalize text-center"
          v-if="!cartItem.length"
          >your card is empty</v-card-text
        >
        <v-card-actions v-if="!cartItem.length">
          <v-btn
            class="text-capitalize w-100"
            variant="outlined"
            density="compact"
            height="35"
            @click="drawer = false"
            >continue shopping</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card
        class="px-0 postion-relative"
        elevation="0"
        v-if="cartItem.length"
      >
        <v-card-text
          :color="
            parseInt((calcTotalPrice / 10000) * 100) < 50
              ? 'red'
              : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
                parseInt((calcTotalPrice / 10000) * 100) < 100
              ? 'orange'
              : 'green'
          "
          class="px-0 mx-3 text-capitalize text-center"
          v-if="cartItem.length && 10000 - calcTotalPrice > 0"
          >only ${{ 10000 - calcTotalPrice }} away in free shipping</v-card-text
        >
        <v-card-text
          class="px-0 mx-3 text-capitalize text-green text-center"
          v-if="cartItem.length && 10000 - calcTotalPrice <= 0"
        >
          Your Order Is Free Shipping Now
        </v-card-text>
        <v-container class="px-0">
          <v-row v-for="item in cartItem" :key="item.id" class="align-center">
            <v-col cols="12" md="5">
              <img :src="item.thumbnail" class="w-100" alt="" />
            </v-col>
            <v-col cols="12" md="7">
              <v-card-title
                class="text-capitalize"
                style="white-space: pre-wrap; font-size: 13px"
              >
                {{ item.title }} sample - {{ item.category }}</v-card-title
              >
              <v-card-text class="px-3 pb-0 text-capitalize"
                >category: {{ item.category }}</v-card-text
              >
              <v-card-text class="px-0 pt-0 px-3 mt-2">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quntity
                }}
              </v-card-text>
              <div
                class="item-footer d-flex justify-space-between align-center"
              >
                <div
                  class="counter"
                  style="
                    gap: 2px;
                    border-radius: 30px;
                    width: fit-content;
                    border: 2px solid #efefef;
                  "
                >
                  <v-icon
                    class="pl-2"
                    @click="item.quntity > 1 ? item.quntity-- : false"
                    style="cursor: pointer; font-size: 15px"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center"
                    style="padding: 2px; outline: none; width: 70px"
                    min="1"
                    v-model="item.quntity"
                  />
                  <v-icon
                    class="pr-2"
                    @click="item.quntity++"
                    style="cursor: pointer; font-size: 15px"
                    >mdi-plus</v-icon
                  >
                </div>

                <v-icon
                  color="red"
                  class="text-end"
                  @click="deleteItem(item.id)"
                  style="cursor: pointer; font-size: 15px"
                  >mdi-close</v-icon
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card elevation="0" class="pa-0" v-if="cartItem.length">
        <v-card-actions class="flex-column">
          <v-btn
            class="text-capitalize w-100"
            variant="elevated"
            density="compact"
            height="35"
            color="blue"
            elevation="0"
            @click="toCheckOut()"
            >check out
          </v-btn>
          <v-btn
            class="text-capitalize w-100"
            variant="outlined"
            density="compact"
            height="35"
            color="black"
            @click="$router.push({ name: 'cart-page' })"
            >view cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions, mapState } from "pinia";
export default {
  namne: "my-drawer",
  inject: ["emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.emitter.on("openCart", () => {
      this.drawer = true;
      this.getCartItem();
    });
  },
  computed: {
    ...mapState(cartStore, ["cartItem"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItem.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quntity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItem",
      "deleteItem",
      "setItemLocalStorge",
    ]),
    toCheckOut() {
      this.setItemLocalStorge();
      this.$router.push({ name: "check-out" });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  .v-card-title {
    font-size: 18px;
    font-weight: bold;
  }
  .v-card-text {
    color: #6f6f6f;
  }
}
.v-card-actions {
  .v-btn {
    border-radius: 30px;
  }
}
</style>
