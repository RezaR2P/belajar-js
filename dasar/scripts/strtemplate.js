const name = "Reza Aja";
const template = `Name : ${name}`;
console.info(template);
const template1 = `siapani : ${name}`;
console.info(template1);

const nilai = "70";
const template2 = `Nama : ${name}, Lulus : ${nilai >= 70}`;
console.info(template2);

const multiline = `ini adalah string yang bisa multi line
seperti ini hehe
gatau mau ngetik apa lagi
iyain aja`;

document.writeln("<pre>", multiline, "</pre>");
