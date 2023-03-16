// In JavaScript, a promise is a way to handle asynchronous operations,
//  such as fetching data from a server or performing a time-consuming task.
//   A promise represents a value that may not be available yet, but will be 
//   at some point in the future.


// Create a promise that resolves after 1 second
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data loaded successfully!');
    }, 5000);
  });
  
  // Use the promise


  myPromise.then((result) => {
      console.log(result); // prints "Data loaded successfully!"
    })
    .catch((error) => {
      console.log(error); // prints any errors that occurred
    });
  