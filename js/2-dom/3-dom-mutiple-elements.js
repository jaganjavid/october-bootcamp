

// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item"); // HTML COLLECTION


console.log(items);



// change style
// items.style.backgroundColor = "blue";
// items[0].style.backgroundColor = "blue";
// items[1].style.backgroundColor = "blue";
// items[2].style.backgroundColor = "blue";
// items[3].style.backgroundColor = "blue";
// items[4].style.backgroundColor = "blue";

// for loop

// for(let i = 0; i < items.length; i++){

//     // Each li should have a diffrent color

//     items[i].style.backgroundColor = "blue";
//     items[i].style.color = "white";
// }

// Convert the html collection into array

// const lists = Array.from(items);

// lists.forEach(function(element, index){
//    element.style.backgroundColor = "blue";
// })

const listItems = document.querySelectorAll(".collection-item");
// NodeList

listItems.forEach(function(element, index){
   element.style.backgroundColor = "blue";
})


