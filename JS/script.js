onload = function (){
    let tasks = localStorage.getItem("tasks")
    let h1 = document.getElementById("taskContainer")
    h1.innerHTML = tasks;

}


let inputTask = document.getElementById("addTask");

function adicionar(element) {
    let task = inputTask.value;
    console.log(task)

    let h1 = document.getElementById("taskContainer")
    h1.innerHTML += `<p>${task}</p>`;

    localStorage.setItem("tasks", task)

}