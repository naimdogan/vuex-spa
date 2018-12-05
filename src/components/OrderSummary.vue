<template>
  <div class="hello">
    <h1>Sipariş Özeti</h1>
    Kargo: {{summaryItems.CargoAmount}} <br />
    İndirim Tutarı: {{summaryItems.DiscountAmount}} <br />
    Kupon İndirimi: {{summaryItems.CouponDiscountAmount}} <br />
    Genel Toplam: {{summaryItems.GeneralTotalAmount}} <br />
    Toplam Tutar: {{summaryItems.TotalAmount}} <br />
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    summaryItem: Object
  },
  computed: {
    summaryItems(){
      return this.summaryItem || {}
    }
  }
};
</script>
<style scoped>
</style>
