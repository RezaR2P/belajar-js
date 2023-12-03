// kalo array menggunakan []
// array dan objek sangat mirip
// membuat array
let names = [];
// menambahkan array
names.push("Reza");
names.push("ezra", "zareva");
names.push("udin", "tatang", "dadang");
// cek table dan keseluruhan array ada berapa
console.table(names);
console.info(names.length);

// edit array
names[0] = "asep";
console.table(names);

// hapus array
delete names[3];
console.table(names);

// array bebas boleh mamasukan semua tipe data apa saja
// kita juga bisa menggunakan array di dalam array

names.push([
  "Nama : Reza",
  "Makanan : Ayam",
  "hobi : main game",
  "citax : programmer",
]);
console.table(names);
