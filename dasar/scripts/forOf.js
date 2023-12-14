// for of digunakan untuk melakukan iterasi terhadap isi value dari iterable objek, seperti array, strting dll
// for of tidak bisa digunakan untuk melakukan iterasi data objek, karena objek bukanlah iterable

const names = ["Reza", "Ramdan", "Permana"];
for (const name of names) {
  document.writeln(`<p>${name}</p>`);
}

const fullname = "Reza Ramdan Permana";
for (const character of fullname) {
  document.writeln(`<p>${character}</p>`);
}
