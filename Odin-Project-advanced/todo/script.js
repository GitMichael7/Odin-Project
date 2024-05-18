document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("new-todo");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newTodoText = todoInput.value.trim();
    if (newTodoText === "") return;

    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = newTodoText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Erledigt";
    completeButton.className = "complete";
    completeButton.addEventListener("click", function () {
      newTodoItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", function () {
      todoList.removeChild(newTodoItem);
    });

    newTodoItem.appendChild(completeButton);
    newTodoItem.appendChild(deleteButton);
    todoList.appendChild(newTodoItem);

    todoInput.value = "";
  });
});
