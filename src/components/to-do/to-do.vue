<template>
  <section class="todo-list">    
    <input
      type="text"
      class="add-todo"
      autofocus="autofocus"
      placeholder="想干啥呀？"
      @keyup.enter="addToDo"
    />
    <Item
      :key="todo.id"
      v-for="todo in filterTodos"
      :todo="todo"
      @del="deleteToDo"
    ></Item>
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggleFilter="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    ></Tabs>
    <Footer></Footer>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
import Footer from "./footer";

let id = 0;
export default {
  components: {
    Item,
    Tabs,
    Footer,
  },
  data() {
    return {
      todos: [],
      filter: "all",
    };
  },
  computed: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter((todo) => completed === todo.completed);
    },
  },

  methods: {
    addToDo(e) {
      // console.log('输入值为:',e.target.value.trim());
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false,
      });
      e.target.value = "";
    },
    deleteToDo(id) {
      this.todos.splice(
        this.todos.findIndex((todo) => todo.id === id),
        1
      );
    },
    toggleFilter(status) {
      this.filter = status;
    },
    clearAllCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
.add-todo {
  width: 100%;
  position: relative;
  margin: 0;
  padding: 16px 16px 16px 36px;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  // font-smoothing: antialiased;
}
</style>
