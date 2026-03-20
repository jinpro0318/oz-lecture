function add(a, b) {
  return a + b;
}
const result1 = add(2, 3); // 5
const result2 = add("나는", "누구다");
const result3 = add(true, false);
console.log(result1, result2, result3);

// const addF = (a) => {
//   const addF2 = (b) => {
//     const result = a + b;
//     return result;
//   };
//   return addF2;
// };
const addF = (a) => (b) => a + b;
const add5 = addF(5); // (b) => 5 + b;
const add5and10 = add5(10); // 5 + 10;
console.log(add5and10);
