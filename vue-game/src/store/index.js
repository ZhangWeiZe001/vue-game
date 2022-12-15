//该文件用于创建 vuex 核心 store

//引入 Vue 

//引入vuex
import {createStore} from 'vuex'


import personOptions from './personOptions.js';
import countOptions from './countOptions.js';
import a from './a.js'

//创建 stroe
//同时向外暴露 store
export default  createStore({
   modules:{
    countAbout:countOptions,
    personAbout:personOptions,
    a:a,
   }
});
