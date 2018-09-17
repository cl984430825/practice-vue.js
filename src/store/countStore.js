import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    shopData: [],
    mission: [],
    routerArr: ['/shopPrice','/todoList','/rotate']
}

const mutations = {
    setData(state,obj){
        state[obj.a] = obj.b
    }
}

const actions = {
    setData(context,obj){
        context.commit('setData',obj)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});