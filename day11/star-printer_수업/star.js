const STAR = "*";
const DASH = "=";
const SPACE = " ";
const PATTERN = [2, 3, 11, 3];
const ERROR_MESSAGE = "Invalid input! Enter a number between 1 and 10.";

const getPromptInput = () => {
  let input;
  let isNotValid = true;

  while (isNotValid) {
    let inputStr = prompt("출력할 별 갯수를 입력하세요.");
    input = Number(inputStr);
    if (isNaN(input)) {
      console.log(`${ERROR_MESSAGE}: ${inputStr}는 숫자가 아닙니다.`);
      continue;
    }
    if (input < 1) {
      console.log(`${ERROR_MESSAGE}: ${input}는 1 이상의 숫자가 아닙니다.`);
      continue;
    }
    if (input > 10) {
      console.log(`${ERROR_MESSAGE}: ${input}는 10 이하의 숫자가 아닙니다.`);
      continue;
    }
    isNotValid = false;
  }
  return input;
};

function makeSign(number, sign) {
  var result = "";
  for (let i = 0; i < number; i++) {
    result += sign;
  }
  return result;
}

function printStar(number) {
  console.log(makeSign(number, STAR));
}

function printDash(number) {
  console.log(makeSign(number, DASH));
}

function printReverseStar(number) {
  console.log("역순 별");
  for (let i = 0; i < number; i++) {
    let sign = makeSign(number - i, STAR);
    console.log(sign);
  }
}

function printSquare(number) {
  console.log("정사각형");
  for (let i = 0; i < number; i++) {
    let sign = makeSign(number, STAR);
    console.log(sign);
  }
}

function printPyramid(number) {
  console.log("피라미드");
  for (let i = 0; i < number; i++) {
    let space = makeSign(number - i - 1, SPACE);
    let sign = makeSign(2 * i + 1, STAR);
    console.log(space + sign);
  }
}

function printPattern() {
  console.log("패턴");
  for (let i = 0; i < PATTERN.length; i++) {
    let sign = makeSign(PATTERN[i], STAR);
    console.log(sign);
  }
}

const input = getPromptInput();
printStar(input);
printDash(input);
printReverseStar(input);
printSquare(input);
printPyramid(input);
printPattern();
