import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  todos: [],
  newTodo: '',
  editCache: '',
  editedTodo: null,
  filter: 'all'
}

const persistedConfig = {
  key: 'TodoMVC'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger(), createPersistedState(persistedConfig)]
    : [createPersistedState(persistedConfig)],
  strict: process.env.NODE_ENV !== 'production'
})
