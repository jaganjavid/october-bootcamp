

const clearBtn = document.querySelector(".clear-tasks");

// Click
// clearBtn.addEventListener("click", runEvent);

// double Click
// clearBtn.addEventListener("dblclick", runEvent);

// Mouse Down
// clearBtn.addEventListener("mousedown", runEvent);

// Mouse
// clearBtn.addEventListener("mouseup", runEvent);

// Mouse Enter
clearBtn.addEventListener("mouseenter", runEvent);

clearBtn.addEventListener("mouseleave", runEvent);






function runEvent(e){
  console.log(e.type);
}