


{/* 
    <li class="collection-item">
         List Item 4
        <a href="#" class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
        </a>
    </li> */
}

// Create element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Id
li.id = "item-6";

// Add Attribute
li.setAttribute("title", "list-6");

// create a text 
li.innerText = "List Item 6";

// Create new link element
const link = document.createElement("a");

// Add hfre to link
link.setAttribute("href", "#");

// Add class to link
link.className = "delete-item secondary-content";

// Add Icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);

// get the ul
const ul = document.querySelector(".collection");

// Append li to ul
ul.appendChild(li);