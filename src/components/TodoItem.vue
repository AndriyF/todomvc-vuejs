<template>
    <div>
        <div class="view">
            <input class="toggle" type="checkbox" @click="toggleTodo(todo)">
            <label @dblclick="setEditedTodo(todo)">{{todo.title}}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <input class="edit" type="text"
               :value="todo.title"
               v-todo-focus="todo === editedTodo"
               @blur="doneEdit({ todo, title: $event.target.value })"
               @keyup.enter="doneEdit({ todo, title: $event.target.value })"
               @keyup.esc="cancelEdit">
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'todo-item',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters(['editedTodo'])
    },
    methods: {
      ...mapActions([
        'setEditedTodo',
        'removeTodo',
        'editTodo',
        'toggleTodo',
        'doneEdit',
        'cancelEdit'
      ])
    },
    directives: {
      'todo-focus': function (el, binding) {
        if (binding.value) {
          el.focus()
        }
      }
    }
  }
</script>
