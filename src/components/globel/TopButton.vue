<template>
  <div class="arrow-top d-flex justify-end" v-if="topButton">
    <button class="px-5" @click="scrollTop()">
      <v-icon class="fade-icon">mdi-chevron-up</v-icon>
    </button>
  </div>
</template>
<script>
export default {
  data: () => ({
    topButton: false,
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.topButton = true;
      } else {
        this.topButton = false;
      }
    });
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.arrow-top {
  position: relative;
  z-index: 1000 !important;
  button {
    background: #02218f;
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 4%;
  }
}
.fade-icon {
  position: relative;
  animation: fade 0.5s ease-in-out alternate infinite;
  transition: all 0.3s;
}
@keyframes fade {
  0% {
    opacity: 0;
    top: 0;
  }
  100% {
    opacity: 1;
    top: 5px;
  }
}
</style>
