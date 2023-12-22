// Map merupakan representasi dari struktur data key-value
// Map mirip dengan tipe data object, hanya saja pada Map, semua method untuk manipulasi data sudah disediakan
// Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set("Nama", "Reza Permana");
map.set("Address", "Indonesia");

console.info(map);
console.info(map.get("Nama"));
console.info(map.get("Address"));
console.info(map.get("hobi"));

for (const element of map) {
  console.info(`${element[0]} : ${element[1]}`);
}

map.forEach((key, value) => {
  console.info(`${value} : ${key}`);
});
