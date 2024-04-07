const localStorageKey = "PRESS_FREQUENCY";
const sessionStorageKey = "INI_session";

// Pengecekan: apakah data localStorage dengan key count tersedia atau belum
if (typeof Storage !== "undefined") {
  if (localStorage.getItem(localStorageKey) === null) {
    // Jika item pada local storage belum ada, data akan diberi nilai awal, yakni 0
    localStorage.setItem(localStorageKey, 0);
  }

  if (sessionStorage.getItem(sessionStorageKey == null)) {
    sessionStorage.setItem(sessionStorageKey, 0);
  }
  const incrementButton = document.querySelector("#incrementButton");
  const clearButton = document.querySelector("#clear");
  const countDisplay = document.querySelector("#count");

  // Memberikan nilai item dari local storage
  countDisplay.innerText = localStorage.getItem(localStorageKey);
  countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

  // Update nilai dari item local storage jika tombol ditekan
  incrementButton.addEventListener("click", function () {
    let count = localStorage.getItem(localStorageKey);
    let countS = sessionStorage.getItem(sessionStorageKey);
    count++;
    countS++;
    localStorage.setItem(localStorageKey, count);
    sessionStorage.setItem(sessionStorageKey, countS);

    countDisplay.innerText = localStorage.getItem(localStorageKey);
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
  });

  // Memberikan nilai 0 ke tampilan karena di-reset dan menghapus item
  clearButton.addEventListener("click", function () {
    localStorage.removeItem(localStorageKey);
    countDisplay.innerText = 0;

    sessionStorage.removeItem(sessionStorageKey);
    countDisplay.innerText = 0;
  });
} else {
  alert("Browser yang Anda gunakan tidak mendukung Web Storage");
}
