// pertambahan
let result = 1 + 2; // 3
document.writeln("1 + 2 = ", result);
let originResult = result; // 3
document.writeln("</br>");

// pengurangan
// di sini kita bisa menggunakan operator assigment mempersingkat kode
result -= 1;
// dibawah ini tidak menggunakan operator assigment
// result = result - 1; // 2
document.writeln(originResult, " - 1 = ", result);
document.writeln("</br>");

// perkalian
result *= 2; // 4
// result = result * 2; // 4
document.writeln(originResult, " x 2 = ", result);
originResult = result; // 4
document.writeln("</br>");

// pembagian
result /= 4; // 1
// result = result / 4; // 1
document.writeln(originResult, " : 4 = ", result);
originResult = result; // 1
