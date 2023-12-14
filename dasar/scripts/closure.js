// dengan menggunakan closure kita bisa membuat local scope mnjadi global scope
// ini jarang digunakan

function createAdder(value) {
  const owner = "Reza";
  function add(param) {
    console.info(owner);
    return value + param;
  }
  return add;
}

const addTwo = createAdder(2);
console.info(addTwo(10));
console.info(addTwo(20));
