// // Mendefinisikan nilai ujian dan absensi
// const nilaiUjian = 90;
// const nilaiAbsensi = 70;

// // Menentukan apakah siswa lulus ujian (nilaiUjian > 75)
// const lulusUjian = nilaiUjian > 75;

// // Menentukan apakah siswa lulus absensi (nilaiAbsensi > 75)
// const lulusAbsensi = nilaiAbsensi > 75;

// // Menentukan apakah siswa lulus keseluruhan (lulusUjian AND lulusAbsensi)
// const lulus = lulusUjian && lulusAbsensi;

// // Menampilkan hasil apakah siswa lulus atau tidak
// document.writeln(lulus); // jika ada salah satu yg false maka akan tidak lulus

// Mendefinisikan nilai ujian dan absensi
const nilaiUjian = 90;
const nilaiAbsensi = 70;

// Menentukan apakah siswa lulus ujian (nilaiUjian > 75)
const lulusUjian = nilaiUjian > 75;

// Menentukan apakah siswa lulus absensi (nilaiAbsensi > 75)
const lulusAbsensi = nilaiAbsensi > 75;

// Menentukan apakah siswa lulus keseluruhan (lulusUjian OR lulusAbsensi)
const lulus = lulusUjian || lulusAbsensi;

// Menampilkan hasil apakah siswa lulus atau tidak
document.writeln("<p>", lulus, "</p>"); // jika ada salah satu yg bernilai true maka akan lulus

// Menentukan izin orang tua
let izinOrangTua = true;

// Memeriksa izin orang tua menggunakan operator NOT (!)
if (!izinOrangTua) {
  document.writeln("Anda tidak memiliki izin dari orang tua.");
} else {
  document.writeln("Anda diperbolehkan untuk melakukan kegiatan ini.");
}
