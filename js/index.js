import books from "./data/books.js";
const container = document.querySelector(".books");
let listItems = books;
createList(listItems);
function createList(books) {
  if (books.length > 0) {
	container.innerHTML = "";
    books.forEach((book) => {
      container.innerHTML += `<li class="list"><span>${book.title}</span>
		<i class="fas fa-trash" data-id="${book.isbn}"></i>
		</li>`;
    });
  } else {
	container.innerHTML = `<li class="message">Book list empty</li>`;
  }

  const treshCan = document.querySelectorAll("li i");
  treshCan.forEach((can) => {
    can.addEventListener("click", click);
  });
}

function click(event) {
  const id = event.target.dataset.id;
  const newList = remove(listItems, id);
  listItems = newList;
  createList(listItems);
}
function remove(books, id) {
  const filter = books.filter(
    (book) => parseInt(id) !== parseInt(book.isbn)
  );

  return filter;
}
