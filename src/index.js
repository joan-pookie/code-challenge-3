const BASE_URL = "http://localhost:3000/posts";

function displayPosts() {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((posts) => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach((post) => renderPost(post));

      // Show first post by default
      if (posts.length > 0) {
        handlePostClick(posts[0].id);
      }
    });
}

function renderPost(post) {
  const postList = document.getElementById("post-list");

  const postItem = document.createElement("div");
  postItem.classList.add("post-item");

  const title = document.createElement("h3");
  title.textContent = post.title;

  const image = document.createElement("img");
  image.src = post.image;
  image.alt = post.title;

  postItem.appendChild(title);
  postItem.appendChild(image);

  postItem.addEventListener("click", () => handlePostClick());

  postList.appendChild(postItem);
}

function handlePostClick(postId) {
  fetch(`${BASE_URL}/${postId}`)
    .then((res) => res.json())
    .then((post) => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <h2>${post.title}</h2>
        <img src="${post.image}" alt="${post.title}" width="300">
        <p><strong>By:</strong> ${post.author}</p>
        <p>${post.content}</p>
        <button id="edit-btn">Edit</button>
        <button id="delete-btn">Delete</button>

        <form id="edit-post-form" class="hidden">
          <h4>Edit Post</h4>
          <label>Title:</label>
          <input type="text" id="edit-title" value="${post.title}" /><br/>
          <label>Content:</label>
          <textarea id="edit-content">${post.content}</textarea><br/>
          <button type="submit">Update</button>
          <button type="button" id="cancel-edit">Cancel</button>
        </form>
      `;

      document.getElementById("edit-btn").addEventListener("click", () => {
        document.getElementById("edit-post-form").classList.remove("hidden");
      });

      document.getElementById("cancel-edit").addEventListener("click", () => {
        document.getElementById("edit-post-form").classList.add("hidden");
      });

      document.getElementById("edit-post-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const updatedPost = {
          title: document.getElementById("edit-title").value,
          content: document.getElementById("edit-content").value
        };

        fetch(`${BASE_URL}/${post.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedPost)
        }).then(() => displayPosts());
      });

      document.getElementById("delete-btn").addEventListener("click", () => {
        fetch(`${BASE_URL}/${post.id}`, {
          method: "DELETE"
        }).then(() => {
          displayPosts();
          document.getElementById("post-detail").innerHTML = "<p>Post deleted.</p>";
        });
      });
    });
}

function addNewPostListener() {
  const form = document.getElementById("new-post-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      author: document.getElementById("author").value,
      image: document.getElementById("image").value
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then((res) => res.json())
      .then((createdPost) => {
        renderPost(createdPost);
        form.reset();
      });
  });
}

function main() {
  displayPosts();
  addNewPostListener();
}

document.addEventListener("DOMContentLoaded", main);
