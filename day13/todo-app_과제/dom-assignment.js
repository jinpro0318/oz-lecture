
// DOM: getElementById로 HTML 요소 선택
const taskInput = document.getElementById('taskInput');      // 입력창
const addButton = document.getElementById('addButton');      // 추가 버튼
const taskList = document.getElementById('taskList');        // <ul> 목록
const clearButton = document.getElementById('clearButton');  // 전체 삭제 버튼

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();   // trim() 사용 앞뒤 공백 제거 후 값 가져오기
    // 입력값이 비어있는지 확인 (빈 문자열이면 경고창)
    if (taskText === "") {
        alert('할 일을 입력해주세요!'); // 입력이 비어있을 경우 출력
        return;                    // 함수 종료
    }
    const li = document.createElement('li');     // DOM 조작: 새로운 리스트 아이템 <li> 생성
    li.className = 'task-item';                  // CSS 클래스 적용
    
    const span = document.createElement('span'); // DOM 조작: 할 일 텍스트를 담을 <span> 생성
    span.textContent = taskText; // 텍스트 추가

    // [이벤트 리스너] <span> 클릭 시 완료 상태 토글
    span.addEventListener('click', function() {
        span.classList.toggle('completed');   // 완료 시 .completed 클래스 토글 (밑줄 효과)
    });
    
    // DOM 조작: 삭제 버튼 <button> 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.className = 'delete-button'; // 제공된 CSS 클래스 적용
    
    // 이벤트 리스너: 각 삭제 버튼에 click 이벤트로 항목 제거
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);   // [DOM 조작] removeChild를 사용하여 해당 <li> 제거
    });

    // DOM 조작: appendChild로 요소 조립 (li 안에 span과 버튼 넣기)
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // DOM 조작: 최종적으로 <ul> 목록에 추가
    taskList.appendChild(li);

    // 추가 후 입력창 비우기 및 포커스
    taskInput.value = "";
    taskInput.focus();
}

// 함수: 모든 할 일 삭제 함수
function clearAllTasks() {
    // DOM 조작: innerHTML을 비우거나 반복문으로 removeChild 수행
    taskList.innerHTML = "";
}

// 이벤트 리스너: 추가 버튼 클릭 시 addTask 함수 실행
addButton.addEventListener('click', addTask);

// 이벤트 리스너: 입력창에서 Enter 키 이벤트 처리
taskInput.addEventListener('keypress', function(event) {
    // event.key === 'Enter' 체크
    if (event.key === 'Enter') {
        addTask();
    }
});

// 이벤트 리스너: 전체 삭제 버튼 클릭 시 clearAllTasks 함수 실행
clearButton.addEventListener('click', clearAllTasks);