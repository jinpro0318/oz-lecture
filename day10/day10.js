// // 이항 산술 연산자
// let sum = 10 + 20;
// console.log(sum);   // 30
// let sub = 20 - 10;
// console.log(sub)    // 10
// let multi = 10 * 20;
// console.log(multi)  // 200
// let remain = 10 % 3;
// console.log(remain) // 1
// let expon = 2 ** 3; 
// console.log(expon)  // 8

// // 단항산술연산자
// let increment = 10;
// increment++;
// console.log(increment);
// let decrement = 10;
// decrement--;
// console.log(decrement);

// // let inc = 10++;      // 값 자체에 단항산술연산은 불가
// // console.log(inc)     // let inc = 10 + 1;

// // 단항산술연산자 : 전치연산 / 후치연산
// var num = 10;
// let subNum = ++num;     // 앞에 사용했으므로 전치 연산 방식
// console.log(subNum);    // 11

// var num = 10;
// let subNum2 = num++;    // 뒤에 사용했으므로 후치 연산 방식
// console.log(subNum2);   // 10

// // 단항 부정 연산자
// var num = -10;
// num = -num;
// console.log(num)        // -10

// // 연산자 우선순위
// var i = 3 + 4 * 5;      // +,-보다 *,/가 먼저
// console.log(i)          // 3 + 20

// var i = (3 + 4) * 5     // 괄호 먼저
// console.log(i)          // 7 * 5

// let pencilCount = 3;
// let penCount = 4 * 5;   // 4개들이 5박스
// let resultI = num1 + num2;

// // 복합 대입 연산자
// let x = 10;
// x += 5;             // x = x + 5
// console.log(x);
// let y = 10;
// y -= 5;             // y = y - 5
// console.log(y);
// let z = 10;
// z *= 5;             // z = z * 5
// console.log(z)  
// let u = 10;
// u /= 5;             // u = u / 5
// console.log(u)
// let v = 10;
// v %= 3;             // v = v % 3
// console.log(v)
// let t = 10;
// t **= 2;            // t = t ** 2
// console.log(t)

// // 논리 연산자
// let _true = true;
// let _false = false;

// console.log('true && true', _true && _true); // 참이고 참 : 참
// console.log('true || true', _true || _true); // 참이거나 참 : 참

// console.log('true && false', _true && _false); // 참이고 거짓 : 거짓
// console.log('true || false', _true || _false); // 참이거나 거짓 : 참

// // 참이고 참이고 참 : 참
// console.log('true && true && true', _true && _true && _true); 

// // 참이거나 참이거나 참 : 참
// console.log('true || true || true', _true || _true || _true);

// // 참이고 거짓이고 참 : 거짓
// console.log('true && false && true', _true && _false && _true); 

// // 참이거나 거짓이거나 거짓 : 참
// console.log('true || false || false', _true || _false || _false);

// // 비교 연산자
// let isOk = true;
// let isNotOk = !isOk;    // false
// const line = 180;
// console.log('line < 170', line < 170);      // false
// console.log('line < 190', line < 190);      // true
// console.log('line >= 170', line >= 170);    // true
// console.log('line >= 190', line >= 190);    // false

// let isHigher = line < 170;
// console.log(isHigher);
// console.log(isOk && isHigher);  // true && false => false
// console.log(isOk || isHigher);  // true || false => true

// // 삼항 연산자
// let score = 90;
// let grade = (score >= 90) ? 'A+' : 'B';
// console.log(grade);

// // 조건문
// var num = 10;
// if (num % 2 === 0) {
//     console.log("변수 num에 할당된 숫자는 짝수입니다.");
// } else {
//     console.log("변수 num에 할당된 숫자는 홀수입니다.");
// }

// // switch문
// let food = "melon";
// switch(food) {
//     case "melon":
//     case "apple":
//         console.log("fruits");
//         break;
//     case "carrot":
//         console.log("vegetable");
//         break;
//     default:
//         console.log("It's not fruits and vegetables")
//         break;
// }

// if문
var score = 80;
if (score >= 90 && score <= 100) {
    console.log("A++학점");
} else if (score >= 80) {
    console.log("A학점");
} else if (score >= 70) {
    console.log("B학점");
} else {
    console.log("학점없음");
}
