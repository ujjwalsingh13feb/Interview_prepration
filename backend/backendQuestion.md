# What is the default I/O model used in Node.js?

In Node.js, when your application needs to perform Input/Output (I/O) operations, it can either do it in a blocking or non-blocking way.

When an I/O operation is performed in a blocking way, the application waits for the operation to complete before proceeding to the next operation. It's like standing in a queue at a ticket counter - you can't move on to the next task until your turn comes.

On the other hand, when an I/O operation is performed in a non-blocking way, the application doesn't wait for the operation to complete before moving on to the next operation. It's like buying a ticket from a vending machine - you can move on to the next task as soon as you've bought your ticket.

Node.js is designed to use a non-blocking I/O model by default, which means that it can handle many operations simultaneously without waiting for any one of them to complete. This allows for better scalability and performance in applications that require handling many concurrent requests, such as web servers.

However, there may be situations where blocking I/O is necessary, such as when working with certain types of legacy code or when performing certain types of I/O operations. In such cases, Node.js provides APIs for performing blocking I/O operations.

# What is the event loop in Node.js?

The event loop is a central component of Node.js that manages all the asynchronous operations in the application. It's like a traffic controller that ensures that all the different parts of the application can run smoothly without getting in each other's way.

The event loop works by constantly monitoring a queue of tasks, and executing each task in turn as soon as it becomes available. When an asynchronous operation is started, it's added to the queue, and the event loop moves on to the next task. When the operation is complete, a callback is added to the queue, and the event loop executes the callback as soon as it becomes available.

This allows Node.js to handle many concurrent operations efficiently, without blocking the main thread or slowing down the application. The event loop is one of the key features that makes Node.js so powerful and popular for building high-performance, scalable web applications.

# What is concurrency in Node.js?
*
Concurrency in Node.js refers to the ability to handle multiple tasks or requests simultaneously. Node.js is designed to support a high level of concurrency through its event-driven, non-blocking I/O model.

In simpler terms, this means that Node.js can handle many tasks at the same time, without waiting for one task to finish before starting another. This is possible because Node.js uses an event loop that constantly checks for new tasks or events, and processes them as they become available.

By allowing multiple tasks to be executed simultaneously, Node.js can provide better performance and scalability for web applications. This is particularly useful for applications that need to handle a large number of concurrent connections or requests, such as web servers or real-time chat applications.

# Which method in Node.js can be used to cancel a Timeout or Immediate object?

In Node.js, the clearTimeout() method can be used to cancel a Timeout object, and the clearImmediate() method can be used to cancel an Immediate object.

The setTimeout() method is used to schedule a function to be executed after a specified amount of time, and it returns a Timeout object that can be used to cancel the scheduled function using the clearTimeout() method.

Similarly, the setImmediate() method is used to schedule a function to be executed in the next iteration of the event loop, and it returns an Immediate object that can be used to cancel the scheduled function using the clearImmediate() method.

Both clearTimeout() and clearImmediate() take the object returned by their corresponding set methods as an argument, and calling these methods will prevent the function from being executed.

# What is throughput?
*
Throughput refers to the amount of data or work that can be processed by a system within a certain amount of time. It is a measure of how much work can be done by a system per unit of time, and is often used to evaluate the performance and efficiency of systems such as computers, networks, or manufacturing processes. A higher throughput indicates that the system can handle more work in a given amount of time, while a lower throughput suggests that the system may be a bottleneck for performance.

# What is libuv?
*
Libuv is an open-source library that provides cross-platform asynchronous I/O operations, networking support, and other system-related functionality for Node.js and other software applications. It helps to abstract away differences between different operating systems and provides a unified API for handling I/O events, timers, and signals in a non-blocking manner.

Libuv serves as the underlying event loop that powers Node.js, allowing it to handle large numbers of concurrent connections and perform efficient I/O operations without blocking the main thread. It also provides features such as thread pool management and inter-process communication, making it a powerful tool for building high-performance and scalable applications.

