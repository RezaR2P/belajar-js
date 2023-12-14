// arrow function adalah alternatif pembuatan function sederhana dari function biasanya
// namun ada limitasi tidak bisa digunakan di semua situasi
// dinamakan arrow function karena mirip dengan anak panah =>
// contoh kekurangan arrow function yaitu tidak dpt menggunakan argument, tidak bisa menggunakan generator, tidak bisa menggunakan this, tidak bisa mengakses super
// arrow function mirip dengan anonymus function tapi lebih simpel dan sekarang kebanyakan di industri dipakai

// tidak menggunakan arrow function
// const sayHello = (names) => {
//   const say = `Hello mf ${names}`;
//   console.info(say);
// };

// menggunakan arrow function
const sayHello = (names) => console.info(`Hello ${names}`);
sayHello("puki");

// function kedua menggunakan arrow function membuat sum pertambahan
const sum = (first, second) => first + second;
console.info(sum(100, 100));

function giveMeName(callback) {
  callback("sayang");
  callback("pler");
}
// anonymus function
// giveMeName(function (name) {
//   console.info(`Hello ${name}`);
// });

// arrow function
giveMeName((name) => console.info(`Hello ${name}`));
