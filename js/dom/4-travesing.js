
let val;

const list = document.querySelector(".collection");

const listItemFirst = document.querySelector("li:nth-child(1)");
const listItemLast = document.querySelector("li:nth-child(5)");

val = list;

// Get the children element nodes

val = list.children;
val = list.children[0];
// val = list.children[0].innerText = "Hello";
// val = list.children[0].children[0].className = "xyz";

// First Child
val = list.firstElementChild;

// last Child
val = list.lastElementChild;

// Child Count
val = list.childElementCount;

// get the parent Element

val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get the next sibling

val = listItemFirst.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// Get the previous sibling
val = listItemLast.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

console.log(val);