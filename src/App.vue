<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<style scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

router-view {
  flex: 1;
  padding-top: 60px;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #f5f5f5;
}
</style>
