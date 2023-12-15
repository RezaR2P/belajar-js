// class juga mendukung pembuatan getter dan setter
// perlu diingat, getter dan setter ini berada di prototype bukan di instance object

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const reza = new Person("Reza", "Permana");
console.info(reza);
console.info(reza.fullName);

reza.fullName = "Budi Anime";
console.info(reza);
