// switch adalah perbandingan yang sama dengan if else namun lebih sederhana kondisi di switch statement hanya untuk perbandingan ==
const nilai = prompt("Berapa Nilai Anda A-E?");
switch (nilai) {
  case "A":
    document.writeln("Selamat Anda Lulus Dengan Baik");
    break;
  case "B":
  case "C":
    document.writeln("Selamat Anda Lulus");
    break;
  case "D":
    document.writeln("Maaf Anda Belum Lulus");
    break;
  default:
    document.writeln("Mungkin Anda Salah Jurusan");
}
