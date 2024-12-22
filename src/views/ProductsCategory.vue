<template>
  <!-- <div class="prodctus-category mt-10">
    <h2 class="mt-15">ttt{{ this.$route.params.title }}</h2>
  </div> -->
  <div class="card-show">
    <v-card :loading="loading" class="pt-5" min-height="700px" elevation="0">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
          >
            <v-lazy>
              <v-card elevation="0" class="text-capitalize">
                <div class="pranet-img position-relative">
                  <img
                    class="larg-img"
                    :src="
                      shownItem[item.title]
                        ? shownItem[item.title]
                        : item.thumbnail
                    "
                    alt=""
                  />
                  <v-card-title class="text-center">{{
                    item.title
                  }}</v-card-title>
                  <v-card-text class="text-capitalize pl-0 pb-1">
                    {{
                      `(${item.title} ${item.description})`.length <= 57
                        ? `(${item.title} ${item.description})`
                        : `(${item.title} ${item.description})`.substring(0, 57)
                    }}
                  </v-card-text>
                  <v-rating
                    color="yellow-darken-2"
                    v-model="item.rating"
                    half-increments
                    size="x-smal"
                  ></v-rating>
                  <v-hover>
                    <v-btn
                      class="text-capitalize quick-view bg-white"
                      variant="outlined"
                      density="compact"
                      color="black"
                      @click="openQuickView(item)"
                      >quick view</v-btn
                    >
                  </v-hover>
                  <v-card-text class="pl-0 pt-0">
                    <del>${{ item.price }}</del> From
                    <strong>
                      <span class="text-red">
                        ${{
                          Math.ceil(
                            item.price -
                              item.price * (item.discountPercentage / 100)
                          )
                        }}
                      </span></strong
                    >
                  </v-card-text>
                  <v-btn-toggle v-model="shownItem[item.title]">
                    <v-btn
                      v-for="(pic, i) in item.images"
                      :value="pic"
                      :key="i"
                      size="x-smal"
                      rounded="xl"
                      ><img class="changeImg" :src="pic" alt=""
                    /></v-btn>
                  </v-btn-toggle>
                  <div class="text-center mb-6">
                    <v-btn
                      class="text-capitalize"
                      density="compact"
                      variant="outlined"
                      height="40"
                      width="160"
                      color="black"
                      style="border-radius: 30px"
                      @click="
                        $router.push({
                          name: 'products_details',
                          params: { productId: item.id },
                        })
                      "
                      >Chooes Opition</v-btn
                    >
                  </div>
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { productsModules } from "@/store/product";
import { mapActions, mapState } from "pinia";
export default {
  namne: "cat-prod",
  inject: ["emitter"],
  data: () => ({
    shownItem: {},
    loading: false,
  }),
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
    ...mapActions(productsModules, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModules, ["categoryProducts", "categories"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.catego);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.catego);
    this.loading = false;
  },
};
</script>

<style lang="scss">
.pranet-img {
  img {
    display: flex;
    margin: auto;
  }
  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    border-radius: 30px;
    transition: all 0.2s ease-in;
    opacity: 0;
  }
}
.pranet-img:hover {
  .quick-view {
    opacity: 1 !important;
  }
}
</style>
