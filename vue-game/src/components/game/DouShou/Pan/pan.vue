<template>
   <!-- 第一行 兽穴行-->
   <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <trap></trap>
          <hole></hole>
          <trap></trap>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
        <!-- 第二行 陷阱行-->
        <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <trap></trap>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
        <!-- 第三行 普通行-->
        <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
        <!-- 第四行 小河行 -->
        <ul>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
        </ul>
        <!-- 第五行 小河行 -->
        <ul>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
        </ul>
         <!-- 第六行 小河行 -->
         <ul>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
          <creek></creek>
          <creek></creek>
          <commonCase></commonCase>
        </ul>
         <!-- 第七行 普通行-->
         <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
         <!-- 第八行 陷阱行-->
         <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <trap></trap>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
          <!-- 第一行 兽穴行-->
          <ul>
          <commonCase></commonCase>
          <commonCase></commonCase>
          <trap></trap>
          <hole></hole>
          <trap></trap>
          <commonCase></commonCase>
          <commonCase></commonCase>
        </ul>
</template>

<script>
import commonCase from './commonCase.vue'
import trap from './trap.vue'
import hole from './hole.vue'
import creek from './creek.vue'

import {ref,reactive,toRefs} from 'vue'

export default {
components:{commonCase,trap,hole, creek},
name:'Main'
}
</script>

<style>

</style>