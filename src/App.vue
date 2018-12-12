<template>
  <div id="app">
    <div class="container">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link" to="/">ANASAYFA</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">NOTLAR</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">SEPETİM</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/delivery">TESLİMAT</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/order">ÖDEME</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {margin-bottom: 30px; border-bottom: solid 1px #ddd; padding-bottom: 20px;}
</style>
