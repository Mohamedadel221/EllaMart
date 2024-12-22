<template>
  <div class="product-swiper py-2">
    <div class="d-flex justify-space-between mb-8 align-center">
      <h2
        class="text-capitalize mt-3 mb-2 text-black px-5"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h2>
      <a href="#" class="text-capitalize mt-3 mb-2 px-5 text-black">shop all</a>
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :moduels="moduels"
      :slides-per-view="4"
      :space-between="35"
      class="pb-10 px-5"
      :autoplay="{ delay: 1000 }"
      :navigation="{
        prevIcon: '.swiper-prev',
        nextIcon: '.swiper-next',
      }"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        600: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <div class="pranet-img position-relative">
          <v-card elevation="0" class="text-capitalize">
            <img
              class="larg-img"
              :src="
                shownItem[item.title] ? shownItem[item.title] : item.thumbnail
              "
              alt=""
            />
            <v-card-title style="font-size: 16px" class="text-center">{{
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
                      item.price - item.price * (item.discountPercentage / 100)
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
          </v-card>
        </div>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  name: "Perfume-compo",
  inject: ["emitter"],
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  setup() {
    return {
      moduels: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    titleFlashDeals: "fragrances",
    shownItem: {},
  }),
  methods: {
    openQuickView(product) {
      this.emitter.emit("openQuickView", product);
    },
  },
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
.product-swiper {
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #cc190d;
    top: 40%;
    &::after {
      font-size: 14px;
      color: #cc190d !important;
      display: flex;
      padding: 0;
      justify-content: center;
      align-items: center;
    }
  }
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
