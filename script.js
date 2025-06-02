document.getElementById("fetchButton").addEventListener("click", fetchPosts);

function fetchPosts() {
  const postList = document.getElementById("postList");
  const errorDiv = document.getElementById("error");
  postList.innerHTML = "<p>Posts are loading</p>";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);
      postList.innerHTML = "";
      posts.forEach(() => {
        document.createElement("div");
        constElement.add("post");
        postList.appendChild(postElement);
      });
    })
    .catch((error) => {
      errorDiv.textContent = `An error occurred: ${error}`;
      postList.innerHTML = "";
    });
}
