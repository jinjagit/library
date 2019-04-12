function Book(title, author, pages, haveRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.haveRead = haveRead
}

function render(array) {
  // remove any data row(s) from table before (re)creating
  let entries = document.getElementsByClassName('entry');

  for (let i = entries.length - 1; i >= 0; i--) {
    tableBooks.removeChild(entries[i]);
  }

  // add data row(s) to table
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement('tr');
    row.classList.add('entry');

    for (let j = 0; j < 3; j++) {
      const data = document.createElement('td');
      data.innerHTML = myLibrary[i][Object.keys(myLibrary[i])[j]];
      if (j > 1) { data.style.textAlign = "center"; }
      row.appendChild(data);
    }

    // add 'have read?' button to row
    let newCell1 = row.insertCell(3)
    let btnRead = document.createElement('input');
    btnRead.type = 'button';
    btnRead.value = `${myLibrary[i][Object.keys(myLibrary[i])[3]]}`;
    btnRead.id = `read${i}`;
    btnRead.classList.add('btn-table');
    btnRead.addEventListener("click", function() {
      toggleRead(this.id.split('read')[1]);
    });
    newCell1.appendChild(btnRead);
    row.appendChild(newCell1);

    // add 'remove' button to end of row
    let newCell2 = row.insertCell(4)
    let btnRemove = document.createElement('input');
    btnRemove.type = 'button';
    btnRemove.value = "Remove";
    btnRemove.id = i.toString();
    btnRemove.classList.add('btn-table');
    btnRemove.addEventListener("click", function() {
      removeBook(this.id);
    });
    newCell2.appendChild(btnRemove);
    row.appendChild(newCell2);

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

  render(myLibrary);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render(myLibrary);
}

function toggleRead(index) {
  if (myLibrary[index]['haveRead'] == true) {
    myLibrary[index]['haveRead'] = false;
  } else {
    myLibrary[index]['haveRead'] = true;
  }
  render(myLibrary);
}

function storageAvailable(type) { // from: https://developer.mozilla.org
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
  console.log("Yippee! We can use localStorage awesomeness");
}
else {
  console.log("Too bad, no localStorage for us");
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
});

formSubmit.addEventListener("click", function() {
  addBook();
});

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
