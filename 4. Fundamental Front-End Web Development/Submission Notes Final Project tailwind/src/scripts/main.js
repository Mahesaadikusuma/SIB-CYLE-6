function main() {
  const api = "https://notes-api.dicoding.dev/v2";
  const getNotes = async () => {
    // tuliskan kode di sini!
    const response = await fetch(`${api}/notes`);
    const responseJSON = await response.json();

    if (responseJSON.error) {
      showResponseMessage(responseJSON.message);
    } else {
      renderAllNotes(responseJSON.data);
    }
  };

  const insertBook = (book) => {
    // tuliskan kode di sini!
  };

  const updateBook = (book) => {
    // tuliskan kode di sini!
  };

  const removeBook = (bookId) => {
    // tuliskan kode di sini!
  };

  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllNotes = (notes) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    notes.forEach((note) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;" id="${note.id}">
          <div class="card">
            <div class="card-body">
              <h5> ${note.title}</h5>
              <p>${note.body}</p>
              <button type="button" class="btn btn-danger button-delete" id="${note.id}">Hapus</button>
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
    const inputBookId = document.querySelector("#inputBookId");
    const inputBookTitle = document.querySelector("#inputBookTitle");
    const inputBookAuthor = document.querySelector("#inputBookAuthor");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.querySelector("#buttonUpdate");

    buttonSave.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      updateBook(book);
    });
    getNotes();
  });
}

export default main;
