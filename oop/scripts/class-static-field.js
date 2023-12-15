// jika kita tambahkan static dalam class field, secara otomatatis field tersebut bukan lagi milik instance object, melainkan milik class nya itu sendiri
// biasanya static digunakan jika kita ingin membuat utility field atau function
// cara mengakses static class field tidak lagi lewat object, melainkan lewat classnya
// static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yg mengakses, hasilnya akan sama

class Configuration {
  static name = "Belajar Javascript OOP";
  static version = "1.0";
  static author = "Reza";
}

const config = new Configuration();
console.log(config);

Configuration.author = "Reza Permana";
console.info(Configuration.name);
console.info(Configuration.version);
console.info(Configuration.author);
