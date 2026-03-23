// list.js (포스트 목록 화면용 JavaScript)
// 데이터를 가져올 서버의 API URL을 변수로 정의 
const apiUrl = "<https://jsonplaceholder.typicode.com>";

// 포스트 목록을 가져와서 화면에 표시하는 비동기(async) 함수
async function displayPosts() {
    // 포스트 데이터 가져오기(try 블록 안의 코드를 실행하고, 에러가 발생하면 catch 블록으로 이동)
    try {
        // fetch 함수를 사용하여 API에서 포스트 데이터를 가져옴 (await 키워드로 비동기 처리)
        const response = await fetch(`${apiUrl}/posts`);
        // 응답이 성공적이지 않으면 에러를 발생시킴
        if (!response.ok) throw new Error("Failed to fetch posts");
        // 응답 데이터를 자바스크립트에서 쓸 수 있는 JSON 형식으로 변환하여 posts 변수에 저장
        const posts = await response.json();

        // 포스트 목록을 화면에 표시하기 위해 HTML에서 id가 "post-list"인 <ul> 태그를 찾아 변수에 저장
        const postList = document.getElementById("post-list");
        // 이전에 있던 목록 데이터들을 깔끔하게 지워 초기화
        postList.innerHTML = "";
        // 가져온 포스트 데이터 배열을 반복하여 각 포스트를 화면에 표시
        posts.forEach(post => {
            // 각 포스트마다 <li> 태그를 만들어 제목을 텍스트로 설정
            const li = document.createElement("li");
            // 포스트 제목을 <li> 요소의 텍스트로 설정
            li.textContent = post.title;
            // 포스트 ID를 데이터 속성으로 저장 (도전 과제)
            li.dataset.postId = post.id;
            // 포스트 클릭 시 상세 페이지로 이동
            li.addEventListener("click", () => {
                // 클릭한 포스트의 ID를 URL 쿼리 파라미터로 전달하여 상세 페이지로 이동
                window.location.href = `detail.html?postId=${post.id}`;
            });
            // 만들어진 <li> 요소를 <ul> 태그에 추가하여 화면에 표시
            postList.appendChild(li);
        });
        // 도전 과제: 포스트 목록을 localStorage에 캐시 (도전 과제)
    } catch (error) {
        // 에러가 발생하면 콘솔에 에러 메시지를 출력
        console.error("Error:", error.message);
    }
}

// 페이지 로드 시 포스트 목록 표시
displayPosts();
