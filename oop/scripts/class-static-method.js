// kata kunci static tidak hanya di field di method juga bisa
// jika static ditambah di method artinya method tersebut jadi milik classnya bukan prototype
// dan untuk mengakses method static, kita juga bisa melakukan sama seperti di static field

class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}
// untuk mengakses nya kita panggil class terus di sertain nama method nya
const result = MathUtil.sum(1, 1, 1, 1);
console.info(result);
