import {createRouter,createWebHistory} from 'vue-router'
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/home',
      component: () => import("../view/HomePage.vue")
    },
    {
      path:'/about',
      component:() => import("../view/AboutPage")
    }
  ]
})
export default router