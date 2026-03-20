const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");
const MAX_SEC = 10;

const resetTimerInput = () => {
  // timerInput 초기화
};

const resetTimerDisp = () => {
  timerDisplay.innerHTML = "";
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  const p = document.createElement("p");
  p.textContent = `${sec}초`;
  timerDisplay.appendChild(p);
};

const showTimerComplete = () => {
  resetTimerDisp();
  const p = document.createElement("p");
  p.textContent = "타이머 종료!!!";
  timerDisplay.appendChild(p);
};

const showTimerError = (message) => {
  // timerDisplay에 오류 메세지 표시
  resetTimerDisp();
  const p = document.createElement("p");
  p.textContent = message;
  p.classList.add("error");
  timerDisplay.appendChild(p);
};

const processTimer = (sec) => {
  console.log("processTimer", sec);
  showTimerSec(sec);
  startTimer.disabled = true;

  const timer = setInterval(() => {
    sec -= 1;
    if (sec > 0) {
      showTimerSec(sec);
    }
    if (sec <= 0) {
      clearInterval(timer);
      showTimerComplete();
      startTimer.disabled = false;
    }
  }, 1000);
};

// 타이머 시작
function handleClickTimer() {
  console.log("타이머 시작");

  const sec = timerInput.value;
  const secNum = Number(sec);
  // 유효성 검증
  if (isNaN(secNum)) {
    showTimerError("숫자를 입력해주세요.");
    return;
  }
  if (secNum < 1 || secNum > MAX_SEC) {
    showTimerError(`1에서 ${MAX_SEC} 사이의 숫자를 입력해주세요.`);
    return;
  }
  processTimer(secNum);
  resetTimerInput();
}

// startTimer.addEventListener("click", handleClickTimer);
// startTimer.onclick = handleClickTimer;
