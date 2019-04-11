var query = window.location.search.substring(1);

let new_book = [];
let split = query.split("&");

new_book.push(split[0].split('=')[1]); // title
new_book.push(split[1].split('=')[1]); // author
new_book.push(split[2].split('=')[1]); // pages
if (split[3]) {                        // have read?
  new_book.push("true");
} else {
  new_book.push("false");
}


console.log(query);
console.log(new_book);
