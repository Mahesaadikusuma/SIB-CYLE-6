// class ImageFigure extends HTMLElement {
//   constructor() {
//     super();

//     this.innerHTML = "Halo, nama saya image-figure";
//   }
// }

// customElements.define("image-figure", ImageFigure);

// INI CUSTOM EVNT DARI JS
// Pembuatan custom element murni dilakukan dengan Browser API. Ini hanya bisa dicapai jika kita menggunakan JavaScript.
class ImageFigure extends HTMLElement {
  constructor() {
    super();

    this.render();
    // this.kusuma();

    // this.innerHTML = `hello semuanya`;
  }

  //   Cara untuk render konten sebetulnya sama seperti objek elemen biasanya. Kita gunakan properti innerHTML atau innerText untuk melakukannya.
  render() {
    this.innerHTML = `
        <figure>
          <img src="src/logo-g.jpg" alt="Dicoding Logo g" width="200">
          <figcaption>Huruf g dalam logo Dicoding</figcaption>
        </figure>
      `;
  }

  kusuma() {
    this.innerText = "hello semuanya";
  }
}

// Untuk membuat custom element, kita perlu membuat sebuah class. Ini diperlukan karena kita perlu mewarisi interface HTMLElement. Untuk membuat custom element, kita juga perlu mewarisinya.

// Jika sudah, kita perlu mendaftarkannya dengan method customElements.define atau window.customElements.define untuk tahap berikutnya. Method ini membutuhkan dua buah parameter wajib, yaitu nama custom element dan class element-nya.
customElements.define("image-figure", ImageFigure);
