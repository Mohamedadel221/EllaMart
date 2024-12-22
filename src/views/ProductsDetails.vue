<template>
  <div class="products-deatils">
    <h2 class="text-center mt-5 text-capitalize">products deatils</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <img
            :src="tabs ? tabs : singleProducts.thumbnail"
            height="300"
            alt=""
            class="w-75 d-flex m-auto"
          />
          <v-tabs center-active height="200" v-model="tabs">
            <v-tab
              v-for="(img, i) in singleProducts.images"
              :key="i"
              class="mx-10"
              :value="img"
              ><img :src="img" width="100" height="100" alt=""
            /></v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="5">
          <v-card elevation="0">
            <v-card-title class="text-capitalize px-0 larg-font-weight"
              >({{ singleProducts.title }})
              {{ singleProducts.category }} sale</v-card-title
            >
            <v-card-text class="mb-2 mt-3 text-capitalize px-0 pb-0">{{
              singleProducts.description
            }}</v-card-text>
            <div class="d-flex align-center mb-2 px-0">
              <v-rating
                class="px-0"
                v-model="singleProducts.rating"
                color="yellow-darken-2"
                half-increments
                size="x-smal"
                >{{ singleProducts.rating }}
              </v-rating>
              <span class="text-error text-capitalize mx-2"
                >stcok: {{ singleProducts.stock }}</span
              >
            </div>
            <v-card-text class="text-capitalize pt-0 px-0"
              >brand: {{ singleProducts.brand }}</v-card-text
            >
            <v-card-text class="text-capitalize pt-0 px-0"
              >available:
              {{
                singleProducts.stock > 0 ? "in stock" : "out of stock"
              }}</v-card-text
            >
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProducts.price }}</del> From
              <strong>
                <span class="text-red">
                  ${{
                    Math.ceil(
                      singleProducts.price -
                        singleProducts.price *
                          (singleProducts.discountPercentage / 100)
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
                  singleProducts.price -
                    singleProducts.price *
                      (singleProducts.discountPercentage / 100)
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
                @click="addToCart(singleProducts)"
                :loading="btnLoading"
                >add to cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModules } from "@/store/product";
import { cartStore } from "@/store/cart";
import { mapState, mapActions } from "pinia";
export default {
  inject: ["emitter"],
  computed: {
    ...mapState(productsModules, ["singleProducts"]),
  },
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    ...mapActions(productsModules, ["getSignleProducts"]),
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
  name: "products-deatils",
  data: () => ({
    tabs: "",
    quntity: 1,
    loading: false,
    btnLoading: false,
  }),
  async mounted() {
    this.emitter.on("openQuickView", (data) => {
      this.product = data;
      this.dialog = true;
      console.log(data);
    });
    await this.getSignleProducts(this.$route.params.productId);
  },
};
</script>

<style scoped lang="scss">
.larg-font-weight {
  font-weight: 800;
}
.v-rating {
  span {
    color: red;
  }
}
</style>
