async function getData() {
  let postList = document.getElementById('postlist');
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let postsjson = await posts.json();

  for (let i = 0; i< postsjson.length; i++){

    let newItem = document.createElement("h2");
    newItem.classList.add("post-title");
    newItem.textContent = `Title : ${postsjson[i].title}`;
    postList.append(newItem)
    let link = document.createElement("a");
    newItem.parentNode.replaceChild(link, newItem); 
    link.appendChild(newItem);    
    link.href=`post.html?id=${postsjson[i].id}`

    let newItem2 = document.createElement("li");
    newItem2.textContent = `${postsjson[i].body}`;
    postList.append(newItem2);
  }

  
  let authorList = document.getElementById('authorlist');
  let authors = await fetch("https://jsonplaceholder.typicode.com/users");
  let authorsjson = await authors.json();

  for (let i = 0; i< authorsjson.length; i++){
    let newItem = document.createElement("li");
    newItem.textContent = authorsjson[i].name;
    authorList.append(newItem);

    let link = document.createElement("a");
    newItem.parentNode.replaceChild(link, newItem); 
    link.appendChild(newItem);    
    link.href=`author.html?name=${authorsjson[i].name}`
  }
}

getData();
