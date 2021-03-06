export const todos = state => {
  switch (state.filter) {
    case 'active': return state.todos.filter(todo => !todo.completed)
    case 'completed': return state.todos.filter(todo => todo.completed)
    default: return state.todos
  }
}
export const editedTodo = state => state.editedTodo
export const filter = state => state.filter
export const todosCount = state => state.todos.length
export const remaining = state => state.todos.filter(todo => !todo.completed).length
