// Ada waktunya kadang kita ingin meng agregate beberapa module menjadi satu agar penggunaannya lebih sederhana
// Jika module sudah banyak, maka ketika butuh banyak kode dari banyak module, kita harus sebutkan nama module tersebut tiap kalo import
// Dengan melakukan aggregate, kita bisa membuat module aggregate, yang isinya menggabungkan export dari module lain
// Caranya sangat mudah, cukup gunakan perintah :
// export {a, b, c} from “./module.js”

export { Person } from "./class.js";
export { sayHello, sayBye } from "./function.js";
export { sum } from "./multiple.js";
