import {defineStore} from 'pinia'
const useHome = defineStore('Home',{
  state : ()=>({
    personal:{
      name:'zhangsan',
      age:'13'
    },
    count:0
  })
})
export default useHome