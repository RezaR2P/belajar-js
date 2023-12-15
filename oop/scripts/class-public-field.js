// public artinya bisa di akses dari luar
// untuk membuat public class field, kita bisa langsung buat nama field dengan valuenya selevel dengan method
// jika tidak memasukkan value ke dalam field tersebut, artinya field tersebut memiliki value undefined
// ini masih tahapan belum benar benar menjadi standar ecmascript, jadi tidak semua browser mendukung fitur ini

class Custumer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {}
}

const reza = new Custumer("Reza", "Permana");
console.info(reza);
