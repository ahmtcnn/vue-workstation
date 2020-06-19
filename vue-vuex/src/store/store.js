import Vue from "vue";
import Vuex from "vuex"
import counter from "./modules/counter"
import * as mutations from "./mutations"
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {

        value : 0,
    },
    getters : {
        getValue(state){
            return state.value
        },

    },
    mutations : mutations,

    actions : {

        setValueData({commit}, payload){
            commit("setValue", payload)
        }
    },
    modules : {
        counter : counter,
    }

});