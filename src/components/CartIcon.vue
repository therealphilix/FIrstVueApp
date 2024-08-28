<template>
  <div>
    <div class="cart-container">
      <img src="../assets/cart.svg" alt="Shopping Cart" class="cart-icon" />
      <span class="cart-count">{{ cartCount }}</span>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "@/services/EventBus";
export default {
  data() {
    return {};
  },
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
};
</script>

<style scoped>
.cart-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 70px; /* Add some margin to keep it away from the edge */
}

.cart-icon {
  width: 30px;
  height: 30px;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #39b982;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
}
</style>
