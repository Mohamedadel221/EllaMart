<template>
  <div class="top-categ">
    <div class="cyber-banner">
      <v-img
        :src="require('@/assets/images/cyber-banner.webp')"
        class="w-100"
        cover
      ></v-img>
    </div>
    <div class="top-catego-img mt-5">
      <v-container fluid>
        <div
          class="shop-all text-end px-5 d-flex justify-space-between align-center text-black mt-3 mb-2"
        >
          <h2 class="text-capitalize mt-3 mb-2 text-center">top categories</h2>
          <a href="#" class="text-capitalize">shop-all</a>
        </div>
        <v-row>
          <v-col cols="12" md="2" sm="4" v-for="cat in catego" :key="cat.title">
            <v-card elevation="0" class="py-3 px-2">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-praent"
                  style="overflow: hidden; width: 100%; border-radius: 50%"
                >
                  <img
                    :src="cat.img"
                    v-bind="props"
                    alt=""
                    :style="`cursor: pointer; height:100%; width:100%; transition:0.5s all esae-in-out; scale:${
                      isHovering ? 1.05 : 1
                    };`"
                  />
                </div>
              </v-hover>
              <v-card-text class="text-capitalize mt-1 text-center larg-font">{{
                cat.title
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-categ",
  data: () => ({
    catego: [
      {
        title: "mopile phone",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "labtop & tablets",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "tv category:",
        img: " https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "pc category",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "audio & videon category:",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "gaming category",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "home appliances category",
        img: " https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "kitchen category",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "cameras category",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "consume cat",
        img: "  https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "smart cat",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "accessories cat",
        img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.larg-font {
  font-weight: 600;
}
.top-catego-img img {
  display: flex;
  margin: auto;
}
</style>
