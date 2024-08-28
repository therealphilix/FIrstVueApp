import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  getters: {
    cartCount: (state) => state.cart.length,
    cartItems: (state) => state.cart,
    cartTotal: (state) =>
      state.cart.reduce((total, product) => total + product.price, 0),
  },
  actions: {},
  modules: {},
});
