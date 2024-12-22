<template>
  <div class="login-parent">
    <v-container class="d-flex mx-auto">
      <v-row>
        <v-col cols="12">
          <div class="parent-form-box">
            <form @submit.prevent>
              <div class="parent-form">
                <h2 class="text-center text-capitalize">log in</h2>
                <div class="email mt-3 mb-2 text-center">
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    v-model="email"
                  />
                </div>
                <div class="password mt-3 mb-2 text-center">
                  <input
                    type="password"
                    placeholder="Password"
                    id="email"
                    v-model="password"
                  />
                </div>
                <div class="btn-submit text-center mt-3">
                  <button
                    value="submit"
                    class="text-capitalize mt-3 text-center"
                  >
                    log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "log-in",
  data: () => ({
    email: "",
    password: "",
  }),
};
</script>

<style lang="scss" scoped>
.login-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.parent-form-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .parent-form {
    border-radius: 10px;
    background: #02218f;
    width: 400px;
    padding: 10px;
  }
  h2 {
    color: #fff;
  }
  button {
    color: #02218f;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 10px 15px;
    width: 100%;
  }
}
.login-parent {
  input {
    padding: 10px;
    outline: none;
    border-radius: 30px;
    border: 2px solid #fff;
    width: 100%;
    color: white;
  }
}
</style>
