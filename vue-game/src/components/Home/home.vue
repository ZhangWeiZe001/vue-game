<template>
    <h1 id="title">游戏选择</h1>
    <div id="main">
        <div id="game">
           1.<router-link to="DiShu">打地鼠</router-link> 
        </div>
        
        <!-- 斗兽棋 -->
        <div id="game">
           2.<router-link to="DouShou">斗兽棋</router-link> 
        </div>
    </div>
</template>

<script>
import top from '@/general/top.vue'

import {ref,reactive,toRefs} from 'vue'
import axios from 'axios'
export default {
name:'Home',
components:{top},
setup(){
    
}
}
</script>

<style scoped>
#main{
    margin:15px 10%;
    border: 1px solid black;
    height: 550px;
}

#title{
    margin-top: 15px;
    text-align: center;
}

#game{
    margin-top: 15px;
    text-align: center;
    width: 20%;
    line-height: 50px;
    font-size: 20px;
    float: left;
    /* cursor:pointer; */
}

#game>a:hover{
    color: #bfc
}
</style>