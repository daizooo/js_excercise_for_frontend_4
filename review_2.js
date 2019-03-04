(() => {
  const todos = [];

  const inputElement = document.getElementById(`input-todo-box`);
  const buttonElement = document.getElementById(`add-button`);
  const ulElement = document.getElementById(`todo-list`);

  buttonElement.addEventListener(`click`, event => {
    const todo = inputElement.value;
    inputElement.value = ``;
    if (todo) {
      todos.push(todo);
      showTodo();
    }
  });

  function showTodo() {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    todos.forEach((todo, index) => {
      const liElement = document.createElement(`li`);
      const taskNumber = index + 1;
      liElement.textContent = `${taskNumber}：${todo}`;
      ulElement.appendChild(liElement);

      const deleteButton = document.createElement(`button`);
      deleteButton.textContent = `削除`;

      deleteButton.addEventListener(`click`, event => {
        deleteTodo(index);
      });
      liElement.appendChild(deleteButton);
    });
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    showTodo();
  }
})();
