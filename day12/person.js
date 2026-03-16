const person1 = {
  name: "John",
  age: 30,
};
const person2 = {
  name: "Jane",
  age: 25,
};
const person3 = {
  name: "Doe",
  age: 40,
};

// 생성자
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person("alice", 35);
const person5 = new Person("bob", 28);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
