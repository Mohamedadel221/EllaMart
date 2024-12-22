<template>
  <!--two-img-grid-2-->
  <div class="two-img-grid mt-0 mb-2">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" sm="6" lg="6">
          <div class="grid-one">
            <v-img
              :src="require('@/assets/images/band-left-cover.webp')"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="6" lg="6">
          <div class="grid-one">
            <v-img
              :src="require('@/assets/images/band-right-cover.webp')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!--two-img-grid-2-->
</template>

<script>
export default {
  name: "twoGridimg",
};
</script>

<style lang="scss" scoped></style>
