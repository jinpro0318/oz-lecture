const output = document.querySelector("#output");
const btnFetchPosts = document.querySelector("#fetchPosts");
const inputPostIds = document.querySelector("#postIds");

const clearOutput = () => {
  output.innerHTML = `<div id="output"></div>`;
};

const fetchPost = async (postId) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    let post = await response.json();
    return post;
  } catch (error) {
    document.getElementById("output").innerHTML =
      `<p>에러: ${error.message}</p>`;
    return null;
  }
};

const fetchMultiplePosts = async (postIds) => {
  const posts = [];
  for (const postId of postIds) {
    const post = await fetchPost(postId);
    posts.push(post);
  }
  // posts 배열을 순회하며 post 정보 출력
};

const handleClickSearch = async () => {
  // inputPostIds에서 postIds 가져오기
  await fetchMultiplePosts(postIds);
};

btnFetchPosts.addEventListener("click", handleClickSearch);
