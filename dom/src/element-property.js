// Element memiliki banyak sekali property
// Dan karena Element adalah turunan dari Node, semua property Node pun bisa digunakan di Element
// https://developer.mozilla.org/en-US/docs/Web/API/Element#properties

const content = document.getElementById("content");

console.info(content.id);
console.info(content.className);
console.info(content.tagName);
