function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

// It's better to write functions in prototype, so that a single instance of
// function is shared between all child objects.
Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.haveRead == true ? 'have read' : 'not read yet'}`;
}

const myBook = new Book('The Thing', 'Some Dude', 567, false);

// toString() is a method in Object.prototype
console.log(myBook.toString());

console.log(myBook);

console.log(myBook.info());
