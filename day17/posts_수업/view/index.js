import { API_URL } from "../../util/consts/api-consts.js";
import cacher from "../../util/cacher.js";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  // URL에서 postId 가져오기
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");

    const postCache = cacher.getItem(`post-${postId}`);
    if (postCache) {
      const post = JSON.parse(postCache);
      renderPost(post);
      console.log("Post loaded from localStorage");
      return;
    }

    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error("API 통신 오류");
    const post = await response.json();
    renderPost(post);
    console.log("Post fetched from API");
    cacher.setItem(`post-${postId}`, JSON.stringify(post));
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

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
