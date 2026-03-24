// 모듈화가 덜 된 예시
const printTitle = "CodePrinter";

function print(val) {
  console.log(val);
}

const scannerTitle = "CodeScanner";
function scan(value) {
  const scanVal = `scan: ${value}`;
  console.log(scanVal);
  return scanVal;
}

export default {
  printTitle,
  print,
  scannerTitle,
  scan,
};
