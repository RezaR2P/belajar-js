// Dengan Modul
// Namun jika kita menggunakan module, kita bisa secara selektif memilih bagian kode mana yang ingin kita ekspos keluar
// Secara default kode yang kita buat menggunakan JavaScript Module tidak bisa digunakan dari luar file, kecuali kita memintanya untuk mengekspos keluar
// Membuat modul
// Membuat module sangat sederhana, kita cukup membuat file JavaScript saja
// Yang membedakan adalah, saat kita akan meload file JavaScript dari HTML, kita tidak menggunakan type javascript lagi, melainkan menggunakan type module

// EXPORT
export function sayHello(name) {
  console.info(`Hello ${name}`);
}

export function sayBye(name) {
  console.info(`Byeee ${name}`);
}

export const name = "Reza";
