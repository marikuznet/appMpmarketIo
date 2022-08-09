<script>
import "@vueform/multiselect/themes/default.css";
import "flatpickr/dist/flatpickr.css";
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import OrdersTable from "@/views/apps/ecommerce/orders-table.vue";

export default {
  page: {
    title: "Orders",
    meta: [{
      name: "description",
      content: appConfig.description,
    },],
  },
  components: {
    Layout,
    OrdersTable
  },
};
</script>

<template>
  <Layout>
    <!--    <PageHeader :title="title" :items="items"/>-->
    <div class="row">
      <div class="col-lg-12">
        <OrdersTable></OrdersTable>
      </div>
      <!--end col-->
    </div>
    <!--end row-->
  </Layout>
</template>
