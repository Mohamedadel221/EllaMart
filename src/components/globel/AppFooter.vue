<template>
  <div class="footer">
    <v-footer
      class="pt-10 bg-grey-lighten-3"
      :app="true"
      elevation="0"
      absolute
      style="z-index: 1"
    >
      <v-container fluid>
        <div class="title-footer text-center">
          <h3 class="text-uppercase text-center text-black mb-3">
            subscirbe to out newsletter
          </h3>
          <p class="mt-0 mb-0 text-black-50 text-center text-capitalize">
            get the latest updates on new products and upcoming sales
          </p>
        </div>
        <div
          class="input-sub d-md-flex-column d-flex justify-center align center mt-3 mb-2 text-center"
        >
          <input
            type="email"
            placeholder="Enter Your Email Adress"
            id="email"
          />
          <div class="button-submit">
            <v-btn
              class="text-capitalize mx-2 mt-1"
              width="100px"
              height="40px"
              color="#02218f"
              >submit</v-btn
            >
          </div>
        </div>
        <v-row>
          <v-col cols="12" sm="3" md="3" lg="3">
            <div class="links">
              <h4 class="text-uppercase mt-4 mb-2">shop</h4>
              <div class="btn-footer">
                <ul class="click-cour">
                  <li
                    class="mt-3 mb-2 text-black-50"
                    v-for="category in categories"
                    :key="category.title"
                  >
                    <router-link
                      :to="{
                        name: 'products_categ',
                        params: { catego: category.route },
                      }"
                      class="text-black-50"
                      style="text-decoration: none"
                    >
                      {{ category.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <div class="links mt-5">
              <h4 class="text-uppercase mt-4 mb-2">further info.</h4>
              <ul>
                <li
                  class="mt-3 mb-2 text-capitalize text-black-50"
                  v-for="links in further"
                  :key="links.title"
                >
                  {{ links.title }}
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <div class="links">
              <h4 class="text-uppercase mt-4 mb-2">coustmer services</h4>
              <ul>
                <li
                  class="mt-3 mb-2 text-capitalize text-black-50"
                  v-for="links in coustmer"
                  :key="links.title"
                >
                  {{ links.title }}
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3">
            <div class="social-icon">
              <img
                src="@/assets/images/footer-logo.webp"
                class="mt-3 mb-2"
                alt=""
              />
              <div class="location d-flex">
                <span class="mr-3"
                  ><v-icon color="#02218f">mdi-map-marker</v-icon></span
                >
                <h4 class="text-capitalize text-black-50">
                  686 market street <br />
                  san franscico, CA 94105, US
                </h4>
              </div>
              <div class="call d-flex mt-3 mb-2">
                <span class="mr-3"
                  ><v-icon color="#02218f">mdi-phone</v-icon></span
                >
                <h4 class="text-capitalize text-black-50">
                  call us at +201273530123
                </h4>
              </div>
              <div class="email d-flex mt-3 mb-5">
                <span class="mr-3"
                  ><v-icon color="#02218f">mdi-email</v-icon></span
                >
                <h4 class="text-capitalize text-black-50">ma@gmail.com</h4>
              </div>
              <div class="icons-footer mt-7 d-flex justfiy-between">
                <button>
                  <v-icon>mdi-facebook</v-icon>
                </button>
                <button>
                  <v-icon>mdi-instagram</v-icon>
                </button>
                <button>
                  <v-icon>mdi-pinterest</v-icon>
                </button>
                <button>
                  <v-icon>mdi-twitter</v-icon>
                </button>
                <button>
                  <v-icon>mdi-snapchat</v-icon>
                </button>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <div class="logo-cards mt-5 mb-3">
            <img src="@/assets/images/cart-page-cards.webp" alt="" />
          </div>
          <v-col cols="12">
            <div class="text-center content-bottom-foot mt-5">
              <p class="text-capitalize text-black-50">
                &copy; {{ new Date().getFullYear() }} E-commerce web-app all
                rights reserved powred by dev mohamed adel
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModules } from "@/store/product";
import { mapState } from "pinia";
export default {
  name: "my-footer",
  computed: {
    ...mapState(productsModules, ["categories"]),
  },
  data: () => ({
    further: [
      {
        title: "about",
      },
      {
        title: "coustmer services",
      },
      {
        title: "reward programs",
      },
      {
        title: "shipping & return",
      },
      {
        title: "privacy policy",
      },
      {
        title: "terms & conditions",
      },
      {
        title: "blog",
      },
    ],
    coustmer: [
      {
        title: "search terms",
      },
      {
        title: "advanced search",
      },
      {
        title: "orders & returns",
      },
      {
        title: "contact us",
      },
      {
        title: "theme FAQs",
      },
      {
        title: "consultant",
      },
      {
        title: "store locations",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.text-black-50 {
  color: rgb(0, 0, 3);
  opacity: 0.7;
}
.title-footer {
  p {
    font-size: 12.9px;
  }
}
.bg-footer {
  background-color: rgb(196, 192, 192);
}
.input-sub {
  input {
    border-radius: 30px;
    outline: none;
    display: inline-block;
    padding: 10px;
    border: 2px solid #a5a3a3;
    width: 350px;
  }
  .v-btn {
    border-radius: 30px;
    padding: 10px;
  }
}
.logo-cards {
  display: flex;
  margin: auto;
  img {
    background-color: transparent;
    width: 600px;
  }
}
@media (max-width: 990px) {
  .logo-cards img {
    width: 300px;
  }
}
.social-icon {
  h4 {
    font-size: 14px;
  }
}
.icons-footer {
  font-size: 10px;
  gap: 4px;
  button {
    color: #fff;
    background: #02218f;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.links li {
  list-style: none;
  cursor: pointer;
}
@media (min-width: 620px) and (max-width: 991px) {
  .links {
    li {
      font-size: 13px;
    }
    & h4 {
      font-size: 10px !important;
    }
  }
  .social-icon {
    h4 {
      font-size: 12px;
    }
    img {
      width: 120px !important;
    }
  }
}
@media (max-width: 620px) {
  .title-footer {
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 12px;
    }
  }
  input::placeholder {
    font-size: 13px;
  }
  .links {
    li {
      font-size: 12px;
    }
    & h4 {
      font-size: 10px !important;
    }
  }
  .social-icon {
    h4 {
      font-size: 12px;
    }
    img {
      width: 110px !important;
    }
  }
}
</style>
