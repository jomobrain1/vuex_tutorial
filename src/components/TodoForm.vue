'<template>
  <div>
      <h1>TodoForm</h1>
      <input type="text" v-model="newTodoItem"> <br>
      <button @click="addNewTodoItem" >submit</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newTodoItem:""
        }
    },
    methods:{
        addNewTodoItem(){
            return this.$store.dispatch('newTodo', this.newTodoItem)
        }
    }

}
</script>

<style>

</style>'