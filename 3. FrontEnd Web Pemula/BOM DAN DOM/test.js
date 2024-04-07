const newElement = document.createElement('li')
newElement.innerText = 'Selamat menikmati!';

const daftar = document.getElementById('daftar')
daftar.appendChild(newElement)

// =============================================
const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.';

const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);

function welcome() {
    alert('Selamat Datang!');
    let user = prompt ('Masukan Nama Anda');
    alert('Terimakasih ' + user);
    
  }
  document.body.onload = welcome;