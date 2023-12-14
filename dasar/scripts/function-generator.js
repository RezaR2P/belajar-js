// function generator adalah function yang digunakan untuk membuat data generator
// generator adalah data yang bisa di iterasi seperti array
// untuk membuat generator kita bisa menggunakan tanda * (bintang) setelah kata function
// dan untuk mengembalikan data di tiap iterasi kita bisa menggunakan kata kunci yield dan di ikuti datanya

function* createNames() {
  yield "Reza";
  yield "Ramdan";
  yield "Permana";
}

const names = createNames();
for (const name of names) {
  console.info(name);
}

function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Perulangan ke ${i}`);
      yield i;
    }
  }
}

const angkaGanjil = buatGanjil(100);
console.info(angkaGanjil.next().value);
