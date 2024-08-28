<template>
  <div class="product-item">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price | currency }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
// import { EventBus } from "@/services/EventBus";
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
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
.product-item {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  transition: box-shadow 0.3s, transform 0.3s ease;
}

.product-item:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  max-height: 250px; /* Increase max-height to make images bigger */
  border-radius: 8px;
}

.product-item h3 {
  margin: 20px 0 10px;
  font-size: 20px; /* Increase font size */
  color: #333;
}

.product-item p {
  margin: 0 0 15px;
  font-size: 18px; /* Increase font size */
  color: #666;
  font-family: "Montserrat", sans-serif;
}

.product-item button {
  padding: 12px 20px; /* Increase padding for bigger button */
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* Increase font size for button text */
  transition: background-color 0.3s;
}

.product-item button:hover {
  background-color: #218838;
}
</style>
