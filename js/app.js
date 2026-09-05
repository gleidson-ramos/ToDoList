  var app = new Vue({
    el: '#app',
    data: {
      newTodo: '',
      todos: []
    },
    methods: {
      addTodo: function() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1);
      },
      toggleCompletion: function(todo) {
        todo.completed = !todo.completed;
      }
    }
  });