// setiap kita membuat sebuah constructor function maka akan secara otomatis dibuatkan prototypenya, misalkan kita membuat constructor function nama Person maka akan ada Person.prototype
// saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan constructor.prototype nya
// untuk mengakses protype milih sebuah instance nya kita bisa gunakan __proto__

{
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
      console.info(
        `Hello ${name} my name is ${this.firstName} ${this.lastName}`
      );
    };
  }

  const reza = new Person("Reza", "Permana");
  reza.sayBye = function () {
    console.info("Good Bye");
  };
  const budi = new Person("Budi", "Bambang");

  console.info(reza);
  console.info(budi);
}

// Pusing coy wajib di pelajarin lagi
// tidak jadi karena sudah tidak di pake
// masih harus dipelajarin ternyata coyyy krayy
