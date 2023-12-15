// selain digunakan untuk constructor milih parent class, kata kunci super juga bisa digunakan untuk mengakses method parent class
// caranya bisa menggunakan super titik nama functionnya dengan kata lain super adalah reference ke parent prototype, mirip seperti __proto__

class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.info("Paint Circle");
  }
}
const circle = new Circle();
circle.paint();
