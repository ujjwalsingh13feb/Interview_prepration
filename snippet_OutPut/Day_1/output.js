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

