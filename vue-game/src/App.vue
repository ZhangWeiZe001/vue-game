<template>
  <top></top>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>

//老三样
import {nextTick,ref,provide} from 'vue';
import { useRouter } from 'vue-router';

import top from './general/top.vue';

export default {
  components: { top },
  name: "app",
}

</script>

<style>

</style>
