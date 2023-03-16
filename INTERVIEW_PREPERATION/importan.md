Q-:What is synchronous and asynchronous JavaScript?

Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation is dependent on the completion of the one before it.



Q-:Is JavaScript synchronous or asynchronous?
Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming.

Q-: Is callback synchronous or asynchronous?
A callback function executes when an asynchronous operation completes. Here is an example of how a setTimeout function works:


Q-:What is callback vs promise?
  A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future. In JavaScript, a promise is an object and we use the promise constructor to initialize a promise.

  Q-: Why we use async and await in JavaScript?
    Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.

Q-:Is multithreading asynchronous in JavaScript?
   Async programming is about non-blocking execution between functions, and we can apply async with single-threaded or multithreaded programming. So, multithreading is one form of asynchronous programming.

Q-:What is the main difference between synchronous and asynchronous?
  Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time. With synchronous learning, participants can receive immediate feedback. With asynchronous learning, the participants can learn at their own pace.   

Q-:What are 3 states of promises?
   pending: initial state, neither fulfilled nor rejected.
  fulfilled: meaning that the operation was completed successfully.
  rejected: meaning that the operation failed.

Q-:What is event loop in JavaScript?
  Event loop in JavaScript is a mechanism through which the 'calls waiting for execution' in the callback queue/job queue can be put on the call stack. For any event from the callback queue/job queue to come to call stack, the call stack will have to be empty.

Q-:What is difference between async and await?
   Async functions return a promise. This promise state can be either resolved or rejected. 3. Await suspends the called function execution until the promise returns a result for that execution.  

Q-:Why is async await better than callbacks?
   With async/await, the code inside an async function is executed in a synchronous-like way, making it more readable and easier to understand. It also helps to avoid the callback hell problem. 

Q-:What is API and how it works?
   API stands for “Application Programming Interface.” An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you