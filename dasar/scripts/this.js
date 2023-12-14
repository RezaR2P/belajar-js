console.info(this);
function sample() {
  console.info(this);
  function inner() {
    console.info(this);
  }
  inner();
}
sample;

// object method
const person = {
  name: "reza",
  sayHello: function (value) {
    console.info(`Hello ${value} my name is ${this.name}`);
  },
};
person.sayHello("budi");
