function sayHello(name) {
  document.writeln(`Hello ${name} <br>`);
}

const say = sayHello;
// memanggil nama function sbg value
say("Reza");
// memanggil nama function nya langsung
sayHello("Dadang");

// memangil function ke dalam parameter menggunakan callback
function giveMeName(callback) {
  callback("Reza");
}

giveMeName(sayHello);
giveMeName(say);
