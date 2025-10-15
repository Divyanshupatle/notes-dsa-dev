nums = [1,2,3,4,5,5,6];

Array.prototype.myMap = function(callBack){

    if(this == null || this == undefine){
        throw new Error("we can't procced for null or undefine");
    }

    if(typeof callBack !== 'function'){
        throw new TypeError('only takes callBack function');
    }

    if(Array.isArray(this) === true){
        let arr = [];
    
        for(let i=0; i<this.length; i++){
            arr.push(callBack(this[i]));
        }
    
        return arr;
    }
}

let newarr = undefine.myMap(x => x*x);

console.log(newarr);