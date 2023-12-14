// nested function biasanya kita sebut inner function
// inner function hanya bisa di panggil di dalam function tidak bisa di panggil di luar function
// jika jika panggil di luar maka akan terjadi error, kita cukup hanya memanggil function outernya atau function parent nya
function outer() {
  function inner() {
    console.info("Peler");
  }
  inner();
  inner();
}

outer();
inner(); // ini error
