let postContent = document.getElementById('post-content');
let postAuthor = document.getElementById('post-author');
let postTitle = document.getElementById('post-title')

async function getData() {

    let params = new URLSearchParams(document.location.search);
    let postID = params.get("id");
    console.log(postID)
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
    postJSON = await post.json();
    postTitle.textContent = `Title: ${postJSON.title}`;
    postContent.textContent = postJSON.body;

    let authorID = postJSON.userId;
    let authors = await fetch(`https://jsonplaceholder.typicode.com/users/${authorID}`);
    authorJSON = await authors.json();
    postAuthor.textContent = authorJSON.name;
}

getData();