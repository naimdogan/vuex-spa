<template>
  <div class="container">
    <h1>Vuex Notları</h1>
    <h4>Vuex Nedir</h4>
    <p>Vuex store'ları reaktiftir. Vue bileşenleri store'dan durumu aldığında, store durumu değişirse, etkin ve verimli bir şekilde güncellenir.</p>
    <p>Store durumunu doğrudan değiştiremezsiniz. Bir store'un durumunu değiştirmenin tek yolu, mutations ile yapmaktır.</p>
    <ul>
      <li>
        <h4>Kurulum:</h4>
      </li>
      <li>NPM: npm install vuex --save</li>
      <li>CDN: https://unpkg.com/vuex@2.0.0</li>
      <li>
        <h4>Vuex import:</h4>
      </li>
      <li>import Vue from 'vue'
        <br>import Vuex from 'vuex'
        <br>Vue.use(Vuex);
      </li>
      <li>
        <h4>State:</h4>
      </li>
      <li>
        Değişkenleri ve bu değişkenlere bağlı değerleri barındırdığımız alandır. Vue'de ki
        <strong>data: {}</strong> alanı ile benzerdir.
        <br>State'lere DOM'dan
        <strong>"$store.state.message"</strong> ile erişiriz.
      </li>
      <li>
        <h4>Getters:</h4>
      </li>
      <li>
        İçerisinde bulunan “Get” karakterlerinden de anlaşılabileceği gibi herhangi bir veri grubunu çekebilmek için getters’ı kullanırız. Kendisi object tipindedir ve içerisine fonksiyonlar yazarız. Bu fonksiyonlar kendi içerisinde return ile bize istediğimiz değeri gönderir.
        Getters’ı component içerisinde kullanmak için fonksiyonu oluşturduktan sonra
        <strong>this.$store.getters.firstMessage</strong> şeklinde çağırabiliriz.
      </li>
      <li>
        <h4>Mutations:</h4>
      </li>
      <li>Mutasyonun kelime anlamında olduğu gibi değişim anında kullanılır.
        <br>State içerisindeki bir değeri değiştirmek istediğimizde mutations objesi içerisindeki bir fonksiyonu çalıştırırız.
        <br>Mutations altındaki bir fonksiyonu çalıştırmak için ‘commit’ kullanırız.
      </li>
      <li>
        <h4>Actions:</h4>
      </li>
      <li>
        Örneğin bir web servis üzerinden veri okunması, okunan verinin store içerisinde bir alana yönlendirilerek değişimin sağlanması, ayrıca getters altından bir fonksiyon yardımı ile verilerin alınması gibi kompleks bir işlem yapmak istediğimizde mutation yerine action kullanırız.
        Actions altından
        <strong>context.commit</strong> ile mutation fonksiyonuna erişebildiğimiz gibi
        <strong>context.state</strong> ve
        <strong>context.getters</strong> ile state ve getters altındaki fonksiyonlara da erişerek store’un tamamında asenkron olarak etkin olabiliriz.
        Dispatch komutu ile birlikte kullanırız. Örneğin;
        <strong>this.$store.dispatch("getProducts")</strong> komutu mutations altındaki getProducts fonksiyonunu çalıştırır.
      </li>
      <li>
        <h4>Modules:</h4>
      </li>
      <li>
        Vuex genel olarak tek bir store altından yönetim yapar. Büyük bir projede vuex kullanımı yapacaksak tek bir store altında yönetim karmaşık bir yapıyı doğurabilir.
        İşte bu karmaşıklığın önüne geçmek için ‘Modules’ var. Modules ile birden fazla değişken oluşturup her değişkenin içerisinde kendine ait
        <strong>state,getters,mutations,actions</strong> oluşturabiliriz.
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
