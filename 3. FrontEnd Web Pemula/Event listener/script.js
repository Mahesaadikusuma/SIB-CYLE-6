function welcome() {
  alert("Sim salabim muncullah elemen-elemen HTML!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden"); // menghapus attribute hidden
}

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");

    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

//   Gunakan Menerapkan event handler inline di html nya langsung seperti untuk tag body kasih onload="welcome()" dan tag button onclick="increment()"
//   document.body.onload = welcome() // ini untuk function welcome
//   document.getElementById('incrementButton').onclick = increment; // ini untuk function increment

// Penggunaan eventlistener
window.addEventListener('load', welcome);
// document.getElementById('incrementButton').addEventListener('click', increment);

