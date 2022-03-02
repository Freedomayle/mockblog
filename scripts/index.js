async function getData() {
  let postList = document.getElementById('postlist');
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postsjson = await posts.json();

  for (let i = 0; i< postsjson.length; i++){
    let newItem = document.createElement("li");
    newItem.textContent = postsjson[i].title;
    postList.append(newItem)
    let newItem2 = document.createElement("li");
    newItem2.textContent = postsjson[i].body;
    postList.append(newItem)
  }

  
  let authorList = document.getElementById('authorlist');
  let authors = await fetch("https://jsonplaceholder.typicode.com/users");
  let authorsjson = await authors.json();

  for (let i = 0; i< authorsjson.length; i++){
    let newItem = document.createElement("li");
    newItem.textContent = authorsjson[i].name;
    authorList.append(newItem)
  }
}

getData();
