import * as types from './mutation-types'

export const addTodo = ({ commit, dispatch }) => {
  commit(types.ADD_TODO)
  dispatch('setNewTodo', '')
}

export const removeTodo = ({ commit }, payload) => {
  commit(types.REMOVE_TODO, payload)
}

export const toggleTodo = ({ commit }, payload) => {
  commit(types.TOGGLE_TODO, payload)
}

export const setNewTodo = ({ commit }, payload) => {
  commit(types.SET_NEW_TODO, payload)
}

export const setEditedTodo = ({ commit }, payload) => {
  commit(types.SET_EDITED_TODO, payload)
}

export const toggleAllTodos = ({ commit }, payload) => {
  commit(types.TOGGLE_ALL_TODOS, payload)
}

export const removeCompletedTodos = ({ commit }) => {
  commit(types.REMOVE_COMPLETED_TODOS)
}

export const setFilter = ({ commit }, payload) => {
  commit(types.SET_FILTER, payload)
}

