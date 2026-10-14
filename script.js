//your code here

const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

button.addEventListener("click", function () {
    const todoText = input.value.trim();

    if (todoText !== "") {
        const li = document.createElement("li");
        li.innerText = todoText;

        todoList.appendChild(li);

        input.value = "";
    }
}); 
