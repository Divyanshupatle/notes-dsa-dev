// non-strict

// console.log(this); // {}

// function thisInsideFunction(){
//     console.log(this);
// }

// thisInsideFunction(); // global object

// let obj = {
//     name : 'adam',
//     fn : function (){
//         console.log(this);
//     }
// }

// obj.fn(); // obj itself


// ----------------------- nested function-------------------------------------------

// let obj = {
//     name : 'adam',
//     fn : function(){
//         function fn2(){
//             console.log(this);
//         }

//         fn2();
//     }
// }

// obj.fn();



//============================================ use strict =======================================
'use strict'

// console.log(this); // {}

// function test(){
//     console.log(this); // undefined
// }

// test();

// ------------------------------------------ object -----------------------------------

// let obj = {
//     name : 'adam',
//     fn : function (){
//         console.log(this);
//     }
// }

// obj.fn(); // obj itself


// ----------------------- nested function-------------------------------------------

// let obj = {
//     name : 'adam',
//     fn : function(){
//         function fn2(){
//             console.log(this); // undefined
//         }

//         fn2();
//     }
// }

// obj.fn();

// ----------------------- exersize -----------------------
// function checkThis() {
//    "use strict";
//     console.log(this);
 
//   }
  
//   checkThis();


// const user = {
//     name: "Alice",
//     greet: function () {
//       setTimeout(function () {
//         console.log(this.name); // undefined
//       }, 1000);
//     }
//   };
  
//   user.greet();


  const counter = {
    count: 0,
    start: function () {
      setInterval(function () {
        this.count++;
        console.log(this.count); // 1
      }, 1000);
    }
  };

  