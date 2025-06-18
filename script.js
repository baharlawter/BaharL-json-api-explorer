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

      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postList.appendChild(postElement);
      });
    })
    .catch((error) => {
      errorDiv.textContent = `An error occurred`;
      postList.innerHTML = "";
    });
}
{
  son;
}
