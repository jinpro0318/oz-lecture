// // 전역변수와 지역변수
// let globalVar = "I am global";

// function myFunction() {
//   let localVar = "I am local";
//   console.log(globalVar); // 출력
//   console.log(localVar); // 출력
// }
// myFunction(); // 함수의 생애주기 lifecycle
// console.log(globalVar); // 출력
// // console.log(localVar); // 오류

// // 클로저
// const x = 1;
// function outer() {
//   const x = 10; // 상태 state
//   const inner = function () {
//     console.log(x);
//   };
//   return inner; // hook
// }
// const innerFunction = outer();
// innerFunction(); // 중첩함수

// 클로저 - 카운트 상태 변경 함수
const increaseFn = () => {
  let num = 0;
  return () => {
    return ++num;
  };
};
const increase = increaseFn();
const inc1 = increase();
const inc2 = increase();
console.log(inc1);
console.log(inc2);
console.log(increase());
console.log(increase());
console.log(increase());

const counterGenerator = () => {
  let num = 0; // 카운트 상태 변수 (state)
  return {
    increase() {
      num = num + 1;
      return num; // ++num
    },
    decrease() {
      num = num - 1;
      return num; // --num
    },
  };
};
const counter1 = counterGenerator();
console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.decrease());

const counter2 = counterGenerator();
console.log(counter2.decrease());
console.log(counter2.decrease());
console.log(counter2.increase());
