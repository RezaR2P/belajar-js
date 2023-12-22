// Saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query parameter misalnya
// URL sendiri sudah memiliki standard encoding penulisan URL
// Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
// Aman disini dalam artian informasi URL tidak berubah
// Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya
//  Contoh masalah
// Misal ada query parameter dengan nama data, lalu kita ingin mengirimkan nilai kesana
// Misal nilainya adalah &eko=eko&, alhasil URL nya akan seperti berikut
// http://contoh.com?data=&eko=eko&
// URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data bernilai kosong, kenapa? karena & dianggap sebagai pemisah antar parameter
// Artinya tanda seperti & dan lain-lain perlu di encode, agar tidak terjadi kesalahan data yang kita kirim
{
  const url = `http://www.contoh.com/?name=Reza Ramdan Permana`;
  console.info(url);

  const encode = encodeURI(url);
  console.info(encode);

  const decoded = decodeURI(encode);
  console.info(decoded);
}

{
  const value = `Reza&Ramdan=Permana`;
  const url = `http://www.contoh.com/?name=`;
  console.info(url + value);

  const encoded = encodeURIComponent(value);
  console.info(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.info(url + decoded);
}
