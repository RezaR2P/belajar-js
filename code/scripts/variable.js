// Variabel adalah tempat menyimpan data dengan jika ingin digunakan cukup memanggilnya, variabel bisa menyimpang data string boleean number dll
// fullName = "udin"; // ini adalah penggantian variabel yang salah

var firstName = "RezaRP";
// variabel bisa di ganti valuenya dan bebas letaknya dimana saja asal di bawah variabel yg di tuliskan sebelumnya dengan cara seperti ini
firstName = "Budi";
// console.log(fullName);
var middleName = "Asep";
var lastName = "Tatang";
// ini adalah contoh gabungan variabel
var fullName = firstName + " " + middleName + " " + lastName;

// contoh pemanggilan variabel
// kita juga bisa menambahkan string dan variabel seperti di bawah ini
document.writeln("ini adalah full name ", fullName);
document.writeln("</br>");
document.writeln("ini adalah first name ", firstName);
document.writeln("</br>");
document.writeln("ini adalah middle name ", middleName);
document.writeln("</br>");
document.writeln("ini adalah lastname ", lastName);

// untuk membuat variabel sekarang disarankan menggunakan let dan const kenapa tidak var? dikarena kan ada kesalahan saat dibuat var maka javascrip update membuat variabel baru

let hobi = "Main game, ngoding, nonton film";
const makanan = "Mie Ayam, soto, Bakso";

// apa bedanya let dengan const? let adalah variabel yang dapat di ubah sedangkan const adalah variabel yg tidak dapat di ubah valuenya jika kita memaksa mengubah const maka akan terjadi error
