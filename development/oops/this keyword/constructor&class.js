// creating constructor function Pizza
const pizza1 ={
    topping: ['chees', 'peproni'],
    size: 'medium',
    crustType : 'thin'
}

function Pizza(topping, size, crustType){
    this.toping = topping;
    this.size = size;
    this.crustType = crustType
}

// creating object using cunstructor
const pizza2 = new Pizza(['chees', 'peproni'], 'medium', 'thin');
console.log(pizza2); 