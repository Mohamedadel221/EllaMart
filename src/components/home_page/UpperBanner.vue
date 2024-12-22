<template>
  <div class="upper-banner">
    <div class="parent text-center">
      <img src="@/assets/images/banner-bg.jpg" alt="" />
      <div class="content-parent">
        <h1 class="text-capitalize white-color larg-text">
          <span class="green-color"> huge saving </span> on <br />
          UHD televisions,
        </h1>
        <div class="text-bottom">
          <h3 class="text-capitalize mt-2 mb-3 white-color">
            sale up 70% off on selected items
          </h3>
          <v-btn
            class="text-capitalize"
            density="compact"
            variant="outlined"
            height="40"
            width="160"
            color="white"
            style="border-radius: 30px"
            >shop now</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-page",
};
</script>

<style lang="scss" scoped>
.upper-banner {
  .parent {
    height: 400px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content-parent {
      position: absolute;
      left: 15%;
      top: 50px;
    }
  }
}
.green-color {
  color: rgb(72, 214, 219) !important;
}
.white-color {
  color: #fff;
}
.larg-text {
  font-size: 45px;
}
@media (max-width: 990px) {
  .upper-banner {
    .content-parent {
      left: 0% !important;
      h1 {
        font-size: 30px;
      }
      width: 500px;
    }
  }
}
@media (max-width: 767px) {
  .upper-banner {
    .parent {
      height: 300px;
      .content-parent {
        left: -15% !important;
        padding-left: 20px !important;
        h1 {
          font-size: 30px;
        }
        width: 500px;
      }
    }
  }
  .text-bottom {
    h3 {
      font-size: 13px;
    }
  }
}
@media (max-width: 580px) {
  .upper-banner {
    .parent {
      height: 250px;
      .content-parent {
        left: -28% !important;
        padding-left: 20px !important;
        h1 {
          font-size: 25px;
        }
        width: 500px;
      }
    }
  }
  .text-bottom {
    h3 {
      font-size: 12px;
    }
    .v-btn {
      height: 30px !important;
      font-size: 14px;
    }
  }
}
@media (max-width: 460px) {
  .upper-banner {
    .parent {
      height: 250px;
      .content-parent {
        left: -14% !important;
        padding-right: 10px !important;
        h1 {
          font-size: 20px;
        }
        width: 80%;
      }
    }
  }
  .text-bottom {
    h3 {
      font-size: 10px;
    }
    .v-btn {
      height: 25px !important;
      font-size: 12px;
    }
  }
}
</style>
