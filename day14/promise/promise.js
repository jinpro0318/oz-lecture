// promise 기본형태
const promise = new Promise((resolve, reject) => {
  console.log("Promise 영역");
  setTimeout(() => {
    console.log("3초 지남!");
    let promiseResult = "작업성공!"; // DB에서 조회한 데이터, API응답
    resolve(promiseResult);
  }, 3000);
});

// promise 실행
promise
  .then((result) => {
    console.log("then 영역");
    console.log(result);
    return `${result} + then1`;
  })
  .then((result) => {
    console.log("then2 영역");
    console.log(result);
  });

// Promise.all 병렬처리
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 완료");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 완료");
  }, 5000);
});
Promise.all([p1, p2]).then((results) => {
  console.log("모든 작업 완료");
  console.log(results); // ["p1 완료", "p2 완료"]
});
