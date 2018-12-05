<template>
  <div class="cart">
    <h1>Cart Page</h1>
    <div class="container">
      <div class="row">
        <div class="col-8">
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
import { mapGetters, mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default {
  name: "cart",
  components: {
    ProductItem,
    OrderSummary
  },
  computed: {
    //store.state.products değiştiğinde, hesaplanan özelliğin yeniden değerlendirilmesi ve ilişkili DOM güncellemelerinin tetiklenmesine neden olur.
    //map Getters olmadan kullanımı.
    // products () {
    //   return this.$store.state.products
    // }
    ...mapGetters(["products", "getSummary"])
  },
  methods: {
    //actions'da oluşturduğumuz function'lara mapActions ile istek yapıyoruz.
    ...mapActions(["getProducts"])
  },
  created() {
    //methods olarak tanımladığımız function'u çağırıyoruz.
    this.getProducts();
  }
};
</script>
