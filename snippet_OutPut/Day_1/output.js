// const user = { name :'Lydia', age:21}
// const admin = {admin:true,...user}
// console.log(admin)

    // [[0,1],[2,3]].reduce(
    //     (acc,cur) => {
    //         return acc.concat(cur);
    //     },
    //     [1,2]

    // );
    // 1.The initial value of the accumulator (acc) is set to [1, 2],
    //  as specified in the second argument of the reduce function.
    // 2.The first element of the array being reduced is [0, 1]. 
    // The concat method is called on the accumulator ([1, 2]) with 
    // the current element ([0, 1]) as an argument. This creates a 
    // new array [1, 2, 0, 1], which becomes the new value of the 
    // accumulator.
    // 3. The second element of the array being reduced is [2, 3]. 
    // The concat method is again called on the accumulator ([1, 2, 0, 1])
    //  with the current element ([2, 3]) as an argument. This creates a
    //  new array [1, 2, 0, 1, 2, 3], which becomes the final output of the reduce function.


    // for(var i=0;i<3;i++){
    //     setTimeout(()=>console.log(i),1)
    // }
    // This code will log the number 3 to the console three times. Here's why:

// 1. The for loop initializes a variable i to 0, and iterates as long as i is less than 3.

// 2. On each iteration of the loop, a setTimeout function is called with a callback function
// that logs the value of i to the console. The second argument to setTimeout is set to 1,
// which means the callback will be executed after 1 millisecond.

// 3.After setting up the setTimeout function, the loop increments i by 1 and continues with the 
// next iteration.

// Since the callbacks to setTimeout are executed after a 1 millisecond delay, the loop will finish
//  executing before any of the callbacks are called. At this point, the value of i is 3, since that
//   was the last value assigned to it in the loop. So when the callbacks are finally executed, they 
//   all log the value of i, which is 3


// function addToList(item,list){
    
//     return list.push(item);
    
// }

// const result = addToList('apple',['banana']);
// console.log(result);

// 1. This JavaScript code defines a function addToList that takes two arguments: an item to be added to a 
// list. The function adds the item to the end of the list using the push method, and then returns the new 
// length of the list.

// 2.In this particular example, the function is called with the arguments 'apple' and ['banana']. So the list 
// array starts out with a single element 'banana', and the function adds 'apple' to the end of the list using
//  push, resulting in the new list array ['banana', 'apple'].

// 3.The push method returns the new length of the array, which in this case is 2 (since the new array has two 
//     elements). Therefore, the variable result is assigned the value 2.

// 4.Finally, the code logs the value of result to the console using console.log, which will output 2 to the 
// console.

// function Person(firstName,lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person ('Lydia','Hallie');
// const ujjwal = Person ('ujjwal','singh')

// console.log(lydia)
// console.log(ujjwal)

// 1.This JavaScript code defines a Person constructor function that takes two parameters: 
// firstName and lastName. The function creates a new object with two properties, firstName
//  and lastName, and assigns the values passed in as parameters to these properties using
//   the this keyword.

// 2.The new keyword is then used to create two new Person objects: lydia and ujjwal.

// 3.The first object lydia is created correctly using the new keyword with the Person constructor 
// function, passing in the values 'Lydia' and 'Hallie' as the firstName and lastName parameters
//  respectively. This creates a new Person object with the firstName property set to 'Lydia'
//   and the lastName property set to 'Hallie'.

// 4.However, the second object ujjwal is not created correctly because the new keyword is not used to 
// call the Person constructor function. Instead, the function is called like a regular function 
// with the parameters 'ujjwal' and 'singh'. This creates two global variables firstName and lastName 
// with values 'ujjwal' and 'singh' respectively. Since the function does not return anything explicitly, 
// the variable ujjwal is assigned the value undefined.

// So when the code logs the values of lydia and ujjwal using console.log, the output 
// 1. Person { firstName: 'Lydia', lastName: 'Hallie' }
// 2.undefined


// const person ={
//     name : 'ujjwal',
//     age:21,
// };

// for(const [x,y] of Object.entries(person)){
//     console.log(x,y)
// }

// 1.This JavaScript code defines an object person with two properties: name and age,
//  and their respective values of 'ujjwal' and 21.

// 2.The code then uses a for...of loop to iterate through each key-value pair in the person
//  object using the Object.entries() method. The Object.entries() method returns an array of
//   key-value pairs from an object, which can then be destructured into separate variables using [x, y].

// 3.On each iteration of the loop, the code logs the variable x (which corresponds to the key in the key-value
//      pair) and the variable y (which corresponds to the value in the key-value pair) to the console using
//       console.log. output - name ujjwal age 21


// (()=>{
//     let x = (y=10)
// })();

// console.log(typeof x)
// console.log(typeof y)

// 1.This JavaScript code defines an immediately invoked function expression (IIFE) that sets a 
// variable x to the value of (y=10).

// 2.In JavaScript, the expression y=10 assigns the value 10 to the variable y, and also returns the value 10.
//  Therefore, the expression (y=10) sets the value of y to 10 and returns 10, which is then assigned to the 
//  variable x.

// 3.However, the let keyword used to define x inside the IIFE makes x only accessible within the scope of the IIFE.
//  Therefore, attempting to log the value of x outside the IIFE using console.log(typeof x) will result in a 
//  ReferenceError, because x is not defined in the global scope.

// 4.On the other hand, since y is not defined with any keyword (like let, var, or const), it is created as a 
// global variable, and can be accessed and logged to the console outside the IIFE using console.log(typeof y).

// So the output of this code will be:
// 1.undefined //
// number

// let x =1;
// function foo(){
//     x=2;
//     console.log(x)
// }
// setTimeout(foo,0);
// x=3;
// console.log(x)

// This is because the value of x is initially set to 1, then changed to 3 before the foo function is
//  executed asynchronously. After the synchronous code has finished executing, the foo function is
//   executed, setting the value of x to 2 and logging it to the console.


const firstPromise = new Promise((res,rej)=>{
    setTimeout(res,500,'one')
})

const secondPromise = new Promise ((res,rej)=>{
    setTimeout(res,100,'two')
})

Promise.race([firstPromise, secondPromise]).then(res=>console.log(res))


// 1.This JavaScript code creates two Promises using the Promise constructor, firstPromise and 
// secondPromise, which resolve to the values 'one' and 'two' respectively after a delay of 500ms 
// and 100ms using the setTimeout function.

// 2.The code then calls Promise.race([firstPromise, secondPromise]), which returns a new Promise that 
// resolves or rejects as soon as one of the Promises in the iterable resolves or rejects. 
// In this case, since the secondPromise resolves before the firstPromise, the new Promise
//  returned by Promise.race() resolves with the value 'two'.

// 3.Finally, the code logs the resolved value of the new Promise to the console using console.log(res).