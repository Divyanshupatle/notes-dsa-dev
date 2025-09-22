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
// // naive approach
// function smallestSubArray(arr, k){
//     let n = arr.length;
//     let size = n;
//     let sizeFlag = true;

//     for(let s=0; s<n; s++){
//         for(let e=s; e<n; e++){
//             let sum = 0;
//             for(let p=s; p<=e; p++){
//                 sum += arr[p];

//                 if(sum >= k && e-p+1 < size){
//                     sizeFlag = false;
//                     size = (e-p+1);
//                 }
//             }
//         }
//     }

//     if(sizeFlag){
//         return 0;
//     }

//     return size;
// }

// const arr = [2, 1, 5, 2, 3, 2]
// const s = 2
// console.log(smallestSubArray(arr, s));


//------------------------------- subarray intution building------------------------------

// function slidingWindow(arr, size){
//     let i=0;
//     let j=size-1;

//     while(j < arr.length){
//         process.stdout.write(`[`)
//         for(let k=i; k<=j; k++){
//             process.stdout.write(arr[k].toString() +" ")
//         }
//         process.stdout.write(`]`)
//         i++;
//         j++;
//     }
//     console.log();
// }
// function subArrayPrinting(arr){
//     for(let i=1; i<=arr.length; i++){
//         slidingWindow(arr, i);
//     }
// }

// const arr = [1,2,3,4]
// subArrayPrinting(arr);


// function subArrayPrinting(arr){
//     const n = arr.length;

//     for(let s=0; s<n; s++){
//         for(let e=s; e<n; e++){
//             for(let k=0; k<=e; k++){
//                 process.stdout.write(arr[k].toString() +" ");
//             }
//             console.log();
//         }
//     }
// }
// const arr = [1,2,3,4]
// subArrayPrinting(arr);

//-------------------------- smallest subArray sum >= target -------------------------------

// // naive approach O(n^3)
// function smallestSubArraySum(arr, t){
//     const n = arr.length;
//     let leastSubArraySize = n+1;

//     for(let s=0; s<n; s++){
//         for(let e=s; e<n; e++){
//             let sum = 0
//             for(let k=s; k<=e; k++){
//                 sum += arr[k];
//                 if(sum >= t && (k-s+1) < leastSubArraySize ){
//                     leastSubArraySize = (k-s+1);
//                 }
//             }

            // if(sum >= t && (e-s+1) < leastSubArraySize ){ // it also work
            //     leastSubArraySize = (e-s+1);
            // }
//         }
//     }

//     return leastSubArraySize
// }

// // better approach O(n^2)
// function smallestSubArraySum(arr, t){
//     const n = arr.length;
//     let leastSubArraySize = n+1;

//     for(let s=0; s<n; s++){
//         let sum = 0
//         for(let e=s; e<n; e++){
//             sum += arr[e];
//             if(sum >= t && (e-s+1) < leastSubArraySize ){
//                 leastSubArraySize = (e-s+1);
//             }
//         }
//     }

//     return leastSubArraySize
// }

// const arr = [2, 1, 5, 2, 3, 2], target = 11
// console.log(smallestSubArraySum(arr, target));

// // optimal approach O(n) sliding window
// function smallestSubArraySum(arr, t){
//     const n = arr.length;
//     let minArrSize = n+1;

//     let i=0;
//     let j=0;
//     let sum = 0;
//     while(j < n){
//         if(sum < t){
//             sum += arr[j++];
//         }
//         else{
//             sum -= arr[i++];
//         }

//         if(sum >= t && j-i < minArrSize) minArrSize = j-i;
//     }
//     return minArrSize;
// }
// const arr = [2, 1, 5, 2, 3, 2], target = 11
// console.log(smallestSubArraySum(arr, target));

//------------------------ cleaner version -----------------------------------------------

// // cleaner version
// function smallestSubArraySum(arr, target) {
//     let n = arr.length;
//     let minLen = n + 1;
//     let sum = 0;
//     let start = 0;

//     for (let end = 0; end < n; end++) {
//         sum += arr[end];

//         // shrink the window while sum >= target
//         while (sum >= target) {
//             minLen = Math.min(minLen, end - start + 1);
//             sum -= arr[start];
//             start++;
//         }
//     }

//     return minLen === n + 1 ? 0 : minLen;
// }

// const arr = [2, 1, 5, 2, 3, 2];
// const target = 7;
// console.log(smallestSubArraySum(arr, target)); // 2

// let userName = prompt("Enter your name"); // in browser
// console.log(userName);

// const arr = new Array(5)

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// const fs = require('fs');
// read, write, append, delete, update, rename

// fs.writeFileSync('f1.txt', "first file created");
// fs.appendFileSync('f1.txt', " hello \n monu");
// fs.unlinkSync('f1.txt');

