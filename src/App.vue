<template>
<section>
  <h3>completed==={{completedTodos}}</h3>
  <h1>pendiing===={{pendingTodos}}</h1>
<img alt="Vue logo" src="./assets/logo.png">

<todo-list></todo-list>
<todo-form></todo-form>

   

</section>
  
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from "./components/TodoList"
import {mapGetters} from "vuex"

export default {
  name: 'App',
  components:{
    TodoList,
    TodoForm

  },
  computed:{
    // completedTodos(){
    //   return this.$store.getters.completedTodos
    // },
    // pendingTodos(){
    //   return this.$store.getters.pendingTodos
    // }
    //replaced by dowN
    ...mapGetters({
      completedTodos:"completedTodos",
       pendingTodos:"pendingTodos"
    })
  }

  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
