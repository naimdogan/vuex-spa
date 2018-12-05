import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const api = "http://www.mocky.io/v2/5c054f493300006e00e8120a"; //"https://my-json-server.typicode.com/naimdogan/product/db";

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    //mutations işleminden sonra istediğimiz dataları getters ile alıyoruz.
    getSummary: state => {
       return state.products.OrderSummary;
     },
     products: state => {
      return state.products.Products;
    }
  },
  mutations: {
    //product array'ımızı mutasyona uğratarak içine apiden gelen datayı dolduruyoruz.
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    //axios ile api'den gelen datayı çekiyoruz. ve mutations'a commit ile gönderiyoruz.
    getProducts({ commit }) {
      axios.get(api).then(response => {
        commit("SET_PRODUCTS", response.data);
      });
    }
  }
});
