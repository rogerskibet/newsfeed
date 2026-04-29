const API_URL = "http://localhost:3000/posts";

export async function createPost(postData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return res.json();
}

export async function getPosts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return res.json();
}

export async function updatePost(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}