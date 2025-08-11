// const animals = ["monkey", "dog", "cow"]
// console.log(animals.push(20))
// console.log(animals) // [ 'monkey', 'dog', 'cow' ]
// console.log(animals[-2]);



//----------------------------- exersize 1 ---------------------------------------
// const greeting = "hello nice to meet you!"

// for(let i=0; i<greeting.length; i++){
//     console.log(greeting[i]);    // work
// }










// // naive approach TC: O(n^2)
// function twoSum(arr, target){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return [i, j];
//             }
//         }
//     }
// }

// // better approach TC: O(n)  two pointer
// function twoSum(arr, target){
//     let i = 0;
//     let j = arr.length-1;

//     while(i < j){
//         if(arr[i] + arr[j] == target) return [i, j];

//         if(arr[i] + arr[j] < target){
//             i++;
//         }
//         else{
//             j--;
//         }
//     }
// }

// // optimised approach O(logn)
// function twoSum(arr, target){
//     const map = new Map();  //set, get, has, delete

//     for(let i=0; i<arr.length; i++){
//         let searchNum = target - arr[i];
//         if(map.has(searchNum)){
//             let index = map.get(searchNum);
//             return [index, i];
//         }
//         else{
//             map.set(arr[i], i);
//         }
//     }

//     return [];
// }

// const arr = [2,7,11,15];
// console.log(twoSum(arr, 18));

//--------------------------------- sliding window --------------------------------

// // naive approach
// function slidingWindow(arr, k){
//     const ans = [];
//     const n = arr.length;

//     for(let i=0; i<=n-k; i++){
//         let p = i;
//         let sum = 0;
//         for(let j=1; j<=k ; j++){
//             sum += arr[p++];
//         }
//         ans.push(sum);
//     }

//     return ans;
// }

// // optimised approach O(n)
// function slidingWindow(arr, k){
//     const ans = [];
//     const n = arr.length;
//     let sum = 0;

//     if(n < k) return [];

//     // first window
//     for(let i=0; i<k; i++){
//         sum += arr[i];
//     }

//     ans.push(sum)
//     for(let i=k; i<n; i++){
//         sum -= arr[i-k];
//         sum += arr[i];
//         ans.push(sum);
//     }

//     return ans;
// }

// arr = [2, 1, 5, 1, 3, 2]  
// k = 3  

// console.log('runing...');
// console.log(slidingWindow(arr, k));

//--------------------------------- Variable-Size Sliding Window ---------------------------
// naive approach
function smallestSubArray(arr, k){
    let n = arr.length;
    let size = n;
    let sizeFlag = true;

    for(let s=0; s<n; s++){
        for(let e=s; e<n; e++){
            let sum = 0;
            for(let p=s; p<=e; p++){
                sum += arr[p];

                if(sum >= k && e-p+1 < size){
                    sizeFlag = false;
                    size = (e-p+1);
                }
            }
        }
    }

    if(sizeFlag){
        return 0;
    }

    return size;
}

const arr = [2, 1, 5, 2, 3, 2]
const s = 2
console.log(smallestSubArray(arr, s));