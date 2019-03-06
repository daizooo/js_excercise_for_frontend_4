(() => {
  const todos = [];

  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const listContainer = document.getElementById('todo-list');

  addButton.addEventListener('click', () => {
    const todo = inputBox.value;
    inputBox.value = '';
    if (todo) {
      todos.push(todo);
      showTodos();
    }
  });
  const showTodos = () => {
    while (listContainer.firstChild) {
      listContainer.removeChild(listContainer.firstChild);
    }
    todos.forEach((todo, index) => {
      const indexNumber = index + 1;
      const liElement = document.createElement('li');
      liElement.textContent = `${indexNumber}：${todo}`;
      listContainer.appendChild(liElement);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', () => {
        deleteTodo(index);
      });
      liElement.appendChild(deleteButton);
    });
  };
  const deleteTodo = index => {
    todos.splice(index, 1);
    showTodos();
  };
})();
