// popup prompt akan menyuruh mengisi dan bisa di simpan divariabel
// const nama = prompt("Siapa Nama Anda?");
// // akan menampilkan alert
// alert(`Selamat Datang ${nama} ❤`);

// popup confirm yang bersifat boolean true atau false
const masuk = confirm("Apakah Anda Yakin Akan Masuk?");
if (masuk) {
  const nama = prompt("Siapa Nama Anda?");
  // akan menampilkan alert
  alert(`Selamat Datang ${nama} ❤`);
} else {
  alert(`Bye Bye`);
}
