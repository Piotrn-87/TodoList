let todoList = {
  todos: [],

  toggleAll: function () {

    let allTodos = this.todos.length;
    let completedTodos = 0;

    // get number of completed todos
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // if everything is true make evertything false
    if (completedTodos === allTodos) {
      for (let i = 0; i < allTodos; i++) {
        this.todos[i].completed = false;
      }
    }
    // otherwise make everything true
    else {
      for (let i = 0; i < allTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
    });
  },

  changeTodo: function (position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
};
// addTodoInputText

let handler = {

  toggleAll: function () {
    todoList.toggleAll();
    viewOl.displayOl();
  },

  addTodo: function () {
    const addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoInputText.value);
    addTodoInputText.value = '';
    viewOl.displayOl();
  },

  changeTodo: function () {
    const changeTodoPosition = document.getElementById('changeTodoPosition');
    const changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = '';
    changeTodoText.value = '';
    viewOl.displayOl();
  },

  deleteTodo: function () {
    const deleteTodoPosition = document.getElementById('deleteTodoButton');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = '';
    viewOl.displayOl();
  },

  toggleCompleted: function () {
    const toggleCompletedPosition = document.getElementById(
      'toggleCompletedButton'
    );
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = '';
    viewOl.displayOl();
  },
};

let view = {
  dispalyView: function () {
    const todosUl = document.querySelector('ul');
    const todoLi = document.createElement('li');
    todosUl.appendChild(todoLi);
  },
};

let viewOl = {
  displayOl: function () {
    const todosOl = document.querySelector('ol');
    todosOl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {
      let todosLi = document.createElement('li');
      let todo = todoList.todos[i];
      let todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = ' (X) ' + todo.todoText;
      } else {
        todoTextWithCompletion = ' () ' + todo.todoText;
      }
      todosLi.textContent = todoTextWithCompletion;
      todosOl.appendChild(todosLi);
    }
  },
};

// console.log("Kocham Jolke ;)");