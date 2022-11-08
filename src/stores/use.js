import {defineStore} from 'pinia'
const useUser =defineStore('user',{
  state:()=>({
    personalbar:'江苏',
    adress:'安徽'
  })
})
export default useUser