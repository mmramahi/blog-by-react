export function getBlogs() {
  return fetch("http://localhost:3333/blogs").then((data) => data.json());
}

export function setUser(user) {
  return fetch("http://localhost:3333/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  }).then((data) => data.json());
}

export function setBlog(blog) {
  return fetch("http://localhost:3333/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ blog }),
  }).then((data) => data.json());
}

export function deleteItem(id) {
  return fetch("http://localhost:3333/blogs/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((data) => data.json());
}
