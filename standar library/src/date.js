// javascript mempunyai waktu dan tanggal yaitu date
// date merupakan representasi milisecond sejak 1 januari 1970 atau dikenal dengan Epoch & Unix Timestamp

// membuat date saat ini dengan cara new Date()
// membuat date dengan tanggal dengan cara new Date(year, month, date)
// membuat date sampai milis cara new Date(year, month, date?,hour?,minute?,second?,milis?)
// membuat date dari epoch atau unix timestamp new Date(timestamp)
// bulan januari diawali dengan 0
{
  const date = new Date();
  console.info(date);
  const date1 = new Date(2000, 0, 2);
  console.info(date1);
  const date2 = new Date(2000, 0, 2, 12, 55, 34, 11);
  console.info(date2);
  // menggunakan currentmillis atau epoch di google dengan waktu real time
  const date3 = new Date(1703229224296);
  console.info(date3);
}

{
  // epoch dan unix timestamp lebih baik ini dibandingkan mengisi format waktu
  //   Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan Date.now()
  // Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function getTime()
  //   Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung yang namanya epoch & unix timestamp
  const timestamp = Date.now();
  console.info(timestamp);

  // ini sama waktu saat sekarang
  const dateUnix = new Date(timestamp);
  console.info(dateUnix);
  console.info(dateUnix.getTime());
}

{
  //     Parsing Date
  // Kita juga bisa melakukan parsing membuat date dari string menggunakan method Date.parse(value)
  // Format string harus YYYY-MM-DDTHH:mm:ss.sssZ
  // Dimana jika kita hanya membuat date berisi tanggal saya, kita cukup gunakan YYYY-MM-DD
  // Jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
  // Jika date dengan tanggal, waktu dan timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
  // Hasil parsing adalah unix timestamp, bukan object date
  const parseTimeStamp = Date.parse("2020-12-18T10:10:10.123+07:00");
  console.info(parseTimeStamp);

  const parseDate = new Date(parseTimeStamp);
  console.info(parseDate);
}

{
  // Date Getter dan Setter
  // Date juga memiliki banyak sekali method untuk mendapatkan informasi date dan juga mengubah informasi date, atau istilahnya adalah getter dan setter
  const date = new Date();
  console.info(date.getFullYear());
  console.info(date.getMonth());
  console.info(date.getDate());
  console.info(date.getHours());
  console.info(date.getMinutes());
  console.info(date.getSeconds());
  console.info(date.getMilliseconds());
  console.info(date.getTimezoneOffset());
}
