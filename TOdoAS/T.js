const inp = document.querySelector("input"); 
const todoList = document.querySelector("#todo-list"); 
function add() {
    const task = inp.value.trim(); 
    if (task !== "") {
        const li = document.createElement("li"); 
        li.innerText = task; 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            li.remove();
            saveData();
        };
        li.appendChild(deleteBtn);
        todoList.appendChild(li); 
        inp.value = ""; 
        saveData();
    } else {
        alert("Please enter the task that you want to add"); 
    }
}

function deletes() {
    todoList.innerHTML = ""; 
    saveData();
}

function saveData() {
    const tasks = [];
    todoList.querySelectorAll("li").forEach((li) => {
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTask() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach((task) => {
        const li = document.createElement("li"); 
        li.innerText = task; 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            li.remove();
            saveData();
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li); 
    });
}
document.addEventListener("DOMContentLoaded", showTask);
