const BONUS_SCORE = 5;

const input = prompt("점수를 입력하세요.");
const score = Number(input);
if(isNaN(score)) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    console.log(score);
    let lastScore = ++score + BONUS_SCORE;
    lastScore *= 1.1;

    // 변수 계산 파트
    let grade;
    let isPass;
    let message;

    if (lastScore >= 100) {
        grade = "S";
        message = "Super!!"
    } else if (lastScore >= 90) {
        grade = "A";
        message = "Excellent work!"
    } else if (lastScore >= 80) {
        grade = "B";
        message = "Good job!"
    } else if (lastScore >= 70) {
        grade = "C";
        message = "Satisfactory performance."
    } else if (lastScore >= 60) {
        grade = "D";;
        message = "Message: Needs improvement."
    } else {
        grade = "F";
        message = "Please try harder!"
    }
    isPass = lastScore >= 60 ? true : false;

    // 출력 파트
    console.log("Final Score: " + lastScore);
    console.log("Grade: " + grade);
    console.log("Status: " + (isPass ? "Psss" : "Fail"));
    console.log("Message: " + message);
}
