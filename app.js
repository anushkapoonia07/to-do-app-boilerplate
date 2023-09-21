document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const addButton = document.getElementById("button");
    const todoList = document.getElementById("todolist");
  
    addButton.addEventListener("click", function () {
      const taskText = inputField.value.trim();
      if (taskText !== "") {
        createTodoItem(taskText);
        inputField.value = "";
      }
    });
  
    inputField.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addButton.click();
      }
    });
  
    todoList.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        removeTodoItem(e.target.parentElement);
      }
    });
  
    function createTodoItem(taskText) {
      const listItem = document.createElement("li");
      const removeLink = document.createElement("a");
      removeLink.innerHTML = "Remove";
      listItem.innerHTML = taskText;
      listItem.appendChild(removeLink);
      todoList.appendChild(listItem);
    }
  
    function removeTodoItem(item) {
      item.remove();
    }
  });
  