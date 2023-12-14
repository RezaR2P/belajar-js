// mirip dengan break tapi continue hanya akan menghentikan perulangan saat ini dan akan melanjutkan ke perulangan selanjutnya

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  document.writeln(`Perulangan ganjil ke ${i} <br>`);
}
