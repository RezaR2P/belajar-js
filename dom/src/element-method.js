// Element memiliki banyak sekali method
// Dan karena Element adalah turunan dari Node, semua method Node pun bisa digunakan di Element
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods

const title = document.getElementById("title");
const description = document.getElementById("description");

title.remove();
description.remove();
