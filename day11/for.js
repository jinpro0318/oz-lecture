// 0부터 4까지 콘솔찍는 코드
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('==============');

// 1부터 5까지 콘솔찍는 코드
for (let i = 1; i < 6; i++) {
    console.log(i)
}
console.log('==============');

// 1부터 10까지 홀수만 찍는 코드
for (let i = 1; i <= 10; i += 2) {
    console.log(i)
}
console.log('==============');

// 중첩반복문
for (let i = 0; i < 2; i++) {
    console.log(`i: ${i}`);
    for (let j = 0; j < 2; j++) {
        console.log(`j: ${j}`);
    }
}
console.log('==============');
// for문과 배열

let arr = ["banana", "apple", "orange"];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    const fruit = arr[i];
    console.log(fruit);
}
console.log('==============');
// break와 continue
console.log("break");
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i === 5) break;     // 전체 반복문 중단
}

console.log("continue");
for (let i = 0; i < 10; i++) {
    if (i === 0) continue;
    console.log(i);         // 이번 반복문 중단, 다음 반복 실행
}
console.log('==============');
// for in (배열)
arr = ["banana", "apple", "orange", "tomato"];
for (idx in arr) {
    let fruit = arr[idx];
    console.log(fruit);
    if(fruit === "banana") {
        console.log("monkey!!!!");
        continue;
    }
    if(fruit === "orange") {
        break;
    }
    console.log("oz!!")
}

// for in (객체)
let obj = {
    name: "철수",
    age: 20,
}
for (let key in obj) {
    console.log(`key: ${key}`);
    console.log(`val: ${obj[key]}`)
}

// for of (배열)
for (item of arr) {
    console.log(item);
}