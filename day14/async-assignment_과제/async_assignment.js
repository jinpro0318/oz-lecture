const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// const 사용: 최대 제한 시간 10초 설정
const MAX_TIME = 10;

const resetTimerInput = () => {
  // timerInput 초기화
  timerInput.value = "";
};

const resetTimerDisp = () => {
  // timerDisplay 초기화 및 에러 클래스 제거
  timerDisplay.textContent = "";
  timerDisplay.classList.remove("error");
};

const showTimerSec = (sec) => {
  resetTimerDisp();
  // timerDisplay에 현재 초 표시
  timerDisplay.textContent = "타이머: " + sec + "초";
};

const showTimerComplete = () => {
  resetTimerDisp();
  // timerDisplay에 타이머 종료 메세지 표시
  timerDisplay.textContent = "타이머 종료!";
  // [기능 요구사항] 종료 후 버튼 재활성화
  startTimer.disabled = false;
};

const showTimerError = (message) => {
  // timerDisplay에 오류 메세지 표시 및 빨간색 스타일 적용
  timerDisplay.textContent = message;
  timerDisplay.classList.add("error");
};

const processTimer = (sec) => {
  // 타이머 시작 시 버튼 비활성화
  startTimer.disabled = true;
  showTimerSec(sec);
  //let 사용: 1초마다 감소할 초를 저장
  let currentSec = sec;
  // 1초마다 반복되는 함수
  const timer = setInterval(() => {
    // 1초마다 sec 감소,
    sec -= 1;
    // sec이 0보다 작으면 타이머 중지
    if (sec < 0) {
      clearInterval(timer);
      // 타이머 종료 메세지 표시
      showTimerComplete();
    }
  }, 1000);
};

// 타이머 시작
function handleClickTimer() {
  try {
    // var 사용: 에러 메시지 정의
    var errorMessage = "유효한 숫자(1-10)를 입력하세요!";
    // let 사용: 입력창에서 값을 가져와 숫자로 변환
    let inputValue = timerInput.value;
    const time = Number(inputValue); 
    // 조건문과 연산자: 입력 유효성 검사 (1~10 범위, 빈 값, 숫자 여부)
    if (inputValue === "" || isNaN(time) || time < 1 || time > MAX_TIME) {
      // 유효하지 않으면 에러를 던져 catch 블록으로 이동
      throw new Error(errorMessage);
    }
    processTimer(time);
  } catch (error) {
    // 오류 메세지 출력 및 입력창 초기화
    showTimerError(error.message);
    resetTimerInput();
    // 에러 발생 시 버튼 다시 활성화
    startTimer.disabled = false;
  }
}

// 이벤트 리스너: 시작 버튼 클릭 시 handleClickTimer 실행
startTimer.addEventListener("click", handleClickTimer);