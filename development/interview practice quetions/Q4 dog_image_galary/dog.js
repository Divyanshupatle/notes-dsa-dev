// Build a simple dog image gallery 
// that fetches three random dog images 
// from "https://dog.ceo/api/breeds/image/random" 
// in parallel using a Promise method.
// Clicking the "Get Dogs" button should display 
// three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

const btn = document.getElementById('fetchDogsBtn');

function fetchImage(){
   const dog = fetch("https://dog.ceo/api/breeds/image/random");

}

function callBack(){

}
btn.addEventListener('click', function(){
    console.log("cliked");
})
