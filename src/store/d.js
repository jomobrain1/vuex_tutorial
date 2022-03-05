import { createStore } from 'vuex'
import axios from 'axios'
const url="https://jsonplaceholder.typicode.com/posts"
const headers={Accept:"application/json"}
export default createStore({
  state: {    
    currentJoke:"A joke from dadaz",
    allJokes:[]
  },
 
  mutations: {
    setCurrentJoke(state,payload){
      state.currentJoke=payload
      state.allJokes.push(payload)
    }

   
   
  },
  getters: {
    getCurrentJoke(state){
      return state.currentJoke

    }
    // getCurrentJoke:state=>state.allJokes.joke


  },
  actions: {
     //asynchronous information goes here
     async setCurrentJoke(state){
       const joke=await fetch(url,{headers})
       const j= await joke.json()
       state.commit("setCurrentJoke",j.joke)
     }

  },
  modules: {
  },
  
})
