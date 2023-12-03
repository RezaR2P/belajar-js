// ternary adalah singkataan dari if else dan hanya bisa dua statement

const nilai = 74;
let ucapan;
// versi if else
if (nilai >= 75) {
  ucapan = "Selamat Anda Lulus";
} else {
  ucapan = "Mohon di coba kembali";
}
document.writeln(`${ucapan}`);

// versi ternary terlihat sangat lebih simpel tidak perlu if else hanya menggunakan ? dan :
// ? adalah jika bernilai true maka lakukan... ,sedangkan : jika false maka lakukan....
ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Mohon Di Coba Kembali";
document.writeln(`${ucapan}`);
