import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// pinia //
import { createPinia } from "pinia";
//  Emitter //
import mitt from "mitt";
// swiper //
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const emitter = mitt();
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("emitter", emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
