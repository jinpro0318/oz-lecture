import { appendNumber, setOperator, resetDisplay, calculate, VALID_NUMBERS, VALID_OPERATORS, currentInput, isError } from './index.js';

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) appendNumber(key, currentInput);
    if (VALID_OPERATORS.includes(key)) setOperator(key, currentInput);
    if (key === "Enter") calculate();
    if (key === "Backspace") subDisplay();
});