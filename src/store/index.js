import { createStore } from 'vuex'

export default createStore({
  state: { 
      todos:[
           {
            
            "title": "hello brain you are a winner",
            completed: false
            },
            {
            "title": "working hard",
            completed:false           
       
            },
            {
                "title": "sunt aut facere repellat provided",
                 completed: false
            },
            {
                "title": "am a goog person",
               completed: false
            
            }
      ]   
    
  },
  actions:{
    newTodo({commit},todoItem){
          commit('NEW_TODO',todoItem)

      },
      delTodo({commit},todoItem){
        commit('DEL_TODO',todoItem)

    },
    toggleTodo({commit},todoItem){
        commit('TOGGLE_TODO',todoItem)
    },

  },
 
  mutations: {
      NEW_TODO(state,todoItem){
          state.todos.push({
              title:todoItem,
              completed:false

          })


      },
      DEL_TODO(state,todoItem){
          let index=state.todos.indexOf(todoItem)
          state.todos.splice(index,1)

      },
      TOGGLE_TODO(state,todoItem){
          todoItem.completed=!todoItem.completed

      }
  
    },
    getters:{
        completedTodos(state){
            return state.todos.filter(todo=>{
                return todo.completed==true
            }).length
        },
        pendingTodos(state){
            return state.todos.filter(todo=>{
                return todo.completed==false
            }).length
        }

    }
  
  
 
})
