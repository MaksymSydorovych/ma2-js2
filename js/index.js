import  books  from "./data/books.js";
let listItems = books;

const container = document.querySelector("ul")
listItems.forEach(item => {
	container.innerHTML += `
	<li>
	<h4>${item.isbn}</h4>
	<p>${item.title}</p>
	<i class="fas fa-trash" data-item="${item}"></i>
	</li>`	
}
);

const treshCan = document.querySelectorAll("li i");
treshCan.forEach(function(can){
	can.addEventListener("click", removeFromList);
}
);

function removeFromList(){
	
	const deleteThisItem = event.target.dataset.item;
	console.log(deleteThisItem);
	const newList = listItems.filter(function(item) {
		
		console.log(item);
		if(deleteThisItem !== item) {
		return true;
		}
   	})
	listItems = newList;
	
	
}

