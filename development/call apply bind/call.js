let person1 = {
    name : "adam",
    age : 23,

    printName : function(){
        console.log(`my name is ${this.name}`);
    },

    printAge: function (){
        console.log(`i am ${this.age} years old`);
    },

    printBalance: function (){
        console.log(`my balance is ${this.balance} rs`);
    }
}

let person2 = {
    name : "john",
    age : 23,
    balance: 2_50_000

}


// person1.printName();
// person1.printAge();
// person1.printBalance();
person1.printBalance.call(person2);