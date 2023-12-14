// recursive function adalah kemampuan function memanggil dirinya sendiri
// kadang memang ada banyak problem, yg lebih mudah dikerjakan menggunakan function recursive contoh kasusnya factorial

function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}
console.info(factorial(5));

function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
console.info(factorialRecursive(5));

// factorialRecursive(5);
// 5 * factorialRecursive(4);
// 5 * 4 * factorialRecursive(3);
// 5 * 4 * 3 *factorialRecursive(2);
// 5 * 4 * 3 * 2 * factorialRecursive(1);
// 5 * 4 * 3 * 2 * 1 mereturn 1
