// class inheritance sifatnya seperti prototype inheritance
// bagaimana dengan constructor inheritance? sebenarnya constructor inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar di constructor lain bisa di tambahkan ke istance object ini
// dalam kasus ini, jika kita ingin mencapai hasil yg sama, kita bisa mnggunakan kata kunci super di dalam constructor
// kata kunci super digunakan untuk memanggil constructor super class
// jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor

class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  //   ini adalah method yg ada di prototype
  sayHello(name) {
    console.info(`Hello ${name} my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    // ketika memanggil constructor di child maka wajib memanggil super constructornya jika tidak maka akan terjadi error
    super(firstName);
    this.lastName = lastName;
  }
  //   ini adalah method yg ada di prototype
  sayHello(name) {
    console.info(
      `Hello ${name} my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}

const budi = new Employee("Budi");
budi.sayHello("pler");
console.info(budi);

const reza = new Manager("Reza", "Permana");
reza.sayHello("pler");
console.info(reza);
