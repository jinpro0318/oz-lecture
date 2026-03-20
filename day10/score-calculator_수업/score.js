let input = prompt("점수를 입력하세요.");
// let score = "10" + 5; // "10" + "5" => "105"
const BONUS_SCORE = 5;
let score = Number(input);

let lastScore = score + BONUS_SCORE;
// score += BONUS_SCORE;    // 더하고 할당했구나!
// let lastScore = score;
console.log(lastScore);
console.log(typeof lastScore);

// 최종점수 콘솔찍기
console.log("Final Score: " + lastScore);

// 등급 콘솔찍기
if (lastScore >= 100) {
    console.log("Grade: S");
} else if (lastScore >= 90) {
    console.log("Grade: A");
} else if (lastScore >= 80) {
    console.log("Grade: B");
} else if (lastScore >= 70) {
    console.log("Grade: C");
} else if (lastScore >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 상태 콘솔찍기
if(lastScore >= 60) {
    console.log("Status: Pass");
} else {
    console.log("Status: Fail");
}

// 메세지 콘솔찍기
if (lastScore >= 100) {
    console.log("Message: Super!!");
} else if (lastScore >= 90) {
    console.log("Message: Excellent work!");
} else if (lastScore >= 80) {
    console.log("Message: Good job!");
} else if (lastScore >= 70) {
    console.log("Message: Satisfactory performance.");
} else if (lastScore >= 60) {
    console.log("Message: Needs improvement.");
} else {
    console.log("Message: Please try harder!");
}