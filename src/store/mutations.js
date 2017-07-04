import * as types from './mutation-types'

const baseTodo = {
  completed: false,
  title: ''
}

export default {
  [types.ADD_TODO] (state) {
    if (state.newTodo === '') {
      return
    }

    state.todos = state.todos.concat({ ...baseTodo, title: state.newTodo })
  },
  [types.REMOVE_TODO] (state, todo) {
    state.todos = state.todos.filter(item => item !== todo)
  },
  [types.EDIT_TODO] (state, { title, todo }) {
    state.todos = state.todos.map(item => item === todo ? { ...item, title } : item)
  },
  [types.TOGGLE_TODO] (state, todo) {
    state.todos = state.todos.map(item => item === todo ? { ...item, completed: !item.completed } : item)
  },
  [types.SET_NEW_TODO] (state, newTodo) {
    state.newTodo = newTodo
  },

  [types.SET_EDIT_CACHE] (state, text) {
    state.setEditCache = text
  },
  [types.SET_EDITED_TODO] (state, editedTodo) {
    state.editedTodo = editedTodo
  },
  [types.REMOVE_COMPLETED_TODOS] (state) {
  },
  [types.SET_FILTER] (state, filter) {
    state.filter = filter
  }
}
