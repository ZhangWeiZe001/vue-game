import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes= [
  //home(入口路由)
  {
    name:'home',
    path:'/',
    component:()=>import('@/components/Home/home.vue')
  },
  //DiShu(打地鼠游戏)
  {
    name:'DiShu',
    path:'/DiShu',
    component:()=>import('@/components/game/DiShu/main.vue')
  },
  //DouShou(斗兽棋)
  {
    name:'DouShou',
    path:'/DouShou',
    component:()=>import('@/components/game/DouShou/main.vue')
  }
]

const router = new createRouter({
    mode:'hash',
    //createWebHashHistory 使用这个表示 hash方式
    // history:createWebHashHistory(),

    //createWebHistory 表示 History 模式
    history:createWebHistory(),
    routes,
})

export default router