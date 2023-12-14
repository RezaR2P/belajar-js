// Rest parameter adalah fitur dimana kita bisa mengirim data sebanyak banyaknya dan di konversi menjadi array
// rest parameter hanya boleh satu pada function tidak boleh lebih dari satu
// rest parameter hanya boleh berada posisi paling akhir, tidak boleh di depan, tengah kecuali hanya satu parameter
// di bahasa pemrograman lain ini ada yang bilang argument
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.info(`Total ${name} is ${total}`);
}

sum("jeruk", 10, 20, 30, 10, 30, 10); // maka hasilnya jeruk is 110 mentotal kan data semuanya
const value = [10, 10, 10, 10, 10];
sum("mangga", value);
// disini kita bisa menggunakan spreed syntax agar array bisa terkirim ke rest parameter
// kita bisa gunakan ...(titik tiga kali) di ikuti dengan nama array yang kita buat sebelumnya kedalam function
sum("mangga", ...value); // dan hasilnya menjadi mangga is 50
