// function adalah block program yang akan berjalan saat kita panggil
// di bahasa pemrograman lain di sebut juga method

// membuat function
function sayHelloWorld() {
  document.writeln(`Hello World! <br>`);
}

// memanggil function
sayHelloWorld();
sayHelloWorld(); // function boleh di panggil berkali kali

//                                  PARAMETER
// kita bisa mengirim informasi ke function yang ingin kita panggil
// untuk melakukan hal tersebut kita perlu mengisi parameter pada function yang sudah kita buat
// parameter di tempatkan didalam kurung () di deklarasi method
// parameter bisa lebih dari satu, jika lebih dari satu, harus di pisah menggunakan tanda koma

// membuat function
function sayHelloWorld(firstName, lastName) {
  document.writeln(`Hello World! ${firstName} ${lastName} <br>`);
}

// memanggil function
sayHelloWorld("Reza", "Permana");
sayHelloWorld("Azer", "Anamrep"); // function boleh di panggil berkali kali
