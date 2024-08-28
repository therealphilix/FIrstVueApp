<template>
  <div class="cart-list-container">
    <h1>Cart({{ cartItems.length }})</h1>
    <div v-if="cartItems.length > 0" class="product-list-container">
      <CartCard
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cartItem="cartItem"
      />
      <div>
        <h2>Total: {{ cartTotal | currency }}</h2>
      </div>
    </div>
    <div v-else>
      <h3>Your cart is empty</h3>
    </div>
    <button @click="clearCart">Clear Cart</button>
  </div>
</template>

<script>
// import { EventBus } from "@/services/EventBus";
import CartCard from "@/components/CartCard.vue";

export default {
  components: {
    CartCard,
  },
  data() {
    return {};
  },
  methods: {
    clearCart() {
      this.$store.commit("CLEAR_CART");
    },
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  filters: {
    currency(value) {
      return `₦${value.toLocaleString()}`;
    },
  },
};
</script>

<style scoped>
.cart-list-container {
  padding-top: 50px; /* Adjust this value based on your navbar height */
}
h1,
h2 {
  font-family: "Montserrat", sans-serif;
}
.product-list-container {
  margin-top: 80px; /* Add margin to separate from the navbar */
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.cart-list-container button {
  padding: 12px 20px; /* Increase padding for bigger button */
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Increase font size for button text */
  transition: background-color 0.3s;
}
.cart-list-container button:hover {
  background-color: #218838;
}

@media (max-width: 768px) {
  .product-list-container {
    grid-template-columns: repeat(2, 1fr); /* Adjust grid for smaller screens */
  }
}

@media (max-width: 480px) {
  .product-list-container {
    grid-template-columns: 1fr; /* Single column on very small screens */
  }
}
</style>
