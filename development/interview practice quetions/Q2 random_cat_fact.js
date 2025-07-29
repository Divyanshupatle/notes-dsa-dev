// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.


// ----------------------------------------with promise------------------------------------


//   function fetchCatFact() {
//     // Write code here...
//     fetch("https://catfact.ninja/fact")


//  '''''''''''''''''''''''''''''''''with traditional(normal) function
//     // .then(function(response){
//     //   return response.json()
//     // })
//     // .then(function(data){
//     //   console.log(data);
//     // })


//------------------------------- with arrow function no return keyword riquired------------


//     .then((response) => response.json())
//     .then(data => console.log(`fact => ${data.fact}`))
//     .catch(err => console.log(err))
    
//   }


//--------------------------------------------with async/await------------------------------


// async function fetchCatFact(params) {
//   const response = await fetch("https://catfact.ninja/fact");
//   const data = await response.json();
//   console.log(data.fact);
// }
  

// Usage:
fetchCatFact();