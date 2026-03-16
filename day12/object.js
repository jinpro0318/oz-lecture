console.log("객체 실습");

const person = {
  name: {
    firstName: "Gildong",
    lastName: "Hong",
  },
  age: 30,
  isAdult: true,
  getFullName: function () {
    return `${this.name.firstName} ${this.name.lastName}`;
  },
  printInfo: function () {
    console.log(`이름: ${this.getFullName()}, 나이: ${this.age}`);
  },
};
console.log(person);
console.log(person["name"]); // console.log(person[name]);
console.log(person["age"]);
console.log(person.name);
console.log(person.age);

// person의 age, isAdult 조회
console.log("객체에서 . 사용하여 접근"); // 이 방법 위주!
let age = person.age;
let isAdult = person.isAdult ? "성인" : "미성년자";
console.log(`나이: ${age}, 성인 여부: ${isAdult}`);

console.log("객체에서 [] 사용하여 접근");
let age2 = person["age"];
let isAdult2 = person["isAdult"] ? "성인" : "미성년자";
console.log(`나이: ${age2}, 성인 여부: ${isAdult2}`);

// 객체에 키가 뭐가 있는지 모르지만 어쨋든 모든 값을 꺼내고 싶을 때.
console.log("객체의 모든 키와 값을 출력:");
for (const key in person) {
  let value = person[key];
  console.log(`${key}: ${value}`);
}

// 객체 내의 함수 사용하기
person.printInfo();
const fullName = person.getFullName();
console.log(`Full Name: ${fullName}`);

// 객체에 속성 추가 / 삭제
person.like = "apple";
person.koreanAge = person.age + 1;
person.likes = ["apple", "banana", "grape"];

delete person.isAdult;

console.log("객체 수정 후:");
console.log(person);
