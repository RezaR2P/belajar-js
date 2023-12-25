// NodeList adalah kumpulan dari Node
// Biasanya NodeList digunakan ketika kita menyeleksi banyak Node sekaligus, misal ketika kita ingin mengambil semua children di Node misalnya
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList

const list = document.querySelectorAll("li");
console.info(list);

const menu1 = document.getElementById("menu1").childNodes;
console.info(menu1);

const menu2 = document.getElementById("menu2").childNodes;
console.info(menu2);
