import * as types from './mutation-types'

const baseTodo = {
  completed: false,
  title: ''
}

export default {
  [types.ADD_TODO] (state, title) {
    state.todos = state.todos.concat({ ...baseTodo, title })
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
  [types.TOGGLE_ALL_TODOS] (state, checked) {
    state.todos = state.todos.map(item => ({ ...item, completed: checked }))
  },
  [types.SET_EDITED_TODO] (state, editedTodo) {
    state.editedTodo = editedTodo
  },
  [types.REMOVE_COMPLETED_TODOS] (state) {
    state.todos = state.todos.filter(item => !item.completed)
  },
  [types.SET_FILTER] (state, filter) {
    state.filter = filter
  }
}
