// kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance class tertentu atau bukan
// kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof maka hasilnya adalah object
// operator instanceof akan menghasilkan boolean, true jika benar object tersebut instance objectnya, false jika bukan
// operator instance of juga mendukung class inheritance, artinya instanceof juga bisa digunakan untuk mengecek, apkah sebuah object adalah instance dari class tertentu, atau turunan dari class tertentu?
class Employee {}

// class Manager {} // class biasa
class Manager extends Employee {} // class inheritance

const budi = new Employee();
const reza = new Manager();

// nilai dari class biasa
// console.info(budi instanceof Employee); // true
// console.info(budi instanceof Manager); // false
// console.info(reza instanceof Employee); // false
// console.info(reza instanceof Manager); //true

// hasil dari class inheritance
console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false
console.info(reza instanceof Employee); // true karena Manager adalah turunan dari Employee
console.info(reza instanceof Manager); //true
