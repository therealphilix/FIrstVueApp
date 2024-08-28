<template>
  <div class="product-list-container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import EventService from "@/services/EventService";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    EventService.getProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log("There was an error:" + error.response);
      });
  },
};
</script>

<style scoped>
.product-list-container {
  margin-top: 80px; /* Add margin to separate from the navbar */
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
