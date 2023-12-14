// forin merupakan perulangan for untuk mengiterasi seluruh data properti di objeck atau index di array
// walaupun forin bisa digunakan di array ini tidak direkomendasikan karena biasanya kita jarang sekali butuh data index untuk array. kita bisa menggunakan for of

const person = {
  firstName: "Reza",
  middleName: "Ramdan",
  lastName: "Permana",
};

for (const property in person) {
  document.writeln(`${property} : ${person[property]}<br>`);
}
