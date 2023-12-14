// function juga bisa dimasukan ke dalam property object
// cara pembuatan nya pun sama dengan function sebagai value
// function pada objek sering di bilang dengan oject method

// cara pertama
// function sayHello(name) {
//   alert(`Hello ${name}`);
// }
const person = {
  name: "Reza",
  //   sayHello: sayHello,
  sayHello: function (name) {
    alert(`Hello ${name}`);
  },
};
person.sayHello("Budi");

// cara kedua
const orang = {
  name: "Reza",
};
orang.sayHello = function (name) {
  alert(`Hello ${name}`);
};
orang.sayHello("budi");
