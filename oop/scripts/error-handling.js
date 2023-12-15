// saat terjadi error di kode program javscript, kadang kita kode programnya tidak ingin berhenti
// kita bisa gunakan try catch statement untuk menangkap error
// pada blok try kita akan mencoba mengakses kode program yg menyebabkan error, dan jika terjadi error blok try akan berhenti dan otomatis masuk ke blok catch
// jika tidak terjadi error blok catch tidak akan di eksekusi
// kadang kita ingin melakukan sesuatu entah itu terjadi error atau tidak
// dalam try catch kita bisa menambahkan blok finally
// kata kunci finally ini akan selalu di eksekusi setelah try catch selesai entah terjadi error atau tidak
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

try {
  console.info(MathUtil.sum()); // program selanjutnya tidak di eksekusi dan error nya kelihatan di sini
  console.info("Reza");
} catch (error) {
  console.info(`Terjadi error : ${error.message}`); // mulai dari sini program akan di eksekusi kembali
} finally {
  // disini misalnya kita bisa menutup akses ke database
  console.info("Program Selesai");
}
console.info("Permana");
