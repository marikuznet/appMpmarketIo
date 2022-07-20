<script>
import SwiperCore, {Thumbs, Navigation, Pagination} from "swiper";
// import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
import useVuelidate from "@vuelidate/core";
import {required} from '@vuelidate/validators';

SwiperCore.use([Thumbs, Navigation, Pagination]);

import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";

export default {
  setup() {
    return {v$: useVuelidate()}
  },
  page: {
    title: "Profile",
    meta: [{name: "description", content: appConfig.description}],
  },
  data() {
    return {
      title: "Profile",
      items: [
        {
          text: "Velzon",
          href: "/",
        },
        {
          text: "Profile",
          active: true,
        },
      ],
      thumbsSwiper: null,
      full_name: '',
      employees: [
        {
          id: '13E2FEBA',
          user_surname: 'Ефимов',
          user_name: 'Назарий',
          user_patronymic: 'Георгиевич',
          user_role: 'Администратор',
          user_email: 'n.efimov@mpmarket.io',
          user_phone: '79095557189',
          user_telegram: 'Nomadiction',
          user_avatar: 'https://picsum.photos/200',
          user_backgroundphoto: 'https://picsum.photos/1300/320',
          status: 'Активен'
        },
        {
          id: '28E7BF17',
          user_surname: 'Романова',
          user_name: 'Таира',
          user_patronymic: 'Тимуровна',
          user_role: 'Модератор',
          user_email: 't.romanova@mpmarket.io',
          user_phone: '79095553481',
          user_telegram: 'Midgeabean',
          user_avatar: 'https://picsum.photos/201',
          user_backgroundphoto: 'https://picsum.photos/1300/321',
          status: 'Активен'
        },
        {
          id: '3B40A664',
          user_surname: 'Федотов',
          user_name: 'Варлаам',
          user_patronymic: 'Степанович',
          user_role: 'Логист',
          user_email: 'v.fedotov@mpmarket.io',
          user_phone: '79035559334',
          user_telegram: 'Explosssive',
          user_avatar: 'https://picsum.photos/202',
          user_backgroundphoto: 'https://picsum.photos/1300/322',
          status: 'Активен'
        },
        {
          id: '4EA5F19B',
          user_surname: 'Ефимова',
          user_name: 'Клара',
          user_patronymic: 'Германовна',
          user_role: 'Закупщик',
          user_email: 'k.efimova@mpmarket.io',
          user_phone: '79515551915',
          user_telegram: 'Astropower',
          user_avatar: 'https://picsum.photos/203',
          user_backgroundphoto: 'https://picsum.photos/1300/323',
          status: 'Активен'
        },
        {
          id: '860322EE',
          user_surname: 'Дорофеев',
          user_name: 'Аввакум',
          user_patronymic: 'Якунович',
          user_role: 'Менеджер',
          user_email: 'a.dorofeev@mpmarket.io',
          user_phone: '79095556378',
          user_telegram: 'MonteSuma',
          user_avatar: 'https://picsum.photos/204',
          user_backgroundphoto: 'https://picsum.photos/1300/324',
          status: 'Активен'
        },
        {
          id: 'ACAE72E6',
          user_surname: 'Королёва',
          user_name: 'Ирэна',
          user_patronymic: 'Германовна',
          user_role: 'Менеджер',
          user_email: 'i.koroleva@mpmarket.io',
          user_phone: '79035550178',
          user_telegram: 'YeargLitch',
          user_avatar: 'https://picsum.photos/205',
          user_backgroundphoto: 'https://picsum.photos/1300/325',
          status: 'Активен'
        },
        {
          id: 'C200CF87',
          user_surname: 'Кабанова',
          user_name: 'Фрида',
          user_patronymic: 'Васильевна',
          user_role: 'Логист',
          user_email: 'f.kabanova@mpmarket.io',
          user_phone: '79515554750',
          user_telegram: 'Regicide',
          user_avatar: 'https://picsum.photos/206',
          user_backgroundphoto: 'https://picsum.photos/1300/326',
          status: 'Активен'
        },
        {
          id: 'C8B2B65A',
          user_surname: 'Тимофеев',
          user_name: 'Тарас',
          user_patronymic: 'Леонидович',
          user_role: 'Менеджер',
          user_email: 't.timofeev@mpmarket.io',
          user_phone: '79155547189',
          user_telegram: 'Dragontry',
          user_avatar: 'https://picsum.photos/207',
          user_backgroundphoto: 'https://picsum.photos/1300/327',
          status: 'Активен'
        }
      ],
      cabinets: [
        {name: 'Деграунд WB', marketplace: 'Wildberries', api64: 'AD8P****', api256: 'DFGC****'},
        {name: 'Tekkon WB', marketplace: 'Wildberries', api64: 'DF89****', api256: 'YU78****'},
        {name: 'Deground Ozon', marketplace: 'Ozon', api64: 'GY67****', api256: 'TE19****'},
      ]
    };
  },
  validations() {
    return {
      full_name: {required}
    }
  },
  components: {
    Layout,
    // Swiper,
    // SwiperSlide,
  },
};
</script>

