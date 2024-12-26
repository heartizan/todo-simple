<template>
 <div class="filter-todo">
  <span class="left">{{ unfinishedTodoLength }}项未完成</span>
  <span class="status">
    <span 
      v-for="status in allStatus"
      :key="status.status"
      :class="[status.status,filter===status.status?'actived':'']"
      @click="toggleFilter(status)"
    >
      {{ status.label }}
    </span>
  </span>
  <span class="clear" @click="clearAllCompleted">清除已完成</span>
 </div>
</template>

<script>
 export default {
  props: {
    todos:{
      type:Array,
      required:true
    },
    filter:{
      type:String,
      required:true
    }
     
   },   
   computed:{
    unfinishedTodoLength(){
      return this.todos.filter(todo => !todo.completed).length;

    }
   },
   data () {
    return {
      allStatus:[
        {status:'all',label:'全部'},
        {status:'active',label:'未完成'},
        {status:'completed',label:'已完成'},
      ]      
    }
   },
   methods:{
    toggleFilter(status){      
      this.$emit('toggleFilter',status.status)
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    }

   }
 }
</script>

<style lang="scss" scoped>
  .filter-todo{
    font-weight: 100;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    line-height: 30px;
    background-color: #ffffff;
    font-size: 14px;
    // font-smoothing antialiased
  }
  .left, .clear, .tabs{
    padding: 0 10px;
  }
    
  .left .clear{
    width: 150px;
  }
      
  .left{
    text-align: center;
  }
      
  .clear{
    text-align: right;
      cursor: pointer;
  }

  .status{
    width: 200px;
    display: flex;
    justify-content: space-between;
    *{
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      border: 1px solid rgba(175,47,47,0);
      &.actived{
        border-color: rgba(175,47,47,0.4);
          border-radius: 5px;
      }
          
    }
        
  }
      

 
</style>
