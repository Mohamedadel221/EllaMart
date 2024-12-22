<template>
  <div class="checkout">
    <v-container fluid class="">
      <v-row>
        <v-col cols="12" md="7" sm="7">
          <div class="text-header px-3 mt-3 mb-2">
            <img
              src="@/assets/images/footer-logo.webp"
              class="mt-3 mb-2"
              alt=""
            />
            <v-breadcrumbs
              class="px-0 pb-0"
              :items="['Home', 'Your Cart', 'Check Out']"
            >
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
          <div class="express text-center">
            <span class="text-capitalize text-center bold"
              >express checkout</span
            >
            <div
              class="btn d-flex justify-center align-center mt-3 mb-2"
              style="gap: 10px"
            >
              <v-btn
                class="text-capitalize w-50 px-3"
                variant="elevated"
                density="compact"
                height="35"
                color="blue"
                elevation="0"
                prepend-icon="mdi-shopping"
                >pay
              </v-btn>
              <v-btn
                class="text-capitalize w-50"
                variant="elevated"
                density="compact"
                height="35"
                color="black"
                prepend-icon="mdi-google"
                @click="$router.push({ name: 'cart-page' })"
                >pay
              </v-btn>
            </div>
            <div class="line-or mt-3 mb-3">
              <span class="line-or-text">or</span>
            </div>
          </div>
          <v-sheet>
            <v-form @submit.prevent>
              <div class="or-contact d-flex justify-space-between align-center">
                <p class="mt-0 mb-0 text-capitalize bold">contact</p>
                <p class="mt-0 mb-0 text-capitalize bold">
                  have an account? <a href="#">log in</a>
                </p>
              </div>
              <div class="email pt-5">
                <input type="text" placeholder="Email Or Phone Number" />
              </div>
              <div class="checkbox px-0 pt-4">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox" class="text-capitalize mx-3"
                  >email me with new offers?</label
                >
              </div>
              <div class="shipping-adress pt-3">
                <h4 class="text-capitalize mt-3 mb-4">shipping adress</h4>
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
                <div class="names pt-2 d-flex align-center" style="gap: 8px">
                  <input type="text" placeholder="First Name (Optional)" />
                  <input type="text" placeholder="Last Name " />
                </div>
                <div class="adress-apar pt-3">
                  <input type="text" class="mb-3" placeholder="Adress" />
                  <input
                    type="text"
                    placeholder="Apartment, Suite , Etc, (Optional)"
                  />
                </div>
                <div class="details pt-2 d-flex align-center" style="gap: 8px">
                  <select name="" id="" placeholer="City">
                    <option
                      :value="country"
                      v-for="country in countries"
                      :key="country"
                      selected
                    >
                      {{ country }}
                    </option>
                  </select>
                  <select name="" id="" placeholer="Govrment">
                    <option
                      :value="country"
                      v-for="country in countries"
                      :key="country"
                      selected
                    >
                      {{ country }}
                    </option>
                  </select>
                  <input type="text" placeholder="Postal Code" />
                </div>
              </div>
              <div class="btn-check-ou text-end pt-3 pb-5">
                <v-btn
                  class="text-capitalize p-5"
                  variant="elevated"
                  density="compact"
                  height="40"
                  width="190px"
                  color="blue"
                  elevation="0"
                >
                  continue to shipping
                </v-btn>
              </div>
              <v-divider width="100%"></v-divider>
              <div class="all-right-resved mt-3">
                <span class="text-capitalize">all rights resaved</span>
              </div>
            </v-form>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="5" sm="5" class="pt-0 mt-0">
          <v-card
            elevation="0"
            class="bg-grey-lighten-4"
            width="100%"
            height="100%"
          >
            <v-card-title
              v-if="!cartItem.length"
              class="d-flex justify-center align-center text-error text-capitalize"
            >
              no items adedd !
            </v-card-title>
            <v-col cols="12">
              <v-card
                v-for="item in cartItem"
                :key="item.id"
                elevation="0"
                class="mt-5"
              >
                <div
                  class="img-and-category px-0 d-flex justify-space-between align-center"
                >
                  <v-badge
                    location="right top"
                    :content="cartItem.length"
                    color="red"
                    offsetX="-10"
                    offsetY="20px"
                  >
                    <img :src="item.thumbnail" class="px-0" alt="" />
                  </v-badge>
                  <v-card-text
                    class="text-capitalize pt-3 text-center"
                    style="font-size: 15px"
                  >
                    Category: {{ item.category }}</v-card-text
                  >
                </div>
                <v-card-text
                  class="d-flex justify-space-between align-center pb-3"
                >
                  <span style="font-size: 15px" class="text-capitalize"
                    >price</span
                  >
                  <span style="font-size: 15px">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}</span
                  >
                </v-card-text>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-text
                  class="d-flex justify-space-between align-center pt-3"
                >
                  <span style="font-size: 15px" class="text-capitalize"
                    >shipping</span
                  >
                  <span style="font-size: 15px"> $20.00</span>
                </v-card-text>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-text
                  class="d-flex justify-space-between align-center pt-3"
                >
                  <span style="font-size: 15px" class="text-capitalize"
                    >total</span
                  >
                  <span style="font-size: 15px">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      ) * item.quntity
                    }}</span
                  >
                </v-card-text>
                <v-divider length="100%" color="black"></v-divider>
              </v-card>
            </v-col>
            <v-card-text class="d-flex justify-space-between align-center pt-3">
              Total And Shipping
              <span style="font-size: 15px">
                ${{ calcTotalPrice + shipping }}</span
              >
            </v-card-text>
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
  data: () => ({
    countries: ["Egypt", "Ksa", "United States", "Qatar", "Lebanon"],
    shipping: 20,
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
    ...mapActions(cartStore, ["getCartItem", "deleteItem"]),
  },
};
</script>

<style lang="scss" scoped>
.express {
  .line-or {
    display: flex;
    align-items: center;
    justify-content: center;
    &::before,
    &::after {
      content: "";
      flex: 1;
      border-bottom: 1px solid #ccc;
      margin: 0 10px;
    }

    .line-or-text {
      color: #666;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
}
.bold {
  font-weight: 700;
}
.email,
.names,
.adress-apar,
.details {
  input {
    width: 100%;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 8px;
    outline: none;
  }
}
.shipping-adress,
.details {
  select {
    width: 100%;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 8px;
    outline: none;
  }
}
.img-and-category {
  img {
    width: 160px;
  }
}
@media (max-width: 767px) {
  input::placeholder {
    font-size: 12px;
  }
  select {
    font-size: 14px;
  }
}
</style>
