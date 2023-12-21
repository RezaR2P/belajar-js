// method forEach untuk melakukan iterasi data array

{
  // cara pertama menggunakan anonymus function
  const array = ["Reza", "Ramdan", "Permana"];
  array.forEach(function (value, index) {
    console.info(`${value} : ${index}`);
  });
}

{
  // cara kedua menggunakan arrow function lebih sederhana
  const array = ["Reza", "Ramdan", "Permana"];
  array.forEach((value, index) => {
    console.info(`${index} : ${value}`);
  });

  array.forEach((value) => {
    console.info(` ${value}`);
  });
}

// array queue (antrian)
{
  let queue = [];
  queue.push("Reza");
  queue.push("Ramdan");
  queue.push("Permana");

  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
}

// array stack (tumpukan)
{
  let stack = [];
  stack.push("Reza");
  stack.push("Ramdan");
  stack.push("Permana");

  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}

// array find (menacari)
{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.info(source.find((value) => value > 3));
  console.info(source.findIndex((value) => value > 3));
  console.info(source.includes(7));
  console.info(source.indexOf(5));
  console.info(source.lastIndexOf(5));
}

// array filter
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.info(numbers.filter((value) => value % 2 === 1));
  console.info(numbers.filter((value) => value % 2 === 0));
}

{
  // array transform
  const names = "Reza Ramdan Permana".split(" ");
  const namesUpper = names.map((value) => value.toUpperCase());
  console.info(namesUpper);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers.reduce((result, value) => result + value));
  console.log(numbers.reduceRight((result, value) => result + value));

  const namesReduce = names.reduce((before, value) => before + " " + value);
  console.info(namesReduce);
  const namesReduceRight = names.reduceRight(
    (before, value) => before + " " + value
  );
  console.info(namesReduceRight);
}
