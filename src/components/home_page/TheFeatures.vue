<template>
  <div class="feat">
    <div class="content-after-banner">
      <v-container>
        <!--content-affter-banner-->
        <v-row class="align-center">
          <v-col cols="12">
            <div class="partent-con">
              <div class="img-icon">
                <v-img
                  class="mini-width-img mx-3"
                  :src="require('@/assets/images/discount.png')"
                ></v-img>
              </div>
              <div class="con">
                <p class="mt-0 mb-0 text-uppercase">
                  pay now, pay later starting at 0% ar
                </p>
              </div>
              <div class="btn">
                <v-btn
                  class="var-btns mx-3"
                  variant="outlined"
                  elevation="0"
                  rounded="l"
                >
                  learn more
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
        <!--content-affter-banner-->
        <!--featu-icons-->
        <!--featu-icons-->
      </v-container>
    </div>
    <v-container>
      <v-row class="align-center text-capitalize text-center">
        <v-col cols="12" md="4" sm="4" lg="4">
          <div
            class="pranet d-flex align-center justify-content-center flex-column flex-sm-row"
          >
            <v-icon class="mb-5 sm-mb-0" size="35">mdi-truck</v-icon>
            <h4 class="mx-3">free shipping & return</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4">
          <div
            class="pranet d-flex align-center justify-content-center flex-column flex-sm-row"
          >
            <v-icon class="mb-5 sm-mb-0" size="35">mdi-medal</v-icon>
            <h4 class="mx-3">lowest price guarante</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4">
          <div
            class="pranet d-flex align-center justify-content-center flex-column flex-sm-row"
          >
            <v-icon class="mb-5 sm-mb-0" size="35">mdi-trophy</v-icon>
            <h4 class="mx-3">longest warranties offer</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "feat-home",
};
</script>

<style lang="scss" scoped>
.content-after-banner {
  background: #e1c512f4;
  width: 100%;
}
.mini-width-img {
  width: 20px;
}
.partent-con,
.pranet {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 591px) {
  .con p {
    font-size: 9px;
    text-align: center;
  }
  .btn .v-btn {
    font-size: 8px;
  }
}

@media (min-width: 599px) and (max-width: 990px) {
  .pranet {
    h4 {
      font-size: 12px !important;
    }
    .v-icon {
      font-size: 24px !important;
    }
  }
}
@media (min-width: 599px) and (max-width: 700px) {
  .pranet {
    h4 {
      font-size: 9px !important;
    }
    .v-icon {
      font-size: 20px !important;
    }
  }
}
</style>
