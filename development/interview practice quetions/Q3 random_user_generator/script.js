// Task
// Create a random user generator using the "https://randomuser.me/api/" API. 
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.


async function fetchRandomUser() {
    // Write code here...
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const userDetail = data.results[0];

    const Name = `${userDetail.name.title} ${userDetail.name.first} ${userDetail.name.last}`;
    const Email = userDetail.email;
    const Country = userDetail.location.country;

    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#userEmail');
    const userCountry = document.querySelector('#userCountry');

    userName.textContent =      `Name:    ${Name}`;
    userEmail.textContent =     `Email:   ${Email}`;
    userCountry.textContent =   `Country: ${Country}`;

    const userCard = document.querySelector('#userCard');
    userCard.style.display = 'block';
    // console.log(Country);
    // console.log(userDetail);
}

const randomUser =  document.querySelector('#fetchUserBtn');
randomUser.addEventListener('click', function(){
    fetchRandomUser();
})