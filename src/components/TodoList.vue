'<template>
  <div>
      <h1>Todo List</h1>
      <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo">

      </todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import {mapState} from "vuex"
export default {
     components:{
      TodoItem
     }
     ,
     computed:{
        //  todos(){
        //      return this.$store.state.todos
        //  }
        // subtituded with down
        ...mapState({
            todos:"todos"
        })


     }

}
</script>

<style>

</style>'