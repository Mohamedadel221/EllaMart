<template>
  <div class="products-deatils">
    <v-dialog v-model="dialog" max-width="900" max-height="500">
      <div class="close">
        <v-icon
          v-model="closeIcon"
          @click="dialog = false"
          class="bg-black"
          color="red"
          >mdi-close</v-icon
        >
      </div>
      <v-card elevation="0">
        <v-container class="bg-white" fluid>
          <h2 class="text-center mt-2 text-capitalize">products deatils</h2>
          <v-row align-center>
            <v-col cols="12" md="7">
              <img
                :src="tabs ? tabs : product.thumbnail"
                height="250"
                alt=""
                class="w-75 d-flex m-auto"
              />
              <v-tabs center-active height="200" v-model="tabs">
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                  ><img :src="img" width="100" height="100" alt=""
                /></v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5">
              <v-card elevation="0">
                <v-card-title
                  class="text-capitalize px-0 larg-font-weight"
                  style="white-space: pre-wrap"
                  >({{ product.title }})
                  {{ product.category }} sale</v-card-title
                >
                <v-card-text class="mb-2 mt-3 text-capitalize px-0 pb-0">{{
                  product.description
                }}</v-card-text>
                <div class="d-flex align-center mb-2 px-0">
                  <v-rating
                    class="px-0"
                    v-model="product.rating"
                    color="yellow-darken-2"
                    half-increments
                    size="x-smal"
                    >{{ product.rating }}
                  </v-rating>
                  <span class="text-error text-capitalize mx-2"
                    >stcok: {{ product.stock }}</span
                  >
                </div>
                <v-card-text class="text-capitalize pt-0 px-0"
                  >brand: {{ product.brand }}</v-card-text
                >
                <v-card-text class="text-capitalize pt-0 px-0"
                  >available:
                  {{
                    product.stock > 0 ? "in stock" : "out of stock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0">
                  <del>${{ product.price }}</del> From
                  <strong>
                    <span class="text-red">
                      ${{
                        Math.ceil(
                          product.price -
                            product.price * (product.discountPercentage / 100)
                        )
                      }}
                    </span></strong
                  >
                </v-card-text>
                <v-card-text class="pt-0 pl-0 text-capitalize"
                  >quntity: {{ quntity }}</v-card-text
                >
                <v-card-text class="pl-0 pt-0 text-capitalize">
                  subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quntity
                  }}
                </v-card-text>
                <div
                  class="counter d-flex align-center"
                  style="
                    gap: 10px;
                    border-radius: 30px;
                    width: fit-content;
                    border: 2px solid #efefef;
                  "
                >
                  <v-icon
                    class="pl-2"
                    @click="quntity > 1 ? quntity-- : false"
                    style="cursor: pointer; font-size: 15px"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    class="text-center py-2"
                    style="padding: 4px; outline: none"
                    min="1"
                    v-model="quntity"
                  />
                  <v-icon
                    class="pr-2"
                    @click="quntity++"
                    style="cursor: pointer; font-size: 15px"
                    >mdi-plus</v-icon
                  >
                </div>
                <v-card-actions class="mt-7 w-100">
                  <v-btn
                    class="text-capitalize w-75"
                    color="black"
                    style="border-radius: 30px"
                    variant="elevated"
                    @click="addToCart(product)"
                    :loading="btnLoading"
                    >add to cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { mapState, mapActions } from "pinia";
export default {
  inject: ["emitter"],
  name: "products-deatils",
  data: () => ({
    tabs: "",
    quntity: 1,
    dialog: false,
    closeIcon: true,
    product: "",
    btnLoading: false,
    loading: false,
  }),
  mounted() {
    this.emitter.on("openQuickView", (data) => {
      this.product = data;
      this.dialog = true;
      console.log(data);
    });
    this.getCartItem();
  },
  computed: {
    ...mapState(cartStore, ["cartItem"]),
  },
  methods: {
    ...mapActions(cartStore, ["addItem", "getCartItem"]),
    addToCart(item) {
      item.quntity = this.quntity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.dialog = false;
        this.emitter.emit("showMsg", item.title);
        this.addItem(item);
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.larg-font-weight {
  font-weight: 800;
}
.close {
  position: relative;
  .v-icon {
    position: absolute;
    right: -1%;
    top: -10px;
    z-index: 10;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
