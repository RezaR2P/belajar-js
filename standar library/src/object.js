{
  // object freeze membuat suatu value tidak bisa dirubah maupun di hapus
  //   seal hanya tidak bisa di hapus tapi tetap bisa dirubah
  let person = {
    firstName: "Reza",
    lastName: "Permana",
  };
  Object.freeze(person);
  //   Object.seal(person);
  person.firstName = "tatang";
  delete person.lastName;
  console.info(person);
}

{
  // object assign mengcopy sebuah objek dan kita harus hati hati ketika ada attribut yg sama maka akan di timpa
  const target = {
    firstName: "Reza",
  };
  const source = {
    lastName: "Permana",
  };
  Object.assign(target, source);
  console.info(target);
  console.info(source);
}

{
  // object property name and value untuk mencari tahu property apa saja dan isi value nya
  let person = {
    firstName: "Reza",
    lastName: "Permana",
  };
  console.info(Object.values(person));
  console.info(Object.getOwnPropertyNames(person));
}
