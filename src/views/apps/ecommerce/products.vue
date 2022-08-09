<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import "@vueform/multiselect/themes/default.css";
import ProductTable from "@/views/apps/ecommerce/product-table.vue";

export default {
  page: {
    title: "Products",
    meta: [{
      name: "description",
      content: appConfig.description,
    },],
  },
  components: {
    Layout,
    ProductTable
  },
};
</script>

<template>
  <Layout>
    <div>
      <ProductTable></ProductTable>
    </div>
  </Layout>
</template>