export function getBlogs() {
  return fetch("http://localhost:3333/blogs").then((data) => data.json());
}

export function setItem(item) {
  return fetch("http://localhost:3333/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
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
