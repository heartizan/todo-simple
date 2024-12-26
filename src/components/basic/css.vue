<template>
 <div>
  <div class="father">
    <span>我是父元素</span>
    <div class="son">我是子元素</div>
  </div>

 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="scss" scoped>
  .father{
    width: 500px;
    height: 800px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .son{
    width: 200px;
    height: 200px;    
  }

 
</style>
