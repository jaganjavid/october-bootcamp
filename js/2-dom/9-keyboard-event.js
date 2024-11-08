

const taskInput = document.querySelector("#task");

// Key Down
// taskInput.addEventListener("keydown", runEvent);

// Key up
// taskInput.addEventListener("keyup", runEvent); // ***

// Key press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// blur
// taskInput.addEventListener("blur", runEvent);

// cut
// taskInput.addEventListener("cut", runEvent);

// copy
// taskInput.addEventListener("copy", runEvent);

// paste
taskInput.addEventListener("paste", runEvent);




function runEvent(e){
  console.log(e.target.value);
  console.log(e.type);
}