<template>
  <Layout>
    <div class="profile-foreground position-relative mx-n4 mt-n4">
      <div class="profile-wid-bg">
        <img
            src="@/assets/images/profile-bg.jpg"
            alt=""
            class="profile-wid-img"
        />
      </div>
    </div>
    <!--    <div class="pt-4 mb-4 mb-lg-3 pb-lg-4">-->
    <!--      <div class="row g-4">-->
    <!--        <div class="col-auto">-->
    <!--          <div class="avatar-lg">-->
    <!--            <img-->
    <!--                src="@/assets/images/users/avatar-1.jpg"-->
    <!--                alt="user-img"-->
    <!--                class="img-thumbnail rounded-circle"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end col&ndash;&gt;-->
    <!--        <div class="col">-->
    <!--          <div class="p-2">-->
    <!--            <h3 class="text-white mb-1">Anna Adame</h3>-->
    <!--            <p class="text-white-75">Owner & Founder</p>-->
    <!--            <div class="hstack text-white-50 gap-1">-->
    <!--              <div class="me-2">-->
    <!--                <i-->
    <!--                    class="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"-->
    <!--                ></i-->
    <!--                >California, United States-->
    <!--              </div>-->
    <!--              <div>-->
    <!--                <i-->
    <!--                    class="ri-building-line me-1 text-white-75 fs-16 align-middle"-->
    <!--                ></i-->
    <!--                >Themesbrand-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end col&ndash;&gt;-->
    <!--        <div class="col-12 col-lg-auto order-last order-lg-0">-->
    <!--          <div class="row text text-white-50 text-center">-->
    <!--            <div class="col-lg-6 col-4">-->
    <!--              <div class="p-2">-->
    <!--                <h4 class="text-white mb-1">24.3K</h4>-->
    <!--                <p class="fs-14 mb-0">{{ $t("t-followers") }}</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--            <div class="col-lg-6 col-4">-->
    <!--              <div class="p-2">-->
    <!--                <h4 class="text-white mb-1">1.3K</h4>-->
    <!--                <p class="fs-14 mb-0">{{ $t("t-following") }}</p>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;end col&ndash;&gt;-->
    <!--      </div>-->
    <!--      &lt;!&ndash;end row&ndash;&gt;-->
    <!--    </div>-->

    <div class="row pt-5">
      <div class="col-lg-12">
        <div>
          <div class="d-flex pt-5">
            <!-- Nav tabs -->
            <ul
                class="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                role="tablist"
            >
              <li class="nav-item">
                <a
                    class="nav-link fs-14 active"
                    data-bs-toggle="tab"
                    href="#overview-tab"
                    role="tab"
                >
                  <i class="ri-airplay-fill d-inline-block d-md-none"></i>
                  <span class="d-none d-md-inline-block">Профиль</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link fs-14"
                    data-bs-toggle="tab"
                    href="#activities"
                    role="tab"
                >
                  <i class="ri-list-unordered d-inline-block d-md-none"></i>
                  <span class="d-none d-md-inline-block">Реквизиты</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link fs-14"
                    data-bs-toggle="tab"
                    href="#projects"
                    role="tab"
                >
                  <i class="ri-price-tag-line d-inline-block d-md-none"></i>
                  <span class="d-none d-md-inline-block">Сотрудники</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                    class="nav-link fs-14"
                    data-bs-toggle="tab"
                    href="#documents"
                    role="tab"
                >
                  <i class="ri-folder-4-line d-inline-block d-md-none"></i>
                  <span class="d-none d-md-inline-block">Кабинеты</span>
                </a>
              </li>
            </ul>
            <div class="flex-shrink-0">
              <router-link to="/pages/profile-setting" class="btn btn-success">
                <i class="ri-edit-box-line align-bottom"></i>{{ $t("t-edit-profile") }}
              </router-link
              >
            </div>
          </div>
          <!-- Tab panes -->
          <div class="tab-content pt-5 text-muted">
            <div class="tab-pane active" id="overview-tab" role="tabpanel">
              <div class="row  pt-5">
                <div class="col-xxl-3">
                  <div class="card mt-n5">
                    <div class="card-body p-4">
                      <div class="text-center">
                        <div class="
                  profile-user
                  position-relative
                  d-inline-block
                  mx-auto
                  mb-4
                ">
                          <img src="@/assets/images/users/avatar-1.jpg" class="
                    rounded-circle
                    avatar-xl
                    img-thumbnail
                    user-profile-image
                  " alt="user-profile-image"/>
                          <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                            <input id="profile-img-file-input" type="file" class="profile-img-file-input"/>
                            <label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-camera-fill"></i>
                    </span>
                            </label>
                          </div>
                        </div>
                        <h5 class="fs-16 mb-1">Anna Adame</h5>
                        <p class="text-muted mb-0">Lead Designer / Developer</p>
                      </div>
                    </div>
                  </div>
                  <!--end card-->
                </div>
                <!--end col-->
                <div class="col-xxl-9">
                  <div class="card mt-xxl-n5">
                    <div class="card-header">
                      <ul class="
                nav nav-tabs-custom
                rounded
                card-header-tabs
                border-bottom-0
              " role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab">
                            <i class="fas fa-home"></i>
                            {{ $t("t-profile-settings") }}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab">
                            <i class="far fa-user"></i>
                            {{ $t("t-change-password") }}
                          </a>
                        </li>
                        <!--                        <li class="nav-item">-->
                        <!--                          <a class="nav-link" data-bs-toggle="tab" href="#experience" role="tab">-->
                        <!--                            <i class="far fa-envelope"></i>-->
                        <!--                            Experience-->
                        <!--                          </a>-->
                        <!--                        </li>-->
                        <li class="nav-item">
                          <a class="nav-link" data-bs-toggle="tab" href="#privacy" role="tab">
                            <i class="far fa-envelope"></i>
                            {{ $t("t-privacy-policy") }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-4">
                      <div class="tab-content">
                        <div class="tab-pane active" id="personalDetails" role="tabpanel">
                          <form action="">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="firstnameInput" class="form-label">
                                    {{ $t("t-first-name") }}
                                  </label>
                                  <input type="text" class="form-control" id="firstnameInput"
                                         placeholder="Enter your firstname"
                                         value="Dave"/>
                                </div>
                              </div>
                              <!--end col-->
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="lastnameInput" class="form-label"> {{ $t("t-last-name") }}</label>
                                  <input type="text" class="form-control" id="lastnameInput"
                                         placeholder="Enter your lastname"
                                         value="Adame"/>
                                </div>
                              </div>
                              <!--end col-->
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="phonenumberInput" class="form-label">{{ $t("t-phone-number") }}</label>
                                  <input type="text" class="form-control" id="phonenumberInput"
                                         placeholder="Enter your phone number" value="+(1) 987 6543"/>
                                </div>
                              </div>
                              <!--end col-->
                              <div class="col-lg-6">
                                <div class="mb-3">
                                  <label for="emailInput" class="form-label">{{ $t("t-email-address") }}</label>
                                  <input type="email" class="form-control" id="emailInput"
                                         placeholder="Enter your email"
                                         value="daveadame@velzon.com"/>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="mb-3">
                                  <label for="telegram" class="form-label">{{ $t("t-telegram") }}</label>
                                  <input type="text" class="form-control" id="telegram"
                                         placeholder="Enter your email"
                                         value="daveadame@velzon.com"/>
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3 form-check form-switch form-switch-right form-switch-md">
                                  <label for="input-group-custom-showcode" class="form-label text-muted">
                                    Модуль 1
                                  </label>
                                  <input class="form-check-input code-switcher" type="checkbox"
                                         id="input-group-custom-showcode"></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3 form-check form-switch form-switch-right form-switch-md">
                                  <label for="input-group-custom-showcode" class="form-label text-muted">
                                    Модуль 2
                                  </label>
                                  <input class="form-check-input code-switcher" type="checkbox"
                                         id="input-group-custom-showcode"></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3 form-check form-switch form-switch-right form-switch-md">
                                  <label for="input-group-custom-showcode" class="form-label text-muted">
                                    Модуль 3
                                  </label>
                                  <input class="form-check-input code-switcher" type="checkbox"
                                         id="input-group-custom-showcode"></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="mb-3 form-check form-switch form-switch-right form-switch-md">
                                  <label for="input-group-custom-showcode" class="form-label text-muted">
                                    Модуль 4
                                  </label>
                                  <input class="form-check-input code-switcher" type="checkbox"
                                         id="input-group-custom-showcode"></div>
                              </div>
                              <div class="col-lg-12">
                                <div class="hstack gap-2 justify-content-end">
                                  <button type="submit" class="btn btn-primary" @click="updatedata">
                                    {{ $t("t-updates") }}
                                  </button>
                                  <button type="button" class="btn btn-soft-success">
                                    {{ $t("t-cancel") }}
                                  </button>
                                </div>
                              </div>
                              <!--end col-->
                            </div>
                            <!--end row-->
                          </form>
                        </div>
                        <!--end tab-pane-->
                        <div class="tab-pane" id="changePassword" role="tabpanel">
                          <form action="javascript:void(0);">
                            <div class="row g-2">
                              <div class="col-lg-4">
                                <div>
                                  <label for="oldpasswordInput" class="form-label"> {{ $t("t-old-password") }}</label>
                                  <input type="password" class="form-control" id="oldpasswordInput"/>
                                </div>
                              </div>
                              <!--end col-->
                              <div class="col-lg-4">
                                <div>
                                  <label for="newpasswordInput" class="form-label"> {{ $t("t-new-password") }}</label>
                                  <input type="password" class="form-control" id="newpasswordInput"/>
                                </div>
                              </div>
                              <!--end col-->
                              <div class="col-lg-4">
                                <div>
                                  <label for="confirmpasswordInput" class="form-label"> {{ $t("t-confirm-password") }}</label>
                                  <input type="password" class="form-control" id="confirmpasswordInput"/>
                                </div>
                              </div>
                              <!--end col-->
                              <!--                              <div class="col-lg-12">-->
                              <!--                                <div class="mb-3">-->
                              <!--                                  <a href="javascript:void(0);" class="link-primary text-decoration-underline">Forgot-->
                              <!--                                    Password-->
                              <!--                                    ?</a>-->
                              <!--                                </div>-->
                              <!--                              </div>-->
                              <!--end col-->
                              <div class="col-lg-12">
                                <div class="text-end">
                                  <button type="submit" class="btn btn-success" @click="changepass">
                                    {{ $t("t-change-password") }}
                                  </button>
                                </div>
                              </div>
                              <!--end col-->
                            </div>
                            <!--end row-->
                          </form>
                          <!--                          <div class="mt-4 mb-3 border-bottom pb-2">-->
                          <!--                            <div class="float-end">-->
                          <!--                              <a href="javascript:void(0);" class="link-primary">All Logout</a>-->
                          <!--                            </div>-->
                          <!--                            <h5 class="card-title">Login History</h5>-->
                          <!--                          </div>-->
                          <!--                          <div class="d-flex align-items-center mb-3">-->
                          <!--                            <div class="flex-shrink-0 avatar-sm">-->
                          <!--                              <div class="avatar-title bg-light text-primary rounded-3 fs-18">-->
                          <!--                                <i class="ri-smartphone-line"></i>-->
                          <!--                              </div>-->
                          <!--                            </div>-->
                          <!--                            <div class="flex-grow-1 ms-3">-->
                          <!--                              <h6>iPhone 12 Pro</h6>-->
                          <!--                              <p class="text-muted mb-0">-->
                          <!--                                Los Angeles, United States - March 16 at 2:47PM-->
                          <!--                              </p>-->
                          <!--                            </div>-->
                          <!--                            <div>-->
                          <!--                              <a href="javascript:void(0);">Logout</a>-->
                          <!--                            </div>-->
                          <!--                          </div>-->
                          <!--                          <div class="d-flex align-items-center mb-3">-->
                          <!--                            <div class="flex-shrink-0 avatar-sm">-->
                          <!--                              <div class="avatar-title bg-light text-primary rounded-3 fs-18">-->
                          <!--                                <i class="ri-tablet-line"></i>-->
                          <!--                              </div>-->
                          <!--                            </div>-->
                          <!--                            <div class="flex-grow-1 ms-3">-->
                          <!--                              <h6>Apple iPad Pro</h6>-->
                          <!--                              <p class="text-muted mb-0">-->
                          <!--                                Washington, United States - November 06 at 10:43AM-->
                          <!--                              </p>-->
                          <!--                            </div>-->
                          <!--                            <div>-->
                          <!--                              <a href="javascript:void(0);">Logout</a>-->
                          <!--                            </div>-->
                          <!--                          </div>-->
                          <!--                          <div class="d-flex align-items-center mb-3">-->
                          <!--                            <div class="flex-shrink-0 avatar-sm">-->
                          <!--                              <div class="avatar-title bg-light text-primary rounded-3 fs-18">-->
                          <!--                                <i class="ri-smartphone-line"></i>-->
                          <!--                              </div>-->
                          <!--                            </div>-->
                          <!--                            <div class="flex-grow-1 ms-3">-->
                          <!--                              <h6>Galaxy S21 Ultra 5G</h6>-->
                          <!--                              <p class="text-muted mb-0">-->
                          <!--                                Conneticut, United States - June 12 at 3:24PM-->
                          <!--                              </p>-->
                          <!--                            </div>-->
                          <!--                            <div>-->
                          <!--                              <a href="javascript:void(0);">Logout</a>-->
                          <!--                            </div>-->
                          <!--                          </div>-->
                          <!--                          <div class="d-flex align-items-center">-->
                          <!--                            <div class="flex-shrink-0 avatar-sm">-->
                          <!--                              <div class="avatar-title bg-light text-primary rounded-3 fs-18">-->
                          <!--                                <i class="ri-macbook-line"></i>-->
                          <!--                              </div>-->
                          <!--                            </div>-->
                          <!--                            <div class="flex-grow-1 ms-3">-->
                          <!--                              <h6>Dell Inspiron 14</h6>-->
                          <!--                              <p class="text-muted mb-0">-->
                          <!--                                Phoenix, United States - July 26 at 8:10AM-->
                          <!--                              </p>-->
                          <!--                            </div>-->
                          <!--                            <div>-->
                          <!--                              <a href="javascript:void(0);">Logout</a>-->
                          <!--                            </div>-->
                          <!--                          </div>-->
                        </div>
                        <!--end tab-pane-->
                        <!--                        <div class="tab-pane" id="experience" role="tabpanel">-->
                        <!--                          <form>-->
                        <!--                            <div id="newlink">-->
                        <!--                              <div id="1">-->
                        <!--                                <div class="row">-->
                        <!--                                  <div class="col-lg-12">-->
                        <!--                                    <div class="mb-3">-->
                        <!--                                      <label for="jobTitle" class="form-label">Job Title</label>-->
                        <!--                                      <input type="text" class="form-control" id="jobTitle" placeholder="Job title"-->
                        <!--                                             value="Должность"/>-->
                        <!--                                    </div>-->
                        <!--                                  </div>-->
                        <!--                                  &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                  <div class="col-lg-6">-->
                        <!--                                    <div class="mb-3">-->
                        <!--                                      <label for="companyName" class="form-label">Company Name</label>-->
                        <!--                                      <input type="text" class="form-control" id="companyName"-->
                        <!--                                             placeholder="Company name"-->
                        <!--                                             value="Themesbrand"/>-->
                        <!--                                    </div>-->
                        <!--                                  </div>-->
                        <!--                                  &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                  <div class="col-lg-6">-->
                        <!--                                    <div class="mb-3">-->
                        <!--                                      <label for="experienceYear" class="form-label">Experience Years</label>-->
                        <!--                                      <div class="row">-->
                        <!--                                        <div class="col-lg-5">-->
                        <!--                                          <Multiselect class="form-control" v-model="value2" :close-on-select="true"-->
                        <!--                                                       :searchable="true" :create-option="true" :options="[-->
                        <!--                            { value: '', label: 'Select years' },-->
                        <!--                            { value: 'Choice 1', label: '2001' },-->
                        <!--                            { value: 'Choice 2', label: '2002' },-->
                        <!--                            { value: 'Choice 3', label: '2003' },-->
                        <!--                            { value: 'Choice 4', label: '2004' },-->
                        <!--                            { value: 'Choice 5', label: '2005' },-->
                        <!--                            { value: 'Choice 6', label: '2006' },-->
                        <!--                            { value: 'Choice 7', label: '2007' },-->
                        <!--                            { value: 'Choice 8', label: '2008' },-->
                        <!--                            { value: 'Choice 9', label: '2009' },-->
                        <!--                            { value: 'Choice 10', label: '2010' },-->
                        <!--                            { value: 'Choice 11', label: '2011' },-->
                        <!--                            { value: 'Choice 12', label: '2012' },-->
                        <!--                            { value: 'Choice 13', label: '2013' },-->
                        <!--                            { value: 'Choice 14', label: '2014' },-->
                        <!--                            { value: 'Choice 15', label: '2015' },-->
                        <!--                            { value: 'Choice 16', label: '2016' },-->
                        <!--                            { value: 'Choice 17', label: '2017' },-->
                        <!--                            { value: 'Choice 18', label: '2018' },-->
                        <!--                            { value: 'Choice 19', label: '2019' },-->
                        <!--                            { value: 'Choice 20', label: '2020' },-->
                        <!--                            { value: 'Choice 21', label: '2021' },-->
                        <!--                            { value: 'Choice 22', label: '2022' }-->


                        <!--                          ]"/>-->
                        <!--                                        </div>-->
                        <!--                                        &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                        <div class="col-auto align-self-center">to</div>-->
                        <!--                                        &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                        <div class="col-lg-5">-->


                        <!--                                          <Multiselect class="form-control" v-model="value1" :close-on-select="true"-->
                        <!--                                                       :searchable="true" :create-option="true" :options="[-->
                        <!--                            { value: '', label: 'Select years' },-->
                        <!--                            { value: 'Choice 1', label: '2001' },-->
                        <!--                            { value: 'Choice 2', label: '2002' },-->
                        <!--                            { value: 'Choice 3', label: '2003' },-->
                        <!--                            { value: 'Choice 4', label: '2004' },-->
                        <!--                            { value: 'Choice 5', label: '2005' },-->
                        <!--                            { value: 'Choice 6', label: '2006' },-->
                        <!--                            { value: 'Choice 7', label: '2007' },-->
                        <!--                            { value: 'Choice 8', label: '2008' },-->
                        <!--                            { value: 'Choice 9', label: '2009' },-->
                        <!--                            { value: 'Choice 10', label: '2010' },-->
                        <!--                            { value: 'Choice 11', label: '2011' },-->
                        <!--                            { value: 'Choice 12', label: '2012' },-->
                        <!--                            { value: 'Choice 13', label: '2013' },-->
                        <!--                            { value: 'Choice 14', label: '2014' },-->
                        <!--                            { value: 'Choice 15', label: '2015' },-->
                        <!--                            { value: 'Choice 16', label: '2016' },-->
                        <!--                            { value: 'Choice 17', label: '2017' },-->
                        <!--                            { value: 'Choice 18', label: '2018' },-->
                        <!--                            { value: 'Choice 19', label: '2019' },-->
                        <!--                            { value: 'Choice 20', label: '2020' },-->
                        <!--                            { value: 'Choice 21', label: '2021' },-->
                        <!--                            { value: 'Choice 22', label: '2022' }-->


                        <!--                          ]"/>-->
                        <!--                                        </div>-->
                        <!--                                        &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                      </div>-->
                        <!--                                      &lt;!&ndash;end row&ndash;&gt;-->
                        <!--                                    </div>-->
                        <!--                                  </div>-->
                        <!--                                  &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                  <div class="col-lg-12">-->
                        <!--                                    <div class="mb-3">-->
                        <!--                                      <label for="jobDescription" class="form-label">Job Description</label>-->
                        <!--                                      <textarea class="form-control" id="jobDescription" rows="3"-->
                        <!--                                                placeholder="Enter description">-->
                        <!--You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>-->
                        <!--                                    </div>-->
                        <!--                                  </div>-->
                        <!--                                  &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                                  <div class="hstack gap-2 justify-content-end">-->
                        <!--                                    <a class="btn btn-success" href="javascript:void(0);">Delete</a>-->
                        <!--                                  </div>-->
                        <!--                                </div>-->
                        <!--                                &lt;!&ndash;end row&ndash;&gt;-->
                        <!--                              </div>-->
                        <!--                            </div>-->
                        <!--                            <div id="newForm" style="display: none"></div>-->
                        <!--                            <div class="col-lg-12">-->
                        <!--                              <div class="hstack gap-2">-->
                        <!--                                <button type="button" class="btn btn-success">-->
                        <!--                                  Update-->
                        <!--                                </button>-->
                        <!--                                <a href="javascript:void(0);" class="btn btn-primary">Add New</a>-->
                        <!--                              </div>-->
                        <!--                            </div>-->
                        <!--                            &lt;!&ndash;end col&ndash;&gt;-->
                        <!--                          </form>-->
                        <!--                        </div>-->
                        <!--end tab-pane-->
                        <div class="tab-pane" id="privacy" role="tabpanel">
                          <div class="mb-4 pb-2">
                            <h5 class="card-title text-decoration-underline mb-3">
                              Security:
                            </h5>
                            <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                              <div class="flex-grow-1">
                                <h6 class="fs-14 mb-1">Two-factor Authentication</h6>
                                <p class="text-muted">
                                  Two-factor authentication is an enhanced security
                                  meansur. Once enabled, you'll be required to give two
                                  types of identification when you log into Google
                                  Authentication and SMS are Supported.
                                </p>
                              </div>
                              <div class="flex-shrink-0 ms-sm-3">
                                <a href="javascript:void(0);" class="btn btn-sm btn-primary">Enable Two-facor
                                  Authentication</a>
                              </div>
                            </div>
                            <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                              <div class="flex-grow-1">
                                <h6 class="fs-14 mb-1">Secondary Verification</h6>
                                <p class="text-muted">
                                  The first factor is a password and the second commonly
                                  includes a text with a code sent to your smartphone, or
                                  biometrics using your fingerprint, face, or retina.
                                </p>
                              </div>
                              <div class="flex-shrink-0 ms-sm-3">
                                <a href="javascript:void(0);" class="btn btn-sm btn-primary">Set up secondary method</a>
                              </div>
                            </div>
                            <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                              <div class="flex-grow-1">
                                <h6 class="fs-14 mb-1">Backup Codes</h6>
                                <p class="text-muted mb-sm-0">
                                  A backup code is automatically generated for you when
                                  you turn on two-factor authentication through your iOS
                                  or Android Twitter app. You can also generate a backup
                                  code on twitter.com.
                                </p>
                              </div>
                              <div class="flex-shrink-0 ms-sm-3">
                                <a href="javascript:void(0);" class="btn btn-sm btn-primary">Generate backup codes</a>
                              </div>
                            </div>
                          </div>
                          <div class="mb-3">
                            <h5 class="card-title text-decoration-underline mb-3">
                              Application Notifications:
                            </h5>
                            <ul class="list-unstyled mb-0">
                              <li class="d-flex">
                                <div class="flex-grow-1">
                                  <label for="directMessage" class="form-check-label fs-14">Direct messages</label>
                                  <p class="text-muted">
                                    Messages from people you follow
                                  </p>
                                </div>
                                <div class="flex-shrink-0">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="directMessage"
                                           checked/>
                                  </div>
                                </div>
                              </li>
                              <li class="d-flex mt-2">
                                <div class="flex-grow-1">
                                  <label class="form-check-label fs-14" for="desktopNotification">
                                    Show desktop notifications
                                  </label>
                                  <p class="text-muted">
                                    Choose the option you want as your default setting.
                                    Block a site: Next to "Not allowed to send
                                    notifications," click Add.
                                  </p>
                                </div>
                                <div class="flex-shrink-0">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                           id="desktopNotification"
                                           checked/>
                                  </div>
                                </div>
                              </li>
                              <li class="d-flex mt-2">
                                <div class="flex-grow-1">
                                  <label class="form-check-label fs-14" for="emailNotification">
                                    Show email notifications
                                  </label>
                                  <p class="text-muted">
                                    Under Settings, choose Notifications. Under Select an
                                    account, choose the account to enable notifications
                                    for.
                                  </p>
                                </div>
                                <div class="flex-shrink-0">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                           id="emailNotification"/>
                                  </div>
                                </div>
                              </li>
                              <li class="d-flex mt-2">
                                <div class="flex-grow-1">
                                  <label class="form-check-label fs-14" for="chatNotification">
                                    Show chat notifications
                                  </label>
                                  <p class="text-muted">
                                    To prevent duplicate mobile notifications from the
                                    Gmail and Chat apps, in settings, turn off Chat
                                    notifications.
                                  </p>
                                </div>
                                <div class="flex-shrink-0">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                           id="chatNotification"/>
                                  </div>
                                </div>
                              </li>
                              <li class="d-flex mt-2">
                                <div class="flex-grow-1">
                                  <label class="form-check-label fs-14" for="purchaesNotification">
                                    Show purchase notifications
                                  </label>
                                  <p class="text-muted">
                                    Get real-time purchase alerts to protect yourself from
                                    fraudulent charges.
                                  </p>
                                </div>
                                <div class="flex-shrink-0">
                                  <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                           id="purchaesNotification"/>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 class="card-title text-decoration-underline mb-3">
                              Delete This Account:
                            </h5>
                            <p class="text-muted">
                              Go to the Data & Privacy section of your profile Account.
                              Scroll to "Your data & privacy options." Delete your Profile
                              Account. Follow the instructions to delete your account :
                            </p>
                            <div>
                              <input type="password" class="form-control" id="passwordInput"
                                     placeholder="Enter your password"
                                     value="make@321654987" style="max-width: 265px"/>
                            </div>
                            <div class="hstack gap-2 mt-3">
                              <a href="javascript:void(0);" class="btn btn-soft-danger">Close & Delete This Account</a>
                              <a href="javascript:void(0);" class="btn btn-light">Cancel</a>
                            </div>
                          </div>
                        </div>
                        <!--end tab-pane-->
                      </div>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--              <div class="row">-->
              <!--                <div class="col-xxl-3">-->
              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-5">{{ $t("t-complete-profile") }}</h5>-->
              <!--                      <div-->
              <!--                          class="progress animated-progess custom-progress progress-label"-->
              <!--                      >-->
              <!--                        <div-->
              <!--                            class="progress-bar bg-danger"-->
              <!--                            role="progressbar"-->
              <!--                            style="width: 30%"-->
              <!--                            aria-valuenow="30"-->
              <!--                            aria-valuemin="0"-->
              <!--                            aria-valuemax="100"-->
              <!--                        >-->
              <!--                          <div class="label">30%</div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </div>-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-3">{{ $t("t-info") }}</h5>-->
              <!--                      <div class="table-responsive">-->
              <!--                        <table class="table table-borderless mb-0">-->
              <!--                          <tbody>-->
              <!--                          <tr>-->
              <!--                            <th class="ps-0" scope="row">{{ $t("t-name") }} :</th>-->
              <!--                            <td class="text-muted">Anna Adame</td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <th class="ps-0" scope="row">{{ $t("t-phone") }} :</th>-->
              <!--                            <td class="text-muted">+(1) 987 6543</td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <th class="ps-0" scope="row">E-mail :</th>-->
              <!--                            <td class="text-muted">daveadame@velzon.com</td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <th class="ps-0" scope="row">{{ $t("t-location") }} :</th>-->
              <!--                            <td class="text-muted">-->
              <!--                              California, United States-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <th class="ps-0" scope="row">{{ $t("t-date-joining") }} :</th>-->
              <!--                            <td class="text-muted">24 Nov 2021</td>-->
              <!--                          </tr>-->
              <!--                          </tbody>-->
              <!--                        </table>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end card &ndash;&gt;-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-4">{{ $t("t-portfolio") }}</h5>-->
              <!--                      <div class="d-flex flex-wrap gap-2">-->
              <!--                        <div>-->
              <!--                          <a-->
              <!--                              href="javascript:void(0);"-->
              <!--                              class="avatar-xs d-block"-->
              <!--                          >-->
              <!--                            <span-->
              <!--                                class="avatar-title rounded-circle fs-16 bg-dark text-light"-->
              <!--                            >-->
              <!--                              <i class="ri-github-fill"></i>-->
              <!--                            </span>-->
              <!--                          </a>-->
              <!--                        </div>-->
              <!--                        <div>-->
              <!--                          <a href="javascript:void(0);" class="avatar-xs d-block">-->
              <!--                            <span class="avatar-title rounded-circle fs-16 bg-primary">-->
              <!--                              <i class="ri-global-fill"></i>-->
              <!--                            </span>-->
              <!--                          </a>-->
              <!--                        </div>-->
              <!--                        <div>-->
              <!--                          <a href="javascript:void(0);" class="avatar-xs d-block">-->
              <!--                            <span class="avatar-title rounded-circle fs-16 bg-success">-->
              <!--                              <i class="ri-dribbble-fill"></i>-->
              <!--                            </span>-->
              <!--                          </a>-->
              <!--                        </div>-->
              <!--                        <div>-->
              <!--                          <a-->
              <!--                              href="javascript:void(0);"-->
              <!--                              class="avatar-xs d-block"-->
              <!--                          >-->
              <!--                            <span-->
              <!--                                class="avatar-title rounded-circle fs-16 bg-danger"-->
              <!--                            >-->
              <!--                              <i class="ri-pinterest-fill"></i>-->
              <!--                            </span>-->
              <!--                          </a>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end card &ndash;&gt;-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-4">{{ $t("t-skills") }}</h5>-->
              <!--                      <div class="d-flex flex-wrap gap-2 fs-15">-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >Photoshop</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >illustrator</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >HTML</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >CSS</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >Javascript</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >Php</a-->
              <!--                        >-->
              <!--                        <a-->
              <!--                            href="javascript:void(0);"-->
              <!--                            class="badge badge-soft-primary"-->
              <!--                        >Python</a-->
              <!--                        >-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end card &ndash;&gt;-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <div class="d-flex align-items-center mb-4">-->
              <!--                        <div class="flex-grow-1">-->
              <!--                          <h5 class="card-title mb-0">{{ $t("t-suggestions") }}</h5>-->
              <!--                        </div>-->
              <!--                        <div class="flex-shrink-0">-->
              <!--                          <div class="dropdown">-->
              <!--                            <a-->
              <!--                                href="#"-->
              <!--                                role="button"-->
              <!--                                id="dropdownMenuLink2"-->
              <!--                                data-bs-toggle="dropdown"-->
              <!--                                aria-expanded="false"-->
              <!--                            >-->
              <!--                              <i class="ri-more-2-fill fs-14"></i>-->
              <!--                            </a>-->

              <!--                            <ul-->
              <!--                                class="dropdown-menu dropdown-menu-end"-->
              <!--                                aria-labelledby="dropdownMenuLink2"-->
              <!--                            >-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.view") }}</a>-->
              <!--                              </li>-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.edit") }}</a>-->
              <!--                              </li>-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.delete") }}</a>-->
              <!--                              </li>-->
              <!--                            </ul>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                      <div>-->
              <!--                        <div class="d-flex align-items-center py-3">-->
              <!--                          <div class="avatar-xs flex-shrink-0 me-3">-->
              <!--                            <img-->
              <!--                                src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                alt=""-->
              <!--                                class="img-fluid rounded-circle"-->
              <!--                            />-->
              <!--                          </div>-->
              <!--                          <div class="flex-grow-1">-->
              <!--                            <div>-->
              <!--                              <h5 class="fs-14 mb-1">Esther James</h5>-->
              <!--                              <p class="fs-13 text-muted mb-0">-->
              <!--                                Frontend Developer-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="flex-shrink-0 ms-2">-->
              <!--                            <button-->
              <!--                                type="button"-->
              <!--                                class="btn btn-sm btn-outline-success"-->
              <!--                            >-->
              <!--                              <i class="ri-user-add-line align-middle"></i>-->
              <!--                            </button>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        <div class="d-flex align-items-center py-3">-->
              <!--                          <div class="avatar-xs flex-shrink-0 me-3">-->
              <!--                            <img-->
              <!--                                src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                alt=""-->
              <!--                                class="img-fluid rounded-circle"-->
              <!--                            />-->
              <!--                          </div>-->
              <!--                          <div class="flex-grow-1">-->
              <!--                            <div>-->
              <!--                              <h5 class="fs-14 mb-1">Jacqueline Steve</h5>-->
              <!--                              <p class="fs-13 text-muted mb-0">-->
              <!--                                UI/UX Designer-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="flex-shrink-0 ms-2">-->
              <!--                            <button-->
              <!--                                type="button"-->
              <!--                                class="btn btn-sm btn-outline-success"-->
              <!--                            >-->
              <!--                              <i class="ri-user-add-line align-middle"></i>-->
              <!--                            </button>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        <div class="d-flex align-items-center py-3">-->
              <!--                          <div class="avatar-xs flex-shrink-0 me-3">-->
              <!--                            <img-->
              <!--                                src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                alt=""-->
              <!--                                class="img-fluid rounded-circle"-->
              <!--                            />-->
              <!--                          </div>-->
              <!--                          <div class="flex-grow-1">-->
              <!--                            <div>-->
              <!--                              <h5 class="fs-14 mb-1">George Whalen</h5>-->
              <!--                              <p class="fs-13 text-muted mb-0">-->
              <!--                                Backend Developer-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="flex-shrink-0 ms-2">-->
              <!--                            <button-->
              <!--                                type="button"-->
              <!--                                class="btn btn-sm btn-outline-success"-->
              <!--                            >-->
              <!--                              <i class="ri-user-add-line align-middle"></i>-->
              <!--                            </button>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash;end card&ndash;&gt;-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <div class="d-flex align-items-center mb-4">-->
              <!--                        <div class="flex-grow-1">-->
              <!--                          <h5 class="card-title mb-0">{{ $t("t-popular-posts") }}</h5>-->
              <!--                        </div>-->
              <!--                        <div class="flex-shrink-0">-->
              <!--                          <div class="dropdown">-->
              <!--                            <a-->
              <!--                                href="#"-->
              <!--                                role="button"-->
              <!--                                id="dropdownMenuLink1"-->
              <!--                                data-bs-toggle="dropdown"-->
              <!--                                aria-expanded="false"-->
              <!--                            >-->
              <!--                              <i class="ri-more-2-fill fs-14"></i>-->
              <!--                            </a>-->

              <!--                            <ul-->
              <!--                                class="dropdown-menu dropdown-menu-end"-->
              <!--                                aria-labelledby="dropdownMenuLink1"-->
              <!--                            >-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.view") }}</a>-->
              <!--                              </li>-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.edit") }}</a>-->
              <!--                              </li>-->
              <!--                              <li>-->
              <!--                                <a class="dropdown-item" href="#">{{ $t("t-action.delete") }}</a>-->
              <!--                              </li>-->
              <!--                            </ul>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                      <div class="d-flex mb-4">-->
              <!--                        <div class="flex-shrink-0">-->
              <!--                          <img src="@/assets/images/small/img-4.jpg" alt="" height="50" class="rounded"/>-->
              <!--                        </div>-->
              <!--                        <div class="flex-grow-1 ms-3 overflow-hidden">-->
              <!--                          <a href="javascript:void(0);"-->
              <!--                          ><h6 class="text-truncate fs-14">-->
              <!--                            Design your apps in your own way-->
              <!--                          </h6></a-->
              <!--                          >-->
              <!--                          <p class="text-muted mb-0">15 Dec 2021</p>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                      <div class="d-flex mb-4">-->
              <!--                        <div class="flex-shrink-0">-->
              <!--                          <img-->
              <!--                              src="@/assets/images/small/img-5.jpg"-->
              <!--                              alt=""-->
              <!--                              height="50"-->
              <!--                              class="rounded"-->
              <!--                          />-->
              <!--                        </div>-->
              <!--                        <div class="flex-grow-1 ms-3 overflow-hidden">-->
              <!--                          <a href="javascript:void(0);"-->
              <!--                          ><h6 class="text-truncate fs-14">-->
              <!--                            Smartest Applications for Business-->
              <!--                          </h6></a-->
              <!--                          >-->
              <!--                          <p class="text-muted mb-0">28 Nov 2021</p>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                      <div class="d-flex">-->
              <!--                        <div class="flex-shrink-0">-->
              <!--                          <img-->
              <!--                              src="@/assets/images/small/img-6.jpg"-->
              <!--                              alt=""-->
              <!--                              height="50"-->
              <!--                              class="rounded"-->
              <!--                          />-->
              <!--                        </div>-->
              <!--                        <div class="flex-grow-1 ms-3 overflow-hidden">-->
              <!--                          <a href="javascript:void(0);"-->
              <!--                          ><h6 class="text-truncate fs-14">-->
              <!--                            How to get creative in your work-->
              <!--                          </h6></a-->
              <!--                          >-->
              <!--                          <p class="text-muted mb-0">21 Nov 2021</p>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end card-body&ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash;end card&ndash;&gt;-->
              <!--                </div>-->
              <!--                &lt;!&ndash;end col&ndash;&gt;-->
              <!--                <div class="col-xxl-9">-->
              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-3">{{ $t("t-about") }}</h5>-->
              <!--                      <p>-->
              <!--                        Hi I'm Anna Adame, It will be as simple as Occidental;-->
              <!--                        in fact, it will be Occidental. To an English person, it-->
              <!--                        will seem like simplified English, as a skeptical-->
              <!--                        Cambridge friend of mine told me what Occidental is-->
              <!--                        European languages are members of the same family.-->
              <!--                      </p>-->
              <!--                      <p>-->
              <!--                        You always want to make sure that your fonts work well-->
              <!--                        together and try to limit the number of fonts you use to-->
              <!--                        three or less. Experiment and play around with the fonts-->
              <!--                        that you already have in the software you’re working-->
              <!--                        with reputable font websites. This may be the most-->
              <!--                        commonly encountered tip I received from the designers I-->
              <!--                        spoke with. They highly encourage that you use different-->
              <!--                        fonts in one design, but do not over-exaggerate and go-->
              <!--                        overboard.-->
              <!--                      </p>-->
              <!--                      <div class="row">-->
              <!--                        <div class="col-6 col-md-4">-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div-->
              <!--                                class="flex-shrink-0 avatar-xs align-self-center me-3"-->
              <!--                            >-->
              <!--                              <div-->
              <!--                                  class="avatar-title bg-light rounded-circle fs-16 text-primary"-->
              <!--                              >-->
              <!--                                <i class="ri-user-2-fill"></i>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                            <div class="flex-grow-1 overflow-hidden">-->
              <!--                              <p class="mb-1">Designation :</p>-->
              <!--                              <h6 class="text-truncate mb-0">-->
              <!--                                Lead Designer / Developer-->
              <!--                              </h6>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash;end col&ndash;&gt;-->
              <!--                        <div class="col-6 col-md-4">-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div-->
              <!--                                class="flex-shrink-0 avatar-xs align-self-center me-3"-->
              <!--                            >-->
              <!--                              <div-->
              <!--                                  class="avatar-title bg-light rounded-circle fs-16 text-primary"-->
              <!--                              >-->
              <!--                                <i class="ri-global-line"></i>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                            <div class="flex-grow-1 overflow-hidden">-->
              <!--                              <p class="mb-1">Website :</p>-->
              <!--                              <a href="#" class="fw-semibold">app.mpmarket.io</a>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash;end col&ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash;end row&ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end card-body&ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end card &ndash;&gt;-->

              <!--                  <div class="row">-->
              <!--                    <div class="col-lg-12">-->
              <!--                      <div class="card">-->
              <!--                        <div class="card-header align-items-center d-flex">-->
              <!--                          <h4 class="card-title mb-0 me-2">{{ $t("t-recent-activity") }}</h4>-->
              <!--                          <div class="flex-shrink-0 ms-auto">-->
              <!--                            <ul-->
              <!--                                class="nav justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"-->
              <!--                                role="tablist"-->
              <!--                            >-->
              <!--                              <li class="nav-item">-->
              <!--                                <a class="nav-link active" data-bs-toggle="tab" href="#today" role="tab">-->
              <!--                                  {{ $t("t-today") }}-->
              <!--                                </a>-->
              <!--                              </li>-->
              <!--                              <li class="nav-item">-->
              <!--                                <a class="nav-link" data-bs-toggle="tab" href="#weekly" role="tab">-->
              <!--                                  {{ $t("t-weekly") }}-->
              <!--                                </a>-->
              <!--                              </li>-->
              <!--                              <li class="nav-item">-->
              <!--                                <a class="nav-link" data-bs-toggle="tab" href="#monthly" role="tab">-->
              <!--                                  {{ $t("t-monthly") }}-->
              <!--                                </a>-->
              <!--                              </li>-->
              <!--                            </ul>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        <div class="card-body">-->
              <!--                          <div class="tab-content text-muted">-->
              <!--                            <div-->
              <!--                                class="tab-pane active"-->
              <!--                                id="today"-->
              <!--                                role="tabpanel"-->
              <!--                            >-->
              <!--                              <div class="profile-timeline">-->
              <!--                                <div-->
              <!--                                    class="accordion accordion-flush"-->
              <!--                                    id="todayExample"-->
              <!--                                >-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="headingOne"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapseOne"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-2.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Jacqueline Steve-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >We has changed 2 attributes on-->
              <!--                                              05:16PM</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapseOne"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="headingOne"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        In an awareness campaign, it is vital-->
              <!--                                        for people to begin put 2 and 2 together-->
              <!--                                        and begin to recognize your cause. Too-->
              <!--                                        much or too little spacing, as in the-->
              <!--                                        example below, can make things-->
              <!--                                        unpleasant for the reader. The goal is-->
              <!--                                        to make your text as comfortable to read-->
              <!--                                        as possible. A wonderful serenity has-->
              <!--                                        taken possession of my entire soul, like-->
              <!--                                        these sweet mornings of spring which I-->
              <!--                                        enjoy with my whole heart.-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="headingTwo"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapseTwo"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0 avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title bg-light text-success rounded-circle"-->
              <!--                                            >-->
              <!--                                              M-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Megan Elmore-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Adding a new event with-->
              <!--                                              attachments - 04:45PM</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapseTwo"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="headingTwo"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        <div class="row g-2">-->
              <!--                                          <div class="col-auto">-->
              <!--                                            <div-->
              <!--                                                class="d-flex border border-dashed p-2 rounded position-relative"-->
              <!--                                            >-->
              <!--                                              <div class="flex-shrink-0">-->
              <!--                                                <i-->
              <!--                                                    class="ri-image-2-line fs-17 text-danger"-->
              <!--                                                ></i>-->
              <!--                                              </div>-->
              <!--                                              <div class="flex-grow-1 ms-2">-->
              <!--                                                <h6>-->
              <!--                                                  <a-->
              <!--                                                      href="javascript:void(0);"-->
              <!--                                                      class="stretched-link"-->
              <!--                                                  >Business Template - UI/UX-->
              <!--                                                    design</a-->
              <!--                                                  >-->
              <!--                                                </h6>-->
              <!--                                                <small>685 KB</small>-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="col-auto">-->
              <!--                                            <div-->
              <!--                                                class="d-flex border border-dashed p-2 rounded position-relative"-->
              <!--                                            >-->
              <!--                                              <div class="flex-shrink-0">-->
              <!--                                                <i-->
              <!--                                                    class="ri-file-zip-line fs-17 text-info"-->
              <!--                                                ></i>-->
              <!--                                              </div>-->
              <!--                                              <div class="flex-grow-1 ms-2">-->
              <!--                                                <h6>-->
              <!--                                                  <a-->
              <!--                                                      href="javascript:void(0);"-->
              <!--                                                      class="stretched-link"-->
              <!--                                                  >Bank Management System - -->
              <!--                                                    PSD</a-->
              <!--                                                  >-->
              <!--                                                </h6>-->
              <!--                                                <small>8.78 MB</small>-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="headingThree"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapsethree"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              New ticket received-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted mb-2"-->
              <!--                                            >User-->
              <!--                                              <span class="text-secondary"-->
              <!--                                              >Erica245</span-->
              <!--                                              >-->
              <!--                                              submitted a ticket - -->
              <!--                                              02:33PM</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="headingFour"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapseFour"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0 avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title bg-light text-muted rounded-circle"-->
              <!--                                            >-->
              <!--                                              <i class="ri-user-3-fill"></i>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Nancy Martino-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Commented on 12:57PM</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapseFour"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="headingFour"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div-->
              <!--                                          class="accordion-body ms-2 ps-5 fst-italic"-->
              <!--                                      >-->
              <!--                                        " A wonderful serenity has taken-->
              <!--                                        possession of my entire soul, like these-->
              <!--                                        sweet mornings of spring which I enjoy-->
              <!--                                        with my whole heart. Each design is a-->
              <!--                                        new, unique piece of art birthed into-->
              <!--                                        this world, and while you have the-->
              <!--                                        opportunity to be creative and make your-->
              <!--                                        own style choices. "-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="headingFive"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapseFive"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Lewis Arnold-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Create new project buildng-->
              <!--                                              product - 10:05AM</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapseFive"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="headingFive"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        <p class="text-muted mb-2">-->
              <!--                                          Every team project can have a velzon.-->
              <!--                                          Use the velzon to share information-->
              <!--                                          with your team to understand and-->
              <!--                                          contribute to your project.-->
              <!--                                        </p>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="Christi"-->
              <!--                                          >-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="rounded-circle avatar-xs"-->
              <!--                                            />-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="Frank Hook"-->
              <!--                                          >-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="rounded-circle avatar-xs"-->
              <!--                                            />-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title=" Ruby"-->
              <!--                                          >-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                              >-->
              <!--                                                R-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="more"-->
              <!--                                          >-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle"-->
              <!--                                              >-->
              <!--                                                2+-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </a>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash;end accordion&ndash;&gt;-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                            <div class="tab-pane" id="weekly" role="tabpanel">-->
              <!--                              <div class="profile-timeline">-->
              <!--                                <div-->
              <!--                                    class="accordion accordion-flush"-->
              <!--                                    id="weeklyExample"-->
              <!--                                >-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div class="accordion-header" id="heading6">-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse6"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Joseph Parker-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >New people joined with our-->
              <!--                                              company - Yesterday</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse6"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading6"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        It makes a statement, it’s impressive-->
              <!--                                        graphic design. Increase or decrease the-->
              <!--                                        letter spacing depending on the-->
              <!--                                        situation and try, try again until it-->
              <!--                                        looks right, and each letter has the-->
              <!--                                        perfect spot of its own.-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div class="accordion-header" id="heading7">-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse7"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title rounded-circle bg-light text-danger"-->
              <!--                                            >-->
              <!--                                              <i-->
              <!--                                                  class="ri-shopping-bag-line"-->
              <!--                                              ></i>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Your order is placed-->
              <!--                                              <span-->
              <!--                                                  class="badge bg-soft-success text-success align-middle"-->
              <!--                                              >{{ $t("t-activities-action.completed") }}</span-->
              <!--                                              >-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >These customers can rest assured-->
              <!--                                              their order has been placed - 1-->
              <!--                                              week Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div class="accordion-header" id="heading8">-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse8"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0 avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title bg-light text-success rounded-circle"-->
              <!--                                            >-->
              <!--                                              <i class="ri-home-3-line"></i>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Velzon admin dashboard templates-->
              <!--                                              layout upload-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >We talked about a project on-->
              <!--                                              linkedin - 1 week Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse8"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading8"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div-->
              <!--                                          class="accordion-body ms-2 ps-5 fst-italic"-->
              <!--                                      >-->
              <!--                                        Powerful, clean & modern responsive-->
              <!--                                        bootstrap 5 admin template. The maximum-->
              <!--                                        file size for uploads in this demo :-->
              <!--                                        <div class="row mt-2">-->
              <!--                                          <div class="col-xxl-6">-->
              <!--                                            <div-->
              <!--                                                class="row border border-dashed gx-2 p-2"-->
              <!--                                            >-->
              <!--                                              <div class="col-3">-->
              <!--                                                <img-->
              <!--                                                    src="@/assets/images/small/img-3.jpg"-->
              <!--                                                    alt=""-->
              <!--                                                    class="img-fluid rounded"-->
              <!--                                                />-->
              <!--                                              </div>-->
              <!--                                              &lt;!&ndash;end col&ndash;&gt;-->
              <!--                                              <div class="col-3">-->
              <!--                                                <img-->
              <!--                                                    src="@/assets/images/small/img-5.jpg"-->
              <!--                                                    alt=""-->
              <!--                                                    class="img-fluid rounded"-->
              <!--                                                />-->
              <!--                                              </div>-->
              <!--                                              &lt;!&ndash;end col&ndash;&gt;-->
              <!--                                              <div class="col-3">-->
              <!--                                                <img-->
              <!--                                                    src="@/assets/images/small/img-7.jpg"-->
              <!--                                                    alt=""-->
              <!--                                                    class="img-fluid rounded"-->
              <!--                                                />-->
              <!--                                              </div>-->
              <!--                                              &lt;!&ndash;end col&ndash;&gt;-->
              <!--                                              <div class="col-3">-->
              <!--                                                <img-->
              <!--                                                    src="@/assets/images/small/img-9.jpg"-->
              <!--                                                    alt=""-->
              <!--                                                    class="img-fluid rounded"-->
              <!--                                                />-->
              <!--                                              </div>-->
              <!--                                              &lt;!&ndash;end col&ndash;&gt;-->
              <!--                                            </div>-->
              <!--                                            &lt;!&ndash;end row&ndash;&gt;-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div class="accordion-header" id="heading9">-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse9"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-6.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              New ticket created-->
              <!--                                              <span-->
              <!--                                                  class="badge bg-soft-info text-info align-middle"-->
              <!--                                              >{{ $t("t-activities-action.in-progress") }}</span-->
              <!--                                              >-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted mb-2"-->
              <!--                                            >User-->
              <!--                                              <span class="text-secondary"-->
              <!--                                              >Jack365</span-->
              <!--                                              >-->
              <!--                                              submitted a ticket - 2 week-->
              <!--                                              Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading10"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse10"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Jennifer Carter-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Commented - 4 week Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse10"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading10"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        <p class="text-muted fst-italic mb-2">-->
              <!--                                          " This is an awesome admin dashboard-->
              <!--                                          template. It is extremely well-->
              <!--                                          structured and uses state of the art-->
              <!--                                          components (e.g. one of the only-->
              <!--                                          templates using boostrap 5.1.3 so-->
              <!--                                          far). I integrated it into a Rails 6-->
              <!--                                          project. Needs manual integration work-->
              <!--                                          of course but the template structure-->
              <!--                                          made it easy. "-->
              <!--                                        </p>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash;end accordion&ndash;&gt;-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                            <div class="tab-pane" id="monthly" role="tabpanel">-->
              <!--                              <div class="profile-timeline">-->
              <!--                                <div-->
              <!--                                    class="accordion accordion-flush"-->
              <!--                                    id="monthlyExample"-->
              <!--                                >-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading11"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse11"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0 avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title bg-light text-success rounded-circle"-->
              <!--                                            >-->
              <!--                                              M-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Megan Elmore-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Adding a new event with-->
              <!--                                              attachments - 1 month Ago.</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse11"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading11"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        <div class="row g-2">-->
              <!--                                          <div class="col-auto">-->
              <!--                                            <div-->
              <!--                                                class="d-flex border border-dashed p-2 rounded position-relative"-->
              <!--                                            >-->
              <!--                                              <div class="flex-shrink-0">-->
              <!--                                                <i-->
              <!--                                                    class="ri-image-2-line fs-17 text-danger"-->
              <!--                                                ></i>-->
              <!--                                              </div>-->
              <!--                                              <div class="flex-grow-1 ms-2">-->
              <!--                                                <h6>-->
              <!--                                                  <a-->
              <!--                                                      href="javascript:void(0);"-->
              <!--                                                      class="stretched-link"-->
              <!--                                                  >Business Template - UI/UX-->
              <!--                                                    design</a-->
              <!--                                                  >-->
              <!--                                                </h6>-->
              <!--                                                <small>685 KB</small>-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="col-auto">-->
              <!--                                            <div-->
              <!--                                                class="d-flex border border-dashed p-2 rounded position-relative"-->
              <!--                                            >-->
              <!--                                              <div class="flex-shrink-0">-->
              <!--                                                <i-->
              <!--                                                    class="ri-file-zip-line fs-17 text-info"-->
              <!--                                                ></i>-->
              <!--                                              </div>-->
              <!--                                              <div class="flex-grow-1 ms-2">-->
              <!--                                                <h6>-->
              <!--                                                  <a-->
              <!--                                                      href="javascript:void(0);"-->
              <!--                                                      class="stretched-link"-->
              <!--                                                  >Bank Management System - -->
              <!--                                                    PSD</a-->
              <!--                                                  >-->
              <!--                                                </h6>-->
              <!--                                                <small>8.78 MB</small>-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="col-auto">-->
              <!--                                            <div-->
              <!--                                                class="d-flex border border-dashed p-2 rounded position-relative"-->
              <!--                                            >-->
              <!--                                              <div class="flex-shrink-0">-->
              <!--                                                <i-->
              <!--                                                    class="ri-file-zip-line fs-17 text-info"-->
              <!--                                                ></i>-->
              <!--                                              </div>-->
              <!--                                              <div class="flex-grow-1 ms-2">-->
              <!--                                                <h6>-->
              <!--                                                  <a-->
              <!--                                                      href="javascript:void(0);"-->
              <!--                                                      class="stretched-link"-->
              <!--                                                  >Bank Management System - -->
              <!--                                                    PSD</a-->
              <!--                                                  >-->
              <!--                                                </h6>-->
              <!--                                                <small>8.78 MB</small>-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading12"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse12"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-2.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Jacqueline Steve-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >We has changed 2 attributes on 3-->
              <!--                                              month Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse12"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading12"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        In an awareness campaign, it is vital-->
              <!--                                        for people to begin put 2 and 2 together-->
              <!--                                        and begin to recognize your cause. Too-->
              <!--                                        much or too little spacing, as in the-->
              <!--                                        example below, can make things-->
              <!--                                        unpleasant for the reader. The goal is-->
              <!--                                        to make your text as comfortable to read-->
              <!--                                        as possible. A wonderful serenity has-->
              <!--                                        taken possession of my entire soul, like-->
              <!--                                        these sweet mornings of spring which I-->
              <!--                                        enjoy with my whole heart.-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading13"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse13"-->
              <!--                                          aria-expanded="false"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              New ticket received-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted mb-2"-->
              <!--                                            >User-->
              <!--                                              <span class="text-secondary"-->
              <!--                                              >Erica245</span-->
              <!--                                              >-->
              <!--                                              submitted a ticket - 5 month-->
              <!--                                              Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading14"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse14"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0 avatar-xs">-->
              <!--                                            <div-->
              <!--                                                class="avatar-title bg-light text-muted rounded-circle"-->
              <!--                                            >-->
              <!--                                              <i class="ri-user-3-fill"></i>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Nancy Martino-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Commented on 24 Nov, 2021.</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse14"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading14"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div-->
              <!--                                          class="accordion-body ms-2 ps-5 fst-italic"-->
              <!--                                      >-->
              <!--                                        " A wonderful serenity has taken-->
              <!--                                        possession of my entire soul, like these-->
              <!--                                        sweet mornings of spring which I enjoy-->
              <!--                                        with my whole heart. Each design is a-->
              <!--                                        new, unique piece of art birthed into-->
              <!--                                        this world, and while you have the-->
              <!--                                        opportunity to be creative and make your-->
              <!--                                        own style choices. "-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="accordion-item border-0">-->
              <!--                                    <div-->
              <!--                                        class="accordion-header"-->
              <!--                                        id="heading15"-->
              <!--                                    >-->
              <!--                                      <a-->
              <!--                                          class="accordion-button p-2 shadow-none"-->
              <!--                                          data-bs-toggle="collapse"-->
              <!--                                          href="#collapse15"-->
              <!--                                          aria-expanded="true"-->
              <!--                                      >-->
              <!--                                        <div class="d-flex">-->
              <!--                                          <div class="flex-shrink-0">-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="avatar-xs rounded-circle"-->
              <!--                                            />-->
              <!--                                          </div>-->
              <!--                                          <div class="flex-grow-1 ms-3">-->
              <!--                                            <h6 class="fs-14 mb-1">-->
              <!--                                              Lewis Arnold-->
              <!--                                            </h6>-->
              <!--                                            <small class="text-muted"-->
              <!--                                            >Create new project buildng-->
              <!--                                              product - 8 month Ago</small-->
              <!--                                            >-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </a>-->
              <!--                                    </div>-->
              <!--                                    <div-->
              <!--                                        id="collapse15"-->
              <!--                                        class="accordion-collapse collapse show"-->
              <!--                                        aria-labelledby="heading15"-->
              <!--                                        data-bs-parent="#accordionExample"-->
              <!--                                    >-->
              <!--                                      <div class="accordion-body ms-2 ps-5">-->
              <!--                                        <p class="text-muted mb-2">-->
              <!--                                          Every team project can have a velzon.-->
              <!--                                          Use the velzon to share information-->
              <!--                                          with your team to understand and-->
              <!--                                          contribute to your project.-->
              <!--                                        </p>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="Christi"-->
              <!--                                          >-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="rounded-circle avatar-xs"-->
              <!--                                            />-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="Frank Hook"-->
              <!--                                          >-->
              <!--                                            <img-->
              <!--                                                src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                                alt=""-->
              <!--                                                class="rounded-circle avatar-xs"-->
              <!--                                            />-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title=" Ruby"-->
              <!--                                          >-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                              >-->
              <!--                                                R-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </a>-->
              <!--                                          <a-->
              <!--                                              href="javascript: void(0);"-->
              <!--                                              class="avatar-group-item"-->
              <!--                                              data-bs-toggle="tooltip"-->
              <!--                                              data-bs-trigger="hover"-->
              <!--                                              data-bs-placement="top"-->
              <!--                                              title=""-->
              <!--                                              data-bs-original-title="more"-->
              <!--                                          >-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle"-->
              <!--                                              >-->
              <!--                                                2+-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </a>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash;end accordion&ndash;&gt;-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end col &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end row &ndash;&gt;-->

              <!--                  <div class="card">-->
              <!--                    <div class="card-body">-->
              <!--                      <h5 class="card-title mb-3">{{ $t("t-projects") }}</h5>-->

              <!--                      &lt;!&ndash; Swiper &ndash;&gt;-->
              <!--                      <div class="swiper project-swiper">-->

              <!--                        <swiper-->
              <!--                            :slides-per-view="3"-->
              <!--                            :space-between="50"-->
              <!--                            :thumbs="{ swiper: thumbsSwiper }"-->
              <!--                        >-->
              <!--                          <swiper-slide>-->
              <!--                            <div class="swiper-slide">-->
              <!--                              <div-->
              <!--                                  class="card profile-project-card shadow-none profile-project-success mb-0"-->
              <!--                              >-->
              <!--                                <div class="card-body p-4">-->
              <!--                                  <div class="d-flex">-->
              <!--                                    <div-->
              <!--                                        class="flex-grow-1 text-muted overflow-hidden"-->
              <!--                                    >-->
              <!--                                      <h5 class="fs-14 text-truncate mb-1">-->
              <!--                                        <a href="#" class="text-dark"-->
              <!--                                        >ABC Project Customization</a-->
              <!--                                        >-->
              <!--                                      </h5>-->
              <!--                                      <p class="text-muted text-truncate mb-0">-->
              <!--                                        {{ $t("t-last-update") }} :-->
              <!--                                        <span class="fw-semibold text-dark"-->
              <!--                                        >4 hr Ago</span-->
              <!--                                        >-->
              <!--                                      </p>-->
              <!--                                    </div>-->
              <!--                                    <div class="flex-shrink-0 ms-2">-->
              <!--                                      <div-->
              <!--                                          class="badge badge-soft-warning fs-10"-->
              <!--                                      >-->
              <!--                                        {{ $t("t-activities-action.in-progress") }}-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="d-flex mt-4">-->
              <!--                                    <div class="flex-grow-1">-->
              <!--                                      <div-->
              <!--                                          class="d-flex align-items-center gap-2"-->
              <!--                                      >-->
              <!--                                        <div>-->
              <!--                                          <h5 class="fs-12 text-muted mb-0">-->
              <!--                                            {{ $t("t-members") }} :-->
              <!--                                          </h5>-->
              <!--                                        </div>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                              >-->
              <!--                                                A-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-2.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                              </div>-->
              <!--                              &lt;!&ndash; end card &ndash;&gt;-->
              <!--                            </div>-->
              <!--                          </swiper-slide>-->
              <!--                          &lt;!&ndash; end slide item &ndash;&gt;-->
              <!--                          <swiper-slide>-->
              <!--                            <div class="swiper-slide">-->
              <!--                              <div-->
              <!--                                  class="card profile-project-card shadow-none profile-project-danger mb-0"-->
              <!--                              >-->
              <!--                                <div class="card-body p-4">-->
              <!--                                  <div class="d-flex">-->
              <!--                                    <div-->
              <!--                                        class="flex-grow-1 text-muted overflow-hidden"-->
              <!--                                    >-->
              <!--                                      <h5 class="fs-14 text-truncate mb-1">-->
              <!--                                        <a href="#" class="text-dark"-->
              <!--                                        >Client - John</a-->
              <!--                                        >-->
              <!--                                      </h5>-->
              <!--                                      <p class="text-muted text-truncate mb-0">-->
              <!--                                        {{ $t("t-last-update") }} :-->
              <!--                                        <span class="fw-semibold text-dark"-->
              <!--                                        >1 hr Ago</span-->
              <!--                                        >-->
              <!--                                      </p>-->
              <!--                                    </div>-->
              <!--                                    <div class="flex-shrink-0 ms-2">-->
              <!--                                      <div class="badge badge-soft-success fs-10">-->
              <!--                                        {{ $t("t-activities-action.completed") }}-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="d-flex mt-4">-->
              <!--                                    <div class="flex-grow-1">-->
              <!--                                      <div-->
              <!--                                          class="d-flex align-items-center gap-2"-->
              <!--                                      >-->
              <!--                                        <div>-->
              <!--                                          <h5 class="fs-12 text-muted mb-0">-->
              <!--                                            {{ $t("t-members") }} :-->
              <!--                                          </h5>-->
              <!--                                        </div>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-2.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                              >-->
              <!--                                                C-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                              </div>-->
              <!--                              &lt;!&ndash; end card &ndash;&gt;-->
              <!--                            </div>-->
              <!--                          </swiper-slide>-->
              <!--                          &lt;!&ndash; end slide item &ndash;&gt;-->
              <!--                          <swiper-slide>-->
              <!--                            <div class="swiper-slide">-->
              <!--                              <div-->
              <!--                                  class="card profile-project-card shadow-none profile-project-info mb-0"-->
              <!--                              >-->
              <!--                                <div class="card-body p-4">-->
              <!--                                  <div class="d-flex">-->
              <!--                                    <div-->
              <!--                                        class="flex-grow-1 text-muted overflow-hidden"-->
              <!--                                    >-->
              <!--                                      <h5 class="fs-14 text-truncate mb-1">-->
              <!--                                        <a href="#" class="text-dark"-->
              <!--                                        >Brand logo Design</a-->
              <!--                                        >-->
              <!--                                      </h5>-->
              <!--                                      <p class="text-muted text-truncate mb-0">-->
              <!--                                        {{ $t("t-last-update") }} :-->
              <!--                                        <span class="fw-semibold text-dark"-->
              <!--                                        >2 hr Ago</span-->
              <!--                                        >-->
              <!--                                      </p>-->
              <!--                                    </div>-->
              <!--                                    <div class="flex-shrink-0 ms-2">-->
              <!--                                      <div-->
              <!--                                          class="badge badge-soft-warning fs-10"-->
              <!--                                      >-->
              <!--                                        {{ $t("t-activities-action.in-progress") }}-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="d-flex mt-4">-->
              <!--                                    <div class="flex-grow-1">-->
              <!--                                      <div-->
              <!--                                          class="d-flex align-items-center gap-2"-->
              <!--                                      >-->
              <!--                                        <div>-->
              <!--                                          <h5 class="fs-12 text-muted mb-0">-->
              <!--                                            {{ $t("t-members") }} :-->
              <!--                                          </h5>-->
              <!--                                        </div>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                              </div>-->
              <!--                              &lt;!&ndash; end card &ndash;&gt;-->
              <!--                            </div>-->
              <!--                          </swiper-slide>-->

              <!--                          &lt;!&ndash; end slide item &ndash;&gt;-->
              <!--                          <swiper-slide>-->
              <!--                            <div class="swiper-slide">-->
              <!--                              <div-->
              <!--                                  class="card profile-project-card shadow-none profile-project-danger mb-0"-->
              <!--                              >-->
              <!--                                <div class="card-body p-4">-->
              <!--                                  <div class="d-flex">-->
              <!--                                    <div-->
              <!--                                        class="flex-grow-1 text-muted overflow-hidden"-->
              <!--                                    >-->
              <!--                                      <h5 class="fs-14 text-truncate mb-1">-->
              <!--                                        <a href="#" class="text-dark"-->
              <!--                                        >Project update</a-->
              <!--                                        >-->
              <!--                                      </h5>-->
              <!--                                      <p class="text-muted text-truncate mb-0">-->
              <!--                                        {{ $t("t-last-update") }} :-->
              <!--                                        <span class="fw-semibold text-dark"-->
              <!--                                        >4 hr Ago</span-->
              <!--                                        >-->
              <!--                                      </p>-->
              <!--                                    </div>-->
              <!--                                    <div class="flex-shrink-0 ms-2">-->
              <!--                                      <div class="badge badge-soft-success fs-10">-->
              <!--                                        {{ $t("t-activities-action.completed") }}-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->

              <!--                                  <div class="d-flex mt-4">-->
              <!--                                    <div class="flex-grow-1">-->
              <!--                                      <div class="d-flex align-items-center gap-2">-->
              <!--                                        <div>-->
              <!--                                          <h5 class="fs-12 text-muted mb-0">-->
              <!--                                            {{ $t("t-members") }} :-->
              <!--                                          </h5>-->
              <!--                                        </div>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                              </div>-->
              <!--                              &lt;!&ndash; end card &ndash;&gt;-->
              <!--                            </div>-->
              <!--                          </swiper-slide>-->
              <!--                          &lt;!&ndash; end slide item &ndash;&gt;-->
              <!--                          <swiper-slide>-->
              <!--                            <div class="swiper-slide">-->
              <!--                              <div-->
              <!--                                  class="card profile-project-card shadow-none profile-project-warning mb-0"-->
              <!--                              >-->
              <!--                                <div class="card-body p-4">-->
              <!--                                  <div class="d-flex">-->
              <!--                                    <div-->
              <!--                                        class="flex-grow-1 text-muted overflow-hidden"-->
              <!--                                    >-->
              <!--                                      <h5 class="fs-14 text-truncate mb-1">-->
              <!--                                        <a href="#" class="text-dark"-->
              <!--                                        >Chat App</a-->
              <!--                                        >-->
              <!--                                      </h5>-->
              <!--                                      <p class="text-muted text-truncate mb-0">-->
              <!--                                        {{ $t("t-last-update") }} :-->
              <!--                                        <span class="fw-semibold text-dark"-->
              <!--                                        >1 hr Ago</span-->
              <!--                                        >-->
              <!--                                      </p>-->
              <!--                                    </div>-->
              <!--                                    <div class="flex-shrink-0 ms-2">-->
              <!--                                      <div class="badge badge-soft-warning fs-10">-->
              <!--                                        {{ $t("t-activities-action.in-progress") }}-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->

              <!--                                  <div class="d-flex mt-4">-->
              <!--                                    <div class="flex-grow-1">-->
              <!--                                      <div-->
              <!--                                          class="d-flex align-items-center gap-2"-->
              <!--                                      >-->
              <!--                                        <div>-->
              <!--                                          <h5 class="fs-12 text-muted mb-0">-->
              <!--                                            {{ $t("t-members") }} :-->
              <!--                                          </h5>-->
              <!--                                        </div>-->
              <!--                                        <div class="avatar-group">-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <img-->
              <!--                                                  src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                                  alt=""-->
              <!--                                                  class="rounded-circle img-fluid"-->
              <!--                                              />-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                          <div class="avatar-group-item">-->
              <!--                                            <div class="avatar-xs">-->
              <!--                                              <div-->
              <!--                                                  class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                              >-->
              <!--                                                A-->
              <!--                                              </div>-->
              <!--                                            </div>-->
              <!--                                          </div>-->
              <!--                                        </div>-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                              </div>-->
              <!--                              &lt;!&ndash; end card &ndash;&gt;-->
              <!--                            </div>-->
              <!--                          </swiper-slide>-->
              <!--                          &lt;!&ndash; end slide item &ndash;&gt;-->
              <!--                        </swiper>-->

              <!--                      </div>-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash; end card &ndash;&gt;-->
              <!--                </div>-->
              <!--                &lt;!&ndash;end col&ndash;&gt;-->
              <!--              </div>-->
              <!--end row-->
            </div>
            <div class="tab-pane fade" id="activities" role="tabpanel">
              <div class="card">
                <div class="card-body requisites-payment">
                  <form action="">
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="full_name">Полное наименование</label>
                        <input class="form-control col-sm-6 col-xxl-6" type="text" id="full_name" v-model="full_name"
                               placeholder="Общество с ограниченной ответственностью 'Петрович'">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="full_name">Краткое наименование</label>
                        <input class="form-control col-sm-6 col-xxl-6" type="text" id="name"
                               placeholder="ООО 'Петрович'">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="inn">ИНН</label>
                        <input class="form-control" type="text" id="inn" placeholder="Введите ИНН">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="kpp">КПП</label>
                        <input class="form-control" type="text" id="kpp" placeholder="Введите КПП">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="bic">БИК</label>
                        <input class="form-control" type="text" id="bic" placeholder="Введите БИК">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="bank">Банковские реквизиты</label>
                        <input class="form-control" type="text" id="bank"
                               placeholder="1234 5678 9102 3456    в Московский банк ПАО Сбербанк г.Москва">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="kc">К/С</label>
                        <input class="form-control" type="text" id="kc" placeholder="Введите К/С">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="okpo">ОКПО</label>
                        <input class="form-control" type="text" id="okpo" placeholder="Введите ОКПО">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <label for="okato">ОКАТО</label>
                        <input class="form-control" type="text" id="okato" placeholder="Введите ОКАТО">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="ogrn">ОГРН</label>
                        <input class="form-control" type="text" id="ogrn" placeholder="Введите ОГРН">
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="form-group col-md-6">
                        <button class="btn btn-info">Сохранить</button>
                      </div>
                    </div>
                  </form>
                  <h5 v-if="false" class="card-title mb-3">{{ $t("t-activities") }}</h5>
                  <div class="activity-timeline">

                  </div>
                  <div v-if="false" class="acitivity-timeline">
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img
                            src="@/assets/images/users/avatar-1.jpg"
                            alt=""
                            class="avatar-xs rounded-circle acitivity-avatar"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Oliver Phillips
                          <span
                              class="badge bg-soft-primary text-primary align-middle"
                          >{{ $t("t-activities-action.new") }}</span
                          >
                        </h6>
                        <p class="text-muted mb-2">
                          We talked about a project on linkedin.
                        </p>
                        <small class="mb-0 text-muted">Today</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                        <div
                            class="avatar-title bg-soft-success text-success rounded-circle"
                        >
                          N
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Nancy Martino
                          <span class="badge bg-soft-secondary text-secondary align-middle">
                            {{ $t("t-activities-action.in-progress") }}
                          </span>
                        </h6>
                        <p class="text-muted mb-2">
                          <i class="ri-file-text-line align-middle ms-2"></i>
                          Create new project Buildng product
                        </p>
                        <div class="avatar-group mb-2">
                          <a
                              href="javascript: void(0);"
                              class="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Christi"
                          >
                            <img
                                src="@/assets/images/users/avatar-4.jpg"
                                alt=""
                                class="rounded-circle avatar-xs"
                            />
                          </a>
                          <a
                              href="javascript: void(0);"
                              class="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Frank Hook"
                          >
                            <img
                                src="@/assets/images/users/avatar-3.jpg"
                                alt=""
                                class="rounded-circle avatar-xs"
                            />
                          </a>
                          <a
                              href="javascript: void(0);"
                              class="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title=" Ruby"
                          >
                            <div class="avatar-xs">
                              <div
                                  class="avatar-title rounded-circle bg-light text-primary"
                              >
                                R
                              </div>
                            </div>
                          </a>
                          <a
                              href="javascript: void(0);"
                              class="avatar-group-item"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="more"
                          >
                            <div class="avatar-xs">
                              <div class="avatar-title rounded-circle">2+</div>
                            </div>
                          </a>
                        </div>
                        <small class="mb-0 text-muted">Yesterday</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img
                            src="@/assets/images/users/avatar-2.jpg"
                            alt=""
                            class="avatar-xs rounded-circle acitivity-avatar"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Natasha Carey
                          <span class="badge bg-soft-success text-success align-middle">
                            {{ $t("t-activities-action.completed") }}
                          </span>
                        </h6>
                        <p class="text-muted mb-2">
                          Adding a new event with attachments
                        </p>
                        <div class="row">
                          <div class="col-xxl-4">
                            <div class="row border border-dashed gx-2 p-2 mb-2">
                              <div class="col-4">
                                <img
                                    src="@/assets/images/small/img-2.jpg"
                                    alt=""
                                    class="img-fluid rounded"
                                />
                              </div>
                              <!--end col-->
                              <div class="col-4">
                                <img
                                    src="@/assets/images/small/img-3.jpg"
                                    alt=""
                                    class="img-fluid rounded"
                                />
                              </div>
                              <!--end col-->
                              <div class="col-4">
                                <img
                                    src="@/assets/images/small/img-4.jpg"
                                    alt=""
                                    class="img-fluid rounded"
                                />
                              </div>
                              <!--end col-->
                            </div>
                            <!--end row-->
                          </div>
                        </div>
                        <small class="mb-0 text-muted">25 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img
                            src="@/assets/images/users/avatar-6.jpg"
                            alt=""
                            class="avatar-xs rounded-circle acitivity-avatar"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Bethany Johnson</h6>
                        <p class="text-muted mb-2">
                          added a new member to velzon dashboard
                        </p>
                        <small class="mb-0 text-muted">19 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div
                              class="avatar-title rounded-circle bg-soft-danger text-danger"
                          >
                            <i class="ri-shopping-bag-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          Your order is placed
                          <span
                              class="badge bg-soft-danger text-danger align-middle ms-1"
                          >{{ $t("t-activities-action.out-delivery") }}</span
                          >
                        </h6>
                        <p class="text-muted mb-2">
                          These customers can rest assured their order has been
                          placed.
                        </p>
                        <small class="mb-0 text-muted">16 Nov</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <img
                            src="@/assets/images/users/avatar-7.jpg"
                            alt=""
                            class="avatar-xs rounded-circle acitivity-avatar"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Lewis Pratt</h6>
                        <p class="text-muted mb-2">
                          They all have something to say beyond the words on the
                          page. They can come across as casual or neutral,
                          exotic or graphic.
                        </p>
                        <small class="mb-0 text-muted">22 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item py-3 d-flex">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs acitivity-avatar">
                          <div
                              class="avatar-title rounded-circle bg-soft-info text-info"
                          >
                            <i class="ri-line-chart-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Monthly sales report</h6>
                        <p class="text-muted mb-2">
                          <span class="text-danger">2 days left</span>
                          notification to submit the monthly sales report.
                          <a
                              href="javascript:void(0);"
                              class="link-warning text-decoration-underline"
                          >Reports Builder</a
                          >
                        </p>
                        <small class="mb-0 text-muted">15 Oct</small>
                      </div>
                    </div>
                    <div class="acitivity-item d-flex">
                      <div class="flex-shrink-0">
                        <img
                            src="@/assets/images/users/avatar-8.jpg"
                            alt=""
                            class="avatar-xs rounded-circle acitivity-avatar"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">
                          New ticket received
                          <span class="badge bg-soft-success text-success align-middle">
                            {{ $t("t-activities-action.completed") }}
                          </span
                          >
                        </h6>
                        <p class="text-muted mb-2">
                          User
                          <span class="text-secondary">Erica245</span> submitted
                          a ticket.
                        </p>
                        <small class="mb-0 text-muted">26 Aug</small>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end card-body-->
              </div>
              <!--end card-->
            </div>
            <!--end tab-pane-->
            <div class="tab-pane fade" id="projects" role="tabpanel">
              <!-- Tables Without Borders -->
              <div class="card p-3">
                <!--                <div class="mb-3">-->
                <!--                  <a href="/pages/profile-setting" class="btn btn-success">-->
                <!--                    <i class="ri-add-line align-bottom me-1"></i>Добавить сотрудника</a>-->
                <!--                </div>-->
                <div class="mb-3">
                  <button type="button" class="btn btn-success" data-bs-toggle="modal" id="create-btn"
                          data-bs-target="#AddEmployee">
                    <i class="ri-add-line align-bottom me-1"></i>Добавить сотрудника
                  </button>
                </div>
                <div class="modal fade" id="AddEmployee" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header bg-light p-3">
                        <h5 class="modal-title" id="exampleModalLabel">Добавить сотрудника</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                id="close-modal"></button>
                      </div>
                      <form action="#" id="addform">
                        <div class="modal-body">
                          <input type="hidden" id="id-field"/>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">Назавние кабинета</label>
                            <input type="text" class="form-control" placeholder="Назавние кабинета"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">API 32</label>
                            <input type="text" class="form-control" placeholder="API 32"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">API 64</label>
                            <input type="text" class="form-control" placeholder="API 64"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">Новый API</label>
                            <input type="text" class="form-control" placeholder="Новый API"/>
                          </div>
                          <div class="modal-footer">
                            <div class="hstack gap-2 justify-content-end">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" id="closemodal">
                                Закрыть
                              </button>
                              <button type="button" class="btn btn-success" id="add-btn" @click="addorder">
                                Добавить
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <table class="table table-borderless table-nowrap">
                  <thead>
                  <tr>
                    <th scope="col">Имя и Фамилия</th>
                    <th scope="col">Email</th>
                    <th scope="col">Активные модули</th>
                    <th scope="col">Роли</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="employee in employees" :key="employee">
                    <td>{{ employee.user_name + ' ' + employee.user_surname + ' ' + employee.user_patronymic }}</td>
                    <td>{{ employee.user_email }}</td>
                    <td>12 из 24</td>
                    <td>{{ employee.user_role }}</td>
                    <td><span class="badge badge-soft-success">{{ employee.status }}</span></td>
                    <td>
                      <span>
                        <div class="dropdown">
                          <button class="btn btn-soft-secondary btn-sm dropdown" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-fill"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <router-link class="dropdown-item" to="/ecommerce/add-product"><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.edit") }}</router-link>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" @click="deletedata(data)">
                                <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.delete") }}</a>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <!--              <div class="card">-->
              <!--                <div class="card-body">-->
              <!--                  <div class="row">-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-warning"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Chat App Update</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >2 year Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-warning fs-10">-->
              <!--                                {{ $t("t-activities-action.in-progress") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-1.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                      >-->
              <!--                                        J-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-success"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >ABC Project Customization</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >2 month Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-primary fs-10">-->
              <!--                                Progress-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-8.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-6.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-primary"-->
              <!--                                      >-->
              <!--                                        2+-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-info"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Client - Frank Hook</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >1 hr Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-info fs-10">{{ $t("t-activities-action.new") }}</div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                      >-->
              <!--                                        M-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-primary"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark">Velzon Project</a>-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >11 hr Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-success fs-10">-->
              <!--                                {{ $t("t-activities-action.completed") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-danger"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Brand Logo Design</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >10 min Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-info fs-10">{{ $t("t-activities-action.new") }}</div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-6.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                      >-->
              <!--                                        E-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-primary"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark">Chat App</a>-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >8 hr Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-warning fs-10">-->
              <!--                                {{ $t("t-activities-action.in-progress") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                      >-->
              <!--                                        R-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-8.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-warning"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark">Project Update</a>-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >48 min Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-warning fs-10">-->
              <!--                                {{ $t("t-activities-action.in-progress") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-6.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none profile-project-success"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Client - Jennifer</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >30 min Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-primary fs-10">-->
              <!--                                Process-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->

              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-1.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none mb-xxl-0 profile-project-info"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Bsuiness Template - UI/UX design</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >7 month Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-success fs-10">-->
              <!--                                {{ $t("t-activities-action.completed") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-2.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-3.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-4.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-primary"-->
              <!--                                      >-->
              <!--                                        2+-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none mb-xxl-0 profile-project-success"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark">Update Project</a>-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >1 month Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-info fs-10">{{ $t("t-activities-action.new") }}</div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img src="@/assets/images/users/avatar-7.jpg" alt=""-->
              <!--                                           class="rounded-circle img-fluid"/>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-light text-primary"-->
              <!--                                      >-->
              <!--                                        A-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none mb-sm-0 profile-project-danger"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >Bank Management System</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >10 month Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-success fs-10">-->
              <!--                                {{ $t("t-activities-action.completed") }}-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-6.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-5.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <div-->
              <!--                                          class="avatar-title rounded-circle bg-primary"-->
              <!--                                      >-->
              <!--                                        2+-->
              <!--                                      </div>-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-xxl-3 col-sm-6">-->
              <!--                      <div-->
              <!--                          class="card profile-project-card shadow-none mb-0 profile-project-primary"-->
              <!--                      >-->
              <!--                        <div class="card-body p-4">-->
              <!--                          <div class="d-flex">-->
              <!--                            <div class="flex-grow-1 text-muted overflow-hidden">-->
              <!--                              <h5 class="fs-14 text-truncate">-->
              <!--                                <a href="#" class="text-dark"-->
              <!--                                >PSD to HTML Convert</a-->
              <!--                                >-->
              <!--                              </h5>-->
              <!--                              <p class="text-muted text-truncate mb-0">-->
              <!--                                {{ $t("t-last-update") }} :-->
              <!--                                <span class="fw-semibold text-dark"-->
              <!--                                >29 min Ago</span-->
              <!--                                >-->
              <!--                              </p>-->
              <!--                            </div>-->
              <!--                            <div class="flex-shrink-0 ms-2">-->
              <!--                              <div class="badge badge-soft-info fs-10">{{ $t("t-activities-action.new") }}</div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                          <div class="d-flex mt-4">-->
              <!--                            <div class="flex-grow-1">-->
              <!--                              <div class="d-flex align-items-center gap-2">-->
              <!--                                <div>-->
              <!--                                  <h5 class="fs-12 text-muted mb-0">-->
              <!--                                    {{ $t("t-members") }} :-->
              <!--                                  </h5>-->
              <!--                                </div>-->
              <!--                                <div class="avatar-group">-->
              <!--                                  <div class="avatar-group-item">-->
              <!--                                    <div class="avatar-xs">-->
              <!--                                      <img-->
              <!--                                          src="@/assets/images/users/avatar-7.jpg"-->
              <!--                                          alt=""-->
              <!--                                          class="rounded-circle img-fluid"-->
              <!--                                      />-->
              <!--                                    </div>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </div>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                        &lt;!&ndash; end card body &ndash;&gt;-->
              <!--                      </div>-->
              <!--                      &lt;!&ndash; end card &ndash;&gt;-->
              <!--                    </div>-->
              <!--                    &lt;!&ndash;end col&ndash;&gt;-->
              <!--                    <div class="col-lg-12">-->
              <!--                      <div class="mt-4">-->
              <!--                        <ul-->
              <!--                            class="pagination pagination-separated justify-content-center mb-0"-->
              <!--                        >-->
              <!--                          <li class="page-item disabled">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            ><i class="mdi mdi-chevron-left"></i-->
              <!--                            ></a>-->
              <!--                          </li>-->
              <!--                          <li class="page-item active">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            >1</a-->
              <!--                            >-->
              <!--                          </li>-->
              <!--                          <li class="page-item">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            >2</a-->
              <!--                            >-->
              <!--                          </li>-->
              <!--                          <li class="page-item">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            >3</a-->
              <!--                            >-->
              <!--                          </li>-->
              <!--                          <li class="page-item">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            >4</a-->
              <!--                            >-->
              <!--                          </li>-->
              <!--                          <li class="page-item">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            >5</a-->
              <!--                            >-->
              <!--                          </li>-->
              <!--                          <li class="page-item">-->
              <!--                            <a href="javascript:void(0);" class="page-link"-->
              <!--                            ><i class="mdi mdi-chevron-right"></i-->
              <!--                            ></a>-->
              <!--                          </li>-->
              <!--                        </ul>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                  &lt;!&ndash;end row&ndash;&gt;-->
              <!--                </div>-->
              <!--                &lt;!&ndash;end card-body&ndash;&gt;-->
              <!--              </div>-->
              <!--end card-->
            </div>
            <!--end tab-pane-->
            <div class="tab-pane fade" id="documents" role="tabpanel">
              <div class="card p-3">
                <div class="mb-3">
                  <button type="button" class="btn btn-success" data-bs-toggle="modal" id="create-btn"
                          data-bs-target="#showModal">
                    <i class="ri-add-line align-bottom me-1"></i>Добавить кабинет
                  </button>
                </div>
                <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header bg-light p-3">
                        <h5 class="modal-title" id="exampleModalLabel">Добавить кабинет</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                id="close-modal"></button>
                      </div>
                      <form action="#" id="addform">
                        <div class="modal-body">
                          <input type="hidden" id="id-field"/>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">Назавние кабинета</label>
                            <input type="text" class="form-control" placeholder="Назавние кабинета"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">API 32</label>
                            <input type="text" class="form-control" placeholder="API 32"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">API 64</label>
                            <input type="text" class="form-control" placeholder="API 64"/>
                          </div>
                          <div class="mb-3" id="modal-id">
                            <label for="orderId" class="form-label">Новый API</label>
                            <input type="text" class="form-control" placeholder="Новый API"/>
                          </div>
                          <div class="modal-footer">
                            <div class="hstack gap-2 justify-content-end">
                              <button type="button" class="btn btn-light" data-bs-dismiss="modal" id="closemodal">
                                Закрыть
                              </button>
                              <button type="button" class="btn btn-success" id="add-btn" @click="addorder">
                                Добавить
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <table v-if="false" class="table table-borderless table-nowrap">
                  <thead>
                  <tr>
                    <th scope="col">Имя и Фамилия</th>
                    <th scope="col">Email</th>
                    <th scope="col">Активные модули</th>
                    <th scope="col">Роли</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Annette Black</td>
                    <td>ftgt@gmail.com</td>
                    <td>12 из 24</td>
                    <td>Админ</td>
                    <td><span class="badge badge-soft-success">Active</span></td>
                    <td>
                      <span>
                        <div class="dropdown">
                          <button class="btn btn-soft-secondary btn-sm dropdown" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-fill"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <router-link class="dropdown-item" to="/ecommerce/add-product"><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.edit") }}</router-link>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" @click="deletedata(data)">
                                <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.delete") }}</a>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <table class="table table-borderless table-nowrap">
                  <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Название Кабинета</th>
                    <th scope="col">Маркетплейс</th>
                    <th scope="col">API64</th>
                    <th scope="col">API256</th>
                    <th scope="col">Действия</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(cabinet, index) in cabinets" :key="cabinet">
                    <td>{{ index + 1 }}</td>
                    <td>{{ cabinet.name }}</td>
                    <td>{{ cabinet.marketplace }}</td>
                    <td>{{ cabinet.api64 }}</td>
                    <td>{{ cabinet.api256 }}</td>
                    <td>
                      <span>
                        <div class="dropdown">
                          <button class="btn btn-soft-secondary btn-sm dropdown" type="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-fill"></i>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                              <router-link class="dropdown-item" to="/ecommerce/add-product"><i
                                  class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.edit") }}</router-link>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" @click="deletedata(data)">
                                <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                {{ $t("t-action.delete") }}</a>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!--              <div class="card">-->
              <!--                <div class="card-body">-->
              <!--                  <div class="d-flex align-items-center mb-4">-->
              <!--                    <h5 class="card-title flex-grow-1 mb-0">{{ $t("t-documents") }}</h5>-->
              <!--                    <div class="flex-shrink-0">-->
              <!--                      <input-->
              <!--                          class="form-control d-none"-->
              <!--                          type="file"-->
              <!--                          id="formFile"-->
              <!--                      />-->
              <!--                      <label for="formFile" class="btn btn-danger"-->
              <!--                      ><i class="ri-upload-2-fill me-1 align-bottom"></i>-->
              <!--                        {{ $t("t-file-uploads") }}</label-->
              <!--                      >-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                  <div class="row">-->
              <!--                    <div class="col-lg-12">-->
              <!--                      <div class="table-responsive">-->
              <!--                        <table class="table table-borderless align-middle mb-0">-->
              <!--                          <thead class="table-light">-->
              <!--                          <tr>-->
              <!--                            <th scope="col">{{ $t("t-documents-table.file-name") }}</th>-->
              <!--                            <th scope="col">{{ $t("t-documents-table.type") }}</th>-->
              <!--                            <th scope="col">{{ $t("t-documents-table.size") }}</th>-->
              <!--                            <th scope="col">{{ $t("t-documents-table.upload-date") }}</th>-->
              <!--                            <th scope="col">{{ $t("t-documents-table.action") }}</th>-->
              <!--                          </tr>-->
              <!--                          </thead>-->
              <!--                          <tbody>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-primary text-primary rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-file-zip-fill"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0)"-->
              <!--                                    >Artboard-documents.zip</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>Zip File</td>-->
              <!--                            <td>4.57 MB</td>-->
              <!--                            <td>12 Dec 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink15"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink15"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a class="dropdown-item" href="javascript:void(0);">-->
              <!--                                      <i class="ri-eye-fill me-2 align-middle text-muted"></i>-->
              <!--                                      {{ $t("t-action.view") }}-->
              <!--                                    </a>-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a class="dropdown-item" href="javascript:void(0);">-->
              <!--                                      <i class="ri-download-2-fill me-2 align-middle text-muted"></i>-->
              <!--                                      {{ $t("t-action.download") }}-->
              <!--                                    </a>-->
              <!--                                  </li>-->
              <!--                                  <li class="dropdown-divider"></li>-->
              <!--                                  <li>-->
              <!--                                    <a class="dropdown-item" href="javascript:void(0);">-->
              <!--                                      <i class="ri-delete-bin-5-line me-2 align-middle text-muted"></i>-->
              <!--                                      {{ $t("t-action.delete") }}-->
              <!--                                    </a>-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-danger text-danger rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-file-pdf-fill"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0);"-->
              <!--                                    >Bank Management System</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>PDF File</td>-->
              <!--                            <td>8.89 MB</td>-->
              <!--                            <td>24 Nov 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink3"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink3"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-eye-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >View</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-download-2-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Download</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li class="dropdown-divider"></li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-delete-bin-5-line me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Delete</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-secondary text-secondary rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-video-line"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0);"-->
              <!--                                    >Tour-video.mp4</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>MP4 File</td>-->
              <!--                            <td>14.62 MB</td>-->
              <!--                            <td>19 Nov 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink4"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink4"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-eye-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >View</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-download-2-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Download</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li class="dropdown-divider"></li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-delete-bin-5-line me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Delete</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-success text-success rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-file-excel-fill"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0);"-->
              <!--                                    >Account-statement.xsl</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>XSL File</td>-->
              <!--                            <td>2.38 KB</td>-->
              <!--                            <td>14 Nov 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink5"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink5"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-eye-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >View</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-download-2-fill me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Download</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li class="dropdown-divider"></li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-delete-bin-5-line me-2 align-middle text-muted"-->
              <!--                                    ></i-->
              <!--                                    >Delete</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-info text-info rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-folder-line"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0);"-->
              <!--                                    >Project Screenshots Collection</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>Floder File</td>-->
              <!--                            <td>87.24 MB</td>-->
              <!--                            <td>08 Nov 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink6"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink6"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-eye-fill me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >View</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-download-2-fill me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >Download</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-delete-bin-5-line me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >Delete</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          <tr>-->
              <!--                            <td>-->
              <!--                              <div class="d-flex align-items-center">-->
              <!--                                <div class="avatar-sm">-->
              <!--                                  <div-->
              <!--                                      class="avatar-title bg-soft-danger text-danger rounded fs-20"-->
              <!--                                  >-->
              <!--                                    <i class="ri-image-2-fill"></i>-->
              <!--                                  </div>-->
              <!--                                </div>-->
              <!--                                <div class="ms-3 flex-grow-1">-->
              <!--                                  <h6 class="fs-15 mb-0">-->
              <!--                                    <a href="javascript:void(0);"-->
              <!--                                    >Velzon-logo.png</a-->
              <!--                                    >-->
              <!--                                  </h6>-->
              <!--                                </div>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                            <td>PNG File</td>-->
              <!--                            <td>879 KB</td>-->
              <!--                            <td>02 Nov 2021</td>-->
              <!--                            <td>-->
              <!--                              <div class="dropdown">-->
              <!--                                <a-->
              <!--                                    href="javascript:void(0);"-->
              <!--                                    class="btn btn-light btn-icon"-->
              <!--                                    id="dropdownMenuLink7"-->
              <!--                                    data-bs-toggle="dropdown"-->
              <!--                                    aria-expanded="true"-->
              <!--                                >-->
              <!--                                  <i class="ri-equalizer-fill"></i>-->
              <!--                                </a>-->
              <!--                                <ul-->
              <!--                                    class="dropdown-menu dropdown-menu-end"-->
              <!--                                    aria-labelledby="dropdownMenuLink7"-->
              <!--                                >-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-eye-fill me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >View</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-download-2-fill me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >Download</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                  <li>-->
              <!--                                    <a-->
              <!--                                        class="dropdown-item"-->
              <!--                                        href="javascript:void(0);"-->
              <!--                                    ><i-->
              <!--                                        class="ri-delete-bin-5-line me-2 align-middle"-->
              <!--                                    ></i-->
              <!--                                    >Delete</a-->
              <!--                                    >-->
              <!--                                  </li>-->
              <!--                                </ul>-->
              <!--                              </div>-->
              <!--                            </td>-->
              <!--                          </tr>-->
              <!--                          </tbody>-->
              <!--                        </table>-->
              <!--                      </div>-->
              <!--                      <div class="text-center mt-3">-->
              <!--                        <a href="javascript:void(0);" class="text-success"-->
              <!--                        ><i-->
              <!--                            class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"-->
              <!--                        ></i>-->
              <!--                          {{ $t("t-load-more") }}-->
              <!--                        </a>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </div>-->
            </div>
            <!--end tab-pane-->
          </div>
          <!--end tab-content-->
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </Layout>
</template>

<style scoped>
.requisites-payment label {
  font-size: 14px;
  font-weight: 600;
}
</style>
