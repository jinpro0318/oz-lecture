// detail.js (포스트 상세 화면용 JavaScript)
// API 기본 주소 저장
const apiUrl = "<https://jsonplaceholder.typicode.com>";

// 포스트 상세 정보 표시를 위한 비동기(async) 함수
async function displayPostDetail() {
    // URL에서 postId 가져오기
    try {
        // URLSearchParams 객체를 사용하여 URL 쿼리 파라미터에서 postId를 추출
        const urlParams = new URLSearchParams(window.location.search);
        // postId가 없는 경우 에러를 발생시킴
        const postId = urlParams.get("postId");
        // postId가 없는 경우 에러를 발생시킴
        if (!postId) throw new Error("No post ID provided");
        // 포스트 상세 정보를 저장할 객체 초기화
        let post = {};
        
        // await fetch(`${apiUrl}/posts/${postId}`);
        // 창고(localStorage)를 뒤져볼 이름표(키)와 현재 시간 정의 
        const cacheKey = `post_${postId}`;
        const now = Date.now(); // 5분이 지났는지 계산하기 위해 현재 시간을 가져옴

        // localStorage에서 캐시 확인 (도전 과제)
        const cachedData = localStorage.getItem(cacheKey);

        // localStorage에서 캐시가 조건에 충족하면 캐시 사용하여 post 초기화
        if (cachedData) { // 창고에 예전에 넣어둔 데이터가 있다면?
            const parsedData = JSON.parse(cachedData);
            // 현재 시간과 캐시된 시간의 차이가 5분(300,000ms)보다 작은지 계산하여 캐시가 유효한지 판단
            const isCacheValid = (now - parsedData.timestamp) < (5 * 60 * 1000);
            // 5분이 안 지났다면 캐시된 데이터를 post에 저장하고 콘솔에 출력
            if (isCacheValid) { // 5분이 안 지났다면
                post = parsedData.data; // 창고에서 꺼낸 데이터를 post에 저장
                console.log("Post loaded from localStorage"); // 조건 달성: 콘솔 출력
            }
        }

        // localStorage에서 캐시가 조건에 충족하지 않으면 상세 데이터 fetch하여 post 초기화 
        // post 객체가 여전히 텅 비어있다면 (창고에 없었거나 5분이 지났다면) 서버에 요청
        if (Object.keys(post).length === 0) {
            // apiUrl에서 '<'와 '>' 제거하여 깨끗한 URL 만들기
            const cleanApiUrl = apiUrl.replace('<', '').replace('>', '');
            
            // 서버에 데이터를 달라고 요청
            // fetch 함수를 사용하여 API에서 포스트 상세 데이터를 가져옴 (await 키워드로 비동기 처리)
            const response = await fetch(`${cleanApiUrl}/posts/${postId}`);
            // 응답이 성공적이지 않으면 에러를 발생시킴
            if (!response.ok) throw new Error("Failed to fetch post details");
            // 응답 데이터를 자바스크립트에서 쓸 수 있는 JSON 형식으로 변환하여 post 변수에 저장
            post = await response.json();
            
            // 가져온 포스트 상세 데이터를 localStorage에 캐시
            localStorage.setItem(cacheKey, JSON.stringify({
                data: post,    // 5분이 지났는지 계산하기 위해 저장하는 시간과 데이터를 함께 저장
                timestamp: now // 나중에 5분 계산을 위해 저장하는 시간 기록
            }));
            console.log("Post fetched from API"); // 조건 달성: 콘솔 출력
        }

        // 포스트 상세 정보를 화면에 표시하는 함수 호출
        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>Error loading post details</p>";
    }
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
