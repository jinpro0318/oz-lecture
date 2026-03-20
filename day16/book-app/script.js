// 도서 데이터를 저장할 배열 : 앞으로 책의 제목과 가격 정보 객체들이 담길 곳.
const books = [];
// 대여 상태를 관리할 배열 : 책이 대여 중인지 등의 상태를 관리하는 도구(함수들)가 담길 곳.
const rentals = [];

// 도서 추가 기능
function addBook() {
    // HTML 문서에서 id가 'bookTitle'인 입력칸(input) 요소를 찾아 titleInput 변수에 저장.
    const titleInput = document.getElementById('bookTitle');
    // HTML 문서에서 id가 'bookPrice'인 입력칸(input) 요소를 찾아 priceInput 변수에 저장.
    const priceInput = document.getElementById('bookPrice');
    // titleInput에 사용자가 입력한 값(.value)을 가져오되, 양끝의 쓸데없는 띄어쓰기(공백)를 제거(.trim())하여 title에 저장.
    const title = titleInput.value.trim();
    // priceInput에 입력된 값은 문자열이므로, Number()를 사용해 진짜 '숫자'로 변환하여 price에 저장.
    const price = Number(priceInput.value);

    // 유효성 검사: 만약 제목이 비어있거나(title === ''), 가격이 숫자가 아니거나(isNaN), 가격이 0 이하이면 오류 메시지를 띄움.
    if (title === '' || isNaN(price) || price <= 0) {
        alert('도서 제목과 유효한 가격(0 이상)을 입력하세요!');
        // 조건에 맞지 않으므로 여기서 함수를 즉시 종료(return). 아래 코드는 실행되지 않음.
        return;
    }

    // 이름표(key)와 값(value)이 같은 경우 { title: title, price: price }를 { title, price }로 줄여서 쓸 수 있다.
    // 방금 입력받은 제목과 가격으로 하나의 '책 객체'를 만든다.
    const book = { title, price };
    // 만들어진 책 객체를 위에서 만든 books 배열의 맨 끝에 밀어 넣는다.(push)
    books.push(book);

    // 대여 상태 클로저 객체 생성 및 저장
    // 아래 쪽에 정의된 createBookRental 함수를 실행하여, 이 책 전용 대여 관리 도구(객체)를 만든다.
    const rental = createBookRental(title);
    // 만들어진 대여 관리 도구를 rentals 배열에 밀어 넣는다.
    rentals.push(rental);

    // 화면(HTML)에 책 목록을 보여주기 위해, id가 'bookList'인 태그(보통 <ul> 태그)를 찾아서 가져온다.
    const bookList = document.getElementById('bookList');
    // 화면에 추가할 새로운 <li> 요소(리스트 항목)를 자바스크립트로 직접 만든다.
    const li = document.createElement('li');
    // 방금 만든 <li> 태그에 'book-item'이라는 클래스 이름을 붙여준다. (CSS 스타일링 등을 위해)
    li.className = 'book-item';
    // 백틱(`)을 사용해 HTML 구조를 문자열로 만들어 <li> 태그 안에 넣는다.
    // ${} 안에는 변수 값을 넣을 수 있습니다. 삭제 버튼과 대여 버튼도 함께 만들어준다.
    li.innerHTML = `
        <span>${title} - ${price}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
    // 만들어진 <li> 요소를 화면의 목록(bookList) 맨 끝에 자식 요소로 찰싹 붙여서(appendChild) 화면에 보이게 한다.
    bookList.appendChild(li);

    // 추가가 끝났으니, 다음 입력을 위해 입력칸을 다시 빈칸으로 초기화한다.
    titleInput.value = '';
    priceInput.value = '';
}

// 삭제 기능
// 괄호 안의 button은 HTML에서 클릭된 <button> 태그 자신(this)을 의미.
function removeBook(button) {
    // li 요소와 제목 추출
    // 클릭된 버튼의 바로 부모 태그(여기서는 <li>)를 찾아서 li 변수에 저장.
    const li = button.parentElement;
    // 그 <li> 태그 안에 있는 <span> 태그를 찾아 그 안의 글자(textContent)를 가져온다.
    const text = li.querySelector('span').textContent; // 예: "책1 - 5000원 (대여 가능)"
    // 글자를 ' - ' 기준으로 쪼개면 ["책1", "5000원 (대여 가능)"] 같은 배열이 됩니다. 여기서 첫 번째[0]인 제목("책1")만 가져온다.
    const title = text.split(' - ')[0]; // 제목: "책1"

    // TODO : books 배열에서 도서 제거 (findIndex, splice 사용)
    // books 배열을 처음부터 뒤지면서(findIndex), 현재 찾은 책의 제목(book.title)과 지우려는 제목(title)이 일치하는 위치(인덱스 번호)를 찾는다.
    const bookIndex = books.findIndex(book => book.title === title);
    // findIndex는 못 찾으면 -1을 반환. -1이 아니라는 것(!== -1)은 책을 찾았다는 뜻.
    // 찾았다면 books 배열에서 그 위치(bookIndex)부터 1개의 데이터를 삭제(splice = 삭제).
    if (bookIndex !== -1) books.splice(bookIndex, 1);

    // TODO(도전과제) : rentals 배열에서 대여 상태 제거 (findIndex, splice 사용)
    // rentals 배열도 마찬가지로, 그 안의 getStatus().title (현재 상태의 제목)이 지우려는 제목과 일치하는 위치를 찾는다.
    const rentalIndex = rentals.findIndex(rental => rental.getStatus().title === title);
    // 찾았다면 rentals 배열에서도 그 위치부터 1개를 삭제.
    if (rentalIndex !== -1) rentals.splice(rentalIndex, 1);

    // DOM에서 li 제거
    // 데이터(배열)에서 지웠으니, 실제 눈에 보이는 HTML 화면에서도 해당 <li> 태그를 완전히 지워버립니다.
    li.remove();
}

// 도서 데이터 처리
function processBooks() {
    // TODO : map 제목에 "Book: " 접두사 추가
    // 각 객체의 title 속성 앞에 "Book: "을 붙인 새 배열 생성
    // map은 배열의 모든 요소를 하나씩 꺼내서 무언가 수정한 뒤, '새로운 배열'을 만들어내는 마법 같은 함수.
    const prefixedBooks = books.map(book => ({
        ...book,                       // 점 3개(...)는 스프레드 문법. 기존 책의 정보(가격 등)를 그대로 복사해 온다는 뜻.
        title: `Book: ${book.title}`   // 제목만 기존 제목 앞에 'Book: '을 붙여서 덮어씌운다.
    }));

    // TODO : filter 10000원 이상 도서
    // filter는 배열 요소 중 조건(가격이 10000 이상)이 '참(true)'인 것들만 쏙쏙 걸러내어 '새로운 배열'을 만든다.
    const highPriceBooks = books.filter(book => book.price >= 10000);

    // TODO : reduce 총 가격 계산
    // reduce는 배열의 모든 요소를 순회하면서 하나의 최종 결과값(여기서는 총합)을 누적해서 계산.
    // sum은 누적된 합계, book은 현재 순회 중인 책입니다. 마지막의 '0'은 누적 계산을 시작할 초기값.
    const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

    // 결과 표시
    // 화면에서 결과를 보여줄 공간(<div id="results">)을 찾는다.
    const resultsDiv = document.getElementById('results');
    // 화면에 그릴 HTML 문서를 문자열로 만들기 시작.
    let html = '<h3>상위 가격 도서:</h3><ul>';
    // 만약 책이 한 권도 없다면(배열의 길이가 0이라면)
    if (prefixedBooks.length === 0) {
        html += '<li>도서가 없습니다.</li>';
    } else {
        // 책이 있다면, forEach를 통해 배열을 하나씩 돌면서 <li> 태그를 만들어 문자열(html)에 이어 붙인다(+=).
        prefixedBooks.forEach(book => {
            html += `<li>${book.title} - ${book.price}원</li>`;
        });
    }
    // 목록 태그를 닫는다.
    html += '</ul>';

    // 고가 도서도 위와 똑같은 방식으로 HTML 문자열을 이어 붙여 만든다.
    html += '<h3>고가 도서:</h3><ul>';
    if (highPriceBooks.length === 0) {
        html += '<li>고가 도서가 없습니다.</li>';
    } else {
        highPriceBooks.forEach(book => {
            html += `<li>${book.title} - ${book.price}원</li>`;
        });
    }
    html += '</ul>';

    // 마지막으로 총 가격 정보를 HTML 문자열에 추가.
    html += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
    // 이렇게 길게 이어 붙여 만든 최종 HTML 문자열을 실제 화면의 구역(resultsDiv)에 밀어 넣어 렌더링(표시).
    resultsDiv.innerHTML = html;
}

// 클로저로 대여 상태 관리
// 화살표 함수(=>)를 사용해 함수를 만든다. 책 제목(bookTitle)을 입력받는다.
const createBookRental = (bookTitle) => {
    // 함수 내부에 대여 여부(isBorrowed)와 대여 횟수(borrowCount) 변수를 만든다.
    // 이 변수들은 밖에서 직접 접근할 수 없는 안전한 '비밀 창고'에 저장. (클로저 기능)
    let isBorrowed = false;
    let borrowCount = 0;
    // 이 함수는 3개의 기능(메서드)을 가진 '객체'를 반환(return).
    // 밖에서는 오직 이 3개의 기능을 통해서만 내부의 비밀 창고(isBorrowed, borrowCount)를 조작 가능.
    return {
        // 1. 책을 빌리는 기능
        borrow: () => {
            // 이미 빌려간 상태(isBorrowed가 true)라면 경고창을 띄우고 실패(false)를 반환.
            if (isBorrowed) {
                alert(`${bookTitle}은 이미 대여 중입니다.`);
                return false;
            }
            // 안 빌려간 상태라면 빌림 상태를 true로 바꾸고, 빌린 횟수를 1 증가시킨 뒤 성공(true)을 반환.
            isBorrowed = true;
            borrowCount++;
            return true;
        },
        // 2. 책을 반납하는 기능
        returnBook: () => {
            // 대여 상태를 다시 false(빌려가지 않음)로 돌려놓는다.
            isBorrowed = false;
        },
        // 3. 현재 상태를 확인하는 기능
        getStatus: () => ({
            title: bookTitle,   // 책 제목
            isBorrowed,         // 현재 대여 중인지 여부 (isBorrowed: isBorrowed 의 축약형)
            borrowCount         // 지금까지 빌린 총 횟수
        })
    };
};

// 대여/반납 토글
function toggleRental(button) {
    // 클릭된 버튼의 부모 <li> 태그를 찾고, 그 안의 글자를 추출해서 책 제목(title)만 딱 잘라낸다. (삭제 기능과 동일한 원리)
    const li = button.parentElement;
    const text = li.querySelector('span').textContent;
    const title = text.split(' - ')[0];
    
    // TODO(도전과제) : rentals에서 title과 동일한 요소 찾기
    // find는 배열을 돌면서 조건에 맞는 '첫 번째 데이터 딱 1개'만 찾아서 반환.
    // rentals 배열에서 책 제목과 일치하는 대여 관리 객체를 찾는다.
    const rental = rentals.find(r => r.getStatus().title === title);
    // 만약 못 찾았다면, 에러가 나지 않도록 여기서 함수를 조용히 끝낸다.
    if (!rental) return;

    // 찾은 대여 객체에서 현재 상태 정보를 가져온다.
    const status = rental.getStatus();

    // TODO(도전과제) : books에서 title과 동일한 요소 찾기
    // 가격 정보를 화면에 다시 표시해 주기 위해, books 배열에서도 해당 책의 원본 데이터를 찾는다.
    const book = books.find(b => b.title === title);
    // 만약 현재 책이 '대여 중' 상태라면? -> 반납 처리를 해야한다.
    if (status.isBorrowed) {
        // 반납 기능을 실행합니다. (클로저 내부의 isBorrowed가 false로 바뀜)
        rental.returnBook();
        // 화면의 글자를 '(대여 가능)'으로 바꿔준다.
        li.querySelector('span').textContent = `${title} - ${book.price}원 (대여 가능)`;
    } else {   // 만약 현재 책이 '대여 가능' 상태라면? -> 대여 처리를 해야한다.
        if (rental.borrow()) {   // 대여 기능을 실행합니다. 무사히 대여가 완료되어 true가 반환되었다면 (if문 통과)
            li.querySelector('span').textContent = `${title} - ${book.price}원 (대여 중)`;   // 화면의 글자를 '(대여 중)'으로 바꿔준다
        }
    }
}

// 모든 대여 상태 표시
function showAllRentalStatus() {
    // 결과를 표시할 화면 구역을 찾는다.
    const resultsDiv = document.getElementById('results');
    // HTML 문자열 만들기 시작.
    let html = '<h3>대여 상태:</h3><ul>';
    // 대여 기록이 하나도 없다면
    if (rentals.length === 0) {
        html += '<li>대여 정보가 없습니다.</li>';
    } else {
        // 대여 기록이 있다면, rentals 배열을 순회하면서 정보를 하나씩 뽑아낸다.
        rentals.forEach(rental => {
            // 각 렌탈 객체의 현재 상태를 가져온다.
            const status = rental.getStatus();
            // 삼항 연산자(조건 ? 참일 때 : 거짓일 때)를 사용해 isBorrowed가 true면 '대여 중', false면 '대여 가능'이라는 글자를 찍는다.
            html += `<li>${status.title}: ${status.isBorrowed ? '대여 중' : '대여 가능'}, 대여 횟수: ${status.borrowCount}</li>`;
        });
    }

    // 목록을 닫는다.
    html += '</ul>';
    // 완성된 HTML을 화면 표시.
    resultsDiv.innerHTML = html;
}