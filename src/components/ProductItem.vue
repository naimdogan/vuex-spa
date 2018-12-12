<template>
  <div>
    <div class="row" v-for="item in products" :key="item.id">
      <div class="col-2">
        <img height="150" :src="item.Image" class="rounded float-left" alt="...">
      </div>
      <div class="col-10 text-left">
        <h5 class="card-title">{{ item.DisplayName }}</h5>
        <span>{{item.Brand}}</span>
        <p class="card-text">
          Adet: {{ item.Quantity }}, Beden: {{ item.Size }},
          Renk: {{ item.Color }}
        </p>
        <strong>{{ item.OriginalPrice }}</strong>
        <strong>{{ item.SalePrice }}</strong>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    products: Array
  }
};
</script>
<style scoped>
</style>
