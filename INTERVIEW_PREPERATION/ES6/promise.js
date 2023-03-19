// ## `async await`

// The purpose of async / await is to simplify using promises synchronously, 
// and to perform some behavior on a group of Promises

// An async function can contain an await expression that pauses the execution
//  of the async function to wait for the passed Promise's resolution, then 
//  resumes the async function's execution and evaluates as the resolved value.

// The await keyword is only valid inside async functions.If you use it outside 
// of an async function's body, you will get a SyntaxError.


// It is important to do error handling within the async function.

// Generally with synchronous code we use something called try catch finally.

// But the above fails if it is in asynchronous land, but with async await,

// we can use try catch to handle errors in even asynchronous code.