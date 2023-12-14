// kalo objek menggunakan {}
// array dan objek sangat mirip
let person = {
  // ini di gabung
  Nama: "Reza",
  // jika menggunakan lebih dari 1 kata maka bisa menggunakan petik dua atau underscore("" | _)
  "Nama Lengkap": "Reza Ramdan Asep",
  Alamat: "Bandung",
  Umur: "19",
};
// ini dipisah
// person["nama"] = "Reza Ramdan Permana";
// person["alamat"] = "Indonesia";
// person["umur"] = "19";

// jika propertinya cuma 1 kata maka gunakan seperti ini
console.info(`nama : ${person.Nama}`);
// jika dua kata maka gunakan ini
console.info(`Nama Lengkap : ${person["Nama Lengkap"]}`);
console.table(person);

delete person["umur"];
console.table(person);
