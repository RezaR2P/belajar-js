// sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
// di javascript, class inheritence sama seperti prototype inheritence, hanya bisa memilki satu parent class

class Employee {
  //   ini adalah method yg ada di prototype
  sayHello(name) {
    console.info(`Hello ${name} my name is employee ${this.name}`);
  }
}

class Manager extends Employee {
  //   ini adalah method yg ada di prototype
  sayHello(name) {
    console.info(`Hello ${name} my name is manager ${this.name}`);
  }
}

const reza = new Employee("");
reza.name = "Reza";
reza.sayHello("pler");
console.info(reza);

const budi = new Manager("");
budi.name = "BUdi";
budi.sayHello("pler");
console.info(budi);
