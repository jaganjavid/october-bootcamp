

// Define a UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load all event 

function loadEventListerners() {

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task List
    taskList.addEventListener("click", removeTask);

    // Clear All Tasks
    clearBtn.addEventListener("click", clearTasks);

}

loadEventListerners();

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

        // Clear the task input value
        taskInput.value = ""; 

    }
}

function removeTask(e){
    
    // if(e.target.parentElement.className === "delete-item secondary-content"){
        
    //     if(confirm("Are you sure?")){
    //         e.target.parentElement.parentElement.remove()
    //     }
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove()
    }


}


function clearTasks(){
    
    // taskList.innerHTML = "";

    const listsItems = Array.from(taskList.children);

    listsItems.forEach(function(elemenet){
        elemenet.remove();
    })
}