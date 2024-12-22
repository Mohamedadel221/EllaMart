<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <MenuDrawer />
      <v-main
        :style="`padding-top:${
          $route.name == 'check-out'
            ? '0px'
            : windowWidth <= 990
            ? '60px'
            : '140px'
        }`"
      >
        <slot></slot>
      </v-main>
      <AppNav
        v-show="$route.name != 'check-out' && !fixedShow && windowWidth > 990"
      />
      <FixedNav
        v-show="$route.name != 'check-out' && fixedShow && windowWidth > 990"
        v-model="fixedShow"
      />
      <ResponsiveNav
        v-show="windowWidth <= 990 && $route.name != 'check-out'"
      />
      <AppFooter v-if="$route.name != 'check-out'" />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "@/components/globel/AppNav.vue";
import AppFooter from "@/components/globel/AppFooter.vue";
import CartDrawer from "@/components/globel/CartDrawer.vue";
import FixedNav from "@/components/globel/FixedNav.vue";
import ResponsiveNav from "@/components/globel/ResponsiveNav.vue";
import MenuDrawer from "@/components/globel/MenuDrawer.vue";
export default {
  name: "Layouts-app",
  data: () => ({
    drawer: false,
    windowWidth: 0,
    fixedShow: false,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
    FixedNav,
    ResponsiveNav,
    MenuDrawer,
  },
  mounted() {
    this.windowWidth = innerWidth;
    window.onresize = () => {
      this.windowWidth = innerWidth;
      console.log(this.windowWidth);
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.fixedShow = true;
      } else {
        this.fixedShow = false;
      }
    });
  },
};
</script>
<style scoped lang="scss"></style>
