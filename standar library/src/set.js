// Set merupakan implementasi dari struktur data yang berisikan data-data unique
// Set mirip seperti Array, hanya saja isi datanya selalu unique
// Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
// Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const set = new Set();
set.add("Reza");
set.add("Reza"); // yg ini tidak akan diterima
set.add("Ramdan");
set.add("Permana");

console.info(set);

set.forEach((value) => {
  console.info(value);
});
