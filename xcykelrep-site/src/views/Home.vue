<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"; export default { name:
"Home", components: { HelloWorld } };
</script>

<style>
.home {
  margin-top: 110px;
  margin-bottom: 200px;
}
</style>