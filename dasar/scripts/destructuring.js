// destructuring adalah fitur yang membongkar value di array dan object ke dalam variabel
// fitur ini sangat mempermudah kita untuk mengambil data tanpa harus melakukan pengambilan data satu persatu
// detructuring juga ada default value mirip seperti parameter

{
  // tidak menggunakan destructuring
  const names = ["Reza", "Ramdan", "Permana"];
  const firstName = names[0];
  const middleName = names[1];
  const lastName = names[2];

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

{
  // menggunakan destructuring array
  const nama = ["Reza", "Ramdan", "Permana", "Asep", "Tatang"];
  const [firstName, middleName, lastName, ...others] = nama;

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(others);
}

{
  // menggunakan destructuring object
  const person = {
    firstName: "Reza",
    middleName: "Ramdan",
    lastName: "Permana",
    address: {
      street: "gatau",
      city: "bandung",
      country: "Indonesia",
    },
    hoby: "game",
  };

  const {
    firstName,
    middleName,
    lastName,
    address: { street, city, country },
    ...others
  } = person;
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(street);
  console.info(city);
  console.info(country);
  console.info(others);
}

{
  // destructuring juga bisa di dalam parameter
  function displayPerson({ firstName, middleName, lastName }) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
  }

  const person = {
    firstName: "Reza",
    middleName: "Ramdan",
    lastName: "Permana",
  };

  displayPerson(person);
}
{
  // destructuring param aray
  function sum([first, second]) {
    return first + second;
  }
  console.info(sum([10, 10]));
  console.info(sum([20, 20]));
}

{
  // destructuring default value
  const names = ["Reza", "Ramdan"];
  const [firstName, middleName, lastName = "Permana"] = names;
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}
