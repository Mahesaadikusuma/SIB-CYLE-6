// Membuat shadow Host dengan <div>
const divElement = document.createElement("div");

// Membuat elemen untuk dimasukkan dalam shadow tree
const headingElement = document.createElement("h1");
headingElement.textContent = "Ini adalah konten <h1> dalam shadow DOM";

// Membuat/melampirkan shadow root pada shadow host
// Caranya: mengatur mode shadow dengan `open`
const divElementShadowRoot = divElement.attachShadow({ mode: "open" });

// Memasukkan element ke dalam shadow tree
// Menjadi child element dari shadow root. Shadow root seperti <html>
divElementShadowRoot.appendChild(headingElement);

// Memasukkan shadow host (elemen) ke regular DOM (DOM utama)
document.body.append(divElement);

// Tampilkan object shadow root
console.log(divElement);
console.log(headingElement);
console.log(divElementShadowRoot);

// ===============================================
// Hal lain yang membedakan antara closed dan open bisa kita lihat melalui method Event.composedPath. Anda dapat mencoba contoh kasus berikut.

// open
const openedDivElement = document.createElement("div");
const openedDivElementShadowRoot = openedDivElement.attachShadow({
  mode: "open",
});
openedDivElementShadowRoot.innerHTML = "<p>I have an open shadow root</p>";
document.body.append(openedDivElement);

//  CLOSED MODE
const closedDivElement = document.createElement("div");
const closedDivElementShadowRoot = closedDivElement.attachShadow({
  mode: "closed",
});
closedDivElementShadowRoot.innerHTML = "<p>I have a closed shadow root</p>";
document.body.appendChild(closedDivElement);

window.addEventListener("click", (event) => {
  console.log(event.target.shadowRoot);
  console.log(event.composedPath());
});

// contoh kasus di kasih style css
const divElements = document.createElement("div");

const headingElements = document.createElement("h1");
headingElements.innerText = "Ini adalah konten <h1> dalam shadow DOM";

const divElementShadowRoots = divElements.attachShadow({ mode: "open" });
divElementShadowRoots.appendChild(headingElements);

divElements.shadowRoot.innerHTML += `
  <style>
    h1 {
      color: green;
    }
  </style>
`;

document.body.appendChild(divElements);
