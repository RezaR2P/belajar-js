// Proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
// Dengan menggunakan proxy, semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// Dengan ini, kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// Pembuatan Proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
// Untuk membuat Proxy, kita bisa menggunakan new Proxy(target, handler)

const target = {};
const handler = {
  get: function (target, property) {
    console.info(`Access property : ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.info(`Change property ${property} : ${value}`);
    if (value == null) {
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Reza";
proxy.lastName = null;

console.info(proxy.firstName);
console.info(proxy.lastName);
console.info(target);

{
  //     Saat kita mengubah data proxy, secara otomatis data akan dikirim ke target melalui handler dengan memanggil function set(target, property, value)
  // Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil function get(target, property)
  // Artinya, jika kita ingin melakukan sesuatu sebelum dan setelah nya, bisa kita lakukan di handler
}
