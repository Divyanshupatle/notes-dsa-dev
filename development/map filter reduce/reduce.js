nums = [2,2,2];

Array.prototype.myReduce = function(callBack, initial){

    if(this == null || undefined){
        throw new Error("we can't procced for null or undefine");
    }

    if(typeof callBack !== 'function'){
        throw new TypeError('only takes callBack function');
    }

    if(Array.isArray(this) === true){
        let accumlator;
        let firstIndex;

        if(arguments.length === 1){
            accumlator = this[0];
            firstIndex = 1;
        }
        else{
            accumlator = initial;
            firstIndex = 0;
        }
    
        for(let i=firstIndex; i<this.length; i++){
            accumlator = callBack(accumlator, this[i]);
        }
    
        return accumlator;
    }
}

let newarr = nums.myReduce(function(acc, ele){
    acc = acc + ele;
    return acc;
}, 0);

console.log(newarr);