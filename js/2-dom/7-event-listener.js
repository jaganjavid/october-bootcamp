


let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);

document.querySelector("#task-title").innerText = count;

function onClick(){
    
    // count = count + 1;
    count += 1;

    document.querySelector("#task-title").innerText = count;

    document.querySelector(".card-action").classList.toggle("change-color");

}