// 전역변수와 지역변수
let globalVar = "I am global";

function myFunction() {
  let localVar = "I am local";
  console.log(globalVar); // 출력
  console.log(localVar); // 출력
}
myFunction(); // 함수의 생애주기 lifecycle
console.log(globalVar); // 출력
// console.log(localVar); // 오류

// 클로저
const x = 1;
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}
const innerFunction = outer();
innerFunction(); // 중첩함수
