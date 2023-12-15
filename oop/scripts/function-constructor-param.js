// karena pada javascript class berbentuk function jadi secara default function tersebut memiliki parameter
// constructor function sama seperti function biasanya bisa memilki parameter, hal ini membuat kita ketika membuat object bisa mengirim data lewat parameter di constructor function tersebut

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name} my name is ${firstName} ${lastName}`);
  };
}

const reza = new Person("Reza", "Permana");
reza.sayHello("Dadang");
const budi = new Person("Budi", "Bambang");
reza.sayHello("Tatang");
console.info(reza);
console.info(budi);
