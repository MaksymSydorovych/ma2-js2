import createList from "./createList.js";
let listItems = [];

const listInput = document.querySelector(".input");
const button = document.querySelector(".add__button");

button.addEventListener("click", addToList);
function addToList() {
	const newItem = listInput.value.trim();
	if (newItem.length >= 1) {
		listInput.focus();
	listItems.push(newItem);
	createList(listItems);
	}
}

export default listItems;

