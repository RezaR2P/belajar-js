{
  //1. Let's Form a Sentence
  // Problem
  // Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
  //  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
  //  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
  //   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

  let word = "JavaScript";
  let second = "is";
  let third = "awesome";
  let fourth = "and";
  let fifth = "I";
  let sixth = "love";
  let seventh = "it!";

  //code here

  // ---------------------------------------
  // cara pertama
  console.log(
    word +
      " " +
      second +
      " " +
      third +
      " " +
      fourth +
      " " +
      fifth +
      " " +
      sixth +
      " " +
      seventh
  );
  //   cara kedua lebih simpel dan mudah
  console.log(
    `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
  );
  // ---------------------------------------
}

{
  // 2. Index Accessing - 1 by 1
  // Problem
  // Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
  //  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
  //   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

  // Hints
  // Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
  //  tersebut!

  let word = "wow JavaScript is so cool";
  //   wow
  let exampleFirstWord = word[0] + word[1] + word[2];

  //   console.log("First Word: " + exampleFirstWord);

  //   javascript
  let secondWord =
    word[4] +
    word[5] +
    word[6] +
    word[7] +
    word[8] +
    word[9] +
    word[10] +
    word[11] +
    word[12] +
    word[13];

  // is
  let thirdWorld = word[15] + word[16];

  //   so
  let fourthWorld = word[18] + word[19];

  //   cool
  let fifthWorld = word[21] + word[22] + word[23] + word[24];
  // ---------------------------------------
  console.log(
    `${exampleFirstWord} ${secondWord} ${thirdWorld} ${fourthWorld} ${fifthWorld}`
  );
  // ---------------------------------------
}
{
  // 3. Breaking Sentence (Again) using Substring
  // Problem
  // Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

  let word3 = "wow JavaScript is so cool";
  //   wow
  let exampleFirstWord3 = word3.substring(0, 3);

  //   console.log("First Word: " + exampleFirstWord3);
  // javascript
  let secondWord = word3.substring(4, 14);
  //   is
  let thirdWord = word3.substring(15, 17);
  //   so
  let fourthWord = word3.substring(18, 20);
  //   cool
  let fifthWord = word3.substring(21, 25);
  // ---------------------------------------
  console.log(
    `${exampleFirstWord3} ${secondWord} ${thirdWord} ${fourthWord} ${fifthWord}`
  );
}

{
  // ---------------------------------------
  // 4. Breaking Sentence (yet Again) and Count Each Length
  // Problem
  // Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

  let word4 = "wow JavaScript is so cool";
  let exampleFirstWord4 = word4.substring(0, 3);

  let firstWordLength = exampleFirstWord4.length;
  // javascript
  let secondWord = word4.substring(4, 14);
  let secondWordLength = secondWord.length;
  //   is
  let thirdWord = word4.substring(15, 17);
  let thirdWordLength = thirdWord.length;
  //   so
  let fourthWord = word4.substring(18, 20);
  let fourthWordLength = fourthWord.length;
  //   cool
  let fifthWord = word4.substring(21, 25);
  let fifthWordLength = fifthWord.length;

  //   console.log(
  //     "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
  //   );
  console.log(
    `${exampleFirstWord4} ${firstWordLength} ${secondWord} ${secondWordLength} ${thirdWord} ${thirdWordLength} ${fourthWord} ${fourthWordLength} ${fifthWord} ${fifthWordLength}`
  );
}
