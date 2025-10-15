function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(() => resolve({id: 1, name : "monu"}), 1000);
    })
}

function fetchUserPosts(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve({post:'p1', post1 : 'p2'}))
    })
}

Promise.all([fetchUserData(), fetchUserPosts()])
.then((result) => {
    console.log(result);
    console.log(result[0]);
    console.log(result[1]);
});