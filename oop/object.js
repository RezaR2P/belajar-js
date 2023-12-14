// menggunakan object biasa akan membuat object selalu unik, sedangkan dalam oop biasanya akan membuat class sebagai cetakan sehingga bisa membuat object berkali kali tanpa harus mendeklarasikan object berkali kali seperti menggunakan tipe data object

{
  // object biasa
  const reza = {
    firstName: "Reza",
  };

  const azer = {
    firstName: "Azer",
  };
}

// MEMBUAT CONSTRUCTOR FUNCTION
// sebelum ecmascrip versi 6 pembuatan class biasanya menggunakan function, hal ini dikarenakan javascript tidak di fokuskan ke oop
// function ini kita sebut constructor function

{
  // javascript oop versi lama
  // khusus untuk constructor function huruf pertamanya besar contoh nya HelloWorld bukan helloWorld
  function Person() {
    // untuk menambahkan property di dalam semua object yang dibuat dari construtor function, kita bisa menggunakan kata kunci this.lalu di ikutin nama property nya
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
  //   setelah kita membuat class jika kita ingin membuat object dari class tersebut kita bisa menggunakan kata kunci new, lalu di ikutin nama constructornya
  const reza = new Person();
  reza.firstName = "Reza";
  reza.lastName = "Permana";
  reza.sayHello("Tatang");
  const budi = new Person();
  budi.firstName = "Budi";
  budi.lastName = "Bambang";
  budi.sayHello("Dadang");
  console.info(reza);
  console.info(budi);
}
