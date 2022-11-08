<template>
  <div class="container">
    <Home></Home>
    <About></About>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Home from "@/components/HomeModule.vue";
import About from "@/components/AboutModule.vue";
</script>

<style>
</style>
