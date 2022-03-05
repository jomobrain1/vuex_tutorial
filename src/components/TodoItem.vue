'<template>
  <div :class="{completed:todo.completed}" @click="toggleTodo(todo)">
      {{todo.title}}
      <button @click="delTodo(todo)">delete</button>

  </div>
</template>

<script>
 import { mapActions} from "vuex"
export default {
    props:["todo"],
    methods:{
        // deleteTodo(){
        //     return this.$store.dispatch("delTodo",this.todo)
        // },
        // toggleTodoStatus(){
        //      return this.$store.dispatch("toggleTodo",this.todo)
        //no (todo) in templates methods

        // }
        ...mapActions({
            toggleTodo:'toggleTodo',
            delTodo:'delTodo'
        })
        
    }

}
</script>

<style scoped>
.completed{
    text-decoration: line-through;
}

</style>'