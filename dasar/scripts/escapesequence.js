// Karakter baris baru
let newlineString = "Ini adalah baris pertama.\nIni adalah baris kedua.";

// Karakter tab
let tabString = "Ini adalah\ttab.";

// Tanda kutip tunggal dan ganda
let quotesString =
  "Ini adalah string dengan tanda kutip tunggal (') dan tanda kutip ganda (\").";

// Backslash
let backslashString = "Ini adalah backslash: \\";

// Karakter Unicode
let unicodeString = "Ini adalah wajah tersenyum: \u263A";

document.writeln("<textarea cols='100' rows='10'>");
document.writeln(newlineString);
document.writeln(tabString);
document.writeln(quotesString);
document.writeln(backslashString);
document.writeln(unicodeString);
document.writeln("</textarea>");
