(() => {
  const todos = [];

  const textElement = document.getElementById(`input-todo-box`);
  const buttonElement = document.getElementById(`add-button`);
  const ulElement = document.getElementById(`todo-list`);

  buttonElement.addEventListener(`click`, event => {
    const valueOfTextElement = textElement.value;
    textElement.value = ``;
    if (valueOfTextElement) {
      todos.push(valueOfTextElement);
      showTodos();
    }
  });

  function showTodos() {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }

    todos.forEach((task, index) => {
      const liElement = document.createElement(`li`);
      const taskNumber = index + 1;
      liElement.textContent = `${taskNumber}：${task}`;
      ulElement.appendChild(liElement);

      const addButton = document.createElement(`button`);
      addButton.textContent = `削除`;
      addButton.addEventListener(`click`, event => {
        deleteTodo(index);
      });
      liElement.appendChild(addButton);
    });
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    showTodos();
  }
})();
