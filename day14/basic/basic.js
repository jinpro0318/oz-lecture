// // 비동기 개념
// console.log("이미지 로딩 시작");

// setTimeout(() => {
//   console.log("이미지 로딩 완료");
// }, 5000);
// console.log("다른 작업 수행");

// 콜백 함수
function sayHello(name, callback) {
  console.log(`안녕, ${name}`);
  setTimeout(() => {
    callback();
  }, 2000);
}

function sayHelloSync(name) {
  console.log(`[sync] 안녕, ${name}`);
}

sayHelloSync("태구");
sayHello("태구", () => {
  console.log("콜백 함수 실행");
});
