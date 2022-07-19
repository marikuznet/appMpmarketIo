<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from "sweetalert2";

import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
// import PageHeader from "@/components/page-header";
import axios from 'axios';
// import animationData from "@/components/widgets/msoeawqm.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
  page: {
    title: "Orders",
    meta: [{
      name: "description",
      content: appConfig.description,
    },],
  },
  data() {
    return {
      title: "Orders",
      page: 1,
      perPage: 8,
      pages: [],
      value: null,
      statuscategory: 'All',
      value1: null,
      searchQuery: null,
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
        mode: "range",
      },
      timeConfig: {
        enableTime: false,
        dateFormat: "d M, Y",
      },
      date: null,
      date2: null,
      // defaultOptions: {
      //   animationData: animationData
      // },
      orders: [
        {
          id: 1,
          orderId: "#MP2101",
          order_id: "360160139",
          cabinet: "Деграунд WB",
          img: "https://picsum.photos/200",
          product_name: "Футболка",
          color: "Белый",
          size: "M",
          barcode: "8903338567483",
          amount: "990",
          warehouse: "Склад Поставщик 287289",
          created: "12.07.2022 16:17",
          deliver_during: "48 ч.",
          time_since_order: "1 ч. 40 мин.",
          status: "Отменить"
        },
        {
          id: 2,
          orderId: "#MP2101",
          order_id: "360160143",
          cabinet: "Tekkon WB",
          img: "https://picsum.photos/200",
          product_name: "Костюм спортивный",
          color: "Оранжевый",
          size: "XL",
          barcode: "8903338567481",
          amount: "3990",
          warehouse: "Склад Поставщик 287289",
          created: "12.07.2022 16:17",
          deliver_during: "52 ч.",
          time_since_order: "5 ч. 40 мин.",
          status: "Отменить"
        },
        {
          id: 3,
          orderId: "#MP2101",
          order_id: "360160140",
          cabinet: "Деграунд WB",
          img: "https://picsum.photos/200",
          product_name: "Рубашка",
          color: "Черный",
          size: "44",
          barcode: "8903338567414",
          amount: "1560",
          warehouse: "Склад Поставщик 287289",
          created: "12.07.2022 16:17",
          deliver_during: "49 ч.",
          time_since_order: "2 ч. 40 мин.",
          status: "Отменить"
        }
      ],
      isStatus: null,
      isPayment: null,
    };
  },
  components: {
    Layout,
    // PageHeader,
    lottie: Lottie,
    Multiselect,
    flatPickr,
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.orders);
    },
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.displayedPosts.filter((data) => {
          return (
              data.orderId.toLowerCase().includes(search) ||
              data.cabinet.toLowerCase().includes(search) ||
              data.photo.toLowerCase().includes(search) ||
              data.product_name.toLowerCase().includes(search) ||
              data.color.toLowerCase().includes(search) ||
              data.size.toLowerCase().includes(search) ||
              data.barcode.toLowerCase().includes(search) ||
              data.amount.toLowerCase().includes(search) ||
              data.warehouse.toLowerCase().includes(search) ||
              data.created.toLowerCase().includes(search) ||
              data.deliver_during.toLowerCase().includes(search) ||
              data.time_since_order.toLowerCase().includes(search) ||
              data.status.toLowerCase().includes(search)
          );
        });
      } else if (this.date !== null) {
        if (this.date !== null) {
          var date1 = this.date.split(" to ")[0];
          var date2 = this.date.split(" to ")[1];
        }
        return this.displayedPosts.filter((data) => {
          if (
              new Date(data.orderDate.slice(0, 12)) >= new Date(date1) &&
              new Date(data.orderDate.slice(0, 12)) <= new Date(date2)
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.value !== null) {
        return this.displayedPosts.filter((data) => {
          if (data.status === this.value) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.value1 !== null) {
        return this.displayedPosts.filter((data) => {
          if (data.payment === this.value1) {
            return data;
          } else {
            return null;
          }
        });
      } else if (this.date !== null && this.value !== null && this.value1 !== null) {
        return this.displayedPosts.filter((data) => {
          if (
              new Date(data.orderDate.slice(0, 12)) >= new Date(date1) &&
              new Date(data.orderDate.slice(0, 12)) <= new Date(date2) &&
              data.status === this.value &&
              data.payment === this.value1
          ) {
            return data;
          } else {
            return null;
          }
        });
      } else {
        return this.displayedPosts;
      }
    },
  },
  watch: {},
  created() {
    this.setPages();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
  beforeMount() {
    axios.get('https://api-node.themesbrand.website/apps/order').then((data) => {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
      ];
      this.orders = [];
      data.data.data.forEach((row) => {
        var dd = new Date(row.orderDate)
        row.orderDate = dd.getDate() + " " + monthNames[dd.getMonth()] + ", " + dd.getFullYear();
        this.orders.push(row)
      })
    }).catch((er) => {
      console.log(er)
    });

  },

  mounted() {
    var checkAll = document.getElementById("checkAll");
    if (checkAll) {
      checkAll.onclick = function () {
        var checkboxes = document.querySelectorAll(
            '.form-check-all input[type="checkbox"]'
        );
        if (checkAll.checked == true) {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = true;
            checkbox.closest("tr").classList.add("table-active");
          });
        } else {
          checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
            checkbox.closest("tr").classList.remove("table-active");
          });
        }
      };
    }

    // eslint-disable-next-line no-self-assign
    this.orders = this.orders;
  },
  methods: {
    onChangeStatus(e) {
      this.isStatus = e;
    },
    onChangePayment(e) {
      this.isPayment = e;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.orders.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(orders) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return orders.slice(from, to);
    },
    editdata(data) {
      let result = this.orders.findIndex(o => o.orderId == data.orderId)
      document.getElementById('edtorderId').value = this.orders[result]._id;
      document.getElementById('edtcustomername').value = this.orders[result].customer;
      document.getElementById('edtproductname').value = this.orders[result].product;
      document.getElementById('edtorderdate').value = this.orders[result].orderDate;
      document.getElementById('edtamount').value = this.orders[result].amount;
      document.getElementById('edtpayment').value = this.orders[result].payment;
      document.getElementById('edtdelivered').value = this.orders[result].status;
    },
    updateorder() {
      let result = this.orders.findIndex(o => o._id == document.getElementById('edtorderId').value)
      this.orders[result].customer = document.getElementById('edtcustomername').value;
      this.orders[result].product = document.getElementById('edtproductname').value;
      this.orders[result].orderDate = document.getElementById('edtorderdate').value;
      this.orders[result].amount = document.getElementById('edtamount').value;
      this.orders[result].payment = document.getElementById('edtpayment').value;
      this.orders[result].status = document.getElementById('edtdelivered').value;

      if (this.orders[result].status == 'Ожидает') {
        this.orders[result].statusClass = 'warning'
      } else if (this.orders[result].status == 'На сборке') {
        this.orders[result].statusClass = 'secondary'
      } else if (this.orders[result].status == 'Архив') {
        this.orders[result].statusClass = 'danger'
      } else if (this.orders[result].status == 'Отменено') {
        this.orders[result].statusClass = 'info'
      } else if (this.orders[result].status == 'Собрано') {
        this.orders[result].statusClass = 'success'
      } else {
        this.orders[result].statusClass = 'danger'
      }
      document.getElementById('edtclosemodal').click();
      axios.patch(`https://api-node.themesbrand.website/apps/order/${document.getElementById('edtorderId').value}`, this.orders[
          result])
          .then(() => {

          }).catch((er) => {
        console.log(er)
      });

    },
    deletedata(event) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#f46a6a",
        confirmButtonColor: "#34c38f",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.orders.splice(this.orders.indexOf(event), 1);
          axios.delete(`https://api-node.themesbrand.website/apps/order/${event._id}`)
              .then(() => {

              }).catch((er) => {
            console.log(er)
          });
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    deleteMultiple() {
      let ids_array = [];
      var items = document.getElementsByName("chk_child");
      items.forEach(function (ele) {
        if (ele.checked == true) {
          var trNode = ele.parentNode.parentNode.parentNode;
          var id = trNode.querySelector(".id a").innerHTML;
          ids_array.push(id);
        }
      });
      if (typeof ids_array !== "undefined" && ids_array.length > 0) {
        if (confirm("Are you sure you want to delete this?")) {
          var cusList = this.orders;
          ids_array.forEach(function (id) {
            cusList = cusList.filter(function (orders) {
              return orders.orderId != id;
            });
          });
          this.orders = cusList;
          document.getElementById("checkAll").checked = false;
          var itemss = document.getElementsByName("chk_child");
          itemss.forEach(function (ele) {
            if (ele.checked == true) {
              ele.checked = false
              ele.closest("tr").classList.remove("table-active");
            }
          });
        } else {
          return false;
        }
      } else {
        Swal.fire({
          title: "Please select at least one checkbox",
          confirmButtonClass: "btn btn-info",
          buttonsStyling: false,
          showCloseButton: true,
        });
      }
    },
    addorder() {
      var orderId = document.getElementById('orderId').value;
      var customername = document.getElementById('customername').value;
      var productname = document.getElementById('productname').value;
      var orderdate = document.getElementById('orderdate').value;
      var amount = document.getElementById('amount').value;
      var payment = document.getElementById('payment').value;
      var delivered = document.getElementById('delivered').value;
      var statuscolor;
      if (delivered == 'Ожидает') {
        statuscolor = 'warning'
      } else if (delivered == 'На сборке') {
        statuscolor = 'secondary'
      } else if (delivered == 'Архив') {
        statuscolor = 'danger'
      } else if (delivered == 'Отменено') {
        statuscolor = 'info'
      } else if (delivered == 'Собрано') {
        statuscolor = 'success'
      } else {
        statuscolor = 'danger'
      }
      if (orderId != null && customername != null && productname != null && orderdate != null && amount != null &&
          payment != null && delivered != null) {
        var data = {
          id: 'x',
          orderId: "#MP2" + orderId,
          customer: customername,
          product: productname,
          orderDate: orderdate,
          amount: amount,
          payment: payment,
          status: delivered,
          statusClass: statuscolor,
        };
        this.orders.push(data)
        axios.post(`https://api-node.themesbrand.website/apps/order`, data)
            .then(() => {

            }).catch((er) => {
          console.log(er)
        });
      }
      document.getElementById('closemodal').click();
      document.getElementById("addform").reset();
    },
    SearchData() {
      this.resultQuery;
      // var isstatus = document.getElementById("idStatus").value;
      //   var payment = document.getElementById("idPayment").value;
    },
    changecategory(data) {
      this.statuscategory = data;
    }
  },
};
</script>

