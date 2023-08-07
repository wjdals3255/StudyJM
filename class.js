// 1. Class declarations
class Person {
  // constructor
  constructor(name, age){
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
    speak(){
      console.log(`${this.name}: hello!`);
    }
}

const JM = new Person('JM', 30);
console.log(JM.name);
console.log(JM.age);
JM.speak();

// 2.Getter and Setter
class User {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age = value < 0 ? 0 : value; // 0보다 작으면 0으로 표시
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. Static
class Article {
  static publisher = 'MOVV';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }
  static printpublisher (){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printpublisher();

// 4. Inheritance
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color !`);
  }
  getArea(){
    return this.width * this.height;
  }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
  draw(){
    super.draw();
    console.log(`🔺`);
  }
  getArea(){
    return (this.width * this.height) / 2;
  }

  toString(){
    return `Triangle - color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 5. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());