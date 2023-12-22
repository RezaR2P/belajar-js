// javascript mendukung konversi data dari object ataupun sebaliknya
// JSON.stringify() digunakan untuk mengkonversi dari object ke string
// JSON.parse() digunakan untuk mengkonversi dari string ke object
const person = {
  firstName: "Reza",
  lastName: "Permana",
  address: {
    country: "Indonesia",
    city: "Bandung",
  },
  hobi: ["Programming", "Gaming", "Baca Buku"],
};
// json boleh menggunakan array contoh ([person])
const json = JSON.stringify(person);
console.info(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
