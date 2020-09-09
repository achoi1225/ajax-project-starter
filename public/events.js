// In this file, you'll be setting up event listeners and implementing AJAX
// requests using the Fetch API.

// index.js
// Finally, check out the index.js file. It might seem like there's a lot going on in this file, but the only piece that you have to edit in this file today is the ERROR_RATE. Otherwise, your primary interaction with this file will involve looking at the endpoints that you should be making requests to and seeing how the server handles each client request.

// index.html has an <img> element, but the element has an empty src attribute. In this first phase, set up an event listener that waits for the DOM content to be loaded. When the DOM content is loaded, the client should make a GET request, using the Fetch API, to the /kitten/image route.

let picButton = document.getElementById("new-pic")
picButton.addEventListener("click", newPicButtonHandler)

function newPicButtonHandler() {
  fetch(`/kitten/image`)
    .then(res => {
      if (!res.ok) throw res
      else return res.json()
    })
    .then(console.log) // TODO CHECK does this work
    .catch(err => err.json().then(errMsg)) // Hope it works
}

// it sends data about the kitten image back to the client.
// When the server responds, update the DOM so that it's showing the kitten picture.
