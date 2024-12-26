<template>
 <div :class="['todo-item',todo.completed?'completed':'']">
  <input 
    :title="todo.completed?'待办已完成':'完成待办'"
    type="checkbox" 
    :class="['toggle',todo.completed?'show-toggle':'']"
    v-model="todo.completed"    
  >
  <label>{{ todo.content }}</label>
  <button title="删除待办" class="delete-todo" @click="deleteTodo"></button>
 </div>
</template>

<script>
 export default {
   props:{
    todo:{
      type:Object,
      require:true
    }
   },
    methods: {
        deleteTodo(){
            this.$emit('del',this.todo.id)
        }
    }
 }
</script>

<style lang="scss" scoped>
  .todo-item{
    position: relative;
    line-height: 45px;
    background-color: #fff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    &:hover{
      .toggle{
        display: block;
      }
      .delete-todo::after{
        content:'x'
      }
    }
    .lable{
      white-space: pre-line;
      word-break: break-all;
      padding: 15px 60px 15px 15px;
      margin-left: 45px;
      display: block;
      line-height: 1.2;
      transition: color 0.4s;
    }
    &.completed{
        label{
          color:#d9d9d9;
          text-decoration: line-through;
        }
                

      }
  }

  .toggle{    
    width: 50px;
    height: 30px;
    position: absolute;
    left: 35px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    outline: none;
    display: none;
    &:after{
      content: url('/src/assets/images/checked.svg');
    }
    &:checked:after{
      content: url('/src/assets/images/checked.svg');

    }
  }
  .show-toggle{
    display: block;
  }

  .delete-todo{
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    margin-top: 3px;
    margin-bottom: 11px;
    font-size: 30px;
    color: #cc9a9a;    
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none ;
  }
        
 
</style>
