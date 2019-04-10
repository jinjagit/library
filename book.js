function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

// It's better to write functions in prototype, so that a single instance of the
// function is shared between all child objects.
Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.haveRead == true ? 'have read' : 'not read yet'}`;
}

function render(array) {
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 4; j++) {
      const data = document.createElement('td');
      data.innerHTML = myLibrary[i][Object.keys(myLibrary[i])[j]];
      if (j > 1) data.style.textAlign = "center";
      row.appendChild(data);
    }
    table_books.appendChild(row);
  }
}

let myLibrary = [];

myLibrary.push(new Book('The Thing', 'Some Dude', 567, false));
myLibrary.push(new Book('Ubiq', 'Philip K. Dick', 223, true));

let table_books = document.getElementById("books_table");

render(myLibrary);




// Unused, for now:

//data.classList.add('data');
//data.id = i.toString();
