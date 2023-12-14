// Operator OR || sering digunakan di javascript non boolean
// operator or membaca dari kiri ke kanan
// nilai pertama or adalah truthy
// jika tidak ada nilai truthy maka nilai akhir yang di ambil

console.info("Hello" || ""); // yang bernilai true Hello
console.info("" || "[]"); // yang bernilai true objek
console.info("0" || "NOL"); // dua daunya bernilai true maka mengambil kiri yaitu 0
console.info(0 || "NOL"); // yg bernilai true NOL
console.info(null || "NULL"); // yang bernilai true str NULL
console.info(undefined || "UNDEFINED"); // yg bernilai true string UNDEFINED
console.info(0 || false); // dua duanya false maka yang di ambil yang kanan

const person = {
  firstName: undefined,
  lasName: "Permana",
};
const nama = person.firstName || person.lasName;
console.info(nama); // yg bernilai true permana

// Operator AND && kebalikan dari OR yang mengambil false terlebih dahulu

console.info("Hello" && ""); // yang bernilai false ""
console.info("" && "[]"); // yang bernilai false ""
console.info("0" && "NOL"); // dua daunya bernilai true maka mengambil kanan yaitu NOL
console.info(0 && "NOL"); // yg bernilai false 0
console.info(null && "NULL"); // yang bernilai false null
console.info(undefined && "UNDEFINED"); // yg bernilai false undefined
console.info(0 && false); // dua duanya false maka yang di ambil yang kiri

person = {
  firstName: undefined,
  lasName: "Permana",
};
nama = person.firstName && person.lasName;
console.info(nama); // yg bernilai false undefined
