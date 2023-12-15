// ini masih tahapan belum benar benar menjadi standar ecmascript, jadi tidak semua browser mendukung fitur ini
// sama seperti di field access modifier juga bisa di method
// caranya sama dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut menjadi private

class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithOutName();
    }
  }
  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }
  #sayWithOutName() {
    console.info("Hello");
  }
}

const reza = new Person("Reza");
reza.say("");
