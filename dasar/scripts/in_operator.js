const orang = {
  firstname: "Eza",
  lastname: "Permana",
};
// in operator fungsinya mengecek variabel apakah ada property tersebut dan perlu di ingat bahwa in tidak mengecek nilai
if ("firstname" in orang) {
  document.writeln(`Hello ${orang.firstname}`);
} else {
  document.writeln(`Hello`);
}
