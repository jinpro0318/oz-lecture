
const STAR = "*";

const getPromptInput = () => {
    let input;
    let isNotValid = true;
    
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.")
        input = Number(inputStr);
        if(isNaN(input)) {
            console.log('오류');
            continue;
        }
        isNotValid = false;
    }
    return input;
}

function printStar() {
    // 별찍기
}

const input = getPromptInput();
printStar(input);