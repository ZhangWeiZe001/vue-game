import {createRouter,createWebHashHistory} from 'vue-router'

const routes= [
  {
   path:'/',
   component:()=> import('@/components/homePage/homePage.vue')
  }
]

const router = new createRouter({
    mode:'hash',
    //createWebHashHistory 使用这个表示 hash方式
    //createWebHistory 表示 History 模式
    history:createWebHashHistory(),
    routes,
})

export default router