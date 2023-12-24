// Node memiliki banyak sekali property
// Property di Node banyak berisi informasi reference ke Node lain nya, seperti ke node parent nya, node children nya atau node sebelahnya
// https://developer.mozilla.org/en-US/docs/Web/API/Node#properties
const menu = document.getElementById("menu");
console.info(menu);
console.info(menu.children);

const second = document.getElementById("second");
console.info(second);
console.info(second.previousSibling.previousSibling); // knepa dua kali? karena kalo tidak sejajar ada text kosong yang di enter
console.info(second.nextSibling.nextSibling); // knepa dua kali? karena kalo tidak sejajar ada text kosong yang di enter
console.info(second.textContent);
