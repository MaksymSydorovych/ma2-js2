function remove(listItems, list) {
	const filter = listItems.filter(
	  (item) => (list) !== (item)
	);
	return filter;
 }
 export default remove;