# What are the different phases involved in event loop?
*The event loop in Node.js has several phases that work together to handle different types of operations in a non-blocking manner.

1.Timer Phase: This phase is responsible for executing the callbacks scheduled using the setTimeout() and setInterval() methods.

2 .I/O Callback Phase: In this phase, I/O related callbacks, such as those for network requests, file system operations, and DNS lookups are executed.

3.Idle, Prepare Phase: These phases are used to prepare the event loop for the next round of operations, such as updating internal state and preparing new I/O events.

4 .Poll Phase: This phase retrieves I/O events and executes their callbacks, or waits for new I/O events to occur.

5 .Check Phase: This phase is used to execute callbacks scheduled using setImmediate().

6.Close Callbacks Phase: In this phase, any callbacks scheduled using process.nextTick() are executed, and any closed resources, such as file descriptors and sockets, are cleaned up.

These phases work together to ensure that Node.js can handle large numbers of concurrent operations without blocking the main thread, resulting in high performance and scalability.

example:- I/O phase, Timers phase, Check phase, Event phase, Close callbacks phase

# What are timers in Node.js?
*
In Node.js, timers are a way to schedule the execution of a piece of code at a specific time or after a certain amount of time has passed. There are two types of timers: setTimeout and setInterval. setTimeout is used to execute a function once after a specified amount of time has passed, while setInterval is used to execute a function repeatedly at a given interval. Timers are commonly used for tasks such as executing a function after a delay, checking for new data periodically, or updating a user interface at regular intervals.


# What is common.js? how is it different from es modules?


CommonJS is a module system used in Node.js that allows developers to define and export modules in their code, which can then be required and used in other parts of the application. CommonJS uses a synchronous approach for loading modules, which means that modules are loaded one at a time and the code waits for each module to load before continuing execution.

ES modules, on the other hand, is a newer standard for defining and importing modules in JavaScript that is built into modern web browsers and supported in Node.js. ES modules use an asynchronous approach for loading modules, which means that modules are loaded in parallel and the code can continue to execute while modules are being loaded.

The main difference between CommonJS and ES modules is in how they handle module loading and importing. While CommonJS is synchronous and focused on server-side development, ES modules are asynchronous and designed for use in both server-side and client-side environments. Additionally, ES modules have more advanced features, such as the ability to import and export specific functions or variables, that are not available in CommonJS.

# How many stages are there in creating an Express application?
*
There are three stages in creating an Express application:

Installing Express and other necessary packages using npm.
Setting up the application's middleware and routes, which define how the application handles incoming requests and sends responses.
Starting the server to listen for incoming requests and respond to them accordingly.

# What is static routing?
*
Static routing is a type of routing where the path and destination of a network packet are pre-configured by the network administrator, and the router forwards the packet based on this pre-defined information. In other words, it is a routing method where the routing table is manually set up and does not change based on the network traffic. Static routing is often used in small networks where there are only a few routers and network traffic is predictable.


# What is the app instance in Express?
*
The app instance in Express is the central object that represents your web application. It is responsible for defining the routes and handling the requests and responses that your application will receive and send.

Think of it like a central hub that receives incoming requests from clients and dispatches them to the appropriate code in your application to handle those requests. The app instance provides methods for defining routes and middleware, which are functions that can modify the incoming requests or outgoing responses in some way.

For example, you can define a route that will respond with a specific page when the client navigates to a certain URL. You can also define middleware that will authenticate the user before allowing them to access certain parts of your application.

Overall, the app instance is a key part of building an Express application, and understanding how to use it effectively is essential to building a robust and performant web application.


# What is the purpose of the next() function in middleware?
*
The next() function in middleware is like a button that tells the computer to move to the next step of a program. It is used to tell Express that the middleware function has finished its work and that it can move on to the next function. This helps to create a chain of functions that can work together to handle a request in an organized way.


