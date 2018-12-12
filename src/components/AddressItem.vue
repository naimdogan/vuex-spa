<template>
  <div class="hello">
    <ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddressItem",
  props: {
    msg: String
  }
};
</script>
<style scoped>
</style>
