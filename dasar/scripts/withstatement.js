// dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya
// with statement sudah sangat tidak direkomendasikan
// tanpa with statement
const person = {
  firstName: "Reza",
  middleName: "Ramdan",
  lastName: "Permana",
};

console.info(person.firstName);
console.info(person.middleName);
console.info(person.lastName);

// pake with statement

with (person) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}
