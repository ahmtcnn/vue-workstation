import Vue from "vue"
import Vuex from "vuex"

Vue.user(Vuex)

const store = new Vuex.Store({
    state : {
        token : "",
    },
    mutations : {
        setToken(state,token){
            state.token = token
        },
        clearToken(state){
            state.token = ""
        }
    },
    actions : {
        login(commit, dispatch, state){
            
        }
    },
    getters : {}
    
})

export default store