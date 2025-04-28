function Person(name) {
  this.name = name;
}

Person.prototype(1);
Person.prototype.sayHi = 'd';
const x = new Person(1);
x.sayHello();
console.log(Person.prototype);
