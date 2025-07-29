// Build a simple dog image gallery 
// that fetches three random dog images 
// from "https://dog.ceo/api/breeds/image/random" 
// in parallel using a Promise method.
// Clicking the "Get Dogs" button should display 
// three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

const btn = document.getElementById('fetchDogsBtn');

// function fetchImage(){
//    const dog1 = fetch("https://dog.ceo/api/breeds/image/random");
//    const dog2 = fetch("https://dog.ceo/api/breeds/image/random");
//    const dog3 = fetch("https://dog.ceo/api/breeds/image/random");
   
//    const ImageContainer = document.querySelector("#dogContainer");

//    Promise.all([dog1, dog2, dog3])

//    .then(function(responses){
    //         let arr = []
    //         for(let i=0; i<3; i++){
        //             arr.push(responses[i].json())
        //             // console.log(responses[i].json() )
        //         }
        
//         return arr;
//    })
//    .then(function(images){
    //         // for(let i=0; i<images.length; i++){
        //         //     const img = document.createElement('img');
//         //     img.src = images[i];

//         //     ImageContainer.appendChild(img);
//         // }

//         for(let i=0; i<3; i++){
    //             console.log(images[i]);
    //         }
    
//         // console.log(images);
//    })

// }

async function fetchImage(){
    const dog1 = fetch("https://dog.ceo/api/breeds/image/random");
    const dog2 = fetch("https://dog.ceo/api/breeds/image/random");
    const dog3 = fetch("https://dog.ceo/api/breeds/image/random");
    const ImageContainer = document.querySelector("#dogContainer");

    const responses = await Promise.all([dog1, dog2, dog3]);
    const data = await Promise.all(responses.map(res => res.json()));

    ImageContainer.innerHTML = '';

    data.forEach((dog)=>{
        const img = document.createElement('img');
        img.src = dog.message;
        // console.log(dog);
        ImageContainer.appendChild(img);
    })
    // console.log(data[0].message);

}

function callBack(){

}
btn.addEventListener('click', function(){
    fetchImage();
})
