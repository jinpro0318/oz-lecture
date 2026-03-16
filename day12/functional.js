// Array.prototype.map()
// 메서드는 배열 내의 모든 요소 각각에 대해 제공된 함수를 호출한 결과를 모아
// 새로운 배열을 반환합니다.
let numbers = [1, 2, 3];

let newArray = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  newArray.push(element * 2);
}

// 배열의 각 요소에 2를 곱하는 함수
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]

// const double = (num) => {
//   return num * 2;
// };
// const double = (num) => num * 2;

// 배열의 각 요소에 2를 곱하는 화살표 함수
let doubledArrow = numbers.map((num) => num * 2); // double 함수
console.log(doubledArrow); // [2, 4, 6]

// Array.prototype.filter()
// 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
let numbers2 = [1, 2, 3, 4, 5];

// 짝수인 값만 필터링 하고 싶다.
const newArray2 = [];
for (let i = 0; i < numbers2.length; i++) {
  const element = numbers2[i];
  if (element % 2 === 0) newArray2.push(element);
}

const filtered = numbers2.filter(function (num) {
  return num % 2 === 0;
});

const filteredArrow = numbers2.filter((num) => num % 2 === 0);

// Array.prototype.reduce()
// 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하여 단일 출력값을 반환합니다.
let numbers3 = [1, 2, 3, 4, 5];

// 배열의 모든 요소의 합을 구하고 싶다.
let sum = 0;
for (let i = 0; i < numbers3.length; i++) {
  const element = numbers3[i];
  sum += element;
}

const reduced = numbers3.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const reducedArrow = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
