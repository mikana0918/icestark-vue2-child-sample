<template>
  <div id="root">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style>
#root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
