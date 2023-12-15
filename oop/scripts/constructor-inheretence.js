// didalam constructor kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yg dibuat di constructor lain tersebut
// untuk memanggil constructor lain kita bisa menggunakan NamaConstructor.call(this, parameter)

function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name} my name is ${firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}
const reza = new Manager("Reza", "Permana");
console.info(reza);
