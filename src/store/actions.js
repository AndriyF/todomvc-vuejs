import * as types from './mutation-types'

export const addTodo = ({ commit }, payload) => {
  if (payload.trim() === '') {
    return
  }

  commit(types.ADD_TODO, payload)
}

export const removeTodo = ({ commit }, payload) => {
  commit(types.REMOVE_TODO, payload)
}

export const toggleTodo = ({ commit }, payload) => {
  commit(types.TOGGLE_TODO, payload)
}

export const doneEdit = ({ commit, dispatch, state }, { todo, title }) => {
  if (state.editedTodo === null) {
    return
  }

  if (title !== '' && todo.title !== title) {
    commit(types.EDIT_TODO, { todo, title })
  }

  if (title === '') {
    dispatch('removeTodo', todo)
  }

  dispatch('setEditedTodo', null)
}

export const cancelEdit = ({ dispatch }) => {
  dispatch('setEditedTodo', null)
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

