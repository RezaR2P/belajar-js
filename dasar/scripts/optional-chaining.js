const orang = {
  alamat: {
    negara: ["Indonesia", "Thailand", "Jepang"],
  },
};

let negara = orang?.alamat?.negara;
document.writeln(`${negara}`);
