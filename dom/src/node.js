// Node adalah base class dari Document, Element dan Attr
// Artinya semua fitur yang dimiliki di Node dimiliki diturunannya
// Node dalam DOM itu bentuknya adalah Tree (pohon), artinya dengan Node, kita bisa melihat Parent (node diatas nya), Children (node dibawahnya), Sibling (node disebelahnya)
// https://developer.mozilla.org/en-US/docs/Web/API/Node

const menu = document.getElementById("menu");
console.info(menu);
const first = document.getElementById("first");
console.info(first);
const second = document.getElementById("second");
console.info(second);
