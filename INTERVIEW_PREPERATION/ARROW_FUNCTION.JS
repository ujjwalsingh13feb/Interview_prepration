
// What is a arrow function?
// An arrow function expression is a compact alternative to 
// a traditional function expression, with some semantic differences
//  and deliberate limitations in usage: Arrow functions don't have 
//  their own bindings to this , arguments , or super , and should
//   not be used as methods


// What does => mean in JS?
// It's a new feature that introduced in ES6 and is called arrow function. 
// The left part denotes the input of a function and the right part the 
// output of that function.


// What is the advantage of arrow function?
// Benefits of Arrow Functions. There are two major
//  benefits of using Arrow functions. One is that it's
//   a shorter syntax and thus requires less code. 
// The main benefit is that it removes the several 
// pain points associated with the this operator.


// What is arrow function vs normal function?
// Image result
// In regular JavaScript functions, arguments keywords can be
//  used to access the passed arguments when the function is invoked. But,
//  arrow functions do not have their own arguments and it uses 
//  the arguments from the outer function


// // Traditional anonymous function
// (function (a) {
//     return a + 100;
//   });
  
//   // 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   };
  
//   // 2. Remove the body braces and word "return" — the return is implied.
//   (a) => a + 100;

  
//   // 3. Remove the parameter parentheses
//  console.log( a => a + 100);
//  a()







// const obj = {
//     count: 10,
//     doSomethingLater() {
//       setTimeout(function () {
//         // the function executes on the window scope
//         this.count++;
//         console.log(this.count);
//       }, 300);
//     },
//   };
  
//   obj.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope.



// const obj = {
//     count: 10,
//     doSomethingLater() {
//         // The method syntax binds "this" to the "obj" context.
//         setTimeout(() => {
//             // Since the arrow function doesn't have its own binding and
//             // setTimeout (as a function call) doesn't create a binding
//             // itself, the "obj" context of the outer method is used.
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     },
// };

// obj.doSomethingLater(); // logs 11



// const arrowfun = name =>{
//     console.log("ujjwal Singh");
// }

// arrowfun()


// const arrowfun =( name,vill,post) =>{
//     console.log("Hi my name is"+" "+name+" "+vill+" "+post);
// }

// arrowfun("ujjwal singh","Rampur Daud","kuchayKot")


let arrowfunmain={
    name:"ujjwal Singh",
    exp:12,
    role:"softwere Developer",
   
   shownow:function(){
    let that=this
    // console.log(this)

    // setTimeout(function(){
    //     // console.log(this)
    //     // console.log(that)
    //     // console.log(`my name is ${this.name}\n my exp is ${this.exp} years`)
    //     console.log(`my name is ${that.name}\n my exp is ${that.exp} years`)
    // })

    // same thing with arrow function

    setTimeout(()=>{
        // console.log(this)
        // console.log(that)
        // console.log(`my name is ${this.name}\n my exp is ${this.exp} years`)
        console.log(`my name is ${this.name}\n my exp is ${this.exp} years`)
    })

   }
}


arrowfunmain.shownow()
