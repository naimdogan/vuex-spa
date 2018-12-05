<template>
  <div class="cart">
    <h1>Order Page</h1>
    <AddressItem msg="Address Item"/>
    <ProductItem :products="products"/>
    <OrderSummary :summary-item="getSummary"/>
  </div>
</template>
<script>
import { mapGetters} from "vuex";
import AddressItem from "@/components/AddressItem.vue";
import ProductItem from "@/components/ProductItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  name: "order",
  components: {
    AddressItem,
    ProductItem,
    OrderSummary
  },
  computed: {
    //
    ...mapGetters(["products", "getSummary"]),
    // products() {
    //   return this.$store.state.products.Products;
    // },
    // orderSummary() {
    //   return this.$store.state.products.OrderSummary;
    // }
  } 
};
</script>
