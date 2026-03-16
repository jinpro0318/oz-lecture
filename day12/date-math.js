console.log("Date math");

// 오늘 날짜 구하기
const today = new Date();
console.log(today);

// 날짜 표현하기
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
console.log(`${year}년 ${month}월 ${date}일`);

// 시간 표현하기
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
console.log(`${hours}시 ${minutes}분 ${seconds}초`);

// x일 후 날짜 구하기
const x = 100;
const futureDate = new Date(today.getTime() + x * 24 * 60 * 60 * 1000);
console.log(`오늘로부터 ${x}일 후: ${futureDate}`);

// 난수구하기
const randomNumber = Math.random(); // 0 이상 1 미만의 난수
console.log(`난수: ${randomNumber}`);

// 1부터 100까지의 난수 구하기
const randomInt = Math.floor(Math.random() * 100) + 1;
console.log(`1부터 100까지의 난수: ${randomInt}`);

const sum = 1.1 + 0.1; // 1.2000000000000002
const sumVal = sum.toFixed(2); // 소수점 2자리까지 표현
const sumNum = parseFloat(sumVal); // 문자열을 숫자로 변환
console.log(`1.1 + 0.1 = ${sumNum}`);
