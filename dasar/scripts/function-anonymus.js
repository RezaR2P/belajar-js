// kita juga bisa membuat sebuah function tanpa nama
// anonymus function bisa digunakan hanya dengan dua cara yaitu dimaksukan kedalam variabel atau parameter

// dimasukan ke variabel
let say = function (name) {
  document.writeln(`Hello ${name} <br>`);
};
// jika tidak adanamanya terus bagaimana cara memanggil nya? kita bisa gunakan nama variabel atau parameternya
say("Reza");

// dimasukan ke dalam parameter
function giveMeName(callback) {
  callback("Azeer");
}
giveMeName(say);

giveMeName(function (name) {
  document.writeln(`HI ${name}`);
});
