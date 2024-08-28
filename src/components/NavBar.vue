<template>
  <header id="nav" class="nav">
    <router-link to="/" class="brand">Phlex Apple Store</router-link>
    <nav>
      <router-link :to="{ name: 'cart-list' }">
        <CartIcon />
      </router-link>
    </nav>
  </header>
</template>

<script>
import CartIcon from "./CartIcon.vue";

export default {
  name: "NavBar",
  components: {
    CartIcon,
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Add padding to left and right to create space */
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav-items {
  display: flex;
  align-items: center;
  margin-right: 50px; /* Add margin to prevent overflow */
}
</style>
