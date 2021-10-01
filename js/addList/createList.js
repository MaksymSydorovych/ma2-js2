import remove from "./deleteList.js";



function createList(listItems){
	
	const addList = document.querySelector(".add__list")
	addList.innerHTML ="";
	listItems.forEach((item) => {
		addList.innerHTML += `<li class="list"><span>${item}</span>
		<i class="fas fa-trash" data-list="${item}"></i>
		</li>`
	}
	
	);
	const treshCan = document.querySelectorAll("li i");
  treshCan.forEach((can) => {
    can.addEventListener("click", click);
  })
  function click(event) {
	const list = event.target.dataset.list;
	const newList = remove(listItems, list);
	listItems = newList;
	createList(listItems);
 }
}

export default createList;
