<template>
  <div class="product-swiper py-10">
    <div class="d-flex justify-space-between mb-8 align-center">
      <h1
        class="text-capitalize mt-3 mb-2 px-5"
        :class="[`text-${titleColor}`]"
      >
        {{ title }}
      </h1>
      <a href="#" class="text-capitalize px-5 text-black">shop all</a>
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
            <v-card-title class="text-center">{{ item.title }}</v-card-title>
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
    <!-- <v-row>
        <v-col cols="12" md="3" v-for="item in products" :key="item.id">
          <v-card elevation="0" class="text-capitalize">
            <img
              class="larg-img"
              :src="
                shownItem[item.title] ? shownItem[item.title] : item.thumbnail
              "
              alt=""
            />
            <v-card-title class="text-center">{{ item.title }}</v-card-title>
            <v-card-text class="text-capitalize pl-0 pb-1">
              {{
                item.description.split(" ").length <= 10
                  ? item.description
                  : item.description.split(" ").slice(0, 10).join(" ") + "..."
              }}
            </v-card-text>
            <v-rating
              color="yellow-darken-2"
              v-model="item.rating"
              half-increments
              size="x-smal"
 
            ></v-rating>
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
            <v-btn-toggle v-model="shownItem[item.title]">
              <v-btn
                v-for="(pic, i) in item.images"
                :value="pic"
                :key="i"
                size="x-smal"
                ><img class="changeImg" :src="pic" alt=""
              /></v-btn>
            </v-btn-toggle>
            <div class="text-center">
              <v-btn
           
                class="text-capitalize py-3 px-7"
                rounded="xl"
                elevation="0"
                variant="outlined"
                >Choes Option</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  name: "FlashDeals",
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
    titleFlashDeals: "flash deals",
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
.product-swiper {
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #000;
    top: 40%;
    &::after {
      font-size: 14px;
      color: #000 !important;
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
