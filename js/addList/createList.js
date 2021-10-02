import remove from "./deleteList.js";
import {saveToStorage } from "./storage.js";
import { listKey } from "./setting.js";
function createList(listItems){
	const addList = document.querySelector(".add__list")
	addList.innerHTML ="";
	listItems.forEach((item) => {
		addList.innerHTML += `<li class="list"><span>${item}</span>
		<i class="fas fa-trash" data-list="${item}"></i>
		</li>`
	}
	);
	const treshCan = document.querySelectorAll(".list");
  treshCan.forEach((can) => {
    can.addEventListener("click", handleClick);
  })
  function handleClick(event) {
	const list = event.target.dataset.list;
	const newList = remove(listItems, list);
	saveToStorage(listKey, newList);
	listItems = newList;
	createList(listItems);
 }
}
export default createList;
