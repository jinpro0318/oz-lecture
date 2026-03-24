const API_URL = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  // URL에서 postId 가져오기
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");

    const postFromSession = localStorage.getItem(`post_${postId}`);
    if (postFromSession) {
      console.log("render from localStorage");
      renderPost(JSON.parse(postFromSession));
      return;
    }

    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error("API 통신 오류");
    const post = await response.json();
    const postString = JSON.stringify(post);
    localStorage.setItem(`post_${postId}`, postString);

    renderPost(post);
    console.log("Post fetched from API");
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
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

// const setItem = function (key, val) {
//   localStorage.setItem(key, val);
// };

// const getItem = function (key) {
//   return localStorage.getItem(key);
// };

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
