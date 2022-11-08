<template>
  <div class="container">
    <button @click="toAbout">去about</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function toAbout(){
  router.push('/about')
}
</script >
