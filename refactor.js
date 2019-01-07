function Library() {
	this.books = [
		{
			id: 1,
			title: 'Hitchiker guide',
			author: 'My ass',
			available: true
		},
		{
			id: 2,
			title: 'The little prince',
			author: 'Antoine de Saint Exupery',
			available: true
		}
	];
}

Library.prototype.rentBook = function(bookId) {
	const book = this.getBook(bookId);
	if (book.available) {
		book.available = false;
		console.log('Book ' + book.title + ' rented!')
	} else {
		console.log('This book is not available.');
	}
}

Library.prototype.getBook = function(bookId) {
	return this.books.find(b => b.id == bookId);
}

Library.prototype.searchBook = function(search) {
	var bookId = null;
	books.forEach(function (book) {
		if (book.title === search) {
			bookId = book.id;
		}
		if (book.author === search) {
			bookId = book.id;
		}
		if (book.id === search) {
			bookId = book.id;
		}
		if (book.available === search) {
			bookId = book.id;
		}
	})
	if (bookId) {
		return this.books.find(b => b.id === bookId);
	}
}

Library.prototype.returnBook = function(bookId) {
	const rented = this.books.find(b => b.id === bookId);
	rented.available = true
	console.log('Book ' + book.title + ' returned!')
}

Library.prototype.donateBook = function(book) {
	this.books.push(book);
}

function tellStroy() {
	const library = new Library();

	// the user searches a book
	const bookId = library.searchBook('The little prince')

	// the user rents the book
	library.rentBook(bookId)

	// the user returns the book
	library.returnBook(bookId);

	// the user donates a book
	library.donateBook({
		title: 'Les miserables',
		author: 'Victor Hugo'
	})
}

tellStroy();
