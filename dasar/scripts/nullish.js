// nullish coalescing mirip seperti ternary akan tetapi singkatan dari mengecek sebuah variabel yang bersifat null atau undefined
let parameter = "reza ganteng";
let data = parameter;
// ini menggunakan if
if (data === undefined || data === null) {
  data = "Nilai default";
}
document.writeln(`${data}`);

// menggunakan nullish
// sangat mirip dengan ternary tapi menggunakan 2 tanda tanya ??
// hanya untul mengecek null dan undefined saja
data = parameter ?? "Nilai Default";
document.writeln(`<p>${data}</p>`);
