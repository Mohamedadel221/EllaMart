<template>
  <div class="new-product pt-9">
    <div class="d-flex justify-space-between mb-2 align-center">
      <h1 class="text-capitalize text-black px-5">
        {{ titleNewProduct }}
      </h1>
      <a href="#" class="text-capitalize px-5 text-black">shop all</a>
    </div>
    <v-container fluid>
      <v-row class="align-center">
        <v-col cols="12" md="7" lg="7" class="pt-10">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :moduels="moduels"
            :slides-per-view="3"
            :space-between="20"
            class="pb-10 px-5"
            :autoplay="{ delay: 1000 }"
            :breakpoints="{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              600: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="text-capitalize pb-5">
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
                  <v-card-title class="">{{ item.title }}</v-card-title>
                  <v-card-text class="text-capitalize pl-0 pb-1">
                    {{
                      `(${item.title} ${item.description})`.length <= 25
                        ? `(${item.title} ${item.description})`
                        : `(${item.title} ${item.description})`.substring(0, 25)
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
                </div>
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
                <v-btn-toggle v-model="shownItem[item.title]" mandatory>
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    size="larg"
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
              </v-card>
            </swiper-slide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5" lg="5" class="">
          <img class="w-100" src="@/assets/images/vr-banner.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper";
// import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
export default {
  name: "new-prod",
  inject: ["emitter"],
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      moduels: [Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    // VSkeletonLoader,
  },
  data: () => ({
    titleNewProduct: "new products",
    shownItem: {},
  }),
  mounted() {},
};
</script>

<style lang="scss">
.v-card-title {
  font-size: 12px;
}
.v-rating {
  font-size: 12px;
}
.changeImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;
  margin: 5px;
}
.larg-img {
  width: 100%;
  height: 300px;
}
.v-btn {
  font-size: 14px;
  border-radius: 30px;
}
.pranet-img {
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
