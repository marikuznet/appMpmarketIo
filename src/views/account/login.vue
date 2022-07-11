<script>
  import {
    required,
    email,
    helpers
  } from "@vuelidate/validators";
  import appConfig from "../../../app.config";
  import axios from 'axios';

  export default {
    page: {
      title: "Login",
      meta: [{
        name: "description",
        content: appConfig.description,
      }, ],
    },
    data() {
      return {
        email: '',//"admin@themesbrand.com",
        password: '',//"123456",
        submitted: false,
        authError: null,
        tryingToLogIn: false,
        isAuthError: false,
      };
    },
    validations: {
      email: {
        required: helpers.withMessage("Email не может быть пустым", required),
        email: helpers.withMessage("Введите корректную почту", email),
      },
      password: {
        required: helpers.withMessage("Пароль не может быть пустым", required),
      },
    },
    computed: {

    },
    methods: {
      async signinapi() {
        const result = await axios.post('https://api-node.themesbrand.website/auth/signin', {
          email: this.email,
          password: this.password
        })
        if (result.data.status == 'errors') {
          return this.authError = result.data.data;
        }
        localStorage.setItem('jwt', result.data.token)
        this.$router.push({
          path: '/'
        });
      }
    },
  };
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <!-- auth page bg -->
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8
            1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <img src="@/assets/images/logo-light.png" alt="" height="20" />
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium" v-if="false">
                Premium Admin & Dashboard Template
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Добро пожаловать!</h5>
                  <p class="text-muted">Войдите в систему, чтобы продолжть работу в MPMARKET.</p>
                </div>
                <div class="p-2 mt-4">
                  <b-alert v-model="authError" variant="danger" class="mt-3" dismissible>{{ authError }}</b-alert>

                  <div>

                  </div>

                  <form @submit.prevent="tryToLogIn">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Введите email" v-model="email" />
                      <div class="invalid-feedback">
                        <span></span>
                      </div>
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/forgot-password" class="text-muted">Забыли пароль?</router-link>
                      </div>
                      <label class="form-label" for="password-input">Пароль</label>
                      <div class="position-relative auth-pass-inputgroup mb-3">
                        <input type="password" v-model="password" class="form-control pe-5" placeholder="Введите пароль"
                          id="password-input" />
                        <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                          type="button" id="password-addon">
                          <i class="ri-eye-fill align-middle"></i>
                        </button>
                        <div class="invalid-feedback">
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                      <label class="form-check-label" for="auth-remember-check">Запомнить меня</label>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit" @click="signinapi">
                        Войти
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title" v-if="false">
                        <h5 class="fs-13 mb-4 title">Войти с</h5>
                      </div>
                      <div>
                        <button type="button" class="btn btn-primary btn-icon
                          waves-effect waves-light">
                          <i class="ri-facebook-fill fs-16"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-icon
                          waves-effect waves-light
                          ms-1">
                          <i class="ri-google-fill fs-16"></i>
                        </button>
                        <button type="button" class="btn btn-dark btn-icon
                          waves-effect waves-light
                          ms-1">
                          <i class="ri-github-fill fs-16"></i>
                        </button>
                        <button type="button" class="btn btn-info btn-icon
                          waves-effect waves-light
                          ms-1">
                          <i class="ri-twitter-fill fs-16"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-center">
              <p class="mb-0">
                У вас нет аккаунта ?
                <router-link to="/register" class="fw-semibold text-primary
                  text-decoration-underline">
                  Зарегистрироваться
                </router-link>
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->

    <!-- footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="mb-0 text-muted">
                &copy; {{ new Date().getFullYear() }} MPMARKET
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </div>
  <!-- end auth-page-wrapper -->
</template>
