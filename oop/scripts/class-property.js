// sama seperti constructor kita juga bisa menambahkan property pada class
// karena hasil akhirnya object jadi menambahkan property di class bisa juga di instace object nya

class Person {
  constructor(name) {
    // kode apapun
    this.name = name;
    console.info(`Membuat person ${name}`);
  }
}
const reza = new Person("Reza");
console.info(reza);

const budi = new Person("BUdi");
console.info(budi);
