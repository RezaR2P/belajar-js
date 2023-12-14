// debugger digunakan untuk mencari bug yg biasanya terjadi pada program kita
// dengan debugger kita bisa menghentikan program di posisi yang kita inginkan, lalu melihat semua isi variabel yg ada pada saat program berhenti

function createFullName(firstName, middleName, lastName) {
  const fullName = `${firstName} ${lastName} ${lastName}`;
  return fullName;
}

const name = createFullName("Reza", "Ramdan", "Permana");
console.info(name);

function sum(...numbers) {
  debugger;
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
console.info(sum(1, 1, 1));
