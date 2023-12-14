// saat kita menggunakan bahasa javascript default nya berjalan tidak dalam mode strict atau istilahnya sloopy mode
// pada EcmaScript5 diperkenalkan strict mode, dimana ketika kita mulai menjalankan strict mode maka akan merubah beberapa cara kerja javascript
// cara menyalakan mode script kita cukup menambahkan "use strict"; pada baris awal file javascript kalo di html pada bagian dalam function

"use strict";
function useStrictMode() {
  const person = {
    firstName: "Reza",
  };
  //   ketika menggunakan strict mode code code yg tidak di rekoendasikan akan error
  with (person) {
    console.info(firstName);
  }
}
useStrictMode();
