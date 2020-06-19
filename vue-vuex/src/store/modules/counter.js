const state = {
    counter: 0,
}
const getters = {
    getDoubleCounter(state){
        return state.counter
    },
    stringCounter(state){
        return state.counter + ". kez tıklandı"
    }
}
const mutations = {
    increaseCounter(state){
        state.counter ++
    },
    decreaseCounter(state, value){
        state.counter --
    },
}

const actions = {
    increment({commit}){
        commit("increaseCounter")
    },
    decrement({commit}){
        commit("decreaseCounter")
    },
    incrementAsync({commit}){
        setTimeout(() => {
            commit("increaseCounter")
        },1000)
    },
    decrementAsync({commit}){
        commit("decreaseCounter")
    },
}

export default {
    state : state,
    getters : getters,
    mutations : mutations,
    actions : actions,
}