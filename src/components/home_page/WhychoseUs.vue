<template>
  <div class="why-choses-us py-14">
    <div class="title">
      <h2 class="text-center mb-5 text-capitalize">
        <span>why shop</span> with us?
      </h2>
    </div>
    <div class="card-loop pt-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
            sm="6"
            lg="3"
            v-for="content in whyChose"
            :key="content.title"
          >
            <v-card
              class="text-center text-capitalize text-white"
              elevation="0"
              color="transparent"
            >
              <div class="text-center">
                <img :src="content.img" alt="" />
              </div>
              <v-card-title class="text-capitalize larg-font-weight">
                {{ content.title }}
              </v-card-title>
              <v-card-text class="pb-0 text-capitalize larg-font-weight">{{
                content.descrip
              }}</v-card-text>
              <div class="learnmore">
                <a
                  href="#"
                  class="text-capitalize larg-font-weight"
                  style="color: #fff"
                  >learn more</a
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "whychoses-us",
  data: () => ({
    whyChose: [
      {
        img: require("@/assets/images/free-shipping.png"),
        title: "free shipping on first order ",
        descrip: "praesent suscipit mattis facillsis",
      },
      {
        img: require("@/assets/images/weekly-flash-sales.png"),
        title: "weakly flash sale ",
        descrip: "praesent suscipit mattis facillsis",
      },
      {
        img: require("@/assets/images/discount.png"),
        title: " anual payment discount",
        descrip: "praesent suscipit mattis facillsis",
      },
      {
        img: require("@/assets/images/cash-back.png"),
        title: "cashback reward program",
        descrip: "praesent suscipit mattis facillsis",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-card-title {
  font-size: 17px;
}
.why-choses-us {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    span {
      color: rgb(72, 214, 219) !important;
    }
  }
}
.larg-font-weight {
  font-weight: 900;
}
@media (min-width: 620px) and (max-width: 991px) {
  .v-card {
    .v-card-title {
      font-size: 14px;
    }
    & .v-card-text {
      white-space: nowrap;
      font-size: 11px;
    }
  }
}
</style>
