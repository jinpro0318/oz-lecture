// === 코드에 주석 달아 디테일 이해하기 ===

// 상수(const) 선언 : 출력할 별의 모양을 상수로 정의 (변하지 않는 값)
const STAR = "*";

// 최대 별 개수 제한 (과제 요구사항: 1~10 사이)
const maxStars = 10;

// 사용자에게 별 개수를 입력받는 함수 : 유효한 입력이 들어올 때까지 반복
const getPromptInput = () => {
    // let 변수 선언 : 사용자가 입력한 숫자를 저장할 변수
    let input;
    // 입력이 유효한지 체크하는 변수
    let isNotValid = true;
    
    // while 반복문 : 유효한 입력이 들어올 때까지 계속 반복
    while (isNotValid) {
        // prompt()로 사용자 입력 받기
        let inputStr = prompt("출력할 별 갯수를 입력하세요.")
        // 문자열을 숫자로 변환
        input = Number(inputStr);
        // 조건문 (if) : 입력값이 숫자가 아니거나, 범위를 벗어나면 에러 메시지 출력
        if(isNaN(input) || input < 1 || input > maxStars) {
            // 콘솔에 에러 메시지 출력 (과제 요구사항)
            console.log("Invalid input! Enter a number between 1 and 10.");
            // continue : 현재 반복을 건너뛰고 다시 입력 받기
            continue;
        }
        // 입력이 유효하면 반복 종료 준비
        isNotValid = false;
        // break : while 반복문 종료
        break;
    }
    // 최종적으로 유효한 입력값 반환
    return input;
}

// 별을 출력하는 함수 (함수 선언문 사용 - 과제 요구사항)
// count 기본값 = 1 (기본 매개변수 사용)
function printStar(count = 1) {
    // var 변수 선언 (과제 요구사항: var 사용)
    // 별 문자열을 저장할 변수
    var stars = "";
    // for 반복문 : 입력된 숫자(count) 만큼 별을 문자열에 추가
    for (let i = 0; i < count; i++) {
        stars += STAR;
    }
    // 완성된 별 문자열을 콘솔에 출력
    console.log(stars);
}
// 사용자 입력 받기
const input = getPromptInput();
// 입력 받은 숫자만큼 별 출력
printStar(input);