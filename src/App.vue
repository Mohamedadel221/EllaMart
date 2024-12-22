<template>
  <app-layouts>
    <router-view />
    <QuickView />
    <v-snackbar
      v-model="bar"
      color="green"
      location="left bottom"
      timeout="3000"
    >
      {{ itemTitle }} Has Been Added To Your Cart Successfuly!
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
    <TopButton />
  </app-layouts>
</template>
<script>
import AppLayouts from "@/components/globel/AppLayouts.vue";
import QuickView from "@/components/home_page/QuickView.vue";
import TopButton from "@/components/globel/TopButton.vue";
export default {
  inject: ["emitter"],
  components: {
    AppLayouts,
    QuickView,
    TopButton,
  },
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  mounted() {
    this.emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
