const stars = document.querySelectorAll(".star");

// add event listener to all stars
stars.forEach(function(star){

    // star clicked call updateStar fn with start number
    star.addEventListener('click', function(){ 
        const starNum = parseInt(star.getAttribute("data-value"));
        updateStar(starNum);
    })
})

// go to each star chech starNumber if <= star cliked update it's color 
function updateStar(starNum){
    const rating = document.querySelector('#rating');
    stars.forEach(function(star){
        const value = parseInt(star.getAttribute("data-value"));
        star.classList.toggle('filled', value <= starNum);

        rating.innerText = starNum;
    })

}
