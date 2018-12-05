<template>
  <div class="cart">
    <h1>Delivery Page</h1>
    <AddressItem msg="Address Item"/>
    <OrderSummary :summary-item="getSummary"/>
  </div>
</template>
<script>
import { mapGetters} from "vuex";
import AddressItem from "@/components/AddressItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  name: "delivery",
  components: {
    AddressItem,
    OrderSummary
  },
  computed: {
    ...mapGetters(["getSummary"])
  }
};
</script>
