<template>
  <div class="container">
    这里是home页面
    {{useStore.count}}
  </div>
</template>

<script setup>
import useHome from '@/stores/home'
const useStore= useHome()
</script >
