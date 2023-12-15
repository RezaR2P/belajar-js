// walaupun javascript sudah memiliki standar class error namun kita membedakan tiap jenis error
// untuk membuat class error manual kita cukup membuat class turunan error dan jgn lupa tambahkan parameter message, agar bisa dikirimkan ke constructor class error
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "numbers"
      );
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum(1)); // program selanjutnya tidak di eksekusi dan error nya kelihatan di sini
  console.info("Reza");
} catch (error) {
  if (error instanceof ValidationError) {
    console.info(
      `Terjadi error di field ${error.field} dengan error ${error.message}`
    );
  } else {
    console.info(`Terjadi error : ${error.message}`);
  }
  // mulai dari sini program akan di eksekusi kembali
} finally {
  // disini misalnya kita bisa menutup akses ke database
  console.info("Program Selesai");
}
console.info("Permana");
