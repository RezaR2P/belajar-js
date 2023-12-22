// RegExp merupakan implementasi dari regular expression di JavaScript
// Regular expression merupakan fitur untuk mencari text dengan pola
// Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat object RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

const regex = /Reza/;
const regex2 = new RegExp("Reza");
const regex3 = new RegExp("/Reza/");

{
  const nama = "Reza Ramdan Permana";
  const regex = /Reza/;

  let result = regex.exec(nama);
  console.info(result); // menghasilkan apa yg kita panggil
  console.info(regex.exec("Tidak Ada"));

  let test = regex.test(nama);
  console.info(test); // menghasilkan boolean
  console.info(regex.test("Tidak Ada"));
}

{
  // regex modifier
  const nama = "Reza Ramdan \nPermana \nReza \nRamdan Permana";
  const regex = /Reza/gi;
  const regex1 = /ramdan/gi;

  let result;
  while ((result = regex.exec(nama)) !== null) {
    console.info(result);
  }

  while ((result = regex1.exec(nama)) !== null) {
    console.info(result);
  }
}

{
  // advance regex
  const regex = /rez[aiueo]/gi;
  const nama = "reza rezi rezu rezo azer reza reca rezo";

  let result;
  while ((result = regex.exec(nama)) !== null) {
    console.info(result);
  }
}

{
  const nama = "reza rezi rezu rezo azer reza reca rezo";
  console.info(nama.match(/rez[aiueo]/gi));
  console.info(nama.search(/rez[aiueo]/gi));
  console.info(nama.replace(/rez[aiueo]/gi, "kamu"));
  console.info(nama.replaceAll(/rez[aiueo]/gi, "kamu"));
  console.info(nama.split(/r/gi));
}

{
  //     Assersions : indikasi awal dan akhir teks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
  // Character Classes : membedakan antara huruf dan angka https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
  // Group dan Range : melakukan grouping atau range huruf atau angka https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
  // Quantifiers : menentukan jumlah huruf atau angka https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
}
