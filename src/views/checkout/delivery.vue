<template>
  <div class="cart">
    
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h3>Teslimat</h3>
             <hr>
          <AddressItem msg="Address Item"/>
          <hr>
          <h3 class="mt-30">Sepet Özeti</h3>
           <hr>
          <ProductItem :products="products"/>
        </div>
        <div class="col-4">
          <OrderSummary :summary-item="getSummary"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters} from "vuex";
import AddressItem from "@/components/AddressItem.vue";
import ProductItem from "@/components/ProductItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  name: "delivery",
  components: {
    AddressItem,
    OrderSummary,
    ProductItem
  },
  computed: {
    ...mapGetters(["products", "getSummary"])
  }
};
</script>
