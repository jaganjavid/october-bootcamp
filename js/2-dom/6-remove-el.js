

// Remove Element

const list = document.querySelector("li");

// list.remove();
const lists = document.querySelectorAll("li");

// lists.forEach(function(list){
//     list.remove();
// })


// Class && Attr

const firstLi = document.querySelector("li:nth-child(1)");

const link = firstLi.children[0];

let val;

val = link.className; // String
val = link.classList; // DOMTOKENLIST

val.add("jagan");

val.remove("test");

val.replace("jagan", "javid");

document.querySelector(".clear-tasks").addEventListener("click", function(e){
    document.body.classList.toggle("change-color");
})