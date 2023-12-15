// Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilah nya adalah melempar error (throw error)
// untuk melempar error kita bisa gunakan kata kunci throw, diikuti dengan instance object errornya
// jika terjadi error maka otomatis program kita akan terhenti, dan kita bisa melihat detail errornya di console di aplikasi browser kita

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}
console.info(MathUtil.sum()); // program selanjutnya tidak di eksekusi dan error nya kelihatan di sini

// untuk mengakses nya kita panggil class terus di sertain nama method nya
const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);
