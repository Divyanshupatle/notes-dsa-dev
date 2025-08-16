const str = "my name is divyanshu patle"

function firstLetterUppeCase(){
    const newStr = str.split(" ").map(e => e[0].toUpperCase().concat(e.slice(1))).join(" ");
    console.log(newStr);
}

firstLetterUppeCase();