// function getName(){
//     var status = true
//     if(status){
//       const name = "ujjwal Singh"
//     }
//     console.log(name)
//   }
 
//   getName()


// function alpha(a=100){
//   ...
// }

// let ans = alpha()
// console.log(ans)

// function add(b){
//   const a=100;
//   a=b;
//   return a
// }

// console.log(add(100))

// let fname = "ujjwal";
// let Lname="Singh"
// const person = {fname,Lname}
// console.log(person)

// const email = "ujjwalsingh@gmail.com";
// let name = "ujjwal";

// email = "ujjwal@gmail.com"
// name = "ujjwal singh"

// console.log(email,name)

// const arr = ["ujjwal","singh","prakash"]

// arr[0]="chintu";
// console.log(arr)

///????

// function getName(){
//    name = "ujjwal singh";
  
// }

// getName()
// console.log(name)

///??

// How can you destructure the object passed inside the getData function?


// function getData({ username, password }) {
//   console.log(`Username: ${username}, Password: ${password}`);
// }

// getData({ username: "admin", password: "123445" });




// var name 
// console.log(name)

////?

// function getUrl(userId){
//   return `https://example.com/${userId}`
// }

// let url = getUrl("ujjwal")
// console.log(url)


////\\\\
// What is the output of the following?
// var str ="ujjwal";
// var {length}=str;

// console.log(length);

// What is the output of the following code?
// let arr =  ["a","b","c","d","e"]

// const func =([f,...r])=>r.reduce((a,c)=>a+c)+f

// console.log(func(arr))

////\\\\
// What is the output of the following

// console.log(name)
// var name = "ujjwal Singh"

///\\\\
// What is the output of the following?

// var arr = [1,2,3,4,5]

// arr.map(a=>a*5)
// console.log(arr)

/////\\\\\

// Are the functions same?
// const sum =(a,b)=>a+b;
// let add=sum(20,10)
// console.log(add)

// function sum(a,b){
//   a+b
// }
// let add = sum(10,20)
// console.log(add)

/////\\\

// What will be the output/

// function getname(){
//   var status = true;
//   if (status){
//     const name = "ujjwal"

//   }
//   console.log(name)
// }
// getname()

///\\\

// What is the output of the following

// console.log(
//   typeof[1,1,1,1]===typeof {val:1,val:1,val:1})

/////\\\\
// Which of the following is an implicit coercion?


// var prod= "10"*5; //   this is implicit coercion 
// console.log(prod)

// var join = "Hello " +5 +"th person"
// console.log(join)

// var b = String( 1024)
// console.log(b)


// const arr = ["ujjwal","singh","chintu"]

// arr[0]="gyan";
// console.log(arr)

// var ujjwal;

// console.log(ujjwal);

// console.log(name)
// var name = "ujjwal";


// var arr = [1,2,3,4,5]



// console.log(arr.map(a=>a*5))


// function getName(){
//     var status = true;

//     if(status){
//         var name ='masai'
//     }

//     console.log(name);
// }

// getName()

// console.log([1] === [1])

// What is the difference between LHS lookup and RHS lookup
// LHS looks for the existence of a variable whereas RHS looks for the history of that variable
// Both looks for variables and then values
// LHS looks for the variable container whereas RHS looks for the value of the variable (write option)
// LHS looks for assignment operator whereas RHS looks for the value to be assigned


// What is the output?


// function cont(x){
//     var y = x*10;
//     function val(z){
//         console.log(x, y,z);
//     }

//     val(y*5)
// }
// cont(3)

// undefined undefined undefined
// undefined 30 150
// Refernce Error
// undefined undefined 150
// 3 30 150
// Other:

// How does Javascript engine handle collision of module imports?
// ES6 has inbuilt methods
// global scoping
// each of the modules are wrapped in an IIFE (write option)
// There wont be collisions when importing modules

// console.log(typeof [])


// What is the output?
// function alpha(){
//     var  x =100;
//     this.beta()
// }

// function beta(){
//     var x=200;
//     console.log(this.x)

// }

// alpha()
// undefined
// ReferenceError
// 100
// 200
// null


// What is the output?

// var name = "Ajay";
// function personDetails(){
//     console.log(this.name)
// }

// var person ={
//     name : "Haren",
//     company:"masai",
//     print:personDetails()
// }

// person.print()

// Ajay
// Haren
// ReferenceError
// SyntaxError
// TypeError
