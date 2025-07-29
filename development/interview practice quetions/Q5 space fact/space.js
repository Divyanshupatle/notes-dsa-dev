// Since APIs can sometimes be slow or unreliable, 
// you’ll use Promise.any() to fetch data from 
// three different sources at once 
// and display the first successful response.

// User Flow:

// The user clicks the "Get Space Fact" button.
// The app sends three simultaneous 
//API requests to fetch space facts.
// The first successful API response 
//is displayed on the screen.
// If all APIs fail, an error message is shown instead.
// 1️⃣ If the first API returns a fact,
// display the "explanation" key as "🌌 NASA Fact: [fact]".
// 2️⃣ If the second API returns a fact, display the "summary"
// key as "🚀 SpaceX: [fact]".
// 3️⃣ If the third API returns a fact, 
//display the number of astronauts in space as "👨‍🚀 
//There are currently [number] astronauts in space!".

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
//https://api.spacexdata.com/v4/company
//http://api.open-notify.org/astros.json

const urls = [ 
            'http://api.open-notify.org/astros.json',
            // 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
            'https://api.spacexdata.com/v4/company'
        ]

const fact_btn = document.querySelector('#fetchFactBtn');
const fact_cont = document.querySelector("#factContainer");

function spaceFact(){
    fact_cont.innerText = ''
    
    Promise.any(urls.map(url => fetch(url)))
    .then(response => response.json())
    .then(function(data){
        console.log(data);

        fact_cont.style.display = 'block'
        const p = document.createElement('p');

        if('number' in data){
            fact_cont.innerText = `There are currently ${data.number} astronauts in space!`
        }
        else if('summary' in data){
            fact_cont.innerText = `🚀 SpaceX: ${data.summary}`
        }
    })
}



















// async function spaceFact(){
//     try{
//         fact_cont.innerText = '';
//         const response = await Promise.any(urls.map(url => fetch(url)));
//         const data = await response.json();
//         console.log(data);

//         // check which API responded
//         fact_cont.style.display = 'block'
//         if ("explanation" in data) {
//             fact_cont.innerText = `🌌 NASA Fact: ${data.explanation}`;
//         } else if ("summary" in data) {
//             fact_cont.innerText = `🚀 SpaceX: ${data.summary}`;
//         } else if ("number" in data) {
//             fact_cont.innerText = `👨‍🚀 There are currently ${data.number} astronauts in space!`;
//         }

//     }
//     catch(err){
//         console.log(err);
//     }
// }

// function spaceFact(){
//     Promise.any(urls.map(url => fetch(url)))
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(err => console.log(err))

// }


fact_btn.addEventListener('click', function(){
    // console.log('cliked');
    spaceFact();
})