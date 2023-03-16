// What is event loop explain it?

// JavaScript has a runtime model based on an event loop, 
// which is responsible for executing the code, collecting 
// and processing events, and executing queued sub-tasks.

// In JavaScript, the event loop is a mechanism that allows asynchronous code to be executed in a non-blocking way. It is responsible for handling events and executing tasks in a specific order.

// Here's how it works in simple words:

// JavaScript code is executed in a single thread, meaning that it can only do one thing at a time.
// When an asynchronous task is encountered, such as making an HTTP request or waiting for a timer to expire, the task is placed in a queue.
// The event loop continuously checks the queue for tasks that are ready to be executed.
// When a task is ready, it is taken out of the queue and executed.
// After the task is executed, any callbacks or promises associated with it are placed back into the queue for later execution.
// This process continues indefinitely, allowing the program to handle multiple tasks simultaneously without blocking the main thread.