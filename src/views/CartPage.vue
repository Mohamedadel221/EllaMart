<template>
  <div class="card-page">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs class="px-0 pb-0" :items="['Home', 'Your Cart']">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <div class="title-cart px-0 mt-3 mb-0">
            <h1 class="text-capitalize">your cart</h1>
            <div
              class="no-products py-2 text-center bg-grey-lighten-4"
              v-if="!cartItem.length"
            >
              <h2 class="text-error text-capitalize">Your cart is empty!</h2>
              <v-btn
                class="text-capitalize px-3"
                variant="outlined"
                density="compact"
                height="40px"
                width="180px"
                color="black"
                @click="$router.push({ name: 'home' })"
                >continue shopping
              </v-btn>
            </div>
          </div>
          <div
            class="bar-parent px-0 mt-3 position-relative"
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
                  : parseInt((calcTotalPrice / 10000) * 100) >= 50 &&
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
          <div class="show-and-hide-text px-0 mt-0 mb-2">
            <p
              :color="
                parseInt((calcTotalPrice / 10000) * 100) < 50
                  ? 'red'
                  : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                    parseInt((calcTotalPrice / 10000) * 100) < 100
                  ? 'orange'
                  : 'green'
              "
              class="px-0 pt-0 pb-0 text-capitalize"
              v-if="cartItem.length && 10000 - calcTotalPrice > 0"
            >
              only ${{ 10000 - calcTotalPrice }} away in free shipping
            </p>
            <p
              class="px-0 pt-0 pb-0 text-capitalize text-green"
              v-if="cartItem.length && 10000 - calcTotalPrice <= 0"
            >
              Your Order Is Free Shipping Now
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="8" sm="8">
          <v-table class="w-100">
            <thead
              style="font-size: 13px; font-weight: bold"
              class="bg-grey-lighten-4"
            >
              <tr>
                <th
                  v-for="tables in thTable"
                  :key="tables.title"
                  class="text-uppercase"
                >
                  {{ tables.thName }}
                </th>
              </tr>
            </thead>
            <tbody v-for="item in cartItem" :key="item.id">
              <td style="width: 55%">
                <v-row class="align-center pt-0">
                  <v-col cols="12" md="5">
                    <img :src="item.thumbnail" class="w-100" alt="" />
                  </v-col>
                  <v-col cols="12" md="7">
                    <v-card-title
                      class="text-capitalize title-table"
                      style="white-space: pre-wrap; font-size: 13px"
                    >
                      {{ item.title }} sample -
                      {{ item.category }}</v-card-title
                    >
                    <v-card-text class="px-3 pb-0 text-capitalize"
                      >category: {{ item.category }}</v-card-text
                    >
                  </v-col>
                </v-row>
              </td>
              <td style="width: 15%">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                }}
              </td>
              <td style="width: 15%">
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
                      style="padding: 2px; outline: none; width: 40px"
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
                </div>
              </td>
              <td style="width: 15%">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quntity
                }}
              </td>
              <td style="width: 15%">
                <v-icon
                  color="red"
                  class="r-4"
                  @click="deleteItem(item.id)"
                  style="cursor: pointer; font-size: 13px"
                  >mdi-close</v-icon
                >
              </td>
            </tbody>
          </v-table>
          <div class="secure px-0 mt-4 mb-3" v-if="cartItem.length">
            <div class="d-flex align-center" style="gap: 10px">
              <v-icon class="text-error px-0">mdi-lock</v-icon>
              <span class="text-error text-capitalize fw-bold"
                >secure shopping</span
              >
            </div>
            <img
              src="@/assets/images/cart-page-cards.webp"
              width="250px"
              alt=""
              class="mt-3"
            />
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <v-card elevation="0">
            <v-card-title
              class="text-uppercase"
              style="font-size: 18px; font-weight: bold"
            >
              order summary
            </v-card-title>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text
              v-if="cartItem.length"
              class="text-capitalize d-flex align-center justify-space-between"
            >
              <span style="font-weight: bold">Subtotal</span>
              <span style="font-weight: bold">${{ calcTotalPrice }}</span>
            </v-card-text>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text v-if="cartItem.length">
              <span
                class="text-capitalize"
                style="font-size: 18px; font-weight: bold"
                >get shipping estimate:</span
              >
            </v-card-text>
            <v-sheet v-if="cartItem.length">
              <v-form @submit.prevent>
                <div class="inputs px-0">
                  <select name="" id="">
                    <option
                      :value="country"
                      v-for="country in countries"
                      :key="country"
                      selected
                    >
                      {{ country }}
                    </option>
                  </select>
                  <div class="inputs d-flex align-center mt-3">
                    <select name="" id="">
                      <option
                        :value="country"
                        v-for="country in countries"
                        :key="country"
                        selected
                      >
                        {{ country }}
                      </option>
                    </select>
                    <input type="number" placeholder="Postal Code" />
                  </div>
                  <div class="btn">
                    <v-card-actions class="mt-3 mb-2">
                      <v-btn
                        class="text-capitalize w-100"
                        variant="elevated"
                        density="compact"
                        height="35"
                        color="blue"
                        elevation="0"
                        >calculate shipping
                      </v-btn>
                    </v-card-actions>
                  </div>
                  <v-divider length="100%" color="black"></v-divider>
                  <v-card-text>
                    <span
                      class="text-capitalize"
                      style="font-size: 18px; font-weight: bold"
                      >coupon code:</span
                    >
                  </v-card-text>
                  <div class="coupon-input mb-3">
                    <input type="number" placeholder="Coupon Code" />
                    <h5 class="text-capitalize mt-3 pl-2">
                      coupon code will be applied on the checkout page
                    </h5>
                  </div>
                  <v-divider length="100%" color="black"></v-divider>
                  <v-card-text
                    class="text-capitalize d-flex align-center justify-space-between"
                  >
                    <span style="font-weight: bold; font-size: 18px"
                      >total</span
                    >
                    <span style="font-weight: bold; font-size: 18px"
                      >${{ calcTotalPrice }}</span
                    >
                  </v-card-text>
                  <v-divider length="100%" color="black"></v-divider>
                  <div class="taxi px-0">
                    <h5 class="text-capitalize mt-3 pl-2">
                      tax included and shipping calculated at cheackout page
                    </h5>
                  </div>

                  <v-card-actions class="flex-column">
                    <v-btn
                      class="text-capitalize w-100"
                      variant="elevated"
                      density="compact"
                      height="35"
                      color="blue"
                      elevation="0"
                      @click="toCheckOut()"
                      >proceed to check out
                    </v-btn>
                    <v-btn
                      class="text-capitalize w-100"
                      variant="outlined"
                      density="compact"
                      height="35"
                      color="black"
                      @click="$router.push({ name: 'home' })"
                      >continue shopping
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-form>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "cartPage",
  data: () => ({
    thTable: [
      {
        thName: "products",
      },
      {
        thName: "price",
      },
      {
        thName: "quantity",
      },
      {
        thName: "total",
      },
    ],
    countries: ["Egypt", "Ksa", "United States", "Qatar", "Lebanon"],
  }),
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

<style scoped lang="scss">
table {
  .v-table__wrapper {
    overflow: hidden !important;
  }
}
.inputs {
  select,
  input {
    width: 100%;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 30px;
    outline: none;
  }
}
.btn .v-card-actions {
  .v-btn {
    border-radius: 30px;
  }
}
.coupon-input,
.taxi {
  h5 {
    color: rgba(0, 0, 0, 0.546);
    font-size: 15px;
  }
}
@media (max-width: 620px) {
  .title-table {
    font-size: 10px;
    white-space: none !important;
  }
}
</style>
