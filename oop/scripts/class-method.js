// membuat method di class sebenernya sama seperti di constructor namun hal tersebut sebenarnya menambahkan method ke dalam instace object
// khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object. untungnya di class ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype

class Person {
  constructor(name) {
    this.name = name;
  }
  //   ini adalah method yg ada di prototype
  sayHello(name) {
    console.info(`Hi ${name} my name is ${this.name}`);
  }
}
const reza = new Person("Reza");
console.info(reza);
reza.sayHello("pler");

const budi = new Person("BUdi");
console.info(budi);
budi.sayHello("pler");
