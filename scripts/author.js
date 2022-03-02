let postsByAuthorList = document.getElementById("posts-by-author")
let postAuthor = document.getElementById('post-author');


async function getData() {

    let params = new URLSearchParams(document.location.search);
    let authorName = params.get("name");
    let author = await fetch(`https://jsonplaceholder.typicode.com/users?name=${authorName}`);
    let authorJSON = await author.json();
    postAuthor.textContent = authorJSON[0].name ;


    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    postsJSON = await posts.json();

    for (let i = 0; i< postsJSON.length; i++){
        if(postsJSON[i].userId === authorJSON[0].id){
        let newItem = document.createElement("li");
        newItem.textContent = `Title : ${postsJSON[i].title}`;
        postsByAuthorList.append(newItem);
        }
    }
}

getData();
