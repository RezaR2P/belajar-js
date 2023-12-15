// sebenernya inheretence prototype sudah di di rekomendasikan lagi lebih baik gunakan class namun tetap saja di class nanti menggunakan prototype

{
  function Employee(name) {
    this.name = name;
  }

  function Manager(name) {
    this.name = name;
  }
  // ini contoh pewarisan yg salah
  //   Manager.prototype = Employee.prototype;
  // ini yang benar
  Manager.prototype = Object.create(Employee.prototype);

  Manager.prototype.sayHello = function (name) {
    console.info(`Hello ${name} my name is Manager ${this.name}`);
  };

  Employee.prototype.sayHello = function (name) {
    console.info(`Hello ${name} my name is Employee ${this.name}`);
  };

  const employee = new Employee("Budi");
  employee.sayHello("Joko");
  const manager = new Manager("Reza");
  manager.sayHello("Joko");

  console.info(employee);
  console.info(manager);
}
