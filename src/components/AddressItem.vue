<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AddressItem",
  props: {
    msg: String
  }
};
</script>
<style scoped>
</style>
