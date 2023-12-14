// secara default function tidak menghasilkan value apapun,naun jika kita ingin kita bisa membuat sebuah function mengembalikan value
// agar function bisa menghasilkan value kita bisa mnggunakan kata kuni return di dalam function nya lalu di ikuti data yang ingin kita hasilkan
// function hanya bisa mengembalikan satu data , jika kita ingin mengembalikan lebih dari satu dara kita bisa menggunakan array [] sebagai return value nya

// membuat function dengan parameter dan return value nya
function sayHelloWorld(firstName, lastName) {
  const say = `Hello World! ${firstName} ${lastName}`;
  return say;
}

// jika kita memanggil function dan tidak menangkap return nya terlebih dahulu maka hasilnya kosong tidak ada data apapun
// sayHelloWorld("Reza", "Permana");

// memanggil function dan menangkap return valuenya
const result = sayHelloWorld("Reza", "Permana");
document.writeln(`${result} <br>`);
document.writeln(`${result} <br>`);
document.writeln(`${result} <br>`);
document.writeln(`${result} <br>`);

//                    FUNCTION RETURN LEBIH DARI SATU
function getFinalValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else {
    return "D";
  }
}

const finalValue = getFinalValue(99);
document.writeln(finalValue);

// kita juga bisa menghentinkan program menggunakan return
// contoh
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 23, 5, 4, 7, 64, 43, 765, 3, 8, 9, 5, 545];
const search = 23;
const found = isContains(array, search);
document.writeln(`${found} <br>`);
