// In this file, you'll be setting up event listeners and implementing AJAX
// requests using the Fetch API.

// index.js
// Finally, check out the index.js file. It might seem like there's a lot going on in this file, but the only piece that you have to edit in this file today is the ERROR_RATE. Otherwise, your primary interaction with this file will involve looking at the endpoints that you should be making requests to and seeing how the server handles each client request.

// index.html has an <img> element, but the element has an empty src attribute. In this first phase, set up an event listener that waits for the DOM content to be loaded. When the DOM content is loaded, the client should make a GET request, using the Fetch API, to the /kitten/image route.

let picButton = document.getElementById("new-pic")
picButton.addEventListener("click", newPicBtnHandler)

newPicBtnHandler();

function newPicBtnHandler() {
    const loadMsg = document.querySelector("div.loader");
    loadMsg.innerHTML = 'getting cats!';
    fetch(`/kitten/image`)
        .then(res => {
        if (!res.ok) throw res
        else return res.json()
        })
        .then(kittenImg => {
            // console.log;
            const imgTag = document.querySelector("img");
            imgTag.setAttribute("src", kittenImg.src);
            loadMsg.innerHTML = '<br>'; 
        })
        .catch(err => err.json().then(errMsg => {
          alert(errMsg.message)
        }))
}

const upvoteBtn = document.getElementById("upvote")
const downvoteBtn = document.getElementById("downvote")

upvoteBtn.addEventListener("click", voteBtnHandler)
downvoteBtn.addEventListener("click", voteBtnHandler)

function voteBtnHandler(event) {
  fetch(`/kitten/${event.target.id}`, {
    method: "PATCH"
  })
    .then(res => {
      if (!res.ok) throw new Error("Nopers upvotes")
      return res.json()
    })
    .then(scoreJson => {
      let score = document.querySelector(".score")
      score.innerHTML = scoreJson.score
    })
    .catch(err => console.log(err.message))
}

const commentForm = document.querySelector(".comment-form");
commentForm.addEventListener("submit", sendComment);




function sendComment(event) {
    event.preventDefault();
    const input = document.getElementById("user-comment")
    let inputVal = input.value;
    comments.innerHTML += `<p>${inputVal}</p>`;
    
    const formPackage = new FormData(commentForm);
    // .entries() = ["field name aka lilies", "field value aka carrots"]
    
    const userComment = formPackage.get('user-comment')
  
    console.log('usercomment', userComment)
    
    for(let testOfMyPackage of formPackage.keys()) {
      console.log("Hello! This is a formPackage key:", testOfMyPackage);
  }

    fetch("/kitten/comments", {
        method: "POST",
        // headers: {"Content-Type": "application/json"},
        body: {},
    });


}


// fetch("https://jservice.xyz/api/categories", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "ACTORS & THEIR FILMS"
//     })
// })
//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });


const comments = document.querySelector(".comments");


// commentForm.addEventListener("input", (ev) => {
//   inputVal = ev.target.value
//   // console.log(inputVal)
// })

// const submitBtn = document.getElementById('sunflower');
// commentForm.addEventListener('click', e => {
//     console.log('currentTarget', event.currentTarget, 'event.target', event.target);
// })