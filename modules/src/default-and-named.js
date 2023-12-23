// Dalam satu module, kita bisa menggabungkan export default dan export named
// Yang tidak boleh adalah, dalam satu module, membuat lebih dari satu default
// Cara import default dan named secara bersamaan bisa menggunakan perintah :

// import defaultAlias, {named1, named2} from “./module.js”;
// import {default as defaultAlias, named1, named2} from “./module.js”;

export const title = "Belajar Javascript Module";
const content = "Programmer Zaman Now";
const author = "Eko Kurniawan Khannedy";

export { content };
export default { author };

// Rekomendasi
// Bedakan antara default dan named, karena jika digabungkan kadang akan membingungkan ketika melakukan import
// Sebisa mungkin selalu gunakan export named dibandingkan export default
