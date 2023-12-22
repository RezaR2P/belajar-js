// Reflect merupakan class yang digunakan untuk mengeksekusi JavaScript function
// Reflect tidak memiliki constructor, dan cara penggunaan Reflect tidak dengan membuat object dengan new Reflect
// Penggunaan Reflect adalah menggunakan banyak sekali static methodnya
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

const person = {};

Reflect.set(person, `firstName`, `Reza`);
Reflect.set(person, `lastName`, `Permana`);
console.info(person);
console.info(Reflect.has(person, "firstName"));
console.info(Reflect.has(person, "lastName"));
console.info(Reflect.has(person, "midleName"));
