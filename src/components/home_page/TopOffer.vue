<template>
  <div class="top-offer pt-5 py-9 bg-grey-lighten-4 pt-5">
    <v-container fluid>
      <v-row class="align-center">
        <v-col cols="12" md="4" sm="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent-offers text-center pr-2"
              v-bind="props"
              style="overflow: hidden"
            >
              <v-img
                :src="require('@/assets/images/playstations.webp')"
                :style="`transition:all 0.3s ease-in-out; cursor: pointer; height:100%; width:100%; scale:${
                  isHovering ? 1.1 : 1
                }`"
              ></v-img>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent-offers text-center pr-2 py-0"
              v-bind="props"
              style="overflow: hidden"
            >
              <v-img
                :src="require('@/assets/images/headset.webp')"
                :style="`transition:all 0.3s ease-in-out; cursor: pointer; height:100%; width:100%; scale:${
                  isHovering ? 1.1 : 1
                }`"
              ></v-img>
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4" sm="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent-offers text-center pr-2"
              v-bind="props"
              style="overflow: hidden"
            >
              <v-img
                :src="require('@/assets/images/chairs.webp')"
                :style="`transition:all 0.3s ease-in-out; cursor: pointer; height:100%; width:100%; scale:${
                  isHovering ? 1.1 : 1
                }`"
              ></v-img>
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <div class="top-offer-2 mt-3">
        <v-row>
          <v-col col="6">
            <div class="img-one">
              <v-img :src="require('@/assets/images/iphones.webp')"></v-img>
            </div>
          </v-col>
          <v-col col="6">
            <div class="img-one">
              <v-img :src="require('@/assets/images/laptops.webp')"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "top-offers",
};
</script>

<style lang="scss" scoped>
.parent-offers {
  border-radius: 7px;
}
</style>
