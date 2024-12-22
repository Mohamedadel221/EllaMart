<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffer />
    <ProductsCompo
      :products="flashDeals"
      title="flash deals"
      titleColor="red"
    />
    <TopCatego />
    <NewProduct :products="newProducts" />
    <QuilatyFeatures />
    <Perfume :products="Perfume" title="new perfume" />
    <TwoImg />
    <Perfume :products="beauty" title="collection beauty" />
    <BannerTv />
    <ProductsCompo :products="groceries" title="groceries" />
    <WhychoseUs />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffer from "@/components/home_page/TopOffer.vue";
import ProductsCompo from "@/components/home_page/ProductsCompo.vue";
import TopCatego from "@/components/home_page/TopCatego.vue";
import NewProduct from "@/components/home_page/NewProduct.vue";
import QuilatyFeatures from "@/components/home_page/QuilatyFeatures.vue";
import Perfume from "@/components/home_page/Perfume.vue";
import TwoImg from "@/components/home_page/TwoImg.vue";
import BannerTv from "@/components/home_page/BannerTv.vue";
import WhychoseUs from "@/components/home_page/WhychoseUs.vue";
import { productsModules } from "@/store/product";
import { mapActions, mapState } from "pinia";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffer,
    ProductsCompo,
    TopCatego,
    NewProduct,
    QuilatyFeatures,
    Perfume,
    TwoImg,
    BannerTv,
    WhychoseUs,
  },
  computed: {
    ...mapState(productsModules, [
      "flashDeals",
      "newProducts",
      "Perfume",
      "beauty",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModules, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
