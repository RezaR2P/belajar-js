const company = "Cuy Universe";

function sum(first, second) {
  return first + second;
}

class Company {}

// Sebelumnya kita selalu menggunakan kata kunci export diawal variable, function atau class
// Sebenarnya kita bisa menggunakan export sekaligus beberapa data sekaligus, caranya cukup gunakan perintah :
// export { variable, function, class, danLainLain }
export { company, sum, Company };
