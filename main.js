function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

function render(array) {
  // remove any library entries from table before (re)creating entries
  let entries = document.getElementsByClassName('entry');

  for (let i = entries.length - 1; i >= 0; i--) {
    tableBooks.removeChild(entries[i]);
  }

  // add library entries to table
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement('tr');
    row.classList.add('entry');

    for (let j = 0; j < 4; j++) {
      const data = document.createElement('td');
      data.innerHTML = myLibrary[i][Object.keys(myLibrary[i])[j]];
      if (j > 1) { data.style.textAlign = "center"; }
      row.appendChild(data);
    }

    tableBooks.appendChild(row);
  }
}

function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let haveRead = false;
  let reg = /^[0-9]+$/;

  if (title == "" || author == "" || pages == "") {
    alert("Error: Input is empty!");
  } else if (!reg.test(pages)) {
    alert("Error: Pages must be a number");
  } else {
    document.form.read.checked? haveRead = true : haveRead = false;
    myLibrary.push(new Book(title, author, pages, haveRead));
  }
}

let formBook = document.querySelector('.form-book');
let formShow = document.getElementById('form-show');
let formSubmit = document.getElementById('form-submit');

formShow.addEventListener("click", function() {
  formBook.classList.toggle("visible");
  if (formShow.innerHTML == "Add book") {
    formShow.innerHTML = "Close form";
  } else {
    formShow.innerHTML = "Add book";
  }
})

formSubmit.addEventListener("click", function() {
  addBook();
  render(myLibrary);
})

let myLibrary = [];

myLibrary.push(new Book('The Thing', 'Some Dude', 567, false));
myLibrary.push(new Book('Ubiq', 'Philip K. Dick', 223, true));

let tableBooks = document.getElementById("table-books");

render(myLibrary);




// Unused, for now:

//data.classList.add('data');
//data.id = i.toString();

// It's better to write functions in prototype, so that a single instance of the
// function is shared between all child objects.

/*
Book.prototype.info = function() {
  return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.haveRead == true ? 'have read' : 'not read yet'}`;
}
*/
