// 변수 선언
const maxScore = 100;     // const: 재할당이 불가능한 상수로 최대 점수 선언
let inputScore;           // let: 재할당이 가능한 변수로 입력 점수 선언
var grade;                // var: 등급 변수 선언

// input으로 직접 숫자 입력
let input = prompt("0~100사이의 점수를 입력하세요.");
inputScore = Number(input);

// 이항 산술+복합 대입 연산자 사용
// 입력 점수에 보너스 5점 추가 (inputScore = inputScore + 5와 동일)
inputScore += 5; 

// if, else if, else 문 + 논리 연산자(&&) 사용
if (inputScore >= 100) {
    grade = "S";
} else if (inputScore >= 90 && inputScore < 100) {
    grade = "A";
} else if (inputScore >= 80 && inputScore < 90) {
    grade = "B";
} else if (inputScore >= 70 && inputScore < 80) {
    grade = "C";
} else if (inputScore >= 60 && inputScore < 70) {
    grade = "D";
} else {
    grade = "F";
}

// 삼항 연산자 사용: 합격/불합격 판단 (조건 ? 참 : 거짓)
let status = (inputScore >= 60) ? "Pass" : "Fail";

// switch문 사용 : 등급별 메시지 출력
let message;
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
        break;
}

// 출력
console.log("Final Score: " + inputScore);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);