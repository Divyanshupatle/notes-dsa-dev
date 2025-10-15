nums = [1,2,3,4,5,5,6];

Array.prototype.myFilter = function(callBack){

    if(this == null || undefined){
        throw new Error("we can't procced for null or undefine");
    }

    if(typeof callBack !== 'function'){
        throw new TypeError('only takes callBack function');
    }

    if(Array.isArray(this) === true){
        let arr = [];
    
        for(let i=0; i<this.length; i++){
            if(callBack(this[i])){
                arr.push(this[i]);
            }
        }
    
        return arr;
    }
}

let newarr = nums.myFilter(x => x % 2 !== 0);

console.log(newarr);