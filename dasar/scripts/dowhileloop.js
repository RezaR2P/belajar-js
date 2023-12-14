// perulangan yang mirip dengan while perbedaan hanya ada pada pengecekan kondisi
// pengecekan kondisi pada while loop dilakukan di awal sebelum perulangan dilakukan, sedangkan di do while loop dilakukan setelah perulangan
// oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true

let nilai = 1;
do {
  document.writeln(`Perulangan ke ${nilai} <br>`);
  nilai++;
} while (nilai <= 20);
