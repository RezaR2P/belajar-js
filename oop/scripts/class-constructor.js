// di class juga kita bisa menggunakan constructor dimana di situ kita bisa menambahkan parameter saat pertama kali membuat object nya
// untuk membuat constructor di class, kita bisa menggunakan kata kunci constructor

class Person {
  constructor(name) {
    // kode apapun
    console.info(`Membuat person ${name}`);
  }
}
const reza = new Person("Reza");
console.info(reza);

const budi = new Person("BUdi");
console.info(budi);
