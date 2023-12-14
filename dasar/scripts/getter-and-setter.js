// getter dan setter adalah kemampuan membuat function untuk mengambil data (getter) dan merubah data (setter) pada sebuah property object
// dengan menggunakan getter dan setter kita bisa melakukan hal apapun dalam function sebelum sebuah property diakses atau diubah. misalkan menambah validasi dll

// getter
const person = {
  firstName: "Reza",
  lastName: "Permana",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  //   setter
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "Azer Aja";
console.table(person);
person.fullName = "apa ya";
console.table(person);
person.fullName = "km aja";
console.table(person);
