<template>
  <div class="container">
    <button @click="toHome">去home</button>
    <h2>{{useStore.personal.name}}</h2>
    <button @click="addAge">年龄增加</button>
    <h2>{{useStore.personal.age}}</h2>
    <h2>{{personal.age}}</h2>
    <h2>{{count}}</h2>
    <button @click="resetCount">重置</button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useHome from '@/stores/home'
// import { toRefs } from 'vue-demi';
import { storeToRefs } from 'pinia';
const useStore = useHome()
// const { personal, count } = useStore
// const { personal, count } = toRefs (useStore)
const { personal, count } = storeToRefs (useStore)
const router = useRouter()
function toHome(){
  router.push('/home')
}
// 增加年龄
function addAge(){
  useStore.personal.age++
  useStore.count++
}
function resetCount(){
  useStore.$reset()
}
</script >
