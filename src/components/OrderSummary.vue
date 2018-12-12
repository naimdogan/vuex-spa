<template>
  <div class="hello">
    <h3>Sipariş Özeti</h3>
    <hr>
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
         Kargo: 
        <span class="badge badge-primary badge-pill">{{summaryItems.CargoAmount}}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
         İndirim Tutarı: 
        <span class="badge badge-primary badge-pill">{{summaryItems.DiscountAmount}}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
         Kupon İndirimi: 
        <span class="badge badge-primary badge-pill">{{summaryItems.CouponDiscountAmount}}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
         Genel Toplam: 
        <span class="badge badge-primary badge-pill">{{summaryItems.GeneralTotalAmount}}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
         Toplam Tutar: 
        <span class="badge badge-primary badge-pill">{{summaryItems.TotalAmount}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    summaryItem: Object
  },
  computed: {
    summaryItems() {
      return this.summaryItem || {};
    }
  }
};
</script>
<style scoped>
</style>
