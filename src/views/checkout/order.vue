<template>
  <div class="cart">
   
    <div class="container">
      <div class="row">
        <div class="col-8">
           <h3>Ödeme</h3>
           <hr>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Kart Numarası</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Kart Numarası"
              >
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="row">
            <div class="form-group col-4">
              <label for="exampleFormControlSelect1">Ay</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group col-4">
              <label for="exampleFormControlSelect1">Yıl</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group col-4">
              <label for="exampleInputPassword1">CVV</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">ÖDEME YAP</button>
          </form>
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
import { mapGetters } from "vuex";
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
