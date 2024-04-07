document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // Penggunaan input listener untuk menghitung input karakter
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal =
      document.getElementById("inputNama").maxLength;

    console.log("jumlahKarakterDiketik: ", jumlahKarakterDiketik);
    // console.log("jumlahKarakterMaksimal: ", jumlahKarakterMaksimal);

    // pengurngan jumlah karakter
    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;

    document.getElementById("sisaKarakter").innerText =
      sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      document.getElementById("sisaKarakter").innerText =
        "Batas maksimal tercapai!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  //   ketika diklick akan memunculkan notifikasi mengenai sisa karakter
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  // ini kembalikan dari focus jika inout sudah tidak di klick notifikasi sisa karakter akan menghilang
  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("inputNama: blur");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });

  // input change SAMA SEPERTI BLUR HARUS KLICK DILUAR INPUT MAKA EVENT CHANGE AKAN MENJALANKAN FUNGSI
  document
    .getElementById("inputCaptcha")
    .addEventListener("change", function () {
      console.log("inputCaptcha: change");
      const inputCaptcha = document.getElementById("inputCaptcha").value;
      const submitButtonStatus = document.getElementById("submitButton");
      if (inputCaptcha === "PRNU") {
        submitButtonStatus.removeAttribute("disabled");
      } else {
        submitButtonStatus.setAttribute("disabled", "");
      }
    });
  // inputCaptcha.addEventListener("input", function () {
  //   console.log(`inputCaptcha: focus ${inputCaptcha.value}`);
  //   inputCaptcha.value;
  // });

  document
    .getElementById("formDataDiri")
    .addEventListener("submit", function (event) {
      const inputCaptcha = document.getElementById("inputCaptcha").value;
      if (inputCaptcha === "PRNU") {
        alert("Selamat! Captcha Anda lolos :D");
      } else {
        alert("Captcha Anda belum tepat :(");
        // document.getElementById("submitButton").setAttribute("disabled", "");
      }
      event.preventDefault();
    });

  document.getElementById("inputCopy").addEventListener("copy", function (e) {
    e.preventDefault();
    alert("Anda telah men-copy sesuatu...");

    const inputCopy = document.getElementById("inputCopy");
    inputCopy.innerText = e.target.value;
  });

  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mem-paste sebuah teks...");
  });
});
