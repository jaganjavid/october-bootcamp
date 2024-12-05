

// Define a UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#search");


// Load all event 

function loadEventListerners() {

    // DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks)

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task List
    taskList.addEventListener("click", removeTask);

    // Clear All Tasks
    clearBtn.addEventListener("click", clearTasks);

    // Filter task event
    filter.addEventListener("keyup", filterTasks);

}

loadEventListerners();


function getTasks(){
    
    let tasks;

    if(localStorage.getItem("lsTasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("lsTasks"));
    }

    tasks.forEach(function(task){

        // Create a li Element
        const li = document.createElement("li");

        // Add a class to li
        li.className = "collection-item";

        // Add a value to li
        li.innerText = task;

        // Create a link element
        const link = document.createElement("a");

        // Add a class name
        link.className = "delete-item secondary-content";

        // Add a icon ineerhtml
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);
        
        
    })


}

function addTask(e) {

    e.preventDefault();

    // Validation
    if (taskInput.value === "") {
        alert("Please fill the form");
    } else {

        // Create a li Element
        const li = document.createElement("li");

        // Add a class to li
        li.className = "collection-item";

        // Add a value to li
        li.innerText = taskInput.value;

        // Create a link element
        const link = document.createElement("a");

        // Add a class name
        link.className = "delete-item secondary-content";

        // Add a icon ineerhtml
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

        // Store in ls
        storeTaskInLocalStorage(taskInput.value);

        // Clear the task input value
        taskInput.value = "";

    }
}

function storeTaskInLocalStorage(formInput){
    
    let tasks;

    if(localStorage.getItem("lsTasks") === null){
        tasks = [];
        console.log("Step 1");
    } else {
        tasks = JSON.parse(localStorage.getItem("lsTasks"));
        console.log("Step 2");
    }

    tasks.push(formInput);

    localStorage.setItem("lsTasks", JSON.stringify(tasks));
    

}

function removeTask(e) {

    // if(e.target.parentElement.className === "delete-item secondary-content"){

    //     if(confirm("Are you sure?")){
    //         e.target.parentElement.parentElement.remove()
    //     }
    // }

    if (e.target.parentElement.classList.contains("delete-item")) {
        e.target.parentElement.parentElement.remove()
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }


}


function removeTaskFromLocalStorage(taskElement){

    let tasks; 

    if(localStorage.getItem("lsTasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("lsTasks"));
    }

    tasks.forEach(function(task, index){
        
        if(taskElement.innerText === task){
            tasks.splice(index, 1);
        }
        
    })

    localStorage.setItem("lsTasks", JSON.stringify(tasks));
}


function clearTasks() {

    // taskList.innerHTML = "";

    const listsItems = Array.from(taskList.children);

    listsItems.forEach(function (elemenet) {
        elemenet.remove();
    })

    clearFromLocalStorage();
}

function clearFromLocalStorage(){
    localStorage.removeItem("lsTasks");
}


function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function (task) {

        const item = task.innerText.toLowerCase();

        if (item.indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }

    })

}


// const arr = [1,2,3,4,5];


// console.log(arr.indexOf(6));


// LocalStorage

// Get, Set, remove, clear

// localStorage.setItem("name", "javid");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// console.log(localStorage.getItem("name"));


// JSON

// const arr = [1,2,3,4,5];

// console.log(arr);

// const arrToString = JSON.stringify(arr);

// console.log(arrToString);

// const stringToArr = JSON.parse(arrToString);

// console.log(stringToArr);



// const array = [1,2,3,4,5];


// for(i = 0; i < array.length ; i++){
//     console.log(array[i]);
// }

// array.forEach(function(number, index, array){
//     console.log(`${number} - ${index}`);
//     console.log(array);
// })