<template>
  <div id="app">
    <div id="cover"></div>
    <RouterLink to="/todo">Todo</RouterLink>
    <RouterLink to="/css">CSS</RouterLink>
    <RouterView></RouterView>
        
    <!-- <Header></Header> -->
    <!-- <ToDo></ToDo>     -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import { RouterLink ,RouterView} from 'vue-router';

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.2;
    z-index: -1;

  }
}
</style>
