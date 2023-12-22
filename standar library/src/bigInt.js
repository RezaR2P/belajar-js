// BigInt merupakan tipe data number yg bisa mencakup data lebih dari max. MAX_SAFE_INTEGER
// untuk kasus yg seperti itu sangat disarankan menggunakan BIGINT
// cara penggunaan bigint sama saja dengan penggunaan number dan juga operator

const a = BigInt(Number.MAX_SAFE_INTEGER);
const b = BigInt(Number.MAX_SAFE_INTEGER);
const d = Number(Number.MAX_SAFE_INTEGER);

const c = a + b;
console.info(c);
console.info(typeof c);
console.info(d);
console.info(typeof d);
