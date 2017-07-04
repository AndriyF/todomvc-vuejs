<template>
    <main>
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?"
                       :value="newTodo"
                       @input.lazy="setNewTodo($event.target.value)"
                       @keyup.enter="addTodo">
            </header>
            <todo-list :todos="todos"></todo-list>
            <footer class="footer" v-show="todosQuantity > 0">
				<span class="todo-count">
					<strong v-text="remaining"></strong> {{ pluralize('item', remaining) }} left
				</span>
                <ul class="filters">
                    <li>
                        <a href="#/all" @click="setFilter('all')" :class="{selected: filter == 'all'}">
                            All
                        </a>
                    </li>
                    <li>
                        <a href="#/active" @click="setFilter('active')" :class="{selected: filter == 'active'}">
                            Active
                        </a>
                    </li>
                    <li>
                        <a href="#/completed" @click="setFilter('completed')"
                           :class="{selected: filter == 'completed'}">
                            Completed
                        </a>
                    </li>
                </ul>
                <button class="clear-completed" @click="removeCompletedTodos" v-show="todos.length > remaining">
                    Clear completed
                </button>
            </footer>
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </main>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TodoList from './components/TodoList'

  export default {
    name: 'app',
    components: {
      TodoList
    },
    computed: {
      ...mapGetters(['todos', 'newTodo', 'filter', 'remaining', 'todosQuantity'])
    },
    methods: {
      ...mapActions(['addTodo', 'setNewTodo', 'removeCompletedTodos', 'setFilter']),
      pluralize (word, count) {
        return word + (count === 1 ? '' : 's')
      }
    }
  }
</script>
