// private artinya tidak bisa diakses dari luar hanya bisa dari dalam
// jika kita ingin membuat field yang bersifat private kita bisa gunakan tanda # sebelum nama fieldnya
// ini masih tahapan belum benar benar menjadi standar ecmascript, jadi tidak semua browser mendukung fitur ini

class Counter {
  #counter = 1;
  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();
console.info(counter);
counter.increment();
counter.increment();
counter.increment();
console.info(counter.get());
