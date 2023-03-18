/* eslint-disable */
<template>
  <div id="app">
    <h2>SF Area Surf Reports</h2>
    <div>
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
h2 {
  text-align: center;
}
</style>
