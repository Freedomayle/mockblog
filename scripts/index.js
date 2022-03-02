async function getData() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postsjson = await posts.json();
  postlist.textContent = postsjson

  let authors = await fetch("https://jsonplaceholder.typicode.com/users");
  let authorsjson = await authors.json();
  authorlist.textContent = authorsjson
}

getData();
