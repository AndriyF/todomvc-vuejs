<template>
    <section class="main" v-show="todosCount > 0">
        <input class="toggle-all" type="checkbox" @click="toggleAllTodos($event.target.checked)">
        <ul class="todo-list">
            <li class="todo" v-for="todo in todos"
                :class="{completed: todo.completed, editing: todo == editedTodo}">
                <todo-item :todo="todo" key="todo.title"></todo-item>
            </li>
        </ul>
    </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import TodoItem from './TodoItem.vue'

  export default {
    name: 'todo-list',
    components: {
      TodoItem
    },
    props: {
      todos: {
        type: Array,
        required: true
      },
      filter: {
        type: String,
        required: false
      }
    },
    computed: {
      ...mapGetters(['editedTodo', 'todosCount'])
    },
    methods: {
      ...mapActions(['toggleAllTodos'])
    }
  }
</script>
