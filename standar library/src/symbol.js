// Symbol merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
// Symbol kadang banyak digunakan untuk membuat key pada object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const firstName = Symbol("firstName");
const lastName = Symbol("lastName");

const person = {};
person[firstName] = "Reza";
person[lastName] = "Permana";

console.info(person);
console.info(person[firstName]);
console.info(person[lastName]);
console.info(person[firstName], person[lastName]);

{
  //     Kadang agak sulit membuat symbol harus selalu menggunakan variable
  // Pembuatan symbol juga bisa menggunakan static method Symbol.for(key)
  // Jika kita menggunakan key yang sama, Symbol yang sama akan sekalu dikembalikan
  const person = {};
  person[Symbol.for("firstName")] = "Reza";
  person[Symbol.for("lastName")] = "Permana";

  console.info(person);
  console.info(person[Symbol.for("firstName")]);
  console.info(person[Symbol.for("lastName")]);
  console.info(person[Symbol.for("firstName")], person[Symbol.for("lastName")]);
}
