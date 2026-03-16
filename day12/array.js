// const fruits = ["apple", "banana", "cherry"];
const fruits = new Array("apple", "banana", "cherry");

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

const mixed = [1, "two", true, null, undefined, { name: "object" }, [1, 2, 3]];
console.log(mixed);

// 배열 요소 마지막 인덱스에 추가
fruits.push("strawberry");
console.log(fruits);
console.log(fruits.length);

// 배열 요소 마지막 인덱스 제거
const removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);
console.log(fruits.length);

// 배열 요소 첫 번째 인덱스에 추가
fruits.unshift("grape");
console.log(fruits);

// 배열 요소 첫 번째 인덱스 제거
const removedFirstFruit = fruits.shift();
console.log(removedFirstFruit);
console.log(fruits);
