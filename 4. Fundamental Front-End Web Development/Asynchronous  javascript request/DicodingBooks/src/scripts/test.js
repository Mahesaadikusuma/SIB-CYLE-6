// HTTP REQUEST
const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//   // console.log(this.responseText);
//   console.log(JSON.parse(this.responseText));
// };

xhr.onload = function () {
  const response = JSON.parse(this.responseText);
  const display = document.querySelector("#display");
  response.books.map((book, index) => {
    display.innerText += `${index + 1}. ${book.title}\n`;
  });
};

xhr.onerror = function () {
  console.log("Ups something error");
};

xhr.open("GET", "https://books-api.dicoding.dev/list");

// HEADER UNTUK POST DATA
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-Auth-Token", "12345");

const book = {
  id: 10,
  title: "Edensor",
  author: "Andrea Hirata",
};

xhr.send(JSON.stringify(book));
// YANG INI UNTUK GET SAJA hapus dari xhr.setRequestHeader sampai xhr.send json
// xhr.send();
