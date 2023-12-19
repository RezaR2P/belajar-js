{
  // hanya 1 kondisi
  let nilai = 80;
  if (nilai >= 80) {
    console.info("Selamat Anda Lulus");
  } else {
    console.info("Maaf Anda Tidak Lulus");
  }
}

// lebih dari satu kondisi
{
  let nilai = 55;
  if (nilai >= 80) {
    console.info("A");
  } else if (nilai >= 70) {
    console.info("B");
  } else if (nilai >= 60) {
    console.info("C");
  } else {
    console.info("D");
  }
}

{
  // versi ternary terlihat sangat lebih simpel tidak perlu if else hanya menggunakan ? dan :
  // ? adalah jika bernilai true maka lakukan... ,sedangkan : jika false maka lakukan....
  ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Mohon Di Coba Kembali";
  document.writeln(`${ucapan}`);
}

// menggunakan logikal operator
{
  let nilai = 55;
  if (nilai >= 80 && nilai <= 100) {
    console.info("A");
  } else if (nilai >= 70 && nilai < 80) {
    console.info("B");
  } else if (nilai >= 60 && nilai < 70) {
    console.info("C");
  } else {
    console.info("D");
  }
}

{
  let nilai = 100;
  //  && kedua kondisi harus terpenuhi agar hasilnya true. Jika salah satu kondisi salah, hasilnya false
  let banding = nilai >= 80 && nilai <= 100; // antara true atau false
  console.info(banding);
  //   || Jika keduanya salah, baru hasilnya false.
  banding = nilai >= 80 || nilai <= 100; // antara true atau false
  console.info(banding);
}

{
  // Fungsi: Memeriksa apakah dua nilai atau ekspresi tidak sama.
  // Contoh: Jika A != B, maka hasilnya true jika A tidak sama dengan B.
  // Analisis: Seperti bertanya, "Apakah A tidak sama dengan B?"
  if (umur != 18) {
    console.log("Bukan remaja 18 tahun.");
  }

  //   Fungsi: Memeriksa apakah dua nilai atau ekspresi tidak hanya tidak sama, tetapi juga tidak memiliki tipe data yang sama.
  //   Contoh: Jika A !== B, maka hasilnya true jika A tidak sama dengan B atau tipe datanya berbeda.
  //   Analisis: Lebih ketat dibandingkan !=, bertanya, "Apakah A tidak hanya tidak sama dengan B, tetapi juga memiliki tipe data yang berbeda?"
  if (angka !== "5") {
    console.log("Angka bukan string 5.");
  }
}