<template>
  <Layout>
    <!--    <PageHeader :title="title" :items="items"/>-->
    <div class="row">
      <div class="col-lg-12">
        <div class="card" id="orderList">
          <div class="card-header border-0">
            <div class="d-flex align-items-center">
              <h5 class="card-title mb-0 flex-grow-1">{{ $t('t-order-history') }}</h5>
              <div class="flex-shrink-0">
                <button v-if="false" class="btn btn-soft-danger me-1" @click="deleteMultiple">
                  <i class="ri-delete-bin-2-line"></i>
                </button>
                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn"
                        data-bs-target="#showModal">
                  <i class="ri-add-line align-bottom me-1"></i> {{ $t('t-order-assembly') }}
                </button>
                <button type="button" class="btn btn-danger ms-1">
                  <i class="ri-delete-bin-2-line align-bottom me-1"></i> {{ $t('t-order-cancel') }}
                </button>
                <button v-if="false" type="button" class="btn btn-info ms-1">
                  <i class="ri-file-download-line align-bottom me-1"></i> Import
                </button>
              </div>
            </div>
          </div>
          <div class="card-body border border-dashed border-end-0 border-start-0">
            <form>
              <div class="row g-3">
                <div class="col-xxl-5 col-sm-6">
                  <div class="search-box">
                    <input type="text" class="form-control search" placeholder="Поиск..." v-model="searchQuery"/>
                    <!--Search for order ID, customer, order status or something!-->
                    <i class="ri-search-line search-icon"></i>
                  </div>
                </div>
                <!--end col-->
                <!--                <div class="col-xxl-2 col-sm-6">-->
                <!--                  <div>-->
                <!--                    <flat-pickr placeholder="Select date" v-model="date" :config="config"-->
                <!--                                class="form-control flatpickr-input" id="demo-datepicker"></flat-pickr>-->
                <!--                  </div>-->
                <!--                </div>-->
                <div class="col-xxl-2 col-sm-6">
                  <div>
                    <input type="date"
                           v-model="date" :config="config"
                           class="form-control"
                           id="exampleInputdate">
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-2 col-sm-4">
                  <div>
                    <Multiselect class="form-control" v-model="value" :close-on-select="true" :searchable="true"
                                 :create-option="true" @input="onChangePayment" :options="[
                        { value: '', label: 'Status' },
                        { value: 'All', label: 'All' },
                        { value: 'Ожидает', label: 'Ожидает' },
                        { value: 'На сборке', label: 'На сборке' },
                        { value: 'Архив', label: 'Архив' },
                        { value: 'Отменено', label: 'Отменено' },
                        { value: 'Returns', label: 'Returns' },
                        { value: 'Собрано', label: 'Собрано' },
                      ]"/>
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-2 col-sm-4">
                  <div>
                    <Multiselect class="form-control" v-model="value1" :close-on-select="true" :searchable="true"
                                 :create-option="true" @input="onChangeStatus" :options="[
                        { value: '', label: 'Select Payment' },
                        { value: 'All', label: 'All' },
                        { value: 'Mastercard', label: 'Mastercard' },
                        { value: 'Paypal', label: 'Paypal' },
                        { value: 'Visa', label: 'Visa' },
                        { value: 'COD', label: 'COD' },
                      ]"/>
                  </div>
                </div>
                <!--end col-->
                <div class="col-xxl-1 col-sm-4">
                  <div>
                    <button type="button" class="btn btn-primary w-100" @click="SearchData">
                      <i class="ri-equalizer-fill me-1 align-bottom"></i>
                      {{ $t('t-filter') }}
                    </button>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
          </div>
          <div class="card-body pt-0">
            <div>
              <ul class="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active All py-3" data-bs-toggle="tab" id="All" href="#home1" role="tab"
                     @click="changecategory('All')" aria-selected="true">
                    <i class="ri-store-2-fill me-1 align-bottom"></i> {{ $t('t-orders-status.all-orders') }}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link py-3 Assembling" data-bs-toggle="tab" id="Assembling" href="#assembling" role="tab"
                     @click="changecategory('Assembling')" aria-selected="false">
                    <i class="ri-checkbox-circle-line me-1 align-bottom"></i>
                    {{ $t('t-orders-status.assembling') }}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link py-3 Collected" data-bs-toggle="tab" id="Collected" href="#collected" role="tab"
                     @click="changecategory('Collected')" aria-selected="false">
                    <i class="ri-checkbox-circle-line me-1 align-bottom"></i>
                    {{ $t('t-orders-status.collected') }}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link py-3 Archive" data-bs-toggle="tab" id="Archive" href="#archive" role="tab"
                     @click="changecategory('Archive')" aria-selected="false">
                    <i class="ri-checkbox-circle-line me-1 align-bottom"></i>
                    {{ $t('t-orders-status.archive') }}
                  </a>
                </li>
                <li class="nav-item" v-if="false">
                  <a class="nav-link py-3 Собрано" data-bs-toggle="tab" id="Собрано" href="#delivered" role="tab"
                     @click="changecategory('Собрано')" aria-selected="false">
                    <i class="ri-checkbox-circle-line me-1 align-bottom"></i>
                    Собрано
                  </a>
                </li>
                <li class="nav-item" v-if="false">
                  <a class="nav-link py-3 Отменено" data-bs-toggle="tab" id="Отменено" href="#Отменено" role="tab"
                     @click="changecategory('Отменено')" aria-selected="false">
                    <i class="ri-truck-line me-1 align-bottom"></i> Отменено
                    <span class="badge bg-danger align-middle ms-1">2</span>
                  </a>
                </li>
                <li class="nav-item" v-if="false">
                  <a class="nav-link py-3 Returns" data-bs-toggle="tab" id="Returns" href="#returns" role="tab"
                     @click="changecategory('Returns')" aria-selected="false">
                    <i class="ri-arrow-left-right-fill me-1 align-bottom"></i>
                    Returns
                  </a>
                </li>
                <li class="nav-item" v-if="false">
                  <a class="nav-link py-3 Архив" data-bs-toggle="tab" id="Архив" href="#Архив" role="tab"
                     @click="changecategory('Архив')" aria-selected="false">
                    <i class="ri-close-circle-line me-1 align-bottom"></i>
                    Архив
                  </a>
                </li>
              </ul>
              <div class="table-responsive table-card mb-1">
                <table class="table table-nowrap align-middle table_sort" id="orderTable">
                  <thead class="text-muted table-light">
                  <tr class="text-uppercase">
                    <th scope="col" style="width: 25px">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="checkAll" value="option"/>
                      </div>
                    </th>
                    <th class="sort" data-sort="id">ID</th>
                    <th class="sort" data-sort="id">{{ $t('t-table-orders-sort.order-id') }}</th>
                    <th class="sort" data-sort="cabinet">{{ $t('t-table-orders-sort.cabinet') }}</th>
                    <th class="sort" data-sort="photo">{{ $t('t-table-orders-sort.photo') }}</th>
                    <th class="sort" data-sort="product_name'">{{ $t('t-table-orders-sort.product-name') }}</th>
                    <th class="sort" data-sort="color">{{ $t('t-table-orders-sort.color') }}</th>
                    <th class="sort" data-sort="size">{{ $t('t-table-orders-sort.size') }}</th>
                    <th class="sort" data-sort="barcode">{{ $t('t-table-orders-sort.barcode') }}</th>
                    <th class="sort" data-sort="amount">{{ $t('t-table-orders-sort.amount') }}</th>
                    <th class="sort" data-sort="warehouse">{{ $t('t-table-orders-sort.warehouse') }}</th>
                    <th class="sort" data-sort="created">{{ $t('t-table-orders-sort.created') }}</th>
                    <th class="sort" data-sort="deliver_during">{{ $t('t-table-orders-sort.deliver-during') }}</th>
                    <th class="sort" data-sort="time_since_order">{{ $t('t-table-orders-sort.time-since-order') }}</th>
                    <th class="sort" data-sort="status">{{ $t('t-table-orders-sort.delivery-status') }}</th>
                    <th class="sort" data-sort="action">{{ $t('t-table-orders-sort.action') }}</th>
                  </tr>
                  </thead>
                  <tbody class="list form-check-all" v-for="(data, index) of resultQuery" :key="index">
                  <tr v-if="statuscategory=='All' || statuscategory==data.status">
                    <!-- <div v-if="statuscategory=='All' || statuscategory==data.status"> -->
                    <th scope="row">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                      </div>
                    </th>
                    <td class="id">
                      <router-link to="/ecommerce/order-details" class="fw-medium link-primary">{{ data.orderId }}
                      </router-link>
                    </td>
                    <td class="product_name">{{ data.order_id }}</td>
                    <td class="customer_name">{{ data.cabinet }}</td>
                    <td class="customer_name">
                      <div class="d-flex align-items-center" v-if="data.img">
                        <img :src="data.img" alt="" class="avatar-xs rounded-circle me-2"/>
                      </div>
                    </td>
                    <td class="product_name">{{ data.product_name }}</td>
                    <td class="color">{{ data.color }}</td>
                    <td class="size">{{ data.size }}</td>
                    <td class="barcode">{{ data.barcode }}</td>
                    <td class="amount">{{ data.amount }}</td>
                    <td class="warehouse">{{ data.warehouse }}</td>
                    <td class="created">{{ data.created }}</td>
                    <td class="deliver_during">{{ data.deliver_during }}</td>
                    <td class="time_since_order">{{ data.time_since_order }}</td>
                    <td class="status">
                        <span class="badge text-uppercase" :class="{
                          'badge-soft-primary': data.status == 'На сборке',
                          'badge-soft-info': data.status == 'Отменено',
                          'badge-soft-success': data.status == 'Собрано',
                          'badge-soft-danger': data.status == 'Архив',
                          'badge-soft-secondary': data.status == 'Returns',
                          'badge-soft-warning': data.status == 'Ожидает',
                        }">{{ data.status }}</span>
                    </td>
                    <td>
                      <ul class="list-inline hstack gap-2 mb-0">
                        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
                            data-bs-placement="top" title="View">
                          <router-link to="/ecommerce/order-details" class="text-primary d-inline-block">
                            <i class="ri-eye-fill fs-16"></i>
                          </router-link>
                        </li>
                        <li v-if="false" class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover"
                            data-bs-placement="top" title="Edit">
                          <a class="text-primary d-inline-block edit-item-btn" data-bs-toggle="modal"
                             href="#EditModal" @click="editdata(data)">
                            <i class="ri-pencil-fill fs-16"></i>
                          </a>
                        </li>
                        <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover"
                            data-bs-placement="top" title="Remove">
                          <a class="text-danger d-inline-block remove-item-btn" @click="deletedata(data)">
                            <i class="bx bxs-x-circle fs-16"></i>
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div class="noresult" style="display: none">
                  <div class="text-center">
                    <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions"
                            :height="75" :width="75"/>
                    <h5 class="mt-2">Sorry! No Result Found</h5>
                    <p class="text-muted">
                      We've searched more than 150+ Orders We did not find any
                      orders for you search.
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end mt-3">
                <div class="pagination-wrap hstack gap-2">
                  <a class="page-item pagination-prev disabled" href="#" v-if="page != 1" @click="page--">
                    {{ $t('t-prev') }}
                  </a>
                  <ul class="pagination listjs-pagination mb-0">
                    <li v-for="(pageNumber, index) in pages.slice(
                        page - 1,
                        page + 5
                      )" :key="index" @click="page = pageNumber" :class="{
                              active: pageNumber == page,
                              disabled: pageNumber == '...',
                            }">
                      <a class="page" href="#">{{ pageNumber }}</a>
                    </li>
                  </ul>
                  <a class="page-item pagination-next" href="#" @click="page++" v-if="page < pages.length">
                    {{ $t('t-next') }}
                  </a>
                </div>
              </div>
            </div>
            <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header bg-light p-3">
                    <h5 class="modal-title" id="exampleModalLabel">Add Order</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            id="close-modal"></button>
                  </div>
                  <form action="#" id="addform">
                    <div class="modal-body">
                      <input type="hidden" id="id-field"/>

                      <div class="mb-3" id="modal-id">
                        <label for="orderId" class="form-label">ID</label>
                        <input type="text" pattern="\d*" id="orderId" class="form-control" placeholder="ID"
                               maxlength="3"/>
                      </div>

                      <div class="mb-3">
                        <label for="customername-field" class="form-label">Customer Name</label>
                        <input type="text" id="customername" class="form-control" placeholder="Enter Name" required/>
                      </div>

                      <div class="mb-3">
                        <label for="productname" class="form-label">Product</label>
                        <select class="form-control" data-trigger name="productname-field" id="productname">
                          <option value="">Product</option>
                          <option value="Puma Tshirt">Puma Tshirt</option>
                          <option value="Adidas Sneakers">
                            Adidas Sneakers
                          </option>
                          <option value="350 ml Glass Grocery Container">
                            350 ml Glass Grocery Container
                          </option>
                          <option value="American egale outfitters Shirt">
                            American egale outfitters Shirt
                          </option>
                          <option value="Galaxy Watch4">Galaxy Watch4</option>
                          <option value="Apple iPhone 12">
                            Apple iPhone 12
                          </option>
                          <option value="Funky Prints T-shirt">
                            Funky Prints T-shirt
                          </option>
                          <option value="USB Flash Drive Personalized with 3D Print">
                            USB Flash Drive Personalized with 3D Print
                          </option>
                          <option value="Oxford Button-Down Shirt">
                            Oxford Button-Down Shirt
                          </option>
                          <option value="Classic Short Sleeve Shirt">
                            Classic Short Sleeve Shirt
                          </option>
                          <option value="Half Sleeve T-Shirts (Blue)">
                            Half Sleeve T-Shirts (Blue)
                          </option>
                          <option value="Noise Evolve Smartwatch">
                            Noise Evolve Smartwatch
                          </option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="date-field" class="form-label">Order Date</label>
                        <flat-pickr placeholder="Выберите дату" v-model="date2" :config="timeConfig"
                                    class="form-control flatpickr-input" id="orderdate"></flat-pickr>
                      </div>

                      <div class="row gy-4 mb-3">
                        <div class="col-md-6">
                          <div>
                            <label for="amount-field" class="form-label">Amount</label>
                            <input type="text" id="amount" class="form-control" placeholder="Total amount" required/>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div>
                            <label for="payment-field" class="form-label">Payment Method</label>
                            <select class="form-control" data-trigger name="payment-method" id="payment">
                              <option value="">Payment Method</option>
                              <option value="Mastercard">Mastercard</option>
                              <option value="Visa">Visa</option>
                              <option value="COD">COD</option>
                              <option value="Paypal">Paypal</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="delivered-status" class="form-label">{{
                            $t('t-table-orders-sort.delivery-status')
                          }}</label>
                        <select class="form-control" data-trigger name="delivered-status" id="delivered">
                          <option value="">{{ $t('t-table-orders-sort.delivery-status') }}</option>
                          <option value="Ожидает">Ожидает</option>
                          <option value="На сборке">На сборке</option>
                          <option value="Архив">Архив</option>
                          <option value="Отменено">Отменено</option>
                          <option value="Собрано">Собрано</option>
                          <option value="Returns">Returns</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="hstack gap-2 justify-content-end">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" id="closemodal">
                          Close
                        </button>
                        <button type="button" class="btn btn-success" id="add-btn" @click="addorder">
                          Add Order
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="exampleModalLabels"
                 aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header bg-light p-3">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Order</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            id="close-modal"></button>
                  </div>
                  <form action="#" id="editform">
                    <div class="modal-body">
                      <input type="hidden" id="id-field"/>

                      <div class="mb-3" id="modal-id">
                        <label for="orderId" class="form-label">ID</label>
                        <input type="text" pattern="\d*" id="edtorderId" class="form-control" placeholder="ID"
                               maxlength="3" readonly/>
                      </div>

                      <div class="mb-3">
                        <label for="edtcustomername" class="form-label">Customer Name</label>
                        <input type="text" id="edtcustomername" class="form-control" placeholder="Enter Name"
                               required/>
                      </div>

                      <div class="mb-3">
                        <label for="productname" class="form-label">Product</label>
                        <select class="form-control" data-trigger name="productname-field" id="edtproductname">
                          <option value="">Product</option>
                          <option value="Puma Tshirt">Puma Tshirt</option>
                          <option value="Adidas Sneakers">
                            Adidas Sneakers
                          </option>
                          <option value="350 ml Glass Grocery Container">
                            350 ml Glass Grocery Container
                          </option>
                          <option value="American egale outfitters Shirt">
                            American egale outfitters Shirt
                          </option>
                          <option value="Galaxy Watch4">Galaxy Watch4</option>
                          <option value="Apple iPhone 12">
                            Apple iPhone 12
                          </option>
                          <option value="Funky Prints T-shirt">
                            Funky Prints T-shirt
                          </option>
                          <option value="USB Flash Drive Personalized with 3D Print">
                            USB Flash Drive Personalized with 3D Print
                          </option>
                          <option value="Oxford Button-Down Shirt">
                            Oxford Button-Down Shirt
                          </option>
                          <option value="Classic Short Sleeve Shirt">
                            Classic Short Sleeve Shirt
                          </option>
                          <option value="Half Sleeve T-Shirts (Blue)">
                            Half Sleeve T-Shirts (Blue)
                          </option>
                          <option value="Noise Evolve Smartwatch">
                            Noise Evolve Smartwatch
                          </option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="edtorderdate" class="form-label">Order Date</label>
                        <flat-pickr placeholder="Select date" v-model="date2" :config="timeConfig"
                                    class="form-control flatpickr-input" id="edtorderdate"></flat-pickr>
                      </div>

                      <div class="row gy-4 mb-3">
                        <div class="col-md-6">
                          <div>
                            <label for="edtamount" class="form-label">Amount</label>
                            <input type="text" id="edtamount" class="form-control" placeholder="Total amount"
                                   required/>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div>
                            <label for="edtpayment" class="form-label">Payment Method</label>
                            <select class="form-control" data-trigger name="payment-method" id="edtpayment">
                              <option value="">Payment Method</option>
                              <option value="Mastercard">Mastercard</option>
                              <option value="Visa">Visa</option>
                              <option value="COD">COD</option>
                              <option value="Paypal">Paypal</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="edtdelivered" class="form-label">{{
                            $t('t-table-orders-sort.delivery-status')
                          }}</label>
                        <select class="form-control" data-trigger name="delivered-status" id="edtdelivered">
                          <option value="">{{ $t('t-table-orders-sort.delivery-status') }}</option>
                          <option value="Ожидает">Ожидает</option>
                          <option value="На сборке">На сборке</option>
                          <option value="Архив">Архив</option>
                          <option value="Отменено">Отменено</option>
                          <option value="Собрано">Собрано</option>
                          <option value="Returns">Returns</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="hstack gap-2 justify-content-end">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal" id="edtclosemodal">
                          Close
                        </button>
                        <button type="button" class="btn btn-success" id="add-btn" @click="updateorder">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Modal -->
            <div class="modal fade flip" id="deleteOrder" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body p-5 text-center">
                    <lottie class="avatar-xl" colors="primary:#121331,secondary:#08a88a" :options="defaultOptions"
                            :height="90" :width="90"/>
                    <div class="mt-4 text-center">
                      <h4>You are about to delete a order ?</h4>
                      <p class="text-muted fs-15 mb-4">
                        Deleting your order will remove all of your information
                        from our database.
                      </p>
                      <div class="hstack gap-2 justify-content-center remove">
                        <button class="btn btn-link link-success fw-medium text-decoration-none"
                                data-bs-dismiss="modal">
                          <i class="ri-close-line me-1 align-middle"></i> Close
                        </button>
                        <button class="btn btn-danger" id="delete-record">
                          Yes, Delete It
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--end modal -->
          </div>
        </div>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </Layout>
</template>
