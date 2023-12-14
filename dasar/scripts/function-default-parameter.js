// parameter juga bisa kita kasih default value dengan cara meberikan = "isi value" dan nanti secara otomatis ketika tidak di isi maka default parameter akan mengisi sendiri dengan value yang sudah kita tentukan
function register(name, gender = "Tidak diketahui") {
  console.info(name);
  console.info(gender);
}

register("Reza", "Laki-laki");
register("Reza");
register("Reza", undefined);
register("Reza", null);
