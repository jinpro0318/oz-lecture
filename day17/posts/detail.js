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
        // 창고(localStorage)를 뒤져볼 이름표(키)와 현재 시간을 준비합니다.
        const cacheKey = `post_${postId}`;
        const now = Date.now(); // 5분이 지났는지 계산하기 위해 현재 시간을 가져옴

        // localStorage에서 캐시 확인 (도전 과제)
        const cachedData = localStorage.getItem(cacheKey);

        // localStorage에서 캐시가 조건에 충족하면 캐시 사용하여 post 초기화 (도전 과제)
        if (cachedData) { // 창고에 예전에 넣어둔 데이터가 있다면?
            const parsedData = JSON.parse(cachedData);
            // 지금 시간에서 저장했던 시간을 빼서 5분(5 * 60 * 1000 밀리초)이 안 지났는지 확인
            const isCacheValid = (now - parsedData.timestamp) < (5 * 60 * 1000);

            if (isCacheValid) { // 5분이 안 지났다면
                post = parsedData.data; // 서버에 안 물어보고 창고에서 바로 꺼내 씁니다.
                console.log("Post loaded from localStorage"); // 조건 달성: 콘솔 출력
            }
        }

        // localStorage에서 캐시가 조건에 충족하지 않으면 상세 데이터 fetch하여 post 초기화 
        // post 객체가 여전히 텅 비어있다면 (창고에 없었거나 5분이 지났다면) 서버에 요청
        if (Object.keys(post).length === 0) {
            // (기존 제공된 주소의 < > 기호 때문에 에러가 나는 것을 방지)
            const cleanApiUrl = apiUrl.replace('<', '').replace('>', '');
            
            // 서버에 데이터를 달라고 요청
            const response = await fetch(`${cleanApiUrl}/posts/${postId}`);
            if (!response.ok) throw new Error("Failed to fetch post details");
            post = await response.json();
            
            // 도전 과제: 가져온 상세 데이터와 '현재 시간'을 묶어서 localStorage에 캐시
            localStorage.setItem(cacheKey, JSON.stringify({
                data: post,
                timestamp: now // 나중에 5분 계산을 위해 저장하는 시간 기록
            }));
            console.log("Post fetched from API"); // 조건 달성: 콘솔 출력
        }

        
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
