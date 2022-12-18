<template>
  <div ref="zi" id="zi">
    <!-- 这里的name通过父元素传递过来 -->
    <span>{{name}}</span>
  </div>
</template>

<script>
import {ref,reactive,toRefs,onMounted} from 'vue'

export default {
name:'zi',
props:['top','left','ziName'],
setup(props,context){
  let zi = ref(null);
  let data = reactive({
    name:props.ziName
  })
  //需要在挂载后 才能找到 ref标签对应的元素
  onMounted(()=>{
    zi.value.style.top = props.top;
    zi.value.style.left = props.left;
    // document.getElementById('zi').style.top = '50px'
  })
  return{
    zi,
    ...toRefs(data),
  }
}
}


</script>

<style scoped>
div{
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius:50%;
    background-color: red;
    border:2px solid black
}
span{
    display: block;
    text-align: center;
    padding-top: 10px;
    font-size: 20px;
}
</style>