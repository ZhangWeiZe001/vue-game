<template>
    <div id="main">
      <pan></pan>
      <zi top="130px" left="5px" ziName="虎"></zi>
    </div>
</template>

<script>
import pan from './Pan/pan'
import zi from './zi/zi.vue'
export default {
components:{pan,zi},
name:'Main'
}
</script>

<style scoped>
 #main{
    position:absolute;
    left: 35%;
    top:80px
}
</style>