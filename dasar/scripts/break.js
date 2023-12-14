// break selain di switch statement kita juga bisa menggunakan nya pada perulangan break juga digunakan untuk menghentikan seluruh perulangan

let nilai = 1;
while (true) {
  document.writeln(`Perulangan ke ${nilai} <br>`);
  nilai++;

  if (nilai > 10) {
    break;
  }
}
