import createList from "./createList.js";
import {
	saveToStorage,
	getFromStorage
} from "./storage.js";
import {
	listKey
} from "./setting.js";

const listItems = getFromStorage(listKey);
const listInput = document.querySelector(".input");
const button = document.querySelector(".add__button");

button.addEventListener("click", addToList);

function addToList() {
	const newItem = listInput.value.trim();
	if (newItem.length >= 2) {
		const latestList = getFromStorage(listKey);
		latestList.push(newItem);
		createList(latestList);
		saveToStorage(listKey, latestList);
		listInput.focus();
	}
}

export default listItems;