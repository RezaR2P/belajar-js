const value = 1;
const value1 = "1";

// jika ada string maka nilai nya akan di konversi menjadi string bukan aritmatika
const sum = value + value1;

document.writeln(`<p>${sum}</p>`);

// mengubah menjadi bilangan bulat
document.writeln(`<p>${parseInt(1.9)}`);
// mengubah menjadi bilangan pecahan
document.writeln(`<p>${parseFloat(1.9)}`);
// flexibel bisa menjadi pecahan,bilangan bulat
document.writeln(`<p>${Number(1.9)}`);

// mengubah menjadi string
let a = 1;
let b = 2;
let total = a.toString() + b.toString();
document.writeln(`<p>${total}</p>`);

// akan menjadi muncul eror NaN yaitu not a number dan ntah kenapa tidak bisa melanjutkan program selanjutnya
// document.writeln(`<p>${parseInt("1salah")}`);
// document.writeln(`<p>${parseFloat("1.3ts")}`);
// document.writeln(`<p>${Number("1salda")}`);

const first = Number("salah");
const totalNumber = first + 100;
// maka hasilnya akan tetap nan walaupun sudah di tambah berapapun
document.writeln(`<p>${totalNumber}</p>`);
// untuk mengecek ini nan dan bukan kita bisa menggunakan isNaN
document.writeln(`<p>${isNaN(first)}</p>`);
document.writeln(`<p>${isNaN(100)}</p>`);
document.writeln(`<p>${isNaN(NaN)}</p>`);
