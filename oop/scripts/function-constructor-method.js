{
  function Person() {
    this.firstName = "";
    this.lastName = "";
    // kita bisa menambahkan method didalam constructor fuction
    // jika kita tambahkan method di dalam function secara otomatis object yang kita buat mempunyai method tersebut
    this.sayHello = function (name) {
      console.info(
        `Hello ${name} my name is ${this.firstName} ${this.lastName}`
      );
    };
  }

  const reza = new Person();
  reza.firstName = "Reza";
  reza.lastName = "Permana";
  //   dipanggil disini dan mengisikan value namanya
  reza.sayHello("Tatang");
  const budi = new Person();
  budi.firstName = "Budi";
  budi.lastName = "Bambang";
  //   dipanggil disini dan mengisikan value namanya
  budi.sayHello("Dadang");
  console.info(reza);
  console.info(budi);
}
