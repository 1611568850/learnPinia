<template>
  <div class="container">
    这里是about页面
    <h2>{{userStore.personalbar}}</h2>
    <button @click="changeItem">修改信息</button>
    <button @click="restItem">还原信息</button>
  </div>
</template>

<script setup>
import useUser from '@/stores/use'
const userStore  = useUser()
function changeItem (){
  userStore.$patch({
    personalbar:'浙江',
    adress:'四川'
  })
}
// 一次性修改多个值
function restItem (){
 userStore.$reset() 
}

</script >
