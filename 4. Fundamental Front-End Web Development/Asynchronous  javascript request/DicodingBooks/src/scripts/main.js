function main() {
  const baseUrl = "https://books-api.dicoding.dev";
  const getBook = () => {
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      console.log(this.responseText);
      // const reverse = responseJson.books.reverse();
      // console.log(reverse);
      console.log(responseJson);

      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllBooks(responseJson.books);
      }
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open("GET", `${baseUrl}/list`);
    xhr.send();
  };

  const insertBook = (book) => {
    // tuliskan kode di sini!

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    // Membuat POST request dan menetapkan target URL
    xhr.open("POST", `${baseUrl}/add`);

    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    xhr.send(JSON.stringify(book));
  };

  const updateBook = (book) => {
    // tuliskan kode di sini!
    // Membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Menetapkan callback jika response sukses dan error
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);

      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open("PUT", `${baseUrl}/edit/${book.id}`);

    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    console.log(book.id);
    // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    xhr.send(JSON.stringify(book));
  };

  const removeBook = (bookId) => {
    // tuliskan kode di sini!

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);

    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("X-Auth-Token", "12345");

    // Mengirimkan request
    xhr.send();
  };

  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.querySelector("form");

    const inputBookId = document.querySelector("#inputBookId");
    const inputBookTitle = document.querySelector("#inputBookTitle");
    const inputBookAuthor = document.querySelector("#inputBookAuthor");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.getElementById("buttonUpdate");
    console.log(buttonUpdate);

    bookForm.addEventListener("submit", (event) => {
      event.preventDefault();
      buttonSave.addEventListener("click", function () {
        const book = {
          id: Number.parseInt(inputBookId.value),
          title: inputBookTitle.value,
          author: inputBookAuthor.value,
        };

        insertBook(book);
        resetForm();
      });

      buttonUpdate.addEventListener("click", function () {
        const book = {
          id: Number.parseInt(inputBookId.value),
          title: inputBookTitle.value,
          author: inputBookAuthor.value,
        };

        updateBook(book);
        resetForm();
      });
    });
    getBook();
  });

  const resetForm = () => {
    inputBookId.value = "";
    inputBookTitle.value = "";
    inputBookAuthor.value = "";
  };
}

export default main;
