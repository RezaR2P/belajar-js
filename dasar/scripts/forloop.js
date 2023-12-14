// for (init statement ; kondisi; post statement) {
//     block perulangan

// }
// init statemend alan di eksekusi hanya sekali di awal sebelum perulangan
// kondisi akan di cek setiap perulangan, jika true perulangan akan dilakukan, jika false perulangan berhenti
// post statement akan di eksekusi setiap kali di akhir perulangan
// semuanya tidak wajib di isi, jika kondisi tidak di isi artinya selalu bernilai true

// loop tidak bakalan berhenti
// for (;;) {
//   alert("For loop");
// }

// let nilai bisa di masukan pada init statement jika hanya sekali di eksekusinya
// nilai++ selalu di eksekusi di akhir perulangan maka boleh di masukan di bagian post statement
for (let nilai = 1; nilai <= 10; nilai++) {
  document.writeln(`Perulangan ke ${nilai} <br>`);
}
