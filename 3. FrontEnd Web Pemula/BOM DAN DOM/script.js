// // Anggota method BOM
// // 1. Alert
// // const user = "John Doe";
// // alert("Selamat datang, " + user + "!");
// // 2.prompt

// // const tamu = prompt("Siapakah Anda?");
// // const tamu = parseInt(prompt("Siapakah Anda?")); // ini jika menggunakan parse int harus berupa integer tidak boleh string
// // let tamuParseInt = parseInt(tamu);
// // console.log(`tamu : ${tamuParseInt}, ${typeof tamuParseInt}`);
// function alert(nama) {
//   console.log("Hati-hati, " + nama);
// }

// alert("Chewbacca");

// window.alert("Chewbacca 213213");


// // interaksi dengan browser event listener
// // Buat ini di browser dengan inspect
// const newElement = document.createElement('p');
// newElement.innerText = 'Selamat datang ke HTML kosong ini :)'; // innerText untuk menambahkan kata-kata ke dalam tag p
// newElement.innerHTML = '<b>Selamat datang ke HTML</b> kosong ini :)'; // innerHTML untuk menambahkan kata-kata dan menambahkan tag html  ke dalam tag p

// // ketik newElement di browser maka akan muncul 
// const newImg = document.createElement('img');
// // setAttribute berfungsi sebagai menambahkan atribut ke dalam tag img 
// // bukanhanya tag img saja bisa seperti tag <a></a> yang memiliki atribut href
// newImg.setAttribute('src', 'https://picsum.photos/200/300');

// MENGUBAH KONTEN HTML DARI JAVASCRIPT
const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

// const buttons = document.querySelectorAll('.button');
// for (const button of buttons) {
//     console.log(button)
// }
// const playButton = buttons[3];
// console.log(playButton)
// const playButtonElement = playButton.children[0];
// console.log(playButtonElement);

// playButtonElement.setAttribute('type', 'submit');



// Links
const links = document.getElementById('links');

const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming di Dicoding'; // jadi tidak bisa digunakan jika sudah pakai innerHTML
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';



const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
  console.log(button.children[0].style.borderRadius = '6px');
}