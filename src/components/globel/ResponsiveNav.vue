<template>
  <div class="res-nav">
    <v-app-bar>
      <v-container>
        <v-row class="align-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon color="#000" @click="openMenu()">
            </v-app-bar-nav-icon>
            <v-navigation-drawer
              location="right"
              temporary
              v-model="drawer"
              width="300"
            >
            </v-navigation-drawer>
            <div class="d-flex show-input flex-column">
              <v-icon class="mrl-7" @click="showInput = !showInput"
                >mdi-magnify</v-icon
              >
              <input
                class="mt-3"
                v-if="showInput"
                type="text"
                placeholder="Search In Store"
              />
            </div>
          </v-col>
          <v-col cols="4">
            <img
              src="@/assets/images/footer-logo.webp"
              alt=""
              @click="$router.push({ name: 'home' })"
            />
          </v-col>
          <v-col cols="4" class="d-flex justify-end" style="gap: 7px">
            <v-icon>mdi-account</v-icon>
            <v-badge
              location="right top"
              :content="cartItem.length"
              color="red"
              offsetX="-5"
            >
              <v-icon @click="openCart()">mdi-cart</v-icon>
            </v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { productsModules } from "@/store/product";
import { mapState } from "pinia";
export default {
  data: () => ({
    showInput: false,
    drawer: false,
  }),
  inject: ["emitter"],
  computed: {
    ...mapState(productsModules, ["categories"]),
    ...mapState(cartStore, ["cartItem"]),
  },
  methods: {
    openCart() {
      this.emitter.emit("openCart");
    },
    openMenu() {
      this.emitter.emit("openMenu");
    },
  },
};
</script>

<style scoped lang="scss">
.res-nav {
  img {
    width: 100px;
    cursor: pointer;
    display: flex;
    margin: auto;
  }

  .v-icon {
    cursor: pointer;
  }
}

.show-input {
  input {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #000;
    outline: none;
    padding: 2px;
    color: #000;
    text-transform: capitalize;
  }
}
</style>
