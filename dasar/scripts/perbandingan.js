// Operator perbandingan dalam JavaScript digunakan untuk membandingkan dua nilai dan mengembalikan hasil berupa nilai boolean (true atau false).

// Sama dengan (==):
// Memeriksa apakah dua nilai sama. Perbandingan ini tidak memeriksa tipe data.
let a = 5;
let b = "5";
document.writeln("<p>", a == b, "</p>"); // Output: true

// Sama persis (===):
// Memeriksa apakah dua nilai sama dan memiliki tipe data yang sama.
a = 5;
b = "5";
document.writeln("<p>", a === b, "</p>"); // Output: false

// Tidak sama dengan (!=):
// Memeriksa apakah dua nilai tidak sama. Perbandingan ini tidak memeriksa tipe data.
a = 5;
b = "5";
document.writeln("<p>", a != b, "</p>"); // Output: false

// Tidak sama persis (!==):
// Memeriksa apakah dua nilai tidak sama atau memiliki tipe data yang berbeda.
a = 5;
b = "5";
document.writeln("<p>", a !== b, "</p>"); // Output: true

// Lebih besar dari (>):
// Memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan.
a = 10;
b = 5;
document.writeln("<p>", a > b, "</p>"); // Output: true

// Lebih kecil dari (<):
// Memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan.
a = 10;
b = 15;
document.writeln("<p>", a < b, "</p>"); // Output: true

// Lebih besar atau sama dengan (>=):
// Memeriksa apakah nilai di sebelah kiri lebih besar atau sama dengan nilai di sebelah kanan.
a = 10;
b = 10;
document.writeln("<p>", a >= b, "</p>"); // Output: true

// Lebih kecil atau sama dengan (<=):
// Memeriksa apakah nilai di sebelah kiri lebih kecil atau sama dengan nilai di sebelah kanan.
a = 10;
b = 15;
document.writeln("<p>", a <= b, "</p>"); // Output: true
