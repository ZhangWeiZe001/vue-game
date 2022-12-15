<template>
  <div id="top">
   <router-link to="/" id="name">张氏娱乐网</router-link>
  </div>
</template>

<script>
  //引入需要使用的配置
  import {reactive,toRefs,ref,inject} from 'vue';
  import {useStore} from 'vuex'
  import { useRouter } from 'vue-router';
  
export default {
 name:'Top',
 
}
</script>

<style scoped>
#top{
  line-height: 50px;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 0 80px;
}

#name{
  color: white;
}

#right{
  float:right
}
#right>a{
  color: white;
  font-size: 16px;
}
#right>span{
  margin-right: 15px;
  color: rgb(255, 255, 255);
  font-size: 16px;
}
#user{
  color: blue;
  margin-left: 10px;
}
</